function saveInput(id) {
    const value = document.getElementById(id).value;
    localStorage.setItem(id, value);
}

// Load input values from local storage
function loadInputs() {
    const inputs = ['email', 'password'];
    inputs.forEach(id => {
        if (localStorage.getItem(id)) {
            document.getElementById(id).value = localStorage.getItem(id);
        }
    });
}


function login_pop_up(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let signup = 0;
    if (email == ""){
        alert("Please enter your email.");
        return signup = false;
    }
    else if (password == ""){
        alert("Please enter your password.");
        return signup = false;
    }
    else if (password.length < 8){
        alert("Password must have 8 or more characters.");
        return signup = false;
    }
    else if (password != "password"){
        alert("Note: The login and signin feature is just a fake feature, your inputs are not recorded and will not be stored, you may explore as you want");
    }
     else if (email != "email"){
        alert("Note: The login and signin feature is just a fake feature, your inputs are not recorded and will not be stored, you may explore as you want");
    }
    else{
        alert("Note: The login and signin feature is just a fake feature, your inputs are not recorded and will not be stored, you may explore as you want");
        return signup = true;
    }
    }
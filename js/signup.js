function saveInput(id) {
    const value = document.getElementById(id).value;
    localStorage.setItem(id, value);
}

// Load input values from local storage
function loadInputs() {
    const inputs = ['username', 'email', 'password'];
    inputs.forEach(id => {
        if (localStorage.getItem(id)) {
            document.getElementById(id).value = localStorage.getItem(id);
        }
    });
}


function login_pop_up(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let signup = true;
    if (username == ""){
        alert("Please enter your username.");
        return signup = false;
    }
    else if (password == "" && email == ""){
        alert("Please enter your email or password.");
        return signup = false;
    }
    else if(email == ""){
        alert("Please enter your email.");
        return signup = false;
    }
    else if (!email.includes('@gmail.com')){
        alert("Email must have an email domain.");
        return signup = false;
    }
    else if(email == ""){
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
    else{
        alert("Note: The login and signin feature is just a fake feature, your inputs are not recorded and will not be stored, you may explore as you want");
        window.location.href = "../html/login.html";
        return signup = true;
    }
}

function info(){
    alert("Note: The login and signin feature is just a fake feature, your inputs are not recorded and will not be stored");
}
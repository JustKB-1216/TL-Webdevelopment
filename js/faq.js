function toggleAnswer(id) {
    const answer = document.getElementById(`answer-${id}`);
    if (answer.classList.contains('show')) {
        answer.classList.remove('show');
    } else {
        answer.classList.add('show');
    }
}
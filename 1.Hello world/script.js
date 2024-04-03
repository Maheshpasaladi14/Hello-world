document.addEventListener("DOMContentLoaded", function() {
    const btnElement = document.querySelector('button');
    const spanElement = document.querySelector('h1 span');

    btnElement.addEventListener('click', () => {
        const yourName = prompt('What is your name?');
        spanElement.innerText = yourName;
    });
});

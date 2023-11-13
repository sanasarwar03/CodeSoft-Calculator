let screen = document.querySelector(".display")
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.innerText = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.innerText = screenValue;
        }
        else if (buttonText == '=') {
            
            screen.innerText = eval(screenValue);
            screenValue = ""
        }
        else {
            screenValue += buttonText;
            screen.innerText = screenValue;
        }

    })
}


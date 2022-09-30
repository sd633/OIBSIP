let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', function (e) {
        buttonInput = e.target.innerText;
        if (buttonInput == 'X') {
            buttonInput = '*';
            screenValue += buttonInput;
            screen.value = screenValue;
        }
        else if (buttonInput == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonInput == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonInput;
            screen.value = screenValue;
        }

    })
}

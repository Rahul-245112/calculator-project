
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML === 'AC') {
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.id === 'sq') {
      // Check if the button is "sq"
      if (string !== "") {
        // If there's a number entered, square it
        const number = eval(string);
        string = (number * number).toString();
        document.querySelector('input').value = string;
      }
    } else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});

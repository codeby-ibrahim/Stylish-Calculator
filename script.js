const display = document.getElementById("display");

    function appendValue(value) {
      if (display.innerText === "0") {
        display.innerText = value;
      } else {
        display.innerText += value;
      }
    }

    function clearDisplay() {
      display.innerText = "0";
    }

    function deleteLast() {
      if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
      } else {
        display.innerText = "0";
      }
    }

    function calculate() {
      try {
        const result = eval(display.innerText.replace(/÷/g, "/").replace(/×/g, "*"));
        display.innerText = result;
      } catch (error) {
        display.innerText = "Error";
      }
    }
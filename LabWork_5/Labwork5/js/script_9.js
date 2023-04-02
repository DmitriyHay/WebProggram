
function add() {
    num1 = parseInt(document.getElementsByName("num1")[0].value);
    num2 = parseInt(document.getElementsByName("num2")[0].value);
    result = num1 + num2;
    alert(result);
  }
  
  function sub() {
    num1 = parseInt(document.getElementsByName("num1")[0].value);
    num2 = parseInt(document.getElementsByName("num2")[0].value);
    result = num1 - num2;
    alert(result);
  }
  
  function mul() {
    num1 = parseInt(document.getElementsByName("num1")[0].value);
    num2 = parseInt(document.getElementsByName("num2")[0].value);
    result = num1 * num2;
    alert(result);
  }
  
  function div() {
    num1 = parseInt(document.getElementsByName("num1")[0].value);
    num2 = parseInt(document.getElementsByName("num2")[0].value);
    if (num2 === 0) {
      alert("Error");
    } else {
      cresult = num1 / num2;
      alert(result);
    }
  }

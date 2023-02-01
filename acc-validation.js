function validateAccount(inputText) {
    var accFormat = /^[_a-z0-9]{6,}$/;
    if (accFormat.test(inputText.value)) {
      alert("Valid account address!");
      document.form2.text2.focus();
      return true;
    } else {
      alert("You have entered an invalid account!");
      document.form2.text2.focus();
      return false;
    }
  }
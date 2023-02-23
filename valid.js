function check() {
  const fname = document.getElementById("Fn");
  const lname = document.getElementById("ln");
  const email = document.getElementById("em");
  let iserr = false;

  if (fname.value.length < 2 || lname.value.length < 2) {
    alert(" atleast 2 characters required");
    iserr = true;
    console.log("iserr =", iserr);
  }
  const checkvar = /^[0-9][a-z]+@[A-Z]+(.[a-z][a-z]+)$/;
  let erInmail = false;
  console.log(email);
  //3. Email (Should contain @ and ., At least two characters after last .), Success Alert if everything valid.
  if (email.value.match(checkvar)) {
    erInmail = true;
    alert("email should contain @.");
    document.form1.text1.focus();
  }
  if (!iserr && !erInmail) {
    alert("success");
    console.log("iserr=", iserr + " erInmail=", erInmail);
  } else {
    alert("failed");
  }

  // Email validation
  //   1. Check if it contains '@' and '.'
  let emailContainsat = email.includes("@");
  let emailContainsdot = email.includes(".");

  // to check atleast 2 char after .
  var afterdot = email.split(".")[1];
  let afterdotValidation = afterdot.length > 2;

  if (emailContainsat && emailContainsdot && afterdotValidation) {
    alert("success");
  }
}

document.getElementById("btn").addEventListener("click", check);
console.log();

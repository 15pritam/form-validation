const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const aadharInput = document.getElementById("aadhar");
  const panInput = document.getElementById("pan");

  const emailInput = document.getElementById("email");
  if (
    !nameInput.value.match(/^[a-zA-Z]{5,}$/) ||
    !emailInput.value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
  )
    if (!nameInput.value.match(/^[a-zA-Z]{5,}$/))
      alert(
        "Name must be at least 5 characters long and can only contain letters."
      );
  if (!emailInput.value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+(?:com|in)$/)) {
    alert("Please enter a valid email address.");
    if (!phoneInput.value.match(/^[0-9]{10}$/))
      alert("Phone number must be 10 digits only.");
    if (!aadharInput.value.match(/^[0-9]{12}$/))
      alert("Aadhar number must be 12 digits only.");
    if (!panInput.value.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/))
      alert(
        "PAN number must be 10 characters long and should start with a letter and end with a letter and contain 4 digits in between."
      );

    event.preventDefault();
  }
});


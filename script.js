const validateEmail = function (email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleSubmit = function (e) {
  e.preventDefault();

  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const generalEnquiry = document.getElementById("generalEnquiry");
  const supportRequest = document.getElementById("supportRequest");
  const consent = document.getElementById("consent");

  const errorFirstname = document.querySelector(".firstname-error-msg");
  const errorLastname = document.querySelector(".lastname-error-msg");
  const errorEmail = document.querySelector(".email-error-msg");
  const errorQuery = document.querySelector(".query-error-msg");
  const errorMessage = document.querySelector(".message-error-msg");
  const errorConsent = document.querySelector(".consent-error-msg");

  let hasError = false;

  if (firstname.value === "") {
    errorFirstname.classList.remove("hidden");
    hasError = true;
  } else {
    errorFirstname.classList.add("hidden");
  }

  if (lastname.value === "") {
    errorLastname.classList.remove("hidden");
    hasError = true;
  } else {
    errorLastname.classList.add("hidden");
  }

  if (!validateEmail(email.value)) {
    errorEmail.classList.remove("hidden");
    hasError = true;
  } else {
    errorEmail.classList.add("hidden");
  }

  if (message.value === "") {
    errorMessage.classList.remove("hidden");
    hasError = true;
  } else {
    errorMessage.classList.add("hidden");
  }

  if (!generalEnquiry.checked && !supportRequest.checked) {
    errorQuery.classList.remove("hidden");
    hasError = true;
  } else {
    errorQuery.classList.add("hidden");
  }

  if (!consent.checked) {
    errorConsent.classList.remove("hidden");
    hasError = true;
  } else {
    errorConsent.classList.add("hidden");
  }

  if (!hasError) {
    // Submit the form if there are no errors
    document.getElementById("form").submit();
  }
};

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

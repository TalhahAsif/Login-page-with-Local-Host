// mainPage.style.display = "none"

console.log(mainPage);

const setEmail = () => {
  console.log(email);
  if (!email.value || !password.value)
    return alert("Please Enter You password or Email.");
  localStorage.setItem("email", email.value);
  check_user_login();
};

const check_user_login = () => {
  const user_email = localStorage.getItem("email");
  if (user_email) {
    loginForm.style.display = "none";
    mainPage.style.display = "block";
    userEmail.innerHTML = user_email;
  } else {
    loginForm.style.display = "block";
    mainPage.style.display = "none";
  }
};


const logout = () => {
    localStorage.clear("email")
    check_user_login()
};

loginBtn.addEventListener("click", setEmail);
logoutBTN.addEventListener("click", logout);


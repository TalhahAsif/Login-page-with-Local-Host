const user_email = localStorage.getItem("email");

noNotes.style.display = "none"

const setEmail = () => {
  if (!email.value || !password.value)
    return alert("Please Enter You password or Email.");
  localStorage.setItem("email", email.value);
  check_user_login();
  email.value = "";
  password.value = "";
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
  localStorage.clear("email");
  check_user_login();
};

const setNotestoLocalStorage = () => {
  const detailsObj = {
    email: user_email,
    subject: subjectInput.value,
    noteText: noteInput.value,
  };
  settingValuetolocalstorage(detailsObj)
};

const settingValuetolocalstorage = (detailsObj) => {
 const notes = localStorage.getItem("notesDetails")

 if (notes) {
    noNotes.style.display = "block"
 }
};

const addnote = () => {
  const noteListValue = `<li class="py-3 my-3 px-5 rounded bg-slate-800">
<div class="flex justify-between">
  <p
    id="liSubject"
    class="text-sm w-14 text-center rounded-full px-1 my-1 bg-red-600"
  >
    ${subjectInput.value}
  </p>
  <div>
    <i class="fa-solid fa-trash mx-3 cursor-pointer"></i>
    <i class="fa-regular fa-pen-to-square cursor-pointer"></i>
  </div>
</div>
<p class="text-lg">
  ${noteInput.value}
</p>
</li>`;

  localStorage.setItem("notesDetails", detailsObj);

  if (!noteInput.value || !subjectInput.value) {
    alert("Please Fill all fields");
  } else {
    noteList.innerHTML = noteListValue;
  }

  console.log(noteInput.value);
  noteInput.value = "";
  subjectInput.value = "";
};

check_user_login();

loginBtn.addEventListener("click", setEmail);
logoutBTN.addEventListener("click", logout);
addNoteBTN.addEventListener("click", addnote);

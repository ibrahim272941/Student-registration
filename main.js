const _name = document.getElementById("name");
const _path = document.getElementById("path");

const _url = document.querySelector("#url");
const addButton = document.getElementById("registration-form").lastElementChild;
const clearStudentBtn = document.querySelector("#clear-students");
const tBody = document.querySelector("#Students");
const loading = document.querySelector("#loading");

const table = document.querySelector(".table");
const ui = new UI();
//bouble link tersine intheritance set interval clear interval ile durdurmazsak sürekli devam eder

const showLoading = () => {
  loading.style.display = "block";
};

const removeLoading = () => {
  setTimeout(() => {
    loading.style.display = "none";
  }, 1000);
};
//window un iki eventi var digeri de load eventi dir tum dom tree sinin olusmasini beklemek icin verilen event...
window.addEventListener("DOMContentLoaded", () => {
  addButton.addEventListener("click", addNewStudent);
  clearStudentBtn.addEventListener("click", clearAllStudent);
 
});

const addNewStudent = (e) => {
  e.preventDefault();
  showLoading();
  const imageUrl = _url.value.trim();
  const studentName = _name.value.trim();
  const studentPath = _path.value.trim();
  if (imageUrl === "" || studentName === "" || studentPath === "") {
    confirm("pls enter student information!!!");
  } else {
    //    const student = {}
    const studentObj = new Student(imageUrl, studentName, studentPath);

    // addStudent To Ui func.

    // infoMessage func.
    ui.addStudentToUI(studentObj);

    //   let inputtArray = document.querySelectorAll
    ui.clearInputs([_url, _name, _path]);
  }
  removeLoading();
};

const clearAllStudent = () => {
  ui.clearAllStudent();
};

const deleteStudent = (student) => {
  student.addEventListener("click", (e) => {
    // e.preventDefault();
    student.parentElement.parentElement.remove();
  })}

table.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    deleteStudent(e.target);
  }
});
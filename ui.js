function UI() {
  // this.addStudentToUI=(newStudentObject)=>{}
}

UI.prototype.addStudentToUI = (newStudentObject) => {
  const tbody = document.getElementById("Students");
  tbody.innerHTML += `<tr>
    <td><img src="${newStudentObject.imageUrl}" class="img-fluid img-thumbnail" style="width:100px; border-radius:50%"></td>
    <td>${newStudentObject.studentName}</td>
    <td>${newStudentObject.studentPath}</td>
    <td><button type="submit" class="btn btn-danger">Delete Student</button></td>
    </tr>`;
  
};
UI.prototype.clearInputs = (inputArray) => {
  inputArray.forEach((element) => {
    element.value = "";
  });
};
UI.prototype.clearAllStudent = () => {
 
  const table = document.getElementById("news");
  const tbody = document.getElementById("Students");
  table.removeChild(tbody);
  
};

UI.prototype.deleteStudent = ()=>{



};






// Array.prototype.filter();
// Array.prototype.map();
// Array.prototype.splice();
// Array.prototype.reduce();

// const Array = new Array();

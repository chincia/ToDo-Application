var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["yourName"] = document.getElementById("yourName").value;
    formData["taskName"] = document.getElementById("taskName").value;
    formData["dateTime"] = document.getElementById("dateTime").value;;
    return formData;
}

//Validate
// if(yourName == "" && taskName == "" && dateTime == ""){
//     showAlert("Please fill in all fieds", "danger")
// }


//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("task-list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.yourName;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.taskName;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.dateTime;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = `
        <button class="btn btn-warning btn-sm edit" onClick="onEdit(this)">Edit</button> 
        <button class="btn btn-danger btn-sm delete" onClick="onDelete(this)">Delete</button>`;
}   

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("yourName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("taskName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dateTime").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.yourName;
    selectedRow.cells[1].innerHTML = formData.taskName;
    selectedRow.cells[2].innerHTML = formData.dateTime;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('task-list').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("yourName").value = '';
    document.getElementById("taskName").value = '';
    document.getElementById("dateTime").value = '';
    selectedRow = null;
}
// selecting inputs $ buttons
var firstName = document.getElementById('first-name');
var secondName = document.getElementById('second-name');
var position = document.getElementById('position');
var department = document.getElementById('department');
var email = document.getElementById('email');
var sallery = document.getElementById('sallery');
var address = document.getElementById('textarea');
var mainButton = document.getElementById('main-button');
var searchBtn = document.getElementById('search');
var flag = 'add';
var index;

// saving all employess
var allEmployess = [];

if(localStorage.getItem('allEmployess') != null){
   allEmployess = JSON.parse(localStorage.getItem("allEmployess"));
    displayNewEmployee()
}

// getting values from inputs
function addNewEmployee(){
var employee = {
        firName: firstName.value.toLowerCase(),
        secName: secondName.value,
        department: department.value,
        position: position.value,
        sallery: sallery.value,
        email: email.value,
        address: address.value,
    }

    if(flag === 'add'){
    allEmployess.push(employee);
    localStorage.setItem("allEmployess" , JSON.stringify(allEmployess));

    }
    else{
    allEmployess[index] = employee
    mainButton.innerHTML = "Add New Emplyee"
        flag = 'add'
    }

    clearInputs()
    displayNewEmployee()
}   

// clearing All Inputs
function clearInputs(){
    firstName.value = "";
    secondName.value = "";
    department.value = "";
    position.value = "";
    sallery.value = "";
    email.value = "";
    address.value = "";
}

// displaying new employee 
function displayNewEmployee(){

    var cartoona = "";
    for(var i = 0 ; i < allEmployess.length ; i++){

        cartoona += `<tr>
                            <td class="fw-bold">${i+1}</td>
                            <td>${allEmployess[i].firName}</td>
                            <td>${allEmployess[i].secName}</td>
                            <td>${allEmployess[i].department}</td>
                            <td>${allEmployess[i].position}</td>
                            <td>${allEmployess[i].sallery}</td>
                            <td>${allEmployess[i].email}</td>
                            <td>${allEmployess[i].address}</td>
                            <td class="overflow-hidden"> <abbr title="Edite employee"><i class="fa-solid fa-user-pen me-4" onclick="updateEmployee(${i})"></i></abbr>  <abbr title="Deleta employee"><i class="fa-solid fa-user-xmark" onclick="deletingAnEmployee(${i})"></i></abbr> </td>                            
                        </tr>`
    }
    document.getElementById('repeted').innerHTML = cartoona;
}

// Deleting An Employee
function deletingAnEmployee(idx){
    allEmployess.splice(idx , 1);
    localStorage.setItem("allEmployess" , JSON.stringify(allEmployess));
    displayNewEmployee();
}

// updating the employee 
function updateEmployee(i){
    index = i;
    mainButton.innerHTML = ` <i class="fa-solid fa-user-pen text-white me-1"></i> Update`;

    // getting values back to inputs
    firstName.value = allEmployess[i].firName;
    secondName.value = allEmployess[i].secName;
    position.value = allEmployess[i].position;
    department.value = allEmployess[i].department;
    email.value = allEmployess[i].email;
    sallery.value = allEmployess[i].sallery;
    address.value = allEmployess[i].address;
    flag = 'update';
    scroll({top: 0 , behavior : "smooth"} );
    
    displayNewEmployee()
}

// searching by name 
function searchByName(value){
var cartoona = "";
for(var i = 0 ; i < allEmployess.length ; i++){
    if(allEmployess[i].firName.includes(value)){
       cartoona += `<tr>
    <td>${i+1}</td>
    <td>${allEmployess[i].firName}</td>
    <td>${allEmployess[i].secName}</td>
    <td>${allEmployess[i].department}</td>
    <td>${allEmployess[i].position}</td>
    <td>${allEmployess[i].sallery}</td>
    <td>${allEmployess[i].email}</td>
    <td>${allEmployess[i].address}</td>
    <td class="overflow-hidden"><abbr title="Edite employee"><i class="fa-solid fa-user-pen me-4" onclick="updateEmployee(${i})"></i></abbr>  <abbr title="Deleta employee"><i class="fa-solid fa-user-xmark" onclick="deletingAnEmployee(${i})"></i></abbr></td>                            
</tr>` 
    }
}
document.getElementById('repeted').innerHTML = cartoona;
}  




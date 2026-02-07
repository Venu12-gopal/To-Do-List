let arr=[];
function display(){
    let trs="";
    for(let index in arr){
        trs+=`
        <tr>
            <td>${arr[index]}</td>
            <td>
                <button class="editbtn" onclick="editTask(${index})">edit</button>
            </td>
            <td>
                <button class="deletebtn" onclick="deleteTask(${index})">delete</button>
            </td>
        </tr>
        `;
    }
    let refElem=document.getElementById("ref");
    refElem.innerHTML=`
    <table class="listItems">
        ${trs}
    </table>
    `;
}
display();

function addTask(e){
    e.preventDefault();
    let forms=document.forms;
    let myForm=forms.myForm;
    let textElem=myForm.task;
    let task=textElem.value;
    if(task.trim()==""){
        alert("Please enter a task.");  //optional
        return;
    }
    arr.push(task.trim());
    saveTasks();
    display();
    textElem.value="";
    alert("added!!!");
}

function deleteTask(index){
    let rev=confirm("Confirm delete.");
    if(rev==false){
        return;
    }
    arr.splice(index,1);
    saveTasks();
    display();
    alert("deleted succesfully");
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(arr));
}

function loadTasks() {
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        arr = JSON.parse(storedTasks);
    }
}

// let arr = [];
loadTasks();
display();

function editTask(index){
    let enteredTask = prompt("Edit task:", arr[index]);
    if(enteredTask==null){
        return;
    }
    if(enteredTask.trim()==""){
        alert("Please enter a task.");
        return;
    }
    arr[index]=enteredTask.trim();
    saveTasks();
    display();
}
 
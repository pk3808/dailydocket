const inputBox = document.getElementById("ibox");
const listContainer = document.getElementById("lc");
function addTask() {
    if (inputBox.value === '') {
        alert("you must add something in the list")
        
    } else {
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "delete";
        li.appendChild(span);
    }
    inputBox.value = '';
    
    saveData();
    
}


listContainer.addEventListener("click",function (e) {
    if (e.target.tagName=="LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();       
    }  
},false);

function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
    
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();

var icon = document.getElementById("icon")
icon.onclick=function () {

document.body.classList.toggle("dark");
if (document.body.classList.contains("dark")) {
    icon.src="sun.png";
   
    
} else{
    icon.src="moon.png";
   
}
    
}

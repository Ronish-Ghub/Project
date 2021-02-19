let todolist=[]
let tomove=[]
function addtask(){
    let task=document.getElementById("task").value
    todolist.push(task)
    document.getElementById("task").value=""
    console.log(todolist)
    viewtodo()
}
function viewtodo(){
    let s=""
    for(i of todolist){
        s+=`<li>${i}</li><br><button class="btn btn-primary" onclick="remove('${todolist.indexOf(i)}')">Remove</button><button class="btn btn-primary" onclick="move('${todolist.indexOf(i)}')">Move</button>`
    }
    document.getElementById("mytask").innerHTML=s
    // for(todolist1 of todolist){
    //     let view = document.createElement("li")
    //     view.innerHTML=todolist1
    //     document.getElementById("mytask").appendChild(view)
    // }
}
function remove(data){
    console.log("Task to be Removed",data)
    todolist.splice(data)
    viewtodo()
}
function move(){
    let mov=document.getElementById("todolist").value
    tomove.push(mov)
    console.log(tomove)
    // let m=""
    // for(mo of tomove){
    //     m+=`<li>${mo}</li><br>`
    //     let move=document.getElementById("tw")
    //     move.innerHTML=m
    // }

}
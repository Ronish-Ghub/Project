let emplist = []
function add() {
    let name = document.getElementById("nam").value
    let id = document.getElementById("id").value
    let dep = document.getElementById("dep").value
    var x;
    if(document.getElementsByName("g")[0].checked)
    {
        x=document.getElementsByName("g")[0].value
    }else{
        x=document.getElementsByName("g")[1].value
    }
    var obj = new employee(name, id, dep,x)
    emplist.push(obj)
    console.log(obj)
    console.log(emplist)
}
function employee(name, id, dep,gender) {
    this.name = name
    this.id = id
    this.dep = dep
    this.gender =gender
}
function create() {
    for (employe of emplist) {
        let para = document.createElement("li")
        para.innerHTML = employe.name+"<br>"+employe.id+"<br>"+employe.dep+"<br>"+employe.gender+"<br>"
        document.getElementById("p").appendChild(para)
    }
}
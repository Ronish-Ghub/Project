function employee(emid,name,salary){
    this.emid=emid
    this.name=name
    this.salary=salary
    
    this.display=function(){
        console.log(`Name:${this.name}`)
        console.log(`Employee Id:${this.emid}`)
        console.log(`Salary:${this.salary}`) 
    }
    this.insalary=function(amount){
        this.salary+=amount
    }
}
let obj=new employee(1,"Ram",1000)
obj.insalary(500)
console.log(obj)

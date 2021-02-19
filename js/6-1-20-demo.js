function student(name,rollno,age){
    this.name=name
    this.rollno=rollno
    this.age=age
    this.display=function(){
        console.log(`Name:${this.name}`)
        console.log(`Rollno:${this.name}`)
        console.log(`Age:${this.name}`)

    }
}//using funtion constructer
let obj=new student("anna",3,13)
console.log(obj)
let obj1=new student("Rahul",1,14)
console.log(obj1)

let productlist = []
function data() {
    let id = document.getElementById("pid").value
    let book = document.getElementById("nam").value
    let price = document.getElementById("pric").value
    var obj = new product(id, book, price)
    productlist.push(obj)
    console.log(obj)
    console.log(productlist)
    // localStorage.setItem("1",JSON.stringify/*JSON.parse*/(obj))
    // localStorage.setItem("1",)
    // let s=localStorage.getItem("1")
    // console.log(typeof s,s)
    // let o=JSON.parse(s)
    // console.log(o,typeof o)
    if(localStorage.length==0){
        localStorage.setItem("1",JSON.stringify(obj))
    }else{
        let l=localStorage.length
        let key=l+1
        localStorage.setItem(key.toString(),JSON.stringify(obj))
    }
    for(let i=1;i<=localStorage.length;i++){
        console.log(localStorage.getItem(i.toString()))
    }
}
function product(id, book, price) {
    this.id = id
    this.book = book
    this.price = price
    this.display = function () {
        console.log(`Name of Book:${this.book}`)
        console.log(`Book Id:${this.id}`)
        console.log(`price:${this.price}`)
    }
}
function create() {
    for (product of productlist) {
        let para = document.createElement("li")
        para.innerHTML = product.id+"<br>"+product.book+"<br>"+product.price+"<br>"
        document.getElementById("p").appendChild(para)
    }
}
function validation(){
    let name=document.getElementById("name")
    let email=document.getElementById("email")
    let mob=document.getElementById("mobile")
    let pass=document.getElementById("pass")
    if(name.value==""){
        name.focus()
        alert("Name can't be  empty")
        return false
    }
    if(email.value==""){
        email.focus()
        alert("Gmail can't be  empty")
        return false
    }
    if(mob.value==""){
        mob.focus()
        alert("Mobile Number can't be  empty")
        return false
    }
    if(mob.value.length!=10||isNaN(mob.value)){
        mob.focus()
        alert("Mobile Number need atleat 10 number")
        return false
    }
    if(pass.value==""){
        pass.focus()
        alert("Password can't be  empty")
        return false
    }

}
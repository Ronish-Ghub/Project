function user(){
    let txt=document.getElementById("name").value
    //alert(txt)
    document.getElementById("name1").value="Name is"+txt
    document.getElementById("name2").innerText=txt  
}
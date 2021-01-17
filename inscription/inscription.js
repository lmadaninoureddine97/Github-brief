var email=document.getElementById("email");
var pass=document.getElementById("pass");
var confirmation=document.getElementById("passConfirme");
var btnUser=document.getElementById("btnUser");


btnUser.onclick=function(){
    
    if(email.value==""||pass.value==""||confirmation.value==""){
        alert("please fill all data");
    }
    else{
        localStorage.setItem("email",email.value)
        localStorage.setItem("pass",pass.value)
        localStorage.setItem("confirmation",confirmation.value)

        setTimeout(()=>{
            window.location="signIn.html"
        },1500)

    }
}

var user=document.getElementById("user");
var passWord=document.getElementById("passWord");
var btnSignin=document.getElementById("btnSignin");
var userSin=localStorage.getItem("email");
var passSin=localStorage.getItem("pass");
btnSignin.onclick=function(){
    if(user.value==""||passWord.value==""){
        alert("please fill data")
    }
    else{
        if(userSin&&userSin==user.value&& passSin && passSin==passWord.value){
            setTimeout(()=>{
               window.location.href="file:///C:/Users/Windows%2010/Desktop/final%20breif/githup.html";
            },1500);
        }
        else{
           user.style.backgroundColor="red";
           passWord.style.backgroundColor="red";
        }
    }
   
}





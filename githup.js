

var myRequiste= new XMLHttpRequest();

myRequiste.open("GET","https://api.github.com/users","true");

myRequiste.send();

myRequiste.onload=function(){
    if(this.status===200){
    
   var data =JSON.parse(this.responseText);
   
  
   for(var i=0;i<4;i++){
    var cardsContainer=document.getElementsByClassName("cardsContainer")[0];
var myDiv=document.createElement("div");
myDiv.className+="card";
cardsContainer.appendChild(myDiv);
var myImage=document.createElement("img");
// myImage.src="github-octocat.png";
myImage.setAttribute("src",data[i].avatar_url);
myDiv.appendChild(myImage);
var mySpan=document.createElement("span");
mySpan.textContent=data[i].login;
myDiv.appendChild(mySpan);

}


  
        
    }
    
}
// var btnUsers=document.getElementById("btnUsers");
// btnUsers.onclick=function(){
//     var conCard=document.getElementsByClassName("conCard")[0];
// var myDivCard=document.createElement("div");
// myDivCard.className+="carde";
// conCard.appendChild(myDivCard);
// var myimg=document.createElement("img");
// myimg.src="github-octocat.png";
// myDivCard.appendChild(myimg)
// var mySpn=document.createElement("span");
// mySpn.className+="user";
// mySpn.textContent="userName"
// myDivCard.appendChild(mySpn)
// var dive=document.createElement("div");
// dive.className+="proper";
// var folow=document.createElement("span");
// folow.className+="follow";
// folow.textContent="followers:"
// dive.appendChild(folow)
// var repos=document.createElement("span");
// repos.className+="repos";
// repos.textContent="repos:"
// dive.appendChild(repos);
// var h6=document.createElement("h6");
// h6.textContent="profile";
// conCard.appendChild(h6);
// myDivCard.appendChild(dive);
// conCard.style.display="block";
// conCard.style.backgrouldColor="rgba(0,0,0,0.6)";




// }
var modal=document.querySelector(".modal");



var close=document.getElementById("closer");
var modalCon=document.querySelector(".modalCon");
var btnUsers=document.getElementById("btnUsers");
var di="https://api.github.com/users/";
btnUsers.onclick=function(){
    var img=document.getElementById("img");
    
    var userName=document.getElementById("user");
var follow=document.getElementById("followers");
var repos=document.getElementById("reposi");

modal.style.display="block";
    close.style.display="block";

    var iptvl=document.querySelector("#inptValue").value;
    fetch("https://api.github.com/users/"+iptvl)
    .then((Response)=>{
        return Response.json();
    })
    .then((data)=>{
       if(iptvl===data.login){
        userName.textContent=data.login;
        follow.textContent+=data.following;
        repos.textContent+=data.public_repos;
        img.src=data.avatar_url;
        var profile=document.querySelector(".profile");
         
       }
       else{
           alert("oho");
       }
      
       profile.addEventListener("click",function(e){
           e.preventDefault;
           profile.href=data.html_url;

       })


       
    })
   

    
  
};

close.onclick=function(){
    modal.style.display="none";
    close.style.display="none";
};
var profile=document.querySelector(".usernames");
var users=localStorage.getItem("email");
if(localStorage.getItem("email")){
    profile.style.display="block";
    profile.textContent=users;

    
}


 
     
//     if(myreq.status===200){
//         var info=JSON.parse(myreq.responseText);
//         console.log(info);
//     }
//     console.log(info.loging);
//     var mojombo=info+iptvl.value;
    
 







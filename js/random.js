// CODE FOR PASSWORD SHOW 
function getpwd(){

    var chars ='abcdefghijklmonpqrstuvwxyzABCDEFGHIJKLMONPQRSTUVWXYZ1234567890`<>,.?/:}{][_]}*&^%$#@!~`';
    var pwdLength = 16;
    var input = document.getElementById("Random");
    var password ='';
    var copy = document.getElementById("Copy");
    var copied = document.getElementById("copied");

    for (var i = 0; i < pwdLength; i++) {
        
        var random = Math.floor(Math.random()*chars.length);
        password+=chars.substring(random,random+1);
         }

         input.value=password;
         copy.style.display="block";
         copied.style.display="none";
         
}
// CODE FOR COPY SYSTEM ADD 

function copyPwd(){

    var copy = document.getElementById("Copy");
    var copied = document.getElementById("copied");
    var input = document.getElementById("Random");
    input.select();
    input.setSelectionRange(0,999);
    document.execCommand("copy");
    copy.style.display="none";
    copied.style.display="block";

  
}
// CODE FOR PASSWORD VALIDATION;

var copy = document.getElementById("Copy");
var copied = document.getElementById("copied");
var input = document.getElementById("Random");

var copyBtn = document.getElementById("button");

copyBtn.addEventListener("click",()=>{
  
    if(input.value==''){
        alert("Password Filed is Empty")
        copy.style.display="block";
        copied.style.display="none";
    }


    
})


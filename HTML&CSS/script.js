
function login_validation(e){
    e.preventDefault();
    let email = "akanksha@gmail.com";
    let password = "1234";
    let uname = document.getElementById('email').value;
    let upass = document.getElementById('password').value;
    let uerror= document.getElementById('umsg');
    let perror= document.getElementById('pmsg');
    let result= document.getElementById('rmsg');
    
    // let result = document.getElementById('rmsg');


    if(uname!=email){
        console.log("user name invalid");
        uerror.innerHTML="Invalid Username";

    }else if(upass!=password){
        uerror.innerHTML = "";

        console.log("password error");
        perror.innerHTML="Invalid Password";

    }else{
        console.log("login successfull");
        uerror.innerHTML="";
        perror.innerHTML="";
        result.innerHTML="Login Successfull";
        
    }
   
}

document.getElementById("button").addEventListener("click", login_validation);

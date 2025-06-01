let username=document.querySelector(".username");
let password=document.querySelector(".password");
let submit=document.querySelector(".submit")
function check(){
    user=username.value;
    pass=parseInt(password.value);
    if(user=="adithya" && pass==2143){
        console.log(user);
        console.log(pass);
        console.log("chect ok!")
        window.location.href = "indexhome.html";
    }
    else{
         console.log(user);
        console.log(pass);
        console.log("checkfaild")
    }
}
submit.addEventListener('click',function(event){
    event.preventDefault();
})
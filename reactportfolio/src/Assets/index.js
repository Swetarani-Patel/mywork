var typed = new Typed(".text",{
    strings:["Full Stack Web Developer", "Problem Solver","Continous Learner"],  
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
 });
 
 document.querySelector(".bx-menu").addEventListener("click", function(){
    document.querySelector(".navbar").classList.add("nav-show");
    document.querySelector(".bx-menu").classList.add("hide-menu");
    document.querySelector(".fa-xmark").classList.add("show-cross");
    
 })
 document.querySelector(".fa-xmark").addEventListener("click", function(){
    document.querySelector(".navbar").classList.remove("nav-show");
    document.querySelector(".bx-menu").classList.remove("hide-menu");
    document.querySelector(".fa-xmark").classList.remove("show-cross");
    
 })
 document.querySelector(".navbar").addEventListener("click", ()=>{
   document.querySelector(".navbar").classList.remove("nav-show");
    document.querySelector(".bx-menu").classList.remove("hide-menu");
    document.querySelector(".fa-xmark").classList.remove("show-cross");
 })


 
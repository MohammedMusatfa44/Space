let sign_up_b = document.querySelector(".more-1");
let sign_up = document.querySelector(".sign-up"); //
//////////////////////////
let sign_in_b = document.querySelector(".more-2");
let sign_in = document.querySelector(".sign-in"); 


sign_in_b.onclick = function(){
    sign_in_b.classList.add("shoow2");
    sign_up.classList.add("shoow2")
    sign_in_b.classList.remove("shoow");
    sign_up.classList.remove("shoow")
    setTimeout(function(){
        sign_in_b.classList.add("d-none");
        sign_up.classList.add("d-none")
    },600)

    setTimeout(function(){
        sign_up_b.classList.remove("d-none");
        sign_in.classList.remove("d-none")
    },800)
    sign_up_b.classList.add("shoow");
    sign_in.classList.add("shoow")
    sign_up_b.classList.remove("shoow2");
    sign_in.classList.remove("shoow2")





}

sign_up_b.onclick = function(){
    sign_up_b.classList.add("shoow2");
    sign_in.classList.add("shoow2")
    sign_up_b.classList.remove("shoow");
    sign_in.classList.remove("shoow")
    setTimeout(function(){
        sign_up_b.classList.add("d-none");
        sign_in.classList.add("d-none")
    },600)

    setTimeout(function(){
        sign_in_b.classList.remove("d-none");
        sign_up.classList.remove("d-none")
    },800)
    sign_in_b.classList.add("shoow");
    sign_up.classList.add("shoow")
    sign_in_b.classList.remove("shoow2");
    sign_up.classList.remove("shoow2")



}
let galery = document.querySelectorAll(".img-gar-1");

window.onscroll = function(){
    galery.forEach((e) =>{
            if (window.scrollY >= e.offsetTop -1000 ) {
                e.classList.add("shoow");

        
    }
    })

}
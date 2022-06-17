var more_1 = document.querySelector(".more-1");
var more_2 = document.querySelector(".more-2");
var more_3 = document.querySelector(".more-3");
var more_5 = document.querySelector(".more-5");
var tow = document.querySelector(".tow");
var tow2 = document.querySelector(".tow2");
var tow3 = document.querySelector(".tow3");
var right = document.querySelector(".serch-icon");
var input_nav = document.querySelector(".input-nav");
var slid1_1 = document.querySelectorAll(".slid-1");
var space = document.querySelector(".space");
var continaer = document.querySelector(".space .contianer");
var continaer_port = document.querySelector(".port .container");
var serv = document.querySelector(".serv");
var title = document.querySelector(".serv .title");
var serv_img = document.querySelector(".img-serv");
var point_serv = document.querySelector(".point-left");
var loding = document.querySelector(".loding");
// var more_1 = $(".more-1");
// var more_2 = $(".more-2");
// var more_3 = $(".more-3");
// var tow = $(".tow");
// var tow2 = $(".tow2");
// var tow3 = $(".tow3");
// var right = $(".serch-icon");
// var input_nav = $(".input-nav");
// var slid1_1 = $(".slid-1");
// var space = $(".space");
// var continaer = $(".space .contianer");
// var continaer_port = $(".port .container");
// var serv = $(".serv");
// var title = $(".serv .title");
// var serv_img = $(".img-serv");
// var point_serv = $(".point-left");
// var loding = $(".loding");
tt = true;
$(function(){
    

      setTimeout(remov_lod,6000)
      setTimeout(remov_lod2,7500)
})

right.onclick = function()
{
    console.log("kkk");
    input_nav.classList.add("transform-zero")
}
more_1.onclick = function () {
    tow.classList.add("shooow");
    
}
more_2.onclick = function () {
    tow2.classList.add("shooow");
    
}
more_3.onclick = function () {
    tow3.classList.add("shooow");
    
}


window.onscroll = function(){
                if (this.scrollY >= space.offsetTop -300) {
                    slid1_1.forEach((sl) => {
                        sl.classList.add("shoow");
                        continaer.classList.add("transform-zero");
                    })
                }
                if (this.scrollY >= continaer_port.offsetTop -300) {
                    continaer_port.classList.add("shoow","transform-zero")
        
                }
                if (this.scrollY >= serv.offsetTop -300) {
                    serv_img.classList.add("shoow","transform-zero");
                    point_serv.classList.add("shoow","transform-zero");
                    title.classList.add("shoow","transform-zero");
        
                }

    }
    function remov_lod(){
        loding.classList.add("shoow2")
    }
    function remov_lod2(){
        loding.classList.add("d-none")
    }




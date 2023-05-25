window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

window.addEventListener("scroll", function(){
    const logoImage = document.querySelector(".logo img");
    const mainNav = document.getElementById("mainNav");

    if(window.pageYOffset > 630){
        logoImage.style.height = "60px";
        logoImage.src = "media/Logo.png";
        mainNav.classList.add('bg-black');
        mainNav.classList.add("txt-white");
    }
    else{
        logoImage.style.height = "80px";
        logoImage.src = "media/Logo-Black.png";
        mainNav.classList.remove('bg-black');
        mainNav.classList.remove("txt-white");
        
    }
});

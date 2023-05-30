window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

window.addEventListener("scroll", function(){
    const logoImage = document.querySelector(".logo img");
    const mainNav = document.getElementById("mainNav");
    const BeatlesSection2 = document.getElementById("Beatles-Section2");

    if(window.pageYOffset > 650){
        logoImage.style.height = "60px";
        logoImage.src = "media/homepageMedia/Logo.png";
        mainNav.classList.add('bg-black');
        mainNav.classList.add("txt-white");
    }
    else{
        logoImage.style.height = "80px";
        logoImage.src = "media/homepageMedia/Logo-Black.png";
        mainNav.classList.remove('bg-black');
        mainNav.classList.remove("txt-white");
    }
});
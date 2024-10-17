window.onload = function(){
    let popup = document.getElementById('popup')
    let maincontent = document.getElementById('main-content')

    popup.style.visibility = "visible";

    setTimeout(function() {
        popup.classList.add("hidden");
        setTimeout(function(){
            maincontent.style.display = "block";
            document.body.style.overflow = "auto";
        }, 500);  
    }, 1500);

};
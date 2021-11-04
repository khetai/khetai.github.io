var sun = document.getElementById("sun1");
var star = document.getElementById("star1");
var moon = document.getElementById("moon1");
var mt = document.getElementById("mount");

function funk1(x) {
    // alert(x);
    sun.setAttribute("style", "display: none;");
    star.setAttribute("style", "display: block;");
    moon.setAttribute("style", "display: block;");
    document.getElementById("mount").src = "img/mount2ng.png";
    document.getElementById("mount2").src = "img/mount21ng.png";
    document.getElementById("mount3").src = "img/m1ng.png";
    document.getElementById("home").src = "img/home11ng.png";
    document.getElementById("tre1").src = "img/tre1ng.png";
    document.getElementById("tre2").src = "img/tre2ng.png";
    document.getElementById("otlar").src = "img/otlarng.png";
    // document.getElementById("wave1").style.background = "url(img/waveng.png)";
    document.getElementById("wave1").setAttribute("class", "waveng");
    document.getElementById("wave2").setAttribute("class", "waveng");
    document.getElementById("wave3").setAttribute("class", "waveng");
    document.getElementById("wave4").setAttribute("class", "waveng");
    document.getElementsById("fr").setAttribute("class", "footerng")

}
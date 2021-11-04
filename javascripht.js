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
    document.getElementById("bill").src = "img/billboardng.png";
    document.getElementById("tre1").src = "img/tre1ng.png";
    document.getElementById("tre2").src = "img/tre2ng.png";
    document.getElementById("tre3").src = "img/tre3ng.png";
    document.getElementById("tre30").src = "img/tre3ng.png";
    document.getElementById("tre31").src = "img/tre3ng.png";
    document.getElementById("tre4").src = "img/tre3ng.png";
    document.getElementById("tre41").src = "img/tre3ng.png";
    document.getElementById("tre5").src = "img/tre3ng.png";
    document.getElementById("tre51").src = "img/tre3ng.png";
    document.getElementById("tre52").src = "img/tre3ng.png";
    document.getElementById("tre53").src = "img/tre3ng.png";
    document.getElementById("tre6").src = "img/tre3ng.png";
    document.getElementById("tre7").src = "img/tre3ng.png";
    document.getElementById("tre8").src = "img/tre3ng.png";
    document.getElementById("tre9").src = "img/tre3ng.png";
    document.getElementById("trees").src = "img/treesng.png";
    document.getElementById("trees2").src = "img/treesng.png";
    document.getElementById("trees3").src = "img/treesng.png";
    document.getElementById("trees4").src = "img/treesng.png";
    document.getElementById("trees41").src = "img/trees2ng.png";
    document.getElementById("trees42").src = "img/treesng.png";
    document.getElementById("trees421").src = "img/treesng.png";
    document.getElementById("trees422").src = "img/trees2ng.png";
    document.getElementById("trees423").src = "img/treesng.png";
    document.getElementById("trees5").src = "img/treesng.png";
    document.getElementById("trees6").src = "img/treesng.png";
    document.getElementById("trees7").src = "img/treesng.png";
    document.getElementById("trees8").src = "img/trees2ng.png";
    document.getElementById("otlar").src = "img/otlarng.png";
    // document.getElementById("wave1").style.background = "url(img/waveng.png)";
    document.getElementById("wave1").setAttribute("class", "waveng");
    document.getElementById("wave2").setAttribute("class", "waveng");
    document.getElementById("wave3").setAttribute("class", "waveng");
    document.getElementById("wave4").setAttribute("class", "waveng");
    document.getElementById("light12").setAttribute("style", "display: block;");
    document.getElementById("light123").setAttribute("style", "display: block;");
    document.getElementById("light22").setAttribute("style", "display: block;");
    document.getElementById("light223").setAttribute("style", "display: block;");
    // document.getElementsById("fr").setAttribute("class", "footerng")

};
s = '';
a = '1112031584';

function funk2() {
    for (i = 1; i < length(a); i++) {
        if (a[i] % 2 == a[i - 1] % 2) {
            s += max(a[i], a[i - 1]);
        }
    }
    console.log(s)
    goto_url('www.multisoft.se/' + s);
};
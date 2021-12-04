var telebe = document.getElementById("telebe");
var mellim = document.getElementById("mellim");
var kusr = document.getElementById("kurs");
var packet1 = document.getElementById("packet1");
var packet2 = document.getElementById("packet2");
var packet3 = document.getElementById("packet3");
var telebe1 = document.getElementById("telebe1");
var telebe2 = document.getElementById("telebe2");
var telebe3 = document.getElementById("telebe3");
var packetml1 = document.getElementById("packetml1");
var packetml2 = document.getElementById("packetml2");
var packetml3 = document.getElementById("packetml3");
var mellim1 = document.getElementById("mellim1");
var mellim2 = document.getElementById("mellim2");
var mellim3 = document.getElementById("mellim3");
var packetkl1 = document.getElementById("packetkl1");
var packetkl2 = document.getElementById("packetkl2");
var packetkl3 = document.getElementById("packetkl3");
var kurs1 = document.getElementById("kurs1");
var kurs2 = document.getElementById("kurs2");
var kurs3 = document.getElementById("kurs3");

function opentl() {
    telebepk.style.transform = "translateX(0)";
    mellimpk.style.transform = "translateX(100%)";
    kurspk.style.transform = "translateX(100%)";
    telebe.style.color = "#ff7846"
    mellim.style.color = "#000"
    kurs.style.color = "#000"
};

function openml() {
    telebepk.style.transform = "translateX(100%)";
    mellimpk.style.transform = "translateX(0)";
    kurspk.style.transform = "translateX(100%)";
    telebe.style.color = "#000"
    mellim.style.color = "#ff7846"
    kurs.style.color = "#000"
};

function openkl() {
    telebepk.style.transform = "translateX(100%)";
    mellimpk.style.transform = "translateX(100%)";
    kurspk.style.transform = "translateX(0)";
    telebe.style.color = "#000"
    mellim.style.color = "#000"
    kurs.style.color = "#ff7846"
};

function opensade() {
    // packet1.style.display = "block";
    // packet1.style.display = "flex";
    // packet2.style.display = "none"
    packet1.style.transform = "translateX(0)";
    packet2.style.transform = "translateX(100%)";
    packet3.style.transform = "translateX(100%)";
    packet1.style.position = "relative";
    packet2.style.position = "absolute";
    packet3.style.position = "absolute";
    telebe1.style.color = "#ff7846"
    telebe2.style.color = "#000"
    telebe3.style.color = "#000"

};

function openmsade() {

    packetml1.style.transform = "translateX(0)";
    packetml2.style.transform = "translateX(100%)";
    packetml3.style.transform = "translateX(100%)";
    packetml1.style.position = "relative";
    packetml2.style.position = "absolute";
    packetml3.style.position = "absolute";
    telebe1.style.color = "#ff7846"
    telebe2.style.color = "#000"
    telebe3.style.color = "#000"

};

function openksade() {

    packetkl1.style.transform = "translateX(0)";
    packetkl2.style.transform = "translateX(100%)";
    packetkl3.style.transform = "translateX(100%)";
    packetkl1.style.position = "relative";
    packetkl2.style.position = "absolute";
    packetkl3.style.position = "absolute";
    kurs1.style.color = "#ff7846"
    kurs2.style.color = "#000"
    kurs3.style.color = "#000"

};

function opensilver() {

    packet1.style.transform = "translateX(100%)";
    packet2.style.transform = "translateX(0)";
    packet3.style.transform = "translateX(100%)";
    packet1.style.position = "absolute";
    packet2.style.position = "relative";
    packet3.style.position = "absolute";
    telebe1.style.color = "#000"
    telebe2.style.color = "#ff7846"
    telebe3.style.color = "#000"
};

function openmsilver() {

    packetml1.style.transform = "translateX(100%)";
    packetml2.style.transform = "translateX(0)";
    packetml3.style.transform = "translateX(100%)";
    packetml1.style.position = "absolute";
    packetml2.style.position = "relative";
    packetml3.style.position = "absolute";
    telebe1.style.color = "#000"
    telebe2.style.color = "#ff7846"
    telebe3.style.color = "#000"
};

function openksilver() {

    packetkl1.style.transform = "translateX(100%)";
    packetkl2.style.transform = "translateX(0)";
    packetkl3.style.transform = "translateX(100%)";
    packetkl1.style.position = "absolute";
    packetkl2.style.position = "relative";
    packetkl3.style.position = "absolute";
    kurs1.style.color = "#000"
    kurs2.style.color = "#ff7846"
    kurs3.style.color = "#000"
};

function opengold() {
    packet1.style.transform = "translateX(100%)";
    packet2.style.transform = "translateX(100%)";
    packet3.style.transform = "translateX(0)";
    packet1.style.position = "absolute";
    packet2.style.position = "absolute";
    packet3.style.position = "relative";
    telebe1.style.color = "#000"
    telebe2.style.color = "#000"
    telebe3.style.color = "#ff7846"
}

function openmgold() {
    packetml1.style.transform = "translateX(100%)";
    packetml2.style.transform = "translateX(100%)";
    packetml3.style.transform = "translateX(0)";
    packetml1.style.position = "absolute";
    packetml2.style.position = "absolute";
    packetml3.style.position = "relative";
    telebe1.style.color = "#000"
    telebe2.style.color = "#000"
    telebe3.style.color = "#ff7846"
}

function openkgold() {
    packetkl1.style.transform = "translateX(100%)";
    packetkl2.style.transform = "translateX(100%)";
    packetkl3.style.transform = "translateX(0)";
    packetkl1.style.position = "absolute";
    packetkl2.style.position = "absolute";
    packetkl3.style.position = "relative";
    kurs1.style.color = "#000"
    kurs2.style.color = "#000"
    kurs3.style.color = "#ff7846"
}
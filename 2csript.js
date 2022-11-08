axmoq = document.querySelector(".axmoq")
helo = document.querySelector(".helo")
we = document.querySelector(".we")
s1 = document.querySelector(".s1")
s2 = document.querySelector(".s2")
s3 = document.querySelector(".s3")
s4 = document.querySelector(".s4")
s5 = document.querySelector(".s5")
s6 = document.querySelector(".s6")
s7 = document.querySelector(".s7")
s8 = document.querySelector(".s8")
asss = document.querySelector(".asss")
a = document.querySelector(".qqq")
hi = document.querySelector(".lo")
musss = document.querySelector(".salom")
salo = document.querySelector(".salom2")
saom = document.querySelector(".salom1")
slkj = document.querySelector(".salom4")
function qw() {
    a.style.width = 100+"px";
    a.style.height = 100+"px";
    a.style.backgroundColor = "blue";
    axmoq.style.color = "red";
    a.apendchild(a)
}
function w10() {
    helo.style.color = "red";
}
function w1() {
    we.style.color = "red";
}
function w2() {
    s1.style.color = "red";
}
function w3() {
    s2.style.color = "red";
}
function w4() {
    s3.style.color = "red";
}
function w5() {
    s4.style.color = "red";
}
function w6() {
    s5.style.color = "red";
}
function w7() {
    s6.style.color = "red";
}
function w8() {
    s7.style.color = "red";
}
function w9() {
    s8.style.color = "red";
}
function hhh() {
    audio = document.createElement("audio")
    audio.src = "salom.mp3"
    audio.autoplay = "autoplay"
    audio.controls = "controls"
    asss.innerHTML = '<i class="bi bi-pause-circle" onclick="assa()"></i>'       

}
function assa() {
    asss.innerHTML = '<i class="bi bi-play-circle" onclick="hhh()"></i>'  
    audio.src = "" 
   
}
function musi() {
    audio1 = document.createElement("audio")
    audio1.src = "lo.mp3"
    audio1.autoplay = "autoplay"
    audio1.controls = "controls"
    hi.innerHTML = '<i class="bi bi-pause-circle" onclick="mus()"></i>'
}
function mus() {
    hi.innerHTML = '<i class="bi bi-play-circle" onclick="musi()"></i>'  
    audio1.src = "" 
   
}
function salom1() {
    audio1 = document.createElement("audio")
    audio1.src = "qushiq.mp3"
    audio1.autoplay = "autoplay"
    audio1.controls = "controls"
    saom.innerHTML = '<i class="bi bi-pause-circle" onclick="qwer()"></i>'
}
function qwer() {
    saom.innerHTML = '<i class="bi bi-play-circle" onclick="salom1()"></i>'  
    audio1.src = "" 
   
}
function salom2() {
    audio2 = document.createElement("audio")
    audio2.src = "helo.mp3"
    audio2.autoplay = "autoplay"
    audio2.controls = "controls"
    salo.innerHTML = '<i class="bi bi-pause-circle" onclick="salesh()"></i>'
}
function salesh() {
    salo.innerHTML = '<i class="bi bi-play-circle" onclick="salom2()"></i>'  
    audio2.src = "" 
   
}
function salom3() {
    audio3 = document.createElement("audio")
    audio3.src = "lo.mp3"
    audio3.autoplay = "autoplay"
    audio3.controls = "controls"
    musss.innerHTML = '<i class="bi bi-pause-circle" onclick="saleh()"></i>'
}
function saleh() {
    musss.innerHTML = '<i class="bi bi-play-circle" onclick="salom3()"></i>'  
    audio3.src = "" 
   
}
function salom4() {
    audio4 = document.createElement("audio")
    audio4.src = "salom.mp3"
    audio4.autoplay = "autoplay"
    audio4.controls = "controls"
    slkj.innerHTML = '<i class="bi bi-pause-circle" onclick="salohos()"></i>'
}
function salohos() {
    slkj.innerHTML = '<i class="bi bi-play-circle" onclick="salom4()"></i>'  
    audio4.src = "" 
   
}



function s() {
    window.location.href = "index.html"
}


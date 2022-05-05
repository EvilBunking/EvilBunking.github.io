var d=new Date();
var p9=document.createElement("li");
let p1 = document.getElementById("p1");
let h1 = document.getElementsByTagName("h1")[0];
let l = document.querySelectorAll("li")
let ul = document.querySelector("ul");
let box=document.getElementsByClassName("m-box");
let p2=l[1];
let p3=l[2];
let p4=l[3];
let p5=l[4];
let p6=l[5];
let p7=l[6];
let p8=l[7];
console.log(d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate());
p1.onclick=function () {
    p1.style.color="red";
}
p2.onclick=function () {
    h1.innerText=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
}
p3.onclick=function () {
    p3.classList.add("fn-active");
}
p4.onclick=function () {
    p8.remove();
}
p5.onclick=function () {
    window.open("https://www.taobao.com/","taobao");
}
p6.onclick=function () {
    p9.innerText="p9";
    ul.appendChild(p9);
}
p7.onclick=function () {
    box.width=window.innerWidth;
}

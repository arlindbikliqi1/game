let circle=document.getElementById("circle");
let showtime=document.getElementById("time");
let timestart=new Date().getTime();



function showCircle()
{
    circle.style.display='block';

    circle.style.top
    =Math.random() * 500 + 'px';
    circle.style.right=Math.random() * 1000 + 'px';
    circle.style.left=Math.random() * 1000 + 'px';
    circle.style.backgroundColor = randomColor();
    timestart= new Date().getTime();

}

showCircle();

circle.onclick=function(){
    circle.style.display='none';
    setTimeout(showCircle,1000);
    let timeEnd=new Date().getTime();
    let time=(timeEnd-timestart)/1000;
    showtime.innerHTML=time + 's';
}

function randomColor(){
    let s='0123456789ABCDEF';
    let color='#';

    for(let i=0; i<6; i++) {
        color=color + s[Math.floor(Math.random()* 16)]
    }
    console.log(color)
    return color;
}
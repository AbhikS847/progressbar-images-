const circles = document.querySelectorAll('.buttons');

const next = document.querySelector('#next');

const previous = document.querySelector('#previous');

const imageSource = document.querySelector('#image');

const icons = [
    "icons/icon0.png","icons/icon1.png","icons/icon2.png","icons/icon3.png","icons/icon4.png"
]

imageSource.src = icons[0];

previous.disabled = true;

var i=0;

next.addEventListener('click',()=>{
    circles[i].style = "background-color:gold";
    previous.disabled = false;
    imageSource.src = icons[i];
    i++;
    console.log(i);
    if(i>=4){
        next.disabled = true;
        imageSource.src = icons[4];
    }
})

previous.addEventListener('click',()=>{
    next.disabled = false;
    imageSource.src = icons[i];
    i--;
    circles[i].style = "background-color:#eaeaea";
    console.log(i);
    if(i<=0){
        previous.disabled = true;
        imageSource.src = icons[0];

    }
})
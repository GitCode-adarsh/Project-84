canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

carswidth= 120;
carsheight = 70;
carsX = 10;
carsY = 10;
carsimage = "car1.png";

car1width= 120;
car1height = 140;
car1X = 10;
car1Y = 50;
car1image = "car2.jpg";

backgroundimage = "cars.jpg";

function add(){
    bgimageload = new Image ;
    bgimageload.onload = uploadbgimage;
    bgimageload.src = backgroundimage;

    carsimgload = new Image;
    carsimgload.onload = uploadcarsimg;
    carsimgload.src = carsimage;
     
    car1imgload = new Image;
    car1imgload.onload = uploadcar1img;
    car1imgload.src = car1image;
}
function uploadbgimage(){
 ctx.drawImage(bgimageload, 0, 0, canvas.width, canvas.height);
}
function uploadcarsimg(){
    ctx.drawImage(carsimgload, carsX, carsY, carswidth, carsheight);
}
function uploadcar1img(){
    ctx.drawImage(car1imgload, car1X, car1Y, car1width, car1height);
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    keypress= e.keyCode;
    console.log(keypress);

    if(keypress == "38"){
        carsup();
        console.log("up");
    }
    if(keypress == "40"){
        carsdown();
        console.log("down");
    }
    if(keypress == "37"){
        carsleft();
        console.log("left");
    }
    if(keypress == "39"){
        carsright();
        console.log("right");
    }
    if(keypress == "87"){
        car1_up();
        console.log("W is pressed");
    }
    if(keypress == "83"){
        car1_down();
        console.log("S is pressed");
    }
    if(keypress == "68"){
        car1_right();
        console.log("D is pressed");
    }
    if(keypress == "65"){
        car1_left();
        console.log("A is pressed");
    }

}
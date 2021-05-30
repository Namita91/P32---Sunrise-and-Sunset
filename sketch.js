const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg, h, time;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
        background(backgroundImg)

    textSize(20);
    fill("black");
    text("Time: " + h + " " + time, 600,100);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJson = await response.json();
    // write code slice the datetime
    var datetime = responseJson.datetime;
    var hour = datetime.slice(11,13);

    if(hour > 12 && hour < 24) {
        h = hour-12;
        time = "pm";
        console.log(h);
        console.log(time);
    } else {
        h = hour;
        time = "am";
        console.log(h);
        console.log(time);
    }

    // add conditions to change the background images from sunrise to sunset
    if(hour >= 5 && hour < 7) {
        bg = "sunrise2.png"
    } else if(hour >= 7 && hour < 16) {
        bg = "sunrise6.png"
    } else if(hour >= 16 && hour <18) {
        bg = "sunset7.png"
    } else if(hour >= 18 && hour <=19) {
        bg = "sunset9.png"
    } else {
        bg = "sunset11.png"
    }


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}

img="";
status="";

function preload()
{
    img = loadImage('ggtv.jpg');
}

function setup()
{
    canvas = createCanvas(520,240);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function draw()
{
    image(img, 0, 0, 550, 290);
    fill("#454545");
    text("TV", 140, 70);
    noFill();
    stroke("#454545");
    rect(120, 50, 290, 150 );
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error , results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}
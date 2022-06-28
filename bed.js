img="";
status ="";

function preload()
{
    img = loadImage('bedroom.png');
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
    text("BED", 25, 100);
    noFill();
    stroke("#454545");
    rect(20, 100, 310, 200 );
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
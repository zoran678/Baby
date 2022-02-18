img = "";
object = [];
stat = "";
song ="come_get_your_love.mp3";


function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();

    video = createCapture(380 ,380);
    video.hide();

    objectdetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML= "Status: Loading";
}
function draw()
{
    image(video, 0, 0, 380, 380);
    if(stat =! "" )
    {
        document.getElementById("status").innerHTML = "Status: Loaded";
        for(i=0;object.length<0;i++)
        {
           fill("#ff000");
           text(object[i].label,object[i].x,object.y[i]);
           noFill();
           stroke("ff0000");
           rect(object[i].x ,object[i],y ,object[i].width ,object[i].height);
           if(object[i].label =="person")
           {
            song.stop();
           }
           else
           {
            song.play();
           }
        }
    }
}
function modelLoaded()
{
    console.log("Model Loaded");
    stat=true;
    objectdetector.detect(img ,gotResult);
}
function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
    object=results;
}
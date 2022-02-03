//Code written entierly by Himangshu

function preload(){
    //Loads all resources
}

function setup(){
    canvas = createCanvas(640, 480); //Making the canvas
    canvas.position(500, 200); //Setting the position of the canvas
    video = createCapture(VIDEO);
    video.hide(); //Hiding the extra components of p5.js
    tint_color = "";
}

//NOTE: Draw is the most powerful and active function of p5.js.
//It keeps executing as long as the program is running.
function draw(){
    image(video, 0, 0, 640, 480); //Displaying the video
    tint(tint_color);
}

function apply_filter(){
    tint_color = document.getElementById('filter_input').value; //Changing the tint color
}

function take_snapshot(){
    save("Filtered_image.jpeg"); //Saving the image
}
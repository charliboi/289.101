/*eslint-env browser*/
/*eslint no-console:0*/
/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)

*/

//VARIABLES
var puck = document.getElementById('puck');
var color = document.getElementById('gap');
var puck_x = 210;
var puck_y = 210;
var speed = 50;

puck.style.left = puck_x + 'px';
puck.style.top = puck_y + 'px';


//USER DEFINED FUNCTIONS
function logCoordinates(){
    console.log('x=' + puck_x + 'y=' + puck_y);
}
function checkCollision (){
    //has the puck passed the left edge of the hole
    if(puck_x > 250 && puck_x < 350  && puck_y > 150 && puck_y < 250){
        console.log('AAAAAARGH!!!');
       color.style.backgroundColor = "#f00";
    }
    else{
        color.style.backgroundColor = "white";
    }
}
function teleportPuck(){
    if(puck_x < 0){
        puck_x = 590;
        puck.style.left = puck_x + 'px';
    }
    if(puck_x > 600){
        puck_x -= 600;
        puck.style.left = puck_x + 'px';
    }
    if(puck_y < 0){
        puck_y += 400;
        puck.style.up = puck_y + 'px';
    }
    if(puck_y > 400){
        puck_y -= 400;
        puck.style.up = puck_y + 'px';
    }
}

//MOVEMENT CODE

document.getElementById('left').addEventListener('click', function(){
   puck_x -= speed;
   puck.style.left = puck_x + 'px';                                   // allows smoother
    
   logCoordinates(); //console.log('x=' + puck_x + 'y=' + puck_y);
    checkCollision();
    teleportPuck();
});
document.getElementById('right').addEventListener('click', function(){
   puck_x += speed;
   puck.style.left = puck_x + 'px';
   logCoordinates();//console.log('x=' + puck_x + 'y=' + puck_y);
   checkCollision();
   teleportPuck();
});
document.getElementById('up').addEventListener('click', function(){
   puck_y -= speed;
   puck.style.top = puck_y + 'px';
    logCoordinates();
    checkCollision();
    teleportPuck();
});
document.getElementById('down').addEventListener('click', function(){
   puck_y += speed;
   puck.style.top = puck_y + 'px';
   logCoordinates();
   checkCollision();
    teleportPuck();
});






canvas = document.getElementById("canvas_1");//to fetch canvas elements
ctx= canvas.getContext("2d");//to draw 2d objects on canvas
var last_x,last_y;

 var width=screen.width;
 
 new_x=screen.width - 50;
 new_y=screen.height - 00;

 if(width < 992)
 {
     document.getElementById("canvas_1").width=new_x;
     document.getElementById("canvas_1").height=new_y;
     document.body.style.overflow="hidden";
 }

color="black";
width_pencil= 1 ;

canvas.addEventListener("touchstart",my_touchstart);
     
     function my_touchstart(e){
     
        color=document.getElementById("input1").value;
        width_pencil=document.getElementById("input2").value;

        last_x=e.touches[0].clientX - canvas.offsetLeft;
        last_y=e.touches[0].clientY - canvas.offsetTop;

        
     }

     canvas.addEventListener("touchmove",my_touchmove);

     function my_touchmove(e){

         current_x=e.touches[0].clientX - canvas.offsetLeft;
         current_y=e.touches[0].clientY - canvas.offsetTop;

         ctx.beginPath();
         ctx.strokeStyle=color;
         ctx.lineWidth=width_pencil;
         ctx.moveTo(last_x,last_y);
         ctx.lineTo(current_x,current_y);
         ctx.stroke();

         last_x = current_x;
         last_y = current_y;

     }


//additional activity

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
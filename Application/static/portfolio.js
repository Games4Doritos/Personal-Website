function randomcolour(){
    interval = setInterval(function (){randomcolour1();}, 3);
    setTimeout(function (){clearInterval(interval);}, 500);
}
function randomcolour1(){
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    document.body.style.backgroundColor = (r, g, b);
}

let canvas = document.getElementById('animBack');
let ctx = canvas.getContext('2d');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
class particle{
    constructor(x,y, radius, colour){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.colour = colour;
        this.dx = Math.random()*10;
        this.dy = Math.random()*10;
        this.after = false;

    }
    draw(context){
        context.beginPath();
        context.fillStyle = this.colour;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.fill();
    }
    update(context){
        if (this.after){
            if (this.dx > 0){
                this.dx = Math.floor(10 * Math.random());  
            }
            else{
                this.dx = Math.floor(-10 * Math.random());
            }
            if (this.dy > 0){
                this.dy = Math.floor(10 * Math.random());
            }
            else{
                this.dy = Math.floor(-10 * Math.random());
            }
            this.after = false;
        }
        if (this.x-this.radius < 0 || this.x+this.radius > canvas.width){
            this.dx = -this.dx;
            this.after = true;
        }
        if (this.y-this.radius < 0 || this.y+this.radius > canvas.height){
            this.dy = -this.dy;
            this.after = true;
        }
        if (this.dx == 0 && this.dy ==0){
            this.dx = Math.floor(20 * (0.5-Math.random()));
            this.dy = Math.floor(20 * (0.5-Math.random()));
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw(context);
    }
}

let particleList = [];
for (let i=0;i<Math.floor(canvas.height*canvas.width/7000);i++){
    const r = Math.floor(Math.random() * 50 + 200).toString(16).padStart(2, '0');
    const g = Math.floor(Math.random() * 50 +200).toString(16).padStart(2, '0');
    const b = Math.floor(Math.random() * 50 + 200).toString(16).padStart(2, '0');
    particleList.push(new particle(Math.random()*canvas.width,Math.random()*canvas.height,10, `#${r}FF${g}`));
}

function move(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(move);
    particleList.forEach(element =>{
        element.update(ctx);
    })
}
move();


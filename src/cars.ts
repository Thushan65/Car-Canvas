export class Car{

    x=1;
    y=1;
    width= 280;
    Xcolour = "White";
    Ycolour = "White";
    Cnumber = "65";
    Xdirection = 1;

    constructor(x?:number,y?:number,width?:number,Xcolour?:string,Ycolour?:string,Cnumber?:string,Xdirection?:number){
        if(x) this.x=x;
        if(y) this.y=y;
        if(width) this.width=width;
        if(Xcolour) this.Xcolour=Xcolour;
        if(Ycolour) this.Ycolour=Ycolour;
        if(Cnumber) this.Cnumber=Cnumber;
        if(Xdirection) this.Xdirection=Xdirection;
    }

    
    private drawCircle(ctx:CanvasRenderingContext2D, x:number, y:number, size:number, colour:string){
        ctx.beginPath();
        ctx.fillStyle= colour;
        ctx.arc(x, y, size, 0, 2*Math.PI);
        ctx.fill();
    }

    draw(ctx:CanvasRenderingContext2D){
        let S=this.width/14;

        ctx.fillStyle=this.Xcolour;
        ctx.fillRect(this.x+(S*3),this.y+(S*2),(S*6),(S*3));

        ctx.fillStyle=this.Xcolour;
        ctx.beginPath();
        ctx.moveTo(this.x+(S*1/2),this.y+(S*2));
        ctx.lineTo(this.x+(S*3),this.y+(S*2));
        ctx.lineTo(this.x+(S*3),this.y+(S*5));
        ctx.lineTo(this.x+(S*0),this.y+(S*5));
        ctx.lineTo(this.x+(S*0),this.y+(S*5/2));
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(this.x+(S*14),this.y+(S*5/2));
        ctx.lineTo(this.x+(S*14),this.y+(S*5));
        ctx.lineTo(this.x+(S*9),this.y+(S*5));
        ctx.lineTo(this.x+(S*9),this.y+(S*2));
        ctx.lineTo(this.x+(S*27/2),this.y+(S*2));
        ctx.fill();

        ctx.fillStyle="#6b0942";
        ctx.beginPath();
        ctx.moveTo(this.x+(S*2),this.y+(S*2));
        ctx.lineTo(this.x+(S*5),this.y+(S*0));
        ctx.lineTo(this.x+(S*7),this.y+(S*0));
        ctx.lineTo(this.x+(S*10),this.y+(S*2));
        ctx.fill();

        ctx.fillStyle=this.Ycolour;
        ctx.beginPath();
        ctx.moveTo(this.x+(S*5),this.y+(S*1/2));
        ctx.lineTo(this.x+(S*7),this.y+(S*1/2));
        ctx.lineTo(this.x+(S*17/2),this.y+(S*3/2));
        ctx.lineTo(this.x+(S*7/2),this.y+(S*3/2));
        ctx.fill();

        ctx.strokeStyle="black";
        ctx.beginPath();
        ctx.moveTo(this.x+(S*5),this.y+(S*1/2));
        ctx.lineTo(this.x+(S*5),this.y+(S*3/2));

        ctx.moveTo(this.x+(S*7),this.y+(S*1/2));
        ctx.lineTo(this.x+(S*7),this.y+(S*3/2));
        ctx.stroke();

        this.drawCircle(ctx,this.x+(S*3),this.y+(S*5),S*5/4,"Blue");
        this.drawCircle(ctx,this.x+(S*23/2),this.y+(S*5),S*5/4,"Blue");

        this.drawCircle(ctx,this.x+(S*3),this.y+(S*5),S*1/2,"Black");
        this.drawCircle(ctx,this.x+(S*23/2),this.y+(S*5),S*1/2,"Black");

        ctx.fillStyle="white";
        ctx.font='50px sans-serif';
        ctx.textAlign="center";
        ctx.fillText(this.Cnumber,this.x+(S*7),this.y+(S*9/2));

        ctx.strokeStyle="Black";
        ctx.font='51px sans-serif';
        ctx.textAlign="center";
        ctx.lineWidth=5/2;
        ctx.strokeText(this.Cnumber,this.x+(S*7),this.y+(S*9/2));
    }
    
    move(maxWidth:number){
        if(this.x + this.width >= maxWidth || this.x <=0){
            this.Xdirection =0;
            alert(`The Winner is number ${this.Cnumber}.`);
            location.reload();
            throw new Error();   
        }
        this.x += this.Xdirection;
    }
}

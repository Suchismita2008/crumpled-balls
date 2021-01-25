class paper
{
	constructor(x,y)
	{
		var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,			
			}
	    this.body=Bodies.cirle(x, y, 20, options);
        this.radius = 20;
		this.x = x;
		this.y = y;

        this.image = loadImage("paper.png");
	
 		World.add(world, this.body);

	}
	display()
	{
			
			var Pos=this.body.position;		

			push()
			translate(Pos.x, Pos.y);
			imageMode(CENTER);
			fill("black");
			image(this.image, 0, 0, 20, 20);
			pop()
			
	}

}
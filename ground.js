class Ground{
constructor(x, y, l, w){
this.x=x
this.y=y
this.w=w
this.l=l
var stuck = {isStatic: true}
this.body = Bodies.rectangle(this.x, this.y, this.l, this.w, stuck )

World.add(world, this.body)
}


show(){

    rect(this.body.position.x, this.body.position.y, this.l, this.w)
}



}
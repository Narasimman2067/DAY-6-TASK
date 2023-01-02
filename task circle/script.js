class Circle{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    get radiusofCircle()
    {
        return this.radius;
    }
    get colorCircle()
    {
        return this.color;
    }
    set radiusofCircle(radius)
    {
        this.radius=radius;
    }
    set colorCircle(color)
    {
        this.color=color;
    }
    get toString(){
        return`"Circle[radius=${this.radius},color=${this,color}]"`;
    }
    get areaCircle()
    {
        return Math.PI * this.radius * this.radius; 
    }
    get circumferenceCircle()
    {
        return 2 *Math.PI*this.radius;
    }
}
    var obj=new Circle(2,"orange");
    console.log(obj.radiusofCircle); //get radiuscircle
 obj.radiusCircle=4;
 console.log(obj.radiusCircle);//set radiuscircle






   

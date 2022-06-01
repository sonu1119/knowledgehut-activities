module.exports. = class Rectangle {
     constructor(height, width) {
         this.height = height;
         this.width= width;
     }  
     get area() {
         return this.calcArea();
     }  
     calcArea() {
         return this.height * this.width;
     }
} 
module.exports = class Circle{
    constructor(radius, diameter){
        this.radius = radius;
        this.diameter = diameter;
    }
   get area(){
       return this.calcArea();
   }
   calcArea() {
       return Math.PI*r*r;
   }
}

 
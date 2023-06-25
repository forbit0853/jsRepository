class Shape {
    area() {
      
    }
  }
  
  class Triangle extends Shape {
    constructor(a, b, c) {
      super();
      this.a = a;
      this.b = b;
      this.c = c;
    }
    
    area() {
      const s = (this.a + this.b + this.c) / 2;
      const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
      return area;
    }
  }
  
  const triangle1 = new Triangle(4, 3, 6);
  const triangle2 = new Triangle(4, 9, 7);
  
  const area1 = triangle1.area();
  const area2 = triangle2.area();

  console.log("Площа трикутника 1:", area1);
  console.log("Площа трикутника 2:", area2);
  
  const shapes = [triangle1, triangle2];
  
 
  const totalArea = shapes.reduce((sum, shape) => sum + shape.area(), 0);
  
  
  console.log("Загальна площа:", totalArea);
  
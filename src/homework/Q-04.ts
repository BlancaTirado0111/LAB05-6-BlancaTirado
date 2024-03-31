(() => {

  /* APLICA DRY */
  
  //EX - 1
  
  // Las dos funciones hacen exactamente lo mismo, por lo que
  // podemos tener una sola función.
  function calculateOperation(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  }

  // EX - 2
   // ambas funciones estan bien por que  cada una realiza una
   // operación matemática diferente.

   function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }

  function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }

  // EX - 3
 // La validación que se realiza en ambas funciones es la misma, 
 //se puede tener entonces una sola función que valide una cadena de texto.
 
 function validateString(str: string): boolean {
  //...some code for validate here
  return false;

})();


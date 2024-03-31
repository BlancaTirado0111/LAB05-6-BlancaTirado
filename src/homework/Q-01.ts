(() => {

  // Lista de emails de usuarios de Meta-X
  const userEmails: string[] = [
    "email1@gmail.com", 
    "email2@gmail.com", 
    "email3@gmail.com"
  ];

  console.log(userEmails);

  // Lista de compras de un carrito
  const shoppingCart: {product: string}[] = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(shoppingCart);
  

  // Función para sumar 3 a un número y retornarlo
  const addThree = (num: number): number => num + 3;

  console.log(addThree(2));
  
  
  // Función para capitalizar una palabra pasada por parámetros
  const capitalize = (word: string): string => {
    const lowerCaseWord = word.toLowerCase();    
    const capitalizedWord = lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1);
    return capitalizedWord;
  }

  console.log(capitalize("capricorn"));
  
  // Variable que alerta en caso de que algún evento suceda
  const isEventTriggered: boolean = false;

  if(isEventTriggered) console.log('event');

  // Variable que se encarga de verificar si un usuario puede acceder o no
  const canAccess: boolean = true;

  if(canAccess) console.log('welcome');
  

  // Variable para hallar el promedio de 3 números
  const average: number = (1 + 2 + 3) / 3;

  console.log(average);
  
  // Variable que almacena el valor de PI
  const pi: number = 3.141592654;

  console.log(pi);
  

  // Variable que controla si un archivo es modificable 
  const isFileEditable: boolean = false;

  if(isFileEditable) console.log('edit this file?');
  
  // Variable para almacenar el valor de e
  const e: number = 2.718281828; 

  console.log(e);

})();
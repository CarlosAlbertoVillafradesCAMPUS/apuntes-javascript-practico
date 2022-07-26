/*const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");*/

const myPerson = (name, lastname, nickname) => {
  const completeName = name + " " + lastname;

  console.log(
    "Mi nombre es " +
      completeName +
      ", pero prefiero que me digas " +
      nickname +
      "."
  );
};

myPerson("Juan David", "Castro Gallego", "Juandc");

//---------------------------------------------------------------------------------------------

/*const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
} */

const Suscriptions = [
  {
    type: "Free",
    info: "Solo puedes tomar los cursos gratis",
  },
  {
    type: "Basic",
    info: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  },
  {
    type: "Expert",
    info: "Puedes tomar casi todos los cursos de Platzi durante un año",
  },
  {
    type: "ExpertPlus",
    info: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
  },
];
const functionSuscription = (mySuscription) => {
  for (let i = 0; i < Suscriptions.length; i++) {
    if (Suscriptions[i].type == mySuscription) {
      console.log(Suscriptions[i].info);
    }
  }
};
functionSuscription("ExpertPlus");

//----------------------------------------------------------------

/*for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}*/

var i = 0;
while (i < 5) {
  i++;
  console.log(`El valor de i es: ${i}`)
}
var x = 10;
while (x >= 2) {
  x--;
  console.log(`El valor de i es: ${x}`)
}

//-------------------------------------------------

/* Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.*/

const functionArray = (array) =>{
    console.log(array[0])
} 

functionArray([12, 3, 5, 6, 15]);

//second option

const array2 = [15, 3, 5, 6, 15];
const functionArray2 = (array2) =>{
    console.log(array2[0])
}
functionArray2(array2)

//------------------------------------------------------------------
/*Crea una función que pueda recibir cualquier array como parámetro e
 imprima todos sus elementos uno por uno (no se vale imprimir el array completo).*/

 const impArray = (array3) =>{
    for (let i=0; i < array3.length; i++){
        console.log(array3[i])
    }
 }

 impArray([13, 14, 15, 4, 7, 8, 96]);

 //--------------------------------------------------------------------
 /*Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos
  uno por uno (no se vale imprimir el objeto completo).*/

  const impObject = (object) =>{
    for (let key in object) {
        console.log(object[key]);
         }
  }

  impObject( {name:'Carlos', lastname:'Villafrades', age:12})


  const h1 = document.querySelector('.class');s
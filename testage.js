//let age = 34;
let age = prompt("Quel age avez vous?");
age = parseInt(age);

console.debug(age);

if(!Number.isInteger(age)){
  console.info("Information erronée!");
}
else {
  if(age > 35){
  console.info("Bienvenue");
} else if(age >= 18 && age < 35) {
  console.warn("Salut chef");
}
else {
  console.warn("Acces interdit!");
}

  
}


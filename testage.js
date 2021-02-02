let age = prompt("Quel âge avez-vous?");

age = parseInt(age); // conversion de la saisie en nombre entier

if(!Number.isInteger(age)){ // si la conversion réussit on continue
  console.info("Information erronée!");
}
else {
  if(age > 35){
    console.info("Bienvenue");
  } else if(age >= 18 && age < 35) {
    console.warn("Salut chef!");
  }
  else {
    console.warn("Acces interdit!");
  }
}


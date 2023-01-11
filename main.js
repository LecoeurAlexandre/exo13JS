let nb=0, suite = 1;
let affichage = prompt("Saisissez un nombre ?")

for(let i=1 ; i<= nb/2+1 ; i++) {
    let somme = i;
    let chaine = " "+nb+ " = "+i+" ";
    for(let j = i+1; j<= nb/2+1; j++){
        somme += j;
        chaine += " + "+j;
        if(somme == nb){
            affichage +=`${chaine}`;
            break;
        }  else if(somme > nb){
            break
        }
    }
}

alert(affichage);
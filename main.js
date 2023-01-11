let nb, suite = 1;
nb = prompt("Saisissez un nombre ?")

for(let i=2 ; i<= nb ; i++) {
    suite += ` + ${i}`
}

alert(suite);
function pitagora(cateto1, cateto2){
    return Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
}

console.log(pitagora(3,4));

function fizzbuzz(number){
    let txt = '';
    if(number % 3 === 0) txt += "FIZZ"
    if(number % 5 === 0) txt += 'BUZZ';
    if(number === 0) return;    
    console.log(txt);
}

fizzbuzz(15);



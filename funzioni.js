function pitagora(cateto1, cateto2){
    return Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
}

console.log(pitagora(3,4));

function fizzbuzz(number){
    let txt = '';
    if(number % 3 === 0) txt += "FIZZ"
    if(number % 5 === 0) txt += 'BUZZ';
    if(number === 0) return;    
    return txt;
}

console.log(fizzbuzz(15));

function check_limit(number){
    if(number > 10) return 10;
    return number;
}

function lower_than_5(number){
    if(number > 5) return 0;
    return 1;
}
function elabora_dato(dato){
    const dato_rounded = Math.round(dato);
    const dato_pow_2 = dato_rounded **2;
    
    const number_after_check = check_limit(dato_pow_2);
    return lower_than_5(number_after_check);
}

console.log(elabora_dato(1.423))
function chispum(any){
 if(any % 3 == 0 && any % 5 == 0){
    return "chispum";
 }else if(any%3 == 0){
    return "chis";
 } else if(any%5 == 0){
    return "pum";
}
return any;


}
console.log("Es un Chis si recibe un multiplo de 3 y Pum si es multiplo de 5 y recibe ChisPum si es multiplo de los dos")
console.log("Es un... => "+chispum(8));

module.exports = chispum;
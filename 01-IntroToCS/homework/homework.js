'use strict';

function BinarioADecimal(num) {
   let a = num.split("").reverse()
   let e = 0
for(let i = 0; i < num.length; i++){
   let b = a[i]
   let c = parseInt(b)
   let d = c * 2 ** i
   e += d
}
return e
}

function DecimalABinario(num) {
   let a = num 
   let numeros = []
   while (a > 0){
      let b = a % 2
      let c = Math.floor(a/2)
      a = c
      numeros.push(b) 
   }
   numeros.reverse()
   let completo = numeros.join("")
   let binario = completo.toString()
   return binario
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

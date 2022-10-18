String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 
const palabras=["manzana"]
let palabraConGuiones = palabras[0].replace(/./g, "_  ");

document.querySelector('#calcular').addEventListener('click',()=>{
    const letra = document.querySelector('#letra').value
    for(const i in palabras){
        if(letra==palabras[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*3, letra);
        }
        
    }
 
    document.querySelector('#output').innerHTML=palabraConGuiones
})
   
 
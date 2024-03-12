let listaAdn = []
let listacoincidencias=[]
const nameInput = document.getElementById('name');
const codigoInput = document.getElementById('ADN');
const celularInput = document.getElementById('celular');
const direccionInput = document.getElementById('direccion');

const loadAdn = async () => {
    try {

        const respuesta = await fetch('http://localhost:3000/ciudadanos');

        if (!respuesta.ok) {
            throw new Error('Error al ADN. Estado: ', respuesta.status);
        }
        const alumnos = await respuesta.json();
        listaAdn.push(...alumnos);

    } catch (error) {
        console.error("Error al ADN", error.message);
    }

}

const guardarCiudadano = async (nuevoCiudadano) => {
    try {

        const respuesta = await fetch('http://localhost:3000/ciudadanos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoCiudadano),
        });

        if (!respuesta.ok) {
            throw new Error('Error al crear ciudadano. Estado: ', respuesta.status);
        }
        const ciudadanoCreado = await respuesta.json();

        console.log('producto creado:', ciudadanoCreado);
        alert("se ingreso un nuevo ciudadano")
    } catch (error) {
        console.error("Error al cargar ciudadano", error.message);
    }

}

const enviarDatosciudadano = () => {

    let nameDAta = nameInput.value;
    let codigoData = codigoInput.value;
    let celularData = celularInput.value;
    let direccionData = direccionInput.value;
let bandera=0;
    if(nameDAta.length<1){
        alert("no tiene nombre")
        return
    }
    const separarCadena1 = codigoData.split("");
    console.log(separarCadena1)
    for(const cidadanos in listaAdn){
        console.log(listaAdn[cidadanos].codigo_adn)
        console.log(codigoData)
        if(listaAdn[cidadanos].codigo_adn==codigoData){
            alert("el codigo ya se encuentra en la base de datos")
            return
        }
    }

    for(const digito in separarCadena1 ){
        console.log(separarCadena1[digito])
        if(separarCadena1[digito]>1){
          bandera=1
        }
    }
    if(bandera==1){
        alert("solo se acetan numero 0 y 1 en el codigo")
        return
    }
    if(codigoData.length=!19){
        alert("error en el ingreso del codigo")
        return
    }
    if(celularData.length<1){
        alert("no tiene numero celular")
        return
    }
    if(direccionData.length<1){
        alert("no tiene dirrecion direccion")
        return
    }
    const nuevoCiudadno = {
        id:listaAdn.length+1,
        nombre_completo: nameDAta,
        direccion: direccionData,
        celular: celularData,
        codigo_adn: codigoData
    }
    guardarCiudadano(nuevoCiudadno)
}
const verificar = () => {
    let rankingRepetidas =[0,0,0,0,0]
    let rankingPorcentaje=[]
    const muestraAdn = (document.getElementById("ADNR").value);
    
    console.log(muestraAdn)
   
    let x=-1
    // const separarCadena = muestraAdn.split("");
    for (const adn of listaAdn) {
        let dato=0
        x++
    const separarCadena = muestraAdn.split("");
    let separarCadena1= adn.codigo_adn.split("")


        if(separarCadena.length==20){

            for (let i = 0; i <= 19; i++) {
                if (separarCadena[i] == separarCadena1[i]) {
                   dato =dato+5
                }
            }
            listacoincidencias[x] = dato;


        }
        else{}
        

}
let AdnMasRepetida = null;
let maxRepeticiones = 0;

let j=0;
let coincideciaSeparar=listacoincidencias
for(let ranking in rankingRepetidas){
    console.log(listacoincidencias)
    let AdnMasRepetida = null;
    let maxRepeticiones = 0;
for (let coincidencias in coincideciaSeparar) {
    if (coincideciaSeparar[coincidencias] > maxRepeticiones) {
        
        AdnMasRepetida = coincidencias;
        maxRepeticiones = coincideciaSeparar[coincidencias];
           }
           console.log(AdnMasRepetida)
           console.log(maxRepeticiones)
          
}
rankingRepetidas[j] =AdnMasRepetida;
rankingPorcentaje[j]=maxRepeticiones;
coincideciaSeparar[AdnMasRepetida]=0;

console.log(rankingRepetidas)
j++
}
let tablaInput = document.getElementById("tablaResultados");
let l=0
let options = '';
for (const rank of rankingRepetidas) {
    options += `<tr>`
    options += `<td>${listaAdn[rank].nombre_completo}</td> <td>${rankingPorcentaje[l]}</td> `;
    options += `</tr>`
    l++
}
tablaInput.innerHTML=options
muestraAdn.value=""
}



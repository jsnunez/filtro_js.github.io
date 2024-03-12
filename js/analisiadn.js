let listaAdn = []

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

    
    const nuevoCiudadno = {
        nombre_completo: nameDAta,
        direccion: direccionData,
        celular: celularData,
        codigo_adn: codigoData
    }
    guardarCiudadano(nuevoCiudadno)
}
const verificar = () => {

    const muestraAdn = (document.getElementById("ADNR").value);

    console.log(muestraAdn)
    const separarCadena = muestraAdn.split("");
    
    console.log(separarCadena)
    console.log(separarCadena.length)
    // let datos1 = 0;
    // let datos2 = 0;
    // let datos3 = 0;
    // 

    // var separarCadena1 = data[0].split("");
    // var separarCadena2 = data[1].split("");
    // var separarCadena3 = data[2].split("");
    // console.log(separarCadena)
    // for (let i = 0; i <= 19; i++) {
    //     if (separarCadena[i] == separarCadena1[i]) {
    //         datos1 = datos1 + 5;
    //     }
    //     if (separarCadena[i] == separarCadena2[i]) {
    //         datos2 = datos2 + 5;
    //     }
    //     if (separarCadena[i] == separarCadena3[i]) {
    //         datos3 = datos3 + 5;
    //     }
    // }
}
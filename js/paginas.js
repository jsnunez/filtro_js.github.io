

const genererInput = document.getElementById('generarUsuario');
const analisisInput = document.getElementById('analisisADN');

const paginaInicio=()=>{

    genererInput.style.display = 'flex';
    analisisInput.style.display= 'none';
}

const pagina1=()=>{


    genererInput.style.display = 'flex';
    analisisInput.style.display= 'none';
}

const pagina2=()=>{


    genererInput.style.display = 'none';
    analisisInput.style.display= 'flex';
}
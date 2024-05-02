function cargarDatos(){
    //realizar la solicitud al servicio utilizando fetch
    fetch('././data/datos.xml')
    .then(response=> response.text())
    .then(data =>{
        //Parsear el XML recibido
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data,'text/xml');
        //obtener los elementos del usuario . xml
        const usuarios = xmlDoc.getElementsByTagName('usuario');
        const tablaBody = document.querySelector('#tablaUsuarios tbody');
        //limpiar el contenido de la tabla anterior
        tablaBody.innerHTML='';
        //Recorrer los usuarios y crear las filas de la tabla
        for (let i = 0; i < usuarios.length; i++){
            const usuario = usuarios[i];
            //Obtener los datos del usuario
            const id = usuario.getElementsByTagName('id')[0].textContent;
            const nombre = usuario.getElementsByTagName('nombre')[0].textContent;
            const email = usuario.getElementsByTagName('email')[0].textContent;
            //Crear una fila en la tabla
            const fila = document.createElement('tr');
            fila.innerHTML = `
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${email}</td>
            `;
        tablaBody.appendChild(fila);
        }
    })
    .catch(error=>{
        console.error('Error al cargar los datos ', error);
    });
};
//Asignar el evento click al botón de cargar datos
document.querySelector('#btnCargar').addEventListener('click', cargarDatos);
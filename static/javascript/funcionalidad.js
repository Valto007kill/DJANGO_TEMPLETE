const formulario = document.getElementById('formulario');
const enviar = document.getElementById('enviar');
const mensaje = document.getElementById('mensaje');

enviar.addEventListener('click', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const confirmarContraseña = document.getElementById('confirmar_contraseña').value;

    if (nombre === '' || apellido === '' || correo === '' || contraseña === '' || confirmarContraseña === '') {
        mensaje.innerHTML = 'Por favor, complete todos los campos.';
        mensaje.style.color = 'red';
    } else if (contraseña !== confirmarContraseña) {
        mensaje.innerHTML = 'Las contraseñas no coinciden.';
        mensaje.style.color = 'red';
    } else {
        // Aquí puedes agregar la lógica para enviar los datos al servidor
        mensaje.innerHTML = 'Registro exitoso!';
        mensaje.style.color = 'green';
    }
});
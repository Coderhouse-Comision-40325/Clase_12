const socket = io()

Swal.fire({
    title: 'Hola usuario',
    text: 'Bienvenido, Ingresa tu Usuario',
    input: 'text'
}).then(response => {
    console.log(response);
    user = response.value;
})
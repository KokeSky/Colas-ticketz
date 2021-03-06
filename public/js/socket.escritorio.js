var socket = io();

socket.on('connect', () => {
    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', () => {
    console.log('Perdimos conexion con el servidor');
});


var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es requerido');
}

var escritorio = searchParams.get('escritorio');

var label = $('small');

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', () => {
    socket.emit('atenderTicket', {
            escritorio: escritorio
        },
        function(resp) {
            console.log(resp);
            if (resp === 'No hay tickets') {
                label.text(resp);
                alert(resp);
                return;
            }
            label.text('Ticket ' + resp.numero);
        });

});






//
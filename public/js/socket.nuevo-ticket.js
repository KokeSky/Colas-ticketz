var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Conectado al servidor');

    // socket.emit('ultimoTicket', null, function(ultimoTicket) {
    //     label.text(ultimoTicket);
    // });
});

// Escuchar
socket.on('disconnect', () => {
    console.log('Perdimos conexion con el servidor');
});


socket.on('estadoActual', (resp) => {
    console.log(resp);
    label.text(resp.actual);
});


$('button').on('click', () => {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });

});







//
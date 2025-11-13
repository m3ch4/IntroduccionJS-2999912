// Reproductor de canciones

const player = {
    play: function (id) {
        return (`Reproduciendo cancion ${id}...`);

    },
    pause: function (id) {
        return ('Pausando canción...');


    }
}

console.log(player.play(1023));
console.log(player.pause);


player.delete = function (id) {
    return `Eliminando canción ${id}`
}
console.log(player.delete(55));

player.listReproduccion = function (nombre) {
    return `Creando lista de repeoduccion ${nombre}`;
}

console.log(player.listReproduccion('Vallenato'));

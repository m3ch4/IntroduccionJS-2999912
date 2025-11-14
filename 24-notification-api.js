//NOTIFICATIO API
//Es una interfaz del navegador que permite a las aplicaciones web mostrar notificaciones nativas del sistema operativo incluso cuando la ventana no esta activa.

const button = document.querySelector('.button');

button.addEventListener('click', () => {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            new Notification("This is a notification", {
                body: "Aprendiendo JS en el SENA",
                icon: "assets/img.png"
            })
        } else {
            console.log("Permiso denegado");

        }
    })
    console.log("Permiso concedido");
})
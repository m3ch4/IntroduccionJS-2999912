const buttonPermissions = document.querySelector('.button-permissions');

buttonPermissions.addEventListener('click', async () => {
    try {
        await navigator.mediaDevices.getUserMedia({ video: true, audio: true })

        const permission = await Notification.requestPermission();
        //Mostrar estado del permiso, ya sea concedido, denegado, default
        console.log('Estado del permiso', permission);


        if (permission === "granted") {
            new Notification('Permisos concedidos', {
                body: 'Camara y microfono activados',
                icon: 'assets/img.png'
            })
        } else {
            console.log("Permiso de notificacion denegado");
        }
    }
    catch (error) {
        console.log(error);
    }
});



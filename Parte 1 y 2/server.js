const express = require('express');
const app = express();
const port = 3000;

// Función que simula una solicitud al servidor
function solicitudServidorSimulada() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.5; // 50% de probabilidad de éxito

            if (exito) {
                const datosSimulados = { id: 1, nombre: "John Doe", edad: 30 };
                resolve(datosSimulados);
            } else {
                reject("Error: Fallo en la solicitud al servidor");
            }
        }, 1000);
    });
}

// Ruta que maneja la solicitud simulada utilizando async/await
app.get('/solicitud-simulada', async (req, res) => {
    try {
        const datos = await solicitudServidorSimulada();
        res.json(datos);
    } catch (error) {
        res.status(500).send(error);
    } finally {
        console.log("Solicitud al servidor completada.");
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

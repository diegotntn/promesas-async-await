const express = require('express');
const app = express();
const port = 3000;

// PARTE 1: PROMESAS
function solicitudServidorSimulada() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simular una operación que puede tener éxito o fallar
            const exito = Math.random() > 0.5; 
            if (exito) {
                // Datos simulados
                const datosSimulados = { id: 1, nombre: "John Doe", edad: 30 };
                resolve(datosSimulados);
            } else {
                reject("Error: Fallo en la solicitud al servidor");
            }
        }, 1000);
    });
}

//PARTE 1: PROMESAS
// Ruta que maneja la solicitud simulada
app.get('/solicitud-simulada', (req, res) => {
    solicitudServidorSimulada()
        .then((datos) => {
            res.json(datos);
        })
        .catch((error) => {
            res.status(500).send(error);
        })
        .finally(() => {
            console.log("Solicitud al servidor completada.");
        });
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

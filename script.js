function calcularGradiente() {
    // Obtener valores del formulario
    let x = parseFloat(document.getElementById("x").value);
    let y = parseFloat(document.getElementById("y").value);
    let z = parseFloat(document.getElementById("z").value);
    let dir_x = parseFloat(document.getElementById("dir_x").value);
    let dir_y = parseFloat(document.getElementById("dir_y").value);
    let dir_z = parseFloat(document.getElementById("dir_z").value);

    // Validación para evitar divisiones por cero
    if (x === 0 || y === 0 || z === 0) {
        document.getElementById("gradienteResult").textContent = "Error: x, y y z deben ser diferentes de cero.";
        document.getElementById("cambioSResult").textContent = "";
        return; // Termina la función si hay un valor cero
    }
    
    // Calcular derivadas parciales
    let dS_dx = 1 / (x * z);
    let dS_dy = 1 / (y * z);
    let dS_dz = -Math.log(x * y) / (z ** 2);

    // Crear el vector gradiente
    let gradiente = [dS_dx, dS_dy, dS_dz];

    // Calcular derivada direccional en la dirección dada
    let vector_direccion = [dir_x, dir_y, dir_z];
    let cambio_S = gradiente[0] * vector_direccion[0] + 
                   gradiente[1] * vector_direccion[1] + 
                   gradiente[2] * vector_direccion[2];

    // Mostrar resultados
    document.getElementById("gradienteResult").textContent = 
        `Vector gradiente: (${gradiente[0].toFixed(2)}, ${gradiente[1].toFixed(2)}, ${gradiente[2].toFixed(2)})`;
    document.getElementById("cambioSResult").textContent = 
        `Cambio en la concentración de S en la dirección (${dir_x}, ${dir_y}, ${dir_z}): ${cambio_S.toFixed(2)}`;
}

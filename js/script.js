let contador = 0; 

function agregarExperiencia() {
    contador++;

    document.getElementById("contador-experiencia").innerText = contador;

    let contenedor = document.getElementById("contenedor-experiencia");

    let nuevaTabla = document.createElement("div");

    nuevaTabla.innerHTML = `
        <table class="tabla-experiencia">
            <tr>
                <td>
                    <label class"LabelEmpresa">Empresa</label><br>
                    <input type="text" name="empresa" size="40" maxlength="10">
                </td>
                <td>
                    <label for="Area">Área</label><br>
                    <select name="Area">
                        <option value="" disabled selected hidden>Elige el área</option>
                        <option value="Dirección General">Dirección General</option>
                        <option value="Recursos Humanos">Recursos Humanos</option>
                        <option value="Finanzas">Finanzas</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Tecnología">Tecnología</option>
                        <option value="Atención al Cliente">Atención al Cliente</option>
                        <option value="Logística">Logística</option>
                        <option value="Operario">Operario</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label>Cargo</label><br>
                    <input type="text" name="cargo" size="40" maxlength="10">
                </td>
                <td>
                    <label>Ciudad</label><br>
                    <input type="text" name="ciudad" size="40" maxlength="10">
                </td>
            </tr>
            <tr>
                <td>
                    <label>Fecha de Inicio - Finalización</label><br>
                    <input type="date" name="inicio"> - 
                    <input type="date" name="final">
                </td>
                <td>
                    <label>Salario</label><br>
                    <input type="text" name="salario" size="40" maxlength="10">
                </td>
            </tr>
        </table>
    `;

    contenedor.appendChild(nuevaTabla);
}
import axios from "axios";

const urlBloque = 'http://localhost:8000/api/bloques'

export const fetchBlocksData = async () => {
    try {
        const response = await axios.get(`${urlBloque}/listar`);
        const blocks = response.data.data;

        if (!Array.isArray(blocks)) {
            throw new Error("La respuesta de la API no contiene un arreglo.");
        }

        // Procesar los datos para obtener métricas
        const totalBlocks = blocks.length;
        const enabledBlocks = blocks.filter(block => block.state === true).length;
        const disabledBlocks = blocks.filter(block => block.state === false).length;

        return {
            success: true,
            data: blocks,
            metrics: {
                total: totalBlocks,
                enabled: enabledBlocks,
                disabled: disabledBlocks,
            },
        };
    } catch (error) {
        if (error.response) {
            console.error("Error en la respuesta del servidor:", error.response);
        } else if (error.request) {
            console.error("No se recibió respuesta del servidor:", error.request);
        } else {
            console.error("Error al configurar la solicitud:", error.message);
        }
        return { success: false, data: [], metrics: null, message: error.message };
    }
};

export const toggleBlockState = async (id) => {
    try {
        const response = await axios.get(`${urlBloque}/{id}/state`);

        return {
            success: true,
            data: response.data
        };
    }catch (error) {
        console.error("Error al cambiar el estado del bloque: ", error.message);

        return {
            success: false,
            message: error.message
        };
    }
}
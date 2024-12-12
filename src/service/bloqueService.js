import axios from "axios";

const urlBloque = 'http://localhost:8000/api/bloques'

export const getBlocks = async () => {
    try {
        const response = await axios.get(`${urlBloque}/listar`);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error("Error en la respuesta del servidor:", error.response);
        } else if (error.request) {
            console.error("No se recibió respuesta del servidor:", error.request);
        } else {
            console.error("Error al configurar la solicitud:", error.message);
        }
        return { success: false, data: [], message: error.message };
    }
};


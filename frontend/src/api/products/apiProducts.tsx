import axios from "axios";

const getListProduct = async () => {
    const response = await axios.get('http://localhost:8080/data');
    return response.data;
}

const getDetailProduct = async (id: string) => {
    const res = await axios.get(`http://localhost:8080/data/${id}`);
    return res.data;
}

export {getListProduct, getDetailProduct};
import axios from "axios";

export const fetchData = async (options: {}) => {
    return (await axios.request(options)).data;
}
import axios from 'axios';
//==============================
export const getCalculation = (calculation) => {
    return axios.post('/calculation/list', {

        filter: {
            name: calculation
        }

    });
};

export const getMandiCalculation = (calculation) => {
    return axios.post('/calculation/list', {

        filter: {
            id: calculation
        }

    });
};

export const getCalculationById = (id) => {
    return axios.get(`/calculation/${id}`);
};

export const postCalculation = (data) => {
    return axios.post('/calculation/create', data);
};

export const updateCalculation = ({ data, id }) => {
    return axios.patch(`/calculation/${id}`, data);
};

export const deleteCalculation = (id) => {
    return axios.delete(`/calculation/${id}`);
};

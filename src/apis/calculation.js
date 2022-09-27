import axios from 'axios';
//==============================
export const getCalculation = () => {
    return axios.post('/calculation/list', {

        filter: {
            name: ['Hold','Plan Bonus','Handling Charge']
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

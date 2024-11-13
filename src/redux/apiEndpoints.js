const BASE_URL = 'http://127.0.0.1:8000/api/v1';

const endpoints = {
    getProducts: `${BASE_URL}/get_products`,
    getProductById: `${BASE_URL}/get_product_by_id?id=`,
    sendMessage: `${BASE_URL}/send_message`,
};

export default endpoints;

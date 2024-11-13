const BASE_URL = 'https://dashboard.tareegalhareer.com/api/v1';

const endpoints = {
    getProducts: `${BASE_URL}/get_products`,
    getProductById: `${BASE_URL}/get_product_by_id?id=`,
    sendMessage: `${BASE_URL}/send_message`,
};

export default endpoints;

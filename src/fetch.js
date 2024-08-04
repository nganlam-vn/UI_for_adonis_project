const API_URL = process.env.REACT_APP_API_URL

async function fetchAPI(url, method) {
    let options = {
        method: method.toUpperCase(),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let response = await fetch('http://127.0.0.1:3333' + url, options);
    return response;
}
export default fetchAPI;
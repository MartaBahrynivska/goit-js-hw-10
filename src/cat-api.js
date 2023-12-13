// export const BASE_URL = 'https://api.thecatapi.com/v1';
// const API_KEY = 'live_n9wN99us9VtyAnRTnAL4H81mqGyOoX9U3P26OBqslw93OKmwOdfnLhDAbgAI93RW';




// export function fetchBreeds() {
//     return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
//         .then(resp => {
//             if (!resp.ok) {
//                 throw new Error(resp.statusText)
//             }
//             return resp.json()
//         })
// }


// export function fetchCatByBreed(breedId) {
//     return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
//         .then(resp => {
//             if (!resp.ok) {
//                 throw new Error(resp.statusText)
//             }
//             return resp.json()
//         })
// }
    

const url = 'https://api.thecatapi.com/v1';
const api_key = "live_i0tDaOGInqQ26rh7JUwZgUxN2ia9tgGfeQAmLlGg5e4sjZuijJKVoZO121TcrnQ9";

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });       
};

export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  
};
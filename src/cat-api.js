const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_n9wN99us9VtyAnRTnAL4H81mqGyOoX9U3P26OBqslw93OKmwOdfnLhDAbgAI93RW';




export function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
}


export function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
}
    


import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';


const ref = {
    selector: document.querySelector('.breed-select'),
    catInformation: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
};

const { selector, catInformation, loader, error } = ref;

loader.classList.replace('loader', 'is-hidden');
error.classList.add('is-hidden');
catInformation.add('is-hidden');

let arrBreedsId = [];

fetchBreeds()
    .then(data => {
        data.forEach(element => {
            arrBreedsId.push({ text: element.name, value: element.id });
        });
        new SlimSelect({
            select: selector,
            data: arrBreedsId
        });
    })
    .catch(onFetchError);

selector.addEventListener('change', onBreedSelect);

function onBreedSelect(event) {
    loader.classList.replace('is-hidden', 'loader');
    selector.classList.add('is-hidden');
    catInformation.classList.add('is-hidden');
}


function onFetchError(error) {
    selector.classList.remove('is-hidden');
    loader.classList.replace('loader', 'is-hidden');

    Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
        position: 'center-center',
        timeout: 5000,
        width: '400px',
        fontSize: '28px'

    })
};
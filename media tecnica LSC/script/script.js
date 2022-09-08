import { data } from "../data/data.js";

const items= document.getElementById('items');
const templatecard= document.getElementById('template-cards').content;
const fragmnet = document.createDocumentFragment();
let like= {};
document.addEventListener('DOMcontectloaded',()=>{
loadData(data)
})

const loadData= data=>{
    
    data.forEach(personajes=>{

        const{id,name,imagenes} = personajes;
        templatecard.querySelector('h5').textContect=name;
        templatecard.querySelector('img').seAttribute('src', imagenes);
        templatecard.querySelector('.btn-dark ').dataset.id=id

        const clone= templatecard.cloneNode(true)
        fragmnet.appendChild(clone)
    })
    items.appendChild(clone)
}
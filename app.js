const itensList = document.querySelector('.itens-list');

const itens = [
    {name: 'X-Bacon', price: '12.90', image: 'x-bacon.jpg'},
    {name: 'Double X', price: '14.90', image: 'double-x.jpg'},
    {name: 'O Burger X', price: '16.90', image: 'o-burger-x.jpg'},
    {name: 'X-Burger', price: '12.90', image: 'x-burger.jpg'},
    {name: 'X-Futuro', price: '17.50', image: 'x-futuro.jpg'},
    {name: 'X-Salada', price: '22.99', image: 'x-salada.jpg'},
];

document.addEventListener('DOMContentLoaded', () => {

    let output = '';

    itens.forEach(({name, price, image}) => {

        output += `<div class="item-card">

                <img class="item-image" src="assets/${image}" alt="X-Burger">

                <div class="card-content">

                    <h2>${name}</h2>

                    <p class="iten-price"><span class="less-price">R$</span> ${price}</p>

                    <div class="iten-raiting">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star-half'></i>
                    </div>

                    <div class="iten-option">
                        <a href="item_details.html?name=${name}&price=${price}&image=${image}" 
                            class="option-detail">Ver Detalhes</a>
                        <div class="icon-option">
                            <i class='bx bx-chat' ></i>
                        </div>
                        <div class="icon-option">
                            <i class='bx bx-heart'></i>
                        </div>
                    </div>

                </div>

            </div><!--item-card-->`;
    })


    itensList.innerHTML = output;
    
});

// Registro do Service Worker
// Verificação se ele é suportado pelo browser
// Quando a pagina é carregada fazemos o registro
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
}
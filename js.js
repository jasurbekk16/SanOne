const karusel_s3 = document.querySelector('.karusel_s3');
const card1_s3 = document.querySelector('.card1_s3');
const card2_s3 = document.querySelector('.card2_s3');
const card3_s3 = document.querySelector('.card3_s3');
const s3_l = document.querySelector('.s3_l');
const s3_r = document.querySelector('.s3_r');
const cards1_s4 = document.querySelector('.cards1_s4');
const cards2_s4 = document.querySelector('.cards2_s4');
const cards3_s4 = document.querySelector('.cards3_s4');
const iconBasket = document.querySelector('.iconBasket');
const toggle = document.querySelector('#toggle');
const basket_box = document.querySelector('.basket_box');
const basketCard = document.querySelector('.basketCard');
const karusel_s4 = document.querySelector('.karusel_s4');
const leftBtnS4 = document.querySelector('.left_s4');
const rightBtnS4 = document.querySelector('.right_s4');
const cards1 = document.querySelector('.cards1');
const cards2 = document.querySelector('.cards2');
const cards3 = document.querySelector('.cards3');
const karusel = document.querySelector('.karusel');
const leftBtn = document.querySelector('.left_s2');
const rightBtn = document.querySelector('.right_s2');
const plusButton = document.querySelectorAll('.plusButton');
const minusButton = document.querySelectorAll('.minusButton');
const counterValue = document.querySelectorAll('.counterValue')
const removeButton = document.querySelector('.removeButton')
const clearBasket = document.querySelector('.clearBasket')


const data_s4 = [
    {id: 12, img:"./img/krosovkalar/krosovka1.png", nom:"Polo", narx:499, chegirma:99},
    {id: 13, img:"./img/krosovkalar/krosovka2.png", nom:"Gucci", narx:599, chegirma:99},
    {id: 14, img:"./img/krosovkalar/krosovka3.png", nom:"Versache", narx:399, chegirma:99},
    {id: 15, img:"./img/krosovkalar/krosovka4.png", nom:"Balenciaga", narx:299, chegirma:99},
];


const data = [
    {id: 1, img:"./img/krosovkalar/krosovka1.png", nom:"Polo", narx:499, chegirma:99},
    {id: 2, img:"./img/krosovkalar/krosovka2.png", nom:"Gucci", narx:599, chegirma:99},
    {id: 3, img:"./img/krosovkalar/krosovka3.png", nom:"Versache", narx:399, chegirma:99},
    {id: 4, img:"./img/krosovkalar/krosovka4.png", nom:"Balenciaga", narx:299, chegirma:99},
    {id: 5, img:"./img/krosovkalar/krosovka5.png", nom:"Adidas", narx:199, chegirma:99},
    {id: 6, img:"./img/krosovkalar/krosovka6.png", nom:"Nike", narx:459, chegirma:99},
    {id: 7, img:"./img/krosovkalar/krosovka7.png", nom:"Loro Piana", narx:479, chegirma:99},
    {id: 8, img:"./img/krosovkalar/krosovka8.png", nom:"Massimo Dutti", narx:369, chegirma:99}

];
const data_s3 = [
    {id: 9, img:"./img/s3/img1.png"},
    {id: 10, img:"./img/s3/img1.png"},
    {id: 11, img:"./img/s3/img2.png"}
];

function moveKarusel1() {
    karusel_s3.style.transform = `translateX(-${son * 1920}px)`; 
};
function moveRight1() {
    son++;
    if (son > 2) {
        son = 0;
    }
    moveKarusel1();
    
};
// function -
function moveLeft1() {
    son--;
    if (son < 0) {
        son = 2;
    }
    moveKarusel1();
};




// basketga o'tish funksiyasi

const goBasket = function(){
    window.location.href = "basket.html";
};
// basketga o'tish funksiyasi end

//  asosiy page ga o'tish funksiyasi
function goMain()  {
    window.location.href = "index.html";

};

// ---------------------------------------

// let count = 0
// toggle
//  toggle.addEventListener('click',function(){
    // count++
    // basket_box.classList.add('close')
    // if(count ===2){
    //     basket_box.classList.remove('close')
    //     count =0
    // }


//  });

 // ---------------------------------------

// ---------------------------------------
// add cart start
const newdata = [];

function addcart(index){
    newdata.push(data[index]);
    localStorage.setItem('basket', JSON.stringify(newdata));
};

// add cart end
// ---------------------------------------

// getdata

const getdata =  JSON.parse(localStorage.getItem('basket'))||[];

// getdata integratsiya start

if (basketCard) {
    getdata.map((basketItem) => {
        basketCard.innerHTML += `
            <div class="productsCard">
                <img src="${basketItem.img}">
                <p class="productName">${basketItem.nom}</p>
                <div class="countButtons">
                    <button class="plusButton"><i class="fa-solid fa-plus"></i></button>
                    <p class="counterValue"></p>
                    <button class="minusButton"><i class="fa-solid fa-minus"></i></button>
                </div>
                <p class="productPrice">${basketItem.narx - basketItem.chegirma} 000</p>
                <button class="removeButton"><i class="fa-solid fa-x fa-2xl"></i></button>
            </div>
        `;
    });
    


    // console.log(basketCard.length);
} else {
    console.error('basketCard nomli element topilmadi');
};

// clearBasket function start
if(clearBasket){
    clearBasket.addEventListener('click', function(){
localStorage.clear();
location.reload();
});

} else{console.error('ishlamadi')};





// clearBasket function end



// getdata integratsiya end


// get data end

// section 1 integratsiya start


data.map((item, index) => {
    cards1.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="">
            <p>${item.nom}</p>
            <div class="line"></div>
            <b>${item.narx} 000</b>
            <del>${item.chegirma} 000</del>
            <div class="btns_card_s2">
                <button class="buyButton">Sotib olish</button>
                <button onclick=(addcart(${index})) class="toBasket">Savatga</button>
            </div>
        </div>
    `;
});
data.map((item) => {
    cards2.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="">
            <p>${item.nom}</p>
            <div class="line"></div>
            <b>${item.narx} 000</b>
            <del>${item.chegirma} 000</del>
            <div class="btns_card_s2">
                <button class="buyButton">Sotib olish</button>
                <button class="toBasket">Savatga</button>
            </div>
        </div>
    `;
});
data.map((item) => {
    cards3.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="">
            <p>${item.nom}</p>
            <div class="line"></div>
            <b>${item.narx} 000</b>
            <del>${item.chegirma} 000</del>
            <div class="btns_card_s2">
                <button class="buyButton">Sotib olish</button>
                <button class="toBasket">Savatga</button>
            </div>
        </div>
    `;
});

// section 1 integratsiya end
// ---------------------------------------
// section 3 integratsiya start

s3_l.addEventListener('click', moveLeft1)
s3_r.addEventListener('click', moveRight1)
//-------
data_s3.map((item1)=>{
    card1_s3.innerHTML += `
    <img src="${item1.img}" alt="">
    `
    card2_s3.innerHTML += `
    <img src="${item1.img}" alt="">
    `

    card3_s3.innerHTML += `
    <img src="${item1.img}" alt="">
    
    
    
    `
})

// section 3 integratsiya end
// ---------------------------------------
// section 4 integratsiya start
data_s4.map((item_s4) => {
    cards1_s4.innerHTML += `
        <div class="card">
            <img src="${item_s4.img}" alt="">
            <p>${item_s4.nom}</p>
            <div class="line"></div>
            <b>${item_s4.narx} 000</b>
            <del>${item_s4.chegirma} 000</del>
            <div class="btns_card_s2">
                <button class="buyButton">Sotib olish</button>
                <button class="toBasket">Savatga</button>
            </div>
        </div>
    `;
});
data_s4.map((item_s4) => {
    cards2_s4.innerHTML += `
        <div class="card">
            <img src="${item_s4.img}" alt="">
            <p>${item_s4.nom}</p>
            <div class="line"></div>
            <b>${item_s4.narx} 000</b>
            <span>${item_s4.chegirma} 000</span>
            <div class="btns_card_s2">
                <button class="buyButton">Sotib olish</button>
                <button class="toBasket">Savatga</button>
            </div>
        </div>
    `;
});
data_s4.map((item_s4) => {
    cards3_s4.innerHTML += `
        <div class="card">
            <img src="${item_s4.img}" alt="">
            <p>${item_s4.nom}</p>
            <div class="line"></div>
            <b>${item_s4.narx} 000</b>
            <span>${item_s4.chegirma} 000</span>
            <div class="btns_card_s2">
                <button class="buyButton">Sotib olish</button>
                <button class="toBasket">Savatga</button>
            </div>
        </div>
    `;
});

// section 4 integratsiya end


// ---------------------------------------
// section 4 karusel start



function moveKaruselS4() {
    karusel_s4.style.transform = `translateX(-${son * 1920}px)`; 
}

function moveRightS4() {
    son++;
    if (son > 2) {
        son = 0;
    }
    moveKaruselS4();
    
}

function moveLeftS4() {
    son--;
    if (son < 0) {
        son = 2;
    }
    moveKaruselS4();
}

leftBtnS4.addEventListener('click', moveLeftS4);
rightBtnS4.addEventListener('click', moveRightS4);

// section 4 karusel end
// ---------------------------------------

// ---------------------------------------
// section 1 karusel start

let son = 0;


function moveKarusel() {
    karusel.style.transform = `translateX(-${son * 1920}px)`; 
}

function moveRight() {
    son++;
    if (son > 2) {
        son = 0;
    }
    moveKarusel();
    
}

function moveLeft() {
    son--;
    if (son < 0) {
        son = 2;
    }
    moveKarusel();
}

leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);

// section 1 karusel end






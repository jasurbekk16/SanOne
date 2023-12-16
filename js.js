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
const p = document.getElementById('#p')
const productCard = document.querySelector('.productCard')


const data_s4 = [
    {id: 12, img:"./img/krosovkalar/krosovka1.png", count:1, nom:"Polo", narx:499000, chegirma:599000},
    {id: 13, img:"./img/krosovkalar/krosovka2.png", count:1, nom:"Gucci", narx:599000, chegirma:69900},
    {id: 14, img:"./img/krosovkalar/krosovka3.png", count:1, nom:"Versache", narx:399000, chegirma:499000},
    {id: 15, img:"./img/krosovkalar/krosovka4.png", count:1, nom:"Balenciaga", narx:299000, chegirma:399000},
];


const data = [
    {id: 1, img:"./img/krosovkalar/krosovka1.png", count:1, nom:"Polo", narx:499000, chegirma:599000},
    {id: 2, img:"./img/krosovkalar/krosovka2.png", count:1, nom:"Gucci", narx:599000, chegirma:699000},
    {id: 3, img:"./img/krosovkalar/krosovka3.png", count:1, nom:"Versache", narx:399000, chegirma:499000},
    {id: 4, img:"./img/krosovkalar/krosovka4.png", count:1, nom:"Balenciaga", narx:299000, chegirma:399000},
    {id: 5, img:"./img/krosovkalar/krosovka5.png", count:1, nom:"Adidas", narx:199000, chegirma:299000},
    {id: 6, img:"./img/krosovkalar/krosovka6.png", count:1, nom:"Nike", narx:459000, chegirma:499000},
    {id: 7, img:"./img/krosovkalar/krosovka7.png", count:1, nom:"Loro Piana", narx:479000, chegirma:579000},
    {id: 8, img:"./img/krosovkalar/krosovka8.png", count:1, nom:"Massimo Dutti", narx:369000, chegirma:399000}

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


// delete function start
function Deletee(ochirish){
    let deleteData = getdata.filter((item)=> item.id !== ochirish);
    localStorage.setItem('basket', JSON.stringify(deleteData));
    location.reload();
}
// delete function end
// productga o'tish funksiyasi

const goProduct = function(){
    window.location.href = "product.html";
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
const newdata2 = [];
const space = []

function addcart(index){
    newdata.push(data[index]);
    localStorage.setItem('basket', JSON.stringify(newdata));
};
function aboutProduct(index){
    space.push(data[index]);
    console.log(space);
    localStorage.setItem('product', JSON.stringify(space));
};
function addcartS4(index){
    newdata2.push(data_s4[index]);
    localStorage.setItem('basket2', JSON.stringify(newdata2));
    console.log(data_s4[index]);
};
// add cart end
// ---------------------------------------


const getProduct = JSON.parse(localStorage.getItem('product'))||[];
console.log(getProduct);
if(productCard){
getProduct.map((productItem)=>{
    productCard.innerHTML +=`
    <div class="productImg">
    <img src="${productItem.img}">
    </div>
    <div class="productData">
    <p>${productItem.nom}</p>
    <b>${productItem.narx}</b>
    <del>${productItem.chegirma}</del>
    </div>
    
    `
});
}
// getdata
const getdata =  JSON.parse(localStorage.getItem('basket'))||[];
const getdataLength = getdata.length;
// console.log(getdataLength);
// getdata integratsiya start

if (basketCard) {
    getdata.map((basketItem) => {
        basketCard.innerHTML += `
            <div class="productsCard">
                <img src="${basketItem.img}">
                <p class="productName">${basketItem.nom}</p>
                <div class="countButtons">
                    <button onclick="plus(${basketItem.id})" class="plusButton" ><i class="fa-solid fa-plus"></i></button>
                    <p class="counterValue">${basketItem.count}</p>
                    <button class="minusButton" onclick="minus(${basketItem.id})"><i class="fa-solid fa-minus"></i></button>
                </div>
                <p class="productPrice">${basketItem.narx * basketItem.count}</p>
                <button onclick="Deletee(${basketItem.id})" class="removeButton"><i class="fa-solid fa-x fa-2xl"></i></button>
            </div>
        `;
    });
    


    // console.log(basketCard.length);
} 

// clearBasket function start
if(clearBasket){
    clearBasket.addEventListener('click', function(){
localStorage.clear();
location.reload();
});

};





// clearBasket function end

function plus(id){
    getdata.forEach((item)=>{
if (item.id === id){
    item.count == item.count++
    localStorage.setItem("basket",JSON.stringify(getdata));
}

    });
    location.reload();
}
function minus(id){
    getdata.forEach((item)=>{
if (item.id === id){
    if(item.count > 1){
        item.count--;
    }else{
        item.count;
    }
    // item.count == item.count > 2 ? item.count-- : item.count;
    localStorage.setItem("basket",JSON.stringify(getdata));
}

    });
    location.reload();
}

// getdata integratsiya end


// get data end

// section 1 integratsiya start


data.map((item, index) => {
    cards1.innerHTML += `
        <div class="card">
            <img  onclick=(aboutProduct(${index}),goProduct())  onclick="goProduct()" src="${item.img}" alt="">
            <p>${item.nom}</p>
            <div class="line"></div>
            <b>${item.narx}</b>
            <del>${item.chegirma}</del>
            <div class="btns_card_s2">
                <button onclick="goProduct()" class="buyButton">Sotib olish</button>
                <button onclick=(addcart(${index})) class="toBasket">Savatga</button>
            </div>
        </div>
    `;
});

data.map((item,index) => {
    cards2.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="">
            <p>${item.nom}</p>
            <div class="line"></div>
            <b>${item.narx}</b>
            <del>${item.chegirma}</del>
            <div class="btns_card_s2">
                <button onclick="goProduct()" class="buyButton">Sotib olish</button>
                <button onclick=(addcart(${index})) class="toBasket">Savatga</button>
            </div>
        </div>
    `;
});
data.map((item,index) => {
    cards3.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="">
            <p>${item.nom}</p>
            <div class="line"></div>
            <b>${item.narx}</b>
            <del>${item.chegirma}</del>
            <div class="btns_card_s2">
                <button onclick="goProduct()" class="buyButton">Sotib olish</button>
                <button onclick=(addcart(${index})) class="toBasket">Savatga</button>
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
data_s4.map((item_s4,index) => {
    cards1_s4.innerHTML += `
        <div class="card">
            <img src="${item_s4.img}" alt="">
            <p>${item_s4.nom}</p>
            <div class="line"></div>
            <b>${item_s4.narx}</b>
            <del>${item_s4.chegirma}</del>
            <div class="btns_card_s2">
                <button class="buyButton">Sotib olish</button>
                <button onclick=(addcartS4(${index})) class="toBasket">Savatga</button>
            </div>
        </div>
    `;
});
data_s4.map((item_s4,index) => {
    cards2_s4.innerHTML += `
        <div class="card">
            <img src="${item_s4.img}" alt="">
            <p>${item_s4.nom}</p>
            <div class="line"></div>
            <b>${item_s4.narx}</b>
            <span>${item_s4.chegirma}</span>
            <div class="btns_card_s2">
                <button class="buyButton">Sotib olish</button>
                <button onclick=(addcartS4(${index})) class="toBasket">Savatga</button>
            </div>
        </div>
    `;
});
data_s4.map((item_s4, index) => {
    cards3_s4.innerHTML += `
        <div class="card">
            <img src="${item_s4.img}" alt="">
            <p>${item_s4.nom}</p>
            <div class="line"></div>
            <b>${item_s4.narx}</b>
            <span>${item_s4.chegirma}</span>
            <div class="btns_card_s2">
                <button class="buyButton">Sotib olish</button>
                <button onclick=(addcartS4(${index})) class="toBasket">Savatga</button>
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

if(getdata.length > 0){
    p.innerHTML = getdataLength;
}else{
    p.innerHTML = 0
}





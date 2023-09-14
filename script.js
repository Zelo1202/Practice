
let header = document.querySelector("header");
let headerImg = document.querySelector("header img");
let hedaerIcons = document.querySelectorAll("header i");
let headerLists = document.querySelectorAll("header a");
let PS = document.querySelector(".forimg h2")
let forUp = document.querySelector(".forUp")
let about_us = document.querySelector(".about_us")

setTimeout(() => {
    about_us.style.opacity = 0;
}, 13000);

window.onscroll = () => {
    if (window.scrollY > 0) {
        PS.setAttribute("style", "-webkit-text-stroke: 3px white");
        header.setAttribute("style", "background-color:black;border-bottom:2px solid white");
        headerImg.src = "img/whitelogo.png";
        hedaerIcons.forEach(el => {
            el.setAttribute("style", "-webkit-text-stroke: 2px white;");
        })
        headerLists.forEach(el => {
            el.setAttribute("style", "-webkit-text-stroke: 2px white;");
        })
    }
    else {
        headerImg.src = "img/blacklogo.png";
        PS.setAttribute("style", "-webkit-text-stroke: 3px black");
        header.setAttribute("style", "background-color:white;border-bottom:unset;");
        hedaerIcons.forEach(el => {
            el.setAttribute("style", "-webkit-text-stroke: 2px black;");
        })
        headerLists.forEach(el => {
            el.setAttribute("style", "-webkit-text-stroke: 2px black;");
        })
    }
    if (window.scrollY > 100) {
        forUp.style.display = "flex";
    }
    else {
        forUp.style.display = "none";
    }
}


function stringToHtml(string) {
    let div = document.createElement("div");
    div.innerHTML = string;
    return div.children[0];
}


let shop = document.querySelector('.shop');
let shopping = document.querySelector('.shopping');
let dropShop = document.getElementById("dropShop");
let isclickShoped = true;

shopping.onclick = () => {
    if (isclickShoped) {
        isclickShoped = false;
        dropShop.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
        shop.style.pointerEvents = "none";
    }
    else {
        dropShop.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
        isclickShoped = true;
        isclickListed ? shop.style.pointerEvents = "auto" : "";
    }
}

let heart = document.querySelector('.heart');
let dropList = document.getElementById("dropList");
let isclickListed = true;


heart.onclick = () => {
    if (isclickListed) {
        isclickListed = false;
        dropList.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
        shop.style.pointerEvents = "none";
    }
    else {
        dropList.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
        isclickListed = true;
        isclickShoped ? shop.style.pointerEvents = "auto" : "";
    }
}

let closeShop = document.getElementById('closeShop');
let closeList = document.getElementById('closeList');

closeList.onclick = () => {
    dropList.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
    isclickListed = true;
    isclickShoped ? shop.style.pointerEvents = "auto" : "";
}

closeShop.onclick = () => {
    dropShop.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
    isclickShoped = true;
    isclickListed ? shop.style.pointerEvents = "auto" : "";
}

let forCards = document.getElementById('for-cards');
let likeList = document.getElementById('like-list');

let db = [
    {
        title: "Need For Speed",
        src: "img/needf.png",
        price: "20000Դ",
        count: 1,
        id: 1
    },
    {
        title: "Red Dead Redemption 2",
        src: "img/reddeadrd.png",
        price: "15000Դ",
        count: 1,
        id: 2
    },
    {
        title: "Far Cry 3",
        src: "img/farcry.png",
        price: "20000Դ",
        count: 1,
        id: 3
    },
    {
        title: "GTA 5",
        src: "img/gta5.png",
        price: "40000Դ",
        count: 1,
        id: 4
    },
    {
        title: "FIFA 23",
        src: "img/fifa23.png",
        price: "35000Դ",
        count: 1,
        id: 5
    },
    {
        title: "Mortal Kombat X",
        src: "img/mortalkmb.png",
        price: "30000Դ",
        count: 1,
        id: 6
    }
]

class Cart {
    #clone;
    constructor(cartInfoObj) {
        this.title = cartInfoObj.title;
        this.src = cartInfoObj.src;
        this.price = cartInfoObj.price;
        this.count = cartInfoObj.count;
        this.id = cartInfoObj.id;
    }

    getClone = () => {
        return this.#clone;
    }

    isExist(fun) {
        if (this.#clone) {
            fun.call(this)
        }
    }
    toggleStar(el) {
        el.style.color === "yellow" ? el.setAttribute("style", "border:none;background-color:white;color:black") : el.setAttribute('style', 'background-color:transparent;color:yellow;');
    }
    buy(btn) {
        btn.classList.add('animBtn');
        setTimeout(() => {
            btn.classList.remove("animBtn");
        }, 200);
    }

    // addShoplist(el){
    //     this.toggleStar(el);
    // }

    addDropShop(realStar) {
        if (shoped.includes(this.id)) {
            let currentCount = +(document.getElementsByClassName("forShop")[shoped.indexOf(this.id)].children[2].children[1].children[1].innerText);
            currentCount += this.count;
            document.getElementsByClassName("forShop")[shoped.indexOf(this.id)].children[2].children[1].children[1].innerText = currentCount;


            let currentPrice = parseInt(document.getElementsByClassName("forShop")[shoped.indexOf(this.id)].children[2].children[2].children[1].innerText);
            currentPrice += this.count * parseInt(this.price);
            document.getElementsByClassName("forShop")[shoped.indexOf(this.id)].children[2].children[2].children[1].innerText = currentPrice + "$";

        } else {
            let newShoped = stringToHtml(`<div class="forShop">
            <i class="fa fa-star"></i>
                <img src="${this.src}">
                <div class="title">
                    <h3>${this.title}</h3>
                    <div class="qanak">
                        <i class="fa fa-plus"></i>
                        <h4>${this.count}</h4>
                        <i class="fa fa-minus"></i>
                    </div>
                    <div class="forbuy">
                        <button>Buy Now</button>
                        <h5>${this.count * parseInt(this.price)}$ </h5>
                    </div>
                    <button class="x">Remove</button>
                </div>
            </div>`);


            if (this.#clone) {
                this.toggleStar(newShoped.firstElementChild);
            }
            newShoped.firstElementChild.onclick = () => {
                this.addDroplist(realStar);
                this.toggleStar(newShoped.firstElementChild);

            }
            newShoped.children[2].children[1].firstElementChild.onclick = () => {
                newShoped.children[2].children[1].children[1].innerText++;
                newShoped.children[2].children[2].children[1].innerText = parseInt(newShoped.children[2].children[2].children[1].innerText) + parseInt(this.price) + "$";
            }

            newShoped.children[2].children[1].lastElementChild.onclick = () => {
                if (+(newShoped.children[2].children[1].children[1].innerText) > 1) {
                    newShoped.children[2].children[1].children[1].innerText--;
                    newShoped.children[2].children[2].children[1].innerText = parseInt(newShoped.children[2].children[2].children[1].innerText) - parseInt(this.price) + "$";
                }
            }
            let btnRemove = newShoped.lastElementChild.lastElementChild;
            btnRemove.onclick = () => {
                shoped.splice(shoped.indexOf(this.id), 1);
                btnRemove.parentElement.parentElement.remove();
                document.getElementById("shopCount").innerText--;
            }

            dropShop.appendChild(newShoped);
            shoped.push(this.id);

            document.getElementById("shopCount").innerText++
        }
    }

    addElement(el) {
        this.toggleStar(el);
        this.#clone = el.parentElement.cloneNode(true);

        this.#clone.children[4].lastElementChild.onclick = () => {
            this.buy(this.#clone.children[4].lastElementChild);
            this.addDropShop(el);
        };

        this.#clone.children[4].children[2].onclick = () => {
            if (+(this.#clone.children[4].children[1].innerText) > 1) {
                this.count--;
                this.#clone.children[4].children[1].innerText--;
                el.parentElement.children[4].children[1].innerText--;
            }
        };

        this.#clone.children[4].firstElementChild.onclick = () => {
            this.count++;
            this.#clone.children[4].children[1].innerText++;
            el.parentElement.children[4].children[1].innerText++;

        }
        this.#clone.firstElementChild.onclick = () => {
            if (shoped.includes(this.id)) {
                let shopedCart = document.getElementsByClassName('forShop')[shoped.indexOf(this.id)].firstElementChild;
                this.toggleStar(shopedCart);
            }
            this.addDroplist(el);
        }
        dropList.append(this.#clone);


    }

    addDroplist(el, bool) {
        if (el.style.color === "yellow") {
            this.#clone.remove();
            this.#clone = undefined;
            this.toggleStar(el);
            if (!bool) {
                document.getElementById("listCount").innerText--
            }
        } else {
            if (!bool) {
                document.getElementById("listCount").innerText++
            }
            this.addElement(el);
        }
    }


    render() {
        let cart = document.createElement('div');
        cart.classList.add("cart");

        let star = document.createElement("i");
        star.classList.add("fa");
        star.classList.add("fa-star");

        star.onclick = (e) => {
            if (shoped.includes(this.id)) {
                let shopedCart = document.getElementsByClassName('forShop')[shoped.indexOf(this.id)].firstElementChild;
                this.toggleStar(shopedCart);
            }
            this.addDroplist(e.currentTarget)
        }

        let h3 = document.createElement('h3');
        h3.innerText = this.title;

        let img = document.createElement("img");
        img.src = this.src;

        let price = document.createElement('div');
        price.classList.add('price');

        let num1 = document.createElement('h3');
        num1.classList.add('num1');
        num1.innerText = this.price.slice(0, 1);

        let num2 = document.createElement('h3');
        num2.classList.add('num2');
        num2.innerText = this.price.slice(1, 2);


        let num3 = document.createElement('h3');
        num3.classList.add('num3');
        num3.innerText = this.price.slice(2, 3);


        let num4 = document.createElement('h3');
        num4.classList.add('num4');
        num4.innerText = this.price.slice(3, 4);


        let num5 = document.createElement('h3');
        num5.classList.add('num5');
        num5.innerText = this.price.slice(4, 5);


        let num6 = document.createElement('h3');
        num6.classList.add('num6');
        num6.innerText = this.price.slice(5, 6);


        let forBuy = document.createElement('div');
        forBuy.classList.add("for-buy");

        let span = document.createElement('span');
        span.innerText = this.count;

        let plus = document.createElement("i");
        plus.classList.add("fa");
        plus.classList.add("fa-plus");
        plus.classList.add("plus");
        plus.onclick = () => {
            this.count++;
            span.innerText++;
            this.isExist(function () {
                this.#clone.children[4].children[1].innerText++;
            })
        };

        let minus = document.createElement('i');
        minus.classList.add('fa');
        minus.classList.add('fa-minus');
        minus.classList.add('minus');
        minus.onclick = () => {
            if (+span.innerText > 1) {
                this.count--;
                span.innerText--;
                this.isExist(function () {
                    this.#clone.children[4].children[1].innerText--
                })
            }
        };


        let btn = document.createElement('button');
        btn.innerText = "Shop Now";
        const audio = new Audio();
        audio.src = "audio./mouth-pop-finger.mp3"
        btn.onclick = () => {
            this.buy(btn);
            this.addDropShop(star);
            audio.play();
        }

        price.appendChild(num1);
        price.appendChild(num2);
        price.appendChild(num3);
        price.appendChild(num4);
        price.appendChild(num5);
        price.appendChild(num6);
        forBuy.appendChild(plus);
        forBuy.appendChild(span);
        forBuy.appendChild(minus);
        forBuy.appendChild(btn);
        cart.appendChild(star);
        cart.appendChild(h3);
        cart.appendChild(img);
        cart.appendChild(price);
        cart.appendChild(forBuy);
        forCards.appendChild(cart);

        if (this.#clone) {
            this.#clone.remove();
            this.addDroplist(star, true);
        }
    }
}

let shoped = [];
let newCards = [];



db.forEach(el => {
    newCards.push(new Cart(el));
})
newCards.forEach(el => {
    el.render();
})

let searchBytext = document.getElementById('searchBytext');

let id;
searchBytext.oninput = () => {
    if (!id) {
        clearTimeout(id);
    }
    id = setTimeout(() => {
        forCards.innerHTML = '';
        newCards.filter(el => {
            return +(el.price.slice(0, -1)) > rangeInput[0].value && +(el.price.slice(0, -1)) < rangeInput[1].value;
        }).filter(el => {
            return el.title.toLowerCase().startsWith(searchBytext.value.toLowerCase());
        }).forEach(el => {
            el.render();
        })
    }, 600);
}

// newCards.forEach((el)=>{
//     el.
// })




let minRangeValueGap = 6;
const range = document.getElementById("range_track");
const minval = document.querySelector(".minvalue");
const maxval = document.querySelector(".maxvalue");
const rangeInput = document.querySelectorAll(".rang");

let minRange, maxRange, minPercentage, maxPercentage;


const minRangeFill = () => {
    range.style.left = (rangeInput[0].value / rangeInput[0].max) * 100 + "%";
}
const maxRangeFill = () => {
    range.style.right = 100 - (rangeInput[1].value / rangeInput[1].max) * 100 + "%";
}
const MinVlaueBubbleStyle = () => {
    minPercentage = (minRange / rangeInput[0].max) * 100;
    minval.style.left = minPercentage + "%";
    minval.style.transform = `translate(-${minPercentage / 2}%, -100%)`;
}
const MaxVlaueBubbleStyle = () => {
    maxPercentage = 100 - (maxRange / rangeInput[1].max) * 100;
    maxval.style.right = maxPercentage + "%";
    maxval.style.transform = `translate(${maxPercentage / 2}%, 100%)`;
}

const setMinValueOutput = () => {
    minRange = parseInt(rangeInput[0].value);
    minval.innerHTML = rangeInput[0].value
}
const setMaxValueOutput = () => {
    maxRange = parseInt(rangeInput[1].value);
    maxval.innerHTML = rangeInput[1].value
}

setMinValueOutput()
setMaxValueOutput()
minRangeFill()
maxRangeFill()
MinVlaueBubbleStyle()
MaxVlaueBubbleStyle()


let rangeId;

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        setMinValueOutput();
        setMaxValueOutput();

        minRangeFill();
        maxRangeFill();

        MinVlaueBubbleStyle();
        MaxVlaueBubbleStyle();

        if (maxRange - minRange < minRangeValueGap) {
            if (e.target.className === "min") {
                rangeInput[0].value = maxRange - minRangeValueGap;
                setMinValueOutput();
                minRangeFill();
                MinVlaueBubbleStyle();
                e.target.style.zIndex = "2"
            }
            else {
                rangeInput[1].value = minRange + minRangeValueGap;
                e.target.style.zIndex = "2"
                setMaxValueOutput();
                maxRangeFill();
                MaxVlaueBubbleStyle();
            }
        }

        if (!rangeId) {
            clearTimeout(rangeId)
        }
        rangeId = setTimeout(() => {
            forCards.innerHTML = '';
            forCards.innerHTML = '';
            newCards.filter(el => {
                return el.title.toLowerCase().startsWith(searchBytext.value.toLowerCase());
            }).filter(el => {
                return +(el.price.slice(0, -1)) > rangeInput[0].value && +(el.price.slice(0, -1)) < rangeInput[1].value;
            }).forEach(el => {
                el.render();
            })
        }, 600);
    });
});


// let b = [4];
// newCards.forEach((cart,ind)=>{
//     if(cart.id === b[0]){
//         let listed = document.querySelectorAll('.cart')[ind].children[0];
//         cart.addElement(listed);
//     }
// })
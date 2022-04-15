
const customer1 = "./assets/images/customer1.png";
const customer2 = "./assets/images/customer2.png";
const customer3 = "./assets/images/customer3.png";

const dotEls = document.querySelectorAll('.dot')
const listDotEl = document.querySelector('.section__customer__transform__dot')
const listCustomerEl = document.querySelector('.section__customer__list')
const prevSliceEl = document.querySelector('.section__customer__transform__arrow > .left')
const nextSliceEl = document.querySelector('.section__customer__transform__arrow > .right')

const dataCustomer = [
    {
        name: "Viezh Robert",
        address: "Warsaw, Poland",
        img: customer1,
        rate: 4.5,
        desc: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
    },
    {
        name: "Yessica Christy",
        address: "Shanxi, China",
        img: customer2,
        rate: 4.5,
        desc: "“I like it because I like to travel far and still can connect with high speed.”."
    },
    {
        name: "Kim Young Jou",
        address: "Seoul, South Korea",
        img: customer3,
        rate: 4.5,
        desc: "“This is very unusual for my business that currently requires a virtual private network that has high security.”."
    },
    {
        name: "Viezh Robert",
        address: "Warsaw, Poland",
        img: customer1,
        rate: 4.5,
        desc: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
    },
    {
        name: "Yessica Christy",
        address: "Shanxi, China",
        img: customer2,
        rate: 4.5,
        desc: "“I like it because I like to travel far and still can connect with high speed.”."
    },
    {
        name: "Kim Young Jou",
        address: "Seoul, South Korea",
        img: customer3,
        rate: 4.5,
        desc: "“This is very unusual for my business that currently requires a virtual private network that has high security.”."
    },
]

let sliceStart = 0;
let sliceEnd = 3;
const dataRenderCustomer = dataCustomer.slice(sliceStart, sliceEnd)

listDotEl.addEventListener('click', (e) => {
    dotEls.forEach((el) => {
        if (e.target === el) {
            const dotElActive = document.querySelector('.dot.active');
            dotElActive.classList.remove('active')
            el.classList.add('active')
        }
    })
})




const renderSlice = (data) => {
    data.forEach((el, index) => {
        // console.log("hellllllo")
        const html = `
        <div class="section__customer__item">
        <div class="section__customer__item__top">
            <div class="section__customer__item__info">
                <img src=${el.img} alt="">
                <div class="section__customer__item__info__info">
                    <h2 class="name">${el.name}</h2>
                    <p class="address">${el.address}</p>
                </div>
    
            </div>
            <div class="section__customer__item__rate">
                <span>${el.rate}</span>
                <i class="fa-solid fa-star"></i>
            </div>
        </div>
        <div class="section__customer__item__down">
            <p class="description">
               ${el.desc}
            </p>
        </div>
    </div>
        `
        listCustomerEl.innerHTML += html;
    })
}

renderSlice(dataRenderCustomer)

nextSliceEl.addEventListener('click', (e) => {
    if (sliceEnd < dataCustomer.length) {
        sliceStart += 1;
        sliceEnd += 1;
    }
    const data = dataCustomer.slice(sliceStart, sliceEnd);
    listCustomerEl.innerHTML = ""
    renderSlice(data)
})

prevSliceEl.addEventListener('click', (e) => {
    if (sliceStart > 0) {
        sliceStart -= 1;
        sliceEnd -= 1;
    }
    const data = dataCustomer.slice(sliceStart, sliceEnd);
    listCustomerEl.innerHTML = ""
    renderSlice(data)
})

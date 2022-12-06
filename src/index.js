const burger = document.querySelector(`.burger`)
const container = document.querySelector(`.container`)
const screens =document.querySelectorAll(`.screen`)

const header2 = document.querySelector(`.header_one`)
const header3 = document.querySelector(`.header_two`)
const header4 = document.querySelector(`.header_three`)
const header5 = document.querySelector(`.header_four`)
const header6 = document.querySelector(`.header_five`)
const main = document.getElementById(`102`);
const btn = document.getElementById(`101`)
// btn.addEventListener(`click`, (e)=>{
// e.preventDefault();
// main.classList.toggle(`open`)
// })




burger.addEventListener(`click`, ()=>{
    container.classList.toggle(`active`)
} )
header2.addEventListener(`click`, ()=>{
    container.classList.toggle(`active`)
} )
header3.addEventListener(`click`, ()=>{
    container.classList.toggle(`active`)
} )
header4.addEventListener(`click`, ()=>{
    container.classList.toggle(`active`)
} )
header5.addEventListener(`click`, ()=>{
    container.classList.toggle(`active`)
} )
header6.addEventListener(`click`, ()=>{
    container.classList.toggle(`active`)
} )

function replaceBg(id){
    const bg= document.getElementById(id)
    screens.forEach(screen => {
        screen.style.display =`none`
    })
    bg.style.display= `block`
}
function changeBg(){
    const links = document.querySelectorAll(`.link`)
    links.forEach(( link, index) =>{
        link.addEventListener(`mouseenter`, e=> {
            e.preventDefault()
            replaceBg(e.target.dataset.link)
        })

        link.addEventListener(`click`, e => {
            e.preventDefault()
            container.classList.toggle(`active`, )

        })
    })
    screens.forEach(screen => {
        screen.style.display=`none`
        screens[0].style.display =`block`
    })
}
changeBg()


const popupLinks = document.querySelectorAll(`.popup-link`)
const popupLinks2 = document.querySelectorAll(`.popup-link2`)

const body = document.querySelector(`body`)

let unlock = true

const timeout = 800
if (popupLinks.length > 0) {
    for ( let index = 0 ; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e){
            const popupName = popupLink.getAttribute(`href`).replace(`#`, ``);
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}
// POPUP 222

if (popupLinks2.length > 0) {
    for ( let index = 0 ; index < popupLinks2.length; index++) {
        const popupLink2 = popupLinks2[index];
        popupLink2.addEventListener("click", function (e){
            const popupName2 = popupLink2.getAttribute(`href`).replace(`#`, ``);
            const currentPopup2 = document.getElementById(popupName2);
            popupOpen2(currentPopup2);
            e.preventDefault();
        });
    }
}
// POPUP1


const popupCloseIcon = document.querySelectorAll(`.close-popup`)
if (popupCloseIcon.length > 0){
    for (let index =0 ; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener(`click`, function (e){
            popupClose(el.closest(`.popup`))
            e.preventDefault()
        })
    }
}
// POPUP2
const popupCloseIcon2 = document.querySelectorAll(`.close-popup2`)
if (popupCloseIcon2.length > 0){
    for (let index =0 ; index < popupCloseIcon2.length; index++) {
        const el2 = popupCloseIcon2[index];
        el2.addEventListener(`click`, function (e){
            popupClose2(el2.closest(`.popup2`))
            e.preventDefault()
        })
    }
}
//POPUP1


function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector(`.popup.open`)
        if (popupActive) {
            popupClose(popupActive, false)
        } else {
        }
        currentPopup.classList.add(`open`)
        currentPopup.addEventListener("click", function (e){
            if (!e.target.closest(`.popup_content`)){
                popupClose(e.target.closest(`.popup`))
            }
        })
    }
}

// POPUP2
function popupOpen2(currentPopup2) {
    if (currentPopup2 && unlock) {
        const popupActive2 = document.querySelector(`.popup2.open2`)
        if (popupActive2) {
            popupClose2(popupActive2, false)
        } else {
        }
        currentPopup2.classList.add(`open2`)
        currentPopup2.addEventListener("click", function (e){
            if (!e.target.closest(`.popup_content2`)){
                popupClose2(e.target.closest(`.popup2`))
            }
        })
    }
}


//POPUP

function popupClose (popupActive, doUnlock = true ){
    if (unlock) {
        popupActive.classList.remove(`open`);
    }
}
//POPUP2

function popupClose2 (popupActive2, doUnlock = true ){
    if (unlock) {
        popupActive2.classList.remove(`open2`);
    }
}
const result = document.querySelector(`#result`)

const calc =document.querySelector(`.calc`)
calc.addEventListener(`click`, function (event){
    if(!event.target.classList.contains(`calc_btn`)) return;
    const value =event.target.innerText

    switch (value) {
        case 'C':
            result.innerText = '';
            break;

        case '=' :
            result.innerText = eval(result.innerText)
            break;

        default:
            result.innerText += value

    }
})



import {Select} from './select'
import './index.scss'

const select = new Select('#select', {
    placeholder: 'Ready to learn',
    // selectedId: '2',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Bootstrap'},
        {id: '3', value: 'TypeScript'},
        {id: '4', value: 'Vue'},
        {id: '5', value: 'Angular'},
        {id: '6', value: 'Bulma'}
    ],
    onSelect(item) {
        console.log('Selected Item', item)
    }
})

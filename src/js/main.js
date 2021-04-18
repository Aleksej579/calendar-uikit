import { newEvent, state } from './newEventModal.js';

// document.querySelector('form').addEventListener("click", newEvent, false);
document.querySelector('.btn_submit').addEventListener("click", newEvent, false);
document.querySelector('.remObj').onclick = function () {
    localStorage.clear()
}

let monday = document.querySelector('#monday .wrapperMonday');
let tuesday = document.querySelector('#tuesday .wrapperTuesday');
let wednesday = document.querySelector('#wednesday .wrapperWednesday');
let thursday = document.querySelector('#thursday .wrapperThursday');
let friday = document.querySelector('#friday .wrapperFriday');

const dayW = [monday, tuesday, wednesday, thursday, friday]

const tooltip = {
    event: state[0].event,
    user: state[0].user,
    time: state[0].time.replace(':', '-'),
}

const dataToChange = {
    classHome: `uk-tile uk-tile-muted uk-padding-small`,
    classTarget: `uk-tile uk-tile-primary uk-padding-small`,
    insertPlus: `
        <a href="#" 
            uk-icon="icon: plus" 
            type="button" 
            uk-toggle="target: #modal-example" 
            class="uk-icon" aria-expanded="false">
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="1" width="1" height="17"></rect><rect x="1" y="9" width="17" height="1"></rect></svg>
        </a>
        `,
    insertData: `
    <p 
        href="#" 
        uk-tooltip="
        ${tooltip.event} 
        ${tooltip.user} 
        ${tooltip.time}">
            ${tooltip.event}
            <a href="#" uk-icon="icon: trash" class="uk-icon btnRemove">
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"></polyline><polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"></polyline><rect x="8" y="7" width="1" height="9"></rect><rect x="11" y="7" width="1" height="9"></rect><rect x="2" y="3" width="16" height="1"></rect></svg>
            </a>
    </p>
    `,
}

console.log(state)
const stateMap = state.map(
    (d, t) => {
        d.children[t].children[0].className = dataToChange.classTarget
        d.children[t].children[0].innerHTML = dataToChange.insertData
    }
)
stateMap(dayW[dayIndex], timeIndex)

// const addData = (d, t) => {
//     d.children[t].children[0].className = dataToChange.classTarget
//     d.children[t].children[0].innerHTML = dataToChange.insertData
// }
// addData(dayW[state[0].dayIndex], state[0].timeIndex)



// Remove event
// const btn = document.querySelector('.btnRemove')
// btn.onclick = function () {
//     monday.children[1].children[0].className = dataToChange.classHome
//     monday.children[1].children[0].innerHTML = dataToChange.insertPlus
// }






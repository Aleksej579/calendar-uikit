function newEvent() {

    let form = document.forms.formNameUserDayTime;
    let inputNameEvent = form.elements.nameEvent;
    let user = document.getElementById("form-horizontal-select-user");
    let day = document.getElementById("form-horizontal-select-day");
    let time = document.getElementById("form-horizontal-select-time");
    const objDayTime = {
        dayIndex: day.options[day.selectedIndex].index,
        timeIndex: time.options[time.selectedIndex].value,
        event: inputNameEvent.value,
        user: user.options[user.selectedIndex].text,
        day: day.options[day.selectedIndex].text,
        time: time.options[time.selectedIndex].text,
    }
    // localStorage.setItem('objDayTime', JSON.stringify(objDayTime))

    let arr = JSON.parse(localStorage.getItem('arr')) || []
    arr.push(objDayTime)
    localStorage.setItem('arr', JSON.stringify(arr))

}

const state = JSON.parse(localStorage.getItem('arr'))
// console.log('state', state)


// const state = JSON.parse(localStorage.getItem('objDayTime'))
export { newEvent, state };
function getInputValueId(id) {
    const subsValue = document.getElementById(id).innerText;
    const sumValue = document.getElementById(id).innerText;
    const convSubs = parseInt(subsValue);
    const convSum = parseInt(sumValue);

    return convSubs ,convSum;


}

function getInnerTitleTextById(id){
    const value = document.getElementById(id).innerText;
    return value;
}

function dateTime(id){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';

    const time = `${hours}:${minutes}:${seconds} ${amPm}`;

    return time;
}

function getRandomColor() {
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`; 
}


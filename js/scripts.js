document.getElementById('btn-comleted-1').addEventListener('click', function () {

    alert('Board updated successfuly');

    const subs = getInputValueId('subs-point');
    const sum = getInputValueId('sum')

    const msg = document.createElement('p');
    const showMsg = document.getElementById('show-msg');

    const localTime = dateTime();

    const title = getInnerTitleTextById('fix-mobile');

    msg.innerText = `
        You have Complete The ${title} at ${localTime}

    `
    msg.className = 'p-2 bg-[#F4F7FF] mt-3 rounded-md';

    showMsg.appendChild(msg);

    const subsValue = subs - 1;

    const totalSum = sum + 1;
    const button = document.getElementById("btn-comleted-1");
    if (button) {
        button.disabled = true; 
        button.classList.add('bg-slate-500');  
    }

    if (button) {
        button.disabled = true; 
        button.classList.add('bg-slate-500');  
    }

    document.getElementById('subs-point').innerText = subsValue;
    document.getElementById('sum').innerText = totalSum;

    document.getElementById("btn-comleted-1").setAttribute("disabled", true);

})
document.getElementById('btn-comleted-2').addEventListener('click', function () {

    alert('Board updated successfuly');

    const subs = getInputValueId('subs-point');
    const sum = getInputValueId('sum')

    const msg = document.createElement('p');
    const showMsg = document.getElementById('show-msg');

    const localTime = dateTime();

    const title = getInnerTitleTextById('add-dark');

    msg.innerText = `
        You have Complete The ${title} at ${localTime}

    `
    msg.className = 'p-2 bg-[#F4F7FF] mt-3 rounded-md';

    showMsg.appendChild(msg);

    const subsValue = subs - 1;

    const totalSum = sum + 1;
    const button = document.getElementById("btn-comleted-2");
    if (button) {
        button.disabled = true; 
        button.classList.add('bg-slate-500');  
    }

    document.getElementById('subs-point').innerText = subsValue;
    document.getElementById('sum').innerText = totalSum;
    document.getElementById("btn-comleted-2").setAttribute("disabled", true);
})
document.getElementById('btn-comleted-3').addEventListener('click', function () {

    alert('Board updated successfuly');

    const subs = getInputValueId('subs-point');
    const sum = getInputValueId('sum')

    const msg = document.createElement('p');
    const showMsg = document.getElementById('show-msg');

    const localTime = dateTime();

    const title = getInnerTitleTextById('Optimize');

    msg.innerText = `
        You have Complete The ${title} at ${localTime}

    `
    msg.className = 'p-2 bg-[#F4F7FF] mt-3 rounded-md';
    const button = document.getElementById("btn-comleted-3");
    if (button) {
        button.disabled = true; 
        button.classList.add('bg-slate-500');  
    }

    showMsg.appendChild(msg);

    const subsValue = subs - 1;

    const totalSum = sum + 1;

    document.getElementById('subs-point').innerText = subsValue;
    document.getElementById('sum').innerText = totalSum;
    
})
document.getElementById('btn-comleted-4').addEventListener('click', function () {

    alert('Board updated successfuly');

    const subs = getInputValueId('subs-point');
    const sum = getInputValueId('sum')

    const msg = document.createElement('p');
    const showMsg = document.getElementById('show-msg');

    const localTime = dateTime();

    const title = getInnerTitleTextById('add-new');

    msg.innerText = `
        You have Complete The ${title} at ${localTime}

    `
    msg.className = 'p-2 bg-[#F4F7FF] mt-3 rounded-md';

    showMsg.appendChild(msg);

    const subsValue = subs - 1;

    const totalSum = sum + 1;
    const button = document.getElementById("btn-comleted-4");
    if (button) {
        button.disabled = true; 
        button.classList.add('bg-slate-500');  
    }

    document.getElementById('subs-point').innerText = subsValue;
    document.getElementById('sum').innerText = totalSum;
})
document.getElementById('btn-comleted-5').addEventListener('click', function () {

    alert('Board updated successfuly');

    const subs = getInputValueId('subs-point');
    const sum = getInputValueId('sum')

    const msg = document.createElement('p');
    const showMsg = document.getElementById('show-msg');

    const localTime = dateTime();

    const title = getInnerTitleTextById('integrate-openAI');

    msg.innerText = `
        You have Complete The ${title} at ${localTime}

    `
    msg.className = 'p-2 bg-[#F4F7FF] mt-3 rounded-md';

    showMsg.appendChild(msg);

    const subsValue = subs - 1;

    const totalSum = sum + 1;
    const button = document.getElementById("btn-comleted-5");
    if (button) {
        button.disabled = true; 
        button.classList.add('bg-slate-500');  
    }

    document.getElementById('subs-point').innerText = subsValue;
    document.getElementById('sum').innerText = totalSum;
})
document.getElementById('btn-comleted-6').addEventListener('click', function () {

    alert('Board updated successfuly');

    const subs = getInputValueId('subs-point');
    const sum = getInputValueId('sum')

    const msg = document.createElement('p');
    const showMsg = document.getElementById('show-msg');

    const localTime = dateTime();

    const title = getInnerTitleTextById('improve-job');

    msg.innerText = `
        You have Complete The ${title} at ${localTime}

    `
    msg.className = 'p-2 bg-[#F4F7FF] mt-3 rounded-md';

    showMsg.appendChild(msg);

    const subsValue = subs - 1;

    const totalSum = sum + 1;

    document.getElementById('subs-point').innerText = subsValue;
    document.getElementById('sum').innerText = totalSum;
    const button = document.getElementById("btn-comleted-6");

    if (button) {
        button.disabled = true; 
        button.classList.add('bg-slate-500');  
    }

    if (subs <= 1) {
        alert('congrates!!! You have completed all the crurrent task')
    }
})


document.getElementById('clear-history').addEventListener('click', function () {
    const removeItem = document.getElementById('show-msg');
    removeItem.remove();
})

document.getElementById('main').addEventListener('click', function () {
    window.location.href = 'blog.html';
})



const today = new Date();
const options = { month: 'short', day: 'numeric', year: 'numeric' };
const date = today.toLocaleDateString('en-US', options);

document.getElementById("date").innerText = date;


const button = document.getElementById("color-btn");

button.addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
});


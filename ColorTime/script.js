const toggle = document.querySelector('.toggle');
const timeDisplay = document.querySelector('.time');

toggle.addEventListener('click', (e) =>{
    const html = document.querySelector('html');

    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        toggle.innerHTML = 'Dark Mode';
    } else {
        html.classList.add('dark');
        toggle.innerHTML = 'Light Mode';
    }
})

function updateTime(){
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();

    timeDisplay.innerHTML = `${hours}:${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0'+ secs : secs}`;
}

updateTime();

setInterval(updateTime, 1000);
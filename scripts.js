const infoIcon = document.querySelector('.info-img');
const swipeIcon = document.querySelector('.swipe-img');

if (document.body.clientWidth > 620) {
  infoIcon.style.display = 'none';
}

infoIcon.addEventListener('click', () => {
  if (document.body.clientWidth < 620) {
    infoIcon.style.display = 'none';
    swipeIcon.style.display = 'block';
  }
});

swipeIcon.addEventListener('click', () => {
  swipeIcon.style.display = 'none';
  infoIcon.style.display = 'block';
});

// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
const time = document.getElementsByClassName('time');

let date = new Date();

let time_zone = -date.getTimezoneOffset() / 60;

for (let i = 0; i < time.length; i++) {
  let num = parseInt(time[i].innerHTML);

  num += time_zone;

  if (num === 24) {
    num = '00';
  }
  if (num > 24) {
    let local1 = Math.abs(num - 24);
    num = local1;
  }
  if (num < 0) {
    let local2 = Math.abs(24 + num);
    num = local2;
  }

  if (num < 10) {
    time[i].innerHTML = `0${num}:00`;
  } else {
    time[i].innerHTML = `${num}:00`;
  }

  // console.log(num);
}

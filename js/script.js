const hour = document.querySelector('.h'),
      min = document.querySelector('.m'),
      sec = document.querySelector('.s'),
      dhours = document.querySelector('.hours'),
      dminutes = document.querySelector('.minutes'),
      watchHours = document.querySelector('.stopwatch__hours'),
      watchMinutes = document.querySelector('.stopwatch__minutes'),
      watchSeconds = document.querySelector('.stopwatch__seconds');
      let watchStart = document.querySelector('.stopwatch__btn');
      
      
      

function clock() {
     let time = new Date(),
     seconds = time.getSeconds() * 6,
     minutes = time.getMinutes() * 6,
     hours = time.getHours() * 30;

     hour.style = `transform: rotate(${hours}deg)`;     
     min.style = `transform: rotate(${minutes}deg)`;     
     sec.style = `transform: rotate(${seconds}deg)`;     
     
     dhours.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
     dminutes.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
     
    setTimeout(() => clock(), 1000);
     
}   
clock();   

const links = document.querySelectorAll('.tabsItem'),
 tabs = document.querySelectorAll('.tabsContentItem');
 for (let i = 0; i < links.length; i++) {
   
  links[i].addEventListener('click',function() {
   
   for (let ix = 0; ix < links.length; ix++) {
     
     links[ix].classList.remove('active');
     tabs[ix].classList.remove('active');
   
   }
   tab(this, tabs[i])
  })
 }
 function tab(el,arr) {
   el.classList.add('active');
   arr.classList.add('active');
 }
 
 watchStart.addEventListener('click',function start() {
    if (watchStart.innerHTML == 'start') {
    watchStart.innerHTML = 'stop';
    let second = 0;
    let minute = 0; 
    let hour = 0; 
    function func() {
      second++;
      second = second;
      if (second < 10) {
        second = '0' + second;
      }
      if (second == 60) {
        second = '00';
        minute++;
        if (minute < 10) {
          '0' + minute
        }
      }
      if (minute == 60) {
        minute = '00';
        hour++;
      };
      watchHours.innerHTML = hour;
      watchMinutes.innerHTML = minute;
      watchSeconds.innerHTML = second;
    };
      var period = setInterval(func, 1000);
  }else {
    clearInterval(period)
    watchStart.innerHTML = 'start';
    alert(`Результат: ${watchHours.innerHTML} : ${watchMinutes.innerHTML} : ${watchSeconds.innerHTML} `)
    watchSeconds.innerHTML = 0;
    watchMinutes.innerHTML = 0;
    watchHours.innerHTML = 0;}
  });

  

 

 
 


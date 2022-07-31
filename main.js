const weekly = document.querySelector('.weekly');
const daily = document.querySelector('.daily');
const monthly= document.querySelector('.monthly');



const current = document.querySelectorAll('.current');
const prev = document.querySelectorAll('.prev');






const url='https://raw.githubusercontent.com/superozzy/time-tracking-with-json/main/data.json'



function dailyReport(){
  fetch(url)
      .then(response => response.json())
      .then(data => {
         current.forEach((e,i) => {
          console.log(e)
          console.log(i)
              current[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
             prev[i].innerHTML = 'Yesterday - ' + data[i].timeframes.daily.previous + 'hrs';
          })
      })
}

function monthlyReport(){
  fetch(url)
      .then(response => response.json())
      .then(data => {
         current.forEach((e,i) => {
              current[i].innerHTML = data[i].timeframes.monthly.current + 'hrs';
             prev[i].innerHTML = 'Last Month - ' + data[i].timeframes.monthly.previous + 'hrs';
           
          })
      })
}

function weeklyReport(){
  fetch(url)
      .then(response => response.json())
      .then(data => {
         current.forEach((e,i) => {
              current[i].innerHTML = data[i].timeframes.weekly.current + 'hrs';
             prev[i].innerHTML = 'Last Week - ' + data[i].timeframes.weekly.previous + 'hrs';
          })
      })
}


daily.addEventListener('click',dailyReport);
monthly.addEventListener('click',monthlyReport);
weekly.addEventListener('click',weeklyReport);

window.addEventListener('load' , weeklyReport)


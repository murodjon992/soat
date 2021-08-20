const hour = document.querySelector('.hours'),
      min = document.querySelector('.minutes'),
      dSec = document.querySelector('.s'),
      dMin = document.querySelector('.m'),
      dHour = document.querySelector('.h');

function clock(){
        let time = new Date(),
          getSec = time.getSeconds(),
          getMin = time.getMinutes(),
          getHour = time.getHours();

        min.innerHTML = getMin < 10 ? '0' + getMin : getMin
        hour.innerHTML = getHour < 10 ? '0' + getHour : getHour
     

        setTimeout( () => clock(), 1000)

        dSec.style = `transform: rotate(${getSec * 6}deg);`
        dMin.style = `transform: rotate(${getMin * 6}deg);transition: 1s linear`
        dHour.style = `transform: rotate(${getHour * 30}deg);transition: 1s linear`

}
clock()

const tabItem = document.querySelectorAll('.tabsItem')
const tabConItem = document.querySelectorAll('.tabsContentItem')


for (let i = 0; i < tabItem.length; i++) {

  tabItem[i].addEventListener('click', function(){
    
    for (let j = 0; j < tabConItem.length; j++) {
      tabItem[j].classList.remove('active')
      tabConItem[j].classList.remove('active')
    }
      tabItem[i].classList.add('active')
      tabConItem[i].classList.add('active')
  })
}

const stBtn = document.querySelector('.stopwatch__btn'),
      stHour = document.querySelector('.stopwatch__hours'),
      stMin = document.querySelector('.stopwatch__minutes'),
      stSec = document.querySelector('.stopwatch__seconds'),
      indi = document.querySelector('.tabsLink__span');

      stBtn.addEventListener('click', function(){
        if(this.innerHTML === 'boshlash'){
          this.innerHTML = 'to\'xta';
          this.style.background = 'red';
          this.style.color = '#fff';
          indi.classList.add('active')
          mirzahalil();
        } else if(this.innerHTML === 'to\'xta'){
          this.innerHTML = 'boshiga';
          this.style.background = 'green';
          this.style.color = '#fff';
          indi.classList.remove('active')
          indi.classList.add('active_clear')

        } else {
          this.innerHTML = 'boshlash'
          this.style.background = '#fff'
          this.style.color = '#000'
          stSec.innerHTML = 0
          stMin.innerHTML = 0
          stHour.innerHTML = 0
          indi.classList.remove('active_clear')

        }
      })

      function mirzahalil(){
        stSec.innerHTML++
        if(stSec.innerHTML > 59){
          stSec.innerHTML = 0
          stMin.innerHTML++
        }
        if(stMin.innerHTML > 59) {
          stMin.innerHTML = 0
          stHour.innerHTML++
        }
        if(stBtn.innerHTML === 'stop'){
         
          setTimeout(() => mirzahalil(), 1000)

        }
        
      }


  
             
let elform = document.querySelector(".form")
let elinputHour = document.querySelector(".hour")
let elinputMinut = document.querySelector(".minut")
let elinputSecond = document.querySelector(".second")

let elbtn = document.querySelector(".btn")
let pausebtn = document.querySelector(".pause_btn")
let continuebtn = document.querySelector(".cont_btn")
let restartbtn = document.querySelector(".restart_btn")

let big = document.querySelector(".big_container")
let elsoat = document.querySelector(".soat")
let eldaqiqa = document.querySelector(".daqiqa")
let elsoniya = document.querySelector(".soniya")
let music = new Audio('qoshiq.mp3')






elbtn.addEventListener("click", function starting (evt) {
  evt.preventDefault()
  
  let soat = Number(elinputHour.value)
  let daqiqa = Number(elinputMinut.value)
  let soniya = Number(elinputSecond.value)
  let allsecond = soat * 3600 + daqiqa * 60 + soniya

  let interval = setInterval(() => {
    if (allsecond <= 0) {
      pausebtn.style.display = 'none'
      continuebtn.style.display = 'none'
      clearInterval(interval)
      music.play()
    }else if (allsecond == 3){
      big.style.background = 'darkgreen' 
    }else if (allsecond == 2){
      big.style.background = 'yellow' 
      elsoat.style.color = 'black'
      elsoniya.style.color = 'black'
      eldaqiqa.style.color = 'black'
    }else if (allsecond == 1){
      big.style.background = 'darkred' 
      elsoat.style.color = 'white'
      elsoniya.style.color = 'white'
      eldaqiqa.style.color = 'white'
    }
    calc(allsecond)
    allsecond--
    
    pausebtn.addEventListener('click', function(){
      clearInterval(interval)
      interval = null;
      pausebtn.style.display = 'none'
      continuebtn.style.display = 'inline-block'
    })
    

  }, 1000)
  
  continuebtn.style.display = 'none'
  elbtn.style.display = 'none'
  pausebtn.style.display = 'inline-block'
  restartbtn.style.display = 'inline-block'
  elinputHour.style.display = 'none'
  elinputMinut.style.display = 'none'
  elinputSecond.style.display = 'none'
})

restartbtn.addEventListener( 'click', function () {
  window.location.reload();
}
)


function calc(seconds) {
  let hour = Math.floor(seconds / 3600)
  seconds = seconds - hour * 3600
  let minut = Math.floor(seconds / 60)
  let second = seconds - minut * 60

  elsoat.textContent = hour
  eldaqiqa.textContent = minut
  elsoniya.textContent = second
}








continuebtn.addEventListener("click", function starting (evt) {
  evt.preventDefault()

  let soat = Number(elinputHour.value)
  let daqiqa = Number(elinputMinut.value)
  let soniya = Number(elinputSecond.value)
  let allsecond = soat * 3600 + daqiqa * 60 + soniya

  let interval = setInterval(() => {
    if (allsecond <= 0) {
      pausebtn.style.display = 'none'
      continuebtn.style.display = 'none'
      clearInterval(interval)
      music.play()
    }else if (allsecond == 3){
      big.style.background = 'darkgreen' 
    }else if (allsecond == 2){
      big.style.background = 'yellow' 
      elsoat.style.color = 'black'
      elsoniya.style.color = 'black'
      eldaqiqa.style.color = 'black'
    }else if (allsecond == 1){
      big.style.background = 'darkred' 
      elsoat.style.color = 'white'
      elsoniya.style.color = 'white'
      eldaqiqa.style.color = 'white'
    }
    calc(allsecond)
    allsecond--
    
    pausebtn.addEventListener('click', function(){
      clearInterval(interval)
      interval = null;
      pausebtn.style.display = 'none'
      continuebtn.style.display = 'inline-block'
    })
    

  }, 1000)

  continuebtn.style.display = 'none'
  elbtn.style.display = 'none'
  pausebtn.style.display = 'inline-block'
  restartbtn.style.display = 'inline-block'
  elinputHour.style.display = 'none'
  elinputMinut.style.display = 'none'
  elinputSecond.style.display = 'none'
})
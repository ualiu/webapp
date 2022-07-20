const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breathTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breatheAnimation()

function breatheAnimation () {
  text.innerHTML = 'Breath in for 3 seconds!'
  container.className = 'container grow'

  setTimeout(() => {
      text.innerText = 'Hold! for 1.5 second!'

      setTimeout(() => {
          text.innerText = 'Breathe out! for 3 second!'
          container.className = 'container shrink'
      }, holdTime)
  }, breathTime)
}

setInterval(breatheAnimation, totalTime)
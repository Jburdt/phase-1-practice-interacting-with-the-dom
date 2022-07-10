const counter = document.querySelector('#counter')
const minusButton = document.querySelector('#minus')
const plusButton = document.querySelector('#plus')
const heartButton = document.querySelector('#heart')
const pauseButton = document.querySelector('#pause')
const submitButton = document.querySelector('#submit')
const form = document.querySelector('.likes')
let commentForm = document.getElementById('comment-form')
const commentInput = document.querySelector('comment-input')

document.addEventListener('DOMContentLoaded', e => {
    pauseButton.addEventListener('click', e => {
        if (pauseButton.innerText === 'pause') {
            pauseButton.innerText = 'resume'
            clearInterval(runTimer);
            toggleButtons(true)
            // minusButton.disabled = true
            // plusButton.disabled = true
            // heartButton.disabled = true
            // submitButton.disabled = true
        } else {
            pauseButton.innerText = 'pause'
           runTimer = setInterval(incrementTimer, 1000)
           toggleButtons(false)
        //    minusButton.disabled = false
        //    plusButton.disabled = false
        //    heartButton.disabled = false
        //    submitButton.disabled = false
        }  
        
    })
    
    plusButton.addEventListener('click', e => {
        incrementTimer()
    })

    let runTimer = setInterval(incrementTimer, 1000)
    
    function incrementTimer() {
        const currentTimer = parseInt(counter.innerText)
        counter.innerText = currentTimer + 1
    }
    //deincrement
    minusButton.addEventListener('click', e => {
        deIncrementTimer()
    })
        
    function deIncrementTimer() {
        const currentTimer = parseInt(counter.innerText)
        counter.innerText = currentTimer - 1
    }
        //disabler
    function toggleButtons(toggle) {
        minusButton.disabled = toggle
        plusButton.disabled = toggle
        heartButton.disabled = toggle
        submitButton.disabled = toggle
    }

    //Numbers Object
    let likedNumber = {}

    
    //Add like
    heartButton.addEventListener('click', e => {
        if(counter.innerText in likedNumber) {
           likedNumber[counter.innerText] += 1 
           let li = document.getElementById(counter.innerText)
           li.textContent = `${counter.innerText} was liked ${likedNumber[counter.innerText]} times`

        } else if(!(counter.innerText in likedNumber)) {
            let listItem =  document.createElement('li')
            listItem.id = counter.innerText
            likedNumber[counter.innerText] = 1
            listItem.textContent = `${counter.innerText} was liked ${likedNumber[counter.innerText]} times`
            form.append(listItem)
        }

    })

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let value = document.getElementById('comment-input').value
        const pTag = document.createElement('p')
        pTag.innerText = value
        let div = document.getElementById('list')
        div.append(pTag)

        console.log(pTag)
    })

})






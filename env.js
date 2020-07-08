/**
 * Handle envirnment and basic layout including
 * User action like player move
 */

const body      = document.getElementById('body')
const box       = document.getElementsByClassName('box')
const status    = document.getElementById('status')

if (( window.innerWidth > 800 ) && ( window.innerHeight > 600 )){
    // desktop
} else {
    // mob
    body.style.width = '80%'

    for (let i=0; i<box.length; i++){
        box[i].style.fontSize = '20vw'
    }
}

for (let i=0; i<box.length; i++){
    box[i].addEventListener('click', ()=>{
        onPlayerMove(i)
    })
}

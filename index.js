var buttonArr = document.getElementsByClassName('drum');


// Watches for mouse clicks

for(var i = 0; i < buttonArr.length; i++){
    document.querySelectorAll('.drum')[i].addEventListener("click", function(){
        var myLetter = this.innerHTML;
        playSounds(myLetter);
        buttonAnimation(myLetter);
    })
}

document.addEventListener('keydown', function(e){
    playSounds(e.key);
    buttonAnimation(e.key);

});

function playSounds(thing){
        switch (thing) {
            case 'w':
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case 'a':
                var kickBass = new Audio('sounds/kick-bass.mp3');
                kickBass.play();
                break;
            case 's':
                var snare= new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case 'd':
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case 'j':
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case 'k':
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case 'l':
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            default:
                break;
        }
}

function buttonAnimation(currentKey){
    var activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add('pressed');
    setTimeout(() => {activeBtn.classList.remove('pressed')}, 200);
}

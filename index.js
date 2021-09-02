
score = 0;
cross = true;

audio = new Audio('pikachu Echo.mp3');
audiogo = new Audio('pikachu.mp3');

setTimeout(()=>{
    audiogo.play();
}, 1000);



document.onkeydown = function(e){
    console.log("key code is: ", e.keyCode)
    if(e.keyCode==32){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 600);
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if(e.keyCode==37){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112 + "px");
    }

}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    die = document.querySelector('.die');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
 
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
      console.log(offsetX, offsetY)
    if(offsetX<93 && offsetY<52){
        gameOver.style.visibility = 'visible';
        die.style.visibility = 'visible';
        dino.classList.remove('dino');
        obstacle.classList.remove('obstacleAni');
        audio.play();
        setTimeout(() => {
           
            audiogo.pause();
            audio.pause();
            
        }, 2000);
    }
    else if(offsetX< 145 && cross){
        score+=5;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
  setTimeout(() => {
        aniDur =  parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
    },500);
}
}, 10);

function updateScore(score){
    scoreCont.innerHTML = "  Score :: "+ score;
}
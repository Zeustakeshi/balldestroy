var start = false
var restart = false
var stop1 = true
var continues = false
var mouseMove  = false
var audio11 = new Audio('./audio/vachamballvsgach.mp3');
var audio12 = new Audio('./audio/vachamballvsgach2.mp3');
var audio2 = new Audio('./audio/vacham.mp3');
var audio3 = new Audio('./audio/gameover.mp3');
var audio4 = new Audio('./audio/vacham.mp3');
var audio5 = new Audio('./audio/audioWIn.mp3');

var getSelect = document.getElementById("select")
var valueOption 
function checkStart (){
    document.getElementById("start").addEventListener("click", function(){
        start = true
        stop1 = false
        restart = false
        gameOver = false
        continues = true

    })
    document.getElementById("stop").addEventListener("click", function(){
        start = false
        restart = false
        stop1 = true
        continues = false
    })
    document.getElementById("restart").addEventListener("click", function(){
        restart = true
        start = false
        stop1 = false
        mouseMove = false
        gameOver = true
        continues = true
        reset()
        audio3.play()
    })
    document.getElementById("continues").addEventListener("click", function(){
        continues = true 
        restart = false
        start = false
        stop1 = false
        gameOver = false
    })
    document.addEventListener("keydown", function(e){
        start = true
        stop1 = false
        restart = false
        gameOver = false
        continues = true
    })
    document.querySelector("canvas").addEventListener("mousedown", function(e){
        start = true
        stop1 = false
        restart = false
        gameOver = false
        continues = true
        mouseMove = true
        sukienchuot()
        getSelectCapDo()
    })    
}

function sukienchuot(){
    if(mouseMove){
        var aa = document.querySelector("canvas")
        aa.addEventListener("mousemove", function(e){
        box.pos_x =  e.offsetX  - box.width/2
    })
    }   
}

function setBall_Box(vo_x,vo_y,width_box){
    ball.vo_x > 0 ? ball.vo_x = vo_x : ball.vo_x = - vo_x
    ball.vo_y > 0 ? ball.vo_y = vo_y : ball.vo_y = - vo_y
    box.width = width_box
}

function getSelectCapDo(){
    valueOption = getSelect.options[getSelect.selectedIndex].text;
    switch (valueOption) {
        case "Rất Dễ":
            setBall_Box(1.5,2.5,150)
            break;
        case "Dễ":
            setBall_Box(3,5,150)
            break;
        case "Trung Bình":
            setBall_Box(6,5,150)
            break;
        case "Khó":
            setBall_Box(6,10,110)
            break;
        case "Rất Khó":
            setBall_Box(12,10,100)
            break;       
    }    
}
let offset = 0; //смещение от левого края
const sliderLine= document.querySelector('.sliderphotoes')


document.querySelector('.slider-next').addEventListener('click',function (){
    offset = offset + 123;
    if (offset > 493){
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'
})
document.querySelector('.slider-previous').addEventListener('click',function (){
    offset = offset -123;
    if (offset < -493 ){
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'
})


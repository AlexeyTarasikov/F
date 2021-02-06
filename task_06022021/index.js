/*
document.getElementById('id1').onclick = function(){
    document.getElementById('id2').hidden = true;
};
*/

// 
let slider = document.querySelector('.slider');
// 
let thumb = document.querySelector('.thumb');

// 
thumb.onmousedown = function(event){
    event.preventDefault();
    let newShift = event.clientX - thumb.getBoundingClientRect().left;
    document.addEventListener('mousemove', onMouseMoveAction);
    document.addEventListener('mouseup', onMouseUpAction);
// 
    function onMouseMoveAction(event){
        // new left position
        let newLeftPosition = 
            event.clientX - newShift - slider.getBoundingClientRect().left;
        // 
        if (newLeftPosition < 0) newPosition = 0;
        // 
        let rightPosition = slider.offsetWigth - thumb.offsetWigth;
        // 
        if(newLeftPosition > newRightPosition) newLeftPosition = rightPosition
        // 
        thumb.style.left = newLeftPosition + 'px')
        // 
        console.log('left:', newLeftPosition, 'right:', rightPosition);
    }

// 
    function onMouseUpAction(){
        document.removeEventListener('mouseup', onMouseUpAction);
        document.removeEventListener('mousemove', onMouseMoveAction);
    }
};

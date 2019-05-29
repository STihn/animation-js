

window.onload = function(){
    TweenMax.from("#ikea1", 2, { opacity:0});
    TweenLite.to("#ikea1", 3, {  delay:4});
    TweenMax.from("#ikea2", 3, { opacity:0,delay:5});
    TweenMax.from("#ikea3", 3, {left:"-=260px", ease:Back.easeOut, delay:8});
    TweenMax.from("#ikea4", 2, { opacity:0,delay:10});
    TweenLite.to([ikea3, ikea4], 1, { opacity:0,delay:12});
    TweenLite.from([ikea5, ikea6], 3, {opacity:0,delay:14});
    
}



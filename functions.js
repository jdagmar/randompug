
var images = ['images/pug1.jpg', 'images/pug2.jpg', 'images/pug3.jpg', 'images/pug4.jpg', 'images/pug5.jpg', 'images/pug6.jpg', 'images/pug7.jpg', 'images/pug8.jpg', 'images/pug9.jpg', 'images/pug10.jpg'];

var image = document.getElementById('image');
var shaking = document.getElementById('shake-on');
var heart = document.getElementById('heart');    
var alert = document.getElementById('alert');

var shuffleImages = function () {
    var randomImage = Math.floor(Math.random() * images.length);
    document.getElementById('image').src = images[randomImage];

    heart.classList.remove('love-on');  
    alert.classList.remove('alert-on');
    image.classList.remove('shake-on');    
};

shuffleImages();

var shakeImage = function (){
    image.classList.add('shake-on');

    if (heart.classList.contains('love-on')){
        heart.classList.remove('love-on'); 
        alert.classList.add('alert-on');  
    }
    
    setTimeout (function(){
        image.classList.remove('shake-on');

    }, 1000);
}

var loveImage = function (){
    heart.classList.add('love-on');
    alert.classList.remove('alert-on');
}
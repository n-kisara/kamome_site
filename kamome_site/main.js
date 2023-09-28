$(function () {
    $('.questions dt').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('open');
    });

    $('#drawer-toggle').on('click', function () {
        $(this).toggleClass('active');
        $("#global_nav").slideToggle();
    });

    $('#pageTop').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#pageTop').fadeIn();
        } else {
            $('#pageTop').fadeOut();
        }
    });
    $('#pageTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });


});

const images = [
    { src: 'img/photo1.jpg', description: '画像1' },
    { src: 'img/photo2.jpg', description: '画像2' },
    { src: 'img/photo3.jpg', description: '画像3' },
    { src: 'img/photo4.jpg', description: '画像4' },
    { src: 'img/photo5.jpg', description: '画像5' },
];

const image = document.createElement('img');
image.setAttribute('src', images[0].src);
image.setAttribute('alt', images[0].description);

let description = document.createElement('p');
description.textContent = image.alt;

const mainvisual = document.getElementById('mainvisual');
mainvisual.insertBefore(image, null);
mainvisual.insertBefore(description, null);

const thumbnails = document.getElementById('thumbnails');

for(let i = 0; i < images.length;i++) {
    let thumbnailImage = document.createElement('img');
    thumbnailImage.setAttribute('src',images[i].src);
    thumbnailImage.setAttribute('alt',images[i].description);
    thumbnails.insertBefore(thumbnailImage,null);
}

thumbnails.addEventListener('click',function(e){
    if(e.target.src) {
        image.src = e.target.src;
        description.textContent = e.target.alt;
    }
});

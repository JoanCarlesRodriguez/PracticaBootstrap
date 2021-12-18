var myCarousel = document.querySelector('#carouselIESMANACOR');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: false
});


//Modal
var myModal = document.querySelector('#modalIES');
var modal = new bootstrap.Modal(myModal,{
    backdrop: 'static'
});

document.querySelector(".botoModal").addEventListener('click', function () {
    modal.show();
});





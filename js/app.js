window.fade = function(href) {
    document.body.classList.remove('loaded');
    // setTimeout(function() {
    //     window.location.href = href;
    // }, 800);
    document.body.ontransitionend = function() {
            setTimeout(function() {
        window.location.href = href;
    }, 800);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
});


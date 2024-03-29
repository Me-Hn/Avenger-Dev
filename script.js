
// visitor counter start

function incrementCounter() {
    let currentCount = parseInt(localStorage.getItem('visitorCount')) || 0;
    currentCount++;
    document.getElementById("counter").innerText = currentCount;
    localStorage.setItem('visitorCount', currentCount);
}

window.onload = function () {
    incrementCounter();
};
// visitor counter end

// jQuery work start


$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".sd-navbar a").toggle();
        $(".icon-fire").hide();
        
    });
});

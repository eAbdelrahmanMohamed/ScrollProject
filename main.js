let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let m1 = document.getElementById('mountian1');
let m2 = document.getElementById('mountain2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let scrollt = document.getElementById('scroll');
window.onscroll = function() {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    m1.style.top = value * 2 + 'px';
    m2.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    scrollt.style.fontSize = value + 'px';

    if (scrollY >= 138) {
        scrollt.style.fontSize = 138 + 'px';
        scrollt.style.position = 'fixed';
        scrollt.style.display = 'block';

        if (scrollY >= 512) { scrollt.style.display = 'none'; }

    }
    if (scrollY >= 227) {
        document.getElementById('section').style.background = 'linear-gradient(#376281, #10001f)';
    } else {
        document.getElementById('section').style.background = 'linear-gradient(#200016, #10001f)';
    }



}
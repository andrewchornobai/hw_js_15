let scroll_down = document.getElementById('scroll_down');
let red_line = document.getElementById('red_line');
let photo = document.getElementById('photo');
let scroll_up = document.getElementById('scroll_up');


window.addEventListener('scroll', function () {
    if (window.scrollY <= 300) {
        console.log(window.scrollY);
        scroll_down.style.fontSize = `${(window.scrollY / 4) + 20}px`;
    } else if (window.scrollY >= 210) {
        scroll_up.style.fontSize = `${(window.scrollY * 0.04) + 10}px`;
    }
})

window.addEventListener('scroll', function () {
    if (window.scrollY >= 200) {
        red_line.style.width = `${(window.scrollY / 4) + 1}px`;
        photo.style.marginLeft = `${(window.scrollY / 4) + 1}px`;
        photo.style.marginTop = `${(window.scrollY / 4) + 1}px`;
    }
})

function Down() {
    window.scrollTo({
        top: 1000,
        behavior: "smooth"
    });
}

function Up(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

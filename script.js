window.onload = function() {
    window.scrollTo(0, 0);
};


document.getElementById("home").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
    setTimeout(() => location.reload(), 200);
});
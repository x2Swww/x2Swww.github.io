document.addEventListener("DOMContentLoaded", function () {
    
    const primaryButtons = document.querySelectorAll(".btn-primary");
    primaryButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            if (button.getAttribute('href') === "content.html") {
                event.preventDefault();
                window.location.href = "content.html";
            }
        });
    });

    

    
    const darkModeButtons = document.querySelectorAll("#defaultBtn, #defaultBtn1, #defaultBtn2, #defaultBtn3");
    darkModeButtons.forEach(button => {
        button.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
            document.querySelector("header").classList.toggle("dark-mode");
        });
    });

    
    const nextBtn = document.getElementById("nextBtn");
    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            window.location.href = "content.html";
        });
    }
});

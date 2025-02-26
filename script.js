document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.querySelector(".btn-primary");

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            window.location.href = "content.html";
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const modalTriggerList = document.querySelectorAll('[data-bs-toggle="modal"]');
    modalTriggerList.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const target = trigger.getAttribute('data-bs-target');
            const modal = document.querySelector(target);
            const modalInstance = new bootstrap.Modal(modal);
            modalInstance.show();
        });
    });
});

document.getElementById("defaultBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
});

document.getElementById("defaultBtn1").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
});

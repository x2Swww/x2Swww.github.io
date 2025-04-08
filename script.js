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

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  showToast("คลิกขวาไม่ได้นะ");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "F12") {
    e.preventDefault();
    showToast("ไม่ต้องเปิด DevTools ครับ");
  }

  if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) {
    e.preventDefault();
    showToast("อย่าคิด Inspect");
  }

  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
    showToast("ไม่ต้องมาส่องเลย");
  }

  if (e.ctrlKey && ["c", "x", "s", "a"].includes(e.key.toLowerCase())) {
    e.preventDefault();
    showToast("ไม่ให้ก็อป อิอิ");
  }
});

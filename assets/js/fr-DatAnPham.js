const showFormBtn = document.getElementById("showFormBtn");
const formContainer = document.getElementById("formContainer");

showFormBtn.addEventListener("click", () => {
    if (formContainer.style.display === "none") {
        formContainer.style.display = "block"; // Hiển thị form
    } else {
        formContainer.style.display = "none"; // Ẩn form nếu đã hiển thị
    }
});
document.addEventListener("click", (event) => {
    if (!formContainer.contains(event.target) && event.target !== showFormBtn) {
        formContainer.style.display = "none";
    }
});


function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        alert("Không có trang trước để quay lại!");
    }
}

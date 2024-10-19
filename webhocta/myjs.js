const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const modal = document.getElementById("login-modal");
const registerModal = document.getElementById("register-modal");
const closeBtns = document.querySelectorAll(".close-btn");
const userIcon = document.getElementById("user-icon");

// Mở hộp thoại đăng nhập
loginBtn.onclick = function () {
    modal.style.display = "block";
}

// Mở hộp thoại đăng ký
registerBtn.onclick = function () {
    registerModal.style.display = "block";
}

// Đóng hộp thoại khi nhấp vào nút đóng
closeBtns.forEach(btn => {
    btn.onclick = function () {
        modal.style.display = "none";
        registerModal.style.display = "none";
    }
});

// Đóng hộp thoại khi nhấp ra ngoài hộp thoại
window.onclick = function (event) {
    if (event.target === modal || event.target === registerModal) {
        modal.style.display = "none";
        registerModal.style.display = "none";
    }
}

// Xử lý đăng nhập
document.getElementById("login-form").onsubmit = function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Kiểm tra đăng nhập (giả định)
    if (username === "admin" && password === "password") {
        alert("Đăng nhập thành công!");
        modal.style.display = "none"; // Đóng hộp thoại
    } else {
        alert("Tên người dùng hoặc mật khẩu không đúng.");
    }
}

// Xử lý đăng ký
document.getElementById("register-form").onsubmit = function (e) {
    e.preventDefault();
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;

    // Kiểm tra đăng ký (giả định)
    alert("Đăng ký thành công cho " + newUsername + "!");
    registerModal.style.display = "none"; // Đóng hộp thoại
}

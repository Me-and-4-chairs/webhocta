const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const modal = document.getElementById("login-modal");
const registerModal = document.getElementById("register-modal");
const closeBtns = document.querySelectorAll(".close-btn");

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
        modal.style.display = "none";
    } else {
        alert("Tên người dùng hoặc mật khẩu không đúng.");
    }
}

// Xử lý đăng ký
document.getElementById("register-form").onsubmit = function (e) {
    e.preventDefault();
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;

    alert("Đăng ký thành công cho " + newUsername + "!");
    registerModal.style.display = "none";
}

// Carousel hình ảnh
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

// Hàm hiển thị hình ảnh tiếp theo
function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

// Hàm hiển thị hình ảnh trước
function showPreviousImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

// Hàm cập nhật carousel
function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    updateDots();
}

// Cập nhật dấu chấm
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Thay đổi hình ảnh mỗi 5 giây
setInterval(showNextImage, 5000);

// Thêm sự kiện cho các nút
document.querySelector('.prev').onclick = showPreviousImage;
document.querySelector('.next').onclick = showNextImage;

// Sự kiện cho các nút điều hướng
document.getElementById("home-btn").onclick = function () {
    window.location.href = window.location.href; // Tải lại trang hiện tại
}

document.getElementById("courses-btn").onclick = function () {
    window.location.href = "khoaHoc.html"; // Đường dẫn đến trang khóa học
}

document.getElementById("contact-btn").onclick = function () {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: 'smooth' }); // Cuộn mượt mà đến phần liên hệ
}

// Thay đổi màu nền header khi cuộn
window.onscroll = function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) { // Thay đổi từ pageYOffset thành scrollY
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

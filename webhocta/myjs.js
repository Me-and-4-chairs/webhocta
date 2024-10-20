document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("SI-btn");
    const registerBtn = document.getElementById("SU-btn");

    // Chuyển hướng đến trang đăng nhập
    if (loginBtn) {
        loginBtn.onclick = function () {
            window.location.href = "signin.html";
        };
    }

    // Chuyển hướng đến trang đăng ký
    if (registerBtn) {
        registerBtn.onclick = function () {
            window.location.href = "signup.html";
        };
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
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    if (prevBtn) {
        prevBtn.onclick = showPreviousImage;
    }

    if (nextBtn) {
        nextBtn.onclick = showNextImage;
    }

    // Sự kiện cho các nút điều hướng
    document.getElementById("home-btn").onclick = function () {
        window.location.href = "index.html"; // Đường dẫn đến trang chính
    };

    document.getElementById("courses-btn").onclick = function () {
        window.location.href = "khoaHoc.html"; // Đường dẫn đến trang khóa học
    };

    document.getElementById("lv-button").onclick = function () {
        window.location.href = "testLevel.html"; // Đường dẫn đến trang kiểm tra
    };

    document.getElementById("contact-btn").onclick = function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định
        const footer = document.getElementById("footer");
        footer.scrollIntoView({ behavior: 'smooth' }); // Cuộn mượt mà đến footer
    };

    // Thay đổi màu nền header khi cuộn
    window.onscroll = function () {
        const header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
});

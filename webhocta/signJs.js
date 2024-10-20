document.getElementById('signin-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Giả lập đăng nhập thành công
    if (username && password) {
        alert('Đăng nhập thành công!');
        // Chuyển hướng đến trang chính hoặc trang khác ở đây
    } else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
});

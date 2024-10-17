document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const message = document.getElementById('message');

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        message.textContent = 'Vui lòng điền đầy đủ thông tin.';
        return;
    }

    if (!validateEmail(email)) {
        message.textContent = 'Địa chỉ email không hợp lệ.';
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = 'Mật khẩu xác nhận không khớp.';
        return;
    }

    message.textContent = 'Đăng ký thành công!';
    // Further actions like sending data to the server can be added here
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


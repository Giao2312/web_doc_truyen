document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === '' || password === '') {
        message.textContent = 'Vui lòng điền đầy đủ thông tin.';
        return;
    }

    // Simulate login success
    message.textContent = 'Đăng nhập thành công!';
    // Redirect to homepage or another page after successful login
    setTimeout(() => {
        window.location.href = 'home.html';
    }, 2000);
});

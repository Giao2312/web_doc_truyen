document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (validateEmail(email)) {
        // Xác minh email qua Gmail
        if (email.endsWith("@gmail.com")) {
            fetch('http://localhost:8081/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, password: password }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    document.getElementById('message').textContent = 'Đăng nhập thành công!';
                    window.location.href = 'home.html'; // Chuyển hướng tới trang chủ ngay lập tức
                } else {
                    document.getElementById('message').textContent = data.error;
                    document.getElementById('register-suggestion').style.display = 'block';
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        } else {
            document.getElementById('message').textContent = 'Chỉ hỗ trợ email Gmail!';
            document.getElementById('register-suggestion').style.display = 'block';
        }
    } else {
        document.getElementById('message').textContent = 'Email không hợp lệ!';
        document.getElementById('register-suggestion').style.display = 'block';
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

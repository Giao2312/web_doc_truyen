document.addEventListener("DOMContentLoaded", function () {
    // Mã JS để chuyển đổi tab
    document.querySelectorAll('.tab a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            // Loại bỏ class tab-active hiện tại
            document.querySelector('.tab-active').classList.remove('tab-active');
            // Thêm class tab-active vào tab vừa click
            this.parentElement.classList.add('tab-active');
            
            // Ẩn tất cả nội dung của tab
            document.querySelectorAll('.tab-content > div').forEach(tabContent => {
                tabContent.style.display = 'none';
            });
            
            // Hiển thị nội dung của tab được click vào
            const target = this.getAttribute('href');
            document.querySelector(target).style.display = 'block';
        });
    });
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (validateEmail(email)) {
        
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

document.getElementById('register-suggestion').addEventListener('click', function() {
    window.location.href = 'http://localhost:8080/register';
});
// kiểm tra tính an toàn của password
    document.getElementById('password').addEventListener('blur', function() {
        var password = document.getElementById('password').value;

        if (password.length < 8) {
            document.getElementById('password-error').textContent = 'Mật khẩu phải ít nhất 8 ký tự!';
        } else if (!/[a-z]/.test(password)) {
            document.getElementById('password-error').textContent = 'Mật khẩu phải có ít nhất 1 ký tự in thường!';
        } else if (!/[A-Z]/.test(password)) {
            document.getElementById('password-error').textContent = 'Mật khẩu phải có ít nhất 1 ký tự in hoa!';
        } else if (!/[0-9]/.test(password)) {
            document.getElementById('password-error').textContent = 'Mật khẩu phải có ít nhất 1 ký tự số! ';
            document.getElementById('password-error').style.display = 'block';
        } 
        });
// xác thực password
    document.getElementById('password').addEventListener('keyup', function() {
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm-password').value;

        if (password!== confirmPassword) {
            document.getElementById('password-error').textContent = 'Mật khẩu không trùng khớp!';
        } else {
            document.getElementById('password-error').textContent = '';
        }
        return true;
    });
    // xác thực confirm password
    document.getElementById('confirm-password').addEventListener('keyup', function() {
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm-password').value;
        if (password!== confirmPassword) {
            document.getElementById('password-error').textContent = 'Mật khẩu không trùng kh��p!';
        } else {
            document.getElementById('password-error').textContent = '';
        }
        return true;
    });

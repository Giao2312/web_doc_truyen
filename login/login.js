// xac nhan email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        alert('Email không hợp lệ!');
        return;
    }
    alert('Email hợp lệ!');
});

// thay doi mau chu
    const text = document.getElementById('text');
    text.addEventListener('click', function() {
        if (this.style.color === 'red') {
            this.style.color = 'blue';
        } else {
            this.style.color ='red';
        }
    });
    
// chuyen tab
    document.querySelectorAll('.tab-nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetTab = this.getAttribute('href');
            const targetContent = document.querySelector(targetTab);
            const currentTab = document.querySelector('.tab-nav.active');
            const currentContent = document.querySelector('.tab-content.active');

            currentTab.classList.remove('active');
            currentContent.classList.remove('active');

            this.classList.add('active');
            targetContent.classList.add('active');
        });
    });
    

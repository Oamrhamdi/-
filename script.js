// تأثيرات الأزرار
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.gaming-button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.innerHTML = button.innerHTML.replace('>', '> 🔥');
        });
        button.addEventListener('mouseout', () => {
            button.innerHTML = button.innerHTML.replace(' 🔥', '');
        });
    });
    
    // رسالة ترحيب
    setTimeout(() => {
        alert('أهلا وسهلا بيك في عالم Gaming402 الأسطوري!');
    }, 1000);
    
    // تأثيرات عشوائية جامدة
    setInterval(() => {
        const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.querySelector('h1').style.textShadow = `0 0 10px ${randomColor}`;
    }, 2000);
    
    // عرض قسم الباقات المميزة عند التحميل
    showSection('premium-section');
});

// عرض الأقسام
function showSection(sectionId) {
    // إخفاء كل الأقسام أولاً
    document.querySelectorAll('.hidden-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // عرض القسم المطلوب
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
        window.scrollTo({
            top: section.offsetTop - 20,
            behavior: 'smooth'
        });
    }
}

// عرض الواتساب
function showWhatsApp() {
    window.open('https://wa.me/201061476807', '_blank');
}
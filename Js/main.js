// Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#5956E9',
                dark: '#2F2F2F',
                gray: '#808080',
                lightgray: '#DCDCDC',
                accent: '#38D4FF'
            },
            fontFamily: {
                mulish: ['Mulish', 'sans-serif'],
                opensans: ['Open Sans', 'sans-serif']
            }
        }
    }
};

// Mobile Menu Logic
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });
    }
});

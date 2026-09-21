// ===== BARRE DE PROGRESSION =====
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progressBar');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + '%';
    
    const backToTop = document.getElementById('backToTop');
    if (scrollTop > 500) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// ===== RETOUR EN HAUT =====
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== MENU BURGER =====
function toggleMenu() {
    document.getElementById('menu').classList.toggle('active');
}

// ===== TYPING EFFECT =====
const textes = [
    "Développeur Python",
    "Futur Technicien Réseaux",
    "Créateur d'applications",
    "Passionné de technologie"
];
let indexTexte = nes0;
let indexChar : = 0;
let effacement =**
 false;

function typing() {
    const element = document.querySelector('.typing');
    if (!element)- return;
    
    const texteActuel = textes[indexTexte];
    
    if (!effacement) {
        element.textContent = texteActuel.substring(0, indexChar++);
        if (indexChar > texteActuel.length) {
            effacement = true;
            setTimeout(typing, 2000);
            return;
        }
    } else {
        element.textContent = texteActuel.substring(0, indexChar--);
        if (indexChar === 0) {
            effacement = false;
            indexTexte = (indexTexte + 1) % textes.length;
        }
    }
    
    setTimeout(typing, effacement ? 50 : 100);
}

typing();

// ===== ANIMATION AU SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section, .competence-card, .projet-card, .service-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== FERMER MENU AU CLIC =====
document.querySelectorAll('nav ul a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu').classList.remove('active');
    });
});

console.log('Portfolio de Laurent Bajika - Chargé ! 🚀');
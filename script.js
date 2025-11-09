const translations = {
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-capabilities': 'Capabilities',
        'nav-experience': 'Experience',
        'nav-contact': 'Contact',
        'hero-title-1': 'Building the',
        'hero-title-2': 'future of Web3',
        'hero-title-3': 'with blockchain',
        'hero-title-4': 'innovation',
        'hero-subtitle': 'Blockchain & Full-Stack Developer',
        'hero-experience': '6+ years experience',
        'hero-role': 'Solidity Expert',
        'about-title': 'About Me',
        'about-p1': "I'm a passionate blockchain and full-stack developer with over 6 years of experience building decentralized applications and scalable web solutions. My expertise spans across Solidity smart contract development, modern JavaScript frameworks, and backend technologies.",
        'about-p2': "Beyond coding, I'm an active contributor to the blockchain community as a moderator in several crypto projects, including Monas Testnet and other innovative blockchain initiatives. In my free time, I enjoy playing guitar 🎸 and exploring new technologies.",
        'stat-years': 'Years Experience',
        'stat-projects': 'Projects',
        'capabilities-title': 'Capabilities',
        'cap-blockchain': 'Smart contract development, DeFi protocols, NFT platforms, and Web3 integration with focus on security and gas optimization.',
        'cap-fullstack': 'Building scalable web applications with modern frameworks, RESTful APIs, and seamless blockchain integration.',
        'cap-cloud': 'AWS & Alibaba Cloud certified. Expertise in CI/CD pipelines, Docker, and infrastructure automation.',
        'cap-community': 'Active moderator and contributor in blockchain communities, fostering engagement and driving project growth.',
        'experience-title': 'Experience',
        'present': 'Present',
        'exp1-title': 'Blockchain Developer & Community Moderator',
        'exp1-desc': 'Leading development and community management for multiple blockchain projects including Monas Testnet. Responsible for smart contract development, testing infrastructure, and fostering community engagement.',
        'exp2-title': 'DeFi Protocol Development',
        'exp2-desc': 'Designed and implemented decentralized finance protocols with focus on security, gas optimization, and user experience. Built lending platforms, AMM systems, and yield farming mechanisms.',
        'exp3-title': 'Full-Stack Web Development',
        'exp3-desc': 'Developed scalable web applications using modern frameworks and cloud infrastructure. Specialized in integrating blockchain functionality with traditional web technologies.',
        'cert-title': 'Certifications',
        'contact-title': "Let's Work Together",
        'contact-subtitle': "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
        'footer-hobby': 'Guitar enthusiast & blockchain builder'
    },
    id: {
        'nav-home': 'Beranda',
        'nav-about': 'Tentang',
        'nav-capabilities': 'Kemampuan',
        'nav-experience': 'Pengalaman',
        'nav-contact': 'Kontak',
        'hero-title-1': 'Membangun',
        'hero-title-2': 'masa depan Web3',
        'hero-title-3': 'dengan inovasi',
        'hero-title-4': 'blockchain',
        'hero-subtitle': 'Pengembang Blockchain & Full-Stack',
        'hero-experience': '6+ tahun pengalaman',
        'hero-role': 'Ahli Solidity',
        'about-title': 'Tentang Saya',
        'about-p1': 'Saya adalah pengembang blockchain dan full-stack yang bersemangat dengan pengalaman lebih dari 6 tahun dalam membangun aplikasi terdesentralisasi dan solusi web yang dapat diskalakan. Keahlian saya mencakup pengembangan smart contract Solidity, framework JavaScript modern, dan teknologi backend.',
        'about-p2': 'Selain coding, saya adalah kontributor aktif dalam komunitas blockchain sebagai moderator di beberapa proyek kripto, termasuk Monas Testnet dan inisiatif blockchain inovatif lainnya. Di waktu luang, saya senang bermain gitar 🎸 dan mengeksplorasi teknologi baru.',
        'stat-years': 'Tahun Pengalaman',
        'stat-projects': 'Proyek',
        'capabilities-title': 'Kemampuan',
        'cap-blockchain': 'Pengembangan smart contract, protokol DeFi, platform NFT, dan integrasi Web3 dengan fokus pada keamanan dan optimasi gas.',
        'cap-fullstack': 'Membangun aplikasi web yang scalable dengan framework modern, RESTful API, dan integrasi blockchain yang mulus.',
        'cap-cloud': 'Tersertifikasi AWS & Alibaba Cloud. Keahlian dalam CI/CD pipeline, Docker, dan otomasi infrastruktur.',
        'cap-community': 'Moderator aktif dan kontributor dalam komunitas blockchain, membangun engagement dan mendorong pertumbuhan proyek.',
        'experience-title': 'Pengalaman',
        'present': 'Sekarang',
        'exp1-title': 'Pengembang Blockchain & Moderator Komunitas',
        'exp1-desc': 'Memimpin pengembangan dan manajemen komunitas untuk berbagai proyek blockchain termasuk Monas Testnet. Bertanggung jawab untuk pengembangan smart contract, infrastruktur pengujian, dan membangun keterlibatan komunitas.',
        'exp2-title': 'Pengembangan Protokol DeFi',
        'exp2-desc': 'Merancang dan mengimplementasikan protokol keuangan terdesentralisasi dengan fokus pada keamanan, optimasi gas, dan pengalaman pengguna. Membangun platform pinjaman, sistem AMM, dan mekanisme yield farming.',
        'exp3-title': 'Pengembangan Web Full-Stack',
        'exp3-desc': 'Mengembangkan aplikasi web yang dapat diskalakan menggunakan framework modern dan infrastruktur cloud. Spesialisasi dalam mengintegrasikan fungsionalitas blockchain dengan teknologi web tradisional.',
        'cert-title': 'Sertifikasi',
        'contact-title': 'Mari Bekerja Sama',
        'contact-subtitle': 'Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda.',
        'footer-hobby': 'Penggemar gitar & pembangun blockchain'
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferred-language', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    setLanguage(savedLang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = menuToggle.classList.contains('active') ? 'hidden' : '';
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.capability-item, .experience-item, .cert-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

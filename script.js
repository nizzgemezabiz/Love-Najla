/**
 * Untuk Najla - Interactive Romatic Scrapbook
 * Core Logic Engine - Anti Error Version
 */

// Menunggu seluruh HTML di-load sebelum menjalankan Javascript
document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    const ROMANTIC_SENTENCES = [
        "Dunia menjadi lebih baik sejak ada kamu.",
        "Senyummu adalah pemandangan favoritku.",
        "Aku menemukan rumah pada dirimu.",
        "Kamu adalah puisi yang tak pernah selesai kubaca.",
        "Bahkan di hari terburukku, memikirkanmu membuatku tenang.",
        "Kamu membuat hal-hal biasa menjadi luar biasa.",
        "Di antara miliaran manusia, aku beruntung menemukanmu.",
        "Kehadiranmu adalah pelukan terhangat bagi jiwaku.",
        "Kamu adalah bagian terbaik dari setiap hariku.",
        "Suaramu adalah melodi yang selalu ingin kudengar.",
        "Mencintaimu terasa seperti napas, begitu natural.",
        "Aku ingin menyimpan setiap tawamu dalam toples memori.",
        "Bersamamu, waktu berlalu terlalu cepat.",
        "Kamu adalah kebetulan yang paling kusyukuri.",
        "Matamu menyimpan galaksi yang selalu ingin kujelajahi.",
        "Sederhana saja, aku bahagia bersamamu.",
        "Kamu mengubah 'aku' menjadi 'kita' dengan begitu indah.",
        "Terkadang aku menatapmu dan masih tak percaya kau nyata.",
        "Kamu adalah alasan di balik senyumku yang tiba-tiba.",
        "Dalam setiap detik, ada rasa syukur memilikimu.",
        "Kamu tidak hanya di hatiku, kamu ada di setiap pikiranku.",
        "Hari yang gelap menjadi terang hanya dengan sapaanmu.",
        "Kamu adalah tempatku berpulang dari bisingnya dunia.",
        "Melihatmu tertawa adalah pencapaian terbesarku hari ini.",
        "Kamu adalah keajaiban yang tak pernah kuminta, tapi kubutuhkan.",
        "Aku suka caramu melihat dunia.",
        "Tidak ada tempat yang lebih nyaman selain di dekatmu.",
        "Kamu melengkapi bagian diriku yang bahkan tak kutahu hilang.",
        "Membahagiakanmu adalah hal favorit yang ingin kulakukan.",
        "Aku jatuh cinta pada detail-detail kecil tentangmu.",
        "Kamu adalah doa yang diam-diam selalu kusebut.",
        "Bintang di langit pun kalah terang dari senyummu.",
        "Aku belajar banyak arti kelembutan darimu.",
        "Cintaku padamu tumbuh seperti bunga di musim semi.",
        "Kamu adalah karya seni terindah yang pernah kulihat.",
        "Bersamamu, aku tidak takut menghadapi hari esok.",
        "Kamu membuatku ingin menjadi versi diriku yang lebih baik.",
        "Pelukanmu adalah obat penawar lelahku.",
        "Aku selalu rindu, bahkan saat kita sedang bersama.",
        "Kamu menumbuhkan bunga di tanah hatiku yang gersang.",
        "Setiap cerita bersamamu layak untuk diabadikan.",
        "Mengenalmu adalah petualangan terindahku.",
        "Aku ingin memegang tanganmu di setiap musim.",
        "Kamu adalah hadiah terbaik yang diberikan semesta.",
        "Aku mencintaimu lebih dari kata-kata yang bisa kuucapkan.",
        "Hadirmu menyempurnakan cerita hidupku.",
        "Kamu adalah detak di setiap nadiku.",
        "Aku berjanji akan selalu ada, seperti kau untukku.",
        "Terima kasih telah lahir ke dunia ini.",
        "Untuk selamanya pun rasanya tidak cukup untuk bersamamu."
    ];

    const ORNAMENT_SVGS = [
        `<svg viewBox="0 0 24 24" width="30" height="30" fill="rgba(255, 182, 193, 0.6)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
        `<svg viewBox="0 0 24 24" width="25" height="25" fill="rgba(255, 223, 0, 0.7)"><path d="M12 2L15.09 8.91L22 12L15.09 15.09L12 22L8.91 15.09L2 12L8.91 8.91L12 2Z"/></svg>`,
        `<svg viewBox="0 0 24 24" width="28" height="28" fill="rgba(173, 216, 230, 0.7)"><path d="M12 2c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2v-2c0-1.1-.9-2-2-2zm8-10h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2c1.1 0 2-.9 2-2s-.9-2-2-2zm-16 0H2c-1.1 0-2 .9-2 2s.9 2 2 2h2c1.1 0 2-.9 2-2s-.9-2-2-2zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5.66-4.24l-1.41 1.41c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0l1.41-1.41c.78-.78.78-2.05 0-2.83s-2.05-.78-2.83 0zM6.34 18.24l-1.41 1.41c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0l1.41-1.41c.78-.78.78-2.05 0-2.83s-2.05-.78-2.83 0z"/></svg>`
    ];

    // --- UTILS ---
    const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const createEl = (tag, className) => { const el = document.createElement(tag); if(className) el.className = className; return el; };

    // --- DOM ELEMENTS (Safe Mapping) ---
    const elements = {
        btnUnlock: document.getElementById('btn-unlock'),
        mathModal: document.getElementById('math-modal'),
        mathQuestion: document.getElementById('math-question'),
        mathAnswer: document.getElementById('math-answer'),
        btnSubmitMath: document.getElementById('btn-submit-math'),
        mathFeedback: document.getElementById('math-feedback'),
        opening: document.getElementById('opening'),
        mainContent: document.getElementById('main-content'),
        navbar: document.getElementById('navbar'),
        gallery: document.getElementById('photo-gallery'),
        lightbox: document.getElementById('lightbox'),
        lightboxImg: document.getElementById('lightbox-img'),
        lightboxCaption: document.getElementById('lightbox-caption'),
        closeLightbox: document.querySelector('.close-lightbox'),
        audio: document.getElementById('bg-music'),
        playBtn: document.getElementById('play-pause-btn'),
        musicPlayer: document.getElementById('music-player'),
        vinyl: document.querySelector('.vinyl-record'),
        visualizer: document.querySelector('.visualizer'),
        envelope: document.getElementById('interactive-envelope'),
        typewriterText: document.getElementById('typewriter-text'),
        wishInput: document.getElementById('wish-input'),
        btnWish: document.getElementById('btn-wish'),
        decorationsLayer: document.getElementById('decorations-layer'),
        closing: document.getElementById('closing')
    };

    // Pastikan elemen utama ada untuk mencegah error berhenti di tengah jalan
    if (!elements.btnUnlock || !elements.mainContent) {
        console.error("Critical HTML elements missing. Check HTML structure.");
        return; 
    }

    // --- MATH GAME LOGIC ---
    let mathAnswerCorrect = 0;
    const generateMathProblem = () => {
        const operations = ['+', '-', '*'];
        const op = getRandomItem(operations);
        let a = Math.floor(Math.random() * 10) + 1;
        let b = Math.floor(Math.random() * 10) + 1;
        
        if (op === '-') { if (b > a) [a, b] = [b, a]; }
        let sign = op === '*' ? '×' : op;
        
        elements.mathQuestion.textContent = `${a} ${sign} ${b} = ?`;
        mathAnswerCorrect = op === '+' ? a + b : op === '-' ? a - b : a * b;
    };

    elements.btnUnlock.addEventListener('click', () => {
        generateMathProblem();
        elements.mathModal.classList.add('active');
        elements.mathAnswer.value = '';
        elements.mathFeedback.textContent = '';
        setTimeout(() => { if(elements.mathAnswer) elements.mathAnswer.focus(); }, 100);
    });

    elements.btnSubmitMath.addEventListener('click', checkMath);
    elements.mathAnswer.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkMath(); });

    function checkMath() {
        if (parseInt(elements.mathAnswer.value) === mathAnswerCorrect) {
            // Berhasil
            elements.mathModal.classList.remove('active');
            elements.opening.style.transition = "opacity 0.8s ease";
            elements.opening.style.opacity = '0';
            
            setTimeout(() => {
                elements.opening.classList.add('hidden');
                elements.mainContent.classList.remove('hidden');
                if(elements.navbar) elements.navbar.classList.remove('hidden');
                if(elements.musicPlayer) elements.musicPlayer.classList.remove('hidden');
                
                initApp();
                
                // Play audio secara aman (bisa jadi lagu blm diupload)
                if (elements.audio) {
                    elements.audio.play().then(() => setAudioState(true)).catch((err) => {
                        console.log("Autoplay dicegah oleh browser atau file lagu tidak ditemukan.", err);
                        setAudioState(false);
                    });
                }
                window.scrollTo(0,0);
            }, 800);
        } else {
            // Gagal
            const glass = document.querySelector('.modal-glass');
            if(glass) {
                glass.classList.remove('shake');
                void glass.offsetWidth; // trigger reflow
                glass.classList.add('shake');
            }
            elements.mathAnswer.value = '';
            elements.mathFeedback.textContent = "Coba hitung lagi ya :)";
        }
    }

    // --- INITIALIZATION ---
    function initApp() {
        generateGallery();
        populateDynamicSentences();
        setupDecorations();
        setupObservers();
        setupFlipCards();
        loadWishes();
    }

    // --- GALLERY / PINTEREST LAYOUT ---
    function generateGallery() {
        if(!elements.gallery) return;
        elements.gallery.innerHTML = ''; // bersihkan dulu jika kepanggil dua kali
        
        for (let i = 1; i <= 8; i++) {
            const item = createEl('div', 'scrapbook-item reveal-up');
            item.style.transitionDelay = `${(i % 4) * 0.1}s`;
            
            const img = createEl('img', 'scrapbook-img');
            img.src = `assets/foto${i}.jpg`;
            img.alt = `Memori ${i}`;
            img.style.aspectRatio = "3/4";
            
            // Fallback jika gambar error/tidak ketemu
            img.onerror = function() {
                this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22300%22%20height%3D%22400%22%20fill%3D%22%23eee%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2216px%22%20fill%3D%22%23999%22%3EFoto%20' + i + '%20Belum%20Ada%3C%2Ftext%3E%3C%2Fsvg%3E';
            };
            
            const caption = createEl('div', 'polaroid-caption');
            caption.textContent = getRandomItem(ROMANTIC_SENTENCES);
            
            item.appendChild(img);
            item.appendChild(caption);
            
            item.addEventListener('click', () => openLightbox(img.src, caption.textContent));
            elements.gallery.appendChild(item);
        }
    }

    function openLightbox(src, text) {
        if(!elements.lightbox) return;
        elements.lightboxImg.src = src;
        elements.lightboxCaption.textContent = text;
        elements.lightbox.classList.add('active');
    }

    if(elements.closeLightbox) {
        elements.closeLightbox.addEventListener('click', () => elements.lightbox.classList.remove('active'));
    }
    if(elements.lightbox) {
        elements.lightbox.addEventListener('click', (e) => { 
            if(e.target === elements.lightbox) elements.lightbox.classList.remove('active'); 
        });
    }

    // --- MUSIC PLAYER ---
    function setAudioState(isPlaying) {
        if(!elements.vinyl || !elements.playBtn) return;
        if (isPlaying) {
            elements.vinyl.classList.add('playing');
            elements.visualizer.classList.add('playing');
            elements.playBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
        } else {
            elements.vinyl.classList.remove('playing');
            elements.visualizer.classList.remove('playing');
            elements.playBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
        }
    }

    if(elements.playBtn && elements.audio) {
        elements.playBtn.addEventListener('click', () => {
            if (elements.audio.paused) {
                elements.audio.play().then(() => setAudioState(true)).catch(e => console.log(e));
            } else {
                elements.audio.pause();
                setAudioState(false);
            }
        });
    }

    // --- DYNAMIC CONTENT & MICRO INTERACTIONS ---
    function populateDynamicSentences() {
        document.querySelectorAll('.dynamic-sentence').forEach(el => {
            el.textContent = getRandomItem(ROMANTIC_SENTENCES);
        });
    }

    function setupFlipCards() {
        document.querySelectorAll('.flip-card').forEach(card => {
            card.addEventListener('click', () => card.classList.toggle('flipped'));
        });
    }

    // Love Letter Typewriter
    let isTyping = false;
    if(elements.envelope) {
        elements.envelope.addEventListener('click', () => {
            if (isTyping) return;
            elements.envelope.classList.add('open');
            const text = "Hai Najla,\n\n" + getRandomItem(ROMANTIC_SENTENCES) + "\n" + getRandomItem(ROMANTIC_SENTENCES) + "\n\nTerima kasih untuk semuanya.";
            elements.typewriterText.innerHTML = '';
            isTyping = true;
            
            let i = 0;
            setTimeout(() => {
                const typeWriter = setInterval(() => {
                    if (i < text.length) {
                        elements.typewriterText.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
                        i++;
                    } else {
                        clearInterval(typeWriter);
                        isTyping = false;
                    }
                }, 50);
            }, 1000); // Tunggu animasi amplop terbuka
        });
    }

    // --- WISHES & LOCALSTORAGE ---
    function createStar(text, animateFromBottom = false) {
        const star = createEl('div', 'floating-star');
        const startX = Math.random() * window.innerWidth;
        star.style.left = `${startX}px`;
        
        if (animateFromBottom) {
            star.style.bottom = '0px';
            star.animate([
                { transform: 'translateY(0) scale(1)', opacity: 1 },
                { transform: `translateY(-100vh) translateX(${Math.random()*200 - 100}px) scale(0.5)`, opacity: 0 }
            ], { duration: 4000, easing: 'ease-out' }).onfinish = () => star.remove();
        } else {
            star.style.top = `${Math.random() * window.innerHeight}px`;
            star.style.animation = `float ${3 + Math.random()*4}s ease-in-out infinite`;
        }
        document.body.appendChild(star);
    }

    function submitWish() {
        if(!elements.wishInput) return;
        const text = elements.wishInput.value.trim();
        if (!text) return;
        
        try {
            let wishes = JSON.parse(localStorage.getItem('najla_wishes') || '[]');
            wishes.push(text);
            localStorage.setItem('najla_wishes', JSON.stringify(wishes));
        } catch(e) {
            console.log("LocalStorage tidak tersedia (mungkin incognito mode).", e);
        }
        
        createStar(text, true);
        elements.wishInput.value = '';
    }

    if(elements.btnWish) elements.btnWish.addEventListener('click', submitWish);
    if(elements.wishInput) elements.wishInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') submitWish(); });

    function loadWishes() {
        try {
            const wishes = JSON.parse(localStorage.getItem('najla_wishes') || '[]');
            wishes.forEach(wish => {
                const star = createEl('div', 'floating-star');
                star.style.left = `${Math.random() * 90}vw`;
                star.style.top = `${Math.random() * 90}vh`;
                star.style.opacity = '0.3';
                star.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
                if(elements.decorationsLayer) elements.decorationsLayer.appendChild(star);
            });
        } catch(e) {
            console.log("Gagal memuat wishes dari localStorage");
        }
    }

    // --- DECORATIONS & OBSERVERS ---
    function setupDecorations() {
        if(!elements.decorationsLayer) return;
        for (let i = 0; i < 15; i++) {
            const orn = createEl('div', 'ornament');
            orn.innerHTML = getRandomItem(ORNAMENT_SVGS);
            orn.style.left = `${Math.random() * 90}vw`;
            orn.style.top = `${Math.random() * 300 + 50}vh`; 
            orn.style.animationDelay = `${Math.random() * 5}s`;
            elements.decorationsLayer.appendChild(orn);
        }
    }

    function setupObservers() {
        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        };
        const revealObserver = new IntersectionObserver(revealCallback, { threshold: 0.15 });
        document.querySelectorAll('.reveal-fade, .reveal-zoom, .reveal-up').forEach(el => revealObserver.observe(el));

        if(elements.closing) {
            const closingObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        document.body.classList.add('night-mode');
                    } else {
                        document.body.classList.remove('night-mode');
                    }
                });
            }, { threshold: 0.3 });
            closingObserver.observe(elements.closing);
        }
        
        let isScrolling = false;
        window.addEventListener('scroll', () => {
            if (!isScrolling && elements.navbar) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > 50) {
                        elements.navbar.classList.add('scrolled');
                    } else {
                        elements.navbar.classList.remove('scrolled');
                    }
                    isScrolling = false;
                });
                isScrolling = true;
            }
        });
    }
});

/* ==========================================================================
   INTERACTIVE JAVASCRIPT - MUMMY ODOGWRESS 50TH BIRTHDAY
   ========================================================================== */

// 1. Photos Array System
const mummyPhotos = [
    { src: "images/mummy-8.jpg", caption: "Our beautiful queen in full grace and elegance ❤️" },
    { src: "images/mummy-1.jpg", caption: "Radiant, stylish, and full of joy ✨" },
    { src: "images/mummy-2.jpg", caption: "50 Years of God's unmerited favor and strength 👑" },
    { src: "images/mummy-3.jpg", caption: "The Heartbeat of Our Home 💖" },
    { src: "images/mummy-4.jpg", caption: "Graceful in black and gold 🌟" },
    { src: "images/mummy-5.jpg", caption: "Gorgeous smile, pure royal posture 💕" },
    { src: "images/mummy-6.jpg", caption: "Classy, timeless, and forever young 😂" },
    { src: "images/mummy-7.jpg", caption: "Confirm Mummy Odogwress herself 👑" }
];

let currentPhotoIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initGallery();
    initLetter();
    initQuotes();
    initConfettiTriggers();
});

// Mobile Navigation Toggle
function initNavigation() {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    
    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }
}

// 2. Interactive Photo Gallery Engine
function initGallery() {
    const photoCardContainer = document.getElementById("photoCardContainer");
    const mainPhoto = document.getElementById("mainPhoto");
    const photoCaption = document.getElementById("photoCaption");
    const photoCounter = document.getElementById("photoCounter");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function updatePhoto(index) {
        mainPhoto.classList.add("fade-out");
        
        setTimeout(() => {
            currentPhotoIndex = index;
            mainPhoto.src = mummyPhotos[currentPhotoIndex].src;
            photoCaption.textContent = mummyPhotos[currentPhotoIndex].caption;
            photoCounter.textContent = `${currentPhotoIndex + 1} of ${mummyPhotos.length}`;
            mainPhoto.classList.remove("fade-out");
        }, 300);
    }

    function showNextPhoto() {
        let nextIndex = (currentPhotoIndex + 1) % mummyPhotos.length;
        updatePhoto(nextIndex);
    }

    function showPrevPhoto() {
        let prevIndex = (currentPhotoIndex - 1 + mummyPhotos.length) % mummyPhotos.length;
        updatePhoto(prevIndex);
    }

    // Main interaction: Tapping the image card switches photos
    if (photoCardContainer) {
        photoCardContainer.addEventListener("click", showNextPhoto);
    }

    if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); showNextPhoto(); });
    if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); showPrevPhoto(); });
}

// 3. John's Letter Envelope Mechanics
function initLetter() {
    const openLetterBtn = document.getElementById("openLetterBtn");
    const closeLetterBtn = document.getElementById("closeLetterBtn");
    const envelopeCard = document.getElementById("envelopeCard");
    const letterPaper = document.getElementById("letterPaper");

    if (openLetterBtn && envelopeCard && letterPaper) {
        openLetterBtn.addEventListener("click", () => {
            envelopeCard.style.display = "none";
            letterPaper.style.display = "block";
            
            // Trigger gentle celebration effect when opening the letter
            if (typeof confetti === "function") {
                confetti({
                    particleCount: 40,
                    spread: 60,
                    origin: { y: 0.6 }
                });
            }
        });
    }

    if (closeLetterBtn && envelopeCard && letterPaper) {
        closeLetterBtn.addEventListener("click", () => {
            letterPaper.style.display = "none";
            envelopeCard.style.display = "block";
        });
    }
}

// 4. Mummy Once Said Section
function initQuotes() {
    const unlockQuotesBtn = document.getElementById("unlockQuotesBtn");
    const quotesUnlockBanner = document.getElementById("quotesUnlockBanner");
    const quotesGrid = document.getElementById("quotesGrid");

    if (unlockQuotesBtn && quotesGrid) {
        unlockQuotesBtn.addEventListener("click", () => {
            quotesUnlockBanner.style.display = "none";
            quotesGrid.style.display = "grid";
        });
    }

    // Playful interactive effect on individual quote cards
    document.querySelectorAll(".quote-card").forEach(card => {
        card.addEventListener("click", () => {
            card.style.transform = "scale(1.05) rotate(1deg)";
            setTimeout(() => {
                card.style.transform = "";
            }, 300);
        });
    });
}

// 5. Confetti Effect Triggers
function initConfettiTriggers() {
    const heroCelebrateBtn = document.getElementById("heroCelebrateBtn");
    const finalCelebrateBtn = document.getElementById("finalCelebrateBtn");

    function fireConfetti() {
        if (typeof confetti !== "function") return;
        
        // Gold and Burgundy celebration blast
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#D4AF37', '#58111A', '#FAD02C', '#FFFFFF']
        });
    }

    if (heroCelebrateBtn) {
        heroCelebrateBtn.addEventListener("click", () => {
            fireConfetti();
            const galleryElem = document.getElementById("gallery");
            if (galleryElem) {
                galleryElem.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    if (finalCelebrateBtn) {
        finalCelebrateBtn.addEventListener("click", fireConfetti);
    }
}
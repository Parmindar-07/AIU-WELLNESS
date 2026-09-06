document.addEventListener("DOMContentLoaded", function () {
    console.log("AIU Wellness JavaScript loaded successfully.");

    /* =========================================================
       0. CENTRAL CONFIG — single source for contacts & links
       ========================================================= */
    const CONTACT = {
        formUrl: "https://forms.gle/1Qxc1JVt3WF1gSnq8",
        whatsappUrl: "https://wa.me/919910808108",
        whatsappLabel: "+91 9910808108",
        email: "aiuwellness.sadhana@gmail.com",
        instagramUrl: "https://www.instagram.com/shristi_sshrivastava",
        instagramLabel: "@shristi_sshrivastava",
        youtubeUrl: "https://www.youtube.com/@ShristiSshrivastava",
        youtubeLabel: "@ShristiSshrivastava"
    };

    /* =========================================================
       1. OFFERINGS DATA — single source for cards + modal
       ========================================================= */
    const offerings = [
        {
            key: "compassion",
            icon: "🌿",
            number: "01",
            title: "Build Compassion",
            subtitle: "for Self & Others",
            modalTitle: "Build Compassion for Self & Others",
            intro: "A gentle space to soften judgments, build empathy, and strengthen your relationship with yourself and others.",
            price: "₹999",
            supports: ["Building self-compassion", "Understanding emotional reactions", "Releasing excessive judgment", "Developing empathy and emotional awareness"],
            note: "Best for people who want to work on gentleness, empathy, and their inner dialogue."
        },
        {
            key: "forgiveness",
            icon: "🕊",
            number: "02",
            title: "Forgive from the Heart",
            subtitle: "Not Just Words",
            modalTitle: "Forgive from the Heart - Not Just Words",
            intro: "Explore resentment, hurt, disappointment, and unresolved emotions through awareness and guided reflective practices.",
            price: "₹999",
            supports: ["Exploring unresolved hurt", "Releasing emotional baggage", "Practising forgiveness without forcing it", "Creating greater inner peace"],
            note: "This session does not ask you to ignore pain. It creates space to understand it and release it gently."
        },
        {
            key: "aura",
            icon: "🌿",
            number: "07",
            title: "Aura Cleansing & Energy Reset",
            subtitle: "",
            modalTitle: "Aura Cleansing & Energy Reset",
            intro: "A grounding session to release heaviness and create space through energetic awareness and intention.",
            price: "₹999",
            supports: ["Grounding and centring", "Gentle energy-reset practices", "Creating space for emotional and energetic release", "Intentional self-connection"],
            note: "A simple reset when you feel emotionally heavy, scattered, or energetically drained."
        },
        {
            key: "awareness",
            icon: "✨",
            number: "03",
            title: "Power of Awareness",
            subtitle: "",
            modalTitle: "Power of Awareness",
            intro: "Learn to observe patterns, thoughts, and emotions with more clarity and presence.",
            price: "₹1,111",
            supports: ["Recognising recurring patterns", "Understanding thoughts and emotions", "Responding instead of reacting", "Creating greater clarity and presence"],
            note: "Useful when you feel stuck in old patterns and want to understand what is happening inside you."
        },
        {
            key: "tarot",
            icon: "🃏",
            number: "06",
            title: "Angel Card + Tarot Guidance",
            subtitle: "Per session",
            modalTitle: "Angel Card + Tarot Guidance",
            intro: "Intuitive guidance for career, relationships, growth, current challenges, and spiritual questions.",
            price: "₹1,499",
            supports: ["Career and life direction", "Relationships", "Personal growth", "Current challenges or decisions", "Spiritual questions and self-reflection"],
            note: "Tarot and angel guidance are used as reflective tools, not as fixed predictions."
        },
        {
            key: "thought-loop",
            icon: "🌀",
            number: "04",
            title: "Break the Thought Loop",
            subtitle: "",
            modalTitle: "Break the Thought Loop",
            intro: "A reflection-based session for repeated thoughts, emotional triggers, and internal cycles.",
            price: "₹2,999",
            supports: ["Identifying repetitive thought patterns", "Understanding emotional triggers", "Breaking mental and emotional cycles", "Returning to greater clarity and presence"],
            note: "Helpful if your mind keeps returning to the same fears, scenarios, or emotional loops."
        },
        {
            key: "divine",
            icon: "🔆",
            number: "05",
            title: "Reconnect with the Divine",
            subtitle: "",
            modalTitle: "Reconnect with the Divine",
            intro: "A gentle spiritual space to strengthen inner trust, intuition, prayer, peace, and presence.",
            price: "₹2,999",
            supports: ["Strengthening spiritual connection", "Developing inner trust", "Exploring intuition", "Creating moments of prayer, peace, and presence"],
            note: "For people who want to rebuild a sense of spiritual closeness and faith."
        },
        {
            key: "inner-child",
            icon: "🌸",
            number: "08",
            title: "Inner Child Healing",
            subtitle: "",
            modalTitle: "Inner Child Healing",
            intro: "A compassionate space to explore childhood patterns, self-worth, emotional triggers, and authentic self.",
            price: "₹4,999",
            supports: ["Understanding emotional triggers", "Exploring childhood patterns", "Building self-worth and self-compassion", "Reconnecting with your authentic self"],
            note: "A deeper session for roots, patterns, and the parts of you that still need care."
        }
    ];

    const offeringMap = {};
    offerings.forEach(function (o) { offeringMap[o.key] = o; });

    /* =========================================================
       2. RENDER OFFERINGS GRID (cards from JS data)
       ========================================================= */
    const offeringsGrid = document.getElementById("offeringsGrid");
    if (offeringsGrid) {
        offeringsGrid.innerHTML = offerings.map(function (o) {
            const subtitleHtml = o.subtitle ? ` <small>${o.subtitle}</small>` : "";
            return `
                <article class="offering-card">
                    <div class="offering-icon">${o.icon}</div>
                    <span class="offering-number">${o.number}</span>
                    <h3>${o.title}${subtitleHtml}</h3>
                    <p>${o.intro}</p>
                    <div class="offering-price">${o.price}</div>
                    <button class="learn-more-button" data-offering="${o.key}">Book Session <span>→</span></button>
                </article>
            `;
        }).join("");
    }

    /* =========================================================
       3. OFFERING MODAL
       ========================================================= */
    const offeringModal = document.getElementById("offeringModal");
    const modalOverlay = document.getElementById("modalOverlay");
    const modalClose = document.getElementById("modalClose");
    const modalIcon = document.getElementById("modalIcon");
    const modalNumber = document.getElementById("modalNumber");
    const modalTitle = document.getElementById("modalTitle");
    const modalIntro = document.getElementById("modalIntro");
    const modalPrice = document.getElementById("modalPrice");
    const modalSupports = document.getElementById("modalSupports");
    const modalNote = document.getElementById("modalNote");
    const learnMoreButtons = document.querySelectorAll(".learn-more-button");
    const modalBookButton = document.getElementById("modalBookButton");

    function closeOfferingModal() {
        if (!offeringModal) return;
        offeringModal.classList.remove("active");
        document.body.style.overflow = "";
    }

    function openOfferingModal(offering) {
        if (!offeringModal || !offering) return;
        modalIcon.textContent = offering.icon;
        modalNumber.textContent = offering.number;
        modalTitle.textContent = offering.modalTitle;
        modalIntro.textContent = offering.intro;
        modalPrice.textContent = offering.price;
        modalNote.textContent = offering.note;
        modalSupports.innerHTML = offering.supports.map(function (item) {
            return `<li>${item}</li>`;
        }).join("");
        if (modalBookButton) modalBookButton.href = CONTACT.formUrl;
        offeringModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    learnMoreButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            openOfferingModal(offeringMap[button.getAttribute("data-offering")]);
        });
    });

    if (modalClose) modalClose.addEventListener("click", closeOfferingModal);
    if (modalOverlay) modalOverlay.addEventListener("click", closeOfferingModal);

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeOfferingModal();
    });

    /* =========================================================
       4. FEEDBACK GRID
       ========================================================= */
    const feedbackGrid = document.querySelector(".feedback-grid");
    if (feedbackGrid) {
        const feedbackImages = [
            { src: "image/Feadback Images/Feedback 1.jpeg", alt: "Feedback 1" },
            { src: "image/Feadback Images/Feedback 2.jpeg", alt: "Feedback 2" },
            { src: "image/Feadback Images/Feedback 3.jpeg", alt: "Feedback 3" }
        ];

        feedbackGrid.innerHTML = feedbackImages.map(function (item) {
            return `
                <figure class="feedback-card">
                    <img src="${item.src}" alt="${item.alt}" loading="lazy">
                </figure>
            `;
        }).join("");
    }

    /* =========================================================
       5. RENDER CONTACT SECTIONS (booking + footer)
       ========================================================= */
    function contactLink(href, label, external) {
        if (external === false) {
            return `<a href="${href}">${label}</a>`;
        }
        return `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    }

    const bookingContact = document.getElementById("bookingContact");
    if (bookingContact) {
        bookingContact.innerHTML = [
            contactLink(CONTACT.whatsappUrl, "WhatsApp: " + CONTACT.whatsappLabel),
            contactLink("mailto:" + CONTACT.email, "Email: " + CONTACT.email, false),
            contactLink(CONTACT.instagramUrl, "Instagram: " + CONTACT.instagramLabel),
            contactLink(CONTACT.youtubeUrl, "YouTube: " + CONTACT.youtubeLabel)
        ].join("");
    }

    const footerConnect = document.getElementById("footerConnect");
    if (footerConnect) {
        footerConnect.insertAdjacentHTML("beforeend", [
            contactLink(CONTACT.whatsappUrl, "WhatsApp"),
            contactLink(CONTACT.instagramUrl, "Instagram"),
            contactLink(CONTACT.youtubeUrl, "YouTube"),
            contactLink("mailto:" + CONTACT.email, "Email", false)
        ].join(""));
    }

    /* =========================================================
       6. CENTRAL FORM LINK — sabhi book buttons ek hi source se
       ========================================================= */
    document.querySelectorAll(".js-book-link").forEach(function (link) {
        link.href = CONTACT.formUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    });

    const whatsappFloat = document.getElementById("whatsappFloat");
    if (whatsappFloat) whatsappFloat.href = CONTACT.whatsappUrl;

    /* =========================================================
       7. MOBILE MENU TOGGLE
       ========================================================= */
    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const navMenu = document.querySelector(".nav-menu");
    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener("click", function () {
            const isOpen = navMenu.classList.toggle("active");
            mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
            mobileMenuButton.textContent = isOpen ? "✕" : "☰";
        });
        navMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
                mobileMenuButton.setAttribute("aria-expanded", "false");
                mobileMenuButton.textContent = "☰";
            });
        });
    }

    /* =========================================================
       8. SCROLL REVEAL ANIMATIONS (Intersection Observer)
       ========================================================= */
    const revealElements = document.querySelectorAll(".section-heading, .about-container, .feedback-section > *, .certificate-wrap, .offerings-grid, .return-container, .booking-container, .booking-disclaimer, .faq-section > *");
    revealElements.forEach(function (el) {
        el.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

        document.querySelectorAll(".reveal").forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        document.querySelectorAll(".reveal").forEach(function (el) {
            el.classList.add("visible");
        });
    }

    /* =========================================================
       9. ACTIVE NAV LINK HIGHLIGHT (scroll spy)
       ========================================================= */
    const sections = document.querySelectorAll("main section[id], main div[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    if (sections.length && navLinks.length) {
        window.addEventListener("scroll", function () {
            let currentId = "";
            const scrollPos = window.scrollY + 120;

            sections.forEach(function (section) {
                if (section.offsetTop <= scrollPos) {
                    currentId = section.getAttribute("id");
                }
            });

            navLinks.forEach(function (link) {
                link.classList.remove("active");
                if (link.classList.contains("nav-book-button")) return;
                const href = link.getAttribute("href");
                if (href && href === "#" + currentId) {
                    link.classList.add("active");
                }
            });
        });
    }

    /* =========================================================
       10. BACK TO TOP BUTTON
       ========================================================= */
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* =========================================================
       11. FAQ ACCORDION
       ========================================================= */
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {
        question.addEventListener("click", function () {
            const item = question.closest(".faq-item");
            const answer = item.querySelector(".faq-answer");
            const isOpen = item.classList.contains("active");

            faqQuestions.forEach(function (q) {
                const i = q.closest(".faq-item");
                const a = i.querySelector(".faq-answer");
                i.classList.remove("active");
                a.style.maxHeight = null;
                q.setAttribute("aria-expanded", "false");
            });

            if (!isOpen) {
                item.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px";
                question.setAttribute("aria-expanded", "true");
            }
        });
    });

    /* =========================================================
       12. FOOTER YEAR AUTO-UPDATE
       ========================================================= */
    const footerYear = document.getElementById("footerYear");
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
});
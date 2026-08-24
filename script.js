document.addEventListener("DOMContentLoaded", function () {
    console.log("AIU Wellness JavaScript loaded successfully.");

    const mobileMenuButton = document.getElementById("mobileMenuButton");
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener("click", function () {
            console.log("Mobile menu button clicked.");
        });
    }

    const offerings = {
        compassion: {
            icon: "🌿",
            number: "01",
            title: "Build Compassion for Self & Others",
            intro: "A gentle space to soften judgments, build empathy, and strengthen your relationship with yourself and others.",
            price: "₹999",
            supports: ["Building self-compassion", "Understanding emotional reactions", "Releasing excessive judgment", "Developing empathy and emotional awareness"],
            note: "Best for people who want to work on gentleness, empathy, and their inner dialogue."
        },
        forgiveness: {
            icon: "🕊",
            number: "02",
            title: "Forgive from the Heart - Not Just Words",
            intro: "Explore resentment, hurt, disappointment, and unresolved emotions through awareness and guided reflective practices.",
            price: "₹999",
            supports: ["Exploring unresolved hurt", "Releasing emotional baggage", "Practising forgiveness without forcing it", "Creating greater inner peace"],
            note: "This session does not ask you to ignore pain. It creates space to understand it and release it gently."
        },
        awareness: {
            icon: "✨",
            number: "03",
            title: "Power of Awareness",
            intro: "Learn to observe patterns, thoughts, and emotions with more clarity and presence.",
            price: "₹1,111",
            supports: ["Recognising recurring patterns", "Understanding thoughts and emotions", "Responding instead of reacting", "Creating greater clarity and presence"],
            note: "Useful when you feel stuck in old patterns and want to understand what is happening inside you."
        },
        "thought-loop": {
            icon: "🌀",
            number: "04",
            title: "Break the Thought Loop",
            intro: "A reflection-based session for repeated thoughts, emotional triggers, and internal cycles.",
            price: "₹2,999",
            supports: ["Identifying repetitive thought patterns", "Understanding emotional triggers", "Breaking mental and emotional cycles", "Returning to greater clarity and presence"],
            note: "Helpful if your mind keeps returning to the same fears, scenarios, or emotional loops."
        },
        divine: {
            icon: "🔆",
            number: "05",
            title: "Reconnect with the Divine",
            intro: "A gentle spiritual space to strengthen inner trust, intuition, prayer, peace, and presence.",
            price: "₹2,999",
            supports: ["Strengthening spiritual connection", "Developing inner trust", "Exploring intuition", "Creating moments of prayer, peace, and presence"],
            note: "For people who want to rebuild a sense of spiritual closeness and faith."
        },
        tarot: {
            icon: "🃏",
            number: "06",
            title: "Angel Card + Tarot Guidance",
            intro: "Intuitive guidance for career, relationships, growth, current challenges, and spiritual questions.",
            price: "₹1,499",
            supports: ["Career and life direction", "Relationships", "Personal growth", "Current challenges or decisions", "Spiritual questions and self-reflection"],
            note: "Tarot and angel guidance are used as reflective tools, not as fixed predictions."
        },
        aura: {
            icon: "🌿",
            number: "07",
            title: "Aura Cleansing & Energy Reset",
            intro: "A grounding session to release heaviness and create space through energetic awareness and intention.",
            price: "₹999",
            supports: ["Grounding and centring", "Gentle energy-reset practices", "Creating space for emotional and energetic release", "Intentional self-connection"],
            note: "A simple reset when you feel emotionally heavy, scattered, or energetically drained."
        },
        "inner-child": {
            icon: "🌸",
            number: "08",
            title: "Inner Child Healing",
            intro: "A compassionate space to explore childhood patterns, self-worth, emotional triggers, and authentic self.",
            price: "₹4,999",
            supports: ["Understanding emotional triggers", "Exploring childhood patterns", "Building self-worth and self-compassion", "Reconnecting with your authentic self"],
            note: "A deeper session for roots, patterns, and the parts of you that still need care."
        }
    };

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

    function closeOfferingModal() {
        if (!offeringModal) return;
        offeringModal.classList.remove("active");
        document.body.style.overflow = "";
    }

    function openOfferingModal(offering) {
        if (!offeringModal || !offering) return;
        modalIcon.textContent = offering.icon;
        modalNumber.textContent = offering.number;
        modalTitle.textContent = offering.title;
        modalIntro.textContent = offering.intro;
        modalPrice.textContent = offering.price;
        modalNote.textContent = offering.note;
        modalSupports.innerHTML = offering.supports.map(function (item) {
            return `<li>${item}</li>`;
        }).join("");
        offeringModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    learnMoreButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const offeringName = button.getAttribute("data-offering");
            openOfferingModal(offerings[offeringName]);
        });
    });

    if (modalClose) modalClose.addEventListener("click", closeOfferingModal);
    if (modalOverlay) modalOverlay.addEventListener("click", closeOfferingModal);

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeOfferingModal();
    });

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
});


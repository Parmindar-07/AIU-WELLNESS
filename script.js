/* =========================================================
   AIU WELLNESS
   MAIN JAVASCRIPT FILE

   Is file mein website ki interactive functionality
   add ki jayegi.
   ========================================================= */


/* =========================================================
   1. WEBSITE LOAD TEST

   Browser console mein ye message check karega ki
   JavaScript properly connect hui hai ya nahi.
   ========================================================= */

console.log("AIU Wellness JavaScript loaded successfully.");



/* =========================================================
   2. MOBILE MENU ELEMENT

   HTML se mobile menu button ko select kar rahe hain.

   Abhi menu ka actual function next step mein banayenge.
   ========================================================= */

const mobileMenuButton = document.getElementById("mobileMenuButton");



/* =========================================================
   3. MOBILE MENU TEST

   Mobile menu button click hone par console mein
   message show hoga.

   Ye bhi testing ke liye hai.
   ========================================================= */

mobileMenuButton.addEventListener("click", function () {

    console.log("Mobile menu button clicked.");

});

/* =========================================================
   OFFERING DETAILS

   Har offering ka data yahan store kiya gaya hai.

   Jab user kisi card par click karega,
   JavaScript isi data ko modal mein show karega.
   ========================================================= */

const offerings = {

    /* -----------------------------------------------------
       OFFERING 01
       ----------------------------------------------------- */

    compassion: {

        icon: "🌿",

        number: "01",

        title: "Build Compassion for Self & Others",

        description:
            "Learn how to soften your heart and develop true empathy.",

        price: "₹499"

    },


    /* -----------------------------------------------------
       OFFERING 02
       ----------------------------------------------------- */

    forgiveness: {

        icon: "🕊",

        number: "02",

        title: "Forgive from the Heart",

        description:
            "Release resentment and emotional baggage for deep inner peace.",

        price: "₹299"

    },


    /* -----------------------------------------------------
       OFFERING 03
       ----------------------------------------------------- */

    awareness: {

        icon: "✨",

        number: "03",

        title: "Power of Awareness",

        description:
            "Understand how awareness transforms your thoughts, emotions, and life.",

        price: "₹599"

    },


    /* -----------------------------------------------------
       OFFERING 04

       Details abhi pending hain.
       Baad mein actual information yahan replace karenge.
       ----------------------------------------------------- */

    "thought-loop": {

        icon: "🌀",

        number: "04",

        title: "Break the Thought Loop",

        description:
            "Detailed information about this offering will be added soon.",

        price: "Price Soon"

    }

};



/* =========================================================
   MODAL ELEMENTS

   HTML se modal ke required elements select kar rahe hain.
   ========================================================= */

const offeringModal =
    document.getElementById("offeringModal");


const modalOverlay =
    document.getElementById("modalOverlay");


const modalClose =
    document.getElementById("modalClose");


const modalIcon =
    document.getElementById("modalIcon");


const modalNumber =
    document.getElementById("modalNumber");


const modalTitle =
    document.getElementById("modalTitle");


const modalDescription =
    document.getElementById("modalDescription");


const modalPrice =
    document.getElementById("modalPrice");



/* =========================================================
   OFFERING BUTTONS

   Page par jitne bhi "Explore Offering" buttons hain,
   un sabko select kar rahe hain.
   ========================================================= */

const learnMoreButtons =
    document.querySelectorAll(".learn-more-button");



/* =========================================================
   OPEN OFFERING MODAL

   Kisi offering button par click hone par
   us offering ki information modal mein show hogi.
   ========================================================= */

learnMoreButtons.forEach(function (button) {

    button.addEventListener("click", function () {


        /* Button ke data-offering attribute ko read karta hai */

        const offeringName =
            button.getAttribute("data-offering");


        /* Offering ka data find karta hai */

        const offering =
            offerings[offeringName];


        /* Agar data nahi mila to function stop */

        if (!offering) {

            return;

        }


        /* Modal icon update */

        modalIcon.textContent =
            offering.icon;


        /* Modal number update */

        modalNumber.textContent =
            offering.number;


        /* Modal title update */

        modalTitle.textContent =
            offering.title;


        /* Modal description update */

        modalDescription.textContent =
            offering.description;


        /* Modal price update */

        modalPrice.textContent =
            offering.price;


        /* Modal open */

        offeringModal.classList.add("active");


        /* Page ko background mein scroll hone se rokta hai */

        document.body.style.overflow = "hidden";

    });

});



/* =========================================================
   CLOSE MODAL

   Close button click hone par modal band hoga.
   ========================================================= */

modalClose.addEventListener("click", closeOfferingModal);



/* =========================================================
   OVERLAY CLICK

   Popup ke bahar click karne par bhi modal close hoga.
   ========================================================= */

modalOverlay.addEventListener(
    "click",
    closeOfferingModal
);



/* =========================================================
   CLOSE MODAL FUNCTION
   ========================================================= */

function closeOfferingModal() {

    /* Modal se active class remove */

    offeringModal.classList.remove("active");


    /* Background scrolling wapas enable */

    document.body.style.overflow = "";

}



/* =========================================================
   ESCAPE KEY

   Keyboard se ESC press karne par modal close hoga.
   ========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeOfferingModal();

    }

});
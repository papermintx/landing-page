
function scrollTop() {
    const scrollTop = document.getElementById("scroll-top");
    if (window.scrollY >= 560) scrollTop.classList.add("show-scroll");
    else scrollTop.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollTop);

const sections = document.querySelectorAll("section[id]");
function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 64; //4rem -> 64px (header height)
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

var swiper = new Swiper(".mySwiper", {
    // effect: "fade",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

function toggleRecipe(button) {
    const recipeDetails = button.nextElementSibling;
    if (recipeDetails.style.display === "none") {
        recipeDetails.style.display = "block";
    } else {
        recipeDetails.style.display = "none";
    }
}

function calculateTotal() {
    var checkboxes = document.querySelectorAll('.items input[type="checkbox"]');
    var totalPrice = 0;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            var itemPrice = parseFloat(checkboxes[i].parentNode.querySelector('.price').innerText.replace('Rp.', ''));
            totalPrice += itemPrice;
        }
    }

    document.getElementById('totalPrice').innerText = 'Rp.' + totalPrice;
}



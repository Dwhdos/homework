const heroModal = document.querySelector('.hero_modal');
const heroCloseBtn = document.querySelector('.hero_modal__close-btn');
const heroOpenBtn = document.querySelector('.hero__girl-player-btn');
const pageBody = document.body;

const openHeroModal = () => {
    heroModal.classList.add('hero_modal--open');
    pageBody.classList.add('body--fixed-hero');
};

const closeHeroModal = () => {
    heroModal.classList.remove('hero_modal--open');
    pageBody.classList.remove('body--fixed-hero');
};

heroOpenBtn.addEventListener('click', openHeroModal);
heroCloseBtn.addEventListener('click', closeHeroModal);

heroModal.addEventListener('click', event => {
    if (event.target.classList.contains('hero_modal')) {
        closeHeroModal();
    }
});

const handleHeroModalKeydown = event => {
    if (event.code === 'Escape' && heroModal.classList.contains('hero_modal--open')) {
        closeHeroModal();
    }
};

document.addEventListener('keydown', handleHeroModalKeydown);

const giftModal = document.querySelector('.modal');
const giftOpenBtn = document.querySelector('.about-inner__gift-btn-open');
const giftCloseBtn = giftModal.querySelector('.modal__close');

const openGiftModal = () => {
    giftModal.classList.add('modal--open');
    pageBody.classList.add('body--fixed-gift');
};

const closeGiftModal = () => {
    giftModal.classList.remove('modal--open');
    pageBody.classList.remove('body--fixed-gift');
};

giftOpenBtn.addEventListener('click', openGiftModal);
giftCloseBtn.addEventListener('click', closeGiftModal);

giftModal.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
        closeGiftModal();
    }
});

const handleGiftModalKeydown = event => {
    if (event.code === 'Escape' && giftModal.classList.contains('modal--open')) {
        closeGiftModal();
    }
};

document.addEventListener('keydown', handleGiftModalKeydown);


// tabs

const tabControls = document.querySelector('.tab-controls')
tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {
    const tabControl = e.target.closest('.tab-controls-item')

    if (!tabControl) return

    e.preventDefault()

    const tabContentID = tabControl.querySelector('.tab-controls-link').getAttribute('href')

    document.querySelector('.tab-content--show').classList.remove('tab-content--show')
    document.querySelector(tabContentID).classList.add('tab-content--show')

    document.querySelector('.tab-controls-item--active').classList.remove('tab-controls-item--active')
    tabControl.classList.add('tab-controls-item--active')

    document.querySelectorAll('.accordeon-list__content--show').forEach(content => {
        content.classList.remove('accordeon-list__content--show')
    })
}


document.querySelectorAll('.tab-content').forEach(tab => {
    tab.addEventListener('click', toggleAccordion);
});

function toggleAccordion(e) {
    const controlButton = e.target.closest('.accordeon-list__control');

    if (!controlButton) return;

    const listItem = controlButton.closest('.accordeon-list__item');
    const content = listItem.querySelector('.accordeon-list__content');

    if (content) {
        content.classList.toggle('accordeon-list__content--show');
    }
}


// swiper-gallery

function updateSwiperSettings() {
    const rootStyles = getComputedStyle(document.documentElement);
    const spaceBetween = parseInt(rootStyles.getPropertyValue('--space-between')) || 32;
    const slidesPerView = parseInt(rootStyles.getPropertyValue('--slides-to-show')) || 4;

    if (window.gallerySwiper) {
        gallerySwiper.params.spaceBetween = spaceBetween;
        gallerySwiper.params.slidesPerView = slidesPerView;
        gallerySwiper.update();
    } else {
        window.gallerySwiper = new Swiper('.gallery__slider', {
            spaceBetween: spaceBetween,
            slidesPerView: slidesPerView,

            pagination: {
                el: '.gallery__pagination',
                type: 'fraction',
            },

            navigation: {
                nextEl: '.gallery__next',
                prevEl: '.gallery__prev',
            },
        });
    }
}

updateSwiperSettings();
window.addEventListener('resize', updateSwiperSettings);


// swiper-feesback

function updateFeedbackSwiperSettings() {
    const rootStyles = getComputedStyle(document.documentElement);
    const slidesPerView = parseFloat(rootStyles.getPropertyValue('--feedback-slides-to-show')) || 1.8;

    if (window.feedbackSwiper) {
        feedbackSwiper.params.slidesPerView = slidesPerView;
        feedbackSwiper.update();
    } else {
        window.feedbackSwiper = new Swiper('.feedback__slider', {
            spaceBetween: 34,
            slidesPerView: slidesPerView,
            centeredSlides: true,
            loop: true,

            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },

            navigation: {
                nextEl: '.feedback__next',
                prevEl: '.feedback__prev',
            },
        });
    }
}

updateFeedbackSwiperSettings();
window.addEventListener('resize', updateFeedbackSwiperSettings);


function checkOverflowFeedback() {
    document.querySelectorAll('.feedback_slide-content-txt').forEach(parent => {
        const child = parent.querySelector('div');

        if (child) {
            const parentHeight = parent.clientHeight;
            const childHeight = child.scrollHeight;
            if (childHeight > parentHeight) {
                child.classList.add('FeedbackScroll');
            } else {
                child.classList.remove('FeedbackScroll');
            }
        }
    });
}

checkOverflowFeedback();
window.addEventListener('resize', checkOverflowFeedback);
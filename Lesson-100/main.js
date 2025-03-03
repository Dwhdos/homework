const btn = document.querySelector('.about-inner__gift-btn-open')
const modal = document.querySelector('.modal')
const body = document.body

const modalOpen = () => {
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')

}

const modalClose = () => {
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
}

btn.addEventListener('click', modalOpen)

modal.addEventListener('click', event => {
    const target = event.target;
    if (
        target &&
        (target.classList.contains('modal') || target.closest('.modal__close'))
    ) {
        modalClose();
    }
});


document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        modalClose()
    }
})

document.querySelector('.modal__window-recipe__email input').addEventListener('blur', function () {
    const span = document.querySelector('.modal__window-recipe__email span');
    span.textContent = 'Введите e-mail';
});


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

const gallerySwiper = new Swiper('.gallery__slider', {

    spaceBetween: 32,
    slidesPerView: 4,

    pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },
});

// swiper-feesback

const feedbackSwiper = new Swiper('.feedback__slider', {
    spaceBetween: 34,
    slidesPerView: 1.8,
    centeredSlides: true,
    // loop: true,

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    navigation: {
        nextEl: '.feedback__next',
        prevEl: '.feedback__prev',
    },
});




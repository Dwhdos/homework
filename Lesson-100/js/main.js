const btn = document.querySelector('.about-inner__gift-btn-open')
const modal = document.querySelector('.modal')
const body = document.body

// modal-video

document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.querySelector(".hero__girl-player-btn");
    const modal = document.querySelector(".video-modal");
    const closeButton = document.querySelector(".close-btn");
    const videoElement = modal.querySelector("video");

    if (playButton && modal && closeButton && videoElement) {
        // При клике на кнопку показываем модалку и запускаем видео
        playButton.addEventListener("click", function () {
            modal.style.display = "flex";
            videoElement.play();
        });

        // Закрытие модалки при клике на крестик
        closeButton.addEventListener("click", function () {
            modal.style.display = "none";
            videoElement.pause();
        });

        // Закрытие модалки при клике вне неё
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
                videoElement.pause();
            }
        });
    }
});


//  modal-gift
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

document.querySelector('.modal__window-recipe__email input').addEventListener('blur', function() {
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
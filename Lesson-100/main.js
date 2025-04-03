:root {
    --accent: #FFA55C;
    --accent-2: #CEAAD0;
    --heading: #1F1711;
    --txt: #312C27;
    --bg: #FFE0CB;
    --bg-light: #fff9f4;
    --purple: #704174;
    --disabled: #E1D9E1;
    --input: #AC907A;

    --container-width: 1280px;

    --slides-to-show: 4;
    --space-between: 32px;

    --feedback-slides-to-show: 1.8;
}

/* ====================================================================================================================== */

html,
body {
    overflow-x: hidden;
    scrollbar-width: none;
}


body {
    font-family: 'Montserrat', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 15px;
    background: var(--bg-light);
    line-height: 1.5;
    color: var(--txt);
}

h1 {
    font-size: 74px;
    line-height: 1;
}

h2 {
    font-size: 42px;
}

h3 {
    font-size: 32px;
}

h1,
h2,
h3 {
    font-family: 'Gabriola', serif;
    color: var(--heading);
}

.uppercase {
    text-transform: uppercase;
    color: var(--accent-2);
    margin-bottom: 20px;
}

.container {
    max-width: var(--container-width);
    margin: 0 auto;
}

section {
    padding-top: 140px;
}

.appointment__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    border-radius: 60px;
    padding: 18px 36px;
    max-width: 500px;
    background-color: var(--accent);
    transition: .4s;
    cursor: pointer;
}

.appointment__btn:hover {
    background-color: #FF9138;
}

/* ====================================================================================================================== */

.header {
    padding-top: 19px;
    background: url('../img/bg-top.png') 50% 50% / cover no-repeat;
}

.header__top {
    display: flex;
    justify-content: space-between;
}

.nav__list {
    display: flex;
    flex-wrap: wrap;
    gap: 24px 40px;
    padding-top: 29px;
}

.nav-item {
    position: relative;
    display: inline-block;
    z-index: 2;
}


.nav-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: transparent;
    transition: background-color 0.5s ease;
    top: -6px;
    left: -11px;
    z-index: -1;
}

.nav-item:hover::before {
    background-color: var(--accent);
    opacity: 1;
}

/* ====================================================================================================================== */

.hero {
    padding: 48px 0 140px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}

.hero__info {
    padding-top: 82px;
    max-width: 520px;
}

.hero__info-description {
    margin-top: 30px;
    margin-bottom: 40px;
}

.hero__girl {
    overflow: hidden;
    display: flex;
    position: relative;
    width: 555px;
}

.hero__girl-player {
    display: flex;
    position: absolute;
    left: 60.5%;
    bottom: 51px;
    height: 78px;
    align-items: center;
}

.hero__girl-player-btn {
    width: 78px;
    height: 78px;
    border-radius: 100px;
    background: var(--bg);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
}

.hero__girl-player-btn::before {
    content: '';
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    border: 1px solid var(--accent);
    opacity: 0;
    transition: all .3s;
}

.hero__girl-player-btn:hover::before {
    opacity: 1;
}

.hero__girl-player-txt {
    padding-left: 10px;
    max-width: 120px;
}

.hero_modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.hero_modal.hero_modal--open {
    visibility: visible;
    opacity: 1;
}

.hero_modal-window {
    border-radius: 20px;
    width: 728px;
    height: 450px;
    background: var(--bg-light);
}

.hero_modal__close-btn {
    margin-top: 10px;
    margin-left: 694px;
    background: none;
    border: none;
    cursor: pointer;
}

.hero_modal__close-btn:hover path,
.hero_modal__close-btn:hover rect {
    stroke: var(--input);
    transition: all .3s;
}

.hero_modal_video_video {
    display: flex;
    align-items: center;
}

.hero_modal_video video {
    width: 728px;
    border-radius: 20px;
}

/* ====================================================================================================================== */

.about-inner {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.about-inner__girl {
    position: relative;
}

.about-inner__girl-img {
    border-radius: 20px;
}

.about-inner__girl__gift {
    position: absolute;
    /* z-index: 2; */
    top: 405px;
    left: 30px;
    border-radius: 20px;
    padding: 18px 20px;
    height: 108px;
    width: 300px;
    display: flex;
    background-color: rgba(149, 123, 151, 0.9);
    color: var(--bg-light);
}

.about-inner__gift-btn-open {
    width: 78px;
    height: 78px;
    border-radius: 100px;
    background: var(--bg-light);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.about-inner__gift-btn-open::before {
    content: '';
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    border: 1px solid var(--accent-2);

    opacity: 0;
    transition: all .3s;
}

.about-inner__gift-btn-open:hover::before {
    opacity: 1;
}

.body--fixed {
    overflow-y: hidden;
}

.modal {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transition: all .2s;
}

.modal--open {
    opacity: 1;
    visibility: visible;
}

.modal__window {
    position: relative;
    background: var(--bg-light);
    height: 491px;
    width: 428px;
    border-radius: 20px;

    display: flex;
    justify-content: space-between;
    line-height: 0.8;
    color: var(--txt);

    position: relative;
}

.modal__window-recipe {
    padding-left: 60px;
}

.modal__window-recipe h2 {
    padding-top: 148px;
    padding-bottom: 10px;
}

.cupcakes-modal {
    position: absolute;
    top: -65px;
    padding-left: 12px;
}

.modal__window-recipe__email {
    margin-top: 30px;
    display: flex;
    align-items: center;
    padding: 19px 41px 19px 28px;
    height: 62px;
    width: 308px;
    border-radius: 100px;
    border: 1px solid var(--input);

    transition: border-color 0.3s ease;
    position: relative;
}

.modal__window-recipe__email input {
    background-color: var(--bg-light);
    z-index: 3;
    color: var(--txt);
}

.modal__window-recipe__email span {
    font-size: 11px;
    position: absolute;
    z-index: 4;
    top: 10px;
    color: var(--input);
}

.modal__window-recipe__email input::placeholder {
    color: var(--input);

}

.modal__window-recipe__email:hover {
    border-color: var(--accent);
}

.modal__window-recipe__email:hover input::placeholder {
    --input: var(--accent);
    transition: all .2s;
}

.modal__close {
    margin: 20px 20px 0 16px;
}

.modal__close:hover path,
.modal__close:hover rect {
    stroke: var(--input);
    transition: all .3s;
}

.modal__window-recipe__get {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 62px;
    width: 308px;
    background-color: var(--accent);
    border-radius: 200px;
    margin-top: 10px;
    transition: background 0.3s ease-in-out;
}

.modal__window-recipe__get:hover {
    cursor: pointer;
    background: #FF9138;
}

.about-inner__gift-txt {
    padding-left: 10px;
    width: 172px;
}

.about-inner__info {
    width: 624px;
}

.about-inner__info__title {
    line-height: 1;
    padding-bottom: 30px;
}

.about-inner__info__txt {
    padding-bottom: 40px;
}

.about-inner__info__points {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
}

.about-inner__info__points-item {
    height: 130px;
    width: 248px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: var(--bg);
}

.about-inner__info__points-item__img {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 100px;
    width: 60px;
    height: 60px;
}

.about-inner__info__points-item__txt {
    padding-left: 15px;
    width: 173px;
}

/* ====================================================================================================================== */

.program__inner__cap h1 {
    line-height: 1;
    padding-bottom: 20px;
}

.program__inner__cap-txt div {
    width: 374px;
}

.program__inner__cap-txt {
    height: 72px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
}

.tab-controls {
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    width: 624px;
    justify-content: space-between;
}

.tab-controls-item {
    display: block;
    padding: 14px 30px;
    border-radius: 100px;
    box-shadow: 0px 4px 20px rgba(206, 195, 185, 0.3);
    transition: all .3s ease-in-out;
}

.tab-controls-item:hover {
    box-shadow: 2px 4px 20px rgba(0, 0, 0, 0);
    background: var(--bg);
}

.tab-controls-item--active {
    box-shadow: 2px 4px 20px rgba(0, 0, 0, 0);
    background: var(--bg);
}

.tab-content {
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    display: none;
}

.tab-content--show {
    display: block;
}

.accordeon-list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

.accordeon-list__item {
    border: 1px solid var(--accent);
    border-radius: 20px;
}

.accordeon-list__item button {
    border-radius: 20px;
}

.accordeon-list__control {
    display: flex;
    width: 1280px;
    background: var(--bg-light);
    justify-content: space-between;
}

.accordeon-list__control-icon {
    margin: 41px 30px 0px 0px;
    transition: all .3s;
}

.accordeon-list__control-icon path {
    transition: all .3s;
}

.accordeon-list__control:hover .accordeon-list__control-icon {
    transform: rotate(90deg);
    background: var(--accent);
    border-radius: 100px;
}

.accordeon-list__control:hover .accordeon-list__control-icon path {
    fill: var(--bg-light);
}

.accordeon-list__content {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
    display: flex;
}

.accordeon-list__content--show {
    max-height: 580px;
    opacity: 1;
}

.theory {
    width: 507px;
    margin: 0px 0px 40px 30px;
}

.theory-item {
    display: flex;
    line-height: 1.7;
    margin-top: 20px;
}

.theory-item svg {
    margin-right: 8px;
}

.practice {
    max-width: 256px;
    margin-left: 80px;
}

.practice-item {
    margin-top: 20px;
}

.tab-content h2 {
    padding: 40px 0px 40px 30px;
    line-height: .9;
}

.arrow {
    margin: 41px 30px 0px 0px;
}


.promo {
    display: flex;
    margin-top: 40px;
}

.promo-content {
    margin-right: 115px;
}

.promo-content__info {
    display: flex;
}

.promo-discount {
    background: var(--bg);
    border-radius: 20px;
    width: 287px;
    margin-bottom: 40px;
}

.discount-title {
    padding: 40px 81px 0 40px;
    font-size: 20px;
}

.discount-value {
    font-family: 'Gabriola', sans-serif;
    color: var(--accent);
    line-height: 1;
    padding-left: 71px;
    display: inline-block;
    width: 100px;
    text-align: center;
    animation: hit 1s ease-in-out infinite alternate;
}

@keyframes hit {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(1.2);
    }
}

.discount-date {
    padding: 7px 81px 40px 125px;
}

.promo-prices {
    margin-left: 40px;
    width: 173px;
}

.prices-old {
    margin-bottom: 44px;
}

.promo-uppercase {
    margin-bottom: 5px;
    font-size: 16px;
}

.prices-old__price {
    font-family: 'Gabriola';
    font-size: 30px;
    margin-top: 5px;
    line-height: 1;
}

.prices-new__price {
    font-family: 'Gabriola';
    font-size: 45px;
    margin-top: 5px;
    line-height: 1;
}

.promo__btn {
    width: 5000px;
}

/* ====================================================================================================================== */

.gallery-inner__content__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    background-color: #f9f9f9;
    margin-bottom: 40px;
}

.gallery-inner__content__grid-img {
    align-items: center;
    text-align: center;
}

.gallery-inner__content__grid-info {
    display: flex;
    justify-content: space-between;
    align-self: flex-end;
}

.gallery-inner__content__grid-info-txt {
    width: 380px;
}

.gallery-inner__content__grid-info-txt h1 {
    line-height: 1;
    padding-bottom: 20px;
}

.gallery-inner__content__grid-info-btns {
    width: 170px;
    margin-top: auto;
    display: flex;
    gap: 30px;
    align-items: center;
}

.gallery__next,
.gallery__prev {
    background: transparent;
    cursor: pointer;
    border: 1.5px solid var(--accent);
    border-radius: 50%;
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s;
}

.gallery__next path,
.gallery__prev path {
    transition: all .3s;
}

.gallery__next:hover,
.gallery__prev:hover {
    background: var(--accent);
}

.gallery__next:hover path,
.gallery__prev:hover path {
    fill: var(--bg-light);
}


.gallery__pagination {
    font-family: 'Gabriola';
    font-size: 42px;
    display: flex;
}

.gallery__slide {
    border-radius: 20px;
    overflow: hidden;
}

.gallery__slide img {
    width: 100%;
}

/* ====================================================================================================================== */

.feedback {
    position: relative;
    margin-bottom: 140px;
}

.feedback-inner {
    margin-bottom: 40px;
}

.feedback-inner__content {
    display: flex;
    justify-content: space-between;
}

.feedback-inner__content__grid-info-txt {
    width: 632px;
}

.feedback-inner__content__grid-info-txt h1 {
    line-height: 1;
    padding-bottom: 20px;
}

.feedback-inner__content__grid-info-btns {
    width: 170px;
    margin-top: auto;
    display: flex;
    gap: 30px;
    align-items: center;
}

.feedback__next,
.feedback__prev {
    background: transparent;
    cursor: pointer;
    border: 1.5px solid var(--accent);
    border-radius: 50%;
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s;
}

.feedback__next path,
.feedback__prev path {
    transition: all .3s;
}

.feedback__next:hover,
.feedback__prev:hover {
    background: var(--accent);
}

.feedback__next:hover path,
.feedback__prev:hover path {
    fill: var(--bg-light);
}

.feedback__next:hover,
.feedback__prev:hover {
    background: var(--accent);
}

.feedback__pagination {
    font-family: 'Gabriola';
    font-size: 42px;
    display: flex;
}

.feedback__slider-wrapper {
    height: 330px;
    display: flex;
    align-items: center;
}

.feedback__slider {
    overflow: visible !important;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.feedback__slide {
    border-radius: 20px;
    overflow: visible;
    width: 624px;
    height: 330px;
    background: var(--bg);
    transition: transform 0.5s ease, opacity 0.3s ease, width 0.5s ease, height 0.5s ease;
    opacity: 0.3;
}

.feedback__slide.swiper-slide-active {
    opacity: 1;
    transform: scale(1);
}

.feedback__slide:not(.swiper-slide-active) {
    opacity: 0.5;
    transform: scale(0.9);
    width: 561.6px;
    height: 297px;
    margin-right: 34.2px;
}

.feedback__slide.swiper-slide-prev,
.feedback__slide.swiper-slide-next {
    opacity: 0.7;
}

.feedback_slide-content {
    display: flex;
    margin: 30px 30px 40px 30px;
}

.feedback_slide-content-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 30px 20px 0;
}

.feedback_slide-content-profile img {
    border-radius: 20px;
    width: 165px;
    height: 165px;
    margin-bottom: 20px;
}

.feedback_slide-content-profile-name {
    color: var(--txt);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
}

.feedback_slide-content-profile-instagram {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent-2);
    height: 24px;
}

.feedback_slide-content-profile-instagram svg {
    margin-right: 5px;
}

.feedback_slide-content-profile-instagram a {
    font-size: 12px;
    line-height: 1;
}

.feedback_slide-content-txt {
    width: 369px;
    height: 260px;
}

.feedback_slide-content-txt div {
    font-size: 16px;
    /* height: 180px; */
}

.feedback_slide-content-txt h3 {
    margin-bottom: 10px;
    line-height: 1;
}

.feedback .container {
    overflow: visible !important;
}

.feedback__scrollbar {
    background: var(--bg);
}

.swiper-scrollbar-drag {
    background: var(--accent);
}

.swiper-horizontal>.swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-horizontal {
    left: auto;
    right: auto;
    top: 786px;
    height: var(--swiper-scrollbar-size, 7px);
    width: 1280px;
}

/* ====================================================================================================================== */

.sign-up {
    height: 786px;
    background: url('../img/bg-bottom.png') 50% 50% / cover no-repeat;
    overflow: hidden;
}

.sign-up__inner {
    display: flex;

}

.sign-up__inner-imgs {
    max-width: 574px;
    height: auto;
}

.sign-up__inner-imgs img {
    max-width: 100%;
    height: auto;
}

.sign-up__inner-application {
    width: 504px;
    display: flex;
    justify-content: space-between;
}

.sign-up__inner-application__title {
    padding-bottom: 40px;
}

.sign-up__inner-application__title-h1 {
    width: 420px;
    line-height: 400%;
    padding-bottom: 20px;
}

.input {
    height: 62px;
    border: 2px solid var(--input);
    border-radius: 100px;
    display: flex;
    align-items: center;
    padding-left: 28px;
    margin: 10px 0 20px 0;
    background: #ffd9c0;
}

.input input {
    color: var(--input);
    background: #ffd9c0;
    width: auto;
}

.checkbox {
    display: flex;
    position: relative;
    padding-left: 24px;
    cursor: pointer;
    font-size: 16px;
}

.checkbox input {
    display: none;
}

.svg-container {
    position: absolute;
    top: 25%;
    left: 0;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
}

.svg-container svg {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s;
}

.svg-container .default {
    opacity: 1;
}

.checkbox:hover path,
.checkbox:hover rect {
    stroke: var(--accent);
    transition: all .3s;
}

.checkbox input:checked+.svg-container .default {
    opacity: 0;
}

.checkbox input:checked+.svg-container .active {
    opacity: 1;
}

.berries-right {
    padding: 38px 0 0 104px;
}

.sign-up__btn {
    margin-top: 20px;
    max-width: 420px;
}

/* ====================================================================================================================== */

footer {
    background-color: #AB8261;
    color: var(--bg-light);
}

.footer-inner {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height: 253px;
    padding-top: 30px;
    position: relative;
}

.footer-inner__socials {
    max-width: 272px;
}

.footer-inner__socials-svg {
    padding-top: 20px;
}

.footer-inner__socials-svg img {
    padding-left: 15px;
}

.footer-inner__socials-svg img:first-child {
    padding-left: 0;
}


.footer-inner__info {
    padding-top: 30px;
    max-width: 908px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.footer-inner__info-navigation-item {
    padding-bottom: 30px;
}

.footer-inner__info-location-item {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
}

.footer-inner__info-location-item img {
    padding-right: 8px;
}

.footer-inner__info-location-item span {
    padding-right: 10px;
    padding-bottom: 10px;
}

.footer-inner__info-number div {
    font-size: 22.3px;
    font-weight: 500;
    padding-top: 3px;
}

.footer__copyright {
    position: absolute;
    right: 0;
    bottom: 60px;
    line-height: 165%;
    color: #DEC5B1;
}

/* ====================================================================================================================== */

@media (max-width: 1024px) {
    .container {
        width: 1000px;
    }

    .hero__info {
        max-width: 425px;
        margin-right: 20px;
    }

    .about-inner__girl-img {
        width: 365px;
        height: 380px;
        object-fit: cover;
    }

    .about-inner__girl__gift {
        position: relative;
        top: 32px;
        left: 0;
        width: auto;
        height: 130px;
        align-items: center;
    }

    .about-inner__info {
        width: 555px;
    }

    .accordeon-list__control {
        width: 1000px;
    }

    .promo-content {
        margin-right: -160px;
    }

    .gallery-inner__content__grid-info-txt {
        width: 314px;
    }

    .feedback_slide-content-txt div {
        font-size: 13px;
    }

    .footer__copyright {
        bottom: 15px;
    }

    .swiper-horizontal>.swiper-scrollbar,
    .swiper-scrollbar.swiper-scrollbar-horizontal {
        width: 1000px;
    }
}

@media (max-width: 760px) {
    h1 {
        font-size: 60px;
    }

    h2 {
        font-size: 35px;
    }

    :root {
        --slides-to-show: 3;
        --space-between: 10px;

        --feedback-slides-to-show: 1.4;
    }

    .container {
        width: 736px;
    }

    .nav__list {
        gap: 28px;
    }

    .header-btn {
        width: auto;
    }

    .hero__info {
        width: 339px;
        padding-top: 125px;
    }

    .hero__info-title h1 {
        font-size: 60px;
    }

    .hero__girl {
        width: auto;
    }

    .hero__girl-player {
        left: 20px;
        bottom: 20px;
        background: rgba(255, 249, 244, 0.8);
        border-radius: 20px;
        padding: 5px;
        height: 88px;
    }

    .about-inner__girl {
        margin-bottom: 335px;
    }

    .about-inner__girl-img {
        width: 350px;
        height: 325px;
    }

    .about-inner__girl__gift {
        position: absolute;
        top: 185px;
        left: 10px;
    }

    .about-inner__info {
        width: 374px;
        position: relative;
    }

    .about-inner__info__txt {
        margin-bottom: 55px;
    }

    .about-inner__info__points {
        width: 736px;
        position: absolute;
        left: -364px;
        gap: 10px;
    }

    .about-inner__info__points-item {
        width: 352px;
    }

    .about-inner__info__points-item__txt {
        width: 240px;
    }

    .program__inner__cap-txt div {
        width: 1010px;
    }

    .tab-controls-item {
        margin-bottom: 10px;
    }

    .accordeon-list__item {
        width: 736px;
    }

    .accordeon-list__item button {
        width: 734px;
    }

    .promo-img {
        width: 330px;
    }

    .promo-content {
        margin-right: -80px;
    }

    .gallery-inner__content__grid {
        position: relative;
    }

    .gallery-inner__content__grid-img {
        width: 300px;
        position: absolute;
        left: 390px;
    }

    .gallery-inner__content__grid-info-btns {
        padding-left: 76px;
    }

    .swiper-horizontal>.swiper-scrollbar,
    .swiper-scrollbar.swiper-scrollbar-horizontal {
        width: 736px;
    }

    .feedback_slide-content-txt div {
        overflow: auto;
        max-height: 172px;
        background: rgba(255, 249, 244, 0.8);
        border-radius: 5px;
        padding: 5px;
    }
}

@media (max-width: 480px) {
    .container {
        width: 480px;
        padding: 0 12px 0 12px;
        justify-content: center;
    }

    section {
        padding-top: 70px;
    }

    h1 {
        font-size: 45px;
    }

    h2 {
        font-size: 28px;
    }

    body {
        font-size: 16px;
    }

    :root {
        --slides-to-show: 2;
        --space-between: 10px;

        --feedback-slides-to-show: 1;
    }

    .hero__info-title h1 {
        font-size: 45px;
    }

    .header__top {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .nav__list {
        flex-direction: column;
        gap: 15px;
        margin-top: 20px;
    }

    .hero {
        justify-content: center;
        padding-bottom: 70px;
    }

    .hero__info {
        padding: 0;
        margin-right: 0;
        width: 456px;
    }

    .hero__info-date {
        display: flex;
    }

    .header__btn {
        width: 425px;
    }

    .hero__girl {
        height: 549px;
    }

    .about-inner {
        justify-content: center;
    }

    .about-inner__girl {
        margin-bottom: 20px;
    }

    .about-inner__girl-img {
        width: 456px;
    }

    .about-inner__info {
        width: 456px;
    }

    .about-inner__info__txt {
        margin-bottom: 0;
    }

    .about-inner__info__points-ul {
        display: flex;
        justify-content: center;
    }

    .about-inner__info__points {
        height: 550px;
        width: 80vw;
        left: 0;
        position: inherit;
        gap: 15px;
        display: flex;
        justify-content: center;
    }

    .about-inner__info__points-item {
        width: 80vw;
    }

    .program__inner__cap-txt {
        flex-direction: column;
    }

    .program__inner__cap-txt div {
        width: 456px;
    }

    .tab-content--show {
        margin-top: 70px;
    }

    .tab-controls {
        width: 456px;
    }

    .tab-controls-item {
        padding: 14px 15px;
        gap: 5px;
    }

    .accordeon-list__item {
        width: 456px;
    }

    .accordeon-list__item button {
        width: 454px;
    }

    .tab-content h2 {
        padding: 20px 0 20px 30px;
    }

    .accordeon-list__control-icon {
        margin-top: 14.5px;
    }

    .accordeon-list__control-icon-1 {
        margin-top: 27.19px;
    }

    .promo-discount {
        width: 247px;
    }

    .discount-date {
        padding-right: 50px;
    }

    .prices-new__price {
        font-size: 35px;
    }

    .promo__btn {
        width: 456px;
    }

    .promo-img {
        display: none;
    }

    .gallery-inner__content__grid-img {
        display: none;
    }

    .gallery-inner__content__grid-info-btns {
        padding-left: 0;
    }

    .gallery-inner__content__grid-info-txt {
        width: 285px;
    }
    
    .footer-inner {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .footer-inner__socials-svg {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .footer-inner__info-location {
        width: 180px;
    } 
}

@media (max-width: 320px) {
    .container {
        width:320px;
        padding: 0 12px 0 12px;
        justify-content: center;
    }

    :root {
        --slides-to-show: 1;
        --space-between: 10px;

        --feedback-slides-to-show: 1;
    }

    .hero__info {
        width: 300px;
    }

    .header__btn {
        width: 300px;
    }

    .hero__girl {
        height: 357px;
    }

    .about-inner__girl-img {
        width: 300px;
    }

    .about-inner__girl__gift {
        top: 190px;
        left: 5px;
    }

    .about-inner__info__points-item__img {
        margin-left: 5px;
    }

    .about-inner__info__points-item {
        width: 100vw;
    }

    .program__inner__cap-txt div {
        width: 300px;
    }

    .tab-controls {
        width: 225px;
    }

    .program__inner__cap-txt {
        margin-bottom: 160px;
    }

    .accordeon-list__item {
        width: 300px;
    }

    .accordeon-list__item button {
        width: 298px;
    }

    .accordeon-list__content--show {
        max-width: 580px;
        display: flex;
        flex-wrap: wrap;
    }

    .accordeon-list__content--show {
        max-width: 580px !important;
    }

    .practice {
        margin-left: 30px;
    }

    .promo-content__info {
        flex-wrap: wrap;
    }

    .promo-discount {
        width: 300px;
    }

    .promo-prices {
        margin-left: 20px;
        margin-bottom: 20px;
    }

    .promo__btn {
        width: 300px;
    }

    .gallery-inner__content__grid-info {
        flex-wrap: wrap;
    }

    .gallery-inner__content__grid-info-btns {
        position: absolute;
        top: 255px;
    }

    .gallery-inner__content__grid-info-txt {
        margin-bottom: 26px;
    }

    .feedback-inner__content {
        flex-wrap: wrap;
    }

    .feedback-inner__content__grid-info-txt {
        margin-bottom: 26px;
    }

    .feedback-inner__content__grid-info-btns {
        position: absolute;
        top: 386px;
    }

    .feedback_slide-content-profile {
        margin-right: 10px;
        margin-bottom: 91px;
    }

    .feedback_slide-content-profile img {
        width: 100px;
        height: 100px;
    }

    .feedback_slide-content-profile-name {
        font-size: 13px;
    }

    .feedback_slide-content {
        margin-left: 10px;
    }

    .feedback__slide {
        position: relative;
    }

    .feedback_slide-content-txt div {
        position: absolute;
        left: 10px;
        bottom: 10px;
        max-height: 120px;
        width: 276px;
    }

    .swiper-horizontal>.swiper-scrollbar, .swiper-scrollbar.swiper-scrollbar-horizontal {
        width: 300px;
    }

    .sign-up__inner-application__title {
        width: 300px;
    }

    .footer-inner__info-location-item {
        width: 195px;
    }

    .footer-inner__info-number {
        margin-bottom: 50px;
    }
}

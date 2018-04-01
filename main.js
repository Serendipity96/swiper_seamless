let $buttons = $('#buttons>li')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()
init()
bindEvents()

$('#previous').on('click', function () {
    goToSlide(current - 1)
})

$('#next').on('click', function () {
    goToSlide(current + 1)
})

let timer = setInterval(function () {
    goToSlide(current + 1)
}, 2000)

$('.window').on('mouseenter',(function () {
    clearInterval(timer)
})).on('mouseleave',(function () {
    timer = setInterval(function () {
        goToSlide(current + 1)
    },2000);
}))

function bindEvents() {
    $('#buttons').on('click', 'li', function (ev) {
        let $button = $(ev.currentTarget)
        let index = $button.index()
        goToSlide(index)
    })
}

function goToSlide(index) {
    if (index > $buttons.length - 1) {
        index = 0
    } else if (index < 0) {
        index = $buttons.length - 1
    }
    if (current === $buttons.length - 1 && index === 0) {
        $slides.css({transform: `translateX(${-($buttons.length + 1) * 1226}px)`})
            .one('transitionend', function () {
                $slides.hide().offset()
                $slides.css({transform: `translateX(${-(index + 1) * 1226}px)`}).show()
            })
    } else {
        $slides.css({transform: `translateX(${-(index + 1) * 1226}px)`})
    }
    $buttons.eq(index).addClass('select').siblings().removeClass('select')
    current = index
}

function makeFakeSlides() {
    let firstCopy = $images.eq(0).clone()
    let lastCopy = $images.eq($images.length - 1).clone()
    $slides.append(firstCopy)
    $slides.prepend(lastCopy)
}

function init() {
    $slides.css({transform: 'translateX(-1226px)'})
}
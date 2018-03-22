let $buttons = $('#buttons>li')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()
init()
bindEvents()

function bindEvents() {
    $buttons.eq(0).on('click', function () {
        if (current == 4) {
            $slides.css({transform: 'translateX(-7356px)'})
                .one('transitionend', function () {
                    $slides.hide().offset()
                    $slides.css({transform: 'translateX(-1226px)'}).show()
                })
        } else {
            $slides.css({transform: 'translateX(-1226px)'})
        }
        $buttons.eq(0).addClass('select').siblings().removeClass('select')
        current = 0
    })
    $buttons.eq(1).on('click', function () {
        $slides.css({transform: 'translateX(-2452px)'})
        $buttons.eq(1).addClass('select').siblings().removeClass('select')
        current = 1
    })
    $buttons.eq(2).on('click', function () {
        $slides.css({transform: 'translateX(-3678px)'})
        $buttons.eq(2).addClass('select').siblings().removeClass('select')
        current = 2
    })
    $buttons.eq(3).on('click', function () {
        $slides.css({transform: 'translateX(-4904px)'})
        $buttons.eq(3).addClass('select').siblings().removeClass('select')
        current = 3
    })
    $buttons.eq(4).on('click', function () {
        $slides.css({transform: 'translateX(-6130px)'})
        $buttons.eq(4).addClass('select').siblings().removeClass('select')
        current = 4
    })
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
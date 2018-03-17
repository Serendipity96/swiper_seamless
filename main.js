let n
init()
setInterval(() => {
    activeButton(getButton(n))
    makeLeave(getImage(n))
    .one('transitionend', (e) => {
    makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n + 1))
    n++;
},3000)

function getImage(n) {
    return $(`.images > img:nth-child(${computeN(n)})`)
}

function computeN(n) {
    if (n > 3) {
        n = n % 3
        if (n === 0) {
            n = 3
        }
    }
    return n //  1 2 3
}

function init() {
    n = 1
    $(`.images > img:nth-child(${n})`)
        .addClass('current')
        .siblings()
        .addClass('enter')
    $(`#buttons > button:nth-child(${computeN(n)})`)
        .addClass('red')
        .siblings('.red')
        .removeClass('red');
}

function makeCurrent($node) {
    return $node.removeClass('enter leave').addClass('current')
}

function makeLeave($node) {
    return $node.removeClass('enter current').addClass('leave')
}

function makeEnter($node) {
    return $node.removeClass('leave current').addClass('enter')
}

//button
function getButton(n) {
    return $(`#buttons > button:nth-child(${computeN(n + 1)})`)
}

function activeButton($button) {
    return $button.addClass('red')
        .siblings('.red')
        .removeClass('red');
}
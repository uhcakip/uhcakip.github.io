document.addEventListener('DOMContentLoaded', function () {
    const scrollTopButton = document.getElementById('scroll-top-button')
    const loader = document.getElementById('loader')
    const content = document.getElementById('content')

    scrollTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollTopButton.classList.add('show')
        } else {
            scrollTopButton.classList.remove('show')
        }
    })

    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.style.opacity = '0'
            content.style.display = 'block'

            setTimeout(() => {
                content.classList.add('visible')
            }, 50)

            setTimeout(() => {
                loader.style.display = 'none'
            }, 500)
        }, 1000)
    })
})
document.addEventListener('DOMContentLoaded', function () {
    const scrollTopButton = document.getElementById('scroll-top-button')
    const loader = document.getElementById('loader')
    const content = document.getElementById('content')

    // Preload background image
    const backgroundImage = new Image()
    backgroundImage.src = 'assets/images/keyboards.png'

    backgroundImage.onload = () => {
        setTimeout(() => {
            loader.style.opacity = '0'
            content.style.display = 'block'

            requestAnimationFrame(() => {
                content.style.opacity = '1'
                content.classList.add('visible')
            })

            setTimeout(() => {
                loader.style.display = 'none'
            }, 500)
        }, 1000)
    }

    // Scroll to top button
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
})
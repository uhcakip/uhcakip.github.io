document.addEventListener('DOMContentLoaded', function () {
    const scrollTopButton = document.getElementById('scroll-top-button')
    const loader = document.getElementById('loader')
    const content = document.getElementById('content')

    // Preload fonts and background image
    const fonts = [
        new FontFace('Anonymous Pro', 'url(https://cdn.jsdelivr.net/npm/@fontsource/anonymous-pro@5.1.0/files/anonymous-pro-latin-400-normal.woff2)'),
        new FontFace('Mulish', 'url(https://cdn.jsdelivr.net/npm/@fontsource/mulish@5.1.0/files/mulish-latin-400-normal.woff2)')
    ]

    const backgroundImage = new Image()
    backgroundImage.src = 'assets/images/keyboards.png'

    Promise.all([
        ...fonts.map(font => font.load()),
        new Promise((resolve) => {
            backgroundImage.onload = resolve
        })
    ]).then(loadedAssets => {
        loadedAssets.filter(asset => asset instanceof FontFace).forEach(font => {
            document.fonts.add(font)
        })

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
    })

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
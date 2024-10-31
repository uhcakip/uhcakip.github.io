document.addEventListener('DOMContentLoaded', function () {
    const scrollTopButton = document.getElementById('scroll-top-button')
    const loader = document.getElementById('loader')
    const content = document.getElementById('content')

    // Preload fonts
    const fonts = [
        new FontFace('Anonymous Pro', 'url(https://cdn.jsdelivr.net/npm/@fontsource/anonymous-pro@5.1.0/files/anonymous-pro-latin-400-normal.woff2)'),
        new FontFace('Mulish', 'url(https://cdn.jsdelivr.net/npm/@fontsource/mulish@5.1.0/files/mulish-latin-400-normal.woff2)')
    ]

    Promise.all(fonts.map(font => font.load()))
        .then(loadedFonts => {
            loadedFonts.forEach(font => document.fonts.add(font))
        })

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
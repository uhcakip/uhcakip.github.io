document.addEventListener('DOMContentLoaded', function () {
    const scrollTopButton = document.getElementById('scroll-top-button')

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
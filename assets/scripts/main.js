document.addEventListener('DOMContentLoaded', function () {
  const loader = document.getElementById('loader')
  const content = document.getElementById('content')
  const backgroundImage = new Image()
  backgroundImage.src = 'assets/images/keyboards.png'
  backgroundImage.onload = () => {
    setTimeout(() => {
      loader.style.opacity = '0'
      content.style.display = 'block'

      requestAnimationFrame(() => {
        content.style.opacity = '1'
        content.classList.add(CSS_CLASSES.VISIBLE)
      })

      setTimeout(() => {
        loader.style.display = 'none'
      }, 500)
    }, 1000)
  }

  const scrollTopButton = document.getElementById('scroll-top-button')
  scrollTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollTopButton.classList.add(CSS_CLASSES.SHOW)
    } else {
      scrollTopButton.classList.remove(CSS_CLASSES.SHOW)
    }
  })

  const UI_TEXT = {
    EXPAND_ALL: 'Expand All',
    COLLAPSE_ALL: 'Collapse All',
  }
  const CSS_CLASSES = {
    COLLAPSED: 'collapsed',
    TOGGLE_COLLAPSED: 'toggle-icon-collapsed',
    EXPAND: 'expand',
    COLLAPSE: 'collapse',
    VISIBLE: 'visible',
    SHOW: 'show',
  }

  const sectionHeadings = document.querySelectorAll(
    '#my-tech-stack h3, #tools-i-use h3')
  sectionHeadings.forEach(heading => {
    heading.innerHTML = `<span class="toggle-icon">🔽</span> ${heading.innerHTML}`
    heading.addEventListener('click', function () {
      const { contentList, toggleIcon } = getHeadingElements(heading)
      const section = this.closest('section')
      toggleIcon.classList.toggle(CSS_CLASSES.TOGGLE_COLLAPSED)
      contentList.classList.toggle(CSS_CLASSES.COLLAPSED)
      updateToggleButton(section)
    })
  })

  const toggleAllButtons = document.querySelectorAll('.toggle-all-btn')
  toggleAllButtons.forEach(button => {
    button.textContent = UI_TEXT.COLLAPSE_ALL
    button.classList.add(CSS_CLASSES.COLLAPSE)
    button.addEventListener('click', function (e) {
      e.stopPropagation()
      const shouldExpand = this.textContent === UI_TEXT.EXPAND_ALL
      toggleAllContent(this, shouldExpand)
    })
  })

  // Updates the toggle button state based on the current state of all headings in the section
  function updateToggleButton (section) {
    const headings = section.querySelectorAll('h3')
    const toggleButton = section.querySelector('.toggle-all-btn')
    const isAllCollapsed = Array.from(headings).every(heading => {
      const { contentList } = getHeadingElements(heading)
      return contentList.classList.contains(CSS_CLASSES.COLLAPSED)
    })
    const isAllExpanded = Array.from(headings).every(heading => {
      const { contentList } = getHeadingElements(heading)
      return !contentList.classList.contains(CSS_CLASSES.COLLAPSED)
    })

    if (isAllCollapsed) {
      toggleButton.textContent = UI_TEXT.EXPAND_ALL
      toggleButton.classList.remove(CSS_CLASSES.COLLAPSE)
      toggleButton.classList.add(CSS_CLASSES.EXPAND)
    } else if (isAllExpanded) {
      toggleButton.textContent = UI_TEXT.COLLAPSE_ALL
      toggleButton.classList.remove(CSS_CLASSES.EXPAND)
      toggleButton.classList.add(CSS_CLASSES.COLLAPSE)
    }
  }

  // Returns content list and toggle icon for a heading
  function getHeadingElements (heading) {
    return {
      contentList: heading.nextElementSibling,
      toggleIcon: heading.querySelector('.toggle-icon'),
    }
  }

  // Expands or collapses all content in a section and updates the toggle button
  function toggleAllContent (button, shouldExpand) {
    const section = button.closest('section')
    const headings = section.querySelectorAll('h3')

    headings.forEach(heading => {
      const { contentList, toggleIcon } = getHeadingElements(heading)
      if (shouldExpand) {
        contentList.classList.remove(CSS_CLASSES.COLLAPSED)
        toggleIcon.classList.remove(CSS_CLASSES.TOGGLE_COLLAPSED)
      } else {
        contentList.classList.add(CSS_CLASSES.COLLAPSED)
        toggleIcon.classList.add(CSS_CLASSES.TOGGLE_COLLAPSED)
      }
    })

    button.textContent = shouldExpand
      ? UI_TEXT.COLLAPSE_ALL
      : UI_TEXT.EXPAND_ALL
    button.classList.remove(
      shouldExpand ? CSS_CLASSES.EXPAND : CSS_CLASSES.COLLAPSE)
    button.classList.add(
      shouldExpand ? CSS_CLASSES.COLLAPSE : CSS_CLASSES.EXPAND)
  }
})

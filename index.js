// Save DOM elements needed into variables
const navToggle = document.querySelector('.mobile-nav-toggle')
const nav = document.querySelector('.primary-navigation')

// Listen for CLICK event on the hamburger menu
navToggle.addEventListener('click', () => {
    // store the state of the navigation (closed or open)
    const visibility = nav.getAttribute('data-visible')

    // check if visibility is false
    if (visibility === 'false') {
        // if false set to true and change icon and set aria expanded
        nav.setAttribute('data-visible', true)
        navToggle.style.backgroundImage = 'url(./assets/shared/icon-close.svg)'
        navToggle.setAttribute('aria-expanded', true)
    } else {
        // if true set to false and change icon and set aria expanded
        nav.setAttribute('data-visible', false)
        navToggle.style.backgroundImage = 'url(./assets/shared/icon-hamburger.svg)'
        navToggle.setAttribute('aria-expanded', false)
    }
})
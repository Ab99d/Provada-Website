/* add the aos animation library */
AOS.init();

/* making the hamburger menu */
const hamBtn = document.querySelector('.fa-bars')
const hamUl = document.getElementById('main-ul')
const heroM = document.getElementById('hero-m')
hamBtn.addEventListener('click', function() {
    hamUl.classList.toggle("open-m")
})

/* making the useful fotter links */
const link = document.querySelectorAll('#ulLinks li')
const sections = document.querySelectorAll('[data-scroll]')

for(let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function() {
        sections.forEach(section => {
            if(link[i].id == section.getAttribute('data-scroll')) {
                const sectionTop = section.offsetTop
                window.scrollTo(0, section.offsetTop)
            }
        })
    })
}

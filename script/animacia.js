const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } 
    })
})
const hiddenElements = document.querySelectorAll('.hidden')
Array.from(hiddenElements).forEach((el) => observer.observe(el));
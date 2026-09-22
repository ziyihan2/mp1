/* Your JS here. */
// https://chatgpt.com/share/6ab303b3-c718-83ea-a8ba-5fd998f5c50e

const sec = document.querySelectorAll("section")
const bar = document.querySelector(".bar")
const bar_col = document.querySelectorAll(".bar a:not(.logo)");

window.addEventListener("scroll",function() {
    //bar resizing
    if (window.scrollY > 120){
        bar.classList.add("resize");
    } else if (window.scrollY < 60){
        bar.classList.remove("resize");
    }

    //highlight the position
    const barheight = bar.offsetHeight;
    let cursec = "home";
    sec.forEach(function(section) {
        const secTop = section.getBoundingClientRect().top;
        if (secTop <= barheight) cursec = section.id;
    });
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        cursec = sec[sec.length - 1].id;
    }
    bar_col.forEach(function(link){
        link.classList.remove("active")
    });
    const barcol = document.querySelector('.bar a:not(.logo)[href="#' + cursec + '"]');
    if(barcol) barcol.classList.add("active");
});

//gallary  arrows
const page = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let curslide = 0;
function showSlide(){
    page.forEach(function(page) {
        page.classList.remove("active");
    });
    page[curslide].classList.add("active")
}

//forward
next.addEventListener("click",function() {
    curslide++;
    if(curslide >= page.length) curslide = 0;
    showSlide();
});
//backward
prev.addEventListener("click", function() {
    curslide--;
    if(curslide < 0) curslide = page.length-1;
    showSlide();
});


//Modal 
const moreItems = document.querySelectorAll(".more-item");
const photoModal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");


moreItems.forEach(function (item) {
  item.addEventListener("click", function () {
    modalImage.src = item.dataset.image;
    modalTitle.textContent = item.dataset.title;
    modalDescription.textContent = item.dataset.description;
    photoModal.style.display = "flex";
  });

});


closeModal.addEventListener("click", function () {
  photoModal.style.display = "none";
});
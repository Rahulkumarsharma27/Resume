// Attach event listeners to next and previous page buttons
const pageTurnBtns = document.querySelectorAll('.nextprev-btn');

pageTurnBtns.forEach((btn, index) => {
    btn.onclick = () => {
        const pageTurnId = btn.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    };
});

// Attach event listeners to contact me buttons
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtns = document.querySelectorAll('.btn.contact');

contactMeBtns.forEach(btn => {
    btn.onclick = () => {
        pages.forEach((page, index) => {
            const reverseIndex = pages.length - 1 - index;
            setTimeout(() => {
                pages[reverseIndex].classList.add('turn');
                setTimeout(() => {
                    pages[reverseIndex].style.zIndex = 20 + index;
                }, 500);
            }, (index + 1) * 200 + 100);
        });
    };
});



let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

const backprofileBtn = document.querySelector('.back-profile');

backprofileBtn.onclick = () => {
    pages.forEach((_, index) => {
       
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
}

const coverRight = document.querySelector('.cover.cover-right');

const pageLeft = document.querySelector('.book-page.page-left');

setTimeout (() => {
    coverRight.classList.add('turn');
},2100)

setTimeout (() => {
    coverRight.style.zIndex = -1;
   
},2800)

setTimeout (() => {
    pageLeft.style.zIndex = 20;
},3200)





pages.forEach((_, index) => {
       
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500);
    }, (index + 1) * 200 + 2100);
})
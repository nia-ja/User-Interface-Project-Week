class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        // reference to the left button
        this.leftBtn = this.carousel.querySelector('.left-button');
        // reference to the right button
        this.rightBtn = this.carousel.querySelector('.right-button');
        // reference to all images
        this.blocks = this.carousel.querySelectorAll('.carousel-city');
        // set index to first slide
        this.blockIndex = 0;
        //display first image in NodeList
        this.blocks[this.blockIndex].style.display = 'block';
        // click events for buttons
        this.leftBtn.addEventListener('click', this.showPreviousBlock.bind(this));
        this.rightBtn.addEventListener('click', this.showNextBlock.bind(this));
    }

    showPreviousBlock() {
        // set all images as invisible
        this.blocks.forEach(block => {
            block.style.display = 'none';
            // block.classList.remove('animate-left');
            // block.classList.remove('animate-right');
        });
        // substruct 1 from index
        this.blockIndex -= 1;
        //if index is negative
        if (this.blockIndex < 0) {
            // grab last image from NodeList
            this.blockIndex = this.blocks.length - 1;
            // this.blocks[this.blockIndex].classList.toggle('animate-left');
            //display last image
            this.blocks[this.blockIndex].style.display = 'block';
        } else {
            // this.blocks[this.blockIndex].classList.toggle('animate-left');
            //display image with currant index
            this.blocks[this.blockIndex].style.display = 'block';
        }
    }

    showNextBlock() {
        // set all images as invisible
        this.blocks.forEach(block => {
            block.style.display = 'none';
            // block.classList.remove('animate-left');
            // block.classList.remove('animate-right');
        });
        //adds 1 to index
        this.blockIndex += 1;
        // if index is bigger then length of immage NodeList
        if (this.blockIndex > (this.blocks.length - 1)) {
            // grab first image from NodeList
            this.blockIndex = 0;
            // this.blocks[this.blockIndex].classList.toggle('animate-right');
            //display first image
            this.blocks[this.blockIndex].style.display = 'block';
        } else {
            // this.blocks[this.blockIndex].classList.toggle('animate-right');
            //display image with currant index
            this.blocks[this.blockIndex].style.display = 'block';
        }
    }
}


// reference to the carousel
let carousel = document.querySelector('.carousel')
// creating new instance of Carousel class
carousel = new Carousel(carousel);

// images are changing automatically, when user is not clicking (9000ms == 9s)
// setInterval(carousel.showNextBlock.bind(carousel), 9000);
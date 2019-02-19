class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        // reference to the left button
        this.leftBtn = this.carousel.querySelector('.left-button');
        // reference to the right button
        this.rightBtn = this.carousel.querySelector('.right-button');
        // reference to all cards
        this.blocks = this.carousel.querySelectorAll('.carousel-city');
        // set index to first card
        this.blockIndex = 0;
        //display first card in NodeList
        this.blocks[this.blockIndex].style.display = 'block';
        // click events for buttons
        this.leftBtn.addEventListener('click', this.showPreviousBlock.bind(this));
        this.rightBtn.addEventListener('click', this.showNextBlock.bind(this));
    }

    showPreviousBlock() {
        const wordControls = document.querySelectorAll('.tabs-link');
        wordControls.forEach(control => control.classList.remove("tabs-link-selected"));
        // set all cards as invisible
        this.blocks.forEach(block => {
            block.style.display = 'none';
            // block.classList.remove('animate-left');
            // block.classList.remove('animate-right');
        });
        // substruct 1 from index
        this.blockIndex -= 1;
        //if index is negative
        if (this.blockIndex < 0) {
            // grab last card from NodeList
            this.blockIndex = this.blocks.length - 1;
            // this.blocks[this.blockIndex].classList.toggle('animate-left');
            //display last card
            this.blocks[this.blockIndex].style.display = 'block';
        //     const currentTab = document.querySelector(`.tabs-link[data-tab="${this.dataTab}"]`);
        // currentTab.classList.toggle('tabs-link-selected');
        } else {
            // this.blocks[this.blockIndex].classList.toggle('animate-left');
            //display card with currant index
            this.blocks[this.blockIndex].style.display = 'block';
            // const currentTab = document.querySelector(`.tabs-link[data-tab="${this.dataTab}"]`);
            // currentTab.classList.toggle('tabs-link-selected');
        }
        const dataTab = this.blocks[this.blockIndex].dataset.tab;
        const currentTab = document.querySelector(`.tabs-link[data-tab="${dataTab}"]`);
        currentTab.classList.toggle('tabs-link-selected');
    }

    showNextBlock() {
        const wordControls = document.querySelectorAll('.tabs-link');
        wordControls.forEach(control => control.classList.remove("tabs-link-selected"));
        // set all cards as invisible
        this.blocks.forEach(block => {
            block.style.display = 'none';
            // block.classList.remove('animate-left');
            // block.classList.remove('animate-right');
        });
        //adds 1 to index
        this.blockIndex += 1;
        // if index is bigger then length of blocks NodeList
        if (this.blockIndex > (this.blocks.length - 1)) {
            // grab first card from NodeList
            this.blockIndex = 0;
            // this.blocks[this.blockIndex].classList.toggle('animate-right');
            //display first card
            this.blocks[this.blockIndex].style.display = 'block';
            // const currentTab = document.querySelector(`.tabs-link[data-tab="${this.dataTab}"]`);
            // currentTab.classList.toggle('tabs-link-selected');
        } else {
            // this.blocks[this.blockIndex].classList.toggle('animate-right');
            //display card with currant index
            this.blocks[this.blockIndex].style.display = 'block';
            // const currentTab = document.querySelector(`.tabs-link[data-tab="${this.dataTab}"]`);
            // currentTab.classList.toggle('tabs-link-selected');
        }
        const dataTab = this.blocks[this.blockIndex].dataset.tab;
        const currentTab = document.querySelector(`.tabs-link[data-tab="${dataTab}"]`);
        currentTab.classList.toggle('tabs-link-selected');
    }
}

// reference to the carousel
let carousel = document.querySelector('.carousel')
// creating new instance of Carousel class
carousel = new Carousel(carousel);






// NAME controls
class WordControl {
    constructor(wordControl) {
        // setting up a reference to our DOM node
        this.wordControl = wordControl;
        // set up a reference to our custom data attribute
        this.data = this.wordControl.dataset.tab;
        // Using the custom data attribute get the associated Item element
        this.carouselItem = document.querySelector(`.carousel-city[data-tab="${this.data}"]`);
        // Using the Item element, create a new instance of the CarouselItem class
        this.carouselItem = new CarouselItem(this.carouselItem);
        // added a click event listener to our dot. That calls the method dotClick
        this.wordControl.addEventListener('click', this.wordClick.bind(this));
    }
    wordClick() {
        const wordControls = document.querySelectorAll('.tabs-link');
        wordControls.forEach(wordControl => wordControl.classList.remove('tabs-link-selected'));
        this.wordControl.classList.toggle('tabs-link-selected');
        this.carouselItem.select();
    }
}

class CarouselItem {
    constructor(carouselItem) {
      // Assign this.element to the passed in element
      this.carouselItem = carouselItem;
    //   console.log(this.element);
    }
  
    select() {
        const carouselItems = document.querySelectorAll('.carousel-city');
        carouselItems.forEach(item => (item.style.display = 'none'));
        this.carouselItem.style.display = "block";
    }
}

const wordControls = document.querySelectorAll('.tabs-link')
                    .forEach(wordControl => new WordControl(wordControl));
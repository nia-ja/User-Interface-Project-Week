// // Modal component
class TagName {
    constructor(tagName) {
        this.tagName = tagName;
        this.data = this.tagName.dataset.name;
        this.modalItem = document.querySelector(`.modal[data-name="${this.data}"]`);
        this.modalItem = new ModalItem(this.modalItem);
        this.tagName.addEventListener('click', this.openModal.bind(this));
    };
    openModal() {
        this.modalItem.openModal();
    }
    closeModal() {
        this.modalItem.closeModal();
    }
}

class ModalItem {
    constructor(modalItem) {
        this.modalItem = modalItem;
        this.closeBtn = this.modalItem.querySelector('.closeBtn');
        console.log(this.closeBtn);
        this.closeBtn.addEventListener('click', this.closeModal.bind(this));
        window.addEventListener('click', this.closeModalOutside.bind(this));
    }
    openModal() {
        this.modalItem.style.display = "block";

    }
    closeModal() {
        this.modalItem.style.display = "none";
    }
    closeModalOutside(e) {
        if(e.target == this.modalItem) {
            this.modalItem.style.display = "none";
        }
    }
}


const names = document.querySelectorAll('.tag-name')
                      .forEach(name => new TagName(name));

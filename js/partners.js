class Logo {
    constructor(logo) {
        this.logo = logo;
        this.logo.addEventListener("mouseenter", this.opacityOff.bind(this));
        this.logo.addEventListener("mouseleave", this.opacityOn.bind(this));
    }
    opacityOff(e) {
        this.logo.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        console.log(this.logo);
    }
    opacityOn() {
        this.logo.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    }
}

const logos = document.querySelectorAll(".partners-logo")
                      .forEach(logo => new Logo(logo));
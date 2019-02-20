// SERVICES PAGE - TAB COMPONENT

class TabLink {
    constructor(element) {
      // Assign this.element to the passed in DOM element
      this.element = element;
    //   console.log(this.element);
      
      // Get the custom data attribute on the Link
      this.data = this.element.dataset.tab;
    //   console.log(this.data);
      
      // Using the custom data attribute get the associated Item element
      this.tabItem = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    //   console.log(this.tabItem);
      
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.tabItem);
      
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', this.select.bind(this));
  
    };
  
    select() {
      console.log(this.element.classList);
      // Get all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tabs-link');
    //   console.log(links);
  
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      links.forEach(link => link.classList.remove('tabs-link-selected'));
    //   console.log(links);
  
      // Add a class named "tabs-link-selected" to this link
      this.element.classList.toggle('tabs-link-selected');
    //   console.log(this.element);
      
      // Call the select method on the item associated with this link
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      // Assign this.element to the passed in element
      this.element = element;
    //   console.log(this.element);
    }
  
    select() {
      // Select all ".tabs-item" elements from the DOM
      const items = document.querySelectorAll('.tabs-item');
  
      // Remove the class "tabs-item-selected" from each element
      items.forEach(item => {item.classList.remove('tabs-item-selected')});
      
      // Add a class named "tabs-item-selected" to this element
      this.element.classList.toggle('tabs-item-selected');
    //   console.log(this.element);
      TweenMax.from(".tabs-item-selected", 2, {opacity:0, scale:0,y:-200, zIndex:-9, ease: Power4.easeOut});
    }
  }
  
  const links = document.querySelectorAll('.tabs-link')
                        .forEach(link => new TabLink(link));

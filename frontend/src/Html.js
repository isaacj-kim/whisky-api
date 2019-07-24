export default function(){
return new Html();
}
class Html {
    create (elementType) {
        if (!elementType) {
            throw new Error("Must pass valid HTML element");
        }
const createdElement = document.createElement(elementType);
if(createdElement instanceof HTMLUnknownElement) {
    console.log(createdElement);
    throw new Error("Must pass valid HTML Element");
}
 this.element = createdElement;
 return this
    }

    addClass(classToAdd) {
    if (this.element.classList.contains(classToAdd)) {
        throw new Error ("Class already exists on element.");
    }
        this.element.classList.add(classToAdd);
        return this
    
}
isClassQuery(query) {
    return query.startsWith(".");
  }

  isIdQuery(query) {
    return query.startsWith("#");
  }
  render() {
    return this.element;
  }
}

// addAttribute(attributeToSet, attributeValue) {
//     this.element.setAttribute(attributeToSet, attributeValue);
//     return this;
// }

// addChild(elementToAdd) {
//     this.element.appendChild(elementToAdd.render());
//     return this;
// }

//


// class Html {
//     create(elementType) {
//       if (!elementType) {
//         throw new Error("Must pass valid HTML Element");
//       }
//       const createdElement = document.createElement(elementType);
//       if (createdElement instanceof HTMLUnknownElement) {
//         console.log(createdElement);
//         throw new Error("Must pass valid HTML Element");
//       }
//       this.element = createdElement;
//       return this;
//     }
  
//     addAttribute(attributeToSet, attributeValue) {
//       this.element.setAttribute(attributeToSet, attributeValue);
//       return this;
//     }
  
//     addChild(elementToAdd) {
//       this.element.appendChild(elementToAdd.render());
//       return this;
//     }
//     addClass(classToAdd) {
//       if (this.element.classList.contains(classToAdd)) {
//         throw new Error("Element already contains class name");
//       }
//       this.element.classList.add(classToAdd);
//       return this;
//     }
//     text(textToAdd) {
//       if (textToAdd === undefined) {
//         return this.element.textContent;
//       } else {
//         this.element.textContent = textToAdd;
//       }
//       return this;
//     }
  
//     render() {
//       return this.element;
//     }
  
//     select(query) {
//       // const selection = this.element.querySelectorAll(query);
//       const selection = document.querySelectorAll(query);
  
//       if (selection.length === 1) {
//         this.element = selection[0];
//       } else {
//         this.element = selection;
//       }
//       return this;
//     }
  
//     replace(element) {
//       this.element.innerHTML = "";
//       this.addChild(element);
  
//       return this;
//     }
  
//     html(contentToAdd) {
//       if (contentToAdd === undefined) {
//         return this.element.innerHTML;
//       }
//       this.element.innerHTML = contentToAdd;
  
//       return this;
//     }
//   }

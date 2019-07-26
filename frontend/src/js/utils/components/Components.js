import Html from "../html/Html"
import Api from "../api/Api"
import { directive } from "@babel/types";

export default () => new Components();

class Components {
    getAppContext() {
      return Html().select("#app");
    }
    renderWrapperDiv() {
        return Html()
            .create("div")
            .addClass("wrapper");
    }
    renderContainerDiv() {
        return Html()
            .create('div')
            .addClass('container');
    }
    renderMainHeader() {
        const mainHeader = Html()
            .create("header")
        const mainHeaderTitle = Html()
            .create("h1")
            .addClass("page-title")
            .text("Whisky Aficionado");
        const headerNav = this.renderMainNav();
        mainHeader.addChild(mainHeaderTitle);
        mainHeader.addChild(headerNav);
        return mainHeader;
    }
    renderMainNav() {
        const headerNav = Html()
            .create("nav")
        const headerNavList = Html()
            .create('ul')
            .addClass('nav-list')
        const headerNavListItemOne = Html()
            .create('li')
            .addClass('nav-list-item')
            .addChild(
                Html()
                    .create("a")
                    .addAttribute("href", "")
                    .text("Home")
                    .click(event => {
                        event.preventDefault();
                        this.renderPageHome();
                    })
            );
            
        const headerNavListItemTwo = Html()
            .create('li')
            .addClass('nav-list-item')
            .addChild(
                Html()
                    .create("a")
                    .addAttribute("href", "")
                    .text("Types")
                    .click(event => {
                        event.preventDefault();
                        this.renderTypesPage();
                    })
            );
        const headerNavListItemThree = Html()
            .create('li')
            .addClass('nav-list-item')
            .addChild(
                Html()
                    .create("a")
                    .addAttribute("href", "")
                    .text("Brands")
                    .click(event => {
                        event.preventDefault();
                        this.renderBrandsPage();
                        
                    })
            );
            headerNavList.addChild(headerNavListItemOne);
            headerNavList.addChild(headerNavListItemTwo);
            headerNavList.addChild(headerNavListItemThree);

            headerNav.addChild(headerNavList);
        
            return headerNav;


    }
    renderContentBlock(requestedData) {
        const contentBlock = Html()
          .create("section")
          .addClass("content-block");
        const contentBlockTitle = Html()
          .create("h3")
          .addClass("content-block__title")
          .text(requestedData);
        const contentBlockList = Html()
          .create("ul")
          .addClass("content-block__list");
        Api().getRequest(
          `http://localhost:8080/api/${requestedData}`,
          responseCollection => {
            responseCollection.forEach(item => {
              let elementName;
              if (item.name) {
                elementName = item.name;
              } else if (item.brandName) {
                elementName = item.brandName;
              } else {
                elementName = item.labelName;
              }
              const contentBlockListItem = Html()
                .create("li")
                .addClass("content-block__list-item")
                .addChild(
                  Html()
                    .create("a")
                    .addAttribute("href", `/${requestedData}/${item.id}`)
                    .text(elementName)
                    .click(event => {
                      event.preventDefault();
    
                      const endpoint = event.target.getAttribute("href");
                      Api().getRequest(
                        `http://localhost:8080/api${endpoint}`,
                        data => {
                          this.renderPageSingle(data, endpoint);
                        }
                      );
                    })
                );
              contentBlockList.addChild(contentBlockListItem);
            });
          }
        );
        contentBlock.addChild(contentBlockTitle);
        contentBlock.addChild(contentBlockList);
        return contentBlock;
      }

    renderMainContent(requestedData) {
        const mainContent = Html()
          .create("main")
          .addClass("main-content");
        const containerDiv = Html()
          .create("div")
          .addClass("container");
        const contentBlock = this.renderContentBlock(requestedData);
        containerDiv.addChild(contentBlock);
        mainContent.addChild(containerDiv);
        return mainContent;
    }
    renderMainFooter() {
        const mainFooter = Html()
          .create("footer")
          .addClass("main-footer");
        const mainFooterCopy = Html()
          .create("small")
          .addClass("main-footer__copy")
          .addHtml("&copy; 2019 Whisky");
        mainFooter.addChild(mainFooterCopy);
        return mainFooter;
      }

    renderPageSingle(data, endpoint) {
        const typeOfObject = endpoint.split("/")[1];
        if (typeOfObject === "whiskyType") {
          this.renderPageWhiskyType(data);
        }
        if (typeOfObject === "WhiskyBrand") {
          this.renderWhiskyBrand(data);
        }
        if (typeOfObject === "WhiskyLabel") {
          this.renderWhiskyLabel(data);
        }
      }
    renderPageHome() {
        const app = this.getAppContext();
        const wrapperDiv = this.renderWrapperDiv();
        const mainHeader = this.renderMainHeader();
        // const nav = this.renderMainNav();
        const mainContent = this.renderMainContent('');
        const mainFooter = this.renderMainFooter();
        wrapperDiv.addChild(mainHeader);
        wrapperDiv.addChild(mainContent);
        wrapperDiv.addChild(mainFooter);
        app.replace(wrapperDiv);
      }

}
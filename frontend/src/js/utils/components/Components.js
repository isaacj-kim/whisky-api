import html from "../html/html";
import Api from "../api/Api"
import { directive } from "@babel/types";

export default () => new Components();

class Components {
    getAppContext() {
        return html().select("#app");
    }
    renderWrapperDiv() {
        return html()
            .create("div")
            .addClass("wrapper");
    }
    renderContainerDiv() {
        return html()
            .create('div')
            .addClass('container');
    }
    renderMainHeader() {
        const mainHeader = html()
            .create("header")
        const mainHeaderTitle = html()
            .create("h1")
            .addClass("page-title")
            .text("Whisky Aficionado");
        const nav = this.renderMainNav();
        mainHeader.addChild(mainHeaderTitle);
        mainHeader.addChild(nav);
        return mainHeader;
    }
    renderMainNav() {
        const headerNav = html()
            .create("nav")
        const headerNavList = html()
            .create('ul')
            .addClass('nav-list')
        const headerNavListItem1 = html()
            .create('li')
            .addClass('nav-list-item')
            .addChild(
                html()
                    .create("a")
                    .addAttribute("href", "")
                    .text("Home")
                    .click(event => {
                        event.preventDefault();
                        this.renderPageHome();
                    })
            );
        const headerNavListItem2 = html()
            .create('li')
            .addClass('nav-list-item')
            .addChild(
                html()
                    .create("a")
                    .addAttribute("href", "")
                    .text("Types")
                    .click(event => {
                        event.preventDefault();
                        this.renderTypesPage();
                    })
            );
        const headerNavListItem3 = html()
            .create('li')
            .addClass('nav-list-item')
            .addChild(
                html()
                    .create("a")
                    .addAttribute("href", "")
                    .text("Brands")
                    .click(event => {
                        event.preventDefault();
                        this.renderBrandsPage();
                        headerNavList.addChild(headerNavListItem1)
                        headerNavList.addChild(headerNavListItem2)
                        headerNavList.addChild(headerNavListItem3)
                        headerNav.addChild(headerNavList);

                    })
            );
    }

    renderMainContent(requestedData) {
        const mainContent = html()
          .create("main")
          .addClass("main-content");
        const containerDiv = html()
          .create("div")
          .addClass("container");
        const contentBlock = this.renderContentBlock(requestedData);
        containerDiv.addChild(contentBlock);
        mainContent.addChild(containerDiv);
        return mainContent;
    }


    renderPageHome() {
        const app = this.getAppContext();
        const wrapperDiv = this.renderWrapperDiv();
        const mainHeader = this.renderMainHeader();
        // const nav = this.renderMainNav();
        const mainContent = this.renderMainContent('whiskyTypes');
        const mainFooter = this.renderMainFooter();
        wrapperDiv.addChild(mainHeader);
        wrapperDiv.addChild(mainContent);
        wrapperDiv.addChild(mainFooter);
        app.replace(wrapperDiv);
      }

}
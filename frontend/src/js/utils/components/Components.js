import Html from "../html/Html";
import Api from "../api/Api";


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
      .create("div")
      .addClass("container");
  }
  renderMainHeader() {
    const mainHeader = Html().create("header");
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
    const headerNav = Html().create("nav");
    const headerNavList = Html()
      .create("ul")
      .addClass("nav-list");
    const headerNavListItemOne = Html()
      .create("li")
      .addChild(
        Html()
        .create("a")
        .addClass("nav-list-item")
          .addAttribute("href", "")
          .text("Home")
          .click(event => {
            event.preventDefault();
            this.renderPageHome();
          })
      );

    const headerNavListItemTwo = Html()
      .create("li")
      .addChild(
        Html()
        .create("a")
        .addClass("nav-list-item")
          .addAttribute("href", "")
          .text("Types")
          .click(event => {
            event.preventDefault();
            this.renderPageTypes();
          })
      );
    const headerNavListItemThree = Html()
      .create("li")
      .addChild(
        Html()
        .create("a")
        .addClass("nav-list-item")
          .addAttribute("href", "")
          .text("Brands")
          .click(event => {
            event.preventDefault();
            this.renderPageBrands();
          })
      );
    headerNavList.addChild(headerNavListItemOne);
    headerNavList.addChild(headerNavListItemTwo);
    headerNavList.addChild(headerNavListItemThree);

    headerNav.addChild(headerNavList);

    return headerNav;
  }

  renderContentBlock(requestedData) {
    const contentBlock = Html().create('section').addClass('content-block');
    const contentBlockTitle = Html().create('h3').addClass('content-block__title').text(requestedData);
    const contentBlockList = Html().create('ul').addClass('content-block__list');
    Api().getRequest(
      `http://localhost:8080/api/${requestedData}`,
      (responseCollection) => {
        responseCollection.forEach((item) => {
          let elementName;
          if (item.name) {
            elementName = item.name;
          } else if (item.brandName) {
            elementName = item.brandName;
          } else {
            elementName = labelName;
          }
          const contentBlockListItem = Html()
            .create('li')
            .addClass('content-block__list-item')
            .addChild(Html()
              .create('a')
              .addAttribute('href', `/${requestedData}/${item.id}`)
              .text(elementName)
              .click((event) => {
                event.preventDefault()

                const endpoint = event.target.getAttribute('href')
                Api().getRequest(`http://localhost:8080/api${endpoint}`, (data) => {
                  this.renderPageSingle(data, endpoint)
                })
              }));
          contentBlockList.addChild(contentBlockListItem);
        });
      });
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
      .addClass("footer");
    const mainFooterCopy = Html()
      .create("small")
      .addClass("main-footer__copy")
      .addHtml("&copy; 2019 Whisky");
    mainFooter.addChild(mainFooterCopy);
    return mainFooter;
  }

  renderPageSingle(data, endpoint) {
    const typeOfObject = endpoint.split("/")[1];
    if (typeOfObject === "types") {
      this.renderPageType(data);
    }
    if (typeOfObject === "brands") {
      this.renderPageBrand(data);
    }
    if (typeOfObject === "labels") {
      this.renderPageLabel(data);
    }
  }
  renderPageHome() {
    const app = this.getAppContext();
    const wrapperDiv = this.renderWrapperDiv();
    const mainHeader = this.renderMainHeader();
    const mainContent = this.renderMainContent("Where Whisky Lovers Gather");
    const mainFooter = this.renderMainFooter();
    wrapperDiv.addChild(mainHeader);
    wrapperDiv.addChild(mainContent);
    wrapperDiv.addChild(mainFooter);
    app.replace(wrapperDiv);
  }

  renderPageTypes() {
    const currentMainContentContainer = this.renderWrapperDiv()
      .select(".main-content")
      .select(".container")
    currentMainContentContainer.replace(this.renderContentBlock("types"));
  }
  renderPageType(data) {
    const currentMainContentContainerContentBlock = this.renderWrapperDiv()
      .select(".main-content")
      .select(".container")
      .select(".content-block");
    // console.log(data);
    const typeEntry = Html()
      .create("div")
      .addClass("typeEntry");
    const typeName = Html()
      .create("h5")
      .addClass("content-block__title")
      .text(data.name);
    const typeDescription = Html()
      .create('h5')
      .addClass("content-block__description")
      .text(data.description)

    // const typeBrands = Html().create('ul');
    // data.brands.forEach(brand => {
    //   const brandElement = Html()
    //   .create('li')
    //   .addChild(
    //     Html()
    //     .create('a')
    //     .addAttribute("href", `/brands/${brand.id}`)
    //     .text(brand.brandName)
    //     .click(event => {
    //       event.preventDefault();

    //       const endpoint = event.target.gettAttribute("href");
    //       Api().getRequest(`http://localhost:8080/api${endpoint}`, data =>{
    //         this.renderPageSingle(data, endpoint);
    //       });
    //     })
    //   );
    //   typeBrands.addChild(brandElement);
    // });
    typeEntry.addChild(typeName);
    typeEntry.addChild(typeDescription);

    currentMainContentContainerContentBlock.replace(typeEntry);

  };
  renderPageBrands() {
    const currentMainContentContainer = this.renderWrapperDiv()
      .select(".main-content")
      .select(".container");
    currentMainContentContainer.replace(this.renderContentBlock("brands"));

  };
  renderPageBrand(data) {
    const currentMainContentContainerContentBlock = this.renderWrapperDiv()
      .select(".main-content")
      .select(".container")
      .select(".content-block");
    // console.log(data);
    const brandEntry = Html()
      .create("div")
      .addClass("brand-Entry");
    const brandsName = Html()
      .create("h3")
      .addClass("content-block__title")
      .text(data.brandName);
    const brandDescription = Html()
      .create("h5")
      .addClass("content-block__description")
      .text(data.brandDescription);

    // const brandLabels = Html().create("ul");
    // data.labels.forEach(label => {
    //   const labelElement = Html()
    //     .create("li")
    //     .addChild(
    //       Html()
    //         .create("a")
    //         .addAttribute("href", `/labels/${label.id}`)
    //         .text(label.labelName)
    //         .click(event => {
    //           event.preventDefault();

    //           const endpoint = event.target.getAttribute("href");
    //           Api().getRequest(`http://localhost:8080/api${endpoint}`, data => {
    //             this.renderPageSingle(data, endpoint);
    //           });
    //         })
    //     );
    //   brandLabels.addChild(labelElement);
    // });
    brandEntry.addChild(brandsName);
    brandEntry.addChild(brandDescription);
    currentMainContentContainerContentBlock.replace(brandEntry);
  };

  renderPageLabel(data) {
    const currentMainContentContainerContentBlock = this.getWrapperDiv().select('.main-content').select('.container').select('.content-block');
    const labelName = Html().create('h3').addClass('content-block__title').text(data.labelName);
    const labelBrand = Html().create('ul').addClass('brand');
    data.whiskyBrand.forEach(brand => {
      const brandElement = Html()
        .create('li')
        .addChild(
          Html()
            .create('a')
            .addAttribute('href', `/brands/${brand.id}`)
            .text(brand.name)
            .click((event) => {
              event.preventDefault()

              const endpoint = event.target.getAttribute('href')
              Api().getRequest(`http://localhost:8080/api${endpoint}`, (data) => {
                this.renderPageSingle(data, endpoint)
              })
            })
        );
      labelBrand.addChild(brandElement);
    });
    const labelType = Html().create('h4').addChild(Html().create('a').addAttribute('href', `/types/${data.type.id}`).text(data.type.name).click((event) => {
      event.preventDefault()

      const endpoint = event.target.getAttribute('href')
      Api().getRequest(`http://localhost:8080/api${endpoint}`, (data) => {
        this.renderPageSingle(data, endpoint)
      })
    }));
    currentMainContentContainerContentBlock.replace(labelName);
    currentMainContentContainerContentBlock.addChild(labelBrand);
    currentMainContentContainerContentBlock.addChild(labelType);

  };
}
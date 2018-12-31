/*

Holds the hamburger nav.

*/

class ShadowPhoneNav extends HTMLElement {

  constructor() {

    super();


  }

  connectedCallback() {

    this.innerHTML = "<main><section></section><section></section></main>";

    this.style.height = "auto";
    this.style.width = "auto";
    this.style.fontFamily = "Arial";

    this.style.textAlign = "center";
    this.style.justifyContent = "center";
    this.style.alignItems = "center";
    this.style.display = "flex";

    this.style.position = "fixed";

    this.style.zIndex = "5";

    // this.style.backgroundColor = "darkslategrey";

    let holdsHamburger = this.childNodes[0];

    holdsHamburger.style.justifyContent = "center";
    holdsHamburger.style.alignItems = "center";
    holdsHamburger.style.height = "48px";
    holdsHamburger.style.width = "48px";
    holdsHamburger.style.zIndex = "5";
    holdsHamburger.style.fontSize = "2.0em";
    holdsHamburger.style.textAlign = "center";

    holdsHamburger.style.backgroundColor = "black";
    holdsHamburger.style.borderRadius = "10px";

    holdsHamburger.style.display = "grid";

    holdsHamburger.style.padding = "4px";


    let holdsSymbol_1 = holdsHamburger.childNodes[0];

    holdsSymbol_1.style.height = "8px";
    holdsSymbol_1.style.width = "38px";

    holdsSymbol_1.style.backgroundColor = "white";

    holdsSymbol_1.style.borderRadius = "100px";

    let holdsSymbol_2 = holdsHamburger.childNodes[1];

    holdsSymbol_2.style.height = "8px";
    holdsSymbol_2.style.width = "38px";

    holdsSymbol_2.style.backgroundColor = "white";

    holdsSymbol_2.style.borderRadius = "100px";




  }

}

customElements.define('shadow-phone-nav', ShadowPhoneNav);

/*

Creates the shadow button for navigation and actions.

*/
class ShadowButton extends HTMLElement {

  constructor(buttonStyle) {
    super();

    this.shadowButtonText = this.getAttribute("shadow-text") ? this.getAttribute("shadow-text") : "Shadow Button";

    if (buttonStyle == "inverse") {

      this.shadowHover = buttonStyle;

    } else if (buttonStyle == "no-inverse") {

      this.shadowHover = buttonStyle;

    } else {

      this.shadowHover = buttonStyle;

    }
  }

  connectedCallback() {

    this.innerHTML = `<button id='shadow-button'>${this.shadowButtonText}</button>`;

    this.style.width = "100%";

    this.childNodes[0].style.width = "100%";
    this.childNodes[0].style.height = "auto";

    this.childNodes[0].style.color = "#000000";

    this.childNodes[0].style.backgroundColor = "slategrey";

    this.childNodes[0].style.border = "none";

    this.childNodes[0].style.borderRadius = "0px";

    this.childNodes[0].style.fontWeight = "bold";

    this.childNodes[0].style.fontSize = "2em";



    if (this.shadowHover == "no-inverse") {

      this.childNodes[0].style.color = "#000000";

      this.childNodes[0].style.backgroundColor = "slategrey";

      this.childNodes[0].style.border = "none";

      this.childNodes[0].style.borderRadius = "0px";

      this.childNodes[0].style.fontWeight = "bold";

      this.childNodes[0].style.fontSize = "2em";


    } else if (this.shadowHover == "inverse") {


      this.childNodes[0].style.color = "white";

      this.childNodes[0].style.backgroundColor = "black";

      this.childNodes[0].style.border = "none";

      this.childNodes[0].style.borderRadius = "0px";

      this.childNodes[0].style.fontWeight = "bold";

      this.childNodes[0].style.fontSize = "2em";


    } else if (this.shadowHover == "default") {

      //  Default style.

      this.childNodes[0].style.color = "white";

      this.childNodes[0].style.backgroundColor = "black";

      this.childNodes[0].style.border = "none";

      this.childNodes[0].style.borderRadius = "0px";

      this.childNodes[0].style.fontWeight = "bold";

    } else {

      //  Default style.

      this.childNodes[0].style.color = "white";

      this.childNodes[0].style.backgroundColor = "black"

      this.childNodes[0].style.borderRadius = "0px";

      this.childNodes[0].style.fontWeight = "bold";

    }


  }


}

customElements.define('shadow-button', ShadowButton);

/* NavagationSection */
/*
  ShadowNavButton
  Attrbutes:
  navName: String;
  navLink: String (URL);

 */
class ShadowNavButton extends HTMLElement {

  constructor(name, link) {

    super();

    //  ShadowNavButton name is defined in attribute.
    this.navName = name ? name : "Nav Button";
    //  Nav link fill the container i.e. ShadowNavButton.
    this.navLink = link ? link : "#";

  }

  connectedCallback() {

    this.innerHTML = `<a href='${this.navLink}'>${this.navName}</a>`;

    this.style.width = "100%";
    this.style.height = "100%";

    //  Centers nav's text.
    this.childNodes[0].style.textAlign = "center";

    this.childNodes[0].style.display = "flex";
    //  Centers the text horizontially.
    this.childNodes[0].style.justifyContent = "center";
    //  Centers the text vertically.
    this.childNodes[0].style.alignItems = "center";
    //  Hides text decoration (underlines for links);
    this.childNodes[0].style.textDecoration = "none";

    this.childNodes[0].style.fontFamily = "Menlo";
    this.childNodes[0].style.fontSize = "1.8em";




    //  Nav link fill the container i.e. ShadowNavButton.
    this.childNodes[0].style.width = "inherit";
    this.childNodes[0].style.height = "inherit";


  }

}

customElements.define('shadow-nav-button', ShadowNavButton);

/*

Creates the regular non-mobile navigation

*/
class ShadowNav extends HTMLElement {

  constructor() {

    super();

    this.homeNavButton = new ShadowNavButton("Home", "#");
    this.storeNavButton = new ShadowNavButton("Store", "#");
    this.ourMissionNavButton = new ShadowNavButton("Our Mission", "#");

    this.homeNavButton.connectedCallback();
    this.storeNavButton.connectedCallback();
    this.ourMissionNavButton.connectedCallback();



  }

  connectedCallback() {

    this.innerHTML = `${this.homeNavButton.innerHTML}${this.storeNavButton.innerHTML}${this.ourMissionNavButton.innerHTML}`

    this.className = "regular-nav";
    this.style.display = "grid";
    this.style.width = "100%";
    this.style.height = "20vh";
    this.style.gridColumnGap = "0px";
    this.textAlign = "center";

    this.style.gridTemplateColumns = "1fr 1fr 1fr";

    this.childNodes[0].setAttribute("navName", "Home");
    this.childNodes[1].setAttribute("navName", "Store");
    this.childNodes[2].setAttribute("navName", "OurMission");


    this.childNodes[0].style.color = "white";
    this.childNodes[1].style.color = "white";
    this.childNodes[2].style.color = "white";

    this.childNodes[0].style.backgroundColor = "rgb(0, 0, 0)";
    this.childNodes[1].style.backgroundColor = "rgb(0, 0, 0)";
    this.childNodes[2].style.backgroundColor = "rgb(0, 0, 0)";



    this.childNodes[0].onmouseover = this.overEffect;
    this.childNodes[0].onmouseout = this.outEffect;
    this.childNodes[0].onclick = this.clickEffect;

    this.childNodes[1].onmouseover = this.overEffect;
    this.childNodes[1].onmouseout = this.outEffect;
    this.childNodes[1].onclick = this.clickEffect;

    this.childNodes[2].onmouseover = this.overEffect;
    this.childNodes[2].onmouseout = this.outEffect;
    this.childNodes[2].onclick = this.clickEffect;


  }

  overEffect() {

    this.style.zIndex = "1";
    this.style.color = "white";
    this.style.backgroundColor = "rgb(10, 10, 10)";
    // this.style.border = "10px solid black";
    //  Good Green.
    this.style.boxShadow = "0px 10px 0px 0px darkslategrey";

  }

  outEffect() {

    this.style.color = "white";
    this.style.backgroundColor = "black";
    this.style.zIndex = "0";
    this.style.border = "0px";

    this.style.boxShadow = "0px 0px 0px 0px transparent";

  }

  clickEffect() {

    this.style.zIndex = "1";
    this.style.color = "white";


  }


}

customElements.define('shadow-nav', ShadowNav);



/*

Creates the mobile navigation bar.

*/
class ShadowPhoneNavBar extends HTMLElement {

  constructor() {

    super();

    this.shadowMobileNavButton = new ShadowPhoneNav();
    this.shadowNav = new ShadowNav();

    this.shadowNav.connectedCallback();
    this.shadowMobileNavButton.connectedCallback();


  }

  connectedCallback() {

    this.innerHTML = `<header>${this.shadowMobileNavButton.innerHTML}<section>LowCostCollectibles</section><section>${this.shadowNav.innerHTML}</section></header>`;

    this.className = "mobile-nav-bar";

    this.style.position = "relative";
    this.style.backgroundColor = "black";
    this.style.display = "block";
    this.style.width = "100%";
    this.style.height = "auto";


    let mobileNavBar = this.childNodes[0];

    mobileNavBar.style.display = "grid";
    mobileNavBar.style.paddingLeft = "10px";
    mobileNavBar.style.paddingRight = "10px";
    mobileNavBar.style.paddingTop = "10px";

    mobileNavBar.style.gridColumnGap = "10px";

    mobileNavBar.style.gridTemplateAreas = "'mb ht' 'hm .'";

    mobileNavBar.style.gridTemplateColumns = "1fr 7fr";
    mobileNavBar.style.width = "100%";


    let mobileNavButton = mobileNavBar.childNodes[0];

    mobileNavButton.style.gridArea = "mb";
    mobileNavButton.style.width = "100%";


    let headerText = mobileNavBar.childNodes[1];

    headerText.style.gridArea = "ht";

    headerText.style.color = "white";
    headerText.style.fontFamily = "Arial Black";
    headerText.style.fontSize = "2em";

    headerText.style.textAlign = "left";
    headerText.style.justifyContent = "left";
    headerText.style.alignItems = "center";
    headerText.style.display = "flex";

    headerText.style.width = "100%";

    let hiddenMenu = mobileNavBar.childNodes[2];

    hiddenMenu.className = "hidden-phone-menu";

    hiddenMenu.style.display = "none";

    hiddenMenu.style.gridArea = "hm";

    hiddenMenu.style.gridTemplateColumns = "1fr";
    hiddenMenu.style.gridTemplateRows = "1fr 1fr 1fr";

    hiddenMenu.childNodes[0].onmouseover = this.overEffect;
    hiddenMenu.childNodes[0].onmouseout = this.outEffect;
    hiddenMenu.childNodes[0].onclick = this.clickEffect;
    hiddenMenu.childNodes[0].style.paddingLeft = "15px";
    hiddenMenu.childNodes[0].style.paddingRight = "15px";
    hiddenMenu.childNodes[0].style.paddingTop = "10px";
    hiddenMenu.childNodes[0].style.paddingBottom = "10px";

    hiddenMenu.childNodes[1].onmouseover = this.overEffect;
    hiddenMenu.childNodes[1].onmouseout = this.outEffect;
    hiddenMenu.childNodes[1].onclick = this.clickEffect;
    hiddenMenu.childNodes[1].style.paddingLeft = "15px";
    hiddenMenu.childNodes[1].style.paddingRight = "15px";
    hiddenMenu.childNodes[1].style.paddingTop = "10px";
    hiddenMenu.childNodes[1].style.paddingBottom = "10px";

    hiddenMenu.childNodes[2].onmouseover = this.overEffect;
    hiddenMenu.childNodes[2].onmouseout = this.outEffect;
    hiddenMenu.childNodes[2].onclick = this.clickEffect;
    hiddenMenu.childNodes[2].style.paddingLeft = "15px";
    hiddenMenu.childNodes[2].style.paddingRight = "15px";
    hiddenMenu.childNodes[2].style.paddingTop = "10px";
    hiddenMenu.childNodes[2].style.paddingBottom = "10px";


    mobileNavButton.onclick = function() {

      if (document.getElementsByClassName("hidden-phone-menu")[0].style.display == "none") {
        document.getElementsByClassName("hidden-phone-menu")[0].style.visibility = "visible";
        document.getElementsByClassName("hidden-phone-menu")[0].style.display = "grid";

      } else {

        document.getElementsByClassName("hidden-phone-menu")[0].style.visibility = "hidden";
        document.getElementsByClassName("hidden-phone-menu")[0].style.display = "none";


      }


    }

  }

  overEffect() {

    this.style.zIndex = "1";
    this.style.color = "white";
    this.style.backgroundColor = "rgb(10, 10, 10)";
    // this.style.border = "10px solid black";
    //  Good Green.
    this.style.boxShadow = "-10px 0px 0px 0px darkslategrey";

  }

  outEffect() {

    this.style.color = "white";
    this.style.backgroundColor = "black";
    this.style.zIndex = "0";
    this.style.border = "0px";

    this.style.boxShadow = "0px 0px 0px 0px transparent";

  }

  clickEffect() {

    this.style.zIndex = "1";
    this.style.color = "white";


  }

}

customElements.define('shadow-phone-bar', ShadowPhoneNavBar);


/* Subject Line Class */
/*

Creates Subject Line for the contact form.

*/
class SubjectLineComponent extends HTMLElement {

  constructor() {
    super();

    this.dumbyText = "Subject";

  }

  connectedCallback() {


    this.innerHTML = `<input></input>`;

    /* Start of input nodes section. */

    this.style.width = "100%";

    //  Sets the attribute for the type and the placeholder.
    this.childNodes[0].setAttribute("placeholder", "Subject");
    this.childNodes[0].setAttribute("type", "text");

    //  Width and height section;
    this.childNodes[0].style.width = "100%";
    //  Weird height if it is 'inherited'.  So stick with auto here.
    this.childNodes[0].style.height = "auto";

    //  Border section.
    this.childNodes[0].style.textDecoration = "none";
    this.childNodes[0].style.border = "none";
    this.childNodes[0].style.borderBottom = "5px solid slategrey";

    //  Font section.
    this.childNodes[0].style.fontSize = "2em";

    /* End of input nodes section. */

  }


}

customElements.define('subject-line', SubjectLineComponent);

/* Button Class Example */
class FeedbackAreaComponent extends HTMLElement {

  constructor() {
    super();

    this.dumbyText = "Feedback";

  }

  connectedCallback() {


    this.innerHTML = `<textarea></textarea>`;

    this.style.width = "100%";

    //  Sets the attribute for the type and the placeholder.
    this.childNodes[0].setAttribute("placeholder", "Feedback");
    this.childNodes[0].setAttribute("type", "text");

    //  Width and height section;
    this.childNodes[0].style.width = "100%";
    this.childNodes[0].style.height = "inherit";

    //  Border section.
    this.childNodes[0].style.textDecoration = "none";
    this.childNodes[0].style.border = "none";
    this.childNodes[0].style.borderBottom = "5px solid slategrey";

    //  Font section.
    this.childNodes[0].style.fontSize = "2em";


    /* End of input nodes section. */

  }


}

customElements.define('feedback-area', FeedbackAreaComponent);


/* ContactFormComponent Class */
class ContactFormComponent extends HTMLElement {


  constructor() {
    super();

    this.revealFormButton = new ShadowNavButton("SHOW CONTACT FORM", "#subject-line");

    this.subjectLine = new SubjectLineComponent();
    this.feedbackArea = new FeedbackAreaComponent();
    this.shadowButton = new ShadowButton("no-inverse");

    this.revealFormButton.connectedCallback();
    this.subjectLine.connectedCallback();
    this.feedbackArea.connectedCallback();
    this.shadowButton.connectedCallback();

  }

  connectedCallback() {

    this.innerHTML = `${this.revealFormButton.innerHTML}${this.subjectLine.innerHTML}${this.feedbackArea.innerHTML}${this.shadowButton.innerHTML}`;

    const reveal = this.childNodes[0];
    const subject = this.childNodes[1];
    const feedback = this.childNodes[2];
    const send = this.childNodes[3];

    this.style.display = "grid";
    this.style.width = "96%";
    this.style.margin = "auto";
    this.style.height = "auto";
    this.style.gridRowGap = "20px";
    this.style.textAlign = "right";
    this.style.paddingBottom = "2em";


    this.style.gridTemplateColumns = "1fr 2fr 1fr";

    this.style.gridTemplateRows = "auto auto auto auto";

    this.style.gridTemplateAreas = "'. reveal .''su su su' 'fe fe fe' '. . sh'";


    reveal.style.height = "10vh"
    reveal.style.color = "rgb(255, 255, 222)";
    reveal.style.backgroundColor = "rgb(0, 0, 0)";


    reveal.style.gridArea = "reveal";
    subject.style.gridArea = "su";
    feedback.style.gridArea = "fe";
    send.style.gridArea = "sh";

    //  Hides contact form.
    subject.style.visibility = "hidden";
    feedback.style.visibility = "hidden";
    send.style.visibility = "hidden";

    subject.style.display = "none";
    feedback.style.display = "none";
    send.style.display = "none";


    subject.className = "show-contact";
    feedback.className = "show-contact";
    send.className = "show-contact";

    // Jumps to subject id;
    subject.id = "subject-line";
    reveal.href = "#" + subject.id;

    send.textContent = "SEND";

    reveal.textContent = "SHOW CONTACT FORM";

    reveal.onclick = function() {

      if (document.getElementsByClassName("show-contact")[0].style.visibility == "visible") {

        document.getElementsByClassName("show-contact")[0].style.visibility = "hidden";
        document.getElementsByClassName("show-contact")[1].style.visibility = "hidden";
        document.getElementsByClassName("show-contact")[2].style.visibility = "hidden";

        document.getElementsByClassName("show-contact")[0].style.display = "none";
        document.getElementsByClassName("show-contact")[1].style.display = "none";
        document.getElementsByClassName("show-contact")[2].style.display = "none";

        document.getElementsByClassName("show-contact")[0].style.height = "0px";
        document.getElementsByClassName("show-contact")[1].style.height = "0px";
        document.getElementsByClassName("show-contact")[2].style.height = "0px";

        document.getElementsByClassName("show-contact")[0].focus();


      } else {

        document.getElementsByClassName("show-contact")[0].style.visibility = "visible";
        document.getElementsByClassName("show-contact")[1].style.visibility = "visible";
        document.getElementsByClassName("show-contact")[2].style.visibility = "visible";

        document.getElementsByClassName("show-contact")[0].style.display = "block";
        document.getElementsByClassName("show-contact")[1].style.display = "block";
        document.getElementsByClassName("show-contact")[2].style.display = "block";


        document.getElementsByClassName("show-contact")[0].style.height = "10vh";
        document.getElementsByClassName("show-contact")[1].style.height = "50vh";
        document.getElementsByClassName("show-contact")[2].style.height = "10vh";

      }
    }


    //  Events
    reveal.onmouseover = function() {

      this.style.zIndex = "1";
      this.style.color = "white";
      this.style.backgroundColor = "black";
      // this.style.border = "10px solid black";

      this.style.boxShadow = "0px 10px 0px 0px darkslategrey";


      // this.style.background = "radial-gradient(#CCCCCC, #AAABBB)";

    };

    reveal.onmouseout = function() {

      this.style.zIndex = "1";
      this.style.color = "white";
      this.style.backgroundColor = "black";
      // this.style.border = "10px solid black";

      this.style.boxShadow = "0px 0px 0px 0px transparent";


    };
    send.onmouseover = function() {

      this.style.color = "slategrey";
      this.style.fontWeight = "bold";
      this.style.backgroundColor = "black";
      this.style.border = "none";
      this.style.borderRadius = "00px";
      this.style.fontSize = "2em";

      // this.style.background = "radial-gradient(#CCCCCC, #AAABBB)";

    };
    send.onmouseout = function() {

      this.style.backgroundColor = "slategrey";
      this.style.border = "none";
      this.style.color = "#000000";
      this.style.borderRadius = "0px";
      this.style.fontWeight = "bold";
      this.style.fontSize = "2em";


    };


  }



}

customElements.define('contact-form', ContactFormComponent);

// Holds main sections of the first page Pro;
class TwoParterComponent extends HTMLElement {
  /*

  The first part is a picture that has a link this passed in through the constructor.
  Then the right side isn the content.

  */
  constructor(pictureLink, headerText, infoText) {

    super();
    this.picture = pictureLink ? pictureLink : "/";
    this.headerInfo = headerText ? headerText : "Text";
    this.textInfo = infoText ? infoText : "Text";

  }

  connectedCallback() {


    this.innerHTML = `<section><img src=${this.picture}></img><section><h1>${this.headerInfo}</h1><p>${this.textInfo}</p></section></section>`

    let holdTwoParts = this.childNodes[0];
    let pictureSection = holdTwoParts.childNodes[0];
    let infoSection = holdTwoParts.childNodes[1];

    // this.style.width = "100%";
    // this.style.height = "75%";
    //
    // this.style.display = "grid";
    //
    // this.style.gridTemplateColumns = "1fr";

    this.style.width = "100%";
    this.style.height = "100%";


    holdTwoParts.style.width = "100%";
    holdTwoParts.style.height = "inherit";

    holdTwoParts.style.display = "grid";

    holdTwoParts.style.gridTemplateColumns = "repeat(auto-fit, minmax(400px, 1fr))";

    pictureSection.style.width = "100%";
    pictureSection.style.height = "inherit";

    infoSection.style.width = "100%";
    infoSection.style.height = "inherit";

    infoSection.style.textAlign = "center";
    infoSection.style.fontFamily = "Verdana";
    infoSection.style.fontSize = "25px";

    infoSection.childNodes[0].style.color = "black";
    infoSection.childNodes[1].style.color = "black";


    infoSection.className = "expand-info";

    infoSection.style.backgroundColor = "slategrey";

  }

}
customElements.define('two-parter', TwoParterComponent);

/*

Creates Main section which hold the Two Parters.

*/
class MainSectionComponent extends HTMLElement {

  constructor() {

    super();

    this.firstSection = new TwoParterComponent("https://static1.squarespace.com/static/5a1cc36acf81e02d03ca8521/t/5be5a17d4fa51a10ca9f5f90/1541775757677/Plan2Code_Logo_Nov_18?format=1000w", "Our Mission", "Our mission is to holistically approach the study of computer science and to treat it as a subset of sociology by studying its effects on society as a whole and creating guidelines for how we must code in the future.");
    this.secondSection = new TwoParterComponent("https://static1.squarespace.com/static/5a1cc36acf81e02d03ca8521/t/5be5a17d4fa51a10ca9f5f90/1541775757677/Plan2Code_Logo_Nov_18?format=1000w", "Vlogs", "We vlog about how computer science affects the world around us." );
    this.thirdSection = new TwoParterComponent("https://static1.squarespace.com/static/5a1cc36acf81e02d03ca8521/t/5be5a17d4fa51a10ca9f5f90/1541775757677/Plan2Code_Logo_Nov_18?format=1000w", "Collectibles", "We collect images to inspire us." );

    this.firstSection.connectedCallback();
    this.secondSection.connectedCallback();
    this.thirdSection.connectedCallback();


  }

  connectedCallback() {

    this.innerHTML = `<section>${this.firstSection.innerHTML}${this.secondSection.innerHTML}${this.thirdSection.innerHTML}</section>`;

    this.className = "main-section";

    this.style.width = "100%";
    this.style.height = "auto";
    this.style.marginBottom = "2em";

    this.style.display = "block";

    this.style.gridRowGap = "0px";
    this.style.zIndex = "0";


  }

}
customElements.define('main-section', MainSectionComponent);

/*

Creates body of the html document.

*/
class ShadowBody extends HTMLElement {

  constructor() {

    super();


  }

  connectedCallback() {

    this.style.width = "100vw";
    this.style.height = "100vh";
    this.style.position = "relative";
    this.style.overflowX = "hidden";

    this.style.display = "grid";

    this.style.gridRowGap = "0px";

    document.body.style.margin = "0px";

    document.body.style.width = "100vw";
    document.body.style.height = "100vh";
    document.body.style.overflowX = "auto";


    this.beforeload = function() {

      this.style.visibility = "hidden";

    }

    this.onload = function() {

      this.style.visibility = "visible";


    }

    window.onscroll = function() {

      console.log(`Scroll y: ${this.scrollY}`);
      console.log(`Height of navagation: ${document.getElementsByClassName("mobile-nav-bar")[0].offsetHeight}`);

      console.log(`Difference in position: ${this.scrollY - document.getElementsByClassName("mobile-nav-bar")[0].offsetHeight}`);

      if (this.innerWidth < 800) {

        document.getElementsByClassName("mobile-nav-bar")[0].style.visibility = "visible";
        document.getElementsByClassName("regular-nav")[0].style.visibility = "hidden";

        document.getElementsByClassName("mobile-nav-bar")[0].style.display = "block";

        document.getElementsByClassName("regular-nav")[0].style.display = "none";


      } else {

        document.getElementsByClassName("mobile-nav-bar")[0].style.visibility = "hidden";
        document.getElementsByClassName("regular-nav")[0].style.visibility = "visible";

        document.getElementsByClassName("mobile-nav-bar")[0].style.display = "none";
        document.getElementsByClassName("regular-nav")[0].style.display = "grid";

      }


    }

    window.onload = function() {

      if (this.innerWidth < 800) {

        document.getElementsByClassName("mobile-nav-bar")[0].style.visibility = "visible";
        document.getElementsByClassName("regular-nav")[0].style.visibility = "hidden";

        document.getElementsByClassName("mobile-nav-bar")[0].style.display = "block";

        document.getElementsByClassName("regular-nav")[0].style.display = "none";


      } else {

        document.getElementsByClassName("mobile-nav-bar")[0].style.visibility = "hidden";
        document.getElementsByClassName("regular-nav")[0].style.visibility = "visible";

        document.getElementsByClassName("mobile-nav-bar")[0].style.display = "none";
        document.getElementsByClassName("regular-nav")[0].style.display = "grid";

      }

      console.log(this.innerWidth);

      if (this.innerWidth < 800) {

        document.getElementsByClassName("expand-info")[0].style.height = "50vh";
        document.getElementsByClassName("expand-info")[1].style.height = "50vh";
        document.getElementsByClassName("expand-info")[2].style.height = "50vh";

        document.getElementsByClassName("expand-info")[0].style.backgroundColor = "slategrey";
        document.getElementsByClassName("expand-info")[1].style.backgroundColor = "darkslategrey";
        document.getElementsByClassName("expand-info")[2].style.backgroundColor = "slategrey";

      } else {

        document.getElementsByClassName("expand-info")[0].style.height = "inherit";
        document.getElementsByClassName("expand-info")[1].style.height = "inherit";
        document.getElementsByClassName("expand-info")[2].style.height = "inherit";

        document.getElementsByClassName("expand-info")[0].style.backgroundColor = "slategrey";
        document.getElementsByClassName("expand-info")[1].style.backgroundColor = "darkslategrey";
        document.getElementsByClassName("expand-info")[2].style.backgroundColor = "slategrey";


      }

    }


    window.onresize = function() {

      if (this.innerWidth < 800) {

        document.getElementsByClassName("mobile-nav-bar")[0].style.visibility = "visible";
        document.getElementsByClassName("regular-nav")[0].style.visibility = "hidden";

        document.getElementsByClassName("mobile-nav-bar")[0].style.display = "block";

        document.getElementsByClassName("regular-nav")[0].style.display = "none";


      } else {

        document.getElementsByClassName("mobile-nav-bar")[0].style.visibility = "hidden";
        document.getElementsByClassName("regular-nav")[0].style.visibility = "visible";

        document.getElementsByClassName("mobile-nav-bar")[0].style.display = "none";
        document.getElementsByClassName("regular-nav")[0].style.display = "grid";

        document.getElementsByClassName("hidden-phone-menu")[0].style.visibility = "hidden";
        document.getElementsByClassName("hidden-phone-menu")[0].style.display = "none";

      }

      console.log(this.innerWidth);

      if (this.innerWidth < 800) {

        document.getElementsByClassName("expand-info")[0].style.height = "50vh";
        document.getElementsByClassName("expand-info")[1].style.height = "50vh";
        document.getElementsByClassName("expand-info")[2].style.height = "50vh";

        document.getElementsByClassName("expand-info")[0].style.backgroundColor = "slategrey";
        document.getElementsByClassName("expand-info")[1].style.backgroundColor = "darkslategrey";
        document.getElementsByClassName("expand-info")[2].style.backgroundColor = "slategrey";

      } else {

        document.getElementsByClassName("expand-info")[0].style.height = "inherit";
        document.getElementsByClassName("expand-info")[1].style.height = "inherit";
        document.getElementsByClassName("expand-info")[2].style.height = "inherit";

        document.getElementsByClassName("expand-info")[0].style.backgroundColor = "slategrey";
        document.getElementsByClassName("expand-info")[1].style.backgroundColor = "darkslategrey";
        document.getElementsByClassName("expand-info")[2].style.backgroundColor = "slategrey";


      }

    }

  }

}

customElements.define('shadow-body', ShadowBody);

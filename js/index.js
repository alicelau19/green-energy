// references to active HTML elements
const resources = {
  btns: document.querySelectorAll(".controls button"),
  dc: document.querySelector(".dynamic-content"),
  title: document.querySelector(".content-title"),
  image: document.querySelector(".content-image"),
  detail: document.querySelector(".content-detail"),
};

let navItems = document.querySelectorAll("main div button");
// console.log(navItems);

function handleButton(ev) {
  // stop directing user to the location specified in the href of link
  ev.preventDefault();

  // find the reference to the clicked item
  let activeItem = ev.target;

  // loop through node-list of items and remove id active wherever it happens to be:
  for (let item of navItems) {
    if (item.id) {
      item.removeAttribute("id");
    }
  }

  // add attribute id acive to the clicked item
  activeItem.id = "active";
}

// register nav-items for click event.
for (let item of navItems) {
  item.addEventListener("click", handleButton);
}

// database:
const contents = {
  c1: {
    heading: "Community Solar",
    bodyText:
      "A community solar project, or solar garden, is a collection of solar panels whose energy is shared by multiple houses. The solar garden would power each home’s water, heat and electricity while the entire community would split the lower energy costs.",
    imageUrl: "./img/community-solar.jpg",
    imageAlt: "Picture of Solar Panel",
  },
  c2: {
    heading: "Tax Credit",
    bodyText:
      "Providing tax credits to those who invest in and produce renewable energy sources would generate a willingness to transition to energy efficient resources like solar and wind power.",
    imageUrl: "./img/tax-money.jpg",
    imageAlt: "Picture of Money",
  },
  c3: {
    heading: "Federal Assistance Funds",
    bodyText:
      "Many governments assist lower-income communities and organizations with funds already. Now, they’re investing in renewable energy sources and energy efficient systems to bring lower energy costs and increased public welfare.",
    imageUrl: "./img/federal-funds.jpg",
    imageAlt: "Picture of Money Symbols",
  },
};

// loading initial content (on the page load)
resources.title.innerHTML = `${contents.c1.heading}`;
resources.image.src = `${contents.c1.imageUrl}`;
resources.detail.innerHTML = `${contents.c1.bodyText}`;

// updatting content based on the button click
let handleClick = (e) => {
  // fetch the reference to the current button
  let currentButton = e.target;

  // extract the value of data-attribute
  let currentContent = currentButton.dataset.btn;

  // update the content
  resources.title.innerHTML = `${contents[currentContent].heading}`;
  resources.image.src = `${contents[currentContent].imageUrl}`;
  resources.detail.innerHTML = `${contents[currentContent].bodyText}`;
};

// register all 3 buttons for click event
for (let btn of resources.btns) {
  btn.addEventListener("click", handleClick);
}

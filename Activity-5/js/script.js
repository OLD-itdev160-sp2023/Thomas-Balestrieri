const data = [
  {
    name: "Path Intellisense",
    description:
      "The Path Intellisense extension helps to autocomplete filenames. Super useful when writing out paths in markup, or in any file that has path references.",
    author: "Christian Kohler",
    url: "https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense",
    downloads: 9340192,
    stars: 5,
    price: "Free",
    selector: "p1",
  },
  {
    name: "IntelliSense for CSS class names",
    description:
      "The IntelliSense for CSS class names extension helps to autocomplete class names for the HTML class attribute by looking at the CSS class definitions in your workspace, and external files referenced through the link element.",
    author: "Zignd",
    url: "https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion",
    downloads: 5872076,
    stars: 3.5,
    price: "Free",
    selector: "p2",
  },
  {
    name: "CSS Peek",
    description:
      "CSS Peak extends HTML and Embedded JavaScript templates with Go To Definition support for CSS classes and IDs found in your markup.",
    author: "Pranay Prakash",
    url: "https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek",
    downloads: 4022833,
    stars: 3.5,
    price: "Free",
    selector: "p3",
  },
];

function Package(data) {
  this.name = data.name;
  this.description = data.description;
  this.author = data.author;
  this.url = data.url;
  this.downloads = data.downloads;
  this.stars = data.stars;
  this.selector = data.selector;

  this.getFormattedDownloads = function () {
    return this.downloads.toLocaleString();
  };
  this.getFormattedStars = function () {
    return this.stars.toLocaleString();
  };
}

var getTodaysDate = function () {
  var today = new Date();
  return today.toDateString();
};

var getEL = function (id) {
  return document.getElementById(id);
};

const writePackageInfo = function (data) {
  const package = new Package(data);
  console.log(package.selector);
  var id = package.selector,
    nameEl = getEL(id + "-name"),
    descEl = getEL(id + "-description"),
    authEl = getEL(id + "-author"),
    downloadedEl = getEL(id + "-downloads"),
    starsEl = getEL(id + "-stars");

  nameEl.textContent = data.name;
  descEl.textContent = data.description;
  authEl.textContent = data.author;
  downloadedEl.textContent = package.getFormattedDownloads();
  starsEl.textContent = package.getFormattedStars();
};

for (var i = 0; i < data.length; i++) {
  writePackageInfo(data[i]);
}

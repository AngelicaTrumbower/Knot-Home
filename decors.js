let decors;

async function renderDecors(filter) {
  const decorsWrapper = document.querySelector(".explore__decor");

  decorsWrapper.classList += ' decors__loading'

  if (!decors) {
    decors = await getDecors();
  }

  decorsWrapper.classList.remove('decors__loading')

  if (filter === "LOW_TO_HIGH") {
    decors.sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice));
    }
  else if (filter === "HIGH_TO_LOW") {
    decors.sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice));
  }
  else if (filter === "RATING") {
    decors.sort((a, b) => b.rating - a.rating);
  }
    
  const decorsHtml = decors
    .map((decor) => {
      return `<div class="decor">
    <figure class="decor__img__wrapper">
      <img class="decor__img" src="${decor.url}" alt="">
    </figure>
    <div class="decor__title">
      ${decor.title}
    </div>
    <div class="decor__ratings">
      ${ratingHTML(decor.rating)}
    </div>
    <div class="decor__price">
      ${priceHTML(decor.originalPrice, decor.salePrice)}
    </div>
  </div>`;
      })
      .join("");
  
  decorsWrapper.innerHTML = decorsHtml;  
}
 
function priceHTML(originalPrice, salePrice) {
  if (!salePrice) {
    return `$${originalPrice.toFixed(2)}`;
  }
  return `<span class="decor__price--normal">$${originalPrice.toFixed(
    2
  )}</span>$${salePrice.toFixed(2)}`;
}

function ratingHTML(rating) {
  let ratingHTML = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    ratingHTML += '<i class="fas fa-star"></i>\n'
  }
  if (!Number.isInteger(rating)) {
    ratingHTML += '<i class="fas fa-star-half-alt"></i>\n'
  }
   return ratingHTML;
}
  
  
function filterDecors(event) {
   renderDecors(event.target.value);
};
  
setTimeout(() => {
   renderDecors();
});
  
function getDecors() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Bohemian Macrame Wall Hanging Wood Shelf",
          url: "Macrame/shelf.jpg",
          originalPrice: 49.95,
          salePrice: 18.95,
          rating: 4.5,
        },
        {
          id: 2,
          title: "Boho Tie-Dye Wall Decor",
          url: "Macrame/large wall hanging.jpg",
          originalPrice: 39,
          salePrice: null,
          rating: 5,
        },
        {
          id: 3,
          title: "Bohemian Photo Display with Lights and Tassels",
          url: "Macrame/picture frame.jpg",
          originalPrice: 29,
          salePrice: 19.95,
          rating: 5,
        },
        {
          id: 4,
          title: "Tree of Life Wall Decor",
          url: "Macrame/tree of life wall hang.jpg",
          originalPrice: 54,
          salePrice: 34.95,
          rating: 4.5,
        },
        {
          id: 5,
          title: "Rustic Chic Nature Leaves Hanging Display",
          url: "Macrame/LEAVES.jpg",
          originalPrice: 40,
          salePrice: 19.95,
          rating: 4,
        },
        {
          id: 6,
          title: "Boho Chic Wooden Disc and Leaf Wall Art with Tassels",
          url: "Macrame/wood circles wall hang.jpg",
          originalPrice: 30,
          salePrice: 15.5,
          rating: 5,
        },
        {
          id: 7,
          title: "Macrame Keychain Wristlet",
          url: "Macrame/wristlet.jpg",
          originalPrice: 11,
          salePrice: 10,
          rating: 4,
        },
        {
          id: 8,
          title: "Dream Catcher Moon Wall Decor",
          url: "Macrame/dream catcher moon.jpg",
          originalPrice: 38,
          salePrice: 25.95,
          rating: 4.5,
        },
        {
          id: 9,
          title: "Bohemian Leaf Pattern Curtain",
          url: "Macrame/curtains.jpg",
          originalPrice: 24.95,
          salePrice: null,
          rating: 3.7,
        },
        {
          id: 10,
          title: "Mountain Wall Hanging Taspestry",
          url: "Macrame/mountain wall hanging.jpg",
          originalPrice: 40,
          salePrice: null,
          rating: 4,
        },
        {
          id: 11,
          title: "Bohemian Accent Leaf Wall Decor",
          url: "Macrame/leaves with backdrop.jpg",
          originalPrice: 27.95,
          salePrice: null,
          rating: 4.5,
        },
        {
          id: 12,
          title: "Boho Chic Macrame Plant Holder Trio",
          url: "Macrame/plant holders.jpg",
          originalPrice: 59.95,
          salePrice: 19.95,
          rating: 4.2,
        },
      ]);
    }, 1000);
  });
}
  
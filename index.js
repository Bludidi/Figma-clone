// Items to display on the screen
const items = [
  {
    name: 'REST IN NATURE T-SHIRT CHARCOAL',
    stars: './assets/images/star.png',
    reviews: '1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_1.jpg',
    image_2: './assets/images/secondary_image.jpg',
  },
  {
    name: 'OUTSIDE VIBES T-SHIRT SUNSHINE',
    stars: './assets/images/star.png',
    reviews: '1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_2.jpg',
    image_2: './assets/images/secondary_image.jpg',  },
  {
    name: 'HIKE BOTTLE OUTSIDE VIBES FOREST GREEN',
    stars: './assets/images/star.png',
    reviews: '1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_3.jpg',
    image_2: './assets/images/secondary_image.jpg',  },
  {
    name: 'OUTSIDE VIBES CAP FOREST GREEN',
    stars: './assets/images/star.png',
    reviews: '1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_4.jpg',
    image_2: './assets/images/secondary_image.jpg',  },
  {
    name: 'REST IN NATURE T-SHIRT CHARCOAL',
    stars: './assets/images/star.png',
    reviews: '1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_5.jpg',
    image_2: './assets/images/secondary_image.jpg',  },
  {
    name: 'REST IN NATURE T-SHIRT CHARCOAL',
    stars: './assets/images/star.png',
    reviews: '1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_6.jpg',
    image_2: './assets/images/secondary_image.jpg',  },
  {
    name: 'OUTSIDE VIBES T-SHIRT SUNSHINE',
    stars: './assets/images/star.png',
    reviews: '1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_1.jpg',
    image_2: './assets/images/secondary_image.jpg',  },
  {
    name: 'HIKE BOTTLE OUTSIDE VIBES FOREST GREEN',
    stars: './assets/images/star.png',
    reviews: '1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_2.jpg',
    image_2: './assets/images/secondary_image.jpg',  },
  {
    name: 'OUTSIDE VIBES CAP FOREST GREEN',
    stars: './assets/images/star.png',
    reviews: '1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_3.jpg',
    image_2: './assets/images/secondary_image.jpg',  },
  {
    name: 'REST IN NATURE T-SHIRT CHARCOAL',
    stars: './assets/images/star.png',
    reviews: '1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_4.jpg',
    image_2: './assets/images/secondary_image.jpg',  },
];
// Populate item cards with data
const itemCards = items.map(
  (item) => `<div class="sm:w-cardWidth sm:h-cardHeight w-mobCardWidth group">
  <ul class="">
    <li>
      <div class="w-mobCardWidth h-mobCardHeight sm:w-cardWidth sm:h-imageHeight sm:mb-4 mb-2 relative group">
        <img src="${item.image}" class="w-mobCardWidth h-mobCardHeight sm:w-cardWidth sm:h-imageHeight rounded-imageRadius transition-opacity duration-300 group-hover:opacity-0" alt="${item.name}">
        <img src="${item.image_2}" class="w-mobCardWidth h-mobCardHeight sm:w-cardWidth sm:h-imageHeight rounded-imageRadius absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="${item.name}">
      </div>
    </li>
    <li><div class="w-mobCardWidth sm:w-cardWidth py-mobNameYPad px-mobNameXPad sm:px-nameXPad font-bebas font-400 text-mobName sm:text-name whitespace-normal">${item.name}</div></li>
    <li><div class="flex py-mobNameYPad px-mobNameXPad sm:px-nameXPad font-poppins font-400 text-grey text-mobReview sm:text-review"><div class="flex my-auto"><img src="${item.stars}" class="w-starWidth h-starHeight"><img src="${item.stars}" class="w-starWidth h-starHeight"><img src="${item.stars}" class="w-starWidth h-starHeight"><img src="${item.stars}" class="w-starWidth h-starHeight"><img src="${item.stars}" class="w-starWidth h-starHeight"></div>&nbsp;<div>${item.reviews}</div></div></li>
    <li><div class="py-mobNameYPad px-mobNameXPad sm:px-nameXPad font-poppins font-500 text-price text-semiBlack">${item.price}</div></li>
  </ul>
</div>`
);

const content = document.querySelector('#content');
const parser = new DOMParser();
itemCards.forEach((itemCard) => {
  const itemIndex = parser.parseFromString(itemCard, 'text/html').body
    .firstChild;
  content.append(itemIndex);
});

// Create grid display for mobile devices and logic for show more button
const cardContainer = document.getElementById('cardContainer');
const viewMoreBtn = document.getElementById('viewMoreBtn');

const productCards = (container, startIndex, endIndex) => {
  for (let i = startIndex; i < endIndex; i++) {
    const itemCard = itemCards[i];
    const itemIndex = parser.parseFromString(itemCard, 'text/html').body
      .firstChild;
    container.appendChild(itemIndex);
  }
};
productCards(cardContainer, 0, 4);

// Handle "Show more" button
let visibleCards = 4;
viewMoreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const totalCards = itemCards.length;
  const remainingCards = totalCards - visibleCards;

  //Show remaining cards
  if (remainingCards > 0) {
    const cardsToAdd = Math.min(remainingCards, 6);
    productCards(cardContainer, visibleCards, visibleCards + cardsToAdd);
    visibleCards += cardsToAdd;

    //Hide "Show more" button when all cards are displayed
    if (visibleCards === totalCards) {
      viewMoreBtn.classList.add('hidden');
    }
  }
});


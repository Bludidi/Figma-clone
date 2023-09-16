const items = [
  {
    name: 'REST IN NATURE T-SHIRT CHARCOAL',
    reviews: '♥♥♥♥♥ 1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_1.jpg',
  },
  {
    name: 'OUTSIDE VIBES T-SHIRT SUNSHINE',
    reviews: '♥♥♥♥♥ 1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_2.jpg',
  },
  {
    name: 'HIKE BOTTLE OUTSIDE VIBES FOREST GREEN',
    reviews: '♥♥♥♥♥ 1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_3.jpg',
  },
  {
    name: 'OUTSIDE VIBES CAP FOREST GREEN',
    reviews: '♥♥♥♥♥ 1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_4.jpg',
  },
  {
    name: 'REST IN NATURE T-SHIRT CHARCOAL',
    reviews: '♥♥♥♥♥ 1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_5.jpg',
  },
  {
    name: 'REST IN NATURE T-SHIRT CHARCOAL',
    reviews: '♥♥♥♥♥ 1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_6.jpg',
  },
  {
    name: 'OUTSIDE VIBES T-SHIRT SUNSHINE',
    reviews: '♥♥♥♥♥ 1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_1.jpg',
  },
  {
    name: 'HIKE BOTTLE OUTSIDE VIBES FOREST GREEN',
    reviews: '♥♥♥♥♥ 1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_2.jpg',
  },
  {
    name: 'OUTSIDE VIBES CAP FOREST GREEN',
    reviews: '♥♥♥♥♥ 1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_3.jpg',
  },
  {
    name: 'REST IN NATURE T-SHIRT CHARCOAL',
    reviews: '♥♥♥♥♥ 1234 Reviews',
    price: '$104.95',
    image: './assets/images/image_4.jpg',
  },
];

const itemCards = items.map((item) => `
  <div class="w-cardWidth h-cardHeight">
    <ul class="">
      <li><div class="w-cardWidth h-imageHeight"><img src="${item.image}" class="w-cardWidth h-imageHeight rounded-imageRadius" ></div></li>
      <li>${item.name}</li>
      <li>${item.reviews}</li>
      <li>${item.price}</li>
    </ul>
  </div>
`);

const content = document.querySelector('#content');
const parser = new DOMParser();
itemCards.forEach((itemCard) => {
  const itemIndex = parser.parseFromString(itemCard, 'text/html').body.firstChild;
  content.append(itemIndex);
});
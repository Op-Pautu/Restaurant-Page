export default function createHomepage() {
  const content = document.getElementById('content');

  // Create an image element
  const img = document.createElement('img');
  img.src = 'path/to/image.jpg';
  img.alt = 'Restaurant Image';
  content.appendChild(img);

  // Create a headline element
  const headline = document.createElement('h1');
  headline.innerHTML = 'Welcome to Our Restaurant';
  content.appendChild(headline);

  // Create some copy about the restaurant
  const copy = document.createElement('p');
  copy.innerHTML =
    'Our restaurant is a wonderful place to enjoy delicious food and great company. We offer a wide variety of dishes to suit all tastes, and our friendly staff are always on hand to help you make the most of your visit.';
  content.appendChild(copy);
}

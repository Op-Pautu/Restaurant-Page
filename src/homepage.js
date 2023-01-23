import restaurantImage from './assets/restaurant-image.jpg';
export function createHomepage() {
  const contentDiv = document.getElementById('content');
  //Remove any DOM existing children if present
  contentDiv.replaceChildren();

  // Create a headline element
  const headline = document.createElement('h1');
  headline.textContent = "Welcome to Op's Restaurant";
  headline.classList.add('landing-title');
  contentDiv.appendChild(headline);

  // DOM for landing page top image
  const topImage = document.createElement('img');
  topImage.classList.add('image');
  topImage.src = restaurantImage;
  topImage.alt = 'Image of Restaurant';
  contentDiv.appendChild(topImage);

  // DOM for p tag #1
  const para1 = document.createElement('p');
  para1.classList.add('landing-page-copy');
  para1.textContent =
    'This is an upscale restaurant that touts its elegance and spacious dining/lounge area.';
  contentDiv.appendChild(para1);

  // DOM for p tag #2
  const para2 = document.createElement('p');
  para2.classList.add('landing-page-copy');
  para2.textContent =
    'Attire required for this facility is business casual at a minimum, please!';
  contentDiv.appendChild(para2);

  // DOM for p tag #3
  const para3 = document.createElement('p');
  para3.classList.add('landing-page-copy');
  para3.textContent = 'Thanks, Management';
  contentDiv.appendChild(para3);
}

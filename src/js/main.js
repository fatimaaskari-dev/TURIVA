import { renderHeader } from "./header.js";
import { initHeroSlider } from "./heroSlider.js";
import { renderDestinations } from "./popularDestinations.js";
import { renderPlaces } from "./places.js";
import { renderReviews } from "./reviews.js";
import { renderGallery } from "./gallery.js";
import { setupAboutSlider } from "./about.js";
import { setupNewsletter } from "./newsLetter.js";
import { setupContactForm } from "./contact.js";


renderHeader();
initHeroSlider();
renderDestinations();
renderPlaces();
renderReviews();
renderGallery();
setupAboutSlider();
setupNewsletter();
setupContactForm();

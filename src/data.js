import specialMenuImg1 from "./assets/greek salad.jpg";
import specialMenuImg2 from "./assets/bruchetta.svg";
import specialMenuImg3 from "./assets/lemon dessert.jpg";

export const pageLinks = [
  { id: 1, href: "/", text: "Home" },
  // { id: 2, href: "/about", text: "About" },
  { id: 3, href: "/menu", text: "Menu" },
  { id: 4, href: "/reservations", text: "Reservations" },
  { id: 5, href: "/order_online", text: "Order Online" },
];
export const socialLinks = [
  { id: 1, href: "www.facebook.com", text: "Facebook" },
  { id: 2, href: "www.twitter.com", text: "Twitter" },
  { id: 3, href: "www.instagram.com", text: "Instagram" },
];

export const specialMenu = [
  {
    id: 1,
    img: specialMenuImg1,
    title: "Greek Salad",
    price: "12.99",
    content:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    href: "#",
  },
  {
    id: 2,
    img: specialMenuImg2,
    title: "Bruschetta",
    price: "5.99",
    content:
      "Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    href: "#",
  },
  {
    id: 3,
    img: specialMenuImg3,
    title: "Lemon Desert",
    price: "5.00",
    content:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    href: "#",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Bertie Yates",
    image: "https://www.course-api.com/images/people/person-1.jpeg",
    rating: "5",
    review:
      "Delicious food, friendly service, and a cozy atmosphere. The lasagna was a perfect comfort meal, and the tiramisu was heavenly. Can't wait to return!",
  },
  {
    id: 2,
    name: "Hester Hogan",
    image: "https://www.course-api.com/images/people/person-2.jpeg",
    rating: "4.5",
    review:
      "Great tacos! The al pastor was particularly flavorful, with juicy meat and perfectly crispy skin. The guacamole was fresh and tangy. Would definitely recommend",
  },
  {
    id: 3,
    name: "Larry Little",
    image: "https://www.course-api.com/images/people/person-3.jpeg",
    rating: "4.7",
    review:
      "Excellent sushi experience. The sashimi was incredibly fresh, and the rolls were beautifully crafted. The spicy tuna roll had a great kick, and the atmosphere was elegant and sophisticated. A true gem!",
  },
  {
    id: 4,
    name: "Sean Walsh",
    image: "https://www.course-api.com/images/people/person-4.jpeg",
    rating: "4.7",
    review:
      "Excellent experience. The rolls were beautifully crafted. Great place great experience!",
  },
];

export const availableTimes = [
  { id: 1, time: "17:00" },
  { id: 2, time: "18:00" },
  { id: 3, time: "19:00" },
  { id: 4, time: "20:00" },
  { id: 5, time: "21:00" },
];

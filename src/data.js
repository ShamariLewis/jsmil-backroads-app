import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  {
    id: 1,
    href: "https://www.squarespace.com.com",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: "August 26th, 2020",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitaetemporevoluptatum maxime reprehenderit eumquod exercitationemfugit,quicorporis.",
    place: "china",
    duration: "6 days",
    cost: "from 2100",
  },
  {
    id: 2,
    img: tour2,
    date: "October 11th, 2020",
    title: "Best of Java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitaetemporevoluptatum maxime reprehenderit eumquod exercitationemfugit,quicorporis.",
    place: "indonesia",
    duration: "11 days",
    cost: "from 1400",
  },
  {
    id: 3,
    img: tour3,
    date: "September 15th, 2020",
    title: "Explore Hong Kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitaetemporevoluptatum maxime reprehenderit eumquod exercitationemfugit,quicorporis.",
    place: "hong kong",
    duration: "8 days",
    cost: "from 5000",
  },
  {
    id: 4,
    img: tour4,
    date: "December 5th, 2019",
    title: "Kenya Highlights",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitaetemporevoluptatum maxime reprehenderit eumquod exercitationemfugit,quicorporis.",
    place: "kenya",
    duration: "20 days",
    cost: "from 3300",
  },
];

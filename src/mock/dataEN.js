import whatsapp from "../icon/whatsapp.svg";
import instagram from "../icon/instagram.svg";
import phone from "../icon/phone.svg";

let Data = {
  name: "Sweet Wonders",
  description:
    "ICE CREAMS, SORBETS, CREAM PUFFS, CHOCOLATES, 100% HOMEMADE",
  story:
    "Mickaela, pastry-chocolate maker, founded Sweet Wonders to offer you the best of her know-how, through her 100% homemade products. With an exceptional experience in pastry and chocolate making, she brings unique quality products to your taste buds. Do not hesitate to discover them.",
 
    home: "Home",

    saltyMenu: "Salty Menu",
    trayName: "Tray",
    pastaName: "Pasta",
    pizzaName: "Pizza",
  
    sweetMenu: "Sweet Menu",
    icecreamName: "Ice Cream",
    sorbeNamet: "Sorbet",
    specialityName: "Speciality",
    eventName: "Events",
  
    gallery: "Gallery",
  
    contact: "Contact",
    contactus:"Contact Us",
    nameForm: "Name",
    emailForm: "Email",
    phoneForm: "Phone",
    eventForm: "Which event do you planning ?",
    breakfast: "Breakfast",
    birthday:"Birthday",
    engagement: "Engagement",
    other: "Other",
    message: "Message",
    submit: "Submit",
  
    socialLinks: [
    {
      name: "whatsapp",
      text: "Contact us directly with Whatsapp !",
      url: "https://api.whatsapp.com/send?phone=972526450395",
      icon: whatsapp,
    },
    {
      name: "instagram",
      text:"Join us on Intagram !",
      url: "https://www.instagram.com/Mickaela_patisserie/",
      icon: instagram,
    },
    {
      name: "phone",
      text:"Make your order with me on the phone !",
      url: "tel:+972526450395",
      icon: phone,
    },
  ],

  icecream: [
    {
      product: "Milk chocolate",
      quantity: "1 litre",
      price: "70₪",
    },
    {
      product: "Black chocolate",
      quantity: "1 litre",
      price: "70₪",
    },
    {
      product: "Madagascar vanilla",
      quantity: "1 litre",
      price: "70₪",
    },
  ],

  sorbet: [
    {
      product: "Strawberry",
      quantity: "1 litre",
      price: "70₪",
    },
    {
      product: "Raspberry",
      quantity: "1 litre",
      price: "70₪",
    },
    {
      product: "Blood peach",
      quantity: "1 litre",
      price: "70₪",
    },
    {
      product: "Lemon",
      quantity: "1 litre",
      price: "70₪",
    },
    {
      product: "Guava",
      quantity: "1 litre",
      price: "70₪",
    },
    {
      product: "Mango",
      quantity: "1 litre",
      price: "70₪",
    },
  ],

  speciality: [
    {
      product: "Rocher suchard",
      quantity: "1 litre",
      price: "90₪",
    },
    {
      product: "Pistachio",
      quantity: "1 litre",
      price: "90₪",
    },
  ],

  event: [
    {
      product: "Basket of cream puffs",
      quantity: "30 pieces (10 personnes)",
      price: "200₪",
    },
    {
      product: "Ballotins de chocolat:",
      quantity: "",
      price: "",
    },
  ],

  tray: [
    {
      product: "Mini Pizza",
      quantity: "40 pieces",
      price: "120₪",
    },
    {
      product: "Mini Tuna-Mayo Buns",
      quantity: "30 pieces",
      price: "120₪",
    },
    {
      product: "Mini Salmon Buns",
      quantity: "30 pieces",
      price: "120₪",
    },
    {
      product: "Salmon Club Sandwich",
      quantity: "30 pieces",
      price: "130₪",
    },
    {
      product: "Tuna Club Sandwich",
      quantity: "30 pieces",
      price: "130₪",
    },
    {
      product: "Mini Quiche",
      quantity: "30 pieces",
      price: "130₪",
    },
    {
      product: "Mini Thai Marinated Salmon Skewer",
      quantity: "12 pieces",
      price: "84₪",
    },
  ],

  pasta: [
    {
      product: "Fresh salmon and wine cream",
      price: "62₪",
    },
    {
      product: "Cream and pan-fried mushrooms with garlic",
      price: "55₪",
    },
    {
      product: "Basil, pine nut and parmesan pesto cream",
      price: "58₪",
    },
    {
      product: "Truffle cream",
      price: "62₪",
    },
    {
      product: "Sweet potato, onion and Provence herb cream",
      price: "50₪",
    },
  ],

  pizza: [
    {
      product: "Smoked salmon, cream and cheese",
      price: "62₪",
    },
    {
      product: "Goat cheese and honey",
      price: "62₪",
    },
    {
      product: "4 cheeses",
      price: "65₪",
    },
    {
      product: "Margarita",
      price: "40₪",
    },
    {
      product: "Pissaladière",
      price: "40₪",
    },
  ],
};
export default Data;

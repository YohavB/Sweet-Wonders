import whatsapp from "../icon/whatsapp.svg";
import instagram from "../icon/instagram.svg";
import phone from "../icon/phone.svg";

let Data = {
  name: "Sweet Wonders",
  description:
    "CRÈMES GLACÉES, SORBETS, CHOUX A LA CRÈME, CHOCOLATS, 100% FAITS MAISON",
  story:
    "Mickaela, pâtissière-chocolatière, a fondé Sweet Wonders pour vous proposer le meilleur de son savoir-faire, à travers ses produits 100% faits maison. Avec une expérience exceptionnelle en pâtisserie et chocolaterie, elle met à portée de vos papilles des produits uniques de qualité. N'hésitez pas à les découvrir.",

  home: "Acceuil",

  saltyMenu: "Menu Salé",
  trayName: "Plateaux",
  pastaName: "Pâtes",
  pizzaName: "Pizza",

  sweetMenu: "Menu Sucré",
  icecreamName: "Crème glacé",
  sorbeNamet: "Sorbet",
  specialityName: "Spécialité",
  eventName: "Évènements",

  gallery: "Galerie",

  contact: "Contact",
  contactus: "Contactez-Nous",
  nameForm: "Nom",
  emailForm: "Email",
  phoneForm: "Téléphone",
  eventForm: "Pour quel type d'événement ?",
  breakfast: "Petit Déjeuner",
  birthday: "Anniversaire",
  engagement: "Fiançailles",
  other: "Autre",
  message: "Message",
  submit: "Envoyer",

  socialLinks: [
    {
      name: "whatsapp",
      text: "Utilisez Whatsapp pour nous contacter !",
      url: "https://api.whatsapp.com/send?phone=972526450395",
      icon: whatsapp,
    },
    {
      name: "instagram",
      text: "Rejoignez-nous sur Intagram !",
      url: "https://www.instagram.com/Mickaela_patisserie/",
      icon: instagram,
    },
    {
      name: "phone",
      text: "Faites directement votre commande par telephone !",
      url: "tel:+972526450395",
      icon: phone,
    },
  ],

  icecream: [
    {
      product: "Chocolat au lait",
      quantity: "1 litre",
      price: "70₪",
    },
    {
      product: "Chocolat noir",
      quantity: "1 litre",
      price: "70₪",
    },
    {
      product: "Vanille de Madasgacar",
      quantity: "1 litre",
      price: "70₪",
    },
  ],

  sorbet: [
    {
      product: "Fraise",
      quantity: "1 litre",
      price: "70₪",
    },
    {
      product: "Framboise",
      quantity: "1 litre",
      price: "70₪",
    },
    {
      product: "Pêche sanguine",
      quantity: "1 litre",
      price: "70₪",
    },
    {
      product: "Citron",
      quantity: "1 litre",
      price: "70₪",
    },
    {
      product: "Goyave",
      quantity: "1 litre",
      price: "70₪",
    },
    {
      product: "Mangue",
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
      product: "Pistache",
      quantity: "1 litre",
      price: "90₪",
    },
  ],

  event: [
    {
      product: "Corbeille de choux",
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
      product: "Mini Navettes Thon-Mayo",
      quantity: "30 pieces",
      price: "120₪",
    },
    {
      product: "Mini Navettes Saumon",
      quantity: "30 pieces",
      price: "120₪",
    },
    {
      product: "Club Sandwich Saumon",
      quantity: "30 pieces",
      price: "130₪",
    },
    {
      product: "Club Sandwich Thon",
      quantity: "30 pieces",
      price: "130₪",
    },
    {
      product: "Mini Quiche",
      quantity: "30 pieces",
      price: "130₪",
    },
    {
      product: "Mini Brochette de Saumon mariné à la thaïlandaise",
      quantity: "12 pieces",
      price: "84₪",
    },
  ],

  pasta: [
    {
      product: "Saumon frais et crème au vin",
      price: "62₪",
    },
    {
      product: "Crème et poêlée de champignons à l’ail",
      price: "55₪",
    },
    {
      product: "Crème au pesto basilique, pignon et parmesan",
      price: "58₪",
    },
    {
      product: "Crème à la truffe",
      price: "62₪",
    },
    {
      product: "Crème a la patate douce, oignon et herbe de Provence",
      price: "50₪",
    },
  ],

  pizza: [
    {
      product: "Saumon fumé, crème et fromage",
      price: "62₪",
    },
    {
      product: "Chèvre miel",
      price: "62₪",
    },
    {
      product: "4 fromages",
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

import whatsapp from "../icon/whatsapp.svg";
import instagram from "../icon/instagram.svg";
import phone from "../icon/phone.svg";

let Data = {
  name: "Sweet Wonders",
  description:
    "גלידות, סורבטים, פחזניות, שוקולדים - 100% תוצרת בית! ",
  story:"  מיקאלה, קונדיטורית ובעלת העסק Sweet Wonders מציעה לכם רגעים מתוקים באמצעות מוצרים איכותיים וייחודיים, 100% תוצרת בית. מוזמנים לטעום ולהנות! ",
  
  home: "בית",

  saltyMenu: "תפריט מלוח",
  trayName: "מגשים",
  pastaName: "פסטות",
  pizzaName: "פיצות",

  sweetMenu: "תפריט מתוק",
  icecreamName: "גלידות",
  sorbeNamet: "סורבטים",
  specialityName: "המיוחדים שלנו",
  eventName: "אירועים",

  gallery: "גלריה",

  contact: "דברו איתנו",
  nameForm: "שם",
  emailForm: "אימייל",
  phoneForm: "טלפון",
  eventForm: "סוג האירוע ?",
  breakfast: "ארוחת בוקר",
  birthday:"יום הולדת",
  engagement: "אירוסין",
  other: "אחר",
  message: "הודעה",
  submit: "שליחה",

  socialLinks: [
    {
      name: "whatsapp",
      text: "דברו איתנו ישירות מהווטסאפ !",
      url: "https://api.whatsapp.com/send?phone=972526450395",
      icon: whatsapp,
    },
    {
      name: "instagram",
      text:"צטרפו אלינו באינסטגרם !",
      url: "https://www.instagram.com/Mickaela_patisserie/",
      icon: instagram,
    },
    {
      name: "phone",
      text:"קבלו הצעת מחיר ותזמינו בשיחה טלפונית !",
      url: "tel:+972526450395",
      icon: phone,
    },
  ],

  icecream: [
    {
      product: "שוקולד חלב",
      quantity: "ליטר",
      price: "70₪",
    },
    {
      product: "שוקולד מריר",
      quantity: "ליטר",
      price: "70₪",
    },
    {
      product: "וניל",
      quantity: "ליטר",
      price: "70₪",
    },
  ],

  sorbet: [
    {
      product: "תות שדה",
      quantity: "ליטר",
      price: "70₪",
    },
    {
      product: "פטל",
      quantity: "ליטר",
      price: "70₪",
    },
    {
      product: "אפרסק",
      quantity: "ליטר",
      price: "70₪",
    },
    {
      product: "לימון",
      quantity: "ליטר",
      price: "70₪",
    },
    {
      product: "גויאבה",
      quantity: "ליטר",
      price: "70₪",
    },
    {
      product: "מנגו",
      quantity: "ליטר",
      price: "70₪",
    },
  ],

  speciality: [
    {
      product: "פררו רושה",
      quantity: "ליטר",
      price: "90₪",
    },
    {
      product: "פיסטוק",
      quantity: "ליטר",
      price: "90₪",
    },
  ],

  event: [
    {
      product: "סלסלות קרוקומבוש",
      quantity: "30 פחזניות קרמל  (10 אנשים)",
      price: "200₪",
    },
    {
      product: "אריזות שוקולד",
      quantity: "",
      price: "",
    },
  ],

  tray: [
    {
      product: "מיני פיצה",
      quantity: "40 pieces",
      price: "120₪",
    },
    {
      product: "מיני כריך טונה מיונז",
      quantity: "30 pieces",
      price: "120₪",
    },
    {
      product: "מיני כריך סלמון",
      quantity: "30 pieces",
      price: "120₪",
    },
    {
      product: "מיני קלאב סנדוויץ סלמון",
      quantity: "30 pieces",
      price: "130₪",
    },
    {
      product: "מיני קלאב סנדוויץ טונה",
      quantity: "30 pieces",
      price: "130₪",
    },
    {
      product: "מיני קיש",
      quantity: "30 pieces",
      price: "130₪",
    },
    {
      product: "מיני שיפודי סלמון כבושים בסגנון תאילנדי",
      quantity: "12 pieces",
      price: "84₪",
    },
  ],

  pasta: [
    {
      product: "קרם סלמון ויין טרי",
      price: "62₪",
    },
    {
      product: "שמנת ופטריות מטוגנות עם שום",
      price: "55₪",
    },
    {
      product: "קרם פסטו בזיליקום, סנובר ופרמזן",
      price: "58₪",
    },
    {
      product: "קרם כמהין",
      price: "62₪",
    },
    {
      product: "קרם בטטה ,בצל ועשבי תיבול",
      price: "50₪",
    },
  ],

  pizza: [
    {
      product: "סלמון מעושן, שמנת וגבינה",
      price: "62₪",
    },
    {
      product: "גבינת עזים ודבש",
      price: "62₪",
    },
    {
      product: "4 גבינות",
      price: "65₪",
    },
    {
      product: "מרגריטה",
      price: "40₪",
    },
    {
      product: "פיצת בצל ואנשובי",
      price: "40₪",
    },
  ],
};
export default Data;

import homeTextFr from "./dataFR";
import homeTextEn from "./dataEN";
import homeTextHe from "./dataHE";

var langDetect = () => {
  switch (navigator.language) {
    case "fr-FR":
      return homeTextFr;

    case "en":
      return homeTextEn;

    case "he":
      return homeTextHe;

    default:
      return homeTextEn;
  }
};

const lang = langDetect();

export default lang;

import Source from "./Sources";

interface Websites extends Source {
  title: string;
  url: string | null;
  dateAccessed: string;
  placePublication: string;
  publisher: string;
  datAccessed: string;
  availableFrom: string;
  year: string;
}

export default Websites;

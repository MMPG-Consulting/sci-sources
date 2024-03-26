import Source from "./Sources";

interface Books extends Source {
  year: number;
  title: string;
  edition: string;
  placePublication: string;
  publisher: string;
  pages: number;
}

export default Books;

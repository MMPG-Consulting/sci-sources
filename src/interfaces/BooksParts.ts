import In from "./In";
import Source from "./Sources";

interface BooksPart extends Source {
  year: number;
  title: string;
  in: In;
  publisher: string;
  pages: number;
}

export default BooksPart;

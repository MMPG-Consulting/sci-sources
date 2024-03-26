import In from "./In";
import Source from "./Sources";

interface ConferenceProceedings extends Source {
  editor: string;
  year: string;
  title: string;
  in: In;
  nameConference: string;
  datesConference: string;
  placeConference: string;
  placePublication: string;
  publisher: string;
  pages: number;
}

export default ConferenceProceedings;

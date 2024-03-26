import Source from "./Sources";

interface ConferencePapers extends Source {
  date: string; // Date of publication
  title: string; // Title of the paper
  connectivePhrase: string; // In; editor of the proceedings
  nameConference: string; // Title of the publication, or name of conference, or both;
  datesConference: string;
  placeConference: string;
  placePublication: string;
  publisher: string;
  pages: number;
}

export default ConferencePapers;

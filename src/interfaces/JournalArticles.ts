import Source from "./Sources";

interface JournalArticles extends Source {
  date: string; // Date of publication
  titleJournal: string;
  titleArticle: string;
  volumeIssueNumber: string;
  pages: string;
  url: string;
  dateAccessed: string;
}

export default JournalArticles;

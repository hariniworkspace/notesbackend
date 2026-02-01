import natural from "natural";

const TfIdf = natural.TfIdf;

export const getSimilarTitles = (currentTitle, allTitles) => {
  const tfidf = new TfIdf();

  allTitles.forEach((t) => tfidf.addDocument(t));

  const scores = [];

  tfidf.tfidfs(currentTitle, (i, measure) => {
    scores.push({ title: allTitles[i], score: measure });
  });

  return scores
    .filter((s) => s.title !== currentTitle)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((s) => s.title);
};

import { LoremIpsum } from "lorem-ipsum";

export function randomNumber(max: number){
  return Math.floor(Math.random() * Math.floor(max))
}

export const subtractDays = (days: number): Date => {
  const result = new Date();
  result.setDate(result.getDate() - days);
  return result;
};

export const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

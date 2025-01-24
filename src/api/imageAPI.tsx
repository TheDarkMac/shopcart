import { LoremIpsum } from "lorem-ipsum";

export const imageURL = ():string=>{
    return "https://picsum.photos/200/300";
}

export const imageName = ():string => {
    const lorem:LoremIpsum = new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4
        },
        wordsPerSentence: {
          max: 16,
          min: 4
        }
      });
    return lorem.generateWords(1);
}

export const imageDescription = ():string => {
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4
        },
        wordsPerSentence: {
          max: 16,
          min: 4
        }
      });
      return lorem.generateSentences(1)
}

export const imagePrice = ():number => {
    return Math.round(Math.random() * 100000);
}
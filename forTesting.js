import { createStory } from './prompts/story-prompt.js';
import { generateImage } from './prompts/image-generation.js';
import { animals } from './sightwords/sight-words.js';

// let storyArray;

// createStory().then((story)  => {
//     storyArray = story.split('.').filter((sentence) => {
//         return !/[0-9\n]/.test(sentence);
//     })
//     return storyArray
// }).then((storyArray) => {
//     let prompt = storyArray[0];
//     console.log(prompt);
//     return generateImage(prompt);
// }).then((image) => console.log(image));



//function createBook, uses createStory and generateImage to return each sentence of the story with an image url generated for it.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function createBook() {
    let mainCharacter = animals[Math.floor(Math.random() * animals.length)];
    let storyArray = await createStory(mainCharacter).then((story) => {
        return story.split('.').filter((sentence) => {
            return !/[0-9\n]/.test(sentence);
        })
    });

    let book = [];
    for (let i = 0; i < storyArray.length; i += 5) {
        let promises = storyArray.slice(i, i + 5).map(sentence => generateImage(sentence, mainCharacter));
        let images = await Promise.allSettled(promises);
        let page = images.map((result, index) => ({
            sentence: storyArray[i + index],
            image: result.status === 'fulfilled' ? result.value : null
        }));
        book.push(...page);
        if (i + 5 < storyArray.length) {
            await delay(60000); // Delay for a minute
        }
    }

    return book;
}

export { createBook };
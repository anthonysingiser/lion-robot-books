import {createStory} from './prompts/story-prompt.mjs';
import {generateImage} from './prompts/image-generation.mjs';

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
    let storyArray = await createStory().then((story)  => {
        return story.split('.').filter((sentence) => {
            return !/[0-9\n]/.test(sentence);
        })
    });

    let imageArray = [];
    for (let sentence of storyArray) {
        let image = await generateImage(sentence);
        imageArray.push(image);
        await delay(60000 / 5); // Delay for 1/5th of a minute
    }

    return {storyArray, imageArray};
}

createBook().then((book) => console.log(book));
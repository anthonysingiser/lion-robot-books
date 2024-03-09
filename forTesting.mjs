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
async function createBook() {
    let storyArray = await createStory().then((story)  => {
        return story.split('.').filter((sentence) => {
            return !/[0-9\n]/.test(sentence);
        })
    });

    let imageArray = await storyArray.map((sentence) => {
        return generateImage(sentence);
    });

    return {storyArray, imageArray};
}

//this 'works' but is exceeding my rate limits for the openai api. I need to find a way to limit the number of requests I'm making to the api.

createBook().then((book) => console.log(book));
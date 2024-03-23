import { animals, frySightWords } from '../sightwords/sight-words.js';
import {openai} from './apiClient.mjs';

// make prompt shorter. use around 10 words at a time for words to include, not 30.
// structure story with similar but slightly different sentences, using wordsToInclude to build these sentences. 
// test using list of nouns to include in these sentences, separately.
// first generate a character desription, then use that description to generate the story, so that it remains consistent. This description will also be used to keep the images consistent.

//oldPrompt: `Generate a story about a ${oneRandomAnimal} in 32 sentences. Here are the rules for the story: The first sentence will introduce and describe the ${oneRandomAnimal}, the story needs to focus on the ${oneRandomAnimal}'s thoughts and feelings, the story needs a central conflict, don't introduce something or someone in the story without it having an impact on the story, the story is made for a young reader, the total word count needs to be between 300 to 400 words. Take these words as additional input: ${wordsToInclude}, use each one of those words at least once and as much as possible in the story.`

// create 10 sentences that use these words:${firstTenFryWords}. Make the sentences similar in structure, easy to read, but vary the words from the list that are used. All ten sentences together must use all the words from the list, will tell a children's story focusing on the thoughts and feelings of a %{oneRandomAnimal}, and will have a central conflict. 

const firstTenFryWords = frySightWords.one100.slice(0,10).join(',');

async function createStory(mainCharacter) {    

    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `create ten sentences that use these words:${firstTenFryWords}. make the sentences primarily made from these words. each sentence will be slight variations on the first sentence generated. The sentences together will tell a story focusing on the thoughts and feelings of a ${mainCharacter}. The story needs a central conflict, that is resolved by the end.`}],
        model: 'gpt-3.5-turbo',
    });

    return completion.choices[0].message.content
}

// async function to find total count of each word in wordsToInclude that is in the story for testing
// function should await the story and then return an object with each word in wordsToInclude as a key with the value being the word's count in the story

async function countWords(searchWords) {
    //create object with two keys, story, with the value of the story, and wordCount, with the value of the wordCount object
    //storyArray should split the story into an array of words, and remove any punctuation
    try {
        let story = await createStory();
        let wordCount = {};
        let storyArray = story.split(' ').map((word) => word.replace(/[^a-zA-Z ]/g, "").toLowerCase());
        let words = searchWords.split(',').map((word) => word.toLowerCase());

        for (let word of words) {
            wordCount[word] = storyArray.filter((w) => w === word).length;
        }
        return { story: story, wordCount: wordCount };

    } catch (error) {
        console.log(error);
    }
}

// countWords(firstTenFryWords).then((story) => console.log(story));


export {
    createStory,
    countWords
}
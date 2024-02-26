import 'dotenv/config';
import OpenAI from 'openai';
import { animals, sightWords } from './story-details.js';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const oneRandomAnimal = animals[Math.floor(Math.random() * animals.length)];
const wordsToInclude = sightWords.preK.join(',');

// make prompt shorter. use around 10 words at a time for wordsToInclude, not 30.
// structure story with similar but slightly different sentences, using wordsToInclude to build these sentences. 
// test using list of nouns to include in these sentences, separately.

async function createStory() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `Generate a story about a ${oneRandomAnimal} in 32 sentences. Here are the rules for the story: The first sentence will introduce and describe the ${oneRandomAnimal}, the story needs to focus on the ${oneRandomAnimal}'s thoughts and feelings, the story needs a central conflict, don't introduce something or someone in the story without it having an impact on the story, the story is made for a young reader, the total word count needs to be between 300 to 400 words. Take these words as additional input: ${wordsToInclude}, use each one of those words at least once and as much as possible in the story.` }],
        model: 'gpt-3.5-turbo',
    });

    return completion.choices[0].message.content
}

// async function to find total count of each word in wordsToInclude that is in the story
// function should await the story and then return an object with each word in wordsToInclude as a key with the value being it's count in the story

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

countWords(wordsToInclude).then((story) => console.log(story));
import 'dotenv/config';
import OpenAI from 'openai';
import {animals, sightWords} from './story-details.js';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const oneRandomAnimal = animals[Math.round(Math.random(animals.length))]
const wordsToInclude = sightWords.join(',')

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `Write me a story about a ${oneRandomAnimal} in 15 sentences. Incorporate as many of the following words as possible: ${wordsToInclude}`}],
        model: 'gpt-3.5-turbo',
    });

    console.log(completion.choices[0].message.content);
}

main()
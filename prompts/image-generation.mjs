import OpenAI from "openai";
import 'dotenv/config';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const response = await OpenAI.createImage({
    model: "dall-e-3",
    prompt: "create an image of a cat",
    n: 1, 
    size: "256x256",
});
image_url = response.data.images[0].url;

console.log(image_url);
import OpenAI from "openai";
import 'dotenv/config';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function generateImage() {
    const image = await openai.images.generate({
        model: "dall-e-3",
        prompt: "A painting of a forest",
     });
    console.log(image.data);
};

generateImage();
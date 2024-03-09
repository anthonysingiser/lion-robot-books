import { openai } from "./apiClient.mjs";

async function generateImage(prompt) {
    const image = await openai.images.generate({
        model: "dall-e-2", 
        prompt: `${prompt} in the style of a children's book illustration.`,
    });
    return image.data[0].url;
}

// generateImage("a painting of a cat").then((image) => console.log(image));

export {
    generateImage
}
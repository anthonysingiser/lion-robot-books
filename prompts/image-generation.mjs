import { openai } from "./apiClient.mjs";

async function generateImage(prompt) {
    const image = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
    });
    return image.data[0].url;
}

// generateImage("a painting of a cat").then((image) => console.log(image));

export {
    generateImage
}
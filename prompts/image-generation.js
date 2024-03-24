import { openai } from "./apiClient.js";

async function generateImage(prompt, animal) {
    const image = await openai.images.generate({
        model: "dall-e-3", 
        prompt: `${prompt} in the style of a children's book illustration. The main character of the image is a ${animal}`,
    });
    return image.data[0].url;
}

// generateImage("a painting of a cat").then((image) => console.log(image));

export {
    generateImage
}
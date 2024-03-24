import { createBook } from './forTesting.js';

document.getElementById('loadBook').addEventListener('click', async () => {
    document.getElementById('loadBook').disabled = true;
    let book = document.getElementById('book');
    let loadingBar = document.getElementById('loadingBar');

    let pages = await createBook();
    let total = pages.length;
    let loaded = 0;

    pages.forEach(page => {
        let div = document.createElement('div');
        div.className = 'book-page';
        let img = document.createElement('img');
        img.src = page.image;
        let p = document.createElement('p');
        p.textContent = page.sentence;
        div.appendChild(img);
        div.appendChild(p);
        book.appendChild(div);

        loaded++;
        loadingBar.style.width = `${(loaded / total) * 100}%`;
    });

    document.getElementById('loadBook').disabled = false;
}).catch(error => console.error(error));
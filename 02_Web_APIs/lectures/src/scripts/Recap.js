const postContainer = document.querySelector('#posts');
async function fetchPosts(url) {
    try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) throw new Error('Request failed');
        const posts = await response.json();
        posts.forEach((post) => createPostParagraph(post));
        // return posts;
    } catch (error) {
        console.log(error);
    }
}

const result = await fetchPosts('https://jsonplaceholder.typicode.com/posts');
console.log('result', result);

function createPostParagraph(post) {
    const paragraph = document.createElement('p');
    paragraph.textContent = post.title;
    postContainer.appendChild(paragraph);
}

const user = {
    firstName: 'Karl',
    'location-de': 'berlin',
};

const myProperty = 'firstName';

console.log(user.firstName);
console.log(user['firstName']);
console.log(user['location-de']);

console.log(user[myProperty]);

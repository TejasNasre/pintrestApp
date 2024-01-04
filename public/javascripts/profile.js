// Dummy data for posts and image posts
const posts = [ 
    { title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Post 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    // Add more posts as needed
];

const imagePosts = [
    { imageUrl: 'path/to/image1.jpg' },
    { imageUrl: 'path/to/image2.jpg' },
    // Add more image posts as needed
];

// Function to open settings (you can customize this)
function openSettings() {
    alert('Settings button clicked!');
}

// Function to add a new post
function addPost() {
    // Implementation for text posts (if needed in the future)
}

// Function to add a new image post
function addImagePost() {
    const imageUrlInput = document.getElementById('image-url');

    const imageUrl = imageUrlInput.value.trim();

    if (imageUrl) {
        const imagePostCard = document.createElement('div');
        imagePostCard.classList.add('image-post-card');

        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = 'Image Post';

        imagePostCard.appendChild(imageElement);

        const postCardsContainer = document.getElementById('post-cards-container');
        postCardsContainer.appendChild(imagePostCard);

        // Clear input field after adding the image post
        imageUrlInput.value = '';
    } else {
        alert('Please enter the image URL for the post.');
    }
}

// Display posts and image posts when the page loads
window.onload = function () {
    displayPosts();
    displayImagePosts();
};

function displayPosts() {
    const postCardsContainer = document.getElementById('post-cards-container');

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');

        const title = document.createElement('h2');
        title.innerText = post.title;

        const content = document.createElement('p');
        content.innerText = post.content;

        postCard.appendChild(title);
        postCard.appendChild(content);

        postCardsContainer.appendChild(postCard);
    });
}

function displayImagePosts() {
    const postCardsContainer = document.getElementById('post-cards-container');

    imagePosts.forEach(imagePost => {
        const imagePostCard = document.createElement('div');
        imagePostCard.classList.add('image-post-card');

        const imageElement = document.createElement('img');
        imageElement.src = imagePost.imageUrl;
        imageElement.alt = 'Image Post';

        imagePostCard.appendChild(imageElement);

        postCardsContainer.appendChild(imagePostCard);
    });
}

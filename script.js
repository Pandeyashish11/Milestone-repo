// Function to create a new blog post element
function createBlogPost(title, content) {
    const blogPost = document.createElement('div');
    blogPost.className = 'blogPost';

    const postTitle = document.createElement('h2');
    postTitle.textContent = title;

    const postContent = document.createElement('p');
    postContent.textContent = content;

    blogPost.appendChild(postTitle);
    blogPost.appendChild(postContent);

    return blogPost;
    
}
console.log("blogPost");

// Function to handle the click event of the "+" button
function handleAddButtonClick() {
    const title = prompt('Enter Blog Post URL:');
    const content = prompt('Enter Blog Title :');

    if (title && content) {
        const newBlogPost = createBlogPost(title, content);
        const blogContainer = document.getElementById('blogContainer');
        blogContainer.appendChild(newBlogPost);
    }
}

// Add event listener to the "+" button
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', handleAddButtonClick);


/*function daysInMonth(month, year) {
    const numebrOfDays = new Date(year, month, 0).getDate();
	return ("Number of days in " + month
		+ "and month of the year " + year
		+ " is " + numebrOfDays);
}

console.log(daysInMonth(2, 2023));

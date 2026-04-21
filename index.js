// solo project: Instagram clone, Scrimba Fullstack curriculum
// the 'posts' array below is provided by Scrimba

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "A reflective moment",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "It's a little much",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "My thoughts exactly",
        likes: 152
    }
]

// my approach and solution are below:

/* 
-- for each post we need to create the several sections to be rendered for that post.
-- for each post we need to create a container that will be rendered as its own html element.
*/
// a loop through the posts array. Each array member (an object) is called 'post'.

// grab the <main> element that will hold all the child elements we're about to create
const root = document.getElementById("root");

posts.forEach(post => {
    // for each object, we will create an HMTL element and append content to it.
    // we're calling it mainContainer
    // mainContainer is basically the card that the user will look at on the screen.
    const mainContainer = document.createElement("div");
    mainContainer.id = "main-container";
    const item = post;
    
    const avatar = document.createElement("section");
    avatar.classList.add("avatar-section");
    avatar.innerHTML = `
        <img src="./${item.avatar}" alt="User avatar photo." class="avatar-pic" />
        <div>
            <h1 class="avatar-name bold">${item.name}</h1>
            <p class="avatar-location regular">${item.location}</p>
        </div>
        `
    mainContainer.append(avatar);
    
    const pic = document.createElement("section");
    pic.classList.add("pic-section");
    pic.innerHTML = `
        <img src="./${item.post}" alt="${item.name} painted self portrait." class="post-image" />`;
    mainContainer.append(pic);
    
    const responseSection = document.createElement("section");
    responseSection.classList.add("response-section");
    responseSection.innerHTML = `
        <div class="icon-bar">
        <img src="./images/icon-heart.png" alt="Heart icon." />
        <img src="./images/icon-comment.png" alt="Speech bubble icon." />
        <img src="./images/icon-dm.png" alt="Paper airplane icon." />
        </div>
        <p class="bold">${item.likes} likes</p>
    `
    mainContainer.append(responseSection);
    
    const userpostSection = document.createElement("section");
    userpostSection.classList.add("user-post-section");
    userpostSection.innerHTML = `
        <p class="regular"><span class="bold">${item.username}</span> ${item.comment}</p>
    `
    mainContainer.append(userpostSection);
    
    // now that we've built a mainContainer (a card), add it to <main> (the root element)
    root.append(mainContainer);
});
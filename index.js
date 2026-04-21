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

posts.forEach(item => {
    // for each object, we will create an HMTL element and append content to it.
    // we're calling it mainContainer
    // mainContainer is basically the card that the user will look at on the screen.
    const mainContainer = document.createElement("div");
    mainContainer.id = "main-container";
    
    // avatar section
    const avatar = document.createElement("section");
    avatar.className = "avatar-section";
    const av = document.createElement("img");
    av.src = `./${item.avatar}`;
    av.alt = "User avatar photo.";
    av.className = "avatar-pic";
    avatar.append(av);

    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.className = "avatar-name bold";
    const p = document.createElement("p");
    p.className = "avatar-location regular";
    h1.textContent = item.name;
    p.textContent = item.location;
    div.append(h1, p);
    avatar.append(div);
    mainContainer.append(avatar);
    
    // picture section (the post that the user is sharing)
    const pic = document.createElement("section");
    pic.className = "pic-section";
    const post = document.createElement("img");
    post.src = `./${item.post}`;
    post.alt = `${item.name} painted self portrait.`;
    post.className = "post-image";
    pic.append(post);
    mainContainer.append(pic);

    // response section: icons, likes, and comment
    const responseSection = document.createElement("section");
    responseSection.className = "response-section";

    const iconBar = document.createElement("div");
    iconBar.className = "icon-bar";
    
    const heart = document.createElement("img");
    heart.src = "./images/icon-heart.png";
    heart.alt = "Heart icon.";
    
    const comment = document.createElement("img");
    comment.src = "./images/icon-comment.png";
    comment.alt = "Speech bubble icon.";
    
    const dm = document.createElement("img");
    dm.src = "./images/icon-dm.png";
    dm.alt = "Paper airplane icon.";

    iconBar.append(heart, comment, dm);
    responseSection.append(iconBar);

    const likes = document.createElement("p");
    likes.className = "bold";
    likes.textContent = `${item.likes} likes`;
    responseSection.append(likes);

    mainContainer.append(responseSection);
    

    // user post section
    const userpostSection = document.createElement("section");
    userpostSection.className = "user-post-section";
    const userWords = document.createElement("p");
    userWords.className = "regular";
    
    const spanned = document.createElement("span");
    spanned.className = "bold";
    spanned.textContent = item.username;
    userWords.append(spanned, ` ${item.comment}`);
    userpostSection.append(userWords);
    
    mainContainer.append(userpostSection);
    
    // append mainContainer to root
    root.append(mainContainer);
    // end of loop
});
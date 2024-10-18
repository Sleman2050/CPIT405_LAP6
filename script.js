const initialLikes = 10;
const initialDislikes = 20;

let likesCount = initialLikes;
let dislikesCount = initialDislikes;

// Get all UI elements
const likesBtn = document.getElementById("likeBtn");
const dislikesBtn = document.getElementById("dislikeBtn");
const commentBox = document.getElementById("commentBox");
const submitBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");
const commentsList = document.getElementById("commentsList");

likesBtn.innerText = "👍" + likesCount;
dislikesBtn.innerText = "👎" + dislikesCount;

// Handle like button
likesBtn.addEventListener("click", () => {
    likesCount++;
    likesBtn.innerText = "👍" + likesCount;
    setCookie();
});

// Handle dislike button
dislikesBtn.addEventListener("click", () => {
    dislikesCount++;
    dislikesBtn.innerText = "👎" + dislikesCount;
    setCookie();
});

// Handle submit a comment
submitBtn.addEventListener("click", () => {
    const pElem = document.createElement("p");
    pElem.innerText = commentBox.value.trim();
    commentsList.appendChild(pElem);
    commentBox.value = "";
    setCookie();
});

// Handle clear button
clearBtn.addEventListener("click", () => {
    commentBox.value = "";
    // Assuming you want to reset the cookie here
    const expiresOn = new Date(Date.now() + 1 * 60 * 1000);
    const cookieString = "voted=true; path=/; expires=" + expiresOn.toUTCString();
    document.cookie = cookieString;
});

// Function to set cookie
function setCookie() {
    const expiresOn = new Date(Date.now() + 1 * 60 * 1000);
    const cookieString = "voted=true; path=/; expires=" + expiresOn.toUTCString();
    document.cookie = cookieString;
}

// On window load
window.onload = function() {
    if (document.cookie && document.cookie.indexOf("voted") > -1) {
        console.log("cookie exists");
        // Disable all buttons
        likesBtn.disabled = true;
        dislikesBtn.disabled = true;
        submitBtn.disabled = true;
    }
};

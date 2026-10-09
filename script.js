function addPost() {
    var text = document.getElementById("postText").value;

    if (text == "") {
        alert("Please write something!");
        return;
    }

    var post = document.createElement("div");
    post.className = "post";

    post.innerHTML =
        "<h3>Logith</h3>" +
        "<p>" + text + "</p>" +
        '<button onclick="likePost(this)">Like <span>0</span></button>' +
        " "+
        '<button onclick="commentPost()">Comment</button>';

    document.getElementById("posts").prepend(post);
    document.getElementById("postText").value = "";
}

function likePost(button) {
    var count = button.querySelector("span");
    count.innerHTML = Number(count.innerHTML) + 1;
}

function commentPost() {
    var comment = prompt("Enter your comment:");

    if (comment !== null && comment.trim() !== "") {
        alert("Comment added!");
    } else {
        alert("Enter comment!");
    }
}


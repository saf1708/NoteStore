var typed = new Typed(".auto-type",{
    strings:["NoteStore"],
    typespeed: 150,
    backspeed: 150,
    // loop: true
})

$(function(){
   $(function(){
    $(".toggle").on("click", function(){
        if($(".menu").hasClass("actice")){
            $(".menu").removeClass("active");
            $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
        }
        else{
            $(".menu").addClass("active");
            $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
        }
    })
   })
});



function likeComment(likeElement) {
    const likes = parseInt(likeElement.getAttribute("data-likes"));
    likeElement.setAttribute("data-likes", likes + 1);
    likeElement.textContent = `Like (${likes + 1})`;
}

function replyToComment(replyElement) {
    const commentText = replyElement.parentElement.parentElement.querySelector(".comment-text").textContent;
    document.getElementById("commentText").value = `Reply to:\n${commentText}`;
    showCommentForm();
}

function showCommentForm() {
    const commentInput = document.getElementById("commentInput");
    const showCommentButton = document.getElementById("showCommentButton");

    commentInput.style.display = "block";
    showCommentButton.style.display = "none";
}

// JavaScript to handle comment submission
const commentForm = document.getElementById("commentForm");
const commentArea = document.getElementById("commentArea");

commentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const commentText = document.getElementById("commentText").value;

    if (name && commentText) {
        const commentElement = document.createElement("div");
        commentElement.className = "comment";

        const commentTextElement = document.createElement("div");
        commentTextElement.className = "comment-text";
        commentTextElement.innerHTML = `<strong>${name}:</strong><br>${commentText}`;
        commentElement.appendChild(commentTextElement);

        const commentOptions = document.createElement("div");
        commentOptions.className = "comment-options";
        const likeSpan = document.createElement("span");
        likeSpan.className = "comment-like";
        likeSpan.setAttribute("data-likes", "0");
        likeSpan.textContent = "Like";
        likeSpan.onclick = function () { likeComment(likeSpan) };
        const replySpan = document.createElement("span");
        replySpan.className = "comment-reply";
        replySpan.textContent = "Reply";
        replySpan.onclick = function () { replyToComment(replySpan) };
        commentOptions.appendChild(likeSpan);
        commentOptions.appendChild(replySpan);

        commentElement.appendChild(commentOptions);

        commentArea.appendChild(commentElement);

        document.getElementById("name").value = "";
        document.getElementById("commentText").value = "";

        // Hide the comment input area after submission
        commentInput.style.display = "none";
        showCommentButton.style.display = "block";
    }
});



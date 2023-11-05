<?php

    include 'config.php';
   if (isset($_POST['add_A_Comment'])){

    $name = $_POST['name'];
    $message = $_POST['message'];
    $like1 = $_POST['like1'];
    $reply = $_POST['reply'];

    $sql = "INSERT INTO notestore (name, message, like1, reply)
VALUES ('$name', '$meassage', '$like1', '$reply')";

if ($conn->query($sql) === TRUE) {
  echo "";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
   }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comments</title>
    
</head>
<body>

<div id="feedback">  
        <form id="commentForm" action="config.php" method="post">
    <h1>Community and Feedback</h1>

    <!-- Comment Display Area -->
    <h2>Comments:</h2>
    <div id="commentArea">
        <!-- Sample comments -->
        <div class="comment">
            <div class="comment-text">
                <strong>John:</strong><br>
                This is a great website!
            </div>
            <div class="comment-options">
                <span class="comment-like" data-likes="0" onclick="likeComment(this)">Like</span>
                <span class="comment-reply" onclick="replyToComment(this)">Reply</span>
            </div>
        </div>
        <div class="comment">
            <div class="comment-text">
                <strong>Alice:</strong><br>
                I have a question about the course materials.
            </div>
            <div class="comment-options">
                <span class="comment-like" name="like1" data-likes="0" onclick="likeComment(this)">Like</span>
                <span class="comment-reply" name="reply" onclick="replyToComment(this)">Reply</span>
            </div>
        </div>
    </div>

    <!-- Comment Form and Community Interaction -->
    <button id="showCommentButton" >Add a Comment</button>
    <div id="commentInput">
        <h2>Leave a Comment:</h2>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>

            <label for="comment">Comment:</label>
            <textarea id="commentText" rows="4" name="message" required></textarea><br><br>

            <input type="submit" id="submit" name="add_A_Comment" value="Submit Comment">
        </form>
    </div>
</div> 
    
</body>
</html>
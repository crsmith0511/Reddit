var posts = []

//when the post button gets clicked id="submit-post"
var addNewPost = $('#submit-post').on('click', function(){
    //grab text post info
    var submittedPostText = $('#post-text').val()
    //grab your name info
    var submittedYourName = $('#your-name').val()

    //check to see if both text fields are blank.
    if(submittedPostText === '' && submittedYourName === ''){
        alert('Please fill in all fields before clicking Post.')
        //check to see if post text is blank
    } else if(submittedPostText === '' && submittedYourName){
        alert('Please fill out the post text')
        //checks to see if your name is blank
    } else if(submittedPostText && submittedYourName === ''){
        alert('Please fill in your name.')
    } else {
        //store it in an object if ALL fields are filled out, so no objects get made with undefined values.
        var newSubmittedPost = {
            postText: submittedPostText,
            postCreator: submittedYourName,
            commentThread: []
        }
        console.log(newSubmittedPost)
        //push that object ot the posts object
        posts.push(newSubmittedPost)
    }
    renderPosts()
    //Need to invoke render posts
})

var renderPosts = function(){
    //finds the <div> that template or each post will be appended to. 
    // In this case it is the div that has the class of post-thread view.
    var $postThreadView = $('.post-thread-view')

    //This is emptying out the div container so the loop can add each new post and have no dups.
    $postThreadView.empty()

    for(let i = 0; i < posts.length; i++){
        var $template =
        '<div class="post-container" id="' + i + '"> '
        +   '<a class="remove-post" data-remove="' + i + '">' + 'Remove' + '</a> '
        +   '<a class="comment-on-post" data-comment="' + i + '">' + 'Comment' + '</a>'
        +   '<p class="post-text">' + posts[i].postText + '</p>'
        +       '<div class="comment-container" data-number="' + i + '">'
        +           '<ul class="comment-section" data-comment-container="' + i + '">' + '</ul>'
        +           '<input id="comment-text" type="text" class="comment-control" placeholder="Comment Text">' + '</input>'
        +           '<input id="user-name" type="text" class="comment-control" placeholder="User Name">' + '</input>'
        +           '<button id="submit-comment" data-submit="' + i + '">' + 'Post Comment' + '</button>'
        +       '</div>'
        +   '<p class="post-creator">' + 'Post By: ' + posts[i].postCreator  + '</p>'
        +'</div>';

      $postThreadView.append($template)
    }
}
console.log(posts)

// when the post button gets clicked id="submit-post"
var addNewComment = $('.post-container').on('click', '#submit-comment', function(){
    var postId = $(this).data('submit')
    
    console.log(index)
    //grabs comment text
    var submittedCommentText = $('#comment-text').val()
    //grabs user name
    var submittedUserName = $('#user-name').val()

    //check to see if both text fields are blank.
    if(submittedCommentText === '' && submittedUserName === ''){
        alert('Please fill in all fields before clicking Post.')
        //check to see if comment text is blank
    } else if(submittedCommentText === '' && submittedUserName){
        alert('Please fill out the post text')
        //checks to see if user name is blank
    } else if(submittedCommentText && submittedUserName === ''){
        alert('Please fill in your name.')
    } else {
        //store it in an object if ALL fields are filled out, so no objects get made with undefined values.
        var newCommentPost = {
            commentText: submittedCommentText,
            commentCreator: submittedUserName,
        }
       console.log(newCommentPost)
        //need to push object to the posts[correct index].commentThread
    }
    
})



$(".post-thread").on('click', '.remove-post', function(){
    var removePostid= $(this).data('remove')
    // Need to remove post from the posts array by index
    // re-render posts?
   
})


$(".post-thread").on('click', '.comment-on-post', function(){
    var commentOnid = $(this).data('comment')
    
    $('.comment-container').eq(commentOnid).toggle()

})

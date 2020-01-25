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
    var $postThreadView = $('.post-thread-view')

    $postThreadView.empty()

 
        for(let i = 0; i < posts.length; i++){
            var $template =
            '<tr class="post-text-view">'
          + '  <td class="remove-post" data-post-number="' + i + '">'+'<a>' + 'Remove' + '</a>' + '</td>'
          + '  <td class="comment-on-post" data-post-number="' + i + '">' +'<a>' + 'Comment' + '</a>' + '</td>'
          + '  <td class="post-text" data-post-number="' + i + '">' + posts[i].postText + '</td>'
          + '  <td class="post-creator" data-post-number="' + i + '">' + 'Posted By: ' + posts[i].postCreator + '</td>'
          + '</tr>'
          ;  
          $postThreadView.append($template)
        }
}



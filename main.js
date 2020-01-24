var posts = []



//when the post button gets clicked id="submit-post"
var createNewPost = $('#submit-post').on('click', function(){
    //grab text post info
    var submittedPost = $('#post-text').val()
    //grab your name info
    var submittedName = $('#your-name').val()

    //check to see if both text fields are blank.
    if(submittedPost === '' && submittedName === ''){
        alert('Please fill in all fields before clicking Post.')
        //check to see if post text is blank
    } else if(submittedPost === '' && submittedName){
        alert('Please fill out the post text')
        //checks to see if your name is blank
    } else if(submittedPost && submittedName === ''){
        alert('Please fill in your name.')
    } else {
        //store it in an object
        var post = {
            postText: submittedPost,
            yourName: submittedName
        }
        console.log(post)
        posts.push(post)
    }

    //push that object ot the posts object
    
})

console.log(posts)





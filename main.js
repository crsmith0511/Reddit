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
        //store it in an object
        var newSubmittedPost = {
            postText: submittedPostText,
            yourName: submittedYourName
        }
        console.log(newSubmittedPost)
        posts.push(newSubmittedPost)
    }

    //push that object ot the posts object
    
})

console.log(posts)





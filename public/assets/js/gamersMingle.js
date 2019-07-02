$(document).ready(function(){

    //Container that holds all of the users posts
    var postContainer = $(".postContainer");
    //edit user's post
    // $(document).on("click", "button.edit", handlePostEdit);
    

    $("#textBox").on("submit", function(event) {
        event.preventDefault();
        var newPost = {
            post: $("#autocomplete-input").val(),
        }
        $.ajax("/dashboard" , {
            type: "POST",
            data: newPost
        }).then(
            function() {
                console.log("User's Posted");
                location.reload();
            }
        );
    });
});

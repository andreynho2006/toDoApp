//check off specific todos by clicking\
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//click on span to delete todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

//add toDo items
$("input[type='text'").keypress(function(event) {
    if(event.which === 13) {
        //grab todotext from input
        var toDoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span>" + toDoText + "</li>");
    }
});
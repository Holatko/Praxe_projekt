$(document).ready(function () {
    $("#on").click(function (e) { 
        e.preventDefault();
        $("#zadni").fadeOut(100, function() {
            $("#zadni").attr("src", "images/svetla2.jpg");
            $("#zadni").fadeIn(100);
        });
    });

    $("#off").click(function (e) { 
        e.preventDefault();
        $("#zadni").fadeOut(100, function() {
            $("#zadni").attr("src", "images/svetla1.jpg");
            $("#zadni").fadeIn(100);
        });
    });
});
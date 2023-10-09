$(document).ready(function () {
    $("#on").click(function (e) { 
        e.preventDefault();
        $("#zadni").attr("src", "images/svetla2.jpg");
    });

    $("#off").click(function (e) { 
        e.preventDefault();
        $("#zadni").attr("src", "images/svetla1.jpg");
    });
});
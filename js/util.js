
$(document).ready($(function ()
{      
    $("#navbarCollapse > .navbar-nav li a").click(function(){
        $("#navbarCollapse > .navbar-nav li a").removeClass("active");
        $(this).addClass("active");
    });
  
}));
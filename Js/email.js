$(function () {
    $("button#submit").click(function () {
       
        $.ajax({
                type: "POST",
                url: "/php/email.php",
                data: $("form#email").serialize(),
                success: function (res) 
                    {
                        $("h3#res").html(res);
                        $("#myModal").modal('hide');
                    } 
            });  
    });    
});

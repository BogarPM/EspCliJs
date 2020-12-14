$(function(){
    //alert('works');
    $.ajax({
        url: "/devices/list",
        method: "GET",
        success: function(res){
            console.log(res);
        },
        dataType: "json",
        content_type: "application/json"
    })

})
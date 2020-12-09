$(document).ready(function(){
    $('#data-form').submit(function(ev){
        //alert('works this button!');
        let d1 = $('#data1').val();
        let d2 = $('#data2').val();
        let d3 = $('#data3').val();
        console.log('dato 1: ', d1, 'dato 2: ', d2, 'dato 3: ', d3);
        ev.preventDefault();
        $.ajax({
            url: "http://localhost:3000/data/".concat(d1,"/",d2,"/",d3,"/"),
            method: "PUT",
            success: function(err){
                console.log('post request Successful');
                
            }
        });
    });
});
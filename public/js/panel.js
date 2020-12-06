$(document).ready(function(){
    $('#data-form').submit(function(ev){
        alert('works this button!');
        ev.preventDefault();
    });
});
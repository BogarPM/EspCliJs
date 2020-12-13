$(document).ready(function(){
    let n = 1;  //number of pin-config fields
    $("#add").on('click', function(){
        //$("body").append("<section class=\"pin-section\"><form class=\"pin-config-form\"><span>No. Pin: </span><input class=\"pin-field\" type=\"text\"><label for=\"type\">Selecciona tipo</label><select name=\"type\" id=\"type\"><option value=\"DIGITAL_INPUT\">DIGITAL_INPUT</option><option value=\"DIGITAL_OUTPUT\">DIGITAL_OUTPUT</option><option value=\"PWM\">PWM</option><option value=\"ANALOG\">ANALOG</option></select></form></section>");
        $("tbody").append("<tr><th><input class=\"pin-field\" type=\"text\"></th><th><input class=\"pin-name-field\" type=\"text\"></th><th><label for=\"type\"></label><select name=\"type\" id=\"type\" class=\"type\"><option value=\"DIGITAL_INPUT\">DIGITAL_INPUT</option><option value=\"DIGITAL_OUTPUT\">DIGITAL_OUTPUT</option><option value=\"PWM\">PWM</option><option value=\"ANALOG\">ANALOG</option></select></th></tr>");
        n++;
    });
    $("#subtract").on('click',function(){
        n--;
    });
    $("#clr").on('click',function(){
        $("tbody").empty();
        n = 0;
    });


    $("#register-form").submit(function(ev){
        ev.preventDefault();
        let name = $("#name-field").val();
        let registerInfo = {
            "name": name,
            "pinConfig": []
        }
        
        for(let i=0;i<n;i++){
            let pin = $(".pin-field")[i].value;
            let pinName = $(".pin-name-field")[i].value;
            let type = $(".type")[i].value;
            //let tpe = type.options[type.selectedIndex];
            console.log(pin + " " + pinName + " " + type);
            registerInfo.pinConfig.push({
                "pin": pin,
                "pname": pinName,
                "type": type
            });
        }
        let str = JSON.stringify(registerInfo);
        console.log(JSON.stringify(registerInfo));
        $.ajax({
            url: "http://localhost:3000/devices",
            method: "POST",
            dataType: "json",
            contentType: 'application/json',
            data: str,
            success: function(res){
                console.log(res);
            }
        });
        
        
        //alert(name);

    })


});
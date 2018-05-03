$(document).ready(function() {

    $("#btn").click(function(){
        var firstDate = new Date($('#startd').val()); // Todays date
        var secondDate = new Date($('#endd').val());
        var nmb = $('#energy').val();
        var diffy = (Math.abs(firstDate.getYear() - secondDate.getYear()) * 365);
        var diffm = (Math.abs(firstDate.getMonth() - secondDate.getMonth()) * 30);
        var diffd = Math.abs(firstDate.getDate() - secondDate.getDate());
        var diffDays = diffy + diffm + diffd;
        var day = parseFloat(diffDays);
        
        if ($("input[name='optradio']:checked").val() == "on") {
        var RashodNorm = (day * 32.8767);
        var Itog;
        
        if (nmb > RashodNorm) {
            Itog = RashodNorm * 0.77 + (nmb - RashodNorm) * 2.16;
        } else {
            Itog = nmb * 0.77;
        }
            
        } else {
        var RashodNorm = (day * 23.0137);
        var Itog;
        
        if (nmb > RashodNorm) {
            Itog = RashodNorm * 0.77 + (nmb - RashodNorm) * 2.16;
        } else {
            Itog = nmb * 0.77;
        }
        }
        
        alert("Ваш счет: " + Itog + " сом.");
    });




       $("#btnGaz").click(function(){
        var nmb = $("#PGaz").val();
        
        if ($('input[name="optradio"]:checked', '#PotrebitelGaz').val() == "Naselenie") {
            var Itog = nmb * 14.48;
        } else {
            var Itog = nmb * 17.75;
        }
        
        alert("Ваш счет: " + Itog + " сом.");
    });
   


   $("#btnHW").click(function(){
        var nmb = $("#hwater").val();
        
        if ($('input[name="optradio"]:checked', '#PotrebitelW').val() == "Naselenie") {
            var Itog = nmb * 64.38;
        } else {
            var Itog = nmb * 97.19;
        }
        
        alert("Ваш счет: " + Itog + " сом.");
    });
    
    


   $("#btnGk").click(function(){
        var nmb = $("#Gkwater").val();
        
        if ($('input[name="optradio"]:checked', '#PotrebitelGK').val() == "Naselenie") {
            var Itog = nmb * 981.76;
        } else {
            var Itog = nmb * 1695.1;
        }
        
        alert("Ваш счет: " + Itog + " сом.");
    });
    
   $("#btnH").click(function(){
        var nmb = $("#Human").val();
        var Itog = nmb * 309.03;
        
        alert("Ваш счет: " + Itog + " сомов за месяц");
    });
        
    
   $("#btnO").click(function(){
        var nmb = $("#otoplenie").val();
        
        if ($('input[name="optradio"]:checked', '#PotrebitelO').val() == "Naselenie") {
            var Itog = nmb * 1134.76;
        } else {
            var Itog = nmb * 1695.1;
        }
        
        alert("Ваш счет: " + Itog + " сом.");
    });
    
    


    
    

    
    
});

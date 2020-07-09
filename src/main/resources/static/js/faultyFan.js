$(document).ready(function(){
    var timeOut = 10;
    var setTimeoutFxn;
    $('#sectionNaming').hide();
    $('#verticalsContainer').hide();
    
    function stopFan(){
        clearTimeout(setTimeoutFxn);
        // console.log(setTimeoutFxn)
    }

    function onClickNXtBtn(){
        $('#sectionNaming').show();
        $('#verticalsContainer').show();
        $('#nxtBtnDivID').hide();
    }
    function fetchAlertDetails(comp){
        $.ajax({
            url: "http://localhost:8080/hackelite/alert/"+comp.data+"/", 
            success: function(result){
                notiMsg = "";
                for(var i=0; i < result.length; i++){
                    notiMsg = notiMsg+result[i].notificationMessage+"</br>";
                    switch (result[i].responseCode) { 
                        case 1: 
                            $('#'+result[i].zoneName).css("background", "#e7d195");
                            $('#notificationDivID').css("background", '#e7d195');
                            $('#'+result[i].zoneName+'Image').addClass("rotate2");
                            break;
                        case 2: 
                            $('#'+result[i].zoneName).css("background", "#FFD700");
                            $('#notificationDivID').css("background", "#FFD700");
                            $('#'+result[i].zoneName+'Image').addClass("rotate1");
                            break;
                        case 3: 
                            $('#'+result[i].zoneName).css("background", '#B8860B');
                            $('#notificationDivID').css("background", '#B8860B');
                            $('#'+result[i].zoneName+'Image').addClass("rotate08");
                            break;	
                        case 4: 
                            $('#'+result[i].zoneName).css("background", '#FF8C00');
                            $('#notificationDivID').css("background", '#FF8C00');
                            $('#'+result[i].zoneName+'Image').addClass("rotate05");
                            break;
                        case 5: 
                            $('#'+result[i].zoneName).css("background", '#8B0000');
                            $('#notificationDivID').css("background", '#8B0000');
                            $('#'+result[i].zoneName+'Image').addClass("rotate02");
                            break;
                        case 5: 
                            $('#'+result[i].zoneName).css("background", '#8B0000');
                            $('#notificationDivID').css("background", '#8B0000');
                            $('#'+result[i].zoneName+'Image').addClass("rotate02");
                            break;
                        default:
                            $('#'+result[i].zoneName).css("background", "none");
                            $('#notificationDivID').css("background", "none");
                            $('#'+result[i].zoneName+'Image').addClass("rotate");
                    }
                    
                   
                }
                $("#notificationDivID").html(notiMsg)
                $("#notificationDivID").slideDown(4000, function(){
                    $("#notificationDivID").fadeOut(2000);
                });
               
          }});
        
    }
    $('#nxtBtnID').click(onClickNXtBtn);
    $('#componentAID').click(['ComponentA'], fetchAlertDetails);
    $('#componentBID').click(['ComponentB'], fetchAlertDetails);
    $('#componentCID').click(['ComponentC'], fetchAlertDetails);
    $('#componentDID').click(['ComponentD'], fetchAlertDetails);
    $('#componentEID').click(['ComponentE'], fetchAlertDetails);
    $('#componentFID').click(['ComponentF'], fetchAlertDetails);
    $('#componentGID').click(['ComponentG'], fetchAlertDetails);
    $('#componentHID').click(['ComponentH'], fetchAlertDetails);
    $('#componentIID').click(['ComponentI'], fetchAlertDetails);
    
    // $('#NetLanID').click(stopFan);
});

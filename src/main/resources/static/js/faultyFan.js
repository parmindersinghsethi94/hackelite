$(document).ready(function(){
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
        $('.connectorsDiv span').css('display','block');
    }
    function fetchAlertDetails(comp){
        $("#notificationDivID").empty();
        $("#notificationDivID").fadeOut(500);
        setTimeout(function() {
            $.ajax({
                url: "http://localhost:8080/hackelite/alert/"+comp.data+"/", 
                success: function(result){
                
                    var respCode = 0;
                    for(var i=0; i < result.length; i++){
                        var notiMsg = "";
                        notiMsg = result[i].notificationMessage;
                        if(result[i].responseCode > 5){
                            respCode = 5;
                        }else{
                            respCode = result[i].responseCode;
                        }
                        var divElement = "<div id="+result[i].zoneName+"NotiMsg class='notificationClass'>"+notiMsg+"</div>"
                        $("#notificationDivID").append(divElement);
                        $("#notificationDivID").slideDown(700);
                        switch (respCode) { 
                            case 0: 
                                $('#'+result[i].zoneName).css("background", "#e7d195");
                                $('#'+result[i].zoneName+'NotiMsg').css("background", '#e7d195');
                                $('#'+result[i].zoneName+'Image').addClass("rotate2");
                                break;
                            case 1: 
                                $('#'+result[i].zoneName).css("background", "#FFD700");
                                $('#'+result[i].zoneName+'NotiMsg').css("background", "#FFD700");
                                $('#'+result[i].zoneName+'Image').addClass("rotate1");
                                break;
                            case 2: 
                                $('#'+result[i].zoneName).css("background", '#B8860B');
                                $('#'+result[i].zoneName+'NotiMsg').css("background", '#B8860B');
                                $('#'+result[i].zoneName+'Image').addClass("rotate08");
                                break;	
                            case 3: 
                                $('#'+result[i].zoneName).css("background", '#FF8C00');
                                $('#'+result[i].zoneName+'NotiMsg').css("background", '#FF8C00');
                                $('#'+result[i].zoneName+'Image').addClass("rotate05");
                                break;
                            case 4: 
                                $('#'+result[i].zoneName).css("background", '#8B0000');
                                $('#'+result[i].zoneName+'NotiMsg').css("background", '#8B0000');
                                $('#'+result[i].zoneName+'Image').addClass("rotate02");
                                break;
                            case 5: 
                                $('#'+result[i].zoneName).css("background", '#8B0000');
                                $('#'+result[i].zoneName+'NotiMsg').css("background", '#8B0000');
                                $('#'+result[i].zoneName+'Image').addClass("rotate02");
                                break;
                            default:
                                $('#'+result[i].zoneName).css("background", "none");
                                $('#'+result[i].zoneName+'NotiMsg').css("background", "none");
                                $('#'+result[i].zoneName+'Image').addClass("rotate");
                        }
                        
                    
                    }
                        
            }})
        }, 0) ;
        
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
    
});

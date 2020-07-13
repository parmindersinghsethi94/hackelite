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
        $('#nxtBtnID').hide();
        $('.connectorsDiv span').css('display','block');
        $('#soluBtnID').css('display','block');
    }
    function onClickSolBtn(){
        $('#soluBtnID').hide();
        $('#notificationDivID').hide();
        $('#componentAID').hide();
        $('#componentBID').hide();
        $('#componentCID').hide();
        $('#componentDID').hide();
        $('#componentEID').hide();
        $('#componentFID').hide();
        $('#componentGID').hide();
        $('#componentHID').hide();
        $('#componentIID').hide();

        $('#componentASolID').show();
        $('#componentBSolID').show();
        $('#componentCSolID').show();
        $('#componentDSolID').show();
        $('#componentESolID').show();
        $('#componentFSolID').show();
        $('#componentGSolID').show();
        $('#componentHSolID').show();
        $('#componentISolID').show();
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
                                // $('#'+result[i].zoneName+'Image').addClass("rotate2");
                                break;
                            case 1: 
                                $('#'+result[i].zoneName).css("background", "#FFD700");
                                $('#'+result[i].zoneName+'NotiMsg').css("background", "#FFD700");
                                // $('#'+result[i].zoneName+'Image').addClass("rotate1");
                                break;
                            case 2: 
                                $('#'+result[i].zoneName).css("background", '#B8860B');
                                $('#'+result[i].zoneName+'NotiMsg').css("background", '#B8860B');
                                // $('#'+result[i].zoneName+'Image').addClass("rotate08");
                                break;	
                            case 3: 
                                $('#'+result[i].zoneName).css("background", '#FF8C00');
                                $('#'+result[i].zoneName+'NotiMsg').css("background", '#FF8C00');
                                // $('#'+result[i].zoneName+'Image').addClass("rotate05");
                                break;
                            case 4: 
                                $('#'+result[i].zoneName).css("background", '#8B0000');
                                $('#'+result[i].zoneName+'NotiMsg').css("background", '#8B0000');
                                // $('#'+result[i].zoneName+'Image').addClass("rotate02");
                                break;
                            case 5: 
                                $('#'+result[i].zoneName).css("background", '#8B0000');
                                $('#'+result[i].zoneName+'NotiMsg').css("background", '#8B0000');
                                // $('#'+result[i].zoneName+'Image').addClass("rotate02");
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
    function showFanSolution(zoneID){
       var backGroundColor = $('#'+zoneID.data).css( "background-color" )
        switch (backGroundColor) { 
            case 'rgb(231, 209, 149)':
                $('#'+zoneID.data+'Image').addClass("rotate2");
                break;
            case 'rgb(255, 215, 0)':
                $('#'+zoneID.data+'Image').addClass("rotate1");
                break;
            case 'rgb(184, 134, 11)':
                $('#'+zoneID.data+'Image').addClass("rotate08");
                break;
            case 'rgb(255, 140, 0)': 
                $('#'+zoneID.data+'Image').addClass("rotate05");
                break;
            case 'rgb(139, 0, 0)': 
                $('#'+zoneID.data+'Image').addClass("rotate02");
                break;
            default:
                $('#'+zoneID.data+'Image').addClass("rotate");
        }
    }
    $('#nxtBtnID').click(onClickNXtBtn);
    $('#soluBtnID').click(onClickSolBtn);
    $('#componentAID').click(['ComponentA'], fetchAlertDetails);
    $('#componentBID').click(['ComponentB'], fetchAlertDetails);
    $('#componentCID').click(['ComponentC'], fetchAlertDetails);
    $('#componentDID').click(['ComponentD'], fetchAlertDetails);
    $('#componentEID').click(['ComponentE'], fetchAlertDetails);
    $('#componentFID').click(['ComponentF'], fetchAlertDetails);
    $('#componentGID').click(['ComponentG'], fetchAlertDetails);
    $('#componentHID').click(['ComponentH'], fetchAlertDetails);
    $('#componentIID').click(['ComponentI'], fetchAlertDetails);
    $('#componentIID').click(['ComponentI'], fetchAlertDetails);
   
    $('#componentASolID').click(['zone1'],showFanSolution);
    $('#componentBSolID').click(['zone1'],showFanSolution);
    $('#componentCSolID').click(['zone2'],showFanSolution);
    $('#componentDSolID').click(['zone2'],showFanSolution);
    $('#componentESolID').click(['zone2'],showFanSolution);
    $('#componentFSolID').click(['zone3'],showFanSolution);
    $('#componentGSolID').click(['zone3'],showFanSolution);
    $('#componentHSolID').click(['zone4'],showFanSolution);
    $('#componentISolID').click(['zone4'],showFanSolution);
    

});

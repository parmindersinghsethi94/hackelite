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
        $('.verticalLine').css('display','block');
        
    }
    function onClickSolBtn(){
        $('#headerTextID').text('Predictive analysis of Server-HDD over-heating repercussions and Remedial by mutating Fan Speed');
        $('#zone1Image').removeClass("rotate02");
        $('#zone2Image').removeClass("rotate02");
        $('#zone3Image').removeClass("rotate02");
        $('#zone4Image').removeClass("rotate02");

        $('#zone1Image').addClass("rotate");
        $('#zone2Image').addClass("rotate");
        $('#zone3Image').addClass("rotate");
        $('#zone4Image').addClass("rotate");

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

        $('#zone4').css("background", "none");
        $('#zone3').css("background", "none");
        $('#zone2').css("background", "none");
        $('#zone1').css("background", "none");

        $('#backBtnID').show();
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
                                break;
                            case 1: 
                                $('#'+result[i].zoneName).css("background", "#FFD700");
                                $('#'+result[i].zoneName+'NotiMsg').css("background", "#FFD700");
                                break;
                            case 2: 
                                $('#'+result[i].zoneName).css("background", '#B8860B');
                                $('#'+result[i].zoneName+'NotiMsg').css("background", '#B8860B');
                                break;	
                            case 3: 
                                $('#'+result[i].zoneName).css("background", '#FF8C00');
                                $('#'+result[i].zoneName+'NotiMsg').css("background", '#FF8C00');
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
    var counter = 0;
    var solNotiMsg = "";
    function increaseFanSpeed(counter,zoneID){
        switch (counter){
            case 0:
                solNotiMsg = "We have received an alert from the 'Non-volatile Storage' component.";
                var divElement = "<div id="+zoneID.data+"NotiMsg class='notificationClass'>"+solNotiMsg+"</div>"
                $("#notificationDivID").append(divElement);
                $("#notificationDivID").slideDown(700);
                counter++;
                setTimeout(function(){ increaseFanSpeed(counter,zoneID) }, 3000);
                break;
            case 1:
                solNotiMsg = "Based on our prior learning, we know that this will cause in increase in temperature in Zone 4";
                var divElement = "<div id="+zoneID.data+"NotiMsg class='notificationClass'>"+solNotiMsg+"</div>"
                $("#notificationDivID").append(divElement);
                $("#notificationDivID").slideDown(700);
                counter++;
                setTimeout(function(){ increaseFanSpeed(counter,zoneID) }, 3000);
                break;
            case 2:
                solNotiMsg = "We will proactively increase the speed of the fan in Zone 4 ";
                var divElement = "<div id="+zoneID.data+"NotiMsg class='notificationClass'>"+solNotiMsg+"</div>"
                $("#notificationDivID").append(divElement);
                $("#notificationDivID").slideDown(700);
                $('#'+zoneID.data+'Image').addClass("rotate08");
                counter++;
                setTimeout(function(){ increaseFanSpeed(counter,zoneID) }, 3000);
                break;
            case 3:
                solNotiMsg = "After increasing the speed, our solution determined, that could still cause overheating and so, we will proactively further increase the fan speed.";
                var divElement = "<div id="+zoneID.data+"NotiMsg class='notificationClass'>"+solNotiMsg+"</div>"
                $("#notificationDivID").append(divElement);
                $("#notificationDivID").slideDown(700);
                $('#'+zoneID.data+'Image').addClass("rotate02");
                break;
            default:
                counter = 0;  
        }
    }
    function showFanSolution(zoneID){
        $("#notificationDivID").empty();
        $("#notificationDivID").fadeOut(500);
        counter = 0;
        increaseFanSpeed(counter,zoneID)
     }
    function onClickBackBtn(){
        $('#headerTextID').text('Predictive analysis of Server-HDD over-heating repercussions');
        $('#zone4Image').removeClass("rotate02");
        $('#zone4Image').removeClass("rotate08");
        $('#zone4Image').addClass("rotate");
        $('#soluBtnID').show();
       
        $('#componentAID').show();
        $('#componentBID').show();
        $('#componentCID').show();
        $('#componentDID').show();
        $('#componentEID').show();
        $('#componentFID').show();
        $('#componentGID').show();
        $('#componentHID').show();
        $('#componentIID').show();

        $('#backBtnID').hide();
        $('#notificationDivID').hide();
        $('#componentASolID').hide();
        $('#componentBSolID').hide();
        $('#componentCSolID').hide();
        $('#componentDSolID').hide();
        $('#componentESolID').hide();
        $('#componentFSolID').hide();
        $('#componentGSolID').hide();
        $('#componentHSolID').hide();
        $('#componentISolID').hide();
    }

    $('#nxtBtnID').click(onClickNXtBtn);
    $('#soluBtnID').click(onClickSolBtn);
    $('#backBtnID').click(onClickBackBtn);
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
   
    $('#componentHSolID').click(['zone4'],showFanSolution);
    $('#componentISolID').click(['zone4'],showFanSolution);
    

});

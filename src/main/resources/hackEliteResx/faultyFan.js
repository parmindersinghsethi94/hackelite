$(document).ready(function(){
    var timeOut = 10;
    var setTimeoutFxn;
    $('#sectionNaming').hide();
    $('#verticalsContainer').hide();
    // $('#nxtBtnID').hide();
    function runFan(degree, FanID){
        var rotate = "rotate(" + degree + "deg)";
            var trans = "all 0.03s ease-out";
            $("#"+FanID).css({
                "-webkit-transform": rotate,
                "-moz-transform": rotate,
                "-o-transform": rotate,
                "msTransform": rotate,
                "transform": rotate,
                "-webkit-transition": trans,
                "-moz-transition": trans,
                "-o-transition": trans,
                "transition": trans
            });
            
            setTimeoutFxn =setTimeout(function() { runFan(++degree, FanID); },timeOut);
            // console.log(degree)
            // if(degree > 360){
            //     clearTimeout(setTimeoutFxn);
            //     degree = 0;
            // }
    
    }
    runFan(45, "sec1Image");
    runFan(45, "sec2Image");
    runFan(45, "sec3Image");
    runFan(45, "sec4Image");
    function stopFan(){
        clearTimeout(setTimeoutFxn);
        console.log(setTimeoutFxn)
    }

    function onClickNXtBtn(){
        $('#sectionNaming').show();
        $('#verticalsContainer').show();
        $('#nxtBtnDivID').hide();
    }
    function lanConnBtnClick(){
		alert('clicked');
		
	 $.ajax({
            url: "http://localhost:8080/alert/11/123/",
			// headers: {
				// 'access-control-allow-origin value':'*' 
			// }
				
			 // beforeSend: function(xhr) {
				// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
			  // }
        }).then(function(data) {
		   alert(data);
          
        });
    }
    $('#nxtBtnID').click(onClickNXtBtn);
    $('#lanConBtnID').click(lanConnBtnClick);
    $('#NetLanID').click(stopFan);

});
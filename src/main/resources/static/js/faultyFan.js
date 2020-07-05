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
        // alert("to make ajax call")
        // $.post("demo_test_post.asp",
        // {
        //     name: "Donald Duck",
        //     city: "Duckburg"
        // },
        // function(data, status){
        //     alert("Data: " + data + "\nStatus: " + status);
        // });
        $.ajax({
            url: "http://rest-service.guides.spring.io/greeting"
        }).then(function(data) {
           $('.greeting-id').append(data.id);
           $('.greeting-content').append(data.content);
           alert("to make ajax call");
        });
    }
    $('#nxtBtnID').click(onClickNXtBtn);
    $('#lanConBtnID').click(lanConnBtnClick);
    $('#NetLanID').click(stopFan);

});

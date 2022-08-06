$(document).ready(function(){

    $('.typelinks').click(function(){
        // for filter
        $('.filters img').css('width','130px');

        let getattvalue=$(this).attr("data-filter");
        console.log(getattvalue);

        switch(getattvalue){
            case "bus":
                $(".filters").not('.bus').hide();
                $(".bus").show();
            break;
            case "air":
                $(".filters").not('.air').hide();
                $(".air").show();
            break;
            case "train":
                $(".filters").not('.train').hide();
                $(".train").show();
            break;
        }
    });
});
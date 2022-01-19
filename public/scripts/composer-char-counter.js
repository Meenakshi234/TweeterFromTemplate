$(document).ready(function(){
    
    let counter = 140;
       
    $("#form__textarea").on('keyup',function(event){
        let txtVal = $(this).val().length;
        let updatedCounter = counter - txtVal;
        $("#form__counter").text(updatedCounter);
        if(txtVal > counter){
           $(".form__counter").css({'color':'red'});
        }else{
            $(".form__counter").css({'color':'black'});
        }
        
    });
    
});
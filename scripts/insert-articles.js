(function() {

    document.addEventListener('DOMContentLoaded', function() {
        $('.section-ajax').each(function(){
            var documentId = $(this).attr('data-documentId'); 
            $(this).load("./articles/" + documentId + ".txt");
        });
    });
    
}());

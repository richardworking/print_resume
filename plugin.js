(function($){
$.fn.myPlugin = function(){
    
        var print_window = window.open(); // create a new window
        var list_title = "<h1 style='font-size: 16px; color: black'>List:</h1>" // try just writing style right here. 
        print_window.document.write(list_title);

      
        $('label').each(function(){
            var notes = $(this).text(); 
            print_window.document.write("<ul style = 'font-size= 14px; color: black'>" + notes + "</ul>" + '<br>');
        
            });
         
      
        print_window.print();
        print_window.close(); 
   
    
}

})(jQuery);
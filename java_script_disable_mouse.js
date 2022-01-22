jQuery(document).ready(function(){
  jQuery(function() {
        jQuery(this).bind("contextmenu", function(event) {
            event.preventDefault();
            alert('Right click disable in this site!!')
        });
    });
});
  //with great power comes great responsibility//
  //JavaScript is great but mitigating XSS attacks is your responsibility//
  //UBGenC{Console_JS}

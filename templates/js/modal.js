(function($) {  // beginning jquery function

    // Add Modal to Page
    $.get("https://cdn.jsdelivr.net/gh/iamharlan/dtod-modal-standalone@1/templates/modal.html", function(data){
        $("body").append(data);

        // Apply Variables for Theme    
        if (pc_theme == 'dark') {
            $('#pc_modal').addClass('dark');
            $('#pc_modal .logo').attr("src", "https://cdn.jsdelivr.net/gh/iamharlan/dtod-modal-standalone@1/templates/img/dtod_logo_light.png");
        } else if(pc_theme == 'light') {
            $('#pc_modal').addClass('light');
            $('#pc_modal .logo').attr("src", "https://cdn.jsdelivr.net/gh/iamharlan/dtod-modal-standalone@1/templates/img/dtod_logo_dark.png");
        } 

        // Save Exit intent listener for possible use later
        function addEvent(obj, evt, fn) {
            if (obj.addEventListener) {
                obj.addEventListener(evt, fn, false);
            }
            else if (obj.attachEvent) {
                obj.attachEvent("on" + evt, fn);
            }
        }

        // Modal Deployment
        var visited = $.cookie('visited');
        if (visited == 'yes') {
            return false;
        } else if(pc_type == 'exitintent') {
            addEvent(document, 'mouseout', function(evt) {
              if (evt.toElement === null && evt.relatedTarget === null && !localStorage.getItem('pc_modal_cookie')) {
                $('#pc_modal').fadeIn();
                $('.modalmask').fadeIn();
                localStorage.setItem('pc_modal_cookie', 'true'); // Creates browser session cookie in localStorage so modal doesn't repeat
              }
            });

        } else if(pc_type == 'timer') {

            var timercount = pc_timer * 1000;

            setTimeout(function() {
                $('#pc_modal').fadeIn();
                $('.modalmask').fadeIn();
                localStorage.setItem('pc_modal_cookie', 'true'); // Creates browser session cookie in localStorage so modal doesn't repeat
            }, timercount);            
        }
        // Cookie Expires every 5 Days
        $.cookie('visited', 'yes', { expires: 5, path: '/' });

        // Test if session cookie is enabled
        // if("pc_modal_cookie" in localStorage){
        //    alert('YES, Cookie is in LocalStorage');
        // } else {
        //    alert('NO, Cookie is not in LocalStorage');
        // }

        // Closing the Popup Box
        $('.close_modal, .modalmask').click(function() {
          $('#pc_modal').fadeOut();
          $('.modalmask').fadeOut();
        });

    });

})( jQuery );  // End of jquery function
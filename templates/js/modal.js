(function($) {  // beginning jquery function

    // Add Modal to Page

        $.get("https://cdn.jsdelivr.net/gh/iamharlan/dtod-modal-standalone@1/templates/modal.html", function(data){
            $("body").append(data);

            // Apply Variables for Theme    
            if (pc_theme == 'dark') {
                $('#pc_modal').addClass('dark');
                $('#pc_modal .logo').attr("src", "https://cdn.jsdelivr.net/gh/iamharlan/dtod-modal-standalone@1/templates/img/dtod_logo_light.png");
                $('#pc_modal .step1').attr("src", "https://cdn.jsdelivr.net/gh/iamharlan/dtod-modal-standalone@1/templates/img/step1_light.png");
                $('#pc_modal .step2').attr("src", "https://cdn.jsdelivr.net/gh/iamharlan/dtod-modal-standalone@1/templates/img/step2_light.png");
                $('#pc_modal .step3').attr("src", "https://cdn.jsdelivr.net/gh/iamharlan/dtod-modal-standalone@1/templates/img/step3_light.png");
            } else if(pc_theme == 'light') {
                $('#pc_modal').addClass('light');
                $('#pc_modal .logo').attr("src", "https://cdn.jsdelivr.net/gh/iamharlan/dtod-modal-standalone@1/templates/img/dtod_logo_dark.png");
                $('#pc_modal .step1').attr("src", "https://cdn.jsdelivr.net/gh/iamharlan/dtod-modal-standalone@1/templates/img/step1_dark.png");
                $('#pc_modal .step2').attr("src", "https://cdn.jsdelivr.net/gh/iamharlan/dtod-modal-standalone@1/templates/img/step2_dark.png");
                $('#pc_modal .step3').attr("src", "https://cdn.jsdelivr.net/gh/iamharlan/dtod-modal-standalone@1/templates/img/step3_dark.png");
            } 

            if (pc_modalactivation == 'enabled') {

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
                        // localStorage.setItem('pc_modal_cookie', 'true'); // Creates browser session cookie in localStorage so modal doesn't repeat
                    }, timercount);
                }
                // Cookie Expires every 1 Hour
                var inOneHour = 1/24;
                $.cookie('visited', 'yes', { expires: inOneHour, path: '/' });

                // Test if session cookie is enabled
                // if("pc_modal_cookie" in localStorage){
                //    alert('YES, Cookie is in LocalStorage');
                // } else {
                //    alert('NO, Cookie is not in LocalStorage');
                // }

            }        

            // Closing the Popup Box
            $('.close_modal, .modalmask').click(function() {
              $('#pc_modal').fadeOut();
              $('.modalmask').fadeOut();
            });

        });

    // Add Sticky Button to Page
    if (pc_stickybutton == 'enabled') {

        $.get("https://cdn.jsdelivr.net/gh/iamharlan/dtod-modal-standalone@1/templates/stickybutton.html", function(sbdata){
            $("body").append(sbdata);

            // Apply Variables for Theme    
            if (pc_theme == 'dark') {
                $('#pc_stickybutton').addClass('dark');
            } else if(pc_theme == 'light') {
                $('#pc_stickybutton').addClass('light');
            } 

            // Apply Variables for Button Position    
            if (pc_stickybuttonposition == 'left') {
                $('#pc_stickybutton').addClass('bottomleft');
            } else if(pc_stickybuttonposition == 'right') {
                $('#pc_stickybutton').addClass('bottomright');
            } 

            // Open the Popup Modal with the Sticky Button
            $('#pc_openmodal').click(function() {
              $('#pc_modal').fadeIn();
              $('.modalmask').fadeIn();
            });

            // Closing the Sticky Button
            $('.close_stickybutton').click(function() {
              $('#pc_stickybutton').fadeOut();
            });

        });
    }

})( jQuery );  // End of jquery function
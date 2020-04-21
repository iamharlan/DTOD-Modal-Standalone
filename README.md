# DTOD-Modal
Drive-Thru on Demand Modal

This script is managed by Paradigm Creative for the use of Drive-Thru on Demand customers and clients. The script creates a custom modal to feature their partnership with DTOD

This script is a simplified version of the DTOD Modal Wordpress plugin also available to DTOD customers. This version uses default settings. 

For questions on this script, please contact the developer at help@paradigmcreative.com

------

Installation Instructions

1. Copy the entire script snippet provided below, including begin and end tags:

```
<!-- Begin DTOD Modal Script -->
<script type="text/javascript">
	// Options Available
	var pc_theme = "dark"; // Theme is "dark" by default. Change to "light" for light theme.
	var pc_type = "timer"; // Modal is timer by default. Change to "exitintent" for deploy on mouseout.
	var pc_timer = 5; // Time after page load until popup deploys in seconds. 5 is default.
</script>
<script src="http://code.jquery.com/jquery-1.6.4.min.js" type="text/javascript"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/iamharlan/dtod-modal-standalone@1/templates/js/modal.js"></script>
<style src="https://cdn.jsdelivr.net/gh/iamharlan/dtod-modal-standalone@1/templates/css/modal.css"></style>
<script type="text/javascript">function pc_modal(){var a=$("body");$.get("https://cdn.jsdelivr.net/gh/iamharlan/dtod-modal-standalone@1/templates/modal.html",function(t){for(var d=0;d<data.length;d++)a.append($(t))})}</script>
<!-- End DTOD Modal Script -->
```

2. Paste the entire script snippet into the footer of your website, just above the ```<body>``` tag.

3. The snippet uses the light theme by default. You can change this in the snippet where indicated.
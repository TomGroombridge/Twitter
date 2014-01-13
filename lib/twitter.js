			$(document).ready(function(){
				$('.dropdown-toggle').dropdown();
			})

			function countChar(val) {
	        var len = val.value.length;
	        if (len >= 140) {
	          val.value = val.value.substring(0, 140);
	        } else {
	          $('#charNum').text(140 - len);
	        }
	      };

	      !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
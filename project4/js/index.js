$(document).ready(function() {
	$('#Main').fullpage({

        anchors:['first', 'second', 'third'],
        
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            
            if(anchorLink == 'first'){
                firstAnimation();
            }

            if(anchorLink == 'second'){
                secondAnimation();
            }
            
            if(anchorLink == 'third'){
                thirdAnimation();
            }
        },
        
	});
});

// Animations for Microsoft's Xbox One Page

var imageOne = $('.area .imageOne');

var firstAnimation = (function() {
    
    setTimeout(function() { 
        imageOne.addClass('visible'); 
    }, 200);
});

// Animations for Sony's PS4 Page

var imageTwo = $('.area .imageTwo');

var secondAnimation = (function() {
    
    setTimeout(function() { 
        imageTwo.addClass('visible'); 
    }, 200);
});

// Animations for Nintendo's Switch Page

var imageThree = $('.area .imageThree');

var thirdAnimation = (function() {
    
   setTimeout(function() { 
        imageThree.addClass('visible'); 
    }, 200);
});







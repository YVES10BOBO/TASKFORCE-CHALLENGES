
document.addEventListener("DOMContentLoaded", function(){// waituntil the dom is fully loaded

    const image = document.querySelectorAll('.image-gallery img'); // line to select all images within the image gallery
    image.forEach(image => {  // i make loop through on each images
        image.addEventListener('mouseover', () =>{
            image.style.opacity = '0.05'; // change of opacity to 0.05 when mouser is over the image
            image.style.zIndex = '1';// zIndex styles for bring image to front
            image.style.transform = 'scale(1.3)';// scales the image to 1.3 times its original size 
        });
        // add of a 'mouseout' event listerner to each image 
        image.addEventListener('mouseout', () =>{
            image.style.opacity = '0.8'; // reseting the opacity to back 0.8 when mouse is no longer over the image
            image.style.zIndex = '0';// styles for send the original image to the back
            image.style.transform = 'scale(1)'; //reset image to the back with original size

        });
    });

});
/*
[Page]

   Folio

by egg.design //

    + basic html and css knowledge is required to customize this page
    + this code belongs to egg.design. While it is free to use, it is not
    + free to sell or otherwise redistribute
    + feel free to edit and custom the theme to your liking,
    but don't use as a base, remove the credit, or claim as your own.
    + instructions are available throughout the code for easier editing

Credits
    + icon fonts from font awesome

edits made by Sarah Park
    + created separate Javascript and stylesheet files

Version 1.00
*/

$(document).ready(function(){
   $('#one').click(function(){
      $('#one .preview').toggleClass('gallery');
   });
     $('#two').click(function(){
      $('#two .preview').toggleClass('gallery');
   });
     $('#three').click(function(){
      $('#three .preview').toggleClass('gallery');
   });
   $(".collapse").click(function() {
     $(".hide").toggle();
   });
});

import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        showImagePreview: function() {
            var $imagePreview = this.$("#imagePreview");
            var $fileUpload = this.$("#fileUpload");

            var files = $fileUpload[0].files ? $fileUpload[0].files : [];
            if (!files.length || !window.FileReader) {return;} // no file selected, or no FileReader support

            if (/^image/.test( files[0].type)){ // only image file
                var reader = new FileReader(); // instance of the FileReader
                reader.onload = function(e){ // set image data as background of div
                    $imagePreview.attr('src', e.target.result);
                };
                reader.readAsDataURL(files[0]); // read the local file
            }
            else{
                //Throw error if the type is not image
            }
        }
    }
});

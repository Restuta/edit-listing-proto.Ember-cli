import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        showHidePicker: function(){
            console.log('showhidepicker');
            this.$(".listPickerTrigger").first().popover();
        }
    }
});

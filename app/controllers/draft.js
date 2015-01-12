import Ember from 'ember';

export default Ember.ObjectController.extend({
    ourFee: function() {
        return (this.get('model.minuteRate') * 0.3).toFixed(2);
    }.property('model.minuteRate'),

    youWillEarn: function() {
        return (this.get('model.minuteRate') - this.get('ourFee')).toFixed(2);
    }.property('model.minuteRate'),

    selectedFirstLevelCategoryId: 195,
    selectedSecondLevelCategoryId: 0,
    selectedThirdLevelCategoryId: 0,

    //todo: temporary props for the component testing should be part of the model
    skills: function(){
        return ['Medium','Clairvoyant'];
    }.property(),

    specializations: function(){
        return ['Unexpected disaster','Love problems'];
    }.property(),

    languages: function(){
        return ['English','Ukrainian','Sanskrit', 'French','Latin'];
    }.property(),



    firstLevelCategory: function() {
        var listingCategories = this.get('listingCategories');

        return listingCategories
            ? listingCategories.filterBy('parentId', 1)
            : [];
    }.property(),

    secondLevelCategory: function() {
        var listingCategories = this.get('listingCategories');
        var secondLevelCategories = listingCategories
            ? listingCategories.filterBy('parentId', this.get('selectedFirstLevelCategoryId'))
            : [];

        if (secondLevelCategories.length > 0) {
            this.set('selectedSecondLevelCategoryId', secondLevelCategories[0].id);
        }

        return secondLevelCategories;
    }.property('selectedFirstLevelCategoryId'),

    thirdLevelCategory: function() {
        var listingCategories = this.get('listingCategories');
        var thirdLevelCategories = listingCategories
            ? listingCategories.filterBy('parentId', this.get('selectedSecondLevelCategoryId'))
            : [];

        if (thirdLevelCategories.length > 0) {
            this.set('selectedThirdLevelCategoryId', thirdLevelCategories[0].id);
        }

        return thirdLevelCategories;
    }.property('selectedSecondLevelCategoryId'),

    actions: {
        save: function() {
            this.get('model').save();
        }
    }
});

import Ember from 'ember';

export default Ember.Route.extend({

    loadListingCategories: Ember.$.getJSON('http://localhost:3008/listingCategories-flat'),
    loadSpecializations: Ember.$.getJSON('http://localhost:3008/specializations'),
    loadSkills: Ember.$.getJSON('http://localhost:3008/skills'),
    loadLanguages: Ember.$.getJSON('http://localhost:3008/languages'),

    //todo: fetching of the model by id is a default thing in Ember
    model: function(params) {
        var self = this;

        //loading mode land additional data in parallel
        var promises = {
            model: this.store.find('draft', params.draft_id).then(function(model) {
                console.log('loaded model');
                return model;
            }),
            listingCategories: self.loadListingCategories.then(function(data) {
                console.log('loaded listing categories');
                return data.listingCategories;
            }),
            specializationList: self.loadSpecializations.then(function(data) {
                console.log('loaded specialization list');
                return data.specializations;
            }),
            skillList: self.loadSkills.then(function(data) {
                console.log('loaded skill list');
                return data.skills;
            }),
            languageList: self.loadLanguages.then(function(data) {
                console.log('loaded language list');
                return data.languages;
            })
        };

        return Ember.RSVP.hash(promises).then(function(result) {
            result.model.set('listingCategories', result.listingCategories);
            result.model.set('specializationList', result.specializations);
            result.model.set('skillList', result.skills);
            result.model.set('languageList', result.languages);
            return result.model;
        });
    },

    ////todo: fetching of the mode land listing categories will be sequential in this case, which delays view rendering
    afterModel: function(draft) {
        var promises = {};
        var route = this;

        //Load the non-model data here. (e.g) data for dropdown population , list population etc
        if (!draft.get('listingCategories')) {
            promises['listingCategories'] = function() {
                return route.loadListingCategories.then(function (data) {
                    console.log('loaded listing categories');
                    return data.listingCategories;
                });
            };
        }

        return Ember.RSVP.hash(promises).then(function(result){
            route.set('listingCategories', result.listingCategories);
        });

        //return route.loadListingCategories.then(function(response) {
        //    route.set('listingCategories', response.listingCategories);
        //    draft.set('listingCategories', response.listingCategories);
        //});
    }

    //actions: {
    //    loading: function(transition, originRoute) {
    //        console.log('loading...');
    //    }
    //}
});

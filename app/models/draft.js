import DS from 'ember-data';

export default DS.Model.extend({
    primaryPhoneNumber: DS.attr(),
    name: DS.attr(),
    minuteRate: DS.attr(),
    categoryId: DS.attr(),
    chatEnabled: DS.attr(),
    supportBonus: DS.attr(),
    title: DS.attr(),
    profileImage: DS.attr(),
    summary: DS.attr(),
    approach: DS.attr(),
    backgroundInfo: DS.attr()
});

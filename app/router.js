import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('listings', function() {
    this.route('new');
  });

  this.resource('drafts', {path: 'listings/drafts/'});
  this.resource('proto-draft', {path: 'listings/proto-drafts/:draft_id'});
  this.resource('draft', {path: 'listings/drafts/:draft_id'});
});

export default Router;

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('notes', {path: '/'}, function() {
    this.route('new');
    this.route('edit', {path: '/:id/edit'});
  });
  this.route('tags', function() {
    this.route('new');
  });
});

export default Router;

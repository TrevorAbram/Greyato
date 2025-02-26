import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('about');
  this.route('contact-us');
  this.route('work');
  this.route('legal');
  this.route('dev-goodies');
  this.route('services');
});

export default Router;

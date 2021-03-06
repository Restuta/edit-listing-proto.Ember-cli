/* jshint node: true */

module.exports = function(environment) {
    var ENV = {
        modulePrefix: 'ingenio-web',
        environment: environment,
        baseURL: '/',
        locationType: 'auto',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
                //or
                //'ember-htmlbars' : true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        }
    };

    //see: http://content-security-policy.com/ for more info
    ENV.contentSecurityPolicy = {
        'default-src': "'none'",
        'script-src': "'self' 'unsafe-eval'",
        'font-src': "'self'",
        'connect-src': "*",
        'img-src': "'self' http://i.keen.com",
        // Allow inline styles and loaded CSS from http://fonts.googleapis.com
        'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
        'media-src': "'self'"
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        ENV.APP.LOG_ACTIVE_GENERATION = true;
        ENV.APP.LOG_TRANSITIONS = true;
        //ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {

    }

    return ENV;
};

'use strict';

/**
 * radiologist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::radiologist.radiologist');

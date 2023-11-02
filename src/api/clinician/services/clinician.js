'use strict';

/**
 * clinician service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::clinician.clinician');

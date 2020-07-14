'use strict';

const { sanitizeEntity } = require('strapi-utils');


module.exports = {
    // async create(ctx) {
    //     // Create the entry
    //     let entity = await strapi.services.comment.create(ctx.request.body);
    //     // Sanitize it of fields
    //     let entry = sanitizeEntity(entity, { model: strapi.models.comment });

    //     // Send email
    //     await strapi.plugins['email'].services.email.send({
    //         to: 'quaid.delacluyse@gmail.com',
    //         from: 'quaid.delacluyse@gmail.com',
    //         subject: 'New Request for Work',
    //         text: `
    //           Name: ${entry.firstName} ${entry.lastName}
    //           Email: ${entry.email}
    //           Phone Number: ${entry.phone}
    //           Message:
    //           ${entry.message}
    //         `,
    //     });

    //     return entry;
    // }
};

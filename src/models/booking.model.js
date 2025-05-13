import Joi from "joi";
export const addBookingSchemaValidate = Joi.object({
    booking_uid: Joi.string().required(),
    customer_name: Joi.string().required(),
    amount: Joi.number().required(),
    vendor: Joi.string().required(),
    booking_date: Joi.string().isoDate().required(),
});
export const getBookingSchemaValidate = Joi.string().required();
export const searchBookingSchemaValidate = Joi.object({
    booking_uid: Joi.string().optional(),
    booking_uids: Joi.array().items(Joi.string()).optional(),
    amount: Joi.number().optional(),
    vendor: Joi.string().optional(),
    vendors: Joi.array().items(Joi.string()).optional(),
    booking_date: Joi.string().isoDate().optional(),
    date_filter: Joi.object({
        date_from: Joi.string().isoDate().optional(),
        date_to: Joi.string().isoDate().optional(),
    }).optional(),
});
export const deleteBookingSchemaValidate = Joi.string().required();

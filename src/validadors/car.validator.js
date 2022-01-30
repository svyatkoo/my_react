import Joi from "joi";

export const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp("^[A-Za-zА-Яа-яІіЇї]{1,20}$")).required().messages({
        "string.empty":"Field 'model' required",
        "string.pattern.base":"Use only A-Za-zА-Яа-яІіЇї",
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        "number.base":"Price must be from 1 to 1000000",
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        "number.base":"Year must be from 1900 to now",
    })
})
import vine from '@vinejs/vine'

export const AnimalValidator = (vine.create({
    name: vine.string().minLength(3).maxLength(255),
    species: vine.string().minLength(3).maxLength(255),
    age: vine.number().min(0),
    adopted: vine.boolean().optional(),
}))


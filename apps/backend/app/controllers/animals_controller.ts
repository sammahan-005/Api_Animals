import type { HttpContext } from '@adonisjs/core/http'
import Animal from '#models/animal'
import { AnimalValidator } from '#validators/animal'

export default class AnimalsController {
    public async list({ response }: HttpContext) {
        const animals=await Animal.all()
        return response.json({
            animals
        })
    } 
    
    public async show({ params, response }: HttpContext) {
        const animal=await Animal.findOrFail(params.id)
        return response.json({animal})
    }

    public async create({request,response}:HttpContext){
        const validated = await request.validateUsing(AnimalValidator)
        const animal=await Animal.create(validated)
        return response.status(201).json(animal)

    }

    public async update({request,response,params}:HttpContext){
        const validated = await request.validateUsing(AnimalValidator)
        const animal=await Animal.findOrFail(params.id)
        animal.merge(validated)
        await animal.save()
        return response.json(animal)
    }

    public async destroy({response,params}:HttpContext){
        const animal=await Animal.findOrFail(params.id)
        await animal.delete()
        return response.status(204).noContent()
    }
}
import type { HttpContext } from '@adonisjs/core/http'
import Animal from '#models/animal'
import { AnimalValidator } from '#validators/animal'

export default class AnimalsController {
    
    /**
     * @list
     * @summary List all animals
     * @responseBody 200 - <Animal[]> - application/json
     * @responseBody 500 - {message: "Internal Server Error"} - application/json
     */
    public async list({ response }: HttpContext) {
        const animals=await Animal.all()
        return response.json({
            animals
        })
    } 
    
    /**
     * @show
     * @summary Show a specific animal
     * @paramPath id - Animal ID - @type{number} - @required
     * @responseBody 200 - <Animal> - application/json
     * @responseBody 404 - {message: "Not Found"} - application/json
     * @responseBody 500 - {message: "Internal Server Error"} - application/json
     */
    public async show({ params, response }: HttpContext) {
        const animal=await Animal.findOrFail(params.id)
        return response.json({animal})
    }

    /**
     * @create
     * @summary Create a new animal
     * @requestBody - <AnimalValidator> - application/json
     * @responseBody 201 - <Animal> - application/json
     * @responseBody 400 - {message: "Bad Request"} - application/json  
     * @responseBody 500 - {message: "Internal Server Error"} - application/json
     */
    public async create({request,response}:HttpContext){
        const validated = await request.validateUsing(AnimalValidator)
        const animal=await Animal.create(validated)
        return response.status(201).json(animal)

    }

    /**
     * @update
     * @summary Update an existing animal
     * @paramPath id - Animal ID - @type{number} - @required
     * @requestBody - <AnimalValidator> - application/json
     * @responseBody 200 - <Animal> - application/json
     * @responseBody 400 - {message: "Bad Request"} - application/json
     * @responseBody 404 - {message: "Not Found"} - application/json
     * @responseBody 500 - {message: "Internal Server Error"} - application/json
     */
    public async update({request,response,params}:HttpContext){
        const validated = await request.validateUsing(AnimalValidator)
        const animal=await Animal.findOrFail(params.id)
        animal.merge(validated)
        await animal.save()
        return response.json(animal)
    }
    /**
     * @destroy
     * @summary Delete an animal
     * @paramPath id - Animal ID - @type{number} - @required
     * @responseBody 204 - No Content
     * @responseBody 404 - {message: "Not Found"} - application/json
     * @responseBody 500 - {message: "Internal Server Error"} - application/json
     */
    public async destroy({response,params}:HttpContext){
        const animal=await Animal.findOrFail(params.id)
        await animal.delete()
        return response.status(204).noContent()
    }
}
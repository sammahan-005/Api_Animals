import type { HttpContext } from '@adonisjs/core/http'
//import Animal from '#models/animal'

export default class HomeController {
    /**
     * @index
     * @summary Welcome message
     * @responseBody 200 - Success response - application/json
     */
    public async index({ response }: HttpContext) {
        return response.json({
            message: 'Welcome to the AdonisJS API',
        })
        // const anim= new Animal
        // anim.name='Cheeta'
        // anim.species='Panthera onca'
        // anim.age=5
        // await anim.save()
        // return response.json({
        //     message: 'Animal created successfully',
        //     animal: anim
        // })
    }
}
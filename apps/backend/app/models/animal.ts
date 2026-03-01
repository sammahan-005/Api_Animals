import { AnimalSchema } from '#database/schema'
import { column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Animal extends AnimalSchema {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare name: string

    @column()
    declare species: string

    @column()
    declare age: number

    @column()
    declare adopted: boolean

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime
}
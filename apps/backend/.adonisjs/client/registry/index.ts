/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'home.index': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['home.index']['types'],
  },
  'animals.list': {
    methods: ["GET","HEAD"],
    pattern: '/animals',
    tokens: [{"old":"/animals","type":0,"val":"animals","end":""}],
    types: placeholder as Registry['animals.list']['types'],
  },
  'animals.show': {
    methods: ["GET","HEAD"],
    pattern: '/animals/:id',
    tokens: [{"old":"/animals/:id","type":0,"val":"animals","end":""},{"old":"/animals/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['animals.show']['types'],
  },
  'animals.create': {
    methods: ["POST"],
    pattern: '/animals',
    tokens: [{"old":"/animals","type":0,"val":"animals","end":""}],
    types: placeholder as Registry['animals.create']['types'],
  },
  'animals.update': {
    methods: ["PUT"],
    pattern: '/animals/:id',
    tokens: [{"old":"/animals/:id","type":0,"val":"animals","end":""},{"old":"/animals/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['animals.update']['types'],
  },
  'animals.destroy': {
    methods: ["DELETE"],
    pattern: '/animals/:id',
    tokens: [{"old":"/animals/:id","type":0,"val":"animals","end":""},{"old":"/animals/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['animals.destroy']['types'],
  },
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/signup',
    tokens: [{"old":"/api/v1/auth/signup","type":0,"val":"api","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_token.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [{"old":"/api/v1/auth/login","type":0,"val":"api","end":""},{"old":"/api/v1/auth/login","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/login","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_token.store']['types'],
  },
  'auth.access_token.destroy': {
    methods: ["POST"],
    pattern: '/api/v1/auth/logout',
    tokens: [{"old":"/api/v1/auth/logout","type":0,"val":"api","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['auth.access_token.destroy']['types'],
  },
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/account/profile',
    tokens: [{"old":"/api/v1/account/profile","type":0,"val":"api","end":""},{"old":"/api/v1/account/profile","type":0,"val":"v1","end":""},{"old":"/api/v1/account/profile","type":0,"val":"account","end":""},{"old":"/api/v1/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}

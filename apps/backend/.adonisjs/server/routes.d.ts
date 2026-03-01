import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home.index': { paramsTuple?: []; params?: {} }
    'animals.list': { paramsTuple?: []; params?: {} }
    'animals.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'animals.create': { paramsTuple?: []; params?: {} }
    'animals.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'animals.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_token.store': { paramsTuple?: []; params?: {} }
    'auth.access_token.destroy': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'home.index': { paramsTuple?: []; params?: {} }
    'animals.list': { paramsTuple?: []; params?: {} }
    'animals.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'home.index': { paramsTuple?: []; params?: {} }
    'animals.list': { paramsTuple?: []; params?: {} }
    'animals.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'animals.create': { paramsTuple?: []; params?: {} }
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_token.store': { paramsTuple?: []; params?: {} }
    'auth.access_token.destroy': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'animals.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'animals.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}
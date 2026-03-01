/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: {
    index: typeof routes['home.index']
  }
  animals: {
    list: typeof routes['animals.list']
    show: typeof routes['animals.show']
    create: typeof routes['animals.create']
    update: typeof routes['animals.update']
    destroy: typeof routes['animals.destroy']
  }
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessToken: {
      store: typeof routes['auth.access_token.store']
      destroy: typeof routes['auth.access_token.destroy']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
  }
}

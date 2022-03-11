import { SetStorage, GetStorage } from '@/data/protocols/cache'

export class Cache implements SetStorage, GetStorage {
  set(key: string, value: string): void {
    if (value) {
      return localStorage.setItem(key, value)
    }
    return localStorage.removeItem(key)
  }

  get(key: string): string {
    return localStorage.getItem(key)
  }
}

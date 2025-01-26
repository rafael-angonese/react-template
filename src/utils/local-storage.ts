export default class LocalStorage {
  static getItem(key: string) {
    try {
      const data = localStorage.getItem(key)
      return data ? JSON.parse(data) : null
    } catch (error) {
      return null
    }
  }

  static removeItem(key: string) {
    localStorage.removeItem(key)
  }

  static setItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

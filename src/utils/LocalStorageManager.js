/*  global localStorage  */

export default class LocalStorageManager {
  static setUser (user) {
    localStorage.setItem('APP_USER', JSON.stringify(user))
  }

  static removeUser () {
    if (typeof localStorage['APP_USER'] !== 'undefined') {
      localStorage.removeItem('APP_USER')
    }
  }

  static getUser () {
    if (
      typeof localStorage['APP_USER'] !== 'undefined' &&
      localStorage['APP_USER'] !== 'undefined'
    ) {
      return JSON.parse(localStorage.getItem('APP_USER'))
    }
  }

  static clearLocalStorage () {
    localStorage.clear()
  }
}

/*
 * storage 二次封装
 * @Author: 王超
 * @Date: 2022-04-29 21:24:45
 * @Last Modified by: 王超
 * @Last Modified time: 2022-04-29 22:12:47
 */
import config from './../config'

export default {
  getItem(key) {
    return this.getStorage()[key]
  },
  setItem(key, val) {
    let storage = this.getStorage()
    storage[key] = val
    window.localStorage.setItem(config.storageSpace, JSON.stringify(storage))
  },
  deleteItem(key) {
    let storage = this.getStorage()
    delete storage[key]
    window.localStorage.setItem(config.storageSpace, JSON.stringify(storage))
  },
  clearAll() {
    window.localStorage.clear()
  },
  getStorage() {
    return JSON.parse(window.localStorage.getItem(config.storageSpace) || '{}')
  }
}

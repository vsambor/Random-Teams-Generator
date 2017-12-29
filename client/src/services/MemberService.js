import axios from 'axios'

export default {

  /**
   * Returns all members for current logged user.
   */
  getAll() {
    return axios.get('http://localhost:8081/api/members')
  },

  /**
   * Registers a member.
   *
   * @param {Object} data - registration data.
   */
  register(data) {
    return axios.post('http://localhost:8081/api/member', data)
  }
}

import axios from 'axios'

export default class GithubService {
  http = axios
  baseURL = 'https://api.github.com'

  getProfile(username) {
    let URLendpoint = `${this.baseURL}/users/${username}`
    return this.http.get(URLendpoint)
      .then(resp => {return resp})
      .catch(err => {return err.response})
  }

  getRepos(username) {
  	let URLendpoint = `${this.baseURL}/users/${username}/repos`
  	return this.http.get(URLendpoint)
  			   .then(resp => resp)
  			   .catch(err => err.response)
  }

  getFollowers(username) {
  	let URLendpoint = `${this.baseURL}/users/${username}/followers`
  	return this.http.get(URLendpoint)
  			   .then(resp => resp)
  			   .catch(err => err.response)
  }
}
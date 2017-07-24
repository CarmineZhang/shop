import axios from 'axios'

export default {
  getArea(id) {
    var url = `/json/${id}.json`
    return axios.get(url)
      .catch(function (error) {
        console.log(error);
      })
  }
}

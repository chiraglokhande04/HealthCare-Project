import axios from 'axios'

class PatientService {
  async getPatients() {
    return axios.get('http://localhost:3000/patients')
  }
}
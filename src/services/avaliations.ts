import api from './api'

const AvaliationsService = {

  loadAll: async () => await api.get('/private/users/all_avaliations'),

}

export default AvaliationsService;
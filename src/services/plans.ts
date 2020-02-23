import api from './api'

const PlansService = {

  loadAll: async () => await api.get('/private/users/new_myplans'),

}

export default PlansService;
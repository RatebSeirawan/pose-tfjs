import {create} from 'apisauce';
import log from 'Utils/Logger';

const api = create({
  baseURL: 'https://example.com',
  headers: {Accept: 'application/json'},
});

const mockAPI = {
  fetchUser: () =>
    api
      .get('/user')
      .then(response => response.data)
      .catch(error => log({error})),
};

export {mockAPI, mockAPI as default};

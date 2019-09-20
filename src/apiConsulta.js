const BASE_URL = 'http://consultaruc.hopto.org:3000';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  //http://consultaruc.hopto.org:3000/api/APadronSunat/consulta?ruc=20491228297

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {

    cliente:{
        list(){
            return callApi('/api/AClientes',{ 
            }
            );
        },
        create(cliente){
            return callApi('/api/AClientes/guardar', {
                method: 'POST',
                body: JSON.stringify(cliente),
              });
        },
       
        buscar(clienteRuc){
          return callApi(`/api/APadronSunat/consulta?ruc=${clienteRuc}`);
      },
        // update(cliente){
        //     return callApi(`/badges/${cliente}`, {
        //         method: 'PUT',
        //         body: JSON.stringify(updates),
        //       });
        // },
        remove(ClienteId) {
            return callApi('/', {
              method: 'DELETE',
              body: JSON.stringify(ClienteId),
            });
          },
    }
}
  

export default api;
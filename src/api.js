const BASE_URL = 'http://localhost:4000';
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

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {

    cliente:{
      list() {
        return callApi('/api/ACliente');
      },
    
      buscarId(ruc){
        return callApi(`/api/ACliente/${ruc}`);
        },
      
      create(cliente){
            return callApi('/api/ACliente/guardar', {
                method: 'POST',
                body: JSON.stringify(cliente),
              });
        },  
        read(clienteId){
            return callApi(`/badges/${clienteId}`);
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
    },
    Idcliente:{
      buscar(ruc){
        return callApi('/api/ACliente/ruc', {
            method:'POST',
            body: JSON.stringify(ruc),
          });
    },
    },
    usuario:{
        create(usuario){
          return callApi('/api/AUsuario/guardar', {
              method: 'POST',
              body: JSON.stringify(usuario),
            });
         },
         enviarCorreoCliente(datos){
          return callApi('/api/AUsuario/emailCliente', {
            method: 'POST',
            body: JSON.stringify(datos),
          });
         },
         enviarCorreoVentas(ventas){
          return callApi('/api/AUsuario/emailVentas', {
            method: 'POST',
            body: JSON.stringify(ventas),
          });
         },

    },
    planFacturacion:{
      listarId(idPlanFacturacion){
        return callApi(`/api/APlanFacturacion/${idPlanFacturacion}`);
      }
    }
}
  

export default api;

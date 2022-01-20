// direccion api
const API_URL = "https://jsonplaceholder.typicode.com/photos";

// fecthing api
const consumo = fetch(`${API_URL}`)
  .then((response) => response.json())
  .then((data) => {
    return data;
  });

//
const getDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(consumo);
    }, 3000);
  });
};

// asyn function
async function fetchingData() {
  try {
    const datosFetched = await getDatos();
    for (let i = 0; i < 20; i++) {
      console.log(datosFetched[i].title);
    }
    console.log("Informacion Enviada");
  } catch (error) {
    console.log(error);
  }
}

// console.log(getDatos());
fetchingData();

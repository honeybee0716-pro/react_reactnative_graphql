import axios from 'axios';

const main = async () => {
  axios
    .get(
      'https://n8n.selfhosted.gg/webhook/09ce62cd-7360-469d-b360-946bd23f2aa8',
    )
    .then((response) => {
      console.log(response.data.url);
      console.log(response.data.explanation);
    })
    .catch((error) => {
      console.log(error);
    });
};

main();

export default main;

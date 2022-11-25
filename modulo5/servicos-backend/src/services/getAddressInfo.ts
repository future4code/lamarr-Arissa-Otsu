import axios from "axios";

async function getAddressInfo(cep: string) {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

    return `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export default getAddressInfo;

import axios from "axios";
import { Console } from "console";

// Exercício 01
const getAddress = async (cep: string) => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

    return {
      "Logradouro": data.logradouro,
      "Bairro": data.bairro,
      "Cidade": data.localidade,
      "Estado": data.uf
    }

  } catch (error: any) {
    throw new Error(error.message);
  }
}

export default getAddress;

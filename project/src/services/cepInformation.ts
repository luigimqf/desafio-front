import { api } from "./index";

interface IResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export async function cepRequest(cep: string) {
  try {
    const { data } = await api.get<IResponse>(`${cep}/json/`);

    return data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
}

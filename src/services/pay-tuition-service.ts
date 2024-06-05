import { env } from "../constants";
import { makeAuthorizedRequest } from "./authorizedRequest";

export interface PayTuition {
  valor: string;
  n_matricula: string | undefined;
  cod_mes: number;
  forma_pagamento: string;
}

export const PayTuitionService = async (datas: PayTuition) => {
  // try {
  const response = await makeAuthorizedRequest("POST", "/propina", datas);

  if (response.status === 200 || response.status === 201) {
    return response.data;
  } else if (response.status === 208) {
    throw new Error(response.data.message);
  } else {
    return response.data.message;
  }
  // } catch (error: any) {
  // return error.data.message;
  //}
};

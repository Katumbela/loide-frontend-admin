import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeAuthorizedRequest } from "../services/authorizedRequest";
import { MatriculaCompleta } from "../interfaces/matriculado";
import { PayTuitionService } from "../services/pay-tuition-service";
import toast from "react-hot-toast";
import { MESES } from "../constants/meses";


function PayTuition() {
  const { n_matricula } = useParams<{ n_matricula: string }>();
  const [matriculaData, setMatriculaData] = useState<MatriculaCompleta | null>(null);
  const [valor, setValor] = useState<string>("");
  const [mes, setMes] = useState<number>(1);
  const [metodoPagamento, setMetodoPagamento] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = {
        valor,
        n_matricula: n_matricula,
        cod_mes: mes,
        forma_pagamento: metodoPagamento
      };

      const response = await PayTuitionService(data);
      //console.log(response); // Exibe a mensagem de sucesso ou erro
      toast.success(response.message)
      // Redireciona ou exibe outra mensagem dependendo da resposta
    } catch (error: any) {
      console.log(error);
      toast.error(error.message)
      // Exibe uma mensagem de erro para o usuário
    }
  };



  useEffect(() => {
    async function fetchData() {
      try {
        if (n_matricula) {
          const data = await makeAuthorizedRequest("GET", `/matricula/${n_matricula}`);
          setMatriculaData(data.data);

        }
      } catch (error) {
        console.error("Error fetching matricula data:", error);
      }
    }

    fetchData();
  }, [n_matricula]);

  if (!matriculaData) {
    return <div>Loading ... </div>;
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">
            Pagar Propina de {matriculaData.aluno.nome}
          </h1>
        </div>
        <hr />
        <br />
        <div className="flex p-6 text-black bg-blue-300">
          <input
            type="text"
            placeholder="Valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
          <select value={mes} onChange={(e) => setMes(parseInt(e.target.value))}>
            {MESES.map((mes) => (
              <option key={mes.cod_mes} value={mes.cod_mes}>
                {mes.descricao}
              </option>
            ))}
          </select>
          <select
            value={metodoPagamento}
            onChange={(e) => setMetodoPagamento(e.target.value)}
          >
            <option value="">Selecione um método de pagamento</option>
            <option value="TPA">TPA</option>
            <option value="Depósito">Depósito</option>
            <option value="Transferência">Transferência</option>
          </select>
        </div>
        <br />
        <button type="submit">Pagar Propina</button>
      </form>
    </div>
  );
}

export default PayTuition;

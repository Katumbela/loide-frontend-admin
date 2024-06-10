import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeAuthorizedRequest } from "../services/authorizedRequest";
import { MatriculaCompleta } from "../interfaces/matriculado";
import { PayTuitionService } from "../services/pay-tuition-service";
import { toast } from "react-hot-toast";
import { MESES } from "../constants/meses";
import LoadingSpinner from "../components/UI/loadingSpinner/LoadingSpinner";


function PayTuition() {
  const { n_matricula } = useParams<{ n_matricula: string }>();
  const [matriculaData, setMatriculaData] = useState<MatriculaCompleta | null>(null);
  const [valor, setValor] = useState<string>("");
  const [mes, setMes] = useState<number>(1);
  const [load, setLoad] = useState<boolean>(false);
  const [metodoPagamento, setMetodoPagamento] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true)
    if (valor === '') {
      toast.error('Campo valor a pagar está vazio')
      setLoad(false)
      return

    }

    try {

      setLoad(true)
      const data = {
        valor: valor,
        n_matricula: n_matricula,
        cod_mes: mes,
        forma_pagamento: metodoPagamento
      };

      const response = await PayTuitionService(data);
      //console.log(response); // Exibe a mensagem de sucesso ou erro
      toast.success(response.message)

      setLoad(false)
      // Redireciona ou exibe outra mensagem dependendo da resposta
    } catch (error: any) {
      console.log(error);

      setLoad(false)
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
    return <div>Carregando dados ... </div>;
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold ">
            Pagar Propina de {matriculaData.aluno.nome}
          </h1>
        </div>
        <hr />
        <br />
        <div className="flex p-6 text-black bg-red-100">
          <input
            type="number"
            placeholder="Valor"
            value={valor}
            className="px-3 py-2 text-black rounded-sm outline-none me-4"
            onChange={(e) => setValor(e.target.value)}
          />
          <select
            className="px-3 py-2 text-black rounded-sm outline-none me-4" value={mes} onChange={(e) => setMes(parseInt(e.target.value))}>
            {MESES.map((mes) => (
              <option key={mes.cod_mes} value={mes.cod_mes}>
                {mes.descricao}
              </option>
            ))}
          </select>
          <select
            className="px-3 py-2 text-black rounded-sm outline-none me-6"
            value={metodoPagamento}
            onChange={(e) => setMetodoPagamento(e.target.value)}
          >
            <option value="">Método de pagamento</option>
            <option value="TPA">TPA</option>
            <option value="Depósito">Depósito</option>
            <option value="Transferência">Transferência</option>
          </select>
          <button disabled={load} className="px-5 font-semibold text-white transition-all bg-red-600 rounded-md ms-auto disabled:bg-red-800/50 " type="submit">{
            load ?
              <>
                Carregando...
              </>
              :
              <span>
                Pagar Propina
              </span>
          }</button>
        </div>
      </form>
    </div>
  );
}

export default PayTuition;

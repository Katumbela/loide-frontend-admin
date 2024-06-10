import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeAuthorizedRequest } from "../services/authorizedRequest";
import { MatriculaCompleta, Propina } from "../interfaces/matriculado";
import { Link } from "react-router-dom";



const MESES = [
  { cod_mes: 1, descricao: "Janeiro" },
  { cod_mes: 2, descricao: "Fevereiro" },
  { cod_mes: 3, descricao: "Março" },
  { cod_mes: 4, descricao: "Abril" },
  { cod_mes: 5, descricao: "Maio" },
  { cod_mes: 6, descricao: "Junho" },
  { cod_mes: 7, descricao: "Julho" },
  { cod_mes: 8, descricao: "Agosto" },
  { cod_mes: 9, descricao: "Setembro" },
  { cod_mes: 10, descricao: "Outubro" },
  { cod_mes: 11, descricao: "Novembro" },
  { cod_mes: 12, descricao: "Dezembro" }
];


function StudentDetails() {
  const { n_matricula } = useParams<{ n_matricula: string }>();
  const [matriculaData, setMatriculaData] = useState<MatriculaCompleta | null>(null);

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
    return <div>Carregando dados do estudante...</div>;
  }


  const getPagoStatus = (mes: number) => {
    const propina = matriculaData.propinas.find((prop: Propina) => prop.cod_mes === mes);
    return propina ? `${propina.valor} Kz - Pago` : "----------- Não Pago  ---------------";
  };


  return (
    <div>
      <div className="flex justify-between">

        <h1 className="text-2xl font-bold">Detalhes do(a) Estudante</h1>

        <Link to={'/pay-tuition/' + matriculaData.n_matricula} className="px-4 py-2 my-auto text-white bg-red-600">
          Pagar Propina
        </Link>
      </div>
      <hr />
      <br />
      <p>Nome: <span className="font-semibold">
        {matriculaData.aluno.nome}</span></p>
      <p>Curso: <span className="font-semibold">{matriculaData.curso.descricao}</span></p>
      <p>Período: <span className="font-semibold">{matriculaData.periodo.descricao}</span></p>
      <p>Data Matrícula: <span className="font-semibold">{matriculaData.data}</span></p>
      <br />

      <div className="flex justify-start gap-10 p-3 border border-red-300 rounded-sm">
        <div className="text-start">
          <b className="text-red-600">COD Aluno</b>
          <p className="mt-2">
            {matriculaData.cod_aluno}
          </p>
        </div>
        <div className="text-start">
          <b className="text-red-600">Nascimento</b>
          <p className="mt-2">
            {matriculaData.aluno.data_nascimento}
          </p>
        </div>
        <div className="text-start">
          <b className="text-red-600">Gênero</b>
          <p className="mt-2">
            {matriculaData.aluno.genero}
          </p>
        </div>
        <div className="text-start">
          <b className="text-red-600">Morada</b>
          <p className="mt-2">
            {matriculaData.aluno.morada}
          </p>
        </div>
        <div className="text-start">
          <b className="text-red-600">Telefone</b>
          <p className="mt-2">
            {matriculaData.aluno.telefone}
          </p>
        </div>
        <div className="text-start">
          <b className="text-red-600">Bilhete de Identidade</b>
          <p className="mt-2">
            {matriculaData.aluno.bi}
          </p>
        </div>
      </div>
      <br />
      <br />
      <h2 className="text-2xl">Estado das Propinas </h2>

      <hr />

      <ul className="mt-6">
        {MESES.map((mes) => (
          <li className={`py-2 border-b  ${getPagoStatus(mes.cod_mes) !== '----------- Não Pago  ---------------' && 'bg-blue-200/60 '}`} key={mes.cod_mes}>
            <span className="font-semibold me-8">{mes.descricao}:</span>  {getPagoStatus(mes.cod_mes)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentDetails;

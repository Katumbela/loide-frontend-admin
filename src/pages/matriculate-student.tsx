import { useEffect, useState } from "react";
import { makeAuthorizedRequest } from "../services/authorizedRequest";
import { MatriculaCompleta } from "../interfaces/matriculado";
import { toast } from "react-hot-toast";
import { ICourses } from "../interfaces/courses";
import { AlunoInscrito } from "../interfaces/aluno";


function MatriculateStudent() {
  const [matriculaData, setMatriculaData] = useState<AlunoInscrito | null>(null);
  const [name, setName] = useState<string>("");
  const [cur, setCur] = useState<string>("");
  const [n_matr, setn_matr] = useState<string>('');
  const [genero, setGen] = useState<string>('');
  const [nascimento, setNascimento] = useState<string>('');
  const [morada, setMorada] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [bi, setBi] = useState('');
  const [load, setLoad] = useState<boolean>(false);
  const [periodo, setPeriodo] = useState<string>("");

  const [cursos, setCursos] = useState<ICourses[]>([]);

  useEffect(() => {

    const getCourses = async () => {
      const cursos = await makeAuthorizedRequest("GET", "/curso");
      setCursos(cursos.data);
      // console.log(propinas.data);
    };

    getCourses();
  }, []);


  async function fetchData() {
    try {
      if (n_matr) {
        const data = await makeAuthorizedRequest("GET", `/aluno/${n_matr}`);
        setMatriculaData(data.data);
        setBi(data.data.bi)
        setMorada(data.data.morada)
        setName(data.data.nome)
        setTelefone(data.data.telefone)
        setGen(data.data.genero)
        setNascimento(data.data.data_nascimento)


      }
    } catch (error) {
      console.error("Error fetching matricula data:", error);
    }
  }





  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true)
    if (cur === '') {
      toast.error('Campo valor a pagar está vazio')
      setLoad(false)
      return

    }

    try {

      setLoad(true)
      const data = {
        valor: cur,
        // n_matricula: n_matricula,
        // cod_mes: mes,
        forma_pagamento: periodo
      };

      //  const response = await PayTuitionService(data);
      //console.log(response); // Exibe a mensagem de sucesso ou erro
      //toast.success(response.message)

      setLoad(false)
      // Redireciona ou exibe outra mensagem dependendo da resposta
    } catch (error: any) {
      console.log(error);

      setLoad(false)
      toast.error(error.message)
      // Exibe uma mensagem de erro para o usuário
    }
  };





  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold ">
            Matricular estudante
          </h1>
        </div>
        <hr />
        <br />
        <div className="grid grid-cols-3 gap-6 p-6 text-black bg-red-100 dark:bg-gray-300/30">
          <input
            type="number"
            placeholder="Valor"
            value={n_matr}
            onBlur={fetchData}
            className="w-full px-3 py-2 text-black rounded-sm outline-none me-4"
            onChange={(e) => setn_matr(e.target.value)}
          />
          <select
            className="w-full px-3 py-2 text-black rounded-sm outline-none me-4" value={cur} onChange={(e) => setCur(e.target.value)}>
            <option value="">Selecionar classe  </option>
            {cursos.map((curso, i) => (
              <option key={i} value={curso.cod_curso}>
                {curso.descricao}
              </option>
            ))}
          </select>


          <select
            className="w-full px-3 py-2 text-black rounded-sm outline-none me-4" value={cur} onChange={(e) => setCur(e.target.value)}>
            <option value="">Selecionar curso</option>
            {cursos.filter((c) => c.tipo_curso !== '').map((curso, i) => (
              <option key={i} value={curso.cod_curso}>
                {curso.tipo_curso}
              </option>
            ))}
          </select>


          <select
            className="w-full px-3 py-2 text-black rounded-sm outline-none me-6"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
          >
            <option value="">Período</option>
            <option value="1">Manhã</option>
            <option value="2">Tarde</option>
            <option value="3">Noite</option>
          </select>

        </div>
        <div className="grid flex-wrap grid-cols-3 gap-6 p-6 text-black bg-red-100 dark:bg-gray-300/30">

          <input
            type="text"
            placeholder="Nome completo"
            value={name}
            disabled={true}
            className="w-full px-3 py-2 text-gray-400 bg-white rounded-sm outline-none me-4"
          />
          <input
            type="text"
            placeholder="Bilhete de Identidade"
            value={bi}
            disabled={true}
            className="w-full px-3 py-2 text-gray-400 bg-white rounded-sm outline-none me-4"
          />
          <input
            type="text"
            placeholder="Nascimento"
            value={nascimento}
            disabled={true}
            className="w-full px-3 py-2 text-gray-400 bg-white rounded-sm outline-none me-4"
          />
          <input
            type="text"
            placeholder="Genero"
            value={genero}
            disabled={true}
            className="w-full px-3 py-2 text-gray-400 bg-white rounded-sm outline-none me-4"
          />
          <input
            type="text"
            placeholder="Telefone"
            value={telefone}
            disabled={true}
            className="w-full px-3 py-2 text-gray-400 bg-white rounded-sm outline-none me-4"
          />
          <input
            type="text"
            placeholder="Morada"
            value={morada}
            disabled={true}
            className="w-full px-3 py-2 text-gray-400 bg-white rounded-sm outline-none me-4"
          />


        </div>
      </form>

      <br />
      <br />

      <button disabled={load} className="px-5 py-2 font-semibold text-white transition-all bg-red-600 rounded-md ms-auto disabled:bg-red-800/50 " type="submit">{
        load ?
          <>
            Carregando...
          </>
          :
          <span>
            Matricular estudante
          </span>
      }</button>
    </div>
  );
}

export default MatriculateStudent;

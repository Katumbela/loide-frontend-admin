import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AlunoInscrito } from "../interfaces/aluno";
import classes from "../components/tables/customTable/CustomTable.module.scss";
import { MatriculaCompleta, Propina } from "../interfaces/matriculado";
import { makeAuthorizedRequest } from "../services/authorizedRequest";
import { Link } from "react-router-dom";

function Products() {
  const { t } = useTranslation();

  const [inscritos, setInscritos] = useState<AlunoInscrito[]>([]);
  const [matriculados, setMatriculados] = useState<MatriculaCompleta[]>([]);
  const [Propinas, setPropinas] = useState<Propina[]>([]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getInscritos = async () => {
      const inscritos = await makeAuthorizedRequest("GET", "/aluno");
      setInscritos(inscritos.data);
      // console.log(inscritos.data);
    };

    const getMatriculados = async () => {
      const matriculados = await makeAuthorizedRequest("GET", "/matricula");
      setMatriculados(matriculados.data);
      // console.log(matriculados.data);
    };

    const getPropinas = async () => {
      const propinas = await makeAuthorizedRequest("GET", "/propina");
      setPropinas(propinas.data);
      // console.log(propinas.data);
    };

    getInscritos();
    getMatriculados();
    getPropinas();
  }, []);


  const getCourse = async (code: number) => {
    const curso = await makeAuthorizedRequest("GET", "/curso/" + code);
    console.log(curso)
    // console.log(propinas.data);
  };


  const somaValoresPropinas = (propinas: Propina[]): number => {
    let total = 0;
    propinas.forEach((propina) => {
      // Converter o valor de string para número
      const valor = parseFloat(propina.valor);
      total += valor;
    });
    return total;
  };

  function showModalHandler() {
    setShowModal((prev) => !prev);
  }

  return (
    <section>
      <div className="flex justify-between">

        <h2 className="my-auto title">Estudantes Matrículados</h2>
        <button className="px-5 py-2 my-auto font-semibold text-white bg-red-600 rounded-md click">Matricular Aluno</button>
      </div>
      <br />
      <br />
      <div className={classes.wrapper}>
        <div className={classes.table__wrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>Nº</th>
                <th>Nome</th>
                <th>Curso</th>
                <th>Nível</th>
                <th>Data</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {matriculados.map((aluno) => (
                <tr>
                  <td>{aluno.n_matricula}</td>
                  <td>( {aluno.cod_aluno} )  {aluno.aluno.nome}</td>
                  <td>{aluno.curso.descricao} ( {aluno.periodo.descricao} )</td>
                  <td>{aluno.curso.tipo_curso}</td>
                  <td>{aluno.data}</td>
                  <td>
                    <Link to={`/student/${aluno.n_matricula}`}>
                      <i className="text-xl cursor-pointer bi bi-eye-fill hover:text-red-700"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Products;

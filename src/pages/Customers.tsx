import { useEffect, useState } from "react";
import { AlunoInscrito } from "../interfaces/aluno";
import { makeAuthorizedRequest } from "../services/authorizedRequest";
import classes from "../components/tables/customTable/CustomTable.module.scss";


function Customers() {


  const [inscritos, setInscritos] = useState<AlunoInscrito[]>([]);

  useEffect(() => {
    const getInscritos = async () => {
      const inscritos = await makeAuthorizedRequest("GET", "/aluno");
      setInscritos(inscritos.data);
      // console.log(inscritos.data);
    };


    getInscritos();
  }, []);

  return (
    <section>
      <div className="flex justify-between">

        <h2 className="my-auto title">Estudantes Inscritos</h2>
        <button className="px-5 py-2 my-auto font-semibold text-white bg-red-600 rounded-md click">Inscrver Aluno</button>
      </div>

      {/*

      {customerTable}

      */}

      <div className={classes.wrapper}>
        <div className={classes.table__wrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>COD</th>
                <th>Nome</th>
                <th>Gênero</th>
                <th>Morada</th>
                <th>Telefone</th>
                <th>BI</th>
              </tr>
            </thead>
            <tbody>
              {inscritos.map((aluno) => (
                <tr>
                  <td>{aluno.cod_aluno}</td>
                  <td>{aluno.nome}</td>
                  <td>{aluno.genero}</td>
                  <td>{aluno.morada}</td>
                  <td>{aluno.telefone}</td>
                  <td>{aluno.bi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Customers;

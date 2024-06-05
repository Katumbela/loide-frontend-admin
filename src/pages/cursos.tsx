import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AlunoInscrito } from "../interfaces/aluno";
import classes from "../components/tables/customTable/CustomTable.module.scss";
import { MatriculaCompleta, Propina } from "../interfaces/matriculado";
import { makeAuthorizedRequest } from "../services/authorizedRequest";
import Card from "../components/UI/card/Card";
import { ICourses } from "../interfaces/courses";



function Courses() {
  const { t } = useTranslation();


  const [cursos, setCursos] = useState<ICourses[]>([]);

  useEffect(() => {


    const getCourses = async () => {
      const cursos = await makeAuthorizedRequest("GET", "/curso");
      setCursos(cursos.data);
      // console.log(propinas.data);
    };

    getCourses();
  }, []);



  return (
    <section>


      <div className="flex justify-between">

        <h2 className="title">Cursos Total: {cursos.length}</h2>
        <button className="px-5 py-2 my-auto font-semibold text-white bg-red-600 rounded-md click">Adicionar Novo Curso</button>
      </div>

      <Card>
        <div className={classes.wrapper}>
          <div className={classes.table__wrapper}>
            <table className={classes.table}>
              <thead>
                <tr>
                  <th>COD</th>
                  <th>Curso</th>
                  <th>Tipo / Nível</th>
                </tr>
              </thead>
              <tbody>
                {cursos.map((curso) => (
                  <tr>
                    <td>{curso.cod_curso}</td>
                    <td> {curso.descricao}</td>
                    <td>{curso.tipo_curso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

    </section>
  );
}

export default Courses;

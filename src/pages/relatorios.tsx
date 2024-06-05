import { useEffect, useState } from "react";
import { makeAuthorizedRequest } from "../services/authorizedRequest";
import { Matricula } from "../interfaces/aluno";
import { MatriculaCompleta } from "../interfaces/matriculado";

interface CourseInfo {
  descricao: string;
  count: number;
}

interface StudentCountByCourse {
  [key: number]: CourseInfo;
}

// Função para contar estudantes por curso e armazenar descrição
const countStudentsByCourse = (data: MatriculaCompleta[]): StudentCountByCourse => {
  return data.reduce((acc: StudentCountByCourse, matricula: MatriculaCompleta) => {
    const { cod_curso, curso } = matricula;
    if (!acc[cod_curso]) {
      acc[cod_curso] = {
        descricao: curso.descricao,
        count: 0,
      };
    }
    acc[cod_curso].count += 1;
    return acc;
  }, {});
};

function Relatorios() {
  const [matriculas, setMatriculas] = useState<Matricula[]>([]);
  const [studentCountByCourse, setStudentCountByCourse] = useState<StudentCountByCourse>({});

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await makeAuthorizedRequest("GET", "/matricula");
        setMatriculas(data.data);
        setStudentCountByCourse(countStudentsByCourse(data.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold">Relatórios de Estudantes por Curso</h1>
      <br />
      <br />
      <table className="w-full ">
        <thead>
          <tr>
            <th>COD Curso</th>
            <th>Curso</th>
            <th>Estudantes Matrículados</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(studentCountByCourse).map(([cod_curso, info]) => (
            <tr key={cod_curso}>
              <td>
                # {cod_curso}
              </td>
              <td>
                {info.descricao}
              </td>
              <td>
                {info.count} estudante(s)
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default Relatorios;

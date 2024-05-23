import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useFetch from "../hook/useFetch";
import CustomTable from "../components/tables/customTable/CustomTable";
import { IcustomersTable, complex } from "../interfaces/Itable";
import { customers, customersHeader } from "../constants/tables";
import { AlunoInscrito } from "../interfaces/aluno";
import { MatriculaCompleta, Propina } from "../interfaces/matriculado";
import { makeAuthorizedRequest } from "../services/authorizedRequest";
import classes from "../components/tables/customTable/CustomTable.module.scss";
import Card from "../components/UI/card/Card";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Badge from "../components/UI/badge/Badge";
const url =
  "https://admin-panel-79c71-default-rtdb.europe-west1.firebasedatabase.app/customers.json";

function Customers() {
  const { t } = useTranslation();
  const { data, error, status } = useFetch<IcustomersTable[]>(url);
  let customerTable;
  /*
  if (status === "loading") {
    customerTable = <LoadingSpinner />;
  }

  if (error) {
    customerTable = (
      <CustomTable limit={10} headData={customersHeader} bodyData={customers} />
    );
  }

  if (status === "fetched" && data) {
    customerTable = (
      <CustomTable limit={10} headData={customersHeader} bodyData={data} />
    );
  }
*/

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
      <h2 className="title">{t("customers")}</h2>

      {/*

      {customerTable}

      */}

      <Card>
        <div className={classes.wrapper}>
          <div className={classes.table__wrapper}>
            <table className={classes.table}>
              <thead>
                <tr>
                  <th>name</th>
                </tr>
              </thead>
              <tbody>
                {inscritos.map((aluno) => (
                  <tr>
                    <td>{aluno.nome}</td>
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

export default Customers;

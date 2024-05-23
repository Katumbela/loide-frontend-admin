import React, { useEffect, useState } from "react";
import FaPeople, { IconContext } from "react-icons";

import SummaryBox from "./SummaryBox";
import { useTranslation } from "react-i18next";
import classes from "./Summary.module.scss";
import { IsummData } from "../../interfaces/IsummData";
import { LoginResponse } from "../../interfaces/userInterface";
import { makeAuthorizedRequest } from "../../services/authorizedRequest";
import { AlunoInscrito } from "../../interfaces/aluno";
import { MatriculaCompleta, Propina } from "../../interfaces/matriculado";
import { formatMoney } from "../../utils/formatToMoney";

function Summary() {
  const { t } = useTranslation();

  const [inscritos, setInscritos] = useState<AlunoInscrito[]>([]);
  const [matriculados, setMatriculados] = useState<MatriculaCompleta[]>([]);
  const [Propinas, setPropinas] = useState<Propina[]>([]);

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

  const summaryData: IsummData[] = [
    {
      icon: "hugeicons:user-status",
      text: "Alunos Matriculados",
      amount: matriculados.length,
      currency: "",
    },
    {
      icon: "hugeicons:user-list",
      text: "Alunos Inscritos",
      amount: inscritos.length,
      currency: "",
    },
    {
      icon: "jam:coin",
      text: "Faturação",
      amount: formatMoney(somaValoresPropinas(Propinas)),
      currency: "",
    },
  ];

  return (
    <section className={classes.summary}>
      <i className="bi bi-xbox text-5xl"></i>
      <p className="subTitle">Resumo</p>
      <div className={classes.summary__box}>
        {summaryData.map((item) => (
          <SummaryBox key={item.text} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Summary;

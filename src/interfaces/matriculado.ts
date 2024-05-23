export interface Mes {
  cod_mes: number;
  descricao: string;
}

export interface Propina {
  cod_propina: number;
  valor: string;
  data: string;
  n_matricula: number;
  cod_mes: number;
  created_at: string;
  mes: Mes;
}

export interface Aluno {
  cod_aluno: number;
  nome: string;
  data_nascimento: string;
  genero: string;
  morada: string;
  telefone: string;
  bi: string;
}

export interface Periodo {
  cod_periodo: number;
  descricao: string;
}

export interface Curso {
  cod_curso: number;
  descricao: string;
  tipo_curso: string;
}

export interface MatriculaCompleta {
  n_matricula: number;
  cod_curso: number;
  cod_aluno: number;
  cod_periodo: number;
  data: string;
  created_at: string;
  aluno: Aluno;
  periodo: Periodo;
  curso: Curso;
  propinas: Propina[];
}

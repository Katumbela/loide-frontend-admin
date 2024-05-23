export interface Matricula {
  n_matricula: number;
  cod_curso: number;
  cod_aluno: number;
  cod_periodo: number;
  data: string;
  created_at: string;
}

export interface AlunoInscrito {
  cod_aluno: number;
  nome: string;
  data_nascimento: string;
  genero: string;
  morada: string;
  telefone: string;
  bi: string;
  matriculas: Matricula[];
  propinas: number | null;
}

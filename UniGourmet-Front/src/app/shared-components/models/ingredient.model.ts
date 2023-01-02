export class Ingredient {
  id: string;
  name: string;
  unity: Unity;
  constructor(id: string, name: string, unity: Unity) {
    this.id = id;
    this.name = name;
    this.unity = unity;
  }
}

export enum Unity {
  quilo = 'quilo',
  litro = 'litro',
  dente = 'dente',
  ramo = 'ramo',
  pitada = 'pitada',
  cabeça = 'cabeça',
  unidade = 'unidade',
  fatia = 'fatia',
  talo = 'talo',
  folha = 'folha',
  pedaço = 'pedaço',
  gramas = 'gramas',
  ml = 'ml',
}

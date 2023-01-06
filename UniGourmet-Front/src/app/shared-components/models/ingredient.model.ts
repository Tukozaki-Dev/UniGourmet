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
  quilo = 'Quilo',
  litro = 'Litro',
  dente = 'Dente',
  ramo = 'Ramo',
  pitada = 'Pitada',
  cabeça = 'Cabeça',
  unidade = 'Unidade',
  fatia = 'Fatia',
  talo = 'Talo',
  folha = 'Folha',
  pedaço = 'Pedaço',
  gramas = 'Gramas',
  ml = 'ml',
}

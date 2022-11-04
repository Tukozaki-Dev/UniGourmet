export class Ingredient {
  name: string;
  unity: Unity;
  constructor(name: string, unity: Unity) {
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
  unidades = 'unidades',
  fatia = 'fatia',
  talo = 'talo',
  folha = 'folha',
  pedaço = 'pedaço',
  gramas = 'gramas',
  ml = 'ml',
}

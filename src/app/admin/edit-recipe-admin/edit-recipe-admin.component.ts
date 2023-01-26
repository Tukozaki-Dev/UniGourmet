import { SectionRecipe, SingleInstruction } from './../../shared-components/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup, Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplineService } from 'src/app/services/discipline.service';
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';
import { Recipe, SelectedIngredient } from 'src/app/shared-components/models/recipe.model';
import { Ingredient } from 'src/app/shared-components/models/ingredient.model';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-edit-recipe-admin',
  templateUrl: './edit-recipe-admin.component.html',
  styleUrls: ['./edit-recipe-admin.component.css']
})
export class EditRecipeAdminComponent implements OnInit {
  public isMobileMenu: boolean;

  addBtnColor: string = 'primary';
  addBtnIcon: string = 'add';

  deleteBtnColor: string = 'warn';
  deleteBtnIcon: string = 'delete';

  addRecipe = "";
  editRecipe ="";

  arrayBtnIcon: string = '+';
  sectionBtnText: string = 'Adicionar sessão';
  stringBtnText: string = 'Adicionar linhas à tabela';

  btnText = "Salvar";
  imagePath = '';

  editMode = false;

  allDisciplines = [];
  selectedRecipe: Recipe;


  allIngredients: Ingredient[] = [];

  // selectedIngredients: SelectedIngredient[] = [];
  recipeForm: FormGroup;
  control: FormArray;
  

  constructor(
    private globalStatesService: GlobalStatesServiceService,
    private disciplineService: DisciplineService,
    private ingredientService: IngredientService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) { 
    this.isMobileMenu = this.globalStatesService.mobileMenu;

    this.recipeForm = this.fb.group({
      recipe: this.fb.group({
        name: ['', Validators.required],
        id: ['', Validators.required],
        imagePath: ['', Validators.required],
        description: ['', Validators.required],
        discipline: ['', Validators.required],
        region: ['', Validators.required],
        prepDuration: ['', Validators.required],
        yeldis: [+'', Validators.required],
        prevPrepare: [''],
        chefsNote: [''],
        harmonization: [''],
      }),
      steps: this.fb.group({
        section: this.fb.array([], Validators.required),
        plateUp: this.fb.array([]),
        equipUtensils: this.fb.array([]),
      })

  });
  }

  ngOnInit(): void {
    // let result = this.getSelectedIngredients(1);
    // console.log(result);
    this.addRecipe ='Você está no modo cadastro de receita, preencha todos os dados abaixo corretamente.';
    this.editRecipe = `Edite as informações da receita ${this.recipeForm.value.recipe.name} abaixo.`;

    this.globalStatesService.mobileMenuChanges.subscribe((val) => {
      this.isMobileMenu = val;
    });

    this.allDisciplines = this.disciplineService.getDisciplinesNames();
    
    this.allIngredients = this.ingredientService.getIngredients();


    //Gets the Recipe Code param to edit the Recipe Class
    // let id = this.route.snapshot.paramMap.get('id');

    
  }

  get section(): FormArray {
    return this.recipeForm.controls['steps'].get('section') as FormArray;
  }

  get plateUp(): FormArray {
    return this.recipeForm.controls['steps'].get('plateUp') as FormArray;
  }

  get equipUtensils(): FormArray {
    return this.recipeForm.controls['steps'].get('equipUtensils') as FormArray;
  }

  // get selectedIngredients(): FormArray {
  //   return this.recipeForm.controls['steps'].get('section.') as FormArray;
  // }
  // getSelectedIngredients(index: number) {
  //   return (this.section.at(index).get('ingredients') as FormArray).controls;
  // }

  //creates a new section FormGroup and returns it.
  
  newSection(): FormGroup {
    return this.fb.group({
      ingredients: this.fb.group({
        selectedIngredients: this.fb.array([])
      }),
      prepInstructions: this.fb.group({
        instructionName: [''],
        instructionSteps: this.fb.array([])
      }),
    });
  }

  addSection() {
    this.section.push(this.newSection());
  }

  removeSection(sectionIndex: number) {
    this.section.removeAt(sectionIndex);
  }

  //creates a new ingredient formgroup and return it

  selectedIngredients(sectionIndex: number): FormArray {
    return this.section.at(sectionIndex).get('selectedIngredients') as FormArray
  }

  NewSelectedIngredient(): FormGroup {
    return this.fb.group({
      name: [''],
      unity: [''],
      quantity: ['']
    });
  }
  
  addSelectedIngredient(sectionIndex: number) {
    this.selectedIngredients(sectionIndex).push(this.NewSelectedIngredient());
  }

  // removeSelectedIngredient(sectionIndex: number, selectedIngredientsIndex: number) {
  //   this.selectedIngredients(sectionIndex).removeAt(selectedIngredientsIndex);
  // }

  // addSelectedIngredients() {
  //   this.selectedIngredients.push(this.newSelectedIngredients());
  // }

  removeSelectedIngredient(control, selectedIngredientsIndex: number) {
    control.removeAt(selectedIngredientsIndex);
  }
  
    

  //creates a new plateUp FormGroup and returns it.

  newPlateUp(): FormGroup {
    return this.fb.group({
      step: [''],
      description: ['']
    });
  }

  addPlateUp() {
    this.plateUp.push(this.newPlateUp());
  }

  removePlateUp(plateUpIndex: number) {
    this.plateUp.removeAt(plateUpIndex);
  }

  //creates a new EquipUtensils FormGroup and returns it.

  addEquipUtensils() {
    const teste = new FormControl();
    this.equipUtensils.push(teste);
  }

  removeEquipUtensils(equipUtensilsIndex: number) {
    this.equipUtensils.removeAt(equipUtensilsIndex);
  }


  


}
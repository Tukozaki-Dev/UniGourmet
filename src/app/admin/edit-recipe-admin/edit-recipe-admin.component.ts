import { RecipeService } from 'src/app/services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
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

  btnText = "Salvar";
  imagePath = '';

  editMode = false;

  allDisciplines = [];
  selectedRecipe: Recipe;

  allIngredients: Ingredient[] = [];

  selectedIngredients: SelectedIngredient[] = [];

  recipeForm = this.fb.group({
      imagePath: ['', Validators.required],
      name: ['', Validators.required],
      id: ['', Validators.required],
      description: ['', Validators.required],
      discipline: ['', Validators.required],
      region: ['', Validators.required],
      prepDuration: ['', Validators.required],
      yeldis: [+'', Validators.required],
      chefsNote: ['', Validators.required],
      ingredients: this.fb.array([this.selectedIngredients], Validators.required),
  });
  

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
  }

  ngOnInit(): void {
    this.addRecipe ='Você está no modo cadastro de receita, preencha todos os dados abaixo corretamente.';
    this.editRecipe = `Edite as informações da receita ${this.recipeForm.value.name} asassabaixo.`;

    this.globalStatesService.mobileMenuChanges.subscribe((val) => {
      this.isMobileMenu = val;
    });

    this.allDisciplines = this.disciplineService.getDisciplinesNames();
    
    this.allIngredients = this.ingredientService.getIngredients();


    //Gets the Recipe Code param to edit the Recipe Class
    let id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.editMode = true;
      //Search the Class Code at ClassService
      this.selectedRecipe = this.recipeService.getRecipe(id);

      this.selectedRecipe.ingredients.forEach(()=>{
        this.onAddIngredient();
      });
      console.log('teste',this.selectedRecipe.ingredients);
      
      if (this.selectedRecipe) {
        //updates the form with the class previous data
        this.recipeForm.setValue({
            imagePath: this.selectedRecipe.imagePath,
            name: this.selectedRecipe.name,
            id: this.selectedRecipe.id,
            description: this.selectedRecipe.description,
            discipline: this.selectedRecipe.discipline,
            region: this.selectedRecipe.region,
            prepDuration: this.selectedRecipe.prepDuration,
            yeldis: this.selectedRecipe.yeldis,
            chefsNote: this.selectedRecipe.chefsNote,
            ingredients: this.selectedRecipe.ingredients,
        });
        console.log('teste',this.selectedRecipe.region);
      } else {
        //The register code don't exists will throw an error
        alert('Essa receita não existe!');
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    } if(!id) {
      this.editMode = false;
    }
  }

  get ingredients() {
    return this.recipeForm.controls["ingredients"] as FormArray;
  }

  onAddIngredient(){
    //creates a new select box each time that add button is called
    // const ingredientsNames = new FormControl();
    const ingredientForm = this.fb.group({
      name: ['', Validators.required],
      unity: ['', Validators.required],
      quantity: ['', Validators.required]
    })

    //add the new select box to the formgroup
    this.ingredients.push(ingredientForm);
  }

  onDeleteIngredient(ingredientIndex: number) {
    this.ingredients.removeAt(ingredientIndex);
  }

  //method to edit class through the ClassService
   onUpdate() {
    this.recipeService.updateRecipe(
      this.recipeForm.value.id,{
        imagePath: this.selectedRecipe.imagePath,
        name: this.selectedRecipe.name,
        id: this.selectedRecipe.id,
        description: this.selectedRecipe.description,
        discipline: this.selectedRecipe.discipline,
        region: this.selectedRecipe.region,
        prepDuration: this.selectedRecipe.prepDuration,
        yeldis: this.selectedRecipe.yeldis,
        chefsNote: this.selectedRecipe.chefsNote,
        ingredients: this.selectedRecipe.ingredients,
      }
    );
  }

  //method to add a new class through the ClassService
   onAddRecipe() {
    this.recipeService.addRecipe(this.recipeForm.getRawValue());
  }

  //check if you are in edit or add mode and send updates
  onSubmit() {
    if (this.editMode) {
      this.onUpdate();
    } else {
      this.onAddRecipe();
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['/receitas']);
  }

  compareById(f1: Ingredient, f2: Ingredient):boolean {
    return f1 && f2 && f1.id === f2.id;
  }

  
}

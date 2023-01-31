import { SectionRecipe, SingleInstruction, PrepInstructions } from './../../shared-components/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup, Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplineService } from 'src/app/services/discipline.service';
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';
import { Recipe } from 'src/app/shared-components/models/recipe.model';
import { Ingredient } from 'src/app/shared-components/models/ingredient.model';
import { IngredientService } from 'src/app/services/ingredient.service';
import { DialogInterface } from 'src/app/shared-components/dialog/dialog.interface';
import { DialogComponent } from 'src/app/shared-components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

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

  btnText = "Salvar";
  imagePath = '';

  editMode = false;
  id: string;
  selectedRecipe: Recipe;


  allDisciplines = [];


  allIngredients: Ingredient[] = [];

  recipeForm: FormGroup;


  constructor(
    public dialog: MatDialog,
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
      recipeMain: this.fb.group({
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
      recipeSteps: this.fb.group({
        section: this.fb.array([], Validators.required),
        plateUp: this.fb.array([]),
        equipUtensils: this.fb.array([]),
      })

  });
  }

  ngOnInit(): void {
    this.addRecipe ='Você está no modo cadastro de receita, preencha todos os dados abaixo corretamente.';
    this.editRecipe = `Edite as informações da receita ${this.recipeForm.value.recipeMain.name} abaixo.`;

    this.globalStatesService.mobileMenuChanges.subscribe((val) => {
      this.isMobileMenu = val;
    });

    this.allDisciplines = this.disciplineService.getDisciplinesNames();

    this.allIngredients = this.ingredientService.getIngredients();

    //initialize formarrays start
    this.addSection();
    
    const numberOfArrays = [1, 2, 3, 4, 5];
    numberOfArrays.forEach((i) => {
      this.addPlateUp();
      this.addEquipUtensils();
    });
    //initialize formarrays end

    //gets the Subject Id param to edit the Subject
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id) {
      this.editMode = true;
      //Search the Recipe id at SubjectService
      this.selectedRecipe = this.recipeService.getRecipe(this.id);

      if(this.selectedRecipe.recipeMain.id) {
        let section: SectionRecipe[] = [...this.selectedRecipe.recipeSteps.section];
        let equipUtensils: string[] = [...this.selectedRecipe.recipeSteps.equipUtensils]
        console.log('testando section',section);
        // let plateUp: SingleInstruction[] = [...this.selectedRecipe.recipeSteps.plateUp];
        //updates the form with the subject previus data
         this.recipeForm.setValue({
          recipeMain: {
            name: this.selectedRecipe.recipeMain.name,
            id: this.selectedRecipe.recipeMain.id,
            imagePath: this.selectedRecipe.recipeMain.imagePath,
            description: this.selectedRecipe.recipeMain.description,
            discipline: this.selectedRecipe.recipeMain.discipline,
            region: this.selectedRecipe.recipeMain.region,
            prepDuration: this.selectedRecipe.recipeMain.prepDuration,
            yeldis: this.selectedRecipe.recipeMain.yeldis,
            prevPrepare: this.selectedRecipe.recipeMain.prevPrepare,
            chefsNote: this.selectedRecipe.recipeMain.chefsNote,
            harmonization: this.selectedRecipe.recipeMain.harmonization,
          },
          recipeSteps: {
            section: [
              {
                sectionName: this.selectedRecipe.recipeSteps.section[0].sectionName,
                ingredients: {
                  ingredientGroup: {
                    name: this.selectedRecipe.recipeSteps.section[0].ingredients[0].ingredientGroup[0].name,
                    unity: this.selectedRecipe.recipeSteps.section[0].ingredients[0].ingredientGroup[0].unity,
                    quantity: this.selectedRecipe.recipeSteps.section[0].ingredients[0].ingredientGroup[0].quantity,
                  }
                },
                prepInstructions: {
                  instructionSteps: {
                    step: this.selectedRecipe.recipeSteps.section[0].prepInstructions[0].instructionSteps[0].step,
                    description: this.selectedRecipe.recipeSteps.section[0].prepInstructions[0].instructionSteps[0].description,
                  }
                }
              },
            ],
            plateUp: [
              {
                step: this.selectedRecipe.recipeSteps.plateUp[0].step,
                description: this.selectedRecipe.recipeSteps.plateUp[0].description,
              },
            ],
            equipUtensils: equipUtensils,
    
          },
        });
      
      } else {
        //If the Recipe Id don't exists will throw an error
        alert('Essa receita não existe!');
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    } 

    if(!this.id) {
      this.editMode = false;
    }

  }



  //start of formarray related methods ------------------------------------

  //formarray getters
  get section(): FormArray {
    return this.recipeForm.controls['recipeSteps'].get('section') as FormArray;
  }

  get plateUp(): FormArray {
    return this.recipeForm.controls['recipeSteps'].get('plateUp') as FormArray;
  }

  get equipUtensils(): FormArray {
    return this.recipeForm.controls['recipeSteps'].get('equipUtensils') as FormArray;
  }

  getIngredientGroupControl(sectionIndex: number): FormArray {
    return this.section.at(sectionIndex).get('ingredients').get('ingredientGroup') as FormArray
  }

  getIntructionStepsControl(sectionIndex: number): FormArray {
    return this.section.at(sectionIndex).get('prepInstructions').get('instructionSteps') as FormArray
  }

  //section formarray
  newSection(): FormGroup {
    return this.fb.group({
      sectionName: [''],
      ingredients: this.fb.group({
        ingredientGroup: this.fb.array([
          this.fb.group({
            name: [''],
            unity: [''],
            quantity: ['']
          })
        ])
      }),
      prepInstructions: this.fb.group({
        instructionName: [''],
        instructionSteps: this.fb.array([
          this.fb.group({
            step: [''],
            description: ['']
          }),
        ]),
      }),
    });
  }

  addSection() {
    this.section.push(this.newSection());
  }

  removeSection(sectionIndex: number) {
    this.section.removeAt(sectionIndex);
  }

  //selectedIngredient formarray
  newIngredientLine(): FormGroup {
    return this.fb.group({
      name: [''],
      unity: [''],
      quantity: ['']
    });
  }

  addIngredientLine(sectionIndex: number) {
    this.getIngredientGroupControl(sectionIndex).push(this.newIngredientLine());
  }

  removeIngredientLine(sectionIndex: number, ingredientLineIndex: number) {
    this.getIngredientGroupControl(sectionIndex).removeAt(ingredientLineIndex);
  }

  //instructionSteps formarray

  newInstructionStep(): FormGroup {
    return this.fb.group({
      step: [''],
      description: ['']
    });
  }

  addInstructionStep(sectionIndex: number) {
    this.getIntructionStepsControl(sectionIndex).push(this.newInstructionStep());
  }

  removeInstructionStep(sectionIndex: number, instructionStepsIndex: number) {
    this.getIntructionStepsControl(sectionIndex).removeAt(instructionStepsIndex);
  }

  //plateup formarray

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

  //equipUtensils formaarray

  addEquipUtensils() {
    const equipUtensils = new FormControl();
    this.equipUtensils.push(equipUtensils);
  }

  removeEquipUtensils(equipUtensilsIndex: number) {
    this.equipUtensils.removeAt(equipUtensilsIndex);
  }

  //end of formarray related methods----------------------------------------

  //open dialog when user clicks go back arrow
  backLastPageDialog(){
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Voltar',
      dialogContent: 'Você tem certeza que deseja voltar sem que as alterações sejam salvas?',
      cancelButtonLabel: 'Cancelar',
      confirmButtonLabel: 'Sim',
      callbackMethod: () => {
        this.onCancel();
      },
    };
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: dialogInterface,
    });
  }

  //method to add a new class through the ClassService
  onAddRecipe() {
    this.recipeService.addRecipe(this.recipeForm.getRawValue());
  }

  onCancel() {
    this.router.navigate(['/receitas']);
  }

  //method to edit class through the ClassService
  onUpdate() {
    // this.recipeService.updateRecipe(
    //   this.recipeForm.value.recipe.id,
    //   {
    //     recipeMain: {
    //       name: this.selectedRecipe.recipeMain.name,
    //       id: this.selectedRecipe.recipeMain.id,
    //       imagePath: this.selectedRecipe.recipeMain.imagePath,
    //       description: this.selectedRecipe.recipeMain.description,
    //       discipline: this.selectedRecipe.recipeMain.discipline,
    //       region: this.selectedRecipe.recipeMain.region,
    //       prepDuration: this.selectedRecipe.recipeMain.prepDuration,
    //       yeldis: this.selectedRecipe.recipeMain.yeldis,
    //       prevPrepare: this.selectedRecipe.recipeMain.prevPrepare,
    //       chefsNote: this.selectedRecipe.recipeMain.chefsNote,
    //       harmonization: this.selectedRecipe.recipeMain.harmonization,
    //     },
    //     recipeSteps: {
    //       section: section,
    //       plateUp: plateUp,
    //       equipUtensils: equipUtensils,
  
    //     },
    //   }
    // );
    console.log('update');
  }

  //check if you are in edit or add mode and send updates
  onSubmit() {
    if(this.editMode) {
      this.saveEditDialog();
    }else {
      this.onAddRecipe();
      this.onCancel();
    }
  }

  saveEditDialog() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Salvar edições',
      dialogContent: 'Salvar as edições feitas?',
      cancelButtonLabel: 'Cancelar',
      confirmButtonLabel: 'Sim',
      callbackMethod: () => {
        this.onUpdate();
        this.onCancel();
      },
    };
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: dialogInterface,
    });
  }

  

  




}

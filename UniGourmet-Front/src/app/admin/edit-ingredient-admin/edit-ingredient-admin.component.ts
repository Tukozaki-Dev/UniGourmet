import { Component, OnInit } from '@angular/core';
import { Ingredient, Unity } from 'src/app/shared-components/models/ingredient.model';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-edit-ingredient-admin',
  templateUrl: './edit-ingredient-admin.component.html',
  styleUrls: ['./edit-ingredient-admin.component.css']
})
export class EditIngredientAdminComponent implements OnInit {

  public isMobileMenu: boolean;

  btnText = "Salvar"
  editStudent = "";
  addStudent =
    'Você está no modo cadastro de ingrediente, preencha todos os dados abaixo corretamente.';
  faImage = faImage;
  editMode: boolean = false;
  selectedIngredient: Ingredient;

  unity = Unity;

  ingredientForm = new FormGroup({
    id: new FormControl({value: '', disabled: true}),
    name: new FormControl('', Validators.required),
    unity: new FormControl(Unity.cabeça, Validators.required),
  });

  constructor(
    private globalStatesService: GlobalStatesServiceService,
    private ingredientService: IngredientService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.isMobileMenu = this.globalStatesService.mobileMenu;
  }

  ngOnInit() {
    this.editStudent = `Edite as informações do ingrediente ${this.ingredientForm.value.name} abaixo.`

    this.globalStatesService.mobileMenuChanges.subscribe((val) => {
      this.isMobileMenu = val;
    });

    //Gets the ingredient ID param to edit the ingredient
    let id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.editMode = true;
      //Search the ingredient ID at IngredientService
      this.selectedIngredient = this.ingredientService.getIngredient(id);
      if (this.selectedIngredient) {
        //updates the form with the ingredient previus data
        this.ingredientForm.setValue({
          id: this.selectedIngredient.id,
          name: this.selectedIngredient.name,
          unity: this.selectedIngredient.unity
        });
      }else {
        //The ingredient ID code don't exists will throw an error
        alert('Esse ingrediente não existe!');
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    } if(!id) {
      this.editMode = false;
    }
  }

  //method to edit ingredient through the IngredientService
   onUpdate() {
    this.ingredientService.updateIngredient(
      this.ingredientForm.value.id,{
        id: this.ingredientForm.value.id,
        name: this.ingredientForm.value.name,
        unity: this.ingredientForm.value.unity
      }
    );
  }

  //method to add a new ingredient through the IngredientService
   onAddStudent() {
    this.ingredientService.addIngredient(this.ingredientForm.getRawValue());
  }

  //check if you are in edit or add mode and send updates
  onSubmit() {
    if (this.editMode) {
      this.onUpdate();
    } else {
      this.onAddStudent();
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['/ingredientes']);
  }

}

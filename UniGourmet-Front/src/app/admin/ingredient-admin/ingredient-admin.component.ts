import { IngredientService } from './../../services/ingredient.service';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Ingredient } from 'src/app/shared-components/models/ingredient.model';


@Component({
  selector: 'app-ingredient-admin',
  templateUrl: './ingredient-admin.component.html',
  styleUrls: ['./ingredient-admin.component.css']
})
export class IngredientAdminComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'unity', 'actions'];
  dataSource: MatTableDataSource<Ingredient>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ingredientService: IngredientService) {
  }
  ngOnInit() {
    // Create 100 users
    const ingredients = this.ingredientService.getIngredients();
    
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ingredients);

  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource);
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onClick(event: string) {
    if(event === 'edit') {
      console.log('editando');
      
    }
    if(event === 'delete') {
      console.log('deletando');
    }
  }
}

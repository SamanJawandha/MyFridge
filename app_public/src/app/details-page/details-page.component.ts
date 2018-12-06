import { Component, Input } from '@angular/core';
import { FoodDataService } from '../food-data.service';
import { Food } from '../food';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent {

@Input()
food :Food;

@Input()
createHandler:Function;

@Input()
updateHandler:Function;

@Input()
deleteHandler:Function;

  constructor(private foodService:FoodDataService) { }

    createFood(food :Food){
	  this.foodService.createFood(food)
		.then((newFood:Food)=>{
			this.createHandler(newFood);
		});
    }
    
    deleteFood(food :Food):void{
	  this.foodService.deleteFood(food._id)
		.then((deletedFood: String)=>{
			this.deleteHandler(deletedFood, food);
		});
    }
    
   updateFood(food :Food):void{
	  this.foodService.updateFood(food)
		.then((updatedFood:Food)=>{
			this.updateHandler(updatedFood);
		});
    }
    
   
    
   /* trying to put client side validations
   
   private formIsValid(): boolean { 
        if (this.food.name && this.food.date && this.food.expiry && this.food.left_overs && this.food.quantity) {
            return true;
        } else {
            return false;
        }
    }
    
    
    public onCreateFood():void {
            this.formError = ''; 
            if (this.formIsValid()) { 
                console.log(this.food); 
            } else { 
                this.formError = 'All fields required, please try again';
            }
    }*/
   

}

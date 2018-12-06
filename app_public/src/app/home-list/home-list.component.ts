import { Component, OnInit } from '@angular/core';
import { FoodDataService } from '../food-data.service';
import { DetailsPageComponent } from '../details-page/details-page.component';
import { Food } from '../food';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [FoodDataService]
})

export class HomeListComponent implements OnInit {
    
        foods:Food[]
	selectedFood: Food

  constructor(private foodDataService: FoodDataService) { }
 
    
   ngOnInit() {
	  this.foodDataService	
		. getFoods()
		.then((foods:Food[])=>{
			this.foods=foods.map((food)=>{
				return food;
			});
		});
	}
	
	
	private getIndexOfFood=(foodId:String)=>{
		return this.foods.findIndex((food)=>{
			return food._id===foodId;
		});
  }
  
 selectFood(food : Food){
	 this.selectedFood=food;
	}
	createNewFood(){
		var food:Food={
			name:'',
			date:'',
			expiry:'',
			left_overs:'',
			quantity:''
			 
		};
		this.selectFood(food);
	}
	
	deleteFood=(foodId:String, food: Food)=>{
		var idx=this.getIndexOfFood(foodId);
		if( +food.quantity > 1 ){
          var foodQuantity = +food.quantity - 1 ;
          food.quantity = ""+foodQuantity;
          this.ngOnInit(); 
          this.selectFood(food);
      } else {
			this.foods.splice(idx, 1);
			this.selectFood(null);
            this.ngOnInit();
	   }
		return this.foods;
	}
	
	addFood=(food:Food)=>{
		if(food.name!=="" && food.date !==""){
			this.foods.push(food);
			this.selectFood(food);
		}
		return this.foods;
	
	}
    
	updateFood=(food:Food)=>{
		var idx=this.getIndexOfFood(food._id);
		if(idx !== -1){
			this.foods[idx]=food;
			this.selectFood(food);
		}
		return this.foods;
	}

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StockModel } from 'src/app/models/stock-model';
import { StockServiceService } from '../../services/stock-service.service';

@Component({
  selector: 'app-display-stocks',
  templateUrl: './display-stocks.component.html',
  styleUrls: ['./display-stocks.component.css']
})
export class DisplayStocksComponent implements OnInit {
  list: StockModel[];
  form: FormGroup;


  constructor(private service: StockServiceService) {
    this.list = [];

    this.form = new FormGroup({
      name: new FormControl('')
    });
   }

  ngOnInit(): void {
      

    this.onChanges();
  }

  onChanges(): void {
    this.form.valueChanges.subscribe(formValue => {
      formValue.name && formValue.name.length >= 3 && this.loadStocks(formValue.name);
    });
  }

  loadStocks(name: string) {
    this.service.getStocks(name)
          .subscribe( data => {
             this.list = data; 
           }); 
  }

}

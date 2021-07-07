import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockServiceService } from 'src/app/services/stock-service.service';
import { StockModel } from 'src/app/models/stock-model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-display-stocks-detail',
  templateUrl: './display-stocks-detail.component.html',
  styleUrls: ['./display-stocks-detail.component.css']
})
export class DisplayStocksDetailComponent implements OnInit {
  model: StockModel | null;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private service: StockServiceService) {
      this.model = null;
      this.form = new FormGroup({
        code: new FormControl(''),
        name: new FormControl(''),
        type: new FormControl(''),
        price: new FormControl(''),
        currency: new FormControl(''),
      });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id)
    {
      this.service.getStockById(id)
      .subscribe(detail => {
        this.model = detail;
        this.form.patchValue(this.model);
      });
    }  else {
        alert('Invalid ID!');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdUnit } from '../index/AdUnit';
import { AdunitService } from '../../adunit.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { ADUnitEditedAction } from '../../store/UI/ui.actions';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  au: Observable<AdUnit>;
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private adunitservice: AdunitService,
              private fb: FormBuilder,
              private store: Store<AppState>) { 
                this.createForm();
                
                console.log(':::constructor');
                this.au =  this.store.select(state => state.ui.adunit);
              }
  
  createForm(){
    this.angForm = this.fb.group({
      unit_name: ['', Validators.required],
      unit_price: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.adunitservice.editAdUnit(params['id']).subscribe(res => {this.store.dispatch(new ADUnitEditedAction(res as AdUnit))});
    });
  }

  onChangeModelValuePrice(event) {
  }

  
  onChangeModelValueName(event) { 
  }

  updateAdUnit(unit_name, unit_price){
    this.route.params.subscribe(params => {
      this.adunitservice.updateAdUnit(unit_name,unit_price, params['id']);
      this.router.navigate(['index']);
    })

  }

}

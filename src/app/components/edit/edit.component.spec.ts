import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';

import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { APP_BASE_HREF } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.reducer';

const routes: Routes = [
]

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponent ],
      imports: [ReactiveFormsModule,    RouterModule.forRoot(routes),HttpClientModule, StoreModule.forRoot(reducers)],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

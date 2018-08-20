import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { RouterModule, Routes } from '@angular/router';

import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [

]

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [    
        SlimLoadingBarModule,
        RouterModule.forRoot(routes),
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ng6crud'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng6crud');
  }));

});

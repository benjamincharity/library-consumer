
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InputComponent } from './input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TsCardModule } from '@terminus/ui/card';
import { TsInputModule } from '@terminus/ui/input';
import { TsSelectModule } from '@terminus/ui/select';


describe('InputComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        CommonModule,
        TsSelectModule,
        TsCardModule,
        TsInputModule,
      ],
      declarations: [
        InputComponent,
      ]
    }).compileComponents();
  });


  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(InputComponent);
    const app = fixture.debugElement.componentInstance;

    /*
     *const foo = getInputElement(fixture);
     *console.log('foo: ', foo);
     */

    expect(app).toBeTruthy();
  }));

});

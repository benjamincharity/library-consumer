
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
/*
 *import { getInputElement } from '@terminus/ui/input/testing';
 */

import { InputComponent } from './input.component';


describe('InputComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        InputComponent,
      ],
    }).compileComponents();
  }));


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

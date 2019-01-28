import { TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { TsAutocompleteModule } from '@terminus/ui/autocomplete';
import { TsAutofocusModule } from '@terminus/ui/autofocus';
import { TsButtonModule } from '@terminus/ui/button';
import { TsCardModule } from '@terminus/ui/card';
import { TsChartModule, TS_AMCHARTS_TOKEN, TsAmChartsToken } from '@terminus/ui/chart';
import { TsCheckboxModule } from '@terminus/ui/checkbox';
import { TsConfirmationModule } from '@terminus/ui/confirmation';
import { TsCopyModule } from '@terminus/ui/copy';
import { TsCSVEntryModule } from '@terminus/ui/csv-entry';
import { TsDateRangeModule } from '@terminus/ui/date-range';
import { TsFileUploadModule } from '@terminus/ui/file-upload';
import { TsIconButtonModule } from '@terminus/ui/icon-button';
import { TsIconModule } from '@terminus/ui/icon';
import { TsInputModule } from '@terminus/ui/input';
import { TsLinkModule } from '@terminus/ui/link';
import { TsLoadingOverlayModule } from '@terminus/ui/loading-overlay';
import { TsLoginFormModule } from '@terminus/ui/login-form';
import { TsMenuModule } from '@terminus/ui/menu';
import { TsNavigationModule } from '@terminus/ui/navigation';
import { TsPaginatorModule } from '@terminus/ui/paginator';
import { TsPipesModule } from '@terminus/ui/pipes';
import { TsRadioGroupModule } from '@terminus/ui/radio-group';
import { TsScrollbarsModule } from '@terminus/ui/scrollbars';
import { TsSearchModule } from '@terminus/ui/search';
import { TsSelectModule, TsSelectComponent, TsSelectOptionComponent } from '@terminus/ui/select';
import { TsSortModule } from '@terminus/ui/sort';
import { TsSpacingModule } from '@terminus/ui/spacing';
import { TsTableModule } from '@terminus/ui/table';
import { TsToggleModule } from '@terminus/ui/toggle';
import { TsTooltipModule } from '@terminus/ui/tooltip';

import { AppComponent } from './app.component';


describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        CommonModule,

        TsAutocompleteModule,
        TsAutofocusModule,
        TsButtonModule,
        TsCardModule,
        TsChartModule,
        TsCheckboxModule,
        TsConfirmationModule,
        TsCopyModule,
        TsCSVEntryModule,
        TsDateRangeModule,
        TsFileUploadModule,
        TsIconButtonModule,
        TsIconModule,
        TsInputModule,
        TsLinkModule,
        TsLoadingOverlayModule,
        TsLoginFormModule,
        TsMenuModule,
        TsNavigationModule,
        TsPaginatorModule,
        TsPipesModule,
        TsRadioGroupModule,
        TsScrollbarsModule,
        TsSearchModule,
        TsSelectModule,
        TsSortModule,
        TsSpacingModule,
        TsTableModule,
        TsToggleModule,
        TsTooltipModule,
      ],
      declarations: [
        AppComponent,
        /*
         *TsSelectComponent,
         *TsSelectOptionComponent,
         */
      ],
    }).compileComponents();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });

});

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import {MatInputModule,MatDatepickerModule, MatNativeDateModule,MatFormFieldModule,  } from '@angular/material';

// Date Picker Component
//import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

// New Date Picker Component
import {DpDatePickerModule} from 'ng2-date-picker';

// Custom Component 
import { PasswordComponent } from './controls/password/password.component';
import { TextareaComponent } from './controls/textarea/textarea.component';
import { TextboxComponent } from './controls/textbox/textbox.component';
import { CustomTextboxComponent } from './controls/customtextbox/custom-textbox.component';
import { RadioButtonComponent } from './controls/radioButton/radiobutton.component';
import { DropdownComponent } from './controls/dropdown/dropdown.component';
import { ButtonComponent } from './controls/button/button.component';
import { checkboxComponent } from './controls/checkbox/checkbox.component';
import { MultidropdownComponent } from './controls/multidropdown/multidropdown.component';
import { SinglefileComponent } from './controls/singlefile/singlefile.component';
//import { DatepickerComponent } from './controls/datepicker/datepicker.component';

import { DatePickerComponent } from './controls/date-picker/date-picker.component';
import { DatePickerNewComponent } from './controls/datepickernew/datepickernew.component';
import { ModalModule } from '../_modal';



@NgModule({
  declarations: [
    PasswordComponent,
    TextareaComponent,
    TextboxComponent,
    CustomTextboxComponent,
    RadioButtonComponent,
    DropdownComponent,
    ButtonComponent,
    checkboxComponent,
    MultidropdownComponent,
    SinglefileComponent,
    //DatepickerComponent,
    DatePickerComponent,
    DatePickerNewComponent,
    
  ],
  imports: [
  BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DpDatePickerModule,
    //OwlDateTimeModule,
    //OwlNativeDateTimeModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,    
    ModalModule,
  ],
  exports: [
    PasswordComponent,
    TextareaComponent,
    TextboxComponent,
    CustomTextboxComponent,
    RadioButtonComponent,
    DropdownComponent,
    ButtonComponent,
    checkboxComponent,
    MultidropdownComponent,
    SinglefileComponent,
    //DatepickerComponent,
    DatePickerComponent,
    DatePickerNewComponent
    
  ],
})
export class CoreModule { }



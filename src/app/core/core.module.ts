import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

// Date Picker Component
//import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

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
  ],
  imports: [
  BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //OwlDateTimeModule,
    //OwlNativeDateTimeModule
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
  ],
})
export class CoreModule { }



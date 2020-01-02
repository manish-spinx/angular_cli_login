import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

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
    MultidropdownComponent
  ],
  imports: [
  BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
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
    MultidropdownComponent
  ],
})
export class CoreModule { }



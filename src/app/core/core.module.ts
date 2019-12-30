import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { PasswordComponent } from './controls/password/password.component';
import { TextareaComponent } from './controls/textarea/textarea.component';
import { TextboxComponent } from './controls/textbox/textbox.component';
import { CustomTextboxComponent } from './controls/customtextbox/custom-textbox.component';


@NgModule({
  declarations: [
    PasswordComponent,
    TextareaComponent,
    TextboxComponent,
    CustomTextboxComponent,
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
  ],
})
export class CoreModule { }



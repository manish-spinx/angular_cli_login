import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { PasswordComponent } from './controls/password/password.component';
import { TextareaComponent } from './controls/textarea/textarea.component';
import { TextboxComponent } from './controls/textbox/textbox.component';

@NgModule({
  declarations: [
    PasswordComponent,
    TextareaComponent,
    TextboxComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PasswordComponent,
    TextareaComponent,
    TextboxComponent,
  ],
})
export class CoreModule { }



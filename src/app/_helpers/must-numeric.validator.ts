import { FormGroup } from '@angular/forms';
export function MustNumeric(controlName: string) {
    return (formGroup: FormGroup) => 
    {
        const control = formGroup.controls[controlName];

        if (control.errors && !control.errors.mustNumeric) {
            return;
        }

         if(control.value.match("^[0-9]*$"))
         {
            control.setErrors(null);
         }
         else{
            control.setErrors({ mustNumeric: true });
         }

    }
}


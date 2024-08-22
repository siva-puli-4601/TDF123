import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function CheckPassword():ValidatorFn{
    return ((control:AbstractControl): ValidationErrors | null =>{

        const pass=control.get("password");
        const conpass=control.get("conformpass");
        if(pass?.pristine && conpass?.pristine)
            return null;
        return (pass && conpass && pass.value!=conpass.value)?{erroemsg:"not same"}:null;

    })
}

export function checkLogin()
{
    
}
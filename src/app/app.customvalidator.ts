import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// export function CheckUsername(control: AbstractControl): ValidationErrors | null {
//     const username = control.value;
//     const patt= /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
//     if(username==="siva")
//     {
//         return {errorUsername:{value:username}};
//     }
//     else
//     return null;
// }

export function CheckUsername(value:RegExp): ValidatorFn{
    return((control: AbstractControl): ValidationErrors | null =>{
        const username = control.value;
       
        if(!value.test(username))
        {
            return {errorUsername:{value:username}};
        }
        else
        return null;
    });
}
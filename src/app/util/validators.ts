import { AbstractControl } from '@angular/forms';
export const validateWhiteSpace = (control:AbstractControl) => {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    return !isWhiteSpace?null:{trimmed:true};
}
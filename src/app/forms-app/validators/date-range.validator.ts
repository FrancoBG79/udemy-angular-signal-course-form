import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function createPromoRangeValitor(): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    const start: Date = form.get('promoStartAt')?.value;
    const end: Date = form.get('promoEndAt')?.value;
    if (start && end) {
      const isRangeValid = (end.getTime() - start.getTime() > 0);
      return isRangeValid ? null : { promoPeriod: true };
    }
    return null; 
    
  }
}
import {AbstractControl} from "@angular/forms";

export interface Form {
  firstname: AbstractControl<string | null>;
  lastname: AbstractControl<string | null>;
  phone: AbstractControl<string | null>;
  email: AbstractControl<string | null>;
  password: AbstractControl<string | null>;
}

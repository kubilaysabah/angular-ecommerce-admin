import {AbstractControl} from "@angular/forms";

export interface Form {
  email: AbstractControl<string | null>;
  password: AbstractControl<string | null>;
}

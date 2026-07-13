import {CanDeactivateFn} from "@angular/router";
import {HasUnsavedChanges} from "./has-unsaved-changed.model";


export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = (component) => {
  if (component.hasUnsavedChanges()) {
    return confirm('You have unsaved changes. Leave the page?');
  }
  return true;
};

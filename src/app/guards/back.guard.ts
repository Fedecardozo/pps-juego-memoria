import { CanDeactivateFn } from '@angular/router';
import { UtilService } from '../services/util.service';
import { inject } from '@angular/core';

export const backGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  const util: UtilService = inject(UtilService);

  return util.back;
};

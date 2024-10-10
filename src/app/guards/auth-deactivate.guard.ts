import { CanDeactivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';

export const authDeactivateGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  const auhService: UserService = inject(UserService);
  // console.log(component);
  // console.log(currentRoute);
  // console.log(currentState);
  // console.log(nextState);
  return auhService.correo !== null;
};

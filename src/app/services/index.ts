import { AuthenticationService } from './authentication.service';
import { FormService } from './form.service';

export const fromServices = [
    AuthenticationService,
    FormService
];

export * from './authentication.service';
export * from './form.service';
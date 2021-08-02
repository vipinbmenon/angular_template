import { AuthGuard } from './auth.guard';
import { NoauthGuard } from './noauth.guard';

export const services: any[] = [AuthGuard, NoauthGuard];

export * from   './auth.guard'
export * from   './noauth.guard'
export * from   './module-import.guard'


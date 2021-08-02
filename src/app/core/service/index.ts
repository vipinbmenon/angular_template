import { AuthService } from './auth.service';
import { ThemeService } from './theme.service';

export const services: any[] = [AuthService,ThemeService];

export * from './auth.service';
export * from './theme.service';
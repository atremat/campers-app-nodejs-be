import path from 'path';

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const FIFTEEN_MINUTES = 1000 * 60 * 15;

export const ONE_MONTH = 1000 * 60 * 60 * 24 * 30;

export const JWT_SECRET = 'JWT_SECRET';

export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');

export const APP_DOMAIN = 'APP_DOMAIN';

export const EMAIL_VARS = {
  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASS: 'SMTP_PASS',
  SMTP_FROM: 'SMTP_FROM',
};

export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json');

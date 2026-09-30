import { HandlebarsAdapter } from '@nestjs-modules/mailer/adapters/handlebars.adapter';
import { fileURLToPath } from 'node:url';

const templatesDir = fileURLToPath(
  new URL('../notification/templates/', import.meta.url),
);

export const notificationConfig = {
  transport: {
    host: 'localhost',
    port: 1025,
    secure: false,
  },
  defaults: {
    from: '"No Reply" <noreply@example.com>',
  },
  template: {
    dir: templatesDir,
    adapter: new HandlebarsAdapter(),
    options: {
      strict: true,
    },
  },
}
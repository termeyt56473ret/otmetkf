import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ru.otmetka.worker',
  appName: 'Отметка',
  webDir: 'www',
  // ВАЖНО: замени на свой настоящий домен, когда переедешь на VDS.
  // Пока указан текущий адрес на Railway.
  server: {
    url: 'https://otmetka-production.up.railway.app',
    cleartext: false
  }
};

export default config;

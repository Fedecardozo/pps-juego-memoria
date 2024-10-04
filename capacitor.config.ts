import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.fede.memoria',
  appName: 'memoria',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchFadeOutDuration: 700,
      backgroundColor: '#83a5ab',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      androidSpinnerStyle: 'large',
      splashFullScreen: false,
      splashImmersive: true,
      useDialog: false,
    },
  },
};

export default config;

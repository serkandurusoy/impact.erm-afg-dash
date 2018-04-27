if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register(
        '/service-worker.js',
      );
      // eslint-disable-next-line no-console
      console.log('SW registered: ', registration);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('SW registration failed: ', error);
    }
  });
}

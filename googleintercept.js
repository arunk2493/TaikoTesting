const { intercept, closeBrowser } = require('taiko');
(async () => {
    try {
        await intercept("https://www.google.com", "https://www.github.com");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();

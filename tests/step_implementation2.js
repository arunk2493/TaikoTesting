const { goto, write, click } = require('taiko');

// Insert step text below as first parameter
step("Goto google page", async function() {
	await goto("https://www.google.com");
	await write("taiko test automation");
	await click("Google Search");
});

// Set Highscore
(async () => { let key = Object.keys(await chrome.storage.local.get())[0]; chrome.storage.local.set({ key: prompt("highscore? ") }) })()

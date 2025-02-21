document.getElementById('renameButton').addEventListener('click', async () => {
    const newTitle = document.getElementById('newTitle').value;
    if (newTitle) {
      // Query the active tab in the current window.
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      // Inject a script to change the document title.
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (title) => {
          document.title = title;
        },
        args: [newTitle]
      });
    }
  });
  
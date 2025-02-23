document.getElementById('renameButton').addEventListener('click', renameTab);
document.getElementById('newTitle').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    renameTab();
  }
});

async function renameTab() {
  const newTitle = document.getElementById('newTitle').value;
  if (newTitle) {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (title) => {
        document.title = title;
      },
      args: [newTitle]
    });
  }
}


chrome.runtime.onMessage.addListener(async (obj) => {
  displayPopup(obj.convertedCode);
  return true;
});

function displayPopup(convertedCode) {
  let modal = document.getElementById('converted-code');
  if (modal) {
    modal.remove();
  }

  modal = document.createElement('div');
  modal.id = 'converted-code';
  modal.style.position = 'fixed';
  modal.style.top = '0%';
  modal.style.right = '20px';
  modal.style.backgroundColor = 'white';
  modal.style.padding = '20px';
  modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  modal.style.zIndex = '10000';
  modal.style.maxWidth = '50%';
  modal.style.maxHeight = '50%';
  modal.style.overflow = 'auto';

  // Create a pre element to display the converted code
  const pre = document.createElement('pre');
  pre.style.color = 'black';
  pre.style.whiteSpace = 'pre-wrap';
  pre.textContent = convertedCode;
  modal.appendChild(pre);

  // Create a button to close the modal
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  modal.appendChild(closeButton);
  
  // Create a button to copy converted code
  const copyButton = document.createElement('button');
  copyButton.textContent = 'Copy';
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(convertedCode).then(() => {
      alert('Code copied to clipboard!');
    });
  });

  modal.appendChild(copyButton);

  document.body.appendChild(modal);
}

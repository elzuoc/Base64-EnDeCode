const getDom = (dom) => document.querySelector(dom);

const base64Encode = () => {
  getDom('#base64EncodeResult').textContent = window.btoa(getDom('#str').value);
};
const base64Decode = () => {
  getDom('#base64DecodeResult').textContent = window.atob(getDom('#base64Str').value);
};
 
getDom('#base64EncodeResult').addEventListener('click', async() => {
  try {
    await navigator.clipboard.writeText(getDom('#base64EncodeResult').textContent);
    alert(`複製 ${getDom('#base64EncodeResult').textContent} 成功`);
  } catch(error) {
    console.error(error);
  }
});

getDom('#base64DecodeResult').addEventListener('click', async() => {
  try {
    await navigator.clipboard.writeText(getDom('#base64DecodeResult').textContent);
    alert(`複製 ${getDom('#base64DecodeResult').textContent} 成功`);
  } catch(error) {
    console.error(error);
  }
});

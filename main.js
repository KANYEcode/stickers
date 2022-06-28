const copyToClipboard = str => navigator.clipboard.writeText(`ǀ${str}ǀ`);
const container = document.getElementById('container');

for (let i = 90; i < 3000; i++) {
  const code = i.toString(36)
  const url = `https://prd.foxtrotstream.xyz/a/stk/${code}.webp`;

  setTimeout(() => {
    const img = new Image();
    img.src = url;
    img.title = `${code}`;
    img.addEventListener('load', () => {
      img.addEventListener('click', () => copyToClipboard(img.title));
      container.appendChild(img);
    });
  }, 5 * i);
}

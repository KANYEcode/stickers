// load and process tags
let labels = {};
let csv = await(await fetch('tags.csv')).text()
csv.split('\r\n').slice(1).forEach(row => {
  let items = row.split(',');
  let code = items[1];
  let tags = items.slice(3).filter(i => i.length);
  labels[code] = tags.join(' ').toLowerCase();
});


const copyToClipboard = str => {
  navigator.clipboard.writeText(`ǀ${str}ǀ`);
  M.toast({ text: `Copied ${str}` });
};
const container = document.getElementById('container');

for (let i = 90; i < 3000; i++) {
  const code = i.toString(36)
  const url = `https://prd.foxtrotstream.xyz/a/stk/${code}.webp`;

  setTimeout(() => {
    const img = new Image();
    img.src = url;
    img.title = `${code}`;
    img.setAttribute('tags', labels[code])
    img.addEventListener('load', () => {
      img.addEventListener('click', () => copyToClipboard(img.title));
      container.appendChild(img);
    });
  }, 5 * i);
}

const searchBox = document.getElementById('searchBox');
searchBox.addEventListener('input', e => container.childNodes.forEach(i => i.classList.toggle('hidden', !i.getAttribute('tags').includes(searchBox.value.trim().toLowerCase()))));

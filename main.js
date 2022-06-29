const copyToClipboard = str => {
  navigator.clipboard.writeText(`ǀ${str}ǀ`);
  M.toast({ text: `Copied ${str}` });
};

const sanitize = str => str.trim().toLowerCase().replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, '');


// load and process tags
let labels = {};
let csv = await(await fetch('tags.csv')).text()
csv.split(/\r?\n/).slice(1).forEach(row => {
  let items = row.split(',');
  let code = items[1];
  let tags = items.slice(3).filter(i => i.length);
  labels[code] = sanitize(tags.join(' '));
});


const container = document.getElementById('container');

for (let i = 90; i < 5000; i++) {
  const code = i.toString(36)
  const url = `https://prd.foxtrotstream.xyz/a/stk/${code}.webp`;

  const img = new Image();
  img.style.display = 'none';
  img.src = url;
  img.title = `${code}`;
  img.setAttribute('tags', labels[code]);

  img.addEventListener('error', () => img.remove());
  container.appendChild(img);

  img.addEventListener('load', () => {
    img.style.display = 'block';
    img.addEventListener('click', () => copyToClipboard(img.title));
  });
}

const searchBox = document.getElementById('searchBox');
searchBox.addEventListener('input', e => container.childNodes.forEach(i => i.classList.toggle('hidden', !i.getAttribute('tags').includes(sanitize(searchBox.value)))));

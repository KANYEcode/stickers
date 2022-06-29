const copyToClipboard = str => {
  navigator.clipboard.writeText(`ǀ${str}ǀ`);
  M.toast({ text: `Copied ${str}` });
};

const sanitize = str => str.trim().replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, '').toLowerCase();

// load and process tags
let labels = {};
let csv = await(await fetch('tags.csv')).text();

let uniques = {};

csv.split(/\r?\n/).slice(1).forEach(row => {
  let items = row.split(',');
  if (items[0].length) {
    uniques[items[0]] = null;
  }
  let code = items[1];
  let tags = items.slice(3).filter(i => i.length);
  labels[code] = sanitize(tags.join(' '));
});

const searchBox = document.getElementById('searchBox');
searchBox.addEventListener('input', e => container.childNodes.forEach(i => i.classList.toggle('hidden', !i.getAttribute('tags').includes(sanitize(searchBox.value)))));
const instances = M.Autocomplete.init(searchBox, {
  data: uniques,
  limit: 1,
});


const container = document.getElementById('container');

for (let i = 90; i < 5000; i++) {
  const code = i.toString(36);
  const url = `https://prd.foxtrotstream.xyz/a/stk/${code}.webp`;

  const img = new Image();
  img.classList.add('hidden');

  img.src = url;
  img.title = `${code}`;
  img.setAttribute('tags', labels[code]);

  img.addEventListener('error', () => img.remove());
  container.appendChild(img);

  img.addEventListener('load', () => {
    img.classList.remove('hidden');
    img.addEventListener('click', () => copyToClipboard(img.title));
  });
}

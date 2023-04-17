const reverseChildren = (parent) =>
  parent.append(...Array.from(parent.childNodes).reverse());

let sortOrder = localStorage.getItem("sortOrder") || "oldest";
const sortSwitch = document.getElementById("sortSwitch");
sortSwitch.checked = sortOrder !== "oldest";

const cardBin = document.querySelector(".bin.cards");
const userBin = document.querySelector(".bin.users");
const stickerBin = document.querySelector(".bin.stickers");

sortSwitch.addEventListener("change", (event) => {
  if (
    (event.currentTarget.checked &&
      stickerBin.firstElementChild.title === "2i") ||
    (!event.currentTarget.checked && stickerBin.firstChild.title !== "2i")
  ) {
    reverseChildren(cardBin);
    reverseChildren(userBin);
    reverseChildren(stickerBin);
  }
  localStorage.setItem(
    "sortOrder",
    event.currentTarget.checked ? "newest" : "oldest"
  );
});

const copyToClipboard = (str) => {
  navigator.clipboard.writeText(`ǀ${str}ǀ`);
  M.toast({ text: `Copied ${str}`, classes: "cyan" });
};

const sanitize = (str) =>
  str
    .trim()
    .replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, "")
    .toLowerCase();

const users = [
  {
    name: "nick",
    url: "https://prd.foxtrotstream.xyz/a/av/fb67015b68ab4b5c842d29175cdd85c4.webp",
  },
  {
    name: "vince",
    url: "https://prd.foxtrotstream.xyz/a/av/6cc7ccdd8b867ee2cca5b17ae70be4d3.webp",
  },
  {
    name: "brysongray",
    url: "https://prd.foxtrotstream.xyz/a/av/982d5b011bf1f56ca9a9b53e90e0480a.webp",
  },
  {
    name: "tylerrussell",
    url: "https://prd.foxtrotstream.xyz/a/av/6a41fe3e905e0810f090eff8a73e3ecf.webp",
  },
  {
    name: "tylerrussell",
    url: "https://prd.foxtrotstream.xyz/a/av/708fb405f8863b4cdc7e36062b3dfd55.webp",
  },
  {
    name: "beardson",
    url: "https://prd.foxtrotstream.xyz/a/av/aae4fe626e86236498724aaa6f433ec1.webp",
  },
  {
    name: "beardson",
    url: "https://prd.foxtrotstream.xyz/a/av/e6228a89403ca0c3648048cec1f98530.webp",
  },
  {
    name: "franssen",
    url: "https://prd.foxtrotstream.xyz/a/av/99749aa7ba9446e9f3f678dd120d5e18.webp",
  },
  {
    name: "joetheboomer",
    url: "https://prd.foxtrotstream.xyz/a/av/22245801385ec69f5754d5307795533f.webp",
  },
  {
    name: "jimbozoomer",
    url: "https://prd.foxtrotstream.xyz/a/av/23c148cd85c7e27ee7d36b161d708dd5.webp",
  },
  {
    name: "kaiclips",
    url: "https://prd.foxtrotstream.xyz/a/av/a750178ad609532620bd0e624e7de4ec.webp",
  },
  {
    name: "boseph",
    url: "https://prd.foxtrotstream.xyz/a/av/984b4ff39f8016344be7f483fabb8e51.webp",
  },
  {
    name: "boseph",
    url: "https://prd.foxtrotstream.xyz/a/av/eeebc113b12dd46709c9117d1a880933.webp",
  },
  {
    name: "bakedalaska",
    url: "https://prd.foxtrotstream.xyz/a/av/076a062bc1caedb0b919d88c1cf4b764.webp",
  },
  {
    name: "veyta",
    url: "https://prd.foxtrotstream.xyz/a/av/28d7e71f6e8b8c71dc35c8ff8ac36159.webp",
  },
  {
    name: "veyta",
    url: "https://prd.foxtrotstream.xyz/a/av/a32918b3faa7a6a267bfb37a18cbed41.webp",
  },
  {
    name: "veyta",
    url: "https://prd.foxtrotstream.xyz/a/av/f409c195aad6237b004b86e21a3e5dfa.webp",
  },
  {
    name: "veyta",
    url: "https://prd.foxtrotstream.xyz/a/av/45522a02de8f61a02aabff0d3bb27983.webp",
  },
  {
    name: "augie",
    url: "https://prd.foxtrotstream.xyz/a/av/2d0569ea03e55d1d8d88cab98ea41fdb.webp",
  },
  {
    name: "roosh",
    url: "https://prd.foxtrotstream.xyz/a/av/0bcced10849adfed39a35bf1dba83aa0.webp",
  },
  {
    name: "ethanralph",
    url: "https://prd.foxtrotstream.xyz/a/av/6d5fb630938962f7254550e8cd22715b.webp",
  },
  {
    name: "stewpeters",
    url: "https://prd.foxtrotstream.xyz/a/av/86a251dc6486f8f12d46bceb65360c74.webp",
  },
  {
    name: "wurzelroot",
    url: "https://prd.foxtrotstream.xyz/a/av/858ddbf05de0c0767c3b7fce6dc86d65.webp",
  },
  {
    name: "tenryo",
    url: "https://prd.foxtrotstream.xyz/a/av/9016109bbdcbdfd19debcfaa18a70d5c.webp",
  },
  {
    name: "daltonclodfelter",
    url: "https://prd.foxtrotstream.xyz/a/av/79387e6170a097b112805ab83cf4f383.webp",
  },
  {
    name: "daltonclodfelter",
    url: "https://prd.foxtrotstream.xyz/a/av/3ddf2edf1ba9f2dd3d14142a2c3a38e2.webp",
  },
  {
    name: "shooter",
    url: "https://prd.foxtrotstream.xyz/a/av/92abcc1864d79540a11296457b31bcd7.webp",
  },
  {
    name: "crosstalknews",
    url: "https://prd.foxtrotstream.xyz/a/av/b68898df3433b16eab706b8f90233a8f.webp",
  },
  {
    name: "crosstalknews",
    url: "https://prd.foxtrotstream.xyz/a/av/4087fae89542453f28121d76d9ebe952.webp",
  },
  {
    name: "laurenwitzke",
    url: "https://prd.foxtrotstream.xyz/a/av/ec59aebc811cb71e6c7621735f5770c3.webp",
  },
  {
    name: "ux",
    url: "https://prd.foxtrotstream.xyz/a/av/8ab5216a68a746217ab9683348bc1759.webp",
  },
  {
    name: "ux",
    url: "https://prd.foxtrotstream.xyz/a/av/a178da02d92170bbb3721b271026d9dc.webp",
  },
  {
    name: "trsartor",
    url: "https://prd.foxtrotstream.xyz/a/av/a1142881ca41005f9084d5673ab25905.webp",
  },
  {
    name: "gab",
    url: "https://prd.foxtrotstream.xyz/a/av/43c4ed03f3b29f6eb7e9f40cb69d909c.webp",
  },
  {
    name: "alexjones",
    url: "https://prd.foxtrotstream.xyz/a/av/22292afe5481aeb0a6bf27bd391d4ea4.webp",
  },
  {
    name: "bookcat",
    url: "https://prd.foxtrotstream.xyz/a/av/b5760394dc0fbef71e306e8cdf8899f2.webp",
  },
  {
    name: "althype",
    url: "https://prd.foxtrotstream.xyz/a/av/2710ab405b6c23a0aa70bdb63291772b.webp",
  },
  {
    name: "michaelalberto",
    url: "https://prd.foxtrotstream.xyz/a/av/8689a8b2081ed0d6cdf41e6897e07510.webp",
  },
  {
    name: "michaelalberto",
    url: "https://prd.foxtrotstream.xyz/a/av/97f549c5af4f01aead23575a13d27edc.webp",
  },
  {
    name: "patrickhowley",
    url: "https://prd.foxtrotstream.xyz/a/av/316c9c8e2cf37df0fa2deeaf724ca4ca.webp",
  },
  {
    name: "paultown",
    url: "https://prd.foxtrotstream.xyz/a/av/5c1f12973bfd23d8eda10b0bc4c6b070.webp",
  },
  {
    name: "paultown",
    url: "https://prd.foxtrotstream.xyz/a/av/0a3079f022469d88236035b7a1c90fde.webp",
  },
  {
    name: "paultown",
    url: "https://prd.foxtrotstream.xyz/a/av/ec23f202544ff644a93d56aff2445d3d.webp",
  },
  {
    name: "paultown",
    url: "https://prd.foxtrotstream.xyz/a/av/324f7b0dd894a9049446fb877701996d.webp",
  },
  {
    name: "woozuh",
    url: "https://prd.foxtrotstream.xyz/a/av/4f3f4d178561c48687db2cc5a37ec387.webp",
  },
  {
    name: "aff",
    url: "https://prd.foxtrotstream.xyz/a/av/2acf7f32009c9df31644ceb04bcb88db.webp",
  },
  {
    name: "jlp",
    url: "https://prd.foxtrotstream.xyz/a/av/5296f49b756eb7ad7b4b30c01aa8cd00.webp",
  },
  {
    name: "chieftrumpster",
    url: "https://prd.foxtrotstream.xyz/a/av/83b67e11f2cdff651dfedcf0e593d5e5.webp",
  },
  {
    name: "valiantnews",
    url: "https://prd.foxtrotstream.xyz/a/av/a348f9cd12fbc60c7eec7086cb27a2cb.webp",
  },
  {
    name: "waynedupreeshow",
    url: "https://prd.foxtrotstream.xyz/a/av/9973611d4121f4fdd7371b091618b2cc.webp",
  },
  {
    name: "josh",
    url: "https://prd.foxtrotstream.xyz/a/av/ffdf27ecee7a6a4bd00bc6dedf881c35.webp",
  },
  {
    name: "cancelproof",
    url: "https://prd.foxtrotstream.xyz/a/av/548a95e7494b3f2ae63e88b75b750f96.webp",
  },
  {
    name: "cancelproof",
    url: "https://prd.foxtrotstream.xyz/a/av/3155c027049a5ddc9516a95d94b8c851.webp",
  },
  {
    name: "milo",
    url: "https://prd.foxtrotstream.xyz/a/av/b682634b64d874bef60f12b28fc5e4c4.webp",
  },
  {
    name: "flamenco",
    url: "https://prd.foxtrotstream.xyz/a/av/d13ab753001c73844d8b0e7e5b6f9f07.webp",
  },
  {
    name: "seanmccrossen",
    url: "https://prd.foxtrotstream.xyz/a/av/4ad67488be771645f89aec2838f0031c.webp",
  },
  {
    name: "seanmccrossen",
    url: "https://prd.foxtrotstream.xyz/a/av/4f67db7f50dcf249ad827799a68ce3e6.webp",
  },
  {
    name: "politicallyprovoked",
    url: "https://prd.foxtrotstream.xyz/a/av/29d3936b85fecaf8106046f4094ba805.webp",
  },
  {
    name: "politicallyprovoked",
    url: "https://prd.foxtrotstream.xyz/a/av/09d982c08956f678435b91e9000b746f.webp",
  },
  {
    name: "destiny",
    url: "https://prd.foxtrotstream.xyz/a/av/0eb38498b9fab0ae4663916c92bf3fbf.webp",
  },
  {
    name: "jacksonhinkle",
    url: "https://prd.foxtrotstream.xyz/a/av/42b0844e665153dd5266865d886ba4b4.webp",
  },
  {
    name: "infrared",
    url: "https://prd.foxtrotstream.xyz/a/av/5394505b55a2ffc5751e75b6b93c4a9c.webp",
  },
  {
    name: "bigtech",
    url: "https://prd.foxtrotstream.xyz/a/av/cf2ce631539cfed3afde2ebc7f20a7d6.webp",
  },
  {
    name: "bigtech",
    url: "https://prd.foxtrotstream.xyz/a/av/45e6d86b099c35195eaf91cc93a9834a.webp",
  },
  {
    name: "speckzo",
    url: "https://prd.foxtrotstream.xyz/a/av/31a3da714b94d52a5670b88b123d9aac.webp",
  },
  {
    name: "speckzo",
    url: "https://prd.foxtrotstream.xyz/a/av/34dbfd804c442a479d387e51ee22d12b.webp",
  },
  {
    name: "classicaltheist",
    url: "https://prd.foxtrotstream.xyz/a/av/032aa56d4ce1d61dd09925decb047465.webp",
  },
  {
    name: "wendell",
    url: "https://prd.foxtrotstream.xyz/a/av/aaa543b062cc67cfd374d3ee4d21735a.webp",
  },
  {
    name: "wendell",
    url: "https://prd.foxtrotstream.xyz/a/av/53ca20d34bc6fe1d02ccc41a4d3b0964.webp",
  },
  {
    name: "kingknub",
    url: "https://prd.foxtrotstream.xyz/a/av/a9eee1fc683ee54f8f72a58bd308220c.webp",
  },
  {
    name: "acumia",
    url: "https://prd.foxtrotstream.xyz/a/av/bfa10ab2d3f27483a15a2626c274e41d.webp",
  },
  {
    name: "hw",
    url: "https://prd.foxtrotstream.xyz/a/av/f3d83d117e9cf069073584d027dc8284.webp",
  },
  {
    name: "redpilledjacob",
    url: "https://prd.foxtrotstream.xyz/a/av/43a85754f3385e51f75267ae40af09dc.webp",
  },
  {
    name: "basedbrandt",
    url: "https://prd.foxtrotstream.xyz/a/av/8dc240b3a3eeef1857c8f11bbb61b1ec.webp",
  },
  {
    name: "basedbrandt",
    url: "https://prd.foxtrotstream.xyz/a/av/80ebb0a6aaa338e9a5eca5835f3d7c31.webp",
  },
  {
    name: "bibble",
    url: "https://prd.foxtrotstream.xyz/a/av/8b20bff8df9d360f87d5ee1dcbf9da9e.webp",
  },
  {
    name: "kyleclifton",
    url: "https://prd.foxtrotstream.xyz/a/av/67dc31785172821b6b413a80b5ff0304.webp",
  },
  {
    name: "aidenprojects",
    url: "https://prd.foxtrotstream.xyz/a/av/7c8bd9c6daed345223cced622de428e3.webp",
  },
  {
    name: "emichaeljones",
    url: "https://prd.foxtrotstream.xyz/a/av/c0500cded5230e2605c6529c62b17ab6.webp",
  },
  {
    name: "lofi",
    url: "https://prd.foxtrotstream.xyz/a/av/008691625e77f867aa291b4a161d4f48.webp",
  },
  {
    name: "cozyplays",
    url: "https://prd.foxtrotstream.xyz/a/av/9f3be2e86182774e5a64663b8fc0d05e.webp",
  },
  {
    name: "dawson",
    url: "https://prd.foxtrotstream.xyz/a/av/f5973afcd155668b462de5e613b439f6.webp",
  },
  {
    name: "salvopancakes",
    url: "https://prd.foxtrotstream.xyz/a/av/4103c704eaa4743cfbdab927587a53c8.webp",
  },
  {
    name: "lporiginalg",
    url: "https://prd.foxtrotstream.xyz/a/av/86cd6e0c0816a4235238c71918e44401.webp",
  },
  {
    name: "patdixon",
    url: "https://prd.foxtrotstream.xyz/a/av/a49f4558072eefef765a4a9f04943858.webp",
  },
  {
    name: "patdixon",
    url: "https://prd.foxtrotstream.xyz/a/av/6bc23be01d7f5507a3a6a70dc5ffd02b.webp",
  },
  {
    name: "patdixon",
    url: "https://prd.foxtrotstream.xyz/a/av/187ecfe737c8553f21732babf307428a.webp",
  },
  {
    name: "joeldavis",
    url: "https://prd.foxtrotstream.xyz/a/av/940568c00f04c9d00fb6fdddbe258659.webp",
  },
  {
    name: "loulz",
    url: "https://prd.foxtrotstream.xyz/a/av/48b7ef3cbbcb0a2233573362b7867093.webp",
  },
  {
    name: "joshhowes",
    url: "https://prd.foxtrotstream.xyz/a/av/052a66f0fb1d4cece19580e6fe523db8.webp",
  },
  {
    name: "joshhowes",
    url: "https://prd.foxtrotstream.xyz/a/av/fef4f15ee276b5716bc9fc5606155cf0.webp",
  },
  {
    name: "ali",
    url: "https://prd.foxtrotstream.xyz/a/av/743bf4845962096dc94acbda0976db50.webp",
  },
  {
    name: "stone",
    url: "https://prd.foxtrotstream.xyz/a/av/dc5ca5a8dd6cc41f73479949879a77e4.webp",
  },
  {
    name: "stone",
    url: "https://prd.foxtrotstream.xyz/a/av/4053ca1f9dd45a83657d59972bf30b0c.webp",
  },
  {
    name: "loomer",
    url: "https://prd.foxtrotstream.xyz/a/av/62cd6cd2b1820ccd12dce85be62bd1d3.webp",
  },
  {
    name: "jacobengels",
    url: "https://prd.foxtrotstream.xyz/a/av/37b095ee41074162d1665f7a4d6a67b2.webp",
  },
  {
    name: "keithwoods",
    url: "https://prd.foxtrotstream.xyz/a/av/5cc4ed8e0ac9c5b4e370d0de64ad4eb0.webp",
  },
  {
    name: "partygoy",
    url: "https://prd.foxtrotstream.xyz/a/av/7030cf0a443cdee752221ce33e5fea3c.webp",
  },
  {
    name: "basedbrant",
    url: "https://prd.foxtrotstream.xyz/a/av/8dc240b3a3eeef1857c8f11bbb61b1ec.webp",
  },
];

const cards = [
  {
    name: "nick",
    url: "https://prd.foxtrotstream.xyz/a/pcrds/a0c984438ce99a0bcf62db67de4012d4.webp",
  },
  {
    name: "vince",
    url: "https://prd.foxtrotstream.xyz/a/pcrds/2c4ef77cb6783661df63989a0508d931.webp",
  },
  {
    name: "brysongray",
    url: "https://prd.foxtrotstream.xyz/a/pcrds/7db5065cf02a70ba02c92a84e82791e1.webp",
  },
  {
    name: "tylerrussell",
    url: "https://prd.foxtrotstream.xyz/a/pcrds/d602770cf349966536a6b17519def8ab.webp",
  },
  {
    name: "beardson",
    url: "https://prd.foxtrotstream.xyz/a/pcrds/2e47710ba13f09b0ace80099dc4761d0.webp",
  },
  {
    name: "franssen",
    url: "https://prd.foxtrotstream.xyz/a/pcrds/aa27037a145de034fe543329d117b0e7.webp",
  },
  {
    name: "joetheboomer",
    url: "https://prd.foxtrotstream.xyz/a/pcrds/a2ad953e99c0cf2b6c88b444f19824fe.webp",
  },
  {
    name: "jimbozoomer",
    url: "https://prd.foxtrotstream.xyz/a/pcrds/667fcab8794a1b627d289f3a0f854295.webp",
  },
  {
    name: "kaiclips",
    url: "https://prd.foxtrotstream.xyz/a/pcrds/42ec2c4a3d6262c8d0af6ce7a3b07a83.webp",
  },
  {
    name: "boseph",
    url: "https://prd.foxtrotstream.xyz/a/pcrds/8957928c5f1a560677570752a2021f20.webp",
  },
  {
    name: "bakedalaska",
    url: "https://prd.foxtrotstream.xyz/a/pcrds/52826a8b281f3e01fbfe44f03f7ace6c.webp",
  },
  {
    name: "veyta",
    url: "https://prd.foxtrotstream.xyz/a/pcrds/57da8459f216829b39a50cffd6231bb2.webp",
  },
  {
    name: "augie",
    url: "https://prd.foxtrotstream.xyz/a/pcrds/6ca5940b279a9bdd299931c274b77460.webp",
  },
  {
    name: "roosh",
    url: "https://prd.foxtrotstream.xyz/a/pcrds/2799badf3545f140236baa5dd93702c0.webp",
  },
  {
    name: "ethanralph",
    url: "https://prd.foxtrotstream.xyz/a/pcrds/27e9e261d0f27351b310fdf5c55b8b8c.webp",
  },
];

// load and process tags
let labels = {};
let csv = await (await fetch("tags.csv")).text();

let uniques = {};

csv
  .split(/\r?\n/)
  .slice(1)
  .forEach((row) => {
    let items = row.split(",");
    if (items[0].length) {
      uniques[items[0]] = null;
    }
    let code = items[1];
    let tags = items.slice(3).filter((i) => i.length);
    labels[code] = sanitize(tags.join(" "));
  });

const searchBox = document.getElementById("searchBox");
const collapsible = document.querySelector(".collapsible");
M.Collapsible.init(collapsible, {
  accordion: false,
});
const collapsible_instance = M.Collapsible.getInstance(collapsible);
const updateResults = (e) => {
  [...document.querySelectorAll(".bin img")].forEach((i) =>
    i.classList.toggle(
      "hidden",
      !i.getAttribute("tags").includes(sanitize(searchBox.value))
    )
  );

  [...document.querySelectorAll(".bin")].forEach((bin, index) =>
    bin.querySelectorAll("img:not(.hidden)").length
      ? collapsible_instance.open(index)
      : collapsible_instance.close(index)
  );
};
searchBox.addEventListener("change", updateResults);
searchBox.addEventListener("input", updateResults);
M.Autocomplete.init(searchBox, {
  data: uniques,
  limit: 1,
});
M.Tooltip.init(document.querySelectorAll(".tooltipped"));

const addImage = (elem, url, code, title, tags, order = "append") => {
  const img = new Image();

  // img.src = `assets/${code}.webp`;
  img.src = url;
  img.title = title;
  img.setAttribute("tags", tags);
  img.style.visibility = "hidden";
  img.loading = "lazy";

  img.addEventListener("error", () => {
    // img.src !== url ? (img.src = url) : img.remove();
    img.remove();
  });

  img.addEventListener("load", () => {
    img.style.visibility = "";
    img.classList.remove("hidden");
    img.addEventListener("click", () => {
      const prefix = url.match(/\/(av|pcrds)\//);
      if (prefix) {
        code = `../${prefix[1]}/` + code;
      }
      copyToClipboard(code);
    });
  });

  order === "append" ? elem.append(img) : elem.prepend(img);
};

for (let user of cards) {
  const url = user.url;
  const code = url.match(/\/([^\/]*).webp/)[1];
  addImage(
    cardBin,
    url,
    code,
    user.name,
    user.name,
    sortSwitch.checked ? "prepend" : "append"
  );
}

for (let user of users) {
  const url = user.url;
  const code = url.match(/\/([^\/]*).webp/)[1];
  addImage(
    userBin,
    url,
    code,
    user.name,
    user.name,
    sortSwitch.checked ? "prepend" : "append"
  );
}

// Stickers
for (let i = 90; i < 5000; i++) {
  const code = i.toString(36);
  const url = `https://prd.foxtrotstream.xyz/a/stk/${code}.webp`;
  if (!code.match(/w|x|y|z/)) {
    addImage(
      stickerBin,
      url,
      code,
      code,
      labels[code],
      sortSwitch.checked ? "prepend" : "append"
    );
  }
}

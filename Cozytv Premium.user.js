// ==UserScript==
// @name         Cozy.tv Premium
// @namespace    Cozy.tv
// @version      1.0.0
// @description  Display & save any cozy.tv sticker
// @author       KANYE
// @match        https://cozy.tv/*
// @icon         https://cozy.tv/public/cz_fav_128.png
// @license      MIT
// ==/UserScript==

const stickerlabels = { "jimbo": ["30", "31", "32", "33", "34", "2p", "2q", "2r", "2s", "2t", "2u", "2v", "3b", "3d", "3e", "3f", "3g", "3p", "3v", "ql", "qm", "1l9"], "jughead": ["30", "32", "33", "34", "2p", "2q", "2r", "2s", "2t", "2u", "2v", "3g", "3p", "3v", "o4", "qj", "ql", "qm", "1bt", "1n8"], "pepe": ["35", "36", "37", "38", "39", "40", "41", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "62", "63", "64", "69", "96", "97", "98", "99", "104", "106", "111", "130", "135", "136", "139", "150", "153", "161", "162", "178", "191", "192", "2i", "2j", "2k", "2l", "2o", "3a", "3c", "3h", "3i", "3j", "3k", "3l", "3m", "3o", "3r", "3t", "3u", "4b", "4c", "4e", "4f", "4h", "4i", "4j", "4l", "4m", "4n", "4o", "4p", "4q", "4r", "4u", "5d", "5f", "5g", "5h", "5i", "5j", "5k", "5l", "5n", "5o", "5p", "5t", "5v", "6a", "6u", "6v", "8i", "8j", "8l", "8o", "8p", "8q", "9a", "9b", "9c", "9d", "9j", "9k", "9m", "9n", "9o", "9p", "9t", "9u", "ah", "aj", "ak", "ar", "as", "b7", "bi", "bl", "bo", "bp", "bs", "bu", "bv", "c0", "c1", "c2", "c3", "cb", "cd", "ce", "cg", "cq", "cu", "cv", "d0", "d1", "d2", "d3", "d6", "d7", "d8", "d9", "da", "db", "de", "dg", "dq", "dt", "du", "dv", "e0", "e1", "e3", "e4", "e5", "e6", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "eh", "ei", "ek", "en", "eo", "ep", "er", "eu", "f3", "f5", "f6", "fp", "gt", "gu", "h0", "h9", "ho", "hp", "hq", "hr", "hs", "i2", "iv", "j0", "j1", "j2", "j3", "j4", "j5", "j6", "j7", "jq", "k8", "k9", "nq", "nt", "nu", "nv", "o0", "o4", "o8", "o9", "oj", "ov", "pv", "q0", "q8", "q9", "qa", "qb", "qc", "qd", "qe", "r2", "r6", "r7", "rf", "rg", "rh", "rj", "rk", "s0", "u1", "u5", "uu", "uv", "v6", "v7", "v8", "vb", "vo", "10j", "10s", "11e", "11u", "12l", "12n", "12q", "12r", "12s", "12t", "12v", "13e", "13g", "13j", "14f", "14g", "14h", "14i", "14r", "14s", "14u", "15p", "15v", "16j", "16l", "17f", "17g", "18i", "1c9", "1cp", "1cq", "1cr", "1ct", "1cu", "1cv", "1dc", "1dk", "1eb", "1ed", "1ee", "1eh", "1ek", "1em", "1h9", "1i6", "1i7", "1j7", "1j8", "1ke", "1kf", "1ki", "1kk", "1kt", "1ku", "1ld", "1lf", "1lg", "1lh", "1li", "1lj", "1lm", "1ln", "1lo", "1lp", "1lq", "1ls", "1m3", "1m6", "1m9", "1ma", "1mb", "1mc", "1md", "1me", "1mf", "1mp", "1mr", "1ms", "1mt", "1n1", "1n9", "1nb", "1nf", "1nj", "1qp", "1r2", "1r3", "1s9", "1sa", "1sj", "1sk", "1sn", "1so", "1sp", "1sr", "1su", "1t8", "1tf", "1tg", "1th", "1tv", "1u0", "1un", "1ve", "1vf", "1vq"], "pat": ["35"], "headpat": ["35"], "shock": ["36"], "surprise": ["36"], "british": ["37"], "fancy": ["37", "5f", "cb", "e1"], "milk": ["38", "9b"], "dance": ["38", "51", "2m", "3b", "9b", "ja"], "wizard": ["39", "5g", "10r", "1nb"], "magic": ["39", "5g"], "judge": ["40"], "rocking": ["41"], "horns": ["41"], "boseph": ["42", "h4", "h6", "id", "ie", "if", "ig", "ih", "1t5"], "wojak": ["44", "ch", "cm", "fd", "fe", "ff"], "hug": ["44", "69", "3i", "3l", "f6", "1lo"], "laugh": ["45", "72"], "pepelaugh": ["45", "96", "b7", "cg", "qj", "1dg"], "peepo": ["46", "49", "50", "51", "52", "55", "58", "62", "69", "3j", "3k", "3l", "3o", "3r", "3t", "4a", "4c", "4i", "4j", "4o", "4r", "5g", "6u", "6v", "8i", "8j", "8o", "8q", "9m", "9o", "9t", "9u", "ah", "aj", "bo", "bt", "c0", "c1", "ce", "cv", "d6", "d8", "dg", "e0", "e5", "e6", "e8", "ec", "ef", "ei", "eo", "fp"], "cheering": ["46", "bt", "ce", "13j"], "cozy": ["47", "59", "98", "162", "205", "2n", "3c", "3p", "4i", "5k", "5v", "8v", "9a", "e3", "ef", "ep", "er", "f3", "h0", "12l", "13e", "14u"], "chair": ["47", "3p", "4i", "ea", "14r", "14u", "16j", "1iq", "1lq", "1m9"], "apu": ["48", "3m", "4b", "4e", "4h", "9j", "ar", "as", "cb", "d3", "d9", "dt", "du", "f5", "f6"], "dumb": ["48"], "drool": ["48"], "angry": ["49", "153", "2j", "3k", "4p", "d7", "fd", "j3", "rf", "12r", "17g", "1eb", "1r2", "1u0"], "knife": ["49", "1n1"], "jamming": ["50", "4a", "8h", "9j", "9k", "9v", "eh"], "boombox": ["50"], "christmas": ["51", "85", "er"], "8bit": ["52", "56", "99", "bj", "k8", "13i", "1sj", "1sk", "1sl", "1sm", "1sp"], "walking": ["53"], "arriving": ["53", "57"], "rope": ["54"], "suicide": ["54", "fc"], "sad": ["55", "5d", "5h", "c0", "j2", "q0", "q8", "u5", "14h", "1h9", "1ma"], "laptop": ["55", "ei", "eo"], "hop": ["56"], "happy": ["57", "162", "2m", "3f", "5l", "aj", "bo", "13e", "14i"], "flat": ["58"], "squished": ["58"], "cozyicon": ["59", "18b"], "logo": ["59"], "anime": ["60", "87", "100", "101", "105", "125", "127", "129", "163", "180", "181", "182", "184", "185", "186", "204", "207", "4v", "5b", "6b", "6c", "6e", "6s", "6t", "b8", "b9", "ba", "ei", "ht", "hu", "hv", "i0", "i1", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "ia", "ib", "ic", "id", "ie", "if", "ig", "ih", "ii", "ij", "ik", "il", "im", "in", "io", "ip", "iq", "ir", "is", "oq", "or", "os", "ot", "ou", "p1", "pd", "pe", "pf", "rd", "tu", "u4", "u6", "u9", "uc", "uj", "uk", "ul", "vg", "vr", "10e", "12a", "12b", "13p", "17u", "17v", "18d", "1b6", "1b7", "1b8", "1b9", "1bc", "1bg", "1bh", "1bi", "1bk", "1bn", "1br", "1bv", "1cf", "1ch", "1ci", "1ck", "1cl", "1cm", "1cn", "1co", "1d7", "1e3", "1f0", "1g6", "1jp", "1jq", "1jr", "1js", "1jt", "1ju", "1ka", "1kc", "1kd", "1mt", "1po", "1pr", "1t4", "1u1", "1u2", "1uo"], "hitormiss": ["61"], "tiktok": ["61", "13k"], "showfeet": ["62"], "fastundiedancing": ["63"], "poggers": ["64", "ak", "d0", "eg"], "monkey": ["66", "90", "126", "5u", "9h", "et", "hb", "hc", "p5", "p6"], "yelling": ["66", "194", "196", "4p", "8q"], "screaming": ["66", "196", "16s"], "shocked": ["66", "5m", "ak"], "pog": ["66", "5m", "eg"], "groyper": ["67", "152", "bb", "e7", "oj", "ok", "pj", "ri", "ur", "us", "ut", "12h", "14c", "14t", "1a1", "1c7", "1dl", "1e6", "1j5", "1ks", "1le", "1lr", "1lu", "1mq", "1ob", "1od", "1pv", "1ss", "1st", "1vn"], "bitcoin": ["70"], "trump": ["71", "dp", "jv", "rq"], "burger": ["74"], "clint": ["75"], "eastwood": ["75"], "santa": ["76", "7u"], "dancing": ["76", "127", "129", "131", "132", "138", "146", "147", "154", "173", "175", "7a", "7e", "9b", "al", "as", "bs", "d9", "dh", "di", "dr", "du", "rk", "tb", "vq", "10j", "10s", "11l", "11u", "13c", "13g", "14g", "14h", "14i", "15k", "16b", "16d", "16p", "16q", "19s", "1a1", "1d6", "1dj", "1ea", "1pf", "1pt", "1q4", "1ri", "1sa", "1um"], "airplane": ["77", "115"], "jet": ["77", "1r5"], "fries": ["78"], "onionrings": ["78"], "dog": ["79", "86", "208", "uf", "10u", "11l", "1d0", "1q8", "1ru", "1u3", "1u4", "1u5", "1u7", "1u8", "1u9", "1ub", "1uc", "1uf", "1ug", "1vj", "20e"], "animated": ["79", "136", "2i", "2j", "2k", "2l", "2q", "2r", "2s", "7a", "8e", "13c", "16b"], "cross": ["80", "af", "eb", "p7", "u3", "15b", "19v", "1a0", "1ek", "1tm"], "frog": ["81", "o6", "pl", "pn", "pp", "pr", "ps", "pt", "t3", "t4", "t5", "1jk", "1jl", "1op", "1oq", "1rk"], "xmen": ["82", "83"], "wolverine": ["82", "83"], "robocop": ["84"], "squidward": ["85", "7j", "dr", "1et", "1ha", "20d"], "astronaut": ["86", "tp", "1gm", "1l5"], "space": ["86", "1sa"], "retarded": ["87", "hq", "it", "qc", "qh", "qi", "1cq", "1h9"], "machoman": ["88"], "randysavage": ["88"], "thankyou": ["89"], "robinwilliams": ["89"], "jadenmcneil": ["91", "92", "93", "94", "95", "8r", "8s", "8t", "8u", "8v", "9e", "9f", "9s", "ag", "vd", "ve"], "judasmcneil": ["91", "92", "93", "94", "95", "8r", "8s", "8t", "8u", "8v", "9e", "9f", "9s", "ag", "vd", "ve"], "shaking": ["92", "8t"], "blackpilledagain": ["94"], "laughing": ["96", "106", "133", "161", "3t", "7p", "b7", "cg", "d6", "r4", "r5", "u1", "15v", "16f", "1hu", "1tf", "1tg", "1th"], "smoking": ["97", "vu", "20f"], "cigarette": ["97", "1tp", "20f"], "blanket": ["98", "3c", "5k", "5v", "9a", "e3", "ef", "eo", "ep", "er", "f3", "14u"], "snowing": ["98"], "cowboy": ["99", "hr", "13t", "1lm", "1ln", "1lp", "1s9"], "guns": ["99", "1ot", "1sj", "1sk", "1sp"], "smileyface": ["102", "j8", "rn", "tr", "10c", "10g", "12e", "19i", "1ad", "1bd", "1d4"], "feet": ["102", "qo", "s3", "10c"], "devil": ["103", "104", "12h"], "cat": ["108", "124", "138", "4g", "4r", "5r", "8h", "9i", "ha", "vl", "10a", "12f", "13a", "13b", "13h", "13i", "14a", "19n", "1dn", "1gs", "1hk", "1kn", "1l2", "1l7", "1n3", "1n4", "1q9", "1qa", "1qc", "1qh", "1ri", "1rv", "1sv", "1u6", "1ua", "1uh", "20b"], "npc": ["109", "ji", "jj", "jt"], "stickfigure": ["110", "10v"], "spitting": ["110", "j9", "1me"], "what'supwoozuh": ["111", "116"], "whatsupwoozuh": ["111", "116"], "woozuh": ["112", "114", "115", "13u", "1h4", "1h5"], "jared": ["112"], "ninjaghini": ["114"], "ninjagini": ["114"], "lamborghini": ["114"], "ninjet": ["115"], "jetplane": ["115", "1sq"], "mrkrabs": ["117", "vh"], "spongebob": ["117", "144", "7d", "7e", "oa", "ob", "p2", "r1", "vh", "12g", "14e", "1c5", "1d8", "1e5", "1lt", "1s4", "1s5", "1s6", "1s8"], "rape": ["117", "vh"], "ethanralph": ["118", "118", "119", "119", "179", "11a", "11a", "17a", "17b", "17c", "17d", "17e", "1kj", "1pe", "1ps"], "utya": ["120"], "duckass": ["120", "173", "16b", "16b", "16p", "16q", "1de", "1dh", "1pt", "1q4", "1um"], "duckbutt": ["120", "173", "16p", "16q", "1de", "1dh", "1pt", "1q4", "1um"], "twerking": ["120", "16b", "16p", "16q", "1de", "1dh", "1pt", "1q4", "1um"], "itsover": ["121"], "itssoover": ["121", "q0", "11q", "1j2"], "it'sover": ["121"], "it'ssoover": ["121", "q0", "11q", "1j2"], "caprisun": ["126"], "drinking": ["126", "3e"], "nodding": ["129", "138", "dm", "1kn", "1lr", "1lu"], "yes": ["129", "2j", "j8", "1ie", "1oe", "1of", "1ok", "1v2"], "lauging": ["130"], "kirby": ["131", "9v"], "nigga": ["132", "171", "h1", "ts", "13d", "18g", "1cs", "1ji", "1kv", "1nh"], "black": ["132", "h1", "h2", "sd", "si", "sj", "tb", "1ji", "1nh"], "pogo": ["133", "p0", "1hd", "1j6", "1mu", "1t5"], "dancingboy": ["134", "q3"], "ravekid": ["134", "q3"], "banhammer": ["137", "1d9"], "copium": ["139"], "canadafirst": ["140", "141", "co", "p2"], "vladimirputin": ["140", "176", "17j", "1a6", "1a8", "1ja"], "z": ["140", "199", "19f", "1hi", "1i5", "1j4"], "cf": ["140", "141", "co"], "baileythenationalistdog": ["141"], "ironman": ["143"], "rdj": ["143"], "robertdowneyjr": ["143"], "emo": ["144", "1i9", "1t7"], "donaldtrump": ["145", "tj", "ue", "vv", "14l", "15e", "15f", "15h", "19g", "19s", "19t", "1a4", "1a9", "1aa", "1ab", "1ac", "1eo", "1ff", "1fl", "1g3"], "areyouenjoyingtheshow?": ["145"], "zyzz": ["146"], "normmacdonald": ["148"], "good": ["149"], "jockowillink": ["149"], "listening": ["150", "151", "4m", "gu", "12t", "15p", "1ct", "1ed", "1gs", "1hv", "1ke", "1kf", "1kk", "1nf"], "music": ["150", "151", "4m", "9j", "9k", "9l", "9v", "d3", "gu", "12t", "15p", "1ct", "1ed", "1i7", "1ke", "1kf", "1kk", "1nf", "1sa"], "bigchillin": ["151", "o4"], "nickfuentes": ["152", "165", "167", "vm", "14b", "15d", "16i", "17t", "19u", "1b0", "1b1", "1b2", "1b3", "1dd", "1h2", "1h3", "1hg", "1jd", "1qq", "1qr", "1v5"], "mad": ["153", "4p", "j3", "rf", "12r", "17g", "1eb", "1r2", "1r6"], "thejoker": ["154", "155", "157", "vv", "17m", "1av", "1dj", "1ne"], "andherewego": ["157"], "honkler": ["159", "j7", "14v", "1ca", "1s3"], "clownworld": ["159", "bs", "ek", "j7", "14v", "1ca", "1s3"], "minions": ["166", "15s", "15t", "1ht", "1hu", "1i9", "1vm"], "soyjak": ["168", "fe", "12k", "1pb"], "soyface": ["168", "jb", "ji", "jj", "um", "18j", "1hr", "1l1", "1uu"], "babyyoda": ["169", "187", "1df"], "plantruster": ["170"], "trusttheplan": ["170"], "ttp": ["170"], "georgefloyd": ["171", "c4", "s4"], "vincejames": ["173", "br", "f0", "qq", "1p3", "1p4", "1p5", "1p6", "1p7"], "money": ["175", "4c", "1a2"], "wink": ["176"], "smile": ["176", "oa", "tj", "u0", "1g3", "1h5"], "hugging": ["178"], "ralphamale": ["179", "17a", "17b", "17c", "17d", "17e", "1pe", "1ps"], "dragonballz": ["184", "1ka"], "dbz": ["184", "1ka"], "kneeling": ["184", "dj"], "faggot": ["188"], "bundleofsticks": ["188"], "megaman": ["189", "bb"], "mexican": ["191", "cu", "du", "ov", "1g7", "1li"], "gun": ["192", "205", "5f", "8u", "d2", "h8", "nq", "og", "qa", "18a", "18h", "1dc", "1eh", "1er", "1fh", "1la", "1lb", "1md", "1mg", "1na", "1ou", "1ut", "1vd", "1vq"], "shooting": ["192", "8u", "fn", "og", "qa", "1dc", "1er", "1md", "1mg", "1sj", "1sk", "1sp"], "no": ["193", "2k", "1ci", "1if"], "bugsbunny": ["193", "193"], "bigchungus": ["193", "1hm"], "patrickhowley": ["194", "14k", "1hn", "1ho", "1pd"], "atombomb": ["195", "1r4"], "explosion": ["195", "1r4"], "tsarbomba": ["195", "1r4"], "hbomb": ["195", "1r4"], "atomicbomb": ["195", "1r4"], "mushroomcloud": ["195"], "arnoldschwarzenegger": ["196"], "ha!": ["197"], "gay": ["197", "rp", "rq"], "gaay": ["197", "rp"], "gaaay": ["197", "rp"], "technicaldifficulties": ["198", "1e2", "1go"], "omeglenow": ["200", "201", "202"], "mothermary": ["206", "1c1", "1ns", "1nt"], "aflogo": ["209", "1l6"], "pepsilogo": ["209"], "eating": ["2i", "9g", "bu", "f8", "12n", "1cp"], "popcorn": ["2i", "3a", "5n", "6v", "d8", "s6", "12n", "1cp"], "wave": ["2l", "nt", "q9", "1mq"], "hi": ["2l", "1cf"], "beardson": ["2m", "2n", "jb", "rc", "re", "19j", "19k"], "party": ["2m"], "excited": ["2m", "5j", "14i"], "chillin": ["2o", "v9"], "skateboard": ["2t"], "reddit": ["2v"], "sweating": ["3a", "4o", "12s"], "leave": ["3d"], "leaving": ["3d"], "monster": ["3e"], "blush": ["3f", "3h", "3i"], "cheers": ["3g", "4g", "5p", "d1", "fg", "jq", "ur", "13j", "16l", "1dl", "1e6", "1j5", "1vn"], "love": ["3j"], "iloveyou": ["3j"], "iloveu": ["3j"], "torch": ["3k"], "tikitorch": ["3k", "s0", "17g", "1eb"], "underwear": ["3o"], "peepolaugh": ["3t"], "singing": ["3u", "4l"], "microphone": ["3u"], "toilet": ["3v", "6u", "bf", "j4", "1m3"], "pepo": ["4a", "bt", "f8"], "peepojamming": ["4a"], "headphones": ["4a", "4m", "9j", "9k"], "car": ["4b", "7k"], "driving": ["4b", "1ub", "1un"], "minion": ["4d", "gf", "oh", "pg", "10d"], "buff": ["4d"], "naked": ["4f"], "catcheers": ["4g"], "karate": ["4h"], "sheep": ["4j"], "costume": ["4j"], "mario": ["4k"], "rock": ["4k", "1sa", "1se"], "crying": ["4m", "5d", "5h", "bv", "ss", "tr", "1g7"], "typing": ["4n", "da", "ed", "q7", "rl", "1q2"], "typer": ["4n", "da", "ed", "q7", "rl", "1q2"], "hacker": ["4n", "da", "ed"], "keyboard": ["4n"], "scared": ["4o", "5r", "cd", "d2", "d8", "eb", "nq", "1ek", "1j7", "1lj"], "tired": ["4q", "9o", "ah", "ek", "14f"], "coffee": ["4q", "er"], "cringe": ["4q", "cl", "e5", "k1", "nu", "1su"], "floppa": ["4s"], "bigfloppa": ["4s", "13b", "13h", "1bl", "1bm"], "anticipating": ["4u", "bp", "eu"], "waiting": ["4u", "bp", "eu"], "fortnite": ["5a", "5t", "15k"], "chunli": ["5a"], "simpsons": ["5c", "q2", "s7"], "nedflanders": ["5c"], "flanders": ["5c"], "fatpepe": ["5d"], "upset": ["5h"], "magnifyingglass": ["5i", "ec", "qb", "1ee", "1ej"], "what": ["5i", "bi", "fo"], "inquisitive": ["5i"], "drooling": ["5k"], "nick": ["5m", "bq", "e2"], "nickpog": ["5m"], "looking": ["5o"], "toiletpaper": ["5o"], "fuckjannies": ["5p"], "pinned": ["5p"], "jannies": ["5p", "d1"], "cheeseburger": ["5q"], "hamburger": ["5q", "tl", "1k9"], "bigmac": ["5q"], "drip": ["5t", "et"], "exercise": ["6a"], "pullup": ["6a"], "davidbowie": ["6d"], "hxh": ["6e"], "hisoka": ["6e"], "bakedalaska": ["6g", "6m", "6q", "8k", "g7", "g9", "ge", "gf", "gi", "gp", "gr", "1uu"], "kombucha": ["6m"], "booch": ["6m"], "yoba": ["6q", "8k", "g8", "gr", "11p", "1k3", "1k7", "1uu"], "waving": ["6s", "12q", "1kl", "1km", "1mq"], "kanna": ["6s"], "senko": ["6t"], "slapping": ["7b", "1ev"], "jesuschrist": ["7c", "p7", "pk", "qu", "19b", "1c3", "1fp", "1jv", "1l4", "1nu", "1o4", "1o5", "1oa", "1tl", "1tm", "1vu"], "tiger": ["7f"], "chrisfarley": ["7g", "7h"], "patrick": ["7i"], "turkey": ["7l"], "elvispresley": ["7m", "8c"], "tonysoprano": ["7n"], "sopranos": ["7n"], "pizza": ["7o"], "putin": ["7q"], "thumbsup": ["7q"], "like": ["7q"], "johnwayne": ["7r"], "melgibson": ["7s"], "television": ["7t"], "tv": ["7t"], "western": ["7t"], "lifting": ["7v"], "ears": ["8b"], "icecream": ["8d"], "fultonsheen": ["8e", "8f"], "tomcruise": ["8g"], "sunglasses": ["8h", "us", "19n", "1h4", "1h5", "1kt", "1mm", "1mn", "1pa", "1qp", "1sn", "1so", "1t2", "1t4", "1ug", "1un"], "zoomer": ["8i", "15i"], "conspiracy": ["8j"], "tinfoilhat": ["8j"], "dabbing": ["8k", "18v"], "spinning": ["8l"], "juice": ["8l", "9m", "9p"], "popsicle": ["8o"], "icepop": ["8o"], "salute": ["8p", "b9"], "mccheesemoment": ["8r"], "o7": ["8s", "cp", "jd", "qq", "t4", "u9", "18c", "1ms", "1op"], "tpose": ["8t"], "bigchilling": ["9c"], "chilling": ["9c"], "booling": ["9c"], "vomiting": ["9d", "bh", "hs"], "sick": ["9d"], "skypemonkey": ["9h"], "clubpenguin": ["9l"], "penguin": ["9l", "ua", "10b"], "violin": ["9l"], "pointing": ["9n", "10v", "14l", "19e"], "sleeping": ["9o", "e8", "1mp"], "letsgo": ["9r", "11m"], "simp": ["9t", "r6"], "retard": ["9u", "1qh"], "kylerittenhouse": ["a0", "dk"], "border": ["a0"], "joker": ["a2"], "americanpsycho": ["aa", "u2"], "patrickbateman": ["aa", "u2"], "alexjones": ["ab", "qo", "ti", "10k", "10l", "10m", "10n", "10o", "10p", "10q", "11b", "11c"], "crabdance": ["al"], "crabrave": ["al"], "obama": ["al"], "gone": ["al"], "shrek": ["aq"], "crusader": ["ar"], "pointingright": ["bc", "1q7"], "pointright": ["bc"], "pointingleft": ["bd"], "pointleft": ["bd"], "hunterbiden": ["be"], "quagmire": ["bf"], "franssen": ["bg", "bj"], "huh": ["bi", "fo"], "glownigger": ["bk", "1bp"], "feds": ["bk"], "rage": ["bl"], "peperage": ["bl"], "lasers": ["bl"], "whitepilled": ["bm", "ch"], "ryangosling": ["bn", "1af", "1ag", "1ah", "1ar", "1vp"], "bladerunner": ["bn"], "peepohappy": ["bo"], "nomnomnom": ["bu"], "pepehands": ["bv"], "peeposad": ["c0"], "cheer": ["c1", "j5"], "coronavirus": ["c2"], "washinghands": ["c2"], "covid": ["c2"], "middlefinger": ["c3", "1j9", "1mr"], "vincentjames": ["c5", "c7", "c8", "c9", "ca"], "afpac": ["c5"], "vincnetjames": ["c6"], "michellemalkin": ["c6"], "samhyde": ["cf", "uh"], "biden": ["ci", "k0"], "joebiden": ["ci", "oc", "oe", "p4", "14o"], "german": ["cj"], "based": ["ck", "h9", "k2", "q6", "rr", "1d1", "1e7", "1e8"], "despair": ["cm"], "blackpilled": ["cm"], "troll": ["cn"], "trollge": ["cn", "hd", "ro", "to", "15n"], "punching": ["cq", "j1", "1dk"], "saxophone": ["d3", "1ld"], "fire": ["d7", "1h1", "1id"], "pajamas": ["d9"], "hacking": ["da", "ed"], "bounce": ["db", "1sr"], "paranormal": ["dd"], "pants": ["dd"], "handrub": ["de"], "billgates": ["df", "do"], "vaccine": ["df"], "gulag": ["dg", "1cr"], "benshapiro": ["dh"], "israel": ["dh", "di", "f2"], "derekchauvin": ["dj"], "thatsracist": ["dl", "1cs", "1f7", "1fm"], "trumpnod": ["dm"], "trumpcorrect": ["dn"], "correct": ["dn"], "dj": ["dq"], "drumset": ["dt"], "maracas": ["du", "1li"], "fat": ["dv", "s8"], "full": ["dv"], "yummy": ["dv", "f8"], "boxing": ["e0", "o8", "qe"], "cigar": ["e1"], "stare": ["e4"], "staring": ["e4"], "sign": ["e5", "12m", "1g9", "1gc", "1ll", "1s2"], "crypto": ["e6"], "sherlock": ["e9", "vn", "1q8", "1rb", "1rf"], "detective": ["e9"], "peeking": ["ea"], "curious": ["ec"], "pepega": ["ee"], "creditcard": ["ee", "12v"], "buy": ["ee"], "pogchamp": ["eg"], "pepejam": ["eh"], "depressed": ["ek"], "diamondsword": ["en"], "minecraft": ["en", "k9", "o7", "1f3", "1gv"], "blushing": ["ep"], "santahat": ["er", "ht", "hu", "hv", "i0", "i1"], "burningflag": ["ev"], "prideflag": ["ev"], "gayflag": ["ev"], "hitler": ["f1", "fg"], "nein": ["f1"], "jew": ["f2", "rt", "sm", "13t", "13u", "1ef", "1pf", "1pg", "1ph"], "bullets": ["f4"], "snack": ["f8"], "shooter": ["fa", "fb", "fc"], "asian": ["fa"], "old": ["ff"], "boomer": ["ff"], "beethoven": ["fi"], "flurk": ["fj"], "stonetoss": ["fj"], "shootthisman": ["fk"], "killthisman": ["fk"], "grilling": ["fl", "hp"], "bongos": ["fm"], "emoji": ["fm"], "3d": ["fm"], "gunrange": ["fn"], "kai": ["fo"], "twitterisfuckinggay": ["g7"], "jabba": ["g8"], "pitvipers": ["g8", "1mm", "1mn", "1oo", "1t0", "1ug"], "prayer": ["g9"], "yobapray": ["g9"], "horse": ["ge"], "yoha": ["ge"], "yobahorse": ["ge"], "yoma": ["gf"], "trollface": ["gi", "h7", "hd", "hf", "15o", "16k", "19o", "1db", "1vr"], "yobatroll": ["gi"], "loulz": ["gk"], "yobamode": ["gp"], "doge": ["gv", "ug", "1hc", "1kg"], "womanmoment": ["gv", "it", "sd", "si", "1ig", "1ih", "1im", "1to", "1v3"], "robbing": ["h1"], "run": ["h1"], "steal": ["h1"], "bibble": ["h2", "20f", "20h", "20i", "20j"], "shotgun": ["h7", "1rv"], "shoot": ["h8"], "wurzelroot": ["h8", "ok"], "kaiclips": ["hf", "u2", "u3", "vg", "16s", "17l"], "anthonyfauci": ["hi"], "drevil": ["hi", "1do", "1dp"], "pie": ["hk", "hl", "hm"], "thatlittleguy": ["hn"], "bird": ["hn"], "puke": ["hs"], "jeghead": ["i2"], "spurdo": ["iu"], "beaver": ["iu"], "clap": ["iv", "sd"], "raining": ["j2"], "pooping": ["j4", "nv", "1m3"], "running": ["j6"], "onion": ["ja", "p3", "qv"], "punishedsnake": ["jd"], "nicelogicalfallicy": ["jf"], "gigachad": ["jg", "pq", "q4", "11n", "14d", "1e7", "1ol"], "napoleon": ["jh"], "spiderman": ["jp", "16r"], "tobeymaguire": ["jp", "16r"], "centurion": ["js"], "nobodycares.": ["jv"], "happy6th!": ["ka", "kb"], "patriotday": ["ka", "kb"], "minecraftbee": ["kc"], "ban": ["o0", "1cv"], "afpaciii": ["o1", "vj", "1p0"], "afpac3": ["o1", "vj", "1p0"], "pinkchillin": ["o4"], "ux": ["o7", "pb", "pc", "17p", "17q", "17r", "17s", "19p", "1f1", "1gg", "1gh", "1hj", "1jb", "1jd", "1je", "1jf", "1jg"], "duck": ["o7", "pb", "pc", "1m7", "1q1", "1tp"], "lookingaround": ["ob"], "maozedong": ["oc"], "hillaryclinton": ["od"], "bitch": ["od"], "sniffing": ["oe", "p4", "qo"], "smelling": ["oe", "p4", "qo"], "pedophile": ["oe"], "daltonclodfelter": ["og", "qn", "rm", "s6", "17m", "18c", "1cg", "1mj", "1mu", "1tk", "1tn"], "butt": ["oh"], "booty": ["oh"], "joetheboomer": ["ok"], "mobster": ["ok"], "italian": ["ok"], "credo!": ["om", "on", "oo", "op"], "creedo!": ["om", "on", "oo", "op"], "sneedo!": ["om", "on", "oo", "op"], "laurenwitzke": ["p4", "qr", "qv", "1us", "1ut", "1uv", "1v0", "1v1", "1v2", "1vc", "1vd"], "chimp": ["p5", "p6"], "god": ["p7"], "tranny": ["p8", "1in", "1io", "1ip"], "secretaryofhealth": ["p8"], "gab.com": ["pa", "ph", "pi", "pl", "pn", "pp", "pq", "pr", "ps", "pt", "sv", "t3", "t4", "t5", "1op", "1oq"], "andrewtorba": ["pa"], "let'sgooooooo": ["pm", "11m"], "lfgoooooooo": ["pm"], "letsgooooooo": ["pm", "11m"], "jasonmiller": ["po", "15q"], "gettr": ["po", "15q"], "watda": ["pp", "1gl", "1oq", "1us", "1vc"], "scam": ["pv"], "hanged": ["q0"], "hanging": ["q0"], "williethejanitor": ["q2"], "sweeping": ["q2"], "redpilled": ["q5", "rr"], "inspecting": ["qb", "1ee"], "inspector": ["qb", "1ee"], "hammer": ["qd", "1mt"], "coomer": ["qf"], "cooming": ["qf"], "turtle": ["qg"], "blackwivesmatter": ["qn"], "ilovejesus": ["qt"], "iheartjesus": ["qt"], "sus": ["r1", "s1"], "okay": ["r2", "1ch", "1ft", "1fv", "1g0", "1g1", "1g2", "1gi", "1gj"], "whitepower": ["r2"], "triggered": ["r7"], "bookcat": ["ra", "rb", "sp", "sq", "sr", "t2", "18a", "1qb", "1r7", "1rc", "1rg", "1ro", "1rs", "1sl", "1sm"], "alexanderhamilton": ["ra", "1qk", "1rr"], "fbi": ["ri", "tu", "1ei"], "canadaianlivesmatter": ["rm"], "chill": ["rn"], "ha": ["rp"], "kick": ["rq", "rv"], "confederate": ["rq", "1fq", "20a"], "rubbing": ["rt"], "hands": ["rt"], "lick": ["ru"], "tongue": ["ru"], "woman": ["rv", "11j", "12i", "1e4", "1tj"], "iamhomophobic": ["s2", "1d5"], "football": ["s2", "1d5"], "ouryounggenerationisclearlylostman": ["s4"], "ppp": ["s8"], "lesbian": ["s8"], "fawking": ["s8"], "pussy": ["s8"], "peoplespopulistpress": ["s8"], "usa": ["se", "tn", "1gn"], "flag": ["se", "1a5", "1fq", "1g4", "1gn", "1in", "1s2", "1se", "20a"], "tariqnasheed": ["sj"], "queenelizabeth": ["sl"], "queenofengland": ["sl"], "F": ["so", "1d6"], "indian": ["ss"], "tears": ["ss"], "afmug": ["t0"], "americafirstmug": ["t0"], "cow": ["t2"], "dontbehatin": ["t9"], "don'tbehatin": ["t9"], "sun": ["ta", "1fl"], "icecube": ["td"], "dawndishsoap": ["te"], "real": ["th", "1di"], "checkmark": ["th"], "boomeralert": ["tk", "1d3"], "sloth": ["tn"], "prettygood": ["tn"], "spacelizard": ["tp"], "tenryo": ["ts", "1kb", "1pc"], "f": ["tt"], "christianbale": ["u2", "1ai", "1au"], "ratio": ["u4", "1d7"], "facesmash": ["u6"], "scottthewoz": ["ub"], "michaelalberto": ["ub", "ud", "vp"], "albertobarbosa": ["ud", "vp"], "eyes": ["ut", "17i"], "trsartor": ["v0", "vf", "18e"], "kingshit": ["va"], "orderofsocialantiquity": ["vf"], "osa": ["vf"], "yellowshorts": ["vm"], "slime": ["vq", "1bu"], "paultown": ["vs", "11k", "12c", "1ge", "1h1"], "soyciety": ["vs"], "society": ["vs"], "jimhalpert": ["10d"], "theoffice": ["10d"], "picklerick": ["10e"], "iamhappy": ["10g"], "ducttape": ["10k"], "marching": ["11e", "1mv"], "soldier": ["11e", "1mv"], "tedkaczynski": ["11g"], "drtheodorekaczynski": ["11g"], "we'reback": ["11i", "11o"], "weback": ["11i", "11o"], "wereback": ["11i", "11o"], "weresoback": ["11i", "11o", "1j3"], "we'resoback": ["11i", "11o", "1j3"], "itisthesecret": ["11k"], "book.paul.town": ["11k"], "yobasbeentoldya": ["11n"], "stfuchat": ["11p"], "shutthefuckupchat": ["11p"], "wegottoococky": ["11q"], "yobabros": ["11q"], "louistheroux": ["11t"], "nose": ["11t"], "thisismindgames": ["12c"], "hedon'tmiss": ["12g", "1d8"], "hedontmiss": ["12g", "1d8"], "japanese": ["12i"], "girl": ["12i"], "girlyou'refunny": ["12j"], "girlyourfunny": ["12j"], "snake": ["12k"], "eatingitsowntail": ["12k"], "eatingitself": ["12k"], "autisticchildarea": ["12m"], "clapping": ["12u", "17h", "1cu"], "takemymoney": ["12v"], "cockroach": ["13c"], "ibakedyouapie": ["13k"], "incelbtw": ["13n"], "happymerchant": ["13u", "1pg"], "rugrats": ["13v"], "stewpickles": ["13v"], "oranges": ["14b"], "wolf": ["14k"], "howling": ["14k"], "groypergamingpointslost": ["14m"], "doit": ["14n", "1da"], "palpatine": ["14n", "15u", "1da"], "starwars": ["14n"], "sitting": ["14r", "16j", "1lq", "1m9"], "patting": ["14s"], "rapegroyper": ["15a"], "incel": ["15c"], "christpilled": ["15g"], "iamincel": ["15j"], "L": ["15k"], "fornite": ["15l", "1vi"], "#1victoryroyale": ["15l", "15m"], "darthsidious": ["15u"], "charliekirk": ["16c"], "smallface": ["16c"], "king": ["16f", "19g", "1b5", "1kr", "1pd"], "afa": ["16h"], "cumklips": ["17l"], "mormonsdrinkcum": ["17l"], "cozytv": ["18b"], "cozy.tv": ["18b"], "umbrella": ["18g"], "legs": ["18i"], "keepcalmjesusisking": ["19a"], "christisking": ["19a"], "fallout": ["19e"], "shutupbitch": ["19g"], "heterogamer": ["19h"], "chillpill": ["19l", "1d4"], "justtrollin": ["19o", "1db"], "donaldduck": ["1a3"], "credo": ["1a4"], "americafirst": ["1a5"], "af": ["1a5", "1td"], "approved": ["1aa"], "dinosaur": ["1ae"], "trex": ["1ae"], "tyrannosaurus": ["1ae"], "driver": ["1af", "1ag", "1ah", "1vp"], "flamenco": ["1bb", "1ki", "1nn"], "fagmenco": ["1bb", "1jm", "1jn", "1ki", "1nn"], "terrydavis": ["1bp"], "cia": ["1bp"], "templeos": ["1bp"], "pope": ["1c4", "1g0", "1tq"], "liltimmy": ["1c6"], "let'sgetprovoked": ["1c8"], "letsgetprovoked": ["1c8"], "fun": ["1ca", "1e5"], "kimjongun": ["1cb"], "northkorea": ["1cb"], "i'mbricked": ["1cg"], "imbricked": ["1cg"], "ohiostate": ["1cj"], "can'twait": ["1d0"], "cantwait": ["1d0"], "don'tbehatin'": ["1d2"], "dontbehating": ["1d2"], "fax": ["1di"], "facts": ["1di"], "TRUE": ["1di"], "fighting": ["1dk"], "please": ["1dm", "1dn"], "positivevibes": ["1dq"], "basedtm": ["1dr"], "#replealthe19th": ["1ds"], "provokedbro": ["1dv"], "dontblameme": ["1e0"], "don'tblameautism": ["1e0"], "sonic": ["1e1"], "shoeonhead": ["1e9"], "momo": ["1e9"], "adolfhitler": ["1ea"], "rave": ["1ea"], "glasses": ["1ee", "1s4", "1vf"], "starofdavid": ["1ef"], "interdasting": ["1ej"], "interesting": ["1ej"], "telescope": ["1ej"], "train": ["1el"], "fishing": ["1em"], "really?": ["1en"], "future!": ["1et"], "americfirst": ["1eu"], "clock": ["1f4"], "reeeeeee": ["1f6", "1m2"], "jesseleepeterson": ["1fa", "1fc", "1fo", "1go", "1gp", "1gt", "1gu", "1gv", "1i1", "1i3"], "jlp": ["1fa", "1fc", "1fo", "1go", "1gp", "1gq", "1gr", "1gt", "1gu", "1gv", "1i1", "1i3"], "you'reabeta": ["1fc"], "beta": ["1fd"], "girlname": ["1fe"], "stewpeters": ["1fg", "1n6", "1nk", "1nl", "1nm", "1nq", "1os", "1ot", "1ou", "1ov", "1p0", "1p1", "1t1"], "stewcrew": ["1fg", "1n6", "1nk", "1nl", "1nm", "1nq", "1os", "1ot", "1ou", "1ov", "1p0", "1p1", "1t1"], "youhavetogoback": ["1fh"], "statueofliberty": ["1fh"], "realeyes": ["1fi"], "realize": ["1fi"], "reallies": ["1fi"], "tupacshakur": ["1fi"], "amazintarbaby": ["1fj"], "slaverywasachoice": ["1fk"], "kanyewest": ["1fk", "1v5"], "heblack": ["1fn", "1gk"], "whatyoudoing": ["1fp"], "starsandbars": ["1fq"], "talorswift": ["1fs"], "o/": ["1fs"], "malikobaba": ["1ft"], "muhammadali": ["1fv"], "colinkaepernick": ["1g1"], "nancypelosi": ["1g2"], "smug": ["1g3"], "resistance": ["1g4"], "whitesupremacy": ["1g9"], "killsblackpeople": ["1g9"], "deattotheracists": ["1gc"], "jej!!!": ["1ge"], "dumpit": ["1gf"], "bogdanoff": ["1gf"], "thebogs": ["1gf"], "reallynigga": ["1gh"], "alsharpton": ["1gi"], "billclinton": ["1gj"], "heblat": ["1gk"], "wutda!": ["1gl"], "whatda": ["1gl", "1us", "1vc"], "beta!": ["1gq", "1gr"], "plays": ["1gv"], "arsonist": ["1h1"], "flames": ["1h1", "1id", "1td", "1te"], "goodmorning": ["1h6", "1h7"], "jesuslovesyou": ["1h6"], "mylittlepony": ["1h8", "1mi"], "bronie": ["1h8", "1mi"], "mlp": ["1h8", "1mi"], "dunce": ["1h9", "1lg"], "pigger": ["1hd"], "paypig": ["1hd"], "afro": ["1he"], "sweetback": ["1hf"], "gorilla": ["1hh"], "tank": ["1hi"], "lasereyes": ["1hn", "1na", "1os", "1ou", "1p0", "1q0", "1q5", "1q6", "20a"], "vs": ["1hp"], "edheadsriseup": ["1hs"], "angelsarebeing": ["1i0"], "morewhitebabies": ["1i2"], "shower": ["1i6"], "bugman": ["1i8"], "elmo": ["1id"], "burkanow": ["1ii", "1ij"], "silencewoman": ["1ik"], "backbencher": ["1il"], "veyta": ["1in", "1io", "1ip", "1jb", "1jg", "1la", "1lb"], "trans": ["1in", "1io", "1ip"], "veronica": ["1in", "1io", "1ip"], "smash": ["1is", "1it", "1iu", "1j1"], "pass": ["1iv", "1j0"], "cwc": ["1j9"], "culturewarcriminal": ["1j9"], "fuckyou": ["1j9", "1mr"], "gayta": ["1jb", "1jg"], "burka": ["1jc"], "dasrite": ["1ji"], "flemenco": ["1jm", "1jn"], "crp": ["1jo"], "coachredpill": ["1jo"], "grug": ["1k0"], "bigbrain": ["1k1", "1k4", "1ss", "1st"], "lmao": ["1k2"], "followbakedalaska": ["1k3", "1k7"], "arms": ["1k5", "1k6"], "handshake": ["1k5", "1k6"], "brothers": ["1k5", "1k6"], "patrickstar": ["1k8", "1ng", "1q0"], "supersaiyan": ["1ka"], "goku": ["1ka"], "fingerpointing": ["1kb", "1q7"], "howlergang": ["1kg"], "mrmetokur": ["1kh"], "mistermetokur": ["1kh"], "jimmetokur": ["1kh"], "medicare": ["1kh"], "hbdflam": ["1ki"], "happybirthdayflam": ["1ki"], "pig": ["1kj"], "elonmusk": ["1ko"], "bigtech": ["1kp", "1lk", "1n0", "1ni", "1pk", "1pl", "1t0"], "seal": ["1kq", "1rh"], "walrus": ["1kr"], "n": ["1kv"], "brittany": ["1l0", "1ml", "1nc", "1nd", "1vv"], "politicallyprovoked": ["1l0", "1ml", "1nc", "1nd", "1pu", "1vv"], "pp": ["1l0", "1vv"], "andywarski": ["1l8"], "spam": ["1lc"], "trumpet": ["1le"], "drums": ["1lh"], "worried": ["1lj"], "women=property": ["1ll"], "tall": ["1lm"], "goose": ["1ls"], "poop": ["1lt"], "pelican": ["1lv"], "handsomesquidward": ["1m0"], "wemadeit": ["1m1", "1m4", "1m5"], "wagmi": ["1m1", "1m4", "1m5"], "wgmi": ["1m1", "1m4", "1m5"], "racing": ["1m3"], "lean": ["1m6", "1m8", "1ma", "1mh"], "leanhead": ["1m6", "1m8", "1mf", "1mh"], "juicebox": ["1ma"], "kawaii": ["1mc"], "cute": ["1mc"], "shy": ["1mc"], "left": ["1me"], "lean ": ["1mf"], "boogie2988": ["1mg"], "openfire": ["1mg"], "tree": ["1mm"], "chicken": ["1mn"], "gn": ["1mp", "1no", "1np"], "fucku": ["1mr"], "chatlikedthat": ["1n5"], "rpg": ["1n7", "1or"], "redpillgamingtv": ["1n7", "1or"], "redpillgangtv": ["1n7", "1or"], "flower": ["1n9"], "crystalball": ["1nb"], "smiling": ["1ne", "1ts", "1tt"], "N": ["1nh"], "fokiss": ["1nm"], "stitch": ["1no", "1np"], "stewworldorder": ["1nq"], "vaticancity": ["1ob"], "deusvult": ["1oc", "1om"], "modernist": ["1oi"], "absolutelyantilogos": ["1oj"], "emichaeljones": ["1oj"], "dremj": ["1oj"], "bishop": ["1on"], "stewcrewalwayswins": ["1ot"], "stewwick": ["1ou"], "ballsareonthetable": ["1ou"], "stewwill": ["1ov"], "collectingbounty": ["1ov"], "standingdown": ["1p1"], "standingby": ["1p1"], "bpf": ["1p2"], "bigpapafacist": ["1p2"], "baldassnigga": ["1p3", "1p4", "1p5", "1p6", "1p7"], "baldandstrong": ["1p3", "1p4", "1p5", "1p6", "1p7"], "martinluthur": ["1p8"], "arresthim": ["1pe"], "arrestheem": ["1pe"], "tesla": ["1pi"], "whiteoutside": ["1pj"], "elijahschaffer": ["1pm"], "timpool": ["1pn"], "millenialmatt": ["1pn"], "bricks": ["1pp"], "brickedup": ["1pp"], "provokedpilled": ["1pu"], "manul": ["1q9", "1qa"], "welcome": ["1qf"], "welcom": ["1qg"], "dalejones": ["1qh"], "tylerrussell": ["1qi"], "calculator": ["1qj"], "earth": ["1ql", "1sb", "1sc", "1sf"], "world": ["1ql", "1sb", "1sc", "1sf"], "globe": ["1ql", "1sb", "1sc", "1sf"], "nativeamericans": ["1qm", "1s2"], "bewareofforeigninfluence": ["1qm", "1s2"], "skeleton": ["1qn"], "bible": ["1qo"], "snoopy": ["1qv"], "woodstock": ["1qv"], "peanuts": ["1qv"], "boat": ["1r3"], "bomber": ["1r5"], "someonetalked!": ["1r8"], "whitehistorymonth": ["1r9"], "octopus": ["1rh", "1rt"], "informationawarenessoffice": ["1rj"], "iao": ["1rj"], "tarnseele": ["1rn"], "scroogemcduck": ["1rp"], "nothingisbeyondourreach": ["1rt"], "reading": ["1s4", "1s5", "1s6", "1s7", "1s8"], "gary": ["1s7"], "hulkhogan": ["1se"], "hollywoodhogan": ["1se"], "guitar": ["1se"], "wendell": ["1sg", "1si"], "wendeii": ["1sg", "1si"], "bouncing": ["1sr"], "hopping": ["1sr"], "thanos": ["1t2"], "nickrekietalaw": ["1t6"], "wendy": ["1t9"], "kingknub": ["1ta", "1tb", "20k", "20l", "20m", "20n"], "kingnub": ["1ta", "1tb", "20k", "20l", "20m", "20n"], "americanspirit": ["1tc"], "cigarettes": ["1tc"], "k": ["1te"], "killstream": ["1te"], "talktothehand": ["1ti"], "hahaclassic": ["1tp"], "chad": ["1tr"], "priest": ["1tt"], "father": ["1tt"], "sandwich": ["1tu"], "spinningfood": ["1tu"], "spinny": ["1tu"], "kiss": ["1tv"], "stayer": ["1tv"], "kicking": ["1u0"], "blueeyeswhitedragon": ["1u1"], "yugioh": ["1u1", "1uo"], "ag": ["1uq", "1ur"], "wutda": ["1us", "1vc"], "funkopop": ["1uu"], "lg4l": ["1uv", "1v0"], "heart": ["1v1"], "scrapplegang": ["1v4"], "wakup!!": ["1v6"], "homelander": ["1v8"], "theboys": ["1v8"], "missile": ["1vk"], "lovecraft": ["1vk"], "walterwhite": ["20c"], "breakingbad": ["20c"], "it'sma'am": ["20g"], "itsmam": ["20g"], "hollywoodbibble": ["20i"] };

const GM_getValue = (key, value) => JSON.parse(localStorage.getItem(key) ?? JSON.stringify(value));
const GM_setValue = (key, value) => localStorage.setItem(key, JSON.stringify(value));

let stickers = document.createElement("template");
let saved = document.createElement("template");
let lastPath = "";
let stickerUrlBase = "https://prd.foxtrotstream.xyz/a/stk";
let stickerList = GM_getValue("stickercache", []);
let currentUpdate;
let hasUpdated = false;

function setErrorText(text) {
  document.querySelector(".z-40.bottom-0").children[2].innerText = text;
}

function applyStickerHTML() {
  generateSaved();
  if (menu = document.querySelector(".z-40.bottom-0")) {
    let tabs = menu.querySelector(".flex.gap-2");
    let savedOnly = document.querySelector(".savedOnly");
    tabs.innerHTML = `
<span class="bg-gray-500 font-medium select-none cursor-pointer rounded-tl-sm rounded-tr-sm px-2 py-1 text show-all-stickers">All</span>
<span class="font-medium select-none cursor-pointer rounded-tl-sm rounded-tr-sm px-2 py-1 text only-saved-stickers">Saved</span>`
    try {
      menu.children[2].replaceWith(stickers.content.querySelector("div").cloneNode(true));
    } catch {
      setErrorText("Loading...");
    }
  }
}

function generateSaved() {
  let savedStickers = GM_getValue("savedstickers", []);
  saved.innerHTML = `<div class="h-full bg-gray-500 p-2 overflow-y-auto scrollbar-pretty stickers saved-stickers grid p-2 grid-cols-5 gap-2" style="grid-auto-rows: min-content;"></div>`;
  savedStickers.forEach(e => {
    let stickerUrl = `${stickerUrlBase}/${e}.webp`;
    saved.content.querySelector("div").insertAdjacentHTML("afterbegin", `<div sticker-url="${stickerUrl}" sticker-id="${e}" class="cursor-pointer liststicker saved" style="background-image: url('${stickerUrl}')" title=${e}><div class="saved-toggle"></div></div>`);
  });
  if (savedWindow = document.querySelector(".saved-stickers")) {
    savedWindow.replaceWith(saved.content.querySelector("div").cloneNode(true));
  }
}

function createStickers(array) {
  stickers.innerHTML = `<div class="h-full bg-gray-500 p-2 overflow-y-auto scrollbar-pretty"><input id="sticker-search" class="rounded outline-none w-full border-2 border-gray-600 px-2 py-1" style="font-size: 14px; margin-bottom: 5px;" placeholder="Search sticker code or channel name"></div>`
  let savedStickers = GM_getValue("savedstickers", []);
  [...array].forEach(e => {
    if (e == undefined || e[1] == undefined) {
      return;
    }
    let data = JSON.parse(e[1]);
    stickerUrlBase = data.stickerCDN;
    let userStickerHTML = `<div class="stickercategory">`;
    userStickerHTML += `<span class="username p-2">${e[0]}${e[2] ? " - update failed, will retry" : ""}</span><br><div class="stickers grid p-2 grid-cols-5 gap-2">`;
    data.stickers.forEach(stk => {
      let stickerId = stk["_id"];
      let stickerUrl = `${stickerUrlBase}/${stickerId}.webp`;
      let newStickerHTML = `<div sticker-url="${stickerUrl}" sticker-id="${stickerId}" user-id=${e[0]} class="cursor-pointer liststicker${savedStickers.includes(stickerId) ? " saved" : ""}" style="background-image: url('${stickerUrl}')" title=${stickerId}><div class="saved-toggle"></div></div>`
      userStickerHTML += newStickerHTML;
    })
    userStickerHTML += "</div></div>";
    if (window.location.pathname.split("/")[1].toLowerCase() == e[0].toLowerCase()) {
      stickers.content.querySelector("#sticker-search").insertAdjacentHTML("afterend", userStickerHTML);
    } else {
      stickers.content.querySelector("div").insertAdjacentHTML("beforeend", userStickerHTML);
    }
  });
  if (!document.querySelector(".show-all-stickers")) {
    applyStickerHTML();
  }
}

function getUserStickers(user, index) {
  fetch(`https://api.cozy.tv/cache/${user.name}/channelStickers`).then(response => response.ok ? response.json() : undefined).then(json => {
    let isUndefined = json == undefined;
    if (isUndefined) {
      json = { "stickers": [] };
    }
    if (user.cardUrl) {
      json.stickers.unshift({ "_id": `../pcrds/${user.cardUrl.split("/").pop().split(".")[0]}` });
    }
    json.stickers.unshift({ "_id": `../av/${user.avatarUrl.split("/").pop().split(".")[0]}` });
    if (!isUndefined || stickerList[index] == undefined || stickerList[index][0] != user.displayName) {
      stickerList[index] = [user.displayName, JSON.stringify(json), isUndefined];
      GM_setValue("stickercache", stickerList);
      createStickers(stickerList);
    }
  });
}

function getStickers() {
  fetch("https://api.cozy.tv/cache/homepage").then(response => {
    if (!response.ok) {
      setErrorText("Failed to load stickers. Likely rate-limited.");
      return undefined;
    } else {
      return response.json();
    }
  }).then(json => {
    if (json == undefined) {
      return;
    }
    let users = json.users.sort((a, b) => (a["followerCount"] < b["followerCount"]) ? 1 : (a["followerCount"] > b["followerCount"]) ? -1 : (a["name"] < b["name"]) ? 1 : -1);
    let newArr = new Array(users.length);
    users.forEach((user, index) => {
      newArr[index] = stickerList.find(e => e && e[0] == user.displayName);
    });
    stickerList = newArr;
    GM_setValue("stickercache", stickerList);
    let currentUser = window.location.pathname.split("/")[1].toLowerCase();
    if (found = users.find(e => e["name"] == currentUser)) {
      let index = users.indexOf(found);
      currentUpdate = setInterval(() => {
        getUserStickers(found, index);
      }, 90000);
      getUserStickers(found, index);
    }
    if (!hasUpdated) {
      hasUpdated = true;
      users.forEach((user, index) => {
        setTimeout(() => {
          if (user == undefined) {
            return;
          }
          getUserStickers(user, index);
        }, index * 1000);
      });
    }
  });
  createStickers(stickerList);
}

const inputObserver = new MutationObserver(changes => {
  let text = changes[0].target.textContent;
  let code = text.match(/\|([A-Za-z0-9])*/g)?.pop()?.slice(1);
  if (code) {
    const referenceParent = changes[0].target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    if (!document.getElementById('stickermenu')) {
      let stickermenu = document.createElement('div');
      stickermenu.className = "h-full bg-gray-500 p-2 overflow-y-auto scrollbar-pretty stickers grid p-2 grid-cols-5 gap-2";
      stickermenu.style.gridAutoRows = 'min-content';
      stickermenu.style.maxHeight = "150px";
      stickermenu.id = 'stickermenu';
      referenceParent.insertBefore(stickermenu, referenceParent.childNodes[0]);
    } else {
      document.getElementById('stickermenu').innerHTML = "";
    }
    let matches = Object.keys(stickerlabels).filter(codes => codes.includes(code));
    matches = matches.reduce((a, c) => [...a, ...stickerlabels[c]], []);
    matches = matches.slice(0, 100);
    matches.forEach(code => {
      const glicker = document.createElement('div');
      glicker.setAttribute('sticker-url', `https://prd.foxtrotstream.xyz/a/stk/${code}.webp`);
      glicker.setAttribute('sticker-id', code);
      glicker.className = "cursor-pointer liststicker inlinesticker";
      glicker.style.backgroundImage = `url('https://prd.foxtrotstream.xyz/a/stk/${code}.webp')`;
      glicker.title = code;
      stickermenu.appendChild(glicker);
    });
  } else {
    document.getElementById('stickermenu')?.remove();
  }

});

const stickersObserver = new MutationObserver(list => {
  list.forEach(node => {
    if (node.addedNodes.length > 0 && node.addedNodes[0].classList.contains("w-full")) {
      applyStickerHTML();
    }
  });
});

const chatObserver = new MutationObserver(() => {
  document.querySelectorAll(".chat_sticker").forEach(sticker => {
    let id = sticker.style.backgroundImage.match(/(?<=\/).*(?=\.webp)/)[0];
    if (id.match(/stk/)) {
      id = id.split("stk/").pop()
    }
    sticker.setAttribute("sticker-id", id);
    sticker.setAttribute("sticker-url", `${stickerUrlBase}/${id}.webp`);
    sticker.setAttribute("title", id);
    if (GM_getValue("savedstickers", []).includes(id)) {
      sticker.classList.add("saved");
    } else {
      sticker.classList.remove("saved");
    }
    if (!sticker.querySelector(".saved-toggle")) {
      sticker.insertAdjacentHTML("beforeend", `<div class="saved-toggle"></div>`);
    }
  });
});

const reloadObserver = new MutationObserver(setObservers);

function setObservers() {
  let poll = window.setInterval(() => {
    if (chat = document.querySelector(".overflow-x-hidden.h-full")) {
      clearInterval(poll);
      reloadObserver.disconnect();
      reloadObserver.observe(document.querySelector(".notbody"), { childList: true });
      reloadObserver.observe(document.querySelector(".notbody .flex"), { childList: true });
      inputObserver.disconnect();
      inputObserver.observe(document.querySelector('[contenteditable="true"][enterkeyhint="send"]'), { childList: true, characterData: true, subtree: true });
      stickersObserver.disconnect();
      document.querySelectorAll("div[contenteditable]").forEach(e => stickersObserver.observe(e.parentNode.parentNode, { childList: true }));
      if (stickerElem = document.getElementById("stickers")) {
        stickersObserver.observe(stickerElem, { childList: true });
      }
      chatObserver.disconnect();
      chatObserver.observe(chat, { childList: true });
      if (currentUpdate != undefined) {
        clearInterval(currentUpdate);
      }
      getStickers();
    }
  }, 100);
}

setObservers();

document.addEventListener("input", e => {
  let t = e.target;
  if (t.id == "sticker-search") {
    document.querySelectorAll(".stickercategory div[sticker-id]").forEach(s => {
      s.style.display = (s.getAttribute("sticker-id").toLowerCase().includes(t.value.toLowerCase().replace("id:", "")) || (!t.value.toLowerCase().startsWith("id:") && s.getAttribute("user-id").toLowerCase().includes(t.value.toLowerCase()))) ? "unset" : "none";
    });
    document.querySelectorAll(".stickercategory").forEach(s => {
      s.style.display = s.querySelector(".liststicker:not([style*='display: none'])") ? "block" : "none";
    });
  }
});

document.addEventListener("click", e => {
  let t = e.target;
  if ((t.closest("a") && t.closest("a").href.startsWith("https://cozy")) || t.matches("li.tab-item-outer:last-of-type")) {
    setObservers();
  } else if (t.classList.contains("liststicker") || (t.classList.contains("chat_sticker") && (e.detail % 2) == 0)) {
    if (t.classList.contains("inlinesticker")) {
      const textshit = document.querySelector("div[contenteditable]");
      textshit.innerHTML = textshit.innerHTML.replace(/\|([A-Za-z0-9])*/, '');
      textshit.focus();
    }
    document.querySelector("div[contenteditable]").insertAdjacentHTML("beforeend", `<img style="user-select: none; display: inline; width: 24px; height: 24px;" src="${t.getAttribute("sticker-url")}" data-sticker="${t.getAttribute("sticker-id")}">`);
  } else if (t.classList.contains("show-all-stickers")) {
    t.closest(".z-40.bottom-0").children[2].replaceWith(stickers.content.querySelector("div").cloneNode(true));
    document.querySelector(".only-saved-stickers").classList.remove("bg-gray-500");
    t.classList.add("bg-gray-500");
  } else if (t.classList.contains("only-saved-stickers")) {
    t.closest(".z-40.bottom-0").children[2].replaceWith(saved.content.querySelector("div").cloneNode(true));
    document.querySelector(".show-all-stickers").classList.remove("bg-gray-500");
    t.classList.add("bg-gray-500");
  } else if (t.classList.contains("saved-toggle")) {
    let savedList = GM_getValue("savedstickers", []);
    let stickerId = t.parentNode.getAttribute("sticker-id");
    if (t.parentNode.classList.toggle("saved")) {
      if (!savedList.includes(stickerId)) {
        savedList.push(stickerId);
      }
      if (sticker = stickers.content.querySelector(`div[sticker-id="${stickerId}"]`)) {
        sticker.classList.add("saved");
      }
      document.querySelectorAll(`div[sticker-id="${stickerId}"]`).forEach(e => e.classList.add("saved"));
    } else {
      saved.content.querySelector(`div[sticker-id="${stickerId}"]`).remove();
      savedList = savedList.filter(i => i != stickerId);
      if (sticker = stickers.content.querySelector(`div[sticker-id="${stickerId}"]`)) {
        sticker.classList.remove("saved");
      }
      document.querySelectorAll(`div[sticker-id="${stickerId}"]`).forEach(e => e.classList.remove("saved"));
    }
    GM_setValue("savedstickers", savedList);
    generateSaved();
  }
});

window.addEventListener("popstate", e => {
  if (window.location.pathname != "/") {
    setObservers();
  }
});

document.head.insertAdjacentHTML("beforeend", `<style>
  .savedOnly .stickers > *:not(.saved),
  .savedOnly .username, .savedOnly br {
    display: none
  }

  .liststicker {
    user-select: none;
    width: 56px;
    height: 56px;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .saved-toggle {
    text-align: right;
    color: gold;
    line-height: 12.5px;
  }

  .chat_sticker .saved-toggle {
    display: none;
  }

  .chat_sticker:hover .saved-toggle {
    display: block;
  }

  .saved-toggle::after {
    content: "☆";
  }

  .saved .saved-toggle::after {
    content: "★";
  }
</style>`);

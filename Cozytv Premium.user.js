// ==UserScript==
// @name         Cozy.tv Premium
// @namespace    Cozy.tv
// @version      1.3.10
// @description  Display & save any cozy.tv sticker
// @author       KANYE
// @match        https://cozy.tv/*
// @icon         https://cozy.tv/public/cz_fav_128.png
// @license      MIT
// ==/UserScript==

// Use : or | then start typing a tag

// prettier-ignore
const stickerlabels = {'pepe': ['2i', '2j', '2k', '2l', '2o', '35', '36', '37', '38', '39', '3a', '3c', '3h', '3i', '3j', '3k', '3l', '3m', '3o', '3r', '3t', '3u', '40', '41', '44', '45', '46', '47', '48', '49', '4b', '4c', '4e', '4f', '4h', '4i', '4j', '4l', '4m', '4n', '4o', '4p', '4q', '4r', '4u', '50', '51', '52', '53', '54', '55', '56', '57', '58', '5d', '5f', '5g', '5h', '5i', '5j', '5k', '5l', '5n', '5o', '5p', '5t', '5v', '62', '63', '64', '69', '6a', '6u', '6v', '8i', '8j', '8l', '8o', '8p', '8q', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9j', '9k', '9m', '9n', '9o', '9p', '9t', '9u', 'ah', 'aj', 'ak', 'ar', 'as', 'b7', 'bi', 'bl', 'bo', 'bp', 'bs', 'bu', 'bv', 'c0', 'c1', 'c2', 'c3', 'cb', 'cd', 'ce', 'cg', 'cq', 'cu', 'cv', 'd0', 'd1', 'd2', 'd3', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'de', 'dg', 'dq', 'dt', 'du', 'dv', 'e0', 'e1', 'e3', 'e4', 'e5', 'e6', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'eh', 'ei', 'ek', 'en', 'eo', 'ep', 'er', 'eu', 'f3', 'f5', 'f6', 'fp', 'gt', 'gu', 'h0', 'h9', 'ho', 'hp', 'hq', 'hr', 'hs', 'i2', 'iv', 'j0', 'j1', 'j2', 'j3', 'j4', 'j5', 'j6', 'j7', 'jq', 'k8', 'k9', 'nq', 'nt', 'nu', 'nv', 'o0', 'o4', 'o8', 'o9', 'oj', 'ov', 'pv', 'q0', 'q8', 'q9', 'qa', 'qb', 'qc', 'qd', 'qe', 'r2', 'r6', 'r7', 'rf', 'rg', 'rh', 'rj', 'rk', 's0', 'u1', 'u5', 'uu', 'uv', 'v6', 'v7', 'v8', 'vb', 'vo', '104', '106', '10j', '10s', '111', '11e', '11u', '12l', '12n', '12q', '12r', '12s', '12t', '12v', '130', '135', '136', '139', '13e', '13g', '13j', '14f', '14g', '14h', '14i', '14r', '14s', '14u', '150', '153', '15p', '15v', '161', '162', '16j', '16l', '178', '17f', '17g', '18i', '191', '192', '1c9', '1cp', '1cq', '1cr', '1ct', '1cu', '1cv', '1dc', '1dk', '1eb', '1ed', '1ee', '1eh', '1ek', '1em', '1h9', '1i6', '1i7', '1j7', '1j8', '1ke', '1kf', '1ki', '1kk', '1kt', '1ku', '1ld', '1lf', '1lg', '1lh', '1li', '1lj', '1lm', '1ln', '1lo', '1lp', '1lq', '1ls', '1m3', '1m6', '1m9', '1ma', '1mb', '1mc', '1md', '1me', '1mf', '1mp', '1mr', '1ms', '1mt', '1n1', '1n9', '1nb', '1nf', '1nj', '1qp', '1r2', '1r3', '1s9', '1sa', '1sj', '1sk', '1sn', '1so', '1sp', '1sr', '1su', '1t8', '1tf', '1tg', '1th', '1tv', '1u0', '1un', '1ve', '1vf', '1vq', '219', '21a', '22u', '22v', '240', '241', '242', '248', '26d', '2a9', '2ah', '2ai', '2aj', '2au', '2bg', '2bh', '2bi', '2bj', '2bk', '2c0', '2c1', '2c2', '2cc', '2cd', '2cj', '2cv', '2d0', '2d1', '2d2', '2d3', '2d4', '2d5', '2d6', '2d7', '2d8', '2d9', '2da', '2db', '2dc', '2dl', '2dm', '2er', '2g2', '2gk', '2h8', '2h9', '2hb', '2hi', '2hk', '2hl', '2hm', '2ho', '2hp', '2iv', '2j4', '2j5', '2jh', '2ji', '2jj', '2jk', '2jm', '2jn', '2jo', '2jp', '2jq', '2jr', '2k1', '2k4', '2k5', '2kb', '2ke', '2kg', '2ln', '2lo', '2me', '2mf', '2mq', '2mt', '2n2', '2n3', '2n4', '2n5', '2ns', '2nt', '2nu', '2o1', '2o2', '2o3', '2om', '2on', '2oo', '2or', '2os', '2ot', '2p3', '2p4', '2pd', '2pe', '2ph', '2pp', '2qk', '2ql', '2qr', '2qs', '2qt', '2qu', '2qv', '2r0', '2rg', '2rh', '2ri', '2rj', '2rl', '2ro', '2rp', '2su', '2tt', '2vb', '2vr', '2vv', '309', '30h', '30l', '316', '31g', '31j', '31p', '324', '325', '330', '331', '339', '35s', '35t', '37r', '387', '396', '3a5', '3aj', '3an', '3ct', '3cu', '3f8', '3f9', '3fb', '3h2', '3h5', '3jg', '3jt', '3ng', '3nh', '3nq', '3nu', '3u2', '3u3', '3u4', '3u5', '3u8'], 'animated': ['2i', '2j', '2k', '2l', '2q', '2r', '2s', '79', '7a', '8e', '136', '13c', '16b', '3vl', '3vm'], 'eating': ['2i', '9g', 'bu', 'f8', '12n', '1cp', '2pp', '37f', '3ol'], 'popcorn': ['2i', '3a', '5n', '6v', 'd8', 'j0', 's6', '12n', '1cp', '2hc', '2qs', '2r0', '30b', '31t', '32h', '32k', '32n', '37g', '39a'], 'yes': ['2j', 'j8', '129', '1ie', '1oe', '1of', '1ok', '1v2', '237'], 'angry': ['2j', '3k', '49', '4p', 'd7', 'fd', 'j3', 'rf', '12r', '153', '17g', '1eb', '1r2', '1u0', '203', '21v', '319', '31q', '322', '39m', '3f0', '40j'], 'no': ['2k', '193', '1ci', '1if', '214'], 'wave': ['2l', 'nt', 'q9', '1mq'], 'hi': ['2l', '1cf'], 'beardson': ['2m', '2n', '2o', 'ja', 'jb', 'jd', 'jf', 'qn', 'qo', 'rc', 'rc', 'rd', 're', 'rf', 'rg', 'rh', 'ri', 'rj', 'rk', 'rl', 'rm', 'rn', 'ro', 'rp', 'rq', 'rr', 'rs', 'rt', 'ru', 'rv', 's0', 's1', 's2', 's3', 's4', '17l', '19h', '19i', '19j', '19k', '19l', '1uu', '24a', '24b', '24c', '25v', '260', '261', '262', '35v', '3kh', '3kn', '3o2'], 'party': ['2m'], 'dance': ['2m', '38', '3b', '51', '9b', 'ja', '215', '216', '27l', '2g0', '2gl', '2i2', '2ph', '2pk', '31l', '32l', '33f', '35o', '3j4', '3k2', '3ka', '3vf', '3vu', '40m', '41a'], 'excited': ['2m', '5j', '14i', '3n3'], 'happy': ['2m', '3f', '57', '5l', 'aj', 'bo', '13e', '14i', '162', '2hh'], 'cozy': ['2n', '3c', '3p', '47', '4i', '59', '5k', '5v', '8v', '98', '9a', 'e3', 'ef', 'ep', 'er', 'f3', 'h0', '100', '12l', '13e', '14u', '162', '205', '2ns', '2nt', '2nu', '2o1', '2o2', '2o3', '2o9', '2rs', '2rt', '31r', '32a', '352', '353', '3f2'], 'chillin': ['2o', 'v9'], 'jimbo': ['2p', '2q', '2r', '2s', '2t', '2u', '2v', '30', '31', '32', '33', '34', '3p', '3v', 'ql', 'qm', '1l9'], 'jughead': ['2p', '2q', '2r', '2s', '2t', '2u', '2v', '30', '32', '33', '34', '3g', '3p', '3v', 'i2', 'o4', 'qj', 'ql', 'qm', '1bt', '1n8', '2bg', '2bh', '2bi', '2bj', '2bm', '2bn', '2bo', '2bt', '2bu', '2c4', '2c5', '2de', '2df', '2rq', '2rr', '2rs', '2rt', '3eq', '3er', '3es', '3et', '3eu', '3ev', '3f0', '3f1', '3f2', '3f3', '3f4', '3f6', '3sh', '3sn'], 'skateboard': ['2t'], 'reddit': ['2v', '2ab', '2bn', '2tp', '3d6'], 'pat': ['35', '3fa'], 'headpat': ['35'], 'shock': ['36'], 'surprise': ['36'], 'british': ['37', '2l6', '3qd'], 'fancy': ['37', '5f', 'cb', 'e1'], 'jimbozoomer': ['37', '38', '39', '3b', '3b', '3d', '3e', '3f', '3g', '3r', '3v', '4b', '2bg', '2bh', '2bi', '2bj', '2bk', '2bl', '2bm', '2bn', '2bo', '2bp', '2bs', '2bt', '2bu', '2bv', '2c1', '2c2', '2c3', '2c4', '2c5', '2c6', '2c7', '2c7', '2c8', '2c8', '2c9', '2ca', '2cb', '2cc', '2cd', '2cf', '2cg', '2ch', '2ci', '2cj', '2cv', '2d0', '2d1', '2d2', '2d3', '2d4', '2d5', '2d6', '2d7', '2d8', '2d9', '2da', '2db', '2dc', '2de', '2df', '2df', '2dg', '2dg', '2di', '2di', '2dj', '2dj', '2dk', '2dl', '2dm', '2ei', '2rq', '2rr', '2rs', '2rt', '312', '33p', '3sg', '3sh', '3sn'], 'milk': ['38', '9b', '2np', '2o5'], 'wizard': ['39', '5g', '10r', '1nb', '2bs', '32i'], 'magic': ['39', '5g'], 'sweating': ['3a', '4o', '12s', '2hd', '2j3', '339', '402'], 'blanket': ['3c', '5k', '5v', '98', '9a', 'e3', 'ef', 'eo', 'ep', 'er', 'f3', '14u'], 'leave': ['3d'], 'leaving': ['3d'], 'monster': ['3e'], 'drinking': ['3e', '126', '37p', '39c', '3s5'], 'blush': ['3f', '3h', '3i'], 'cheers': ['3g', '4g', '5p', 'd1', 'fg', 'jq', 'ur', '13j', '16l', '1dl', '1e6', '1j5', '1vn', '21c', '21o', '21r', '21s', '262', '2ff', '2it', '2j8', '2jg', '2k0', '2ka', '2ob', '37a'], 'hug': ['3i', '3l', '44', '69', 'f6', '1lo', '2u4', '3f1', '3fe'], 'peepo': ['3j', '3k', '3l', '3o', '3r', '3t', '46', '49', '4a', '4c', '4i', '4j', '4o', '4r', '50', '51', '52', '55', '58', '5g', '62', '69', '6u', '6v', '8i', '8j', '8o', '8q', '9m', '9o', '9t', '9u', 'ah', 'aj', 'bo', 'bt', 'c0', 'c1', 'ce', 'cv', 'd6', 'd8', 'dg', 'e0', 'e5', 'e6', 'e8', 'ec', 'ef', 'ei', 'eo', 'fp', '266', '26c', '27a', '2hh', '2kh', '2v3', '2v4', '2v5', '2v6', '2v7', '2v8', '2v9', '2vd', '2ve', '2vf', '2vg', '2vh', '2vi', '2vj', '2vk', '2vl', '2vm', '2vn', '2vo', '2vp', '2vq', '2vu', '300', '301', '302', '304', '305', '306', '307', '308', '30a', '30b', '30c', '30d', '30i', '30j', '31a', '31d', '31i', '31o', '31s', '327', '32i', '32k', '32n', '332', '33c', '33e', '33s', '35r', '37e', '37f', '37g', '37h', '37i', '37j', '37k', '37l', '37m', '37n', '37o', '37p', '37q', '37t', '37u', '37v', '383', '384', '38f', '38k', '38l', '38m', '38n', '38o', '38p', '38q', '38r', '38s', '38t', '38u', '38v', '38w', '38x', '38y', '38z', '390', '391', '392', '393', '394', '395', '397', '398', '399', '39a', '39b', '39c', '39d', '3b6', '3bc', '3ce', '3cg', '3ci', '3cj', '3f7', '3s8', '3u9', '3uc', '3ut', '40b', '40j'], 'love': ['3j'], 'iloveyou': ['3j', '2cb', '32g', '336', '3ej'], 'iloveu': ['3j'], 'torch': ['3k'], 'tikitorch': ['3k', 's0', '17g', '1eb', '2cc', '3a5', '3gv', '40j'], 'apu': ['3m', '48', '4b', '4e', '4h', '9j', 'ar', 'as', 'cb', 'd3', 'd9', 'dt', 'du', 'f5', 'f6', '240', '2dl', '30f', '31l', '328', '32e', '33g', '3f5', '3fa', '3nr'], 'underwear': ['3o'], 'chair': ['3p', '47', '4i', 'ea', '14r', '14u', '16j', '1iq', '1lq', '1m9', '3mu'], 'laughing': ['3t', '7p', '96', 'b7', 'cg', 'd6', 'r4', 'r5', 'u1', '106', '133', '15v', '161', '16f', '181', '1hu', '1ng', '1tf', '1tg', '1th', '1uo', '2lp', '2ro', '32b', '35s', '3dv', '3ju', '3ki', '3np', '3qe', '3s7'], 'peepolaugh': ['3t', '2h6', '318', '31f', '32d', '334', '3go'], 'singing': ['3u', '4l', '2cj', '326', '38a', '39v', '3a1', '3fb'], 'microphone': ['3u', '38a'], 'toilet': ['3v', '6u', 'bf', 'j4', '1m3', '31u'], 'judge': ['40'], 'rocking': ['41'], 'horns': ['41'], 'boseph': ['42', '44', '45', '46', '47', '48', '49', '4a', '4u', '4v', '5u', '5v', '60', '61', '62', '63', '64', '6s', '6t', '87', '8e', '8f', '8j', 'bf', 'h4', 'h5', 'h6', '185', '186', '18d', '1ip', '1l9', '1t5', '1t7', '1vg', '1vh', '203', '204', '205', '206', '207', '20u', '20v', '210', '2ak', '2al', '2do', '2dp', '2dq', '2er', '3sb', '3sc', '3sd', '3ue', '3uf', '3uh', '3ui', '3uj', '3uk', '3un', '3uo', '3us', '3uu'], 'anime': ['42', '4v', '5b', '60', '6b', '6c', '6e', '6s', '6t', '87', 'b8', 'b9', 'ba', 'ei', 'ht', 'hu', 'hv', 'i0', 'i1', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9', 'ia', 'ib', 'ic', 'id', 'ie', 'if', 'ig', 'ih', 'ii', 'ij', 'ik', 'il', 'im', 'in', 'io', 'ip', 'iq', 'ir', 'is', 'oq', 'or', 'os', 'ot', 'ou', 'p1', 'pd', 'pe', 'pf', 'rd', 'tu', 'u4', 'u6', 'u9', 'uc', 'uj', 'uk', 'ul', 'vg', 'vr', '100', '101', '105', '10e', '125', '127', '129', '12a', '12b', '13p', '163', '17u', '17v', '180', '181', '182', '184', '185', '186', '18d', '1b6', '1b7', '1b8', '1b9', '1bc', '1bg', '1bh', '1bi', '1bk', '1bn', '1br', '1bs', '1bv', '1cf', '1ch', '1ci', '1ck', '1cl', '1cm', '1cn', '1co', '1d7', '1e3', '1f0', '1g6', '1jp', '1jq', '1jr', '1js', '1jt', '1ju', '1ka', '1kc', '1kd', '1mt', '1po', '1pr', '1t4', '1u1', '1u2', '1uo', '1vg', '1vh', '204', '207', '24c', '29m', '2lr', '2ls', '2mp', '2pc', '2uj', '2ur', '2us', '347', '3da', '3dc', '3fb', '3gc', '3gl', '3gm', '3gn', '3gr', '3ha', '3he', '3hu', '3i6', '3i7', '3if', '3ih', '3ii', '3ij', '3il', '3in', '3j1', '3kb', '3kd', '3ke', '3kf', '3kj', '3kk', '3np', '3pm', '3qr', '3qs', '3qv', '3rs', '3rt', '3ru', '3rv', '3s0', '3s1', '3s7', '3uq', '3v0', '3va', '3vc', '3vd', '3vf', '3vg', '3vi', '3vk', '404', '40g', '40h', '40u', '41a'], 'wojak': ['44', 'ch', 'cm', 'fd', 'fe', 'ff', '3vj'], 'laugh': ['45', '72', '2gp', '3h5'], 'pepelaugh': ['45', '96', 'b7', 'cg', 'qj', '1dg', '2h7'], 'cheering': ['46', 'bt', 'ce', 'uj', '13j', '15s', '1vm', '33e'], 'dumb': ['48', '23t', '2hf', '2hg'], 'drool': ['48'], 'knife': ['49', '1n1'], 'pepo': ['4a', 'bt', 'f8'], 'jamming': ['4a', '50', '8h', '9j', '9k', '9v', 'eh', 'rj', '13b', '15d', '1kn'], 'peepojamming': ['4a'], 'headphones': ['4a', '4m', '9j', '9k'], 'car': ['4b', '7k', '418', '419'], 'driving': ['4b', '1ub', '1un', '3j9'], 'money': ['4c', '175', '1a2', '1a3', '33e', '3f7', '400'], 'minion': ['4d', 'gf', 'oh', 'pg', '10d', '25k', '25l', '2i6', '2i7', '2s0', '30r', '369', '3i5'], 'buff': ['4d'], 'veyta': ['4d', '4e', '4f', '4h', '4i', '4j', '4k', '4l', '4m', '4n', '4o', '4p', '4r', '4s', '5d', '5f', '5g', '5h', '5i', '5j', '5k', '5n', '5o', '5p', '5r', '5t', '8i', 'ah', 'aj', 'b7', 'be', 'dd', 'e1', 'e2', 'e3', 'f5', 'f6', 'ha', 'qg', 'u0', '11f', '187', '1in', '1io', '1ip', '1jb', '1jg', '1k9', '1la', '1lb', '22b', '22c', '22n', '243', '2ar', '2as', '2at', '310'], 'naked': ['4f'], 'cat': ['4g', '4r', '5r', '8h', '9i', 'ha', 'vl', '108', '10a', '124', '12f', '138', '13a', '13b', '13h', '13i', '14a', '19n', '1dn', '1gs', '1hk', '1kn', '1l2', '1l7', '1n3', '1n4', '1q9', '1qa', '1qc', '1qh', '1ri', '1rv', '1sv', '1u6', '1ua', '1uh', '20b', '21g', '21h', '21i', '21j', '21m', '21n', '21u', '21v', '220', '22b', '22c', '22m', '22n', '247', '26e', '26k', '2ar', '2as', '2at', '2g6', '2ja', '2jd', '2je', '2jf', '2jt', '2ju', '2jv', '2k8', '2k9', '2ka', '2te', '30n', '343', '372', '373', '374', '375', '376', '379', '37b', '37c', '37d', '37e', '3dq', '3dr', '3gu', '3h0', '3h1', '3hf', '3hg', '3hh', '3hi', '3hj', '3hk', '3hl', '3hm', '3hn', '3ho', '3hp', '3hq', '3hr', '3hs', '3i8', '3ia', '3ib', '3ic', '3id', '3ub', '3v9', '3va'], 'catcheers': ['4g'], 'karate': ['4h'], 'sheep': ['4j', '327'], 'costume': ['4j'], 'mario': ['4k', '32o'], 'rock': ['4k', '1sa', '1se', '2aq', '2cv'], 'crying': ['4m', '5d', '5h', 'bv', 'ss', 'tr', '1g7', '29r', '31j', '325', '35d', '37o', '38f', '39n', '39v', '3a1', '3e5', '3jn', '3tn', '3vj', '411'], 'listening': ['4m', 'gu', '12t', '150', '151', '15p', '1ct', '1ed', '1gs', '1hv', '1ke', '1kf', '1kk', '1nf', '31p', '329', '332', '39u', '3ub', '3uc'], 'music': ['4m', '9j', '9k', '9l', '9v', 'd3', 'gu', '12t', '150', '151', '15p', '1ct', '1ed', '1i7', '1ke', '1kf', '1kk', '1le', '1lh', '1li', '1nf', '1sa', '2v6', '31p', '322', '325', '326', '329', '332', '383', '38f', '39t', '39u', '3a0', '3h2', '3k3', '3ub', '3uc', '3ut'], 'typing': ['4n', 'da', 'ed', 'q7', 'rl', '1q2', '21a', '2j4', '380'], 'typer': ['4n', 'da', 'ed', 'q7', 'rl', '1q2', '21a', '2g4', '324', '32v', '3eu'], 'hacker': ['4n', 'da', 'ed', '21a', '324'], 'keyboard': ['4n', '2j4', '2rr', '32v', '380', '392'], 'scared': ['4o', '5r', 'cd', 'd2', 'd8', 'eb', 'nq', '1ek', '1j7', '1lj', '2qs', '2r0', '2vb', '30b', '31g', '323', '32h', '339', '37g', '37h', '37i', '37r', '387', '39a'], 'yelling': ['4p', '66', '8q', '194', '196', '3c9', '3nt', '3pf', '3q6'], 'mad': ['4p', 'j3', 'rf', '12r', '153', '17g', '1eb', '1r2', '1r6', '319', '31q', '322', '38n', '39m', '40j'], 'tired': ['4q', '9o', 'ah', 'ek', '14f'], 'coffee': ['4q', 'er', '3r1'], 'cringe': ['4q', 'cl', 'e5', 'k1', 'nu', '1su', '3aj'], 'floppa': ['4s'], 'bigfloppa': ['4s', '13b', '13h', '1bl', '1bm'], 'anticipating': ['4u', 'bp', 'eu'], 'waiting': ['4u', 'bp', 'eu'], 'boombox': ['50'], 'christmas': ['51', '85', 'er', '2v3', '2v4', '2v5', '2v6', '2v7', '2v8', '2v9', '2vb', '2vc', '2vd', '2ve', '2vf', '2vg', '2vh', '2vi', '2vj', '2vk', '2vl', '2vm', '2vn', '2vo', '2vp', '2vq', '2vr', '2vs', '2vt', '2vu', '2vv', '34m'], '8bit': ['52', '56', '99', 'bj', 'k8', '13i', '1sj', '1sk', '1sl', '1sm', '1sp', '3sl', '3u6', '402'], 'walking': ['53', '3vb'], 'arriving': ['53', '57'], 'rope': ['54'], 'suicide': ['54', 'fc', '35t'], 'sad': ['55', '5d', '5h', 'c0', 'j2', 'q0', 'q8', 'u5', '14h', '1h9', '1ma', '2fd', '2gk', '2he', '2ph', '2qr', '31c', '31j', '325', '35p', '37o', '39j', '39n', '3fd', '3jb', '3nq'], 'laptop': ['55', 'ei', 'eo', '31c', '37n'], 'hop': ['56'], 'flat': ['58'], 'squished': ['58'], 'cozyicon': ['59', '18b'], 'logo': ['59'], 'fortnite': ['5a', '5t', '15k'], 'chunli': ['5a'], 'hxh': ['5b', '6b', '6c', '6e', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9', 'ia', 'ib', 'ic', 'id', 'ie', 'if', 'ig', 'ih', 'ii', 'ij', 'ik', 'il', 'im', 'in', 'io', 'ip', 'iq', 'ir', 'is'], 'killua': ['5b', 'id', 'ie', 'if', 'ig', 'ih', 'is'], 'joetheboomer': ['5b', '6b', '6c', '6d', '6e', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9', 'ia', 'ib', 'ic', 'id', 'ie', 'if', 'ig', 'ih', 'ii', 'ij', 'ik', 'il', 'im', 'in', 'io', 'ip', 'iq', 'ir', 'is', 'ok', '310', '3br', '3j0'], 'simpsons': ['5c', 'q2', 's7'], 'nedflanders': ['5c'], 'flanders': ['5c'], 'fatpepe': ['5d'], 'gun': ['5f', '8u', 'd2', 'h6', 'h8', 'nq', 'og', 'pl', 'qa', '18a', '18h', '192', '1dc', '1eh', '1er', '1fh', '1la', '1lb', '1md', '1mg', '1na', '1ou', '1ut', '1vd', '1vq', '205', '21b', '22r', '22s', '2e6', '2fv', '2jo', '2ot', '301', '31g', '3aq', '3k5', '3m5', '3m6', '3m7', '3u5', '3u7'], 'upset': ['5h'], 'magnifyingglass': ['5i', 'ec', 'qb', '1ee', '1ej', '219'], 'what': ['5i', 'bi', 'fo'], 'inquisitive': ['5i'], 'drooling': ['5k', '2k6', '394'], 'nick': ['5m', 'bq', 'e2', '24e', '24f', '369'], 'shocked': ['5m', '66', 'ak', 'pd'], 'nickpog': ['5m'], 'pog': ['5m', '66', 'e2', 'eg', '31m'], 'looking': ['5o', 'qb', '1ej', '1qb'], 'toiletpaper': ['5o'], 'fuckjannies': ['5p'], 'pinned': ['5p'], 'jannies': ['5p', 'd1'], 'cheeseburger': ['5q', '3p7'], 'hamburger': ['5q', 'tl', '1k9', '3ol', '3p7'], 'bigmac': ['5q', '3ar'], 'drip': ['5t', 'et', '40r'], 'monkey': ['5u', '66', '90', '9h', 'et', 'hb', 'hc', 'p5', 'p6', '126', '246', '2ml', '2qk', '2ql'], 'catgirl': ['60', '3g5'], 'dancing': ['60', '76', '7a', '7e', '7i', '9b', 'al', 'as', 'bs', 'd9', 'dh', 'di', 'dr', 'du', 'rd', 'rk', 'tb', 'vq', '10j', '10s', '11l', '11u', '127', '129', '131', '132', '138', '13c', '13g', '146', '147', '14g', '14h', '14i', '154', '15k', '16b', '16d', '16p', '16q', '173', '175', '19s', '1a1', '1ba', '1bb', '1d6', '1dj', '1ea', '1ib', '1pf', '1pt', '1q4', '1ri', '1sa', '1um', '1vg', '1vh', '215', '216', '26f', '29m', '29s', '29t', '2i2', '2pk', '2ps', '32l', '33f', '3j4', '3ja', '3js', '3k2', '3ka', '3m4', '3no', '3qs', '3qt', '3sl', '3tk', '3u4', '3v1', '3v2', '3vf', '3vu', '40m', '41a'], 'hitormiss': ['61'], 'tiktok': ['61', '13k'], 'showfeet': ['62'], 'fastundiedancing': ['63'], 'poggers': ['64', 'ak', 'd0', 'eg', '31h', '31v', '338', '33a', '33k'], 'screaming': ['66', '16s', '196', '21i', '3c9', '3jc'], 'kaiclips': ['66', '69', '6a', 'a2', 'aa', 'ab', 'af', 'fo', 'hd', 'hf', 'hf', 'j9', 'u1', 'u2', 'u2', 'u3', 'u3', 'u4', 'u5', 'u6', 'vg', 'vg', '11g', '16s', '16s', '174', '17l', '1kn', '1nr', '1su', '1t4', '1u2', '249', '2g0', '2g1', '2g3', '2g4', '2g5', '2g6', '2ma', '2mb'], 'groyper': ['67', 'bb', 'e7', 'oj', 'ok', 'pj', 'ri', 'ur', 'us', 'ut', '12h', '14c', '14t', '152', '1a1', '1c7', '1dl', '1e6', '1j5', '1ks', '1le', '1lr', '1lu', '1mq', '1ob', '1od', '1pv', '1ss', '1st', '1vn', '218', '21b', '21c', '21o', '21p', '21q', '21r', '21s', '264', '265', '267', '268', '2fd', '2j6', '2k2', '2kc', '2mo', '2mr', '2op', '2oq', '2rk', '30g', '30k', '36b', '38i', '38j', '3a7', '3a8', '3br', '3de', '3jf', '3sq', '3u1', '3vb', '3ve'], 'exercise': ['6a'], 'pullup': ['6a'], 'hisoka': ['6b', '6c', '6e', 'i8', 'i9', 'ia', 'ib', 'ic'], 'davidbowie': ['6d'], 'bakedalaska': ['6g', '6m', '6q', '8k', '8l', 'g7', 'g8', 'g9', 'ge', 'gf', 'gi', 'gk', 'gp', 'gr', 'gt', '11m', '11n', '11o', '11p', '11q', '120', '12q', '12r', '12s', '12t', '12u', '12v', '130', '131', '132', '133', '135', '137', '138', '139', '13a', '13b', '13c', '13m', '168', '16b', '1k7', '1uu', '22h', '22i', '22t', '23q', '23s', '23u', '23v', '25a', '25b', '25c', '25d', '25e', '25f', '26f', '29j', '29n', '29o', '29o', '29p', '29q', '29t', '29t', '2gk', '2gl', '2h0', '2h1', '3nc', '3ni', '3nl'], 'cowboy': ['6g', '99', 'hr', '13t', '1lm', '1ln', '1lp', '1s9', '2ah', '2aj', '3ei', '3j4', '3js', '3oi', '3u3', '3u6'], 'kombucha': ['6m'], 'booch': ['6m'], 'yoba': ['6q', '8k', 'g8', 'gr', '11p', '13m', '1k3', '1k7', '1uu', '211', '212', '22h', '22i', '23u', '23v', '25a', '25b', '25c', '25d', '26f', '29n', '29p', '29q', '2h0', '2h1', '2lv', '32o', '32p', '3dn', '3nl'], 'waving': ['6s', 'k6', '12q', '17r', '1kl', '1km', '1mq'], 'kanna': ['6s'], 'senko': ['6t'], 'augie': ['6u', '6v'], 'bitcoin': ['70', '3dk'], 'franssen': ['70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '7g', '7h', '7i', '7j', '7k', '7l', '7m', '7n', '7o', '7p', '7q', '7r', '7s', '7t', '7u', '7v', '80', '81', '82', '83', '84', '85', '86', '88', '89', '8a', '8b', '8c', '8d', '8g', 'bg', 'bj'], 'trump': ['71', 'dp', 'jv', 'rq', '1vk', '35h', '3q8', '3qp', '3rh'], 'bolsonaro': ['72', '7p'], 'burger': ['74', '163', '2ig', '3ar'], 'clint': ['75'], 'eastwood': ['75'], 'santa': ['76', '7u', '2vs', '2vt', '33p', '34l', '34o', '36r', '36t'], 'airplane': ['77', '115'], 'jet': ['77', '1r5'], 'fries': ['78'], 'onionrings': ['78'], 'dog': ['79', '86', 'uf', '10u', '11l', '1d0', '1q8', '1ru', '1vj', '208', '20e', '26m', '2s4', '34d', '34e', '34f', '34g', '34h', '34i', '3eo', '3g8', '3g9', '3gs'], 'slapping': ['7b', '1ev'], 'jesuschrist': ['7c', 'p7', 'pk', 'qu', '19b', '1c3', '1fp', '1jv', '1l4', '1nu', '1o4', '1o5', '1oa', '1tl', '1tm', '1vu', '23n', '23o', '23p', '23q', '23r', '2fh', '2km', '3gf', '3m9', '3qh', '3sq', '3tv', '3u0', '3u1'], 'spongebob': ['7d', '7e', 'oa', 'ob', 'p2', 'r1', 'vh', '117', '12g', '144', '14e', '1c5', '1d8', '1e5', '1lt', '1s4', '1s5', '1s6', '1s8'], 'tiger': ['7f'], 'chrisfarley': ['7g', '7h'], 'patrick': ['7i', '23t'], 'squidward': ['7j', '85', 'dr', '1et', '1ha', '1m0', '20d', '2hv', '3q6', '40c'], 'turkey': ['7l', '2n3', '2n5', '2ro', '30f'], 'elvispresley': ['7m', '8c'], 'tonysoprano': ['7n'], 'sopranos': ['7n'], 'pizza': ['7o', '2p3', '2pp', '37f', '399'], 'putin': ['7q'], 'thumbsup': ['7q', 'pn', '2rf'], 'like': ['7q'], 'johnwayne': ['7r'], 'melgibson': ['7s'], 'television': ['7t'], 'tv': ['7t'], 'western': ['7t'], 'lifting': ['7v'], 'cross': ['80', 'af', 'eb', 'p7', 'u3', '15b', '19v', '1a0', '1ek', '1tm', '23r', '23s', '2kn', '2nq', '2nr', '2p6', '38o', '3p9'], 'frog': ['81', 'o6', 'pl', 'pn', 'pp', 'pr', 'ps', 'pt', 't3', 't4', 't5', '1jk', '1jl', '1op', '1oq', '1rk'], 'xmen': ['82', '83'], 'wolverine': ['82', '83'], 'robocop': ['84'], 'shooting': ['84', '8u', 'fn', 'og', 'qa', '192', '1bc', '1dc', '1er', '1m2', '1md', '1mg', '1sj', '1sk', '1sp', '301', '36d', '3e5', '3k5', '3m5', '3m6', '3m7', '3u6', '3u7'], 'astronaut': ['86', 'tp', '1gm', '1l5', '3ua'], 'space': ['86', '1sa'], 'retarded': ['87', 'hq', 'it', 'qc', 'qh', 'qi', '1cq', '1h9', '22f', '23t', '308'], 'machoman': ['88'], 'randysavage': ['88'], 'thankyou': ['89'], 'robinwilliams': ['89'], 'ears': ['8b'], 'icecream': ['8d'], 'fultonsheen': ['8e', '8f'], 'tomcruise': ['8g'], 'sunglasses': ['8h', 'us', '19n', '1h4', '1h5', '1kt', '1mm', '1mn', '1pa', '1qp', '1sn', '1so', '1t2', '1t4', '1ug', '1un', '29u', '324', '330', '3gt', '3q9', '3qa', '3r5', '3rd'], 'ethanralph': ['8h', 'al', 'gv', 'h0', 'h1', 'h2', 'oj', '118', '119', '11a', '179', '17a', '17b', '17c', '17d', '17e', '191', '1j0', '1j1', '1j9', '1jo', '1kj', '1l8', '1mg', '1ml', '1n7', '1ne', '1nn', '1pe', '1pm', '1ps', '1t2', '1t6', '1te', '20p', '20t', '211', '212', '22d', '22e', '232', '233', '234', '24d', '24g', '25r', '25s', '29k', '29l', '29s', '29s', '29u', '29v', '2av', '2es', '2ut', '3eh', '3i2', '3j4', '3jq', '3jr', '3js', '3kp', '3ln'], 'zoomer': ['8i', '15i', '3an'], 'conspiracy': ['8j'], 'tinfoilhat': ['8j'], 'dabbing': ['8k', '18v'], 'spinning': ['8l', '3k4', '3kl', '3km', '3kn', '3kp', '3ku', '3l3', '3l6', '3l7', '3l8', '3ln', '3mu', '3o4', '3r3'], 'juice': ['8l', '9m', '9p', '3e0'], 'popsicle': ['8o'], 'icepop': ['8o'], 'salute': ['8p', 'b9', 'cp', 'jd', '1vi', '2n2', '2v7', '32p', '38r', '3a4', '3nr'], 'jadenmcneil': ['8r', '8s', '8t', '8u', '8v', '91', '92', '93', '94', '95', '9e', '9f', '9s', 'ag', 'vd', 've'], 'judasmcneil': ['8r', '8s', '8t', '8u', '8v', '91', '92', '93', '94', '95', '9e', '9f', '9s', 'ag', 'vd', 've', '28i', '28j', '28k', '2lk'], 'mccheesemoment': ['8r'], 'o7': ['8s', 'cp', 'jd', 'qq', 't4', 'u9', '18c', '1ms', '1op', '1vi', '25t', '2n2', '2v7', '32p', '38r', '3a4', '3nr'], 'shaking': ['8t', '92', '1n4', '3o6'], 'tpose': ['8t', '3pc', '3pj'], 'blackpilledagain': ['94'], 'smoking': ['97', 'be', 'vu', '20f', '218', '21p', '21q', '2gq', '2j1', '3cb', '3cc', '3cd', '3co', '3jq', '3jr', '3qr'], 'cigarette': ['97', '1tp', '20f', '3aj'], 'snowing': ['98', '34v', '350'], 'guns': ['99', '1ot', '1sj', '1sk', '1sp', '36d'], 'bigchilling': ['9c'], 'chilling': ['9c'], 'booling': ['9c'], 'vomiting': ['9d', 'bh', 'hs'], 'sick': ['9d'], 'skypemonkey': ['9h'], 'clubpenguin': ['9l'], 'penguin': ['9l', 'ua', '10b'], 'violin': ['9l'], 'pointing': ['9n', '10v', '14l', '19e', '3qe', '3vn'], 'sleeping': ['9o', 'e8', '1mp', '2o9', '370', '3ce'], 'letsgo': ['9r', '11m', '146'], 'simp': ['9t', 'r6', '2ai', '31n', '3d2', '3d3', '3u9'], 'retard': ['9u', '1qh', '2qm', '2qn', '2qo', '2qp', '2qq', '2r3', '2rf', '32e', '37j', '38h', '394', '39k'], 'kirby': ['9v', '131', '3k3'], 'kylerittenhouse': ['a0', 'dk'], 'border': ['a0'], 'joker': ['a2', '2ii', '2tn'], 'americanpsycho': ['aa', 'u2', '216'], 'patrickbateman': ['aa', 'u2', '216'], 'alexjones': ['ab', 'qo', 'ti', '10k', '10l', '10m', '10n', '10o', '10p', '10q', '11b', '11c', '2if', '2m9', '3eg'], 'crabdance': ['al', '3h7'], 'crabrave': ['al', '3h7'], 'obama': ['al'], 'gone': ['al'], 'babygrinch': ['aq'], 'wurzelroot': ['aq', 'ar', 'as', 'fl', 'fm', 'h7', 'h8', 'hp', 'hq', 'hr', 'hs', 'it', 'iu', 'iv', 'j0', 'j1', 'j2', 'j3', 'j4', 'j5', 'j6', 'j7', 'j8', 'jg', 'oa', 'ob', 'ok', 'q7', 'q8', 'q9', 'qa', 'qb', 'qc', 'qd', 'qe', 'qf', 'qh', 'qi', 's8', 'to', 'v6', '10j', '11e', '16q', '1hd', '1tv', '1u0', '1ve', '25p', '25q', '3kv', '3l0', '3l1', '3l2', '3l3'], 'crusader': ['ar'], 'tenryo': ['b8', 'b9', 'ba', 'bb', 'oq', 'or', 'os', 'ot', 'ou', 'p1', 'pd', 'pe', 'pf', 'ts', '184', '189', '19f', '1cf', '1ch', '1ci', '1ck', '1cl', '1cm', '1cn', '1gf', '1ka', '1kb', '1nk', '1nl', '1nm', '1nq', '1pc', '1pr', '1q7', '1t1', '1td', '29m', '29r', '2dd', '2dh', '2eq', '2km', '2kn', '3gp', '3m1'], 'megaman': ['bb', '189'], 'pointingright': ['bc', '1q7'], 'pointright': ['bc'], 'pointingleft': ['bd'], 'pointleft': ['bd'], 'hunterbiden': ['be'], 'quagmire': ['bf'], 'huh': ['bi', 'fo'], 'glownigger': ['bk', '1bp', '3v6'], 'feds': ['bk'], 'rage': ['bl', '1p8', '3k0'], 'peperage': ['bl'], 'lasers': ['bl', '22u', '22v'], 'whitepilled': ['bm', 'ch', '2fb'], 'ryangosling': ['bn', '1af', '1ag', '1ah', '1ar', '1vp'], 'bladerunner': ['bn', '1af', '1ag', '1aj', '1ak', '1vp'], 'itssoover': ['bn', 'k7', 'q0', 'ui', '11q', '121', '1j2'], 'peepohappy': ['bo'], 'vincejames': ['br', 'bs', 'bt', 'bu', 'bv', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'de', 'df', 'dg', 'dh', 'di', 'dj', 'dk', 'dl', 'dm', 'dn', 'do', 'dp', 'ev', 'f0', 'f1', 'f2', 'f3', 'f4', 'fn', 'fs', 'qq', '173', '1p3', '1p4', '1p5', '1p6', '1p7', '25t', '26g'], 'clownworld': ['bs', 'ek', 'j7', '14v', '159', '1ca', '1s3', '31k'], 'nomnomnom': ['bu'], 'pepehands': ['bv'], 'peeposad': ['c0'], 'cheer': ['c1', 'j5', '2dm', '31i', '33c'], 'coronavirus': ['c2'], 'washinghands': ['c2'], 'covid': ['c2'], 'middlefinger': ['c3', '1j9', '1mr', '2gq', '3bh', '3bj', '3e9'], 'georgefloyd': ['c4', 's4', '171'], 'vincentjames': ['c5', 'c7', 'c8', 'c9', 'ca'], 'afpac': ['c5'], 'vincnetjames': ['c6'], 'michellemalkin': ['c6'], 'tylerrussell': ['cb', 'cc', 'cd', 'ce', 'cf', 'cg', 'ch', 'ci', 'ck', 'cl', 'cm', 'cn', 'cq', 'cu', 'cv', 'd0', 'd1', 'd2', 'd3', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dq', 'dr', 'dt', 'du', 'dv', 'e0', 'p0', '17f', '17g', '17h', '17i', '1qi', '3ot'], 'canadafirst': ['cc', 'co', 'p2', '140', '141'], 'samhyde': ['cf', 'uh', '223', '3eb'], 'biden': ['ci', 'k0', '2uj', '3pn'], 'joebiden': ['ci', 'oc', 'oe', 'p4', '14o', '3ro', '3rp', '3rq', '3ud'], 'german': ['cj'], 'chad': ['cj', 'jr', '1tr', '22o'], 'based': ['ck', 'h9', 'k2', 'q6', 'rr', '1d1', '1e7', '1e8', '2ll', '3e1'], 'despair': ['cm'], 'blackpilled': ['cm'], 'troll': ['cn'], 'trollge': ['cn', 'hd', 'ro', 'to', '15n', '2ic', '2id', '33b', '3bu', '3h6', '3v4'], 'cf': ['co', '140', '141'], 'canada': ['cp'], 'punching': ['cq', 'j1', '1dk', '29l', '2os', '384', '39q', '3u8'], 'mexican': ['cu', 'du', 'ov', '191', '1g7', '1li', '3tn'], 'saxophone': ['d3', '1ld'], 'fire': ['d7', '1h1', '1id', '23h', '31q', '3bv', '3gs'], 'pajamas': ['d9', '31e', '38b'], 'hacking': ['da', 'ed'], 'bounce': ['db', '1sr'], 'paranormal': ['dd'], 'pants': ['dd', '2tt'], 'handrub': ['de'], 'billgates': ['df', 'do'], 'vaccine': ['df'], 'gulag': ['dg', '1cr'], 'benshapiro': ['dh', '36q'], 'israel': ['dh', 'di', 'f2'], 'derekchauvin': ['dj'], 'kneeling': ['dj', '184'], 'thatsracist': ['dl', '1cs', '1f7', '1fm'], 'trumpnod': ['dm'], 'nodding': ['dm', 'j8', '129', '138', '1b8', '1kn', '1lr', '1lu', '1n3', '22b', '3de'], 'trumpcorrect': ['dn'], 'correct': ['dn', '2ie'], 'dj': ['dq', '383', '39t', '3ut'], 'drumset': ['dt'], 'maracas': ['du', '1li'], 'fat': ['dv', 's8', '227', '22e', '2e5', '31d', '35n', '3cr', '3or', '3rf'], 'full': ['dv'], 'yummy': ['dv', 'f8'], 'boxing': ['e0', 'o8', 'qe', '37k', '39p'], 'cigar': ['e1', '218', '21p', '21q', '3cb', '3cc', '3cd', '3jq', '3jr'], 'stare': ['e4', '21v', '247', '3be'], 'staring': ['e4', '21v', '247'], 'daltonclodfelter': ['e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'eg', 'eh', 'ei', 'ek', 'en', 'eo', 'ep', 'f8', 'nq', 'nt', 'nu', 'nv', 'o0', 'og', 'og', 'oh', 'pv', 'q0', 'q1', 'q3', 'q4', 'q5', 'q6', 'qn', 'r1', 'r2', 'r4', 'r5', 'r6', 'r7', 'rm', 's6', 'tt', 'tu', '175', '176', '178', '17m', '17m', '18c', '18c', '1cg', '1mj', '1mu', '1pi', '1pp', '1tk', '1tn', '2m0', '2m1'], 'sign': ['e5', '12m', '1g9', '1gc', '1ll', '1s2', '2ki', '2kj', '2lm', '3h3', '3u9'], 'crypto': ['e6'], 'sherlock': ['e9', 'vn', '1q8', '1rb', '1rf'], 'detective': ['e9'], 'peeking': ['ea'], 'curious': ['ec'], 'pepega': ['ee'], 'creditcard': ['ee', '12v'], 'buy': ['ee'], 'pogchamp': ['eg'], 'pepejam': ['eh'], 'depressed': ['ek'], 'diamondsword': ['en'], 'minecraft': ['en', 'k9', 'o7', '1f3', '1gv', '2lh', '33d'], 'blushing': ['ep'], 'santahat': ['er', 'ht', 'hu', 'hv', 'i0', 'i1', '2v3', '2v5', '2v6', '2v7', '2v8', '2v9', '2vb', '2ve', '2vf', '2vg', '2vh', '2vi', '2vl', '2vm', '2vo', '300', '301', '302', '31b', '321', '33g', '33q', '34p', '34r', '34s', '36h', '36i', '36o', '36p', '36u'], 'burningflag': ['ev'], 'prideflag': ['ev'], 'gayflag': ['ev'], 'hitler': ['f1', 'fg', '35j', '3he', '3r6', '3r7', '3r8', '3r9', '3ra'], 'nein': ['f1'], 'jew': ['f2', 'rt', 'sm', '13t', '13u', '1ef', '1pf', '1pg', '1ph', '20t', '21t', '2sc', '2t6', '36q', '3b0', '3cr', '3do', '3e7', '3j5', '414', '416', '418'], 'bullets': ['f4'], 'snack': ['f8'], 'shooter': ['fa', 'fb', 'fc', 'fd', 'fe', 'ff', 'fg', 'fh', 'fi', 'fj', 'fk', '1kc', '1kd', '1kf'], 'asian': ['fa', '289', '2r4', '2uo', '366', '3q4'], 'soyjak': ['fe', '12k', '168', '1p8', '1pb', '2ab', '2eu', '3nd'], 'old': ['ff'], 'boomer': ['ff'], 'beethoven': ['fi'], 'flurk': ['fj'], 'stonetoss': ['fj'], 'shootthisman': ['fk'], 'killthisman': ['fk'], 'grilling': ['fl', 'hp'], 'bongos': ['fm'], 'emoji': ['fm', '3p9', '3ql'], '3d': ['fm'], 'gunrange': ['fn'], 'kai': ['fo'], 'idaho': ['fs'], 'twitterisfuckinggay': ['g7'], 'jabba': ['g8'], 'pitvipers': ['g8', '1mm', '1mn', '1oo', '1t0', '1ug', '2gs', '2jm', '30c', '31s', '38u', '3a2'], 'prayer': ['g9'], 'yobapray': ['g9'], 'horse': ['ge'], 'yoha': ['ge'], 'yobahorse': ['ge'], 'yoma': ['gf', '23i'], 'trollface': ['gi', 'h7', 'hd', 'hf', '15o', '16k', '19o', '1db', '1vr', '3v3', '3v5', '3v7'], 'yobatroll': ['gi'], 'loulz': ['gk', '2gr', '2gs', '2gt', '2gu', '2gv', '2h0', '2h1', '2h2', '2h3', '2h4', '2h5', '2h6', '2h7', '2h8', '2h9', '2ha', '2hb', '2hc', '2hd', '2he', '2hf', '2hg', '2hh', '2hi', '2hj', '2hk', '2hl', '2ho', '2hp', '2iv', '2j0', '2j1', '2j2', '2j3', '2j4', '2j5', '2j6', '2jm', '2jn', '2jo', '2jp', '2jq', '2k5', '2k6', '2k7', '2k8', '2k9', '2ka', '2kb', '2kc', '2kd', '2kg', '33l', '33m', '33n'], 'yobamode': ['gp'], 'doge': ['gv', 'ug', '1hc', '1kg', '24p', '3gt', '40l'], 'womanmoment': ['gv', 'it', 'sd', 'si', '1ig', '1ih', '1im', '1to', '1v3', '239', '23b', '23c', '23d', '23e', '23f', '23g'], 'nigga': ['h1', 'ts', '132', '13d', '171', '18g', '1cs', '1ji', '1kv', '1nh', '29r', '3bg', '3m8'], 'robbing': ['h1'], 'black': ['h1', 'h2', 'sd', 'si', 'sj', 'tb', '132', '1ji', '1nh', '2ac', '2ou', '2st', '3d5', '3m8'], 'run': ['h1'], 'steal': ['h1'], 'bibble': ['h2', '20f', '20g', '20h', '20i', '20j'], 'shotgun': ['h7', '1rv'], 'shoot': ['h8', '2jo'], 'anthonyfauci': ['hi'], 'drevil': ['hi', '1do', '1dp'], 'crosstalknews': ['hi', 'oc', 'od', 'oe', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'qr', 'qs', 'qt', 'qu', 'qv', '13g', '13h', '13i', '13j', '19a', '19b', '1ae', '1h6', '1h7', '1hs', '1hv', '1op', '1oq', '1ti', '1tj', '1tk', '1tl', '1tm', '1tn', '1up', '1uq', '1ur', '1vc', '1vd', '21b', '21c', '22r', '22s'], 'pie': ['hk', 'hl', 'hm', '21u'], 'thatlittleguy': ['hn'], 'bird': ['hn', '3gd'], 'puke': ['hs'], 'saber': ['i0'], 'jeghead': ['i2'], 'gon': ['i3', 'i4', 'i5', 'i6', 'i7'], 'kurapika': ['ii', 'ij', 'ik', 'il', 'im'], 'leorio': ['in', 'io', 'ip', 'iq', 'ir'], 'spurdo': ['iu'], 'beaver': ['iu'], 'clap': ['iv', 'sd'], 'raining': ['j2', '2ia', '2qr', '38g', '39j'], 'pooping': ['j4', 'nv', '1m3', '31u'], 'running': ['j6', '2j6', '388', '389', '39i', '3ld'], 'honkler': ['j7', '14v', '159', '1ca', '1s3', '31k'], 'smileyface': ['j8', 'rn', 'tr', '102', '10c', '10g', '12e', '19i', '1ad', '1bd', '1d4', '3d9', '3qe', '3qn'], 'spitting': ['j9', '110', '1me', '21k', '21l'], 'cerealguy': ['j9', '10v', '110'], 'onion': ['ja', 'p3', 'qv'], 'soyface': ['jb', 'ji', 'jj', 'um', '168', '18j', '1hr', '1l1', '1uu'], 'punishedsnake': ['jd'], 'nicelogicalfallicy': ['jf'], 'gigachad': ['jg', 'pq', 'q4', '11n', '14d', '1e7', '1ol', '2qh', '35e', '35g', '3h4', '3n0', '3rh'], 'napoleon': ['jh'], 'npc': ['ji', 'jj', 'jt', '109', '2t3', '2t6', '3d6'], 'spiderman': ['jp', '16r'], 'tobeymaguire': ['jp', '16r'], 'centurion': ['js'], 'nobodycares.': ['jv'], 'doog': ['k6', 'k7', 'ph', 'uo', 'up', 'uq', 'vi', 'vn', '183', '1f2', '1rb', '1rf', '1s0', '1s1', '1u3', '1u4', '1u5', '1u7', '1u8', '1u9', '1ub', '1uc', '1uf', '1ug', '2no', '2np', '2nq', '2nr', '2nv', '2o0', '2o4', '2o5', '2o6', '2o8', '2o9', '2v1'], 'ux': ['k6', 'k7', 'k8', 'k9', 'kc', 'o7', 'pb', 'pc', 'vh', 'vi', 'vl', 'vm', '117', '14b', '17p', '17q', '17r', '17s', '183', '19p', '1f1', '1f2', '1gg', '1gh', '1hj', '1ht', '1hu', '1jb', '1jd', '1je', '1jf', '1jg', '1k8', '1km', '1l7', '2ld', '2le', '2lf', '2lg', '2lj', '2ok', '3pc', '3pd', '3pe', '3pi', '3pj', '3pk', '3pl', '3pm'], 'happy6th!': ['ka', 'kb'], 'patriotday': ['ka', 'kb'], 'nickfuentes': ['ka', 'kb', 'vm', '14b', '152', '15d', '165', '167', '16i', '17t', '19u', '1b0', '1b1', '1b2', '1b3', '1dd', '1h2', '1h3', '1hg', '1jd', '1qq', '1qr', '1v5', '26h', '2fa', '2fd', '2ff', '2fg', '2fh', '2go', '2hr', '2hs', '2ht', '2hu', '2hv', '2i0', '2i1', '2i2', '2i3', '2i4', '2i5', '2i6', '2i7', '2i8', '2i9', '2ia', '2ib', '2ic', '2id', '2ie', '2if', '2ig', '2ii', '2ij', '2ik', '2il', '30v', '32t', '33t', '33v', '349', '34a', '3e9', '3im', '3ki', '3n0', '3nb', '3ne', '3nf', '3sk', '3vn', '3vs', '3vt'], 'minecraftbee': ['kc'], 'ban': ['o0', '1cv', '316', '3jv'], 'afpaciii': ['o1', 'vj', '1p0'], 'afpac3': ['o1', 'vj', '1p0'], 'bigchillin': ['o4', '151'], 'pinkchillin': ['o4'], 'gab.com': ['o6', 'pa', 'ph', 'pi', 'pl', 'pn', 'pp', 'pq', 'pr', 'ps', 'pt', 'sv', 't3', 't4', 't5', '1op', '1oq'], 'duck': ['o7', 'pb', 'pc', '1m7', '1q1', '1tp', '2uc', '2uq'], 'smile': ['oa', 'tj', 'u0', '176', '1g3', '1h5', '3gh', '401'], 'lookingaround': ['ob'], 'maozedong': ['oc'], 'hillaryclinton': ['od'], 'bitch': ['od'], 'sniffing': ['oe', 'p4', 'qo', '1qc'], 'smelling': ['oe', 'p4', 'qo'], 'pedophile': ['oe', '2uk'], 'butt': ['oh', '2vc'], 'booty': ['oh', '2vc'], 'mobster': ['ok'], 'italian': ['ok'], 'credo!': ['om', 'on', 'oo', 'op'], 'creedo!': ['om', 'on', 'oo', 'op'], 'sneedo!': ['om', 'on', 'oo', 'op'], 'pogo': ['p0', '133', '1hd', '1j6', '1mu', '1t5', '2jn', '31h', '31v', '338', '33a', '351'], 'laurenwitzke': ['p4', 'qr', 'qv', '1us', '1ut', '1uv', '1v0', '1v1', '1v2', '1v3', '1v4', '1vc', '1vd', '224'], 'chimp': ['p5', 'p6'], 'god': ['p7'], 'tranny': ['p8', '1in', '1io', '1ip'], 'secretaryofhealth': ['p8'], 'andrewtorba': ['pa'], 'gab': ['pa', 'pg', 'ph', 'pi', 'pj', 'pk', 'pl', 'pm', 'pn', 'po', 'pp', 'pq', 'pr', 'ps', 'pt', 't3', 't4', 't5'], "let'sgooooooo": ['pm', '11m'], 'lfgoooooooo': ['pm'], 'letsgooooooo': ['pm', '11m'], 'jasonmiller': ['po', '15q'], 'gettr': ['po', '15q'], 'watda': ['pp', '1gl', '1oq', '1us', '1vc', '25a'], 'bruh': ['pr', '2ru', '3k4'], 'scam': ['pv'], 'hanged': ['q0'], 'hanging': ['q0'], "it'ssoover": ['q0', '11q', '121', '1j2'], 'williethejanitor': ['q2'], 'sweeping': ['q2'], 'ravekid': ['q3', '134'], 'dancingboy': ['q3', '134'], 'redpilled': ['q5', 'rr', '2fc'], 'inspecting': ['qb', '1ee', '219'], 'inspector': ['qb', '1ee', '219'], 'hammer': ['qd', '1mt', '3lc', '3ll'], 'coomer': ['qf', '3en'], 'cooming': ['qf'], 'turtle': ['qg'], 'blackwivesmatter': ['qn'], 'feet': ['qo', 'rs', 's3', '102', '10c', '2bf', '404'], 'ilovejesus': ['qt'], 'iheartjesus': ['qt'], 'sus': ['r1', 's1', '2oa'], 'okay': ['r2', 't5', '1bh', '1ch', '1ft', '1fv', '1g0', '1g1', '1g2', '1gi', '1gj'], 'whitepower': ['r2', '40t'], 'jerry': ['r4'], 'triggered': ['r7'], 'bookcat': ['ra', 'rb', 's7', 'sc', 'sd', 'se', 'si', 'sj', 'sl', 'sm', 'so', 'sp', 'sp', 'sq', 'sq', 'sr', 'sr', 'ss', 'st', 'sv', 't0', 't2', 't2', 't9', 'tb', 'tc', 'td', 'te', 'th', 'ti', 'tj', 'tk', 'tl', 'tn', 'tp', 'tr', 'vn', '10r', '13v', '18a', '18a', '18b', '1ji', '1qb', '1r7', '1rc', '1rg', '1ro', '1rs', '1sl', '1sm', '1t9', '1u1', '3oj'], 'alexanderhamilton': ['ra', '1qk', '1rr'], 'reading': ['rb', '1rc', '1rg', '1s4', '1s5', '1s6', '1s7', '1s8', '2j5', '3oj', '3sn'], 'neirautomata': ['rd'], '2b': ['rd'], 'caramelldansen': ['rd'], 'fbi': ['ri', 'tu', '1ei', '2gv', '2jb', '2jr', '2k6'], 'canadaianlivesmatter': ['rm'], 'chill': ['rn'], 'gay': ['rp', 'rq', '197', '23a', '2a6', '3lo'], 'gaay': ['rp', '197'], 'gaaay': ['rp', '197'], 'ha': ['rp'], 'kick': ['rq', 'rv'], 'confederate': ['rq', '1fq', '20a', '279', '27q', '27r', '27t', '2om', '2on', '2oo', '2op', '2oq', '2or', '2rk', '2rl', '30g', '30h', '30k', '30l', '354', '38i', '38j', '3a7', '3a8', '3nu'], 'rubbing': ['rt'], 'hands': ['rt', '3k1'], 'lick': ['ru'], 'tongue': ['ru'], 'woman': ['rv', '11j', '12i', '1e4', '1tj', '27m', '289', '2ag', '2ao', '2ap', '2av', '2b1', '2b2', '2cm', '30p', '355', '358', '359', '366', '3d5', '3i3', '3o8'], 'riot': ['s0'], 'iamhomophobic': ['s2', '1d5'], 'football': ['s2', '1d5'], 'pokimane': ['s3'], 'ouryounggenerationisclearlylostman': ['s4'], 'ppp': ['s8', '227', '22e', '24d', '35n', '3or'], 'lesbian': ['s8', '227', '35n', '3ek'], 'fawking': ['s8'], 'pussy': ['s8'], 'peoplespopulistpress': ['s8'], 'conquistador': ['sc'], 'usa': ['se', 'tn', '1gn', '2ho', '304', '33i', '382', '3a6', '3pa'], 'flag': ['se', '1a5', '1fq', '1g4', '1gn', '1in', '1s2', '1se', '20a', '2u4', '3qm', '3qo'], 'tariqnasheed': ['sj'], 'queenelizabeth': ['sl'], 'queenofengland': ['sl'], 'F': ['so', '1d6'], 'pusheen': ['sp', 'sq', 'sr', '18a', '1qb', '1rc', '1rg', '1sl', '1sm'], 'indian': ['ss', '2ri', '2rj'], 'tears': ['ss'], 'axolotl': ['st'], 'popping': ['st', '13a'], 'mug': ['sv'], 'afmug': ['t0'], 'americafirstmug': ['t0'], 'cow': ['t2', '2mk'], 'caeserslegion': ['t2'], 'cry': ['t3'], 'dontbehatin': ['t9'], "don'tbehatin": ['t9'], 'sun': ['ta', '1fl', '3me', '3ss'], 'russian': ['tc', '2dn'], 'slav': ['tc'], 'icecube': ['td'], 'dawndishsoap': ['te'], 'real': ['th', '1di'], 'checkmark': ['th'], 'donaldtrump': ['tj', 'ue', 'vv', '145', '14l', '15e', '15f', '15h', '19g', '19s', '19t', '1a4', '1a9', '1aa', '1ab', '1ac', '1eo', '1ff', '1fl', '1g3', '215', '224', '24c', '2b7', '2ce', '2ie', '2m3', '2m5', '2ov', '2p1', '2q4', '2tr', '2u4', '2ub', '36a', '36c', '3ss'], 'boomeralert': ['tk', '1d3'], 'sloth': ['tn'], 'prettygood': ['tn'], 'spacelizard': ['tp'], 'f': ['tt'], 'trovo': ['u0'], 'christianbale': ['u2', '1ai', '1au'], 'ratio': ['u4', '1d7'], 'jojo': ['u4', 'u6', 'vg'], 'facesmash': ['u6'], 'evangelion': ['ua', 'uc', 'ui', '17u', '1po'], 'michaelalberto': ['ua', 'ub', 'ub', 'uc', 'ud', 'ue', 'uf', 'ug', 'uh', 'ui', 'uj', 'uk', 'ul', 'um', 'uo', 'v4', 'vp', 'vq', '13l', '17t', '17u', '17v', '180', '181', '182', '1e1', '1et', '1h8', '1hh', '1kh', '1mi', '1po', '1v5', '20q', '23i', '26j', '29a', '2a6', '403', '40o'], 'scottthewoz': ['ub'], 'mari': ['uc'], 'albertobarbosa': ['ud', 'vp'], 'wewuz': ['ud'], 'smug': ['ue', 'ul', '17u', '17v', '180', '1g3'], 'grin': ['ug', '15n'], 'shinji': ['ui'], 'luckystar': ['uj', 'uk', '17v', '180', '181', '182'], 'konata': ['uj', 'uk', '17v', '180', '182'], 'lain': ['ul'], 'catfren': ['un'], 'trsartor': ['un', 'uo', 'up', 'uq', 'ur', 'us', 'ut', 'uu', 'uv', 'v0', 'v1', 'v2', 'v5', 'vf', '18e', '18g', '18h', '18i', '192', '1jj', '1jk', '1jl', '2ce'], 'eyes': ['ut', '17i', '3bt', '3jd', '3jt', '3oc'], 'booba': ['ut', '25i', '27m', '27v', '2a0', '2a1', '2a2', '2ao', '2b1', '2b2', '2ls'], 'kingshit': ['va'], 'orderofsocialantiquity': ['vf'], 'osa': ['vf'], 'rape': ['vh', '117'], 'mrkrabs': ['vh', '117', '2hu'], 'hugging': ['vl', '178', '32f'], 'yellowshorts': ['vm', '2bu', '2c3', '34v', '350'], 'slime': ['vq', '1bu', '3no', '3qt'], 'azumangadaioh': ['vr', '3dc'], 'chiyo': ['vr', '3dc'], 'paultown': ['vr', 'vs', 'vu', 'vv', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '10a', '10c', '10d', '10e', '10g', '10h', '10i', '11i', '11k', '121', '124', '125', '126', '127', '129', '12a', '12b', '12c', '12c', '12e', '12f', '12g', '12h', '12j', '12l', '12m', '13p', '163', '19n', '19o', '1ge', '1h1', '1no', '1np', '21d', '21e', '22l', '22p', '22q', '2bq', '2br', '2gq', '2ru', '30o', '312', '313', '370', '3da', '3db', '3dc', '3o0'], 'soyciety': ['vs'], 'society': ['vs'], 'thejoker': ['vv', '154', '155', '157', '17m', '1av', '1dj', '1ne'], 'k-on': ['100', '125', '12b', '13p', '163'], 'yui': ['100', '125', '12b', '13p', '163'], 'fumo': ['101'], 'devil': ['103', '104', '12h', '2up'], 'pucker': ['107'], 'paulskallas': ['10d'], 'theoffice': ['10d'], 'lindyman': ['10d'], 'picklerick': ['10e'], 'iamhappy': ['10g'], 'ducttape': ['10k', '2qi'], 'woozuh': ['10s', '10u', '10v', '110', '111', '112', '114', '115', '11l', '13n', '13t', '13u', '1h4', '1h5', '1jv', '312'], 'stickfigure': ['10v', '110'], "what'supwoozuh": ['111', '116'], 'whatsupwoozuh': ['111', '116'], 'jared': ['112'], 'ninjaghini': ['114'], 'ninjagini': ['114'], 'lamborghini': ['114'], 'ninjet': ['115'], 'jetplane': ['115', '1sq'], 'marching': ['11e', '1mv', '3vl', '3vm'], 'soldier': ['11e', '1mv', '2me', '2mf', '2mt', '2n2', '3nv'], 'tedkaczynski': ['11g'], 'drtheodorekaczynski': ['11g'], "we'reback": ['11i', '11o'], 'weback': ['11i', '11o'], 'wereback': ['11i', '11o', '3d8', '3r2'], 'weresoback': ['11i', '11o', '1j3'], "we'resoback": ['11i', '11o', '1j3'], 'itisthesecret': ['11k', '3db'], 'book.paul.town': ['11k'], 'yobasbeentoldya': ['11n'], 'stfuchat': ['11p'], 'shutthefuckupchat': ['11p'], 'wegottoococky': ['11q'], 'yobabros': ['11q'], 'louistheroux': ['11t'], 'nose': ['11t', '414'], 'utya': ['120', '16q', '1de', '1dh'], 'duckass': ['120', '16b', '16b', '16p', '16q', '173', '1de', '1dh', '1pt', '1q4', '1um'], 'duckbutt': ['120', '16p', '16q', '173', '1de', '1dh', '1pt', '1q4', '1um'], 'twerking': ['120', '16b', '16p', '16q', '17p', '1de', '1dh', '1pt', '1q4', '1um', '22f'], 'itsover': ['121', '3d7', '3qp'], "it'sover": ['121'], 'caprisun': ['126'], 'thisismindgames': ['12c'], "hedon'tmiss": ['12g', '1d8'], 'hedontmiss': ['12g', '1d8'], 'japanese': ['12i', '359', '3i3'], 'girl': ['12i', '3o8', '3q4', '3qg'], 'sip': ['12i', '1gg'], "girlyou'refunny": ['12j'], 'girlyourfunny': ['12j'], 'snake': ['12k'], 'eatingitsowntail': ['12k'], 'eatingitself': ['12k'], 'ouroboros': ['12k'], 'autisticchildarea': ['12m'], 'clapping': ['12u', '17h', '1cu', '37q', '391', '3k1'], 'redhands': ['12u'], 'takemymoney': ['12v'], 'lauging': ['130'], 'banhammer': ['137', '1d9', '3i0'], 'copium': ['139', '331'], 'cockroach': ['13c'], 'wink': ['13j', '16l', '176'], 'ibakedyouapie': ['13k'], 'partygoy': ['13k', '143', '144', '145', '146', '147', '148', '149', '14a'], 'incelbtw': ['13n'], 'munch': ['13p', '148', '14a', '163'], 'happymerchant': ['13u', '1pg', '21t', '2od', '3b0', '3bf', '3e7', '3ir', '418'], 'rugrats': ['13v'], 'stewpickles': ['13v'], 'vladimirputin': ['140', '176', '17j', '1a6', '1a8', '1ja', '284', '3at', '3au', '3bj', '3rl'], 'z': ['140', '199', '19f', '1hi', '1i5', '1j4', '2dh', '2dn', '2fg'], 'baileythenationalistdog': ['141'], 'ironman': ['143'], 'rdj': ['143'], 'robertdowneyjr': ['143'], 'emo': ['144', '1i9', '1t7'], 'areyouenjoyingtheshow?': ['145'], 'zyzz': ['146'], 'normmacdonald': ['148'], 'good': ['149'], 'jockowillink': ['149'], 'oranges': ['14b'], 'chieftrumpster': ['14c', '14d', '14e', '14f', '14g', '14h', '14i', '14m', '14s', '14t', '14u', '14v', '151', '152', '153', '154', '155', '157', '159', '15a', '15b', '15c', '15d', '15e', '15f', '15h', '15j', '15k', '15l', '15m', '15n', '15q', '15s', '15t', '15u', '161', '162', '165', '167', '16c', '16d', '16e', '16f', '16i', '1h2', '1ng', '1q4', '1to', '1vi', '25u', '2dr', '3cl', '3dd', '3mn', '3pr'], 'wolf': ['14k'], 'howling': ['14k'], 'patrickhowley': ['14k', '193', '194', '195', '196', '197', '1hm', '1hn', '1hn', '1ho', '1hp', '1hq', '1i8', '1kg', '1pd', '1pf', '1pg', '1ph', '3rg'], 'groypergamingpointslost': ['14m'], 'doit': ['14n', '1da'], 'palpatine': ['14n', '15u', '1da', '3j3'], 'starwars': ['14n', '2i5'], 'kenobi': ['14q'], 'hellothere': ['14q'], 'sitting': ['14r', '16j', '1lq', '1m9', '3pe'], 'patting': ['14s'], 'andherewego': ['157'], 'rapegroyper': ['15a'], 'incel': ['15c', '3q1'], 'christpilled': ['15g'], 'iamincel': ['15j'], 'L': ['15k'], 'fornite': ['15l', '1vi'], '#1victoryroyale': ['15l', '15m'], 'minions': ['15s', '15t', '166', '1ht', '1hu', '1i9', '1vm', '213', '2hs'], 'darthsidious': ['15u', '3j3'], 'babyyoda': ['169', '187', '1df'], 'charliekirk': ['16c'], 'smallface': ['16c'], 'really?': ['16e', '1en'], 'king': ['16f', '19g', '1b5', '1kr', '1pd', '2hp', '2oh', '381', '39s'], 'afa': ['16h'], 'plantruster': ['170'], 'trusttheplan': ['170'], 'ttp': ['170'], 'fnf': ['174'], 'jumpscare': ['174'], 'ralphamale': ['179', '17a', '17b', '17c', '17d', '17e', '1pe', '1ps', '28m'], 'cumklips': ['17l'], 'mormonsdrinkcum': ['17l'], 'asuka': ['17u', '40u'], 'kagami': ['181'], 'exhausted': ['182'], 'dragonballz': ['184', '1ka', '3i6', '3i7', '3ri', '3v0'], 'dbz': ['184', '1ka'], 'vegeta': ['184'], 'faggot': ['188', '23a'], 'bundleofsticks': ['188'], 'cozytv': ['18b', '2qf'], 'cozy.tv': ['18b'], 'umbrella': ['18g', '2qr', '38g'], 'legs': ['18i', '2lr'], 'valiantnews': ['18j', '18k', '18l', '18m', '18o', '18q', '18s', '18t', '18u', '18v', '190', '1qj', '1vo', '22j', '22k'], 'bugsbunny': ['193', '193', '3r0'], 'bigchungus': ['193', '1hm'], 'atombomb': ['195', '1r4'], 'explosion': ['195', '1r4', '249', '3v9'], 'tsarbomba': ['195', '1r4'], 'hbomb': ['195', '1r4'], 'atomicbomb': ['195', '1r4'], 'mushroomcloud': ['195'], 'arnoldschwarzenegger': ['196'], 'ha!': ['197'], 'technicaldifficulties': ['198', '1e2', '1go'], 'keepcalmjesusisking': ['19a'], 'christisking': ['19a', '2go', '315'], 'milo': ['19c', '19d', '2v2', '30m', '3mt', '3nn'], 'fallout': ['19e'], 'shutupbitch': ['19g', '3cs'], 'heterogamer': ['19h'], 'chillpill': ['19l', '1d4'], 'justtrollin': ['19o', '1db'], 'seanmccrossen': ['19s', '19t', '19u', '19v', '1a0', '1a1', '1a2', '1a3', '1a4', '1a5', '1a6', '1a8', '1a9', '1aa', '1ab', '1e2', '1e4', '1e6', '1e7', '1e8', '1en', '1eo', '1ep', '1eq', '1er'], 'donaldduck': ['1a3'], 'credo': ['1a4'], 'americafirst': ['1a5', '312', '314'], 'af': ['1a5', '1td', '354'], 'approved': ['1aa'], 'dinosaur': ['1ae'], 'trex': ['1ae'], 'tyrannosaurus': ['1ae'], 'driver': ['1af', '1ag', '1ah', '1vp'], 'cancelproof': ['1af', '1ag', '1ah', '1ai', '1aj', '1ak', '1al', '1am', '1an', '1ao', '1ap', '1aq', '1ar', '1as', '1at', '1au', '1av', '1b0', '1b1', '1b2', '1b3', '1c0', '1c1', '1c2', '1c3', '1c4', '1cb', '1cj', '1eu', '1ev', '1f3', '1h3', '1h4', '1h5', '1hg', '26h', '27a', '2kv', '2l0'], 'mountain': ['1ap'], 'ultros': ['1b5'], 'fagmenco': ['1b6', '1b7', '1b8', '1b9', '1ba', '1bb', '1bc', '1bd', '1be', '1bf', '1bg', '1bh', '1bi', '1bk', '1bl', '1bm', '1bn', '1bp', '1bq', '1br', '1bs', '1bu', '1bv', '1co', '1e9', '1f0', '1jm', '1jn', '1ki', '1kj', '1nn'], 'nekoarc': ['1b8', '1ba'], 'flamenco': ['1bb', '1ki', '1nn'], 'blacklagoon': ['1bc'], 'revy': ['1bc'], 'thinkspin': ['1bd'], 'rezero': ['1bg'], 'rem': ['1bg'], 'monogatari': ['1bh'], 'snail': ['1bh'], 'chika': ['1bi'], 'terrydavis': ['1bp'], 'cia': ['1bp', '3v6'], 'templeos': ['1bp'], 'darksidephil': ['1bq'], 'dsp': ['1bq'], 'persona': ['1br', '1bs'], 'konosuba': ['1bv'], 'megumin': ['1bv'], 'mothermary': ['1c1', '1ns', '1nt', '206'], 'pope': ['1c4', '1g0', '1tq'], 'liltimmy': ['1c6'], 'politicallyprovoked': ['1c6', '1c7', '1c8', '1c9', '1ca', '1cp', '1cq', '1cr', '1cs', '1ct', '1cu', '1d1', '1d3', '1d9', '1da', '1dc', '1df', '1dg', '1dh', '1dj', '1dk', '1dl', '1dp', '1dq', '1dv', '1e0', '1ii', '1ij', '1ik', '1jc', '1l0', '1ml', '1nc', '1nd', '1p2', '1pu', '1vv', '200', '201', '202', '221', '222', '22t', '236', '237', '238', '239', '23a', '23b', '23c', '23d', '23e', '23f', '23g', '23h', '23j', '23k', '23l', '23m', '28f', '2ap', '2bb', '2bc', '2bd', '2be', '2pb', '2qg', '34c', '3ad', '3af', '3kl', '3km', '3m3', '3n4', '3oh', '3pg', '3ph', '3r4', '3sp', '3ug', '3ur', '3vo', '3vp', '3vq', '3vr'], "let'sgetprovoked": ['1c8'], 'letsgetprovoked': ['1c8'], 'gamer': ['1c9'], 'fun': ['1ca', '1e5'], 'kimjongun': ['1cb'], 'northkorea': ['1cb'], "i'mbricked": ['1cg'], 'imbricked': ['1cg'], 'ohiostate': ['1cj'], 'sparkle': ['1cn'], "can'twait": ['1d0'], 'cantwait': ['1d0'], "don'tbehatin'": ['1d2'], 'dontbehating': ['1d2'], 'fax': ['1di'], 'facts': ['1di'], 'TRUE': ['1di', '224'], 'fighting': ['1dk', '2pm', '384', '3u8'], 'please': ['1dm', '1dn'], 'positivevibes': ['1dq'], 'basedtm': ['1dr'], '#replealthe19th': ['1ds'], 'provokedbro': ['1dv'], 'dontblameme': ['1e0'], "don'tblameautism": ['1e0'], 'sonic': ['1e1', '25a', '3ik'], 'thinking': ['1e1', '24a', '385'], 'yurucamp': ['1e3'], 'shima': ['1e3'], 'shoeonhead': ['1e9'], 'momo': ['1e9'], 'adolfhitler': ['1ea', '35l', '3e4', '3e8', '40m', '40n', '40r'], 'rave': ['1ea', '3ja', '40m'], 'althype': ['1ea', '1eb', '1ed', '1ee', '1ef', '1eg', '1eh', '1ei', '1ej', '1ek', '1el', '1em', '1h9', '1ha', '1hb', '1hc', '1hi', '1i5', '1iq', '1k0', '1k4', '1k5', '1k6', '1ld', '1le', '1lf', '1lg', '1lh', '1li', '1lj', '1nb', '1nf', '1pq', '2bf'], 'glasses': ['1ee', '1s4', '1vf', '2j5', '385', '3so'], 'starofdavid': ['1ef', '341', '3qu'], 'interdasting': ['1ej', '40d'], 'interesting': ['1ej'], 'telescope': ['1ej'], 'train': ['1el', '40i', '417', '418', '419'], 'fishing': ['1em', '3ck'], 'darkmaga': ['1eo'], 'punished': ['1eo'], 'future!': ['1et'], 'americfirst': ['1eu'], 'clock': ['1f4'], 'jlp': ['1f4', '1f5', '1f6', '1f7', '1fa', '1fb', '1fc', '1fd', '1fe', '1fh', '1fi', '1fj', '1fk', '1fl', '1fn', '1fo', '1fp', '1fq', '1fs', '1ft', '1fv', '1g0', '1g1', '1g2', '1g6', '1g7', '1g8', '1gc', '1gk', '1gl', '1gm', '1gn', '1go', '1gp', '1gq', '1gr', '1gs', '1gt', '1gu', '1gv', '1h0', '1he', '1hf', '1hl', '1i0', '1i1', '1i2', '1i3', '1ib', '1r9', '2ah', '2ai', '2aj', '3sf', '3st', '3su', '3sv', '3t0', '3t1', '3t2', '3t3', '3t4', '3t5', '3t6', '3t7', '3t8', '3t9', '3ta', '3tb', '3tc'], 'jesseleepeterson': ['1f4', '1f5', '1f6', '1f7', '1fa', '1fb', '1fc', '1fd', '1fe', '1fh', '1fi', '1fj', '1fk', '1fl', '1fn', '1fo', '1fp', '1fq', '1fs', '1ft', '1fv', '1g0', '1g1', '1g2', '1g6', '1g7', '1g8', '1gc', '1gk', '1gl', '1gm', '1gn', '1go', '1gp', '1gq', '1gr', '1gs', '1gt', '1gu', '1gv', '1h0', '1he', '1hf', '1hl', '1i0', '1i1', '1i2', '1i3', '1ib', '1r9', '2ah', '2ai', '2aj', '3sf', '3st', '3su', '3sv', '3t0', '3t1', '3t2', '3t3', '3t4', '3t5', '3t6', '3t7', '3t8', '3t9', '3ta', '3tb', '3tc'], 'stoning': ['1f5'], 'reeeeeee': ['1f6', '1m2'], "you'reabeta": ['1fc'], 'beta': ['1fd', '3rn', '3t3', '3t7', '3t8'], 'girlname': ['1fe'], 'stewpeters': ['1fg', '1n6', '1nk', '1nl', '1nm', '1nq', '1os', '1ot', '1ou', '1ov', '1p0', '1p1', '1t1', '1v6', '2eq'], 'stewcrew': ['1fg', '1n6', '1nk', '1nl', '1nm', '1nq', '1os', '1ot', '1ou', '1ov', '1p0', '1p1', '1t1'], 'youhavetogoback': ['1fh', '3to'], 'statueofliberty': ['1fh', '3to'], 'realeyes': ['1fi', '3tp'], 'realize': ['1fi', '3tp'], 'reallies': ['1fi', '3tp'], 'tupacshakur': ['1fi', '3tp', '3tr'], 'amazintarbaby': ['1fj', '3ts'], 'slaverywasachoice': ['1fk', '3tq'], 'kanyewest': ['1fk', '1v5', '2hn', '2i2', '2i3', '2i4', '2jl', '2kf', '2lp', '2lq', '2lt', '2lu', '2p1', '2pk', '2pl', '2v2', '30m', '30v', '311', '32u', '33d', '33t', '33u', '33v', '342', '344', '35g', '35j', '36a', '3am', '3ge', '3k9', '3tq'], 'heblack': ['1fn', '1gk'], 'whatyoudoing': ['1fp'], 'starsandbars': ['1fq'], 'talorswift': ['1fs'], 'o/': ['1fs', '3pd'], 'roman': ['1fs', '3pd'], 'malikobaba': ['1ft'], 'muhammadali': ['1fv'], 'colinkaepernick': ['1g1'], 'nancypelosi': ['1g2'], 'resistance': ['1g4'], 'whitesupremacy': ['1g9'], 'killsblackpeople': ['1g9'], 'deattotheracists': ['1gc'], 'jej!!!': ['1ge'], 'dumpit': ['1gf', '2rv'], 'bogdanoff': ['1gf', '2rv'], 'thebogs': ['1gf'], 'reallynigga': ['1gh', '3sk'], 'alsharpton': ['1gi'], 'billclinton': ['1gj'], 'heblat': ['1gk', '3sv'], 'wutda!': ['1gl', '3t0'], 'whatda': ['1gl', '1us', '1vc', '22t'], 'beta!': ['1gq', '1gr'], 'plays': ['1gv'], 'arsonist': ['1h1'], 'flames': ['1h1', '1id', '1td', '1te'], 'goodmorning': ['1h6', '1h7'], 'jesuslovesyou': ['1h6', '23q'], 'mylittlepony': ['1h8', '1mi'], 'brony': ['1h8', '1mi'], 'mlp': ['1h8', '1mi'], 'rainbowdash': ['1h8'], 'dunce': ['1h9', '1lg'], 'frown': ['1ha'], 'cool': ['1hb'], '80s': ['1hb'], 'pigger': ['1hd'], 'paypig': ['1hd'], 'afro': ['1he', '3tc'], 'sweetback': ['1hf'], 'gorilla': ['1hh'], 'tank': ['1hi'], 'lasereyes': ['1hn', '1na', '1os', '1ou', '1p0', '1q0', '1q5', '1q6', '20a', '22u', '22v', '3b5'], 'vs': ['1hp'], 'edheadsriseup': ['1hs'], 'angelsarebeing': ['1i0', '3tt'], 'morewhitebabies': ['1i2', '3tg'], 'shower': ['1i6'], 'bugman': ['1i8'], 'jews': ['1ib', '2od', '35f', '3cp', '3e0', '3r0', '3tk'], 'elmo': ['1id', '23h'], 'burkanow': ['1ii', '1ij'], 'silencewoman': ['1ik'], 'backbencher': ['1il'], 'trans': ['1in', '1io', '1ip'], 'veronica': ['1in', '1io', '1ip'], 'smash': ['1is', '1it', '1iu', '1j1', '25e', '3k0'], 'pass': ['1iv', '1j0', '25f'], 'jacksonhinkle': ['1j4', '1j5', '1j6', '1j7', '1j8', '1ja'], 'cwc': ['1j9', '22g', '3v3', '3v5', '3v6', '401'], 'culturewarcriminal': ['1j9', '22g', '3v3', '3v5', '3v6', '401'], 'fuckyou': ['1j9', '1mr'], 'gayta': ['1jb', '1jg'], 'burka': ['1jc'], 'dasrite': ['1ji', '2ac', '3bg'], 'flemenco': ['1jm', '1jn'], 'crp': ['1jo'], 'coachredpill': ['1jo'], 'tokyoghoul': ['1jp', '1jq', '1jr', '1js', '1jt', '1ju'], 'kaneki': ['1jp', '1jq', '1jr', '1js', '1jt', '1ju'], 'grug': ['1k0', '40q'], 'bigbrain': ['1k1', '1k4', '1ss', '1st', '40p'], 'lmao': ['1k2'], 'followbakedalaska': ['1k3', '1k7'], 'arms': ['1k5', '1k6', '2ou'], 'handshake': ['1k5', '1k6'], 'brothers': ['1k5', '1k6'], 'patrickstar': ['1k8', '1ng', '1q0', '2i9', '3as'], 'supersaiyan': ['1ka', '3ri'], 'goku': ['1ka', '3v0'], 'fingerpointing': ['1kb', '1q7'], 'howlergang': ['1kg'], 'mrmetokur': ['1kh'], 'mistermetokur': ['1kh'], 'jimmetokur': ['1kh'], 'medicare': ['1kh'], 'hbdflam': ['1ki'], 'happybirthdayflam': ['1ki'], 'pig': ['1kj', '25p'], 'elonmusk': ['1ko', '32p', '3e5'], 'bigtech': ['1kp', '1kq', '1kr', '1ku', '1l1', '1l2', '1l5', '1lk', '1ll', '1lm', '1ln', '1lo', '1lp', '1lr', '1ls', '1lt', '1lu', '1m0', '1m2', '1m3', '1m4', '1m5', '1m8', '1m9', '1ma', '1mb', '1mc', '1md', '1me', '1mf', '1mh', '1mp', '1mq', '1mr', '1ms', '1mt', '1mv', '1n0', '1n1', '1n2', '1n3', '1n4', '1nh', '1ni', '1ni', '1pc', '1pk', '1pl', '1pl', '1q0', '1q1', '1q2', '1t0', '2l1', '2l2', '2l3', '2l4', '2l5', '36o', '36p', '3l6', '3l7', '3nc'], 'seal': ['1kq', '1rh'], 'walrus': ['1kr'], 'n': ['1kv'], 'brittany': ['1l0', '1ml', '1nc', '1nd', '1vv', '221', '222', '2pb', '2qg', '34c', '3ad', '3af', '3oh', '3pg', '3ph', '3r4', '3sp', '3ug', '3ur', '3vo', '3vp', '3vq', '3vr'], 'pp': ['1l0', '1vv'], 'grimace': ['1l2'], 'aflogo': ['1l6', '209'], 'evil': ['1l7'], 'andywarski': ['1l8', '233', '234', '25u', '25v', '260', '261', '29l'], 'spam': ['1lc'], 'trumpet': ['1le'], 'drums': ['1lh'], 'worried': ['1lj'], 'women=property': ['1ll'], 'tall': ['1lm'], 'goose': ['1ls'], 'poop': ['1lt'], 'pelican': ['1lv'], 'handsomesquidward': ['1m0'], 'wemadeit': ['1m1', '1m4', '1m5'], 'wagmi': ['1m1', '1m4', '1m5'], 'wgmi': ['1m1', '1m4', '1m5'], 'racing': ['1m3'], 'lean': ['1m6', '1m8', '1ma', '1mh', '31s', '3pn'], 'leanhead': ['1m6', '1m8', '1mf', '1mh'], 'juicebox': ['1ma'], 'kawaii': ['1mc'], 'cute': ['1mc', '3qj', '3qk'], 'shy': ['1mc'], 'left': ['1me', '30d'], 'lean ': ['1mf'], 'boogie2988': ['1mg'], 'openfire': ['1mg'], 'rarity': ['1mi'], 'tree': ['1mm'], 'chicken': ['1mn'], 'gn': ['1mp', '1no', '1np'], 'fucku': ['1mr'], 'chatlikedthat': ['1n5'], 'rpg': ['1n7', '1or', '20t', '3av'], 'redpillgamingtv': ['1n7', '1or'], 'redpillgangtv': ['1n7', '1or'], 'rpgtv': ['1n7', '29v', '3nd', '3ps', '3pt', '3pu', '3q5', '3qc', '3s6'], 'flower': ['1n9'], 'crystalball': ['1nb'], 'smiling': ['1ne', '1ts', '1tt', '401'], 'N': ['1nh'], 'fokiss': ['1nm'], 'stitch': ['1no', '1np', '370'], 'stewworldorder': ['1nq'], 'speckzo': ['1ns', '1nt', '1nu', '1nv', '1o0', '1o1', '1o2', '1o3', '1o4', '1o5', '1o6', '1o7', '1oa', '1ob', '1oc', '1od', '1oe', '1of', '1og', '1oh', '1oi', '1oj', '1ok', '1ol', '1om', '1on', '1oo', '1p8', '1p9', '1pa', '1pb', '1q5', '1q6', '1tq', '1tr', '1ts', '1tt', '1va', '1vb', '1vt', '1vu', '20o', '2ck', '2cl', '2eu', '2f0', '2fv', '2go', '2gp'], 'vaticancity': ['1ob'], 'catholic': ['1ob', '1ol', '1on', '3n2', '3uv'], 'deusvult': ['1oc', '1om', '2aa'], 'modernist': ['1oi'], 'absolutelyantilogos': ['1oj', '35u', '3b4'], 'emichaeljones': ['1oj', '24i', '24j', '24m', '24n', '24o', '24q', '24r', '24s', '24t', '24u', '24v', '250', '251', '252', '253', '254', '255', '256', '257', '258', '2qh', '2qi', '2qj', '35u', '3j9', '3ja', '3jj', '3jk', '3jl', '3jm'], 'dremj': ['1oj'], 'bishop': ['1on'], 'stewcrewalwayswins': ['1ot'], 'stewwick': ['1ou'], 'ballsareonthetable': ['1ou'], 'stewwill': ['1ov'], 'collectingbounty': ['1ov'], 'standingdown': ['1p1'], 'standingby': ['1p1'], 'bpf': ['1p2'], 'bigpapafacist': ['1p2'], 'baldassnigga': ['1p3', '1p4', '1p5', '1p6', '1p7'], 'baldandstrong': ['1p3', '1p4', '1p5', '1p6', '1p7'], 'martinluthur': ['1p8'], 'protestant': ['1p8'], 'pinesap': ['1pa', '1pb', '1tr', '2eu'], 'arresthim': ['1pe'], 'arrestheem': ['1pe'], 'tesla': ['1pi'], 'whiteoutside': ['1pj', '3rm', '3tf'], 'elijahschaffer': ['1pm'], 'timpool': ['1pn', '32r', '32s'], 'millenialmatt': ['1pn', '32r'], 'rei': ['1po'], 'bricks': ['1pp'], 'brickedup': ['1pp'], 'provokedpilled': ['1pu'], 'classicaltheist': ['1pv', '1ra'], 'manul': ['1q9', '1qa', '21n', '21v', '220'], 'wendell': ['1qa', '1qb', '1qc', '1qf', '1qg', '1qh', '1qk', '1ql', '1qm', '1qv', '1r2', '1r4', '1re', '1rf', '1ri', '1rk', '1rl', '1rm', '1rn', '1rp', '1rq', '1rr', '1ru', '1rv', '1s0', '1s1', '1s2', '1s4', '1s5', '1s6', '1s7', '1s8', '1sa', '1sg', '1si', '1sl', '1sm', '1sn', '1so', '1sp', '1sr', '1tc', '1tf', '1tg', '1th', '1tp', '1tu', '1un', '1uo', '219', '21a', '21g', '21h', '21l', '21q', '21t', '21v', '220', '241', '244', '247', '248', '264', '264', '265', '265', '2jl'], 'welcome': ['1qf'], 'rat': ['1qf', '1qg', '29v'], 'welcom': ['1qg'], 'dalejones': ['1qh'], 'puma': ['1qh'], 'calculator': ['1qj'], 'earth': ['1ql', '1sb', '1sc', '1sf'], 'world': ['1ql', '1sb', '1sc', '1sf'], 'globe': ['1ql', '1sb', '1sc', '1sf', '3kl', '3km', '3kn', '3kp', '3ku', '3l3', '3l6', '3l7', '3l8', '3ln', '3mn', '3nl', '3o0', '3o1', '3o3', '3o4', '3r3'], 'nativeamericans': ['1qm', '1s2'], 'bewareofforeigninfluence': ['1qm', '1s2'], 'skeleton': ['1qn', '2db', '2dc', '2gl', '3b3'], 'bible': ['1qo'], 'snoopy': ['1qv'], 'woodstock': ['1qv'], 'peanuts': ['1qv'], 'boat': ['1r3'], 'bomber': ['1r5'], 'someonetalked!': ['1r8'], 'whitehistorymonth': ['1r9', '3te'], 'octopus': ['1rh', '1rt'], 'sneed': ['1ri'], 'informationawarenessoffice': ['1rj'], 'iao': ['1rj'], 'tarnseele': ['1rn'], 'scroogemcduck': ['1rp'], 'taste_o7': ['1rq'], 'robot': ['1rq'], 'nothingisbeyondourreach': ['1rt'], 'percival': ['1ru'], 'gary': ['1s7'], 'hulkhogan': ['1se', '286', '3qi', '3tj'], 'hollywoodhogan': ['1se', '286'], 'guitar': ['1se', '2ah', '3ei', '3qi', '3u3'], 'wendeii': ['1sg', '1si'], 'bouncing': ['1sr'], 'hopping': ['1sr'], 'thanos': ['1t2', '2qo', '2qp'], 'berserk': ['1t4'], 'guts': ['1t4'], 'nickrekieta': ['1t6', '2uu'], 'rekietalaw': ['1t6', '25r'], 'wendy': ['1t9'], 'kingknub': ['1ta', '1tb', '20k', '20l', '20m', '20n', '271'], 'kingnub': ['1ta', '1tb', '20k', '20l', '20m', '20n', '271'], 'americanspirit': ['1tc'], 'cigarettes': ['1tc'], 'k': ['1te'], 'killstream': ['1te', '3kp', '3ln'], 'talktothehand': ['1ti'], 'hahaclassic': ['1tp'], 'priest': ['1tt', '38o', '39r', '3uv'], 'father': ['1tt', '2tp'], 'sandwich': ['1tu'], 'spinningfood': ['1tu'], 'spinny': ['1tu', '3k4', '3kl', '3km', '3kn', '3kp', '3ku', '3l3', '3l6', '3l7', '3l8', '3ln'], 'kiss': ['1tv'], 'stayer': ['1tv'], 'kicking': ['1u0', '32a'], 'blueeyeswhitedragon': ['1u1'], 'yugioh': ['1u1', '1uo'], 'kaiba': ['1u2', '1uo'], 'destroyed': ['1u2'], 'harriswalker': ['1u3', '1u4', '1u5', '1u6', '1u7', '1u8', '1u9', '1ua', '1ub', '1uc', '1uf', '1ug', '1uh', '1ui', '1uj', '1uk', '1ul', '1v7', '1v8', '1v9', '1vf', '228', '229', '22a', '22u', '22v', '230', '263', '2ds', '2qc', '2qd'], 'hw': ['1u3', '1u4', '1u5', '1u6', '1u7', '1u8', '1u9', '1ua', '1ub', '1uc', '1uf', '1ug', '1uh', '1ui', '1uj', '1uk', '1ul', '1v7', '1v8', '1v9', '1vf', '228', '229', '22a', '22u', '22v', '230', '2ds', '2qc', '2qd'], 'phone': ['1uf'], 'ag': ['1uq', '1ur'], 'wutda': ['1us', '1vc'], 'funkopop': ['1uu'], 'lg4l': ['1uv', '1v0'], 'heart': ['1v1', '2r3', '3qv', '3up'], 'scrapplegang': ['1v4'], 'wakup!!': ['1v6'], 'homelander': ['1v8', '214'], 'theboys': ['1v8', '214', '3c1'], 'genshinimpact': ['1vg', '1vh'], 'klee': ['1vg', '1vh'], 'redpilledjacob': ['1vj', '1vl', '1vm', '1vn', '1vp', '1vr', '213', '214', '215', '216', '217'], 'missile': ['1vk'], 'lovecraft': ['1vk'], 'benny': ['1vq'], 'omeglenow': ['200', '201', '202'], 'shawn': ['203'], 'pepsilogo': ['209'], 'walterwhite': ['20c'], 'breakingbad': ['20c', '367'], "it'sma'am": ['20g'], 'itsmam': ['20g'], 'hollywoodbibble': ['20i'], 'kingbob': ['213'], 'nickcage': ['21e'], 'nicholascage': ['21e'], 'cheshirecat': ['21f', '3d4'], 'nekoatsume': ['21g', '21h'], 'distress': ['21i'], 'ragecomic': ['21k', '21l', '230'], 'thevoices': ['21m'], 'schizophrenia': ['21m', '2t3', '3b3'], 'thinkitdreamitdoit': ['223'], 'thispostwasfactcheckedbyrealamericanpatriots': ['224'], 'thispostisforcozytvmembersonly': ['225'], 'cozyplus': ['225', '226'], 'cozysubscribers': ['225', '226'], 'cozypremium': ['225', '226'], 'thismessageisonlyforcozytvsubscribers': ['226'], 'countryballs': ['228', '229', '22a'], 'greeceball': ['228'], 'serbiaball': ['229'], 'russiaball': ['22a'], 'gatortime': ['22d'], 'kinocasino': ['22e', '22f'], 'obese': ['22e'], 'warski': ['22f', '3of'], 'manlet': ['22g', '22o'], 'yobacursebitch': ['22h'], 'fedbtw': ['22i', '25b'], 'noeggs': ['22j'], 'emptyeggcarton': ['22j', '2ad'], 'wholechicken': ['22k'], 'kitty': ['22m'], 'kitten': ['22n'], 'flailing': ['22n'], 'punchwomen': ['230'], 'monero': ['231', '3dl'], 'cryptocurrency': ['231', '3dj', '3dk', '3dl'], 'wife': ['232'], 'americanflag': ['235', '304', '33i', '382', '3a6', '3pa', '3t9', '3th', '3tj'], 'ww2': ['235'], 'deporthim': ['236'], 'deported': ['236'], 'nope': ['238'], 'suffer': ['23h'], 'repealthe19th': ['23j', '23k'], '19thamendment': ['23j', '23k'], 'provokeme': ['23l'], 'skip': ['23m'], 'christianity': ['23n', '23o', '23p', '23q', '23r', '23s'], 'idiot': ['23t'], 'yobagang': ['23u', '23v'], 'yg4l': ['23u', '23v'], 'pepereading': ['240'], 'apureading': ['240'], 'apuglasses': ['240'], 'bear': ['241', '242', '248', '2a5'], 'pepebear': ['241', '242', '248'], 'bearpepe': ['241', '242', '248'], 'bearpepenewspaper': ['241'], 'newspaper': ['241'], 'newspaperbearpepe': ['241'], 'catjumping': ['243'], 'jumpingcat': ['243'], 'catgenerator': ['243'], 'joekentiscia': ['244'], 'stevebannon': ['245'], 'monkeypajamas': ['246'], 'catstaring': ['247'], 'catstare': ['247'], 'catweird': ['247'], 'weirdcat': ['247'], 'nuke': ['249'], 'nuclearbomb': ['249'], 'thinkingass': ['24a'], 'thinkass': ['24a'], 'goodnight': ['24b'], 'southerndingo': ['24g'], 'thisispreposterous': ['24h'], 'emj': ['24i', '24j', '24m', '24n', '24o', '24q', '24r', '24s', '24t', '24u', '24v', '250', '251', '252', '253', '254', '255', '256', '257', '258', '2qh', '2qi', '2qj'], 'book': ['24k', '24l'], 'logos': ['24n', '24q'], 'yobacat': ['25a', '25b', '25c', '25d'], 'sonicgang': ['25c'], 'tailsgang': ['25d'], 'willemdafoe': ['25g'], 'basedbrandt': ['25g', '25h', '25i', '26i', '26j', '26k', '26l', '26m', '26n', '26o', '279', '28r', '28s', '299', '29a', '2rn', '3dg', '3ka'], 'bingus': ['25h'], 'breasts': ['25i'], 'smugpepe': ['25j'], 'chikken': ['25k', '25l'], 'rapezone': ['25m', '25n', '25o'], 'sadge': ['25q'], 'sademoji': ['25q'], '3demojisad': ['25q'], 'alijamal1776': ['25s'], 'ttgxhw': ['263'], 'tiktokgroyper': ['263'], 'pirate': ['266', '267', '268', '26d', '26e', '2dg'], 'piratepeepo': ['269', '26a', '26b'], 'yobadance': ['26f', '29j', '29o', '29t'], 'gold': ['26g'], 'themostcanceledmaninamerica': ['26h'], 'purpleguy': ['26i', '26n', '26o'], 'afpepsi': ['26l'], 'pepsinitro': ['26l'], 'cozyplays': ['26p', '26q', '26r', '26s', '26t', '26u', '26v', '270', '274', '275', '276', '277', '278', '27b', '27c', '27d', '27e', '27f', '27g', '27h', '27i', '27j', '27k', '27l', '281', '282', '283', '28b', '28c', '28d', '28e', '28g', '28h', '28i', '28j', '28k', '28l', '28m', '28n', '28o', '28p', '28q', '290', '291', '292', '293', '294', '295', '296', '297', '298', '29b', '29c', '29d', '29e', '29f', '29g', '29h', '29i', '29i', '2f1', '2f2', '2f3', '2f4', '2f5', '2f6', '2f7', '2f8', '2fe', '2fi', '2fj', '2fk', '2fl', '2fm', '2fn', '2fq', '2fr', '2fs', '2ft', '2fu', '2g7', '2ga', '2gb', '2gc', '2gd', '2ge', '2gf', '2gg', '2gh', '2gi', '2gj', '2gm', '2gn', '2n6', '2n7', '2n8', '2n9', '2na', '2nb', '2nc', '2nd', '2ne', '2nf', '2ng', '2nh', '2ni', '2nj', '2nl', '2nm', '2nn', '2o7', '2p2', '2pm', '2r5', '2r6', '2r7', '2r8', '2r9', '2ra', '2rb', '2rc', '2rd', '2re', '3ko', '3lb', '3lc', '3ld', '3le', '3lf', '3lg', '3lh', '3li', '3lj', '3lk', '3ll', '3lm', '3lp', '3lq', '3lr', '3ls', '3lt', '3lu', '3lv', '3m0', '3m2', '3md', '3me', '3mf', '3mg', '3mh', '3mi', '3mj', '3mk', '3ml', '3mm', '3mo', '3mp', '3mq', '3mr', '3ms'], 'pikachu': ['26q', '26r', '26s', '26v', '276', '277', '278', '27c', '27d', '28c', '2ft', '2gd', '2ge', '2tf', '3hd'], 'snorlax': ['26t', '26u', '28m'], 'pokemon': ['26t', '26u', '26v', '270', '274', '275', '276', '277', '278', '27b', '27c', '27d', '27e', '27f', '27g', '27h', '27i', '27j', '27k', '281', '282', '283', '28b', '28d', '28e', '28g', '28h', '28i', '28j', '28k', '28l', '28m', '28n', '28o', '28p', '28q', '297', '29h', '2e0', '2e1', '2e2', '2e3', '2e4', '2e8', '2e9', '2eb', '2ec', '2ed', '2ee', '2ef', '2eg', '2eh', '2ej', '2ek', '2el', '2em', '2en', '2eo', '2ep', '2et', '2ev', '2f1', '2f2', '2f3', '2f4', '2f5', '2f6', '2f7', '2f8', '2fe', '2fi', '2fj', '2fk', '2fl', '2fm', '2fn', '2fq', '2fr', '2fs', '2ft', '2fu', '2g7', '2ga', '2gb', '2gc', '2gd', '2ge', '2gf', '2gg', '2gh', '2gi', '2gj', '2t0', '2tf'], 'ok': ['270'], 'charmander': ['270', '27k', '28d'], 'nidoran': ['274'], 'nidoking': ['274', '27f', '27i'], 'lickitung': ['275', '2fk'], 'pepethefrog': ['27a'], 'ashketchum': ['27b'], 'pokeballs': ['27e'], 'pidgey': ['27g'], 'caterpie': ['27h', '2e1'], 'bulbasaur': ['27j'], 'colors': ['27l'], 'empire': ['27n'], 'ryandawson': ['27n', '27o', '27p', '27q', '27r', '27s', '27t', '27u', '27v', '284', '285', '286', '287', '288', '289', '28a', '28t', '2a0', '2a1', '2a2', '2a3', '2a4', '2a5', '2am', '2an', '2ao', '2aq', '2dn', '2g8', '2g9', '357', '3i4'], 'numec': ['27o'], 'tshirt': ['27o'], 'boycottisrael': ['27p'], 'bell': ['27s'], 'info': ['27u'], 'youmiss': ['280'], 'oftheshotsyoudonttake': ['280'], 'drowzee': ['281', '2ed'], 'squirtle': ['282', '28b'], 'pokemonsquirtle': ['282'], 'metapod': ['283'], 'fidelcastro': ['285', '3cb', '3cd'], 'hhbrother': ['286'], 'squirrel': ['287', '30o', '35a', '360', '361', '362', '363', '364', '365', '3v1', '3v2'], 'getoutfrog': ['288'], 'rainbowfrog': ['288'], 'trumplasereyes': ['28a'], 'squirtlesquad': ['28b', '2ga'], 'surprisedpikachu': ['28c'], 'hypno': ['28e', '2eo'], 'simpio': ['28f'], 'wartortle': ['28g'], 'pikachugun': ['28h'], 'ivysaur': ['28l'], 'pokemonsnorlax': ['28m'], 'hitmonchan': ['28n'], 'hitmonlee': ['28o'], 'gastly': ['28p', '2e2'], 'charizard': ['28q'], 'thisismichaelalberto': ['28r'], 'livemichaelalbertoreaction': ['28s'], 'basharalassad': ['28t', '3ao'], 'pokemonblastoise': ['28u'], 'pokemonvenusaur': ['28v'], 'pokemondratini': ['290'], 'pokemonmagicarp': ['291'], 'pokemonmachamp': ['292'], 'pokemontentacool': ['293'], 'pokemonslowpoke': ['294'], 'pokemonseel': ['295'], 'seel': ['295'], 'startbutton': ['296', '29e'], 'lapras': ['297'], 'pokemongo': ['298'], 'michaelalbertomcdonalds': ['29a'], 'selectbutton': ['29b', '29c', '29d'], 'bbutton': ['29f'], 'pressb': ['29f'], 'abutton': ['29g'], 'pressa': ['29g'], 'articuno': ['29h'], 'nicktheknife': ['29i'], 'joeprich': ['29k'], 'knockedout': ['29l'], 'ko': ['29l'], 'peeing': ['29n', '29p', '29q', '31u'], 'liberals': ['29n', '29p', '29q'], 'jidion': ['29r'], 'feazer': ['29u', '29v'], 'mommy': ['29u'], 'teddy': ['29v'], 'cactus': ['2a3', '2a4'], 'eagle': ['2a5', '3p8', '3qb'], 'hunteravallone': ['2a6'], 'greekstatue': ['2a7', '2a8'], 'lporiginalg': ['2a7', '2a8', '2a9', '2aa', '2ab', '2ac', '2ad', '2ae', '2af', '2e5', '2e6', '2e7', '2ea', '2fo', '2fp', '2kh', '2kk', '2kl'], 'intensifies': ['2aa'], 'lmfaooooo': ['2ak'], 'coppercap': ['2an'], 'ginger': ['2an'], 'beakybimbo': ['2ap'], 'darthvader': ['2ar', '2as', '2at'], 'ai': ['2b0', '2b1', '2b2', '2b3', '2b5', '2b6', '2b8', '2co', '2cq'], 'patdixon': ['2b0', '2b1', '2b2', '2b3', '2b4', '2b5', '2b6', '2b8', '2b9', '2cm', '2cn', '2co', '2cp', '2cq', '2cr', '2cs', '2ct', '2cu', '2dt', '2du', '2dv'], 'crimescene': ['2b4'], 'mugshot': ['2b6'], 'cops': ['2b8'], 'city': ['2b9'], 'birds': ['2ba', '2bb', '2bc', '2bd', '2be'], 'halloween': ['2bg', '2bh', '2bi', '2c9', '2ca', '2cb', '2d9', '2da', '2db', '2dc', '2de', '2ei', '2hm', '2hq', '2jh', '2ji', '2jj', '2jk', '2rg', '2rh'], 'jason': ['2bj'], 'pumpkin': ['2bk', '2cb', '2cf', '2cg', '2hm', '2ji', '2jj', '2jk', '2k2', '2k4', '2kc', '2ke', '2kg', '2lh', '2ln', '2lo', '2rg', '2rh'], 'grimreaper': ['2bl'], 'mummy': ['2bo', '2bp'], 'zombie': ['2bt'], 'clown': ['2bu', '2c3'], 'werewolf': ['2bv', '2df'], 'cyclops': ['2c1', '3fc'], 'tinman': ['2c6'], 'minionpepe': ['2c7'], 'vampire': ['2c8', '2cd', '2ct', '3el', '3i5'], 'frankensteinsmonster': ['2c9'], 'brideoffrankenstein': ['2ca'], 'pilgram': ['2cc', '2n4', '2rp'], 'goblin': ['2ch', '2ci'], 'ipitythedead': ['2cl'], 'mutant': ['2cm'], 'oprahwinfrey': ['2cr'], 'nosferatu': ['2ct', '3el'], 'candy': ['2d0', '2d1', '2d2', '2d3', '2d4', '2d5', '2d6', '2d7', '2d8'], 'batman': ['2d9'], 'scream': ['2da', '35i'], 'cthulu': ['2de'], 'russianflag': ['2dh', '2ij'], 'niggakot': ['2dk'], 'killer': ['2do', '2dp', '2dq'], 'crazy': ['2do', '2dp', '2dq'], 'dindunuthin': ['2dr'], 'dindumuffin': ['2dr'], 'nothinginmoderation': ['2dt'], 'foolaid': ['2du'], 'koolaid': ['2du'], 'egg': ['2e3', '2e4', '2g7'], 'togepi': ['2e3', '2e4', '2eb', '2ee', '2g7'], 'fist': ['2e7'], 'rattata': ['2e9'], 'stopthat': ['2ea'], 'stopit': ['2ea'], 'spider': ['2ef', '2fn'], 'gyrados': ['2ek', '2el'], 'haunter': ['2em'], 'eevee': ['2en'], 'given8newsacozychannel': ['2er'], 'nintendoswitch': ['2eu'], 'whitemonster': ['2f0', '3s5'], 'bluemandm': ['2f9'], 'bluemm': ['2f9'], 'yeezygap': ['2fa'], 'bigblackcoat': ['2fa'], 'abra': ['2fe'], 'russia': ['2fg'], 'ditto': ['2fi'], 'jigglypuff': ['2fj'], 'burgerking': ['2fo'], 'kickthatniggerbitchofftheplane': ['2fo'], 'mew': ['2fq'], 'mewtwo': ['2fr', '2fs'], 'psyduck': ['2fu'], 'catbutt': ['2g0'], 'nyancat': ['2g1'], 'saddance': ['2g2', '2hb', '309'], 'groyperdance': ['2g3'], 'gorilladance': ['2g5'], 'pokeball': ['2gb'], 'closecomputer': ['2gk'], 'moonman': ['2gm', '3vh'], 'fed': ['2gv', '3js'], 'willywonka': ['2h1'], 'jagermeister': ['2h2'], 'peepowave': ['2h3', '32j', '335', '38d'], 'peepoclap': ['2h4', '2h5'], 'pepemusic': ['2ha'], 'crown': ['2hp', '2oh'], 'gru': ['2hs'], 'anakinskywalker': ['2i5'], 'spongebobsquarepants': ['2i8', '2ug', '3jb', '3k2'], 'sadpepe': ['2ia', '2ib', '2mh'], 'bar': ['2ib'], 'beer': ['2ib', '2j8', '2j9', '2ja', '2jf', '2jg', '2jv', '2k0', '2ka', '37a'], 'mcdonalds': ['2ig', '32p', '3ar', '3c4'], 'nerd': ['2ik', '2ts', '337', '386', '3j5', '3pl', '3ql', '3s9', '3sa', '3sg', '3sn'], 'sneako': ['2il'], 'quickcheck_donteat': ['2im'], 'leonardodicaprio': ['2io', '2ob'], 'miggers': ['2iq'], 'jeff': ['2iq'], 'yungfloppa': ['2ir'], 'nullvalue': ['2is'], 'jej': ['2it'], 'ghost': ['2iu'], 'groypercheers': ['2j0'], 'pepecigar': ['2j1'], 'pepesalute': ['2j2', '2j7'], 'inspect': ['2j5'], 'corona': ['2j9'], 'hellofbi': ['2jc', '2js', '2k7', '377'], 'witch': ['2jh', '2k1', '2kb'], 'ye': ['2jl'], 'enter': ['2jp', '305', '37u', '39g'], 'exit': ['2jq', '306', '37v', '39h'], 'pepeskull': ['2k3', '2kd'], 'itsokaytobewhite': ['2ki'], 'stoppaytoll': ['2kk'], 'noose': ['2kl', '3as'], 'alialexander': ['2l0', '2oe', '2of', '2og', '2oh', '2oi', '2oj', '2ov', '2pa', '2qa', '2qb'], 'unionjack': ['2l6', '3qd'], 'england': ['2l6'], 'britbong': ['2l6'], 'potsticker': ['2l7'], 'gorillaz': ['2l7'], 'greencheckmark': ['2l8', '2l9'], 'redrobin': ['2la'], 'catboy': ['2lb', '2lc', '2s0', '3sb', '3sc', '3sd', '3ue', '3uf', '3uh', '3ui', '3uj', '3uk', '3un', '3uo', '3us', '3uu'], 'duckling': ['2li'], 'welcome2niggatown': ['2lm'], 'waddyamean': ['2lv'], 'reactionaryradio': ['2m0', '2m1', '3o4'], 'mypillow': ['2m2'], 'rogerstone': ['2m3', '2m4', '2m5', '2m6', '2m7', '2m9', '2pq', '2pr', '2ps', '2pt', '2pu', '2pv', '2q0', '2q1', '2q2', '2q3', '2q4', '2q5', '2q6', '2q7', '2q8', '2q9', '2qa', '2tr'], 'richardnixon': ['2m8', '2q1'], 'argentina': ['2ma', '2mb'], 'wejew': ['2mc', '2md', '341'], 'helmet': ['2me', '2mf'], 'ny': ['2mh'], 'oddfall': ['2mm'], 'computer': ['2mn', '37n', '3k0'], 'bananadance': ['2mv'], 'peanutbutterjellydance': ['2mv'], 'banananocontext': ['2n1'], 'obamapilled': ['2n1'], 'thanksgiving': ['2n3', '2n4', '2n5', '2ri', '2rj', '2ro', '2rp', '2u1', '2u2'], 'earthbound': ['2n6', '2n7', '2n8', '2n9', '2na', '2nb', '2nc', '2nd', '2ne', '2nf', '2ng', '2nh', '2ni', '2nj', '2nl', '2nm', '2nn', '2o7', '2p2', '2r5', '2r6', '2r7', '2r8', '2r9', '2ra', '2rb', '2rc', '2rd', '2re'], 'ness': ['2n7', '2n8', '2n9', '2na', '2nb', '2nc', '2nf', '2ni', '2nj', '2o7', '2r6', '2r7', '2r8', '2r9'], 'noproblemhere': ['2nl', '2nm', '2nn'], 'comfrey': ['2no', '2o4'], 'cookies': ['2np', '2o5'], 'praise': ['2nr'], 'chatbubble': ['2o8', '3dh', '40v', '410'], 'textbubble': ['2o8'], 'dreaming': ['2o8', '2o9'], 'amongus': ['2oa', '2s2', '2sa', '2sg', '2t2', '2t7'], 'amogus': ['2oa', '2sa', '2sg', '2t2'], 'greatgatsby': ['2ob'], 'jewish': ['2od', '3ir', '3k9', '3q7', '3qu', '3tk'], 'standy': ['2oe'], 'stopthesteal': ['2oi'], 'donottellaliwhattodo': ['2oj'], 'acolyte': ['2ol'], 'alliance': ['2ou'], 'white': ['2ou'], 'independenceday': ['2p0'], 'washingtondc': ['2p0'], 'heresylocated': ['2p5'], 'crucifix': ['2p6'], 'plusplusplus': ['2p9'], '+++': ['2p9'], 'shark': ['2pd'], 'fish': ['2pe'], 'puppeteer': ['2pf', '2pg'], 'marionette': ['2pf', '2pg'], 'puppetmaster': ['2pf', '2pg'], 'letthemfight': ['2pi'], 'unoreversecard': ['2pj'], 'pray': ['2pk'], 'knives': ['2pm'], 'swords': ['2pm'], 'didnothingwrong': ['2pq', '2pr', '2qb'], 'dogs': ['2q6'], 'uz': ['2qd'], 'utahzoomer': ['2qd', '2qe', '3mv'], 'newuzpost': ['2qe'], 'crispychicken': ['2qf'], 'censored': ['2qi'], 'fetterman': ['2qm', '2qn', '2qo', '2qp', '2qq', '2r3', '2rf'], 'jail': ['2qu', '2qv'], 'injun': ['2ri', '2rj'], 'headdress': ['2ri', '2rj'], 'getajob': ['2rm'], 'alphabetsoup': ['2rm'], 'brandt': ['2rn'], 'itsraijulol': ['2rn'], 'mickeymouse': ['2s4', '3bf', '3vv'], 'iheartloud': ['2s5'], 'iloveloud': ['2s5'], 'herecomedatboi!!!!!!': ['2s6'], 'oshitwaddup': ['2s6'], 'wakeupbeauty': ['2s7'], 'itstimetobeast': ['2s7'], 'rapping': ['2s9'], 'apple': ['2sa', '40e', '40f', '412', '415', '41c', '41d'], 'curtisyarvin': ['2sc', '3j5'], 'menciousmoldbug': ['2sc', '3j5'], 'nrx': ['2sc'], 'misbehave': ['2sr'], 'kissfoot': ['2st'], 'african': ['2st'], 'baseballmoms': ['2sv'], 'waymorebadass': ['2sv'], 'thanthemafia': ['2sv'], 'zubat': ['2t0'], 'donot': ['2t4'], 'trollin': ['2t7'], 'gayuncle': ['2t9'], 'thissaysalotaboutsociety': ['2ta'], 'herecomedatgary': ['2tb'], 'bestbowlever': ['2td'], 'superpeter': ['2ti'], 'allyourbase': ['2tm'], 'arebelongtous': ['2tm'], 'mlady': ['2tp'], 'fedora': ['2tp'], 'ibagad': ['2tq'], 'pee': ['2tt'], 'trump2024': ['2tu', '2tv'], 'maga': ['2tu', '2tv'], 'whore': ['2u0', '2u7', '2u8', '2u9'], 'ugly': ['2u0', '2u7', '2u8', '2u9'], 'satanist': ['2u0', '2u7', '2u8', '2u9'], 'nowwaitaminute': ['2u3'], 'donottell': ['2ua'], 'whattodo': ['2ua'], 'lucasroom': ['2ue'], 'problem': ['2ui', '3ih'], 'jeffreyepstein': ['2uk'], 'edp445': ['2uk'], 'nemo': ['2um'], 'braces': ['2um'], 'tea': ['2uo'], 'baby': ['2up', '2ut'], 'diaper': ['2up'], 'sambankmanfried': ['2uv', '2v0'], 'hat': ['2v4', '2vd', '3ji'], 'candycane': ['2v4', '2v5', '2vd', '34n'], 'jinglebells': ['2vc'], 'reindeer': ['2vj', '2vk', '2vr', '34t', '34u'], 'snowman': ['2vn', '2vp', '2vu', '2vv', '34q', '36v'], 'elf': ['2vq', '33s', '34k'], 'rudolph': ['2vr'], 'look': ['307', '30d'], 'glare': ['307', '30d'], 'right': ['307'], 'drink': ['30j'], 'americafirsthat': ['30r', '3ot'], 'ax': ['30s', '3p6'], 'hatchet': ['30s'], 'obc': ['30s', '3p6'], 'oldbookclub': ['30s'], 'yoshi': ['30t'], 'revengeofarcade': ['30u'], 'mspacman': ['30u'], 'misspacman': ['30u'], 'ye24': ['311', '314', '33u', '33v', '340', '347', '348'], 'saychristislord': ['315'], 'pepedance': ['317'], 'pet': ['31a', '32m'], 'hotchocolate': ['31b'], 'cocoa': ['31b'], 'pj': ['31e', '38b', '3bc'], 'omg': ['31m', '33l', '351', '3jt', '3m8'], 'jumping': ['320'], 'lamb': ['327'], 'bluecar': ['328'], 'kek': ['32b'], 'iheartu': ['32g', '336', '3ej'], 'milkman': ['32l'], 'nod': ['32t'], 'dropoutbear': ['32u'], 'punch': ['333'], 'johndoyle': ['337', '386', '3s9', '3sa'], 'iloveit': ['33d'], 'runscape': ['33f'], 'defaultcharacter': ['33f'], 'candycanes': ['33g'], 'pressf': ['33h'], 'fpress': ['33h'], 'dead': ['33h'], 'payrespect': ['33h'], 'spillthebeans': ['33j'], 'can': ['33j'], 'ohno': ['33m'], 'benjaminnetanyahu': ['33o'], 'bb': ['33o'], 'net': ['33o', '344'], 'yahoo': ['33o', '344'], 'netandyahoo': ['33o', '344'], 'nettin': ['33o', '344'], 'present': ['33r'], 'gift': ['33r'], 'pulpfiction': ['33t', '3j9'], 'infowars': ['33u', '344'], 'nazi': ['340', '341', '35j', '3ha', '3kb', '3kd', '3ke', '3kf', '3kj', '3kk', '3n4'], 'swastika': ['341', '3ec', '3ha', '3kb', '3kd', '3ke', '3kf', '3kj', '3kk'], 'raeliansymbol': ['341'], 'matrix': ['342'], 'and': ['344'], 'wanghaf': ['345', '346'], 'whiteassniggasgoinghardasfuck': ['345', '346'], 'fashwave': ['348'], 'synthwave': ['348'], 'innout': ['349', '34a'], 'inandout': ['349', '34a'], 'sprite': ['349', '34a', '3ne', '3nf'], 'throw': ['349', '34a'], 'fight': ['349', '34a'], 'thatscrazy': ['34b'], 'manhands': ['34c'], 'boner': ['352', '353', '3f2'], 'ass': ['356'], 'absolutelyharam': ['35b'], 'jordanpeterson': ['35d', '3jn'], 'jbp': ['35d'], 'fuckmyshitup': ['35d'], 'applejuice': ['35f', '3cp'], 'brysongraydidnothingwrong': ['35m'], 'dametucosita': ['35o'], 'alien': ['35o'], 'proudnasashill': ['35q'], 'nigger': ['35r', '416', '419'], 'killmyself': ['35t', '3e6'], 'hank': ['367'], 'transformers': ['368'], 'whitepowerranger': ['36e'], 'salty': ['36g'], 'destiny': ['36j'], 'cuck': ['36j'], 'books': ['36k', '3a9'], 'virginwalk': ['36l'], 'zogslop': ['36m', '3di', '3ep'], 'dramaalert': ['36n'], 'alexstein99': ['371'], 'blackmanonthephone': ['377'], 'mugs': ['37a'], 'swinging': ['37o', '39n'], 'chugging': ['37p'], 'suspicious': ['385', '397'], 'angel': ['38l', '3i9', '3s8', '3u2'], 'halo': ['38l', '3s8', '3u2'], 'suit': ['38s', '3a3'], 'enjoy': ['3aa'], 'andrewtate': ['3ae', '3em'], 'topg': ['3ae'], 'tothecamps': ['3ag', '3ah', '3ai'], 'livereaction': ['3ak'], 'keithwoods': ['3ak', '3bl', '3c1', '3r2'], 'keef': ['3ak', '3bl'], 'foinchewnin': ['3ak'], 'rise': ['3am'], 'nappyheadedhoe': ['3an'], 'wef': ['3ap', '3aq'], 'klauschwab': ['3ap', '3aq'], 'cocaine': ['3b1'], 'coke': ['3b1', '3ma'], 'zelensky': ['3b1'], 'xijinping': ['3b2', '3p4', '3p5'], 'chinese': ['3b2', '3bo'], 'irishflag': ['3b7'], 'wrestler': ['3b8', '3ca', '3cn', '3s2'], 'sheepnomore': ['3b9'], 'pajama': ['3bc'], 'noanime': ['3bd'], 'tuckercarlson': ['3be'], 'wtf': ['3be', '3jt'], 'thasrite': ['3bg'], 'irelandfirst': ['3bl'], 'libertybell': ['3bm'], 'eringobragh': ['3bn', '3d0'], 'lyre': ['3bn', '3d0'], 'chink': ['3bo'], 'qanon': ['3bp'], 'boom': ['3bq'], 'bqqm': ['3bq'], 'deepfried': ['3br', '3bs', '3bt'], 'cofe': ['3bs'], 'sneeds': ['3c3'], 'feedandseed': ['3c3'], 'formerlychucks': ['3c3'], 'mcflurry': ['3c4'], 'riseabovehatecenation': ['3c5', '3c6', '3c7'], 'continuum': ['3c8'], 'mrze': ['3c9'], 'yellowface': ['3c9'], 'letsfuckinggo': ['3c9'], 'ricflair': ['3ca'], 'scarface': ['3cc'], 'alpacino': ['3cc'], 'weareq': ['3cf'], 'wwg1wga': ['3cf'], 'huggin': ['3cg'], 'q': ['3ch'], 'ireland': ['3cq'], 'ethanklein': ['3cr'], 'slob': ['3cr'], 'ethandecline': ['3cr'], 'therock': ['3cs'], 'dwanejohnson': ['3cs'], 'woodsman': ['3cv'], 'irelandflag': ['3d1'], 'irish': ['3d1', '3jf', '3jg', '3jh', '3ji'], 'brain': ['3d6'], 'chud': ['3d7', '3d8'], 'hahahahaha': ['3d9'], 'ifuckinglove': ['3dg'], 'nerdvlogger': ['3dh'], 'coffeeshop': ['3di', '3ep'], 'lytecoin': ['3dj'], 'litecoin': ['3dj'], 'pinkpanther': ['3dm'], 'shutitdown': ['3do'], 'thegoyimknow': ['3do'], 'spooked': ['3dr'], 'toystory': ['3ds'], 'woody': ['3ds'], 'sofuckingbased': ['3e1'], 'aussie': ['3e3'], 'libtards': ['3e5'], 'imgonnakill': ['3e6'], 'niggaplease': ['3e8'], 'rationigger': ['3ec'], 'jeb': ['3ef'], 'fatbitch': ['3ek'], 'gross': ['3ek'], 'shrug': ['3ev'], 'katana': ['3f3'], 'kenny': ['3f5'], 'surprised': ['3fc'], 'grooving': ['3g5'], 'why': ['3g6'], 'whyso': ['3g7'], 'implanning': ['3g8', '3g9'], 'thedeathofnickfuentes': ['3g8', '3g9'], 'balloon': ['3ga', '3gb'], 'babyshrek': ['3gj', '3gk', '3hb', '3hc', '3hv'], 'mute': ['3gq'], 'nosound': ['3gq'], 'mic': ['3gq'], 'thisisfine': ['3gs'], 'nou': ['3h3'], 'homersimpson': ['3h8'], 'bushes': ['3h8'], 'retreat': ['3h8'], 'hiding': ['3h8'], 'backup': ['3h8'], 'naruto': ['3hu'], 'dracula': ['3i5'], 'donatebutton': ['3id'], 'oomfiekill': ['3ie'], 'um': ['3if'], 'okoomfie': ['3if'], 'probrem': ['3ih'], 'youareirish': ['3im'], 'pauseit': ['3io'], 'playit': ['3ip'], 'brittanyw': ['3iq'], 'sotrue': ['3is', '3it', '3iu', '3iv'], 'dilbert': ['3j2', '3kc', '3la'], 'discoball': ['3j6'], 'discolights': ['3j7'], 'discodancing': ['3j8'], 'celebrate': ['3jc'], 'pudding': ['3je'], 'rondesantis': ['3je', '3po', '3pp', '3rf'], 'leprechaun': ['3jf', '3jg', '3ji'], 'stpatricksday': ['3jf', '3jg', '3jh', '3ji', '3jj', '3jk', '3jl', '3jm'], 'saintpatrick': ['3jf', '3jg', '3jh', '3ji', '3jj', '3jk', '3jl', '3jm'], 'threeleafclover': ['3jh'], 'withrespect': ['3jo', '3k6', '3k7', '3k8'], 'kevinmcarthy': ['3jp'], 'kekw': ['3ju'], 'raging': ['3k0'], 'eyeball': ['3k6', '3k7', '3k8'], 'miyo': ['3kb', '3kd', '3ke', '3kf', '3kj', '3kk'], 'scottadams': ['3kc', '3la'], 'ivegotonethatcansee': ['3kg'], 'beardly': ['3kh'], 'falling': ['3kh', '3mb'], 'ball': ['3kl', '3km', '3kn', '3kp', '3ku', '3l3', '3l6', '3l7', '3l8', '3ln'], 'sphere': ['3kl', '3km', '3kn', '3kp', '3ku', '3l3', '3l6', '3l7', '3l8', '3ln'], 'papermario': ['3ko', '3lb', '3lc', '3ld', '3le', '3lf', '3lg', '3lh', '3li', '3lj', '3lk', '3ll', '3lm', '3lp', '3lq', '3lr', '3ls', '3lt', '3lu', '3lv', '3m0', '3m2', '3mf', '3mg', '3mh', '3mi', '3mj', '3mk', '3ml', '3mm', '3mo', '3mp', '3mq', '3mr', '3ms'], 'dragonenergy': ['3kq', '3kr', '3ks', '3kt'], 'l8show': ['3ku', '3r3'], 'sonowimgay': ['3kv', '3l0', '3l1', '3l2'], 'areyousmarterthana5thgrader': ['3l4', '3l5', '3l9'], 'cozytvlogo': ['3l8'], 'toad': ['3lf', '3ls', '3lt', '3lu'], 'goomba': ['3lg', '3lh'], 'koopatroopa': ['3lm', '3lr', '3md'], 'kevinspacey': ['3lo'], 'frankunderwood': ['3lo'], 'houseofcards': ['3lo'], 'squid': ['3lp'], 'boo': ['3lv'], 'statue': ['3m9'], 'soda': ['3ma'], 'falldown': ['3mb'], 'hornyniggadetected': ['3mc'], 'fryingpan': ['3mc'], 'bowser': ['3mo', '3mp'], 'luigi': ['3mr', '3ms'], 'josie': ['3mu'], 'fishtank': ['3mu'], 'nostimming': ['3mu'], 'UZ': ['3mv'], 'legoman': ['3mv'], 'hoodie': ['3n0'], 'ididmypart': ['3n1'], 'egirl': ['3n5', '3na'], 'lavlune': ['3n5', '3na', '3nj', '3nk'], 'posteditagainaward': ['3n6'], '555': ['3n7', '3n8', '3n9'], 'lazereyes': ['3na', '3ne', '3nf'], 'throwing': ['3ne', '3nf'], 'blurry': ['3ng', '3nh'], 'rizz': ['3ni'], 'lav24': ['3nj', '3nk'], 'clownnose': ['3nm'], 'smiley': ['3no'], 'photo': ['3ns'], 'picture': ['3ns'], 'deletid': ['3o1'], 'gnome': ['3o2'], 'jonzherka': ['3o5'], 'godwinson': ['3o7', '3oq'], 'ohmygosh': ['3o8'], 'thatslikesopatheticlike': ['3o8'], 'soy': ['3oa'], 'sonnenrad': ['3ob', '3r4'], 'metokur': ['3oe'], 'circle': ['3ok'], 'dukenukem': ['3om'], 'woodyallen': ['3on'], 'georgewashington': ['3oo'], 'dab': ['3op'], 'morbidlyobese': ['3or'], 'food': ['3os'], 'mary': ['3ov', '3p0', '3p1'], 'winniethepooh': ['3p4', '3p5'], 'popefrancis': ['3pb'], 'erasmuspeshinesmith': ['3pq'], 'eps': ['3pq'], 'teddyfeaser': ['3ps', '3pt', '3pu', '3q5', '3s6'], 'fargo': ['3pv'], 'woodchipper': ['3pv'], 'beard': ['3q0'], 'rizzless': ['3q1'], 'unfuckable': ['3q1'], 'goodnews': ['3q2', '3q3'], 'youremoroccan': ['3q6'], 'ziohazard': ['3q7'], 'pointingup': ['3q8'], 'youlovejews': ['3qc'], 'jonmiller': ['3qf'], 'gamerjon': ['3qf'], 'mirror': ['3qg'], 'wipeit': ['3qg'], 'american': ['3qi'], 'kekistan': ['3qo'], 'np': ['3qq'], 'sippingtea': ['3r1'], 'idontappreciateyou': ['3r6', '3r7', '3r8', '3r9', '3ra'], 'cartoon': ['3r6', '3r7', '3r8', '3r9', '3ra', '413'], 'clipit': ['3rb', '3rc', '3re'], 'prigozhin': ['3rj'], 'davidcarlson': ['3rr'], 'fatretard': ['3rr'], 'downsyndrome': ['3rr'], 'rickflair': ['3s2', '3tm'], 'gladiator': ['3s3'], 'russelcrowe': ['3s3'], 'angrybirds': ['3s4'], 'yourmom': ['3se', '3tu'], '999': ['3si', '3sj'], 'pixelated': ['3sl', '3u6', '402'], 'moneyonline': ['3sm'], 'laffey': ['3sq'], 'telletubbies': ['3ss'], 'socks': ['3t9'], 'techincaldifficulties': ['3ta'], 'jlpplays': ['3tb'], 'leaf': ['3td'], 'confederateflag': ['3ti'], 'taylorswift': ['3tl'], 'romansalute': ['3tl', '40n'], 'brown': ['3tn'], 'malcomx': ['3tr'], 'baptize': ['3tr'], 'baptism': ['3tr'], 'reeee': ['3u7'], 'bike': ['3ud'], 'josephstalin': ['3ul', '3um'], 'fathermikeschmitz': ['3uv'], 'frmike': ['3uv'], 'explode': ['3v9'], 'tuxedo': ['3vb'], 'breakdance': ['3ve'], 'bboy': ['3ve'], 'pussyhat': ['3vj'], 'fantasia': ['3vv'], 'lilwayne': ['400'], 'weezy': ['400'], 'filmnoir': ['401'], 'cools': ['409', '40a'], 'heyapple008': ['40e', '40f', '412', '415', '41d'], 'floppydisk': ['40k'], 'toycar': ['40l'], 'cozycoupe': ['40l'], 'raving': ['40m'], 'genius': ['40p'], 'caveman': ['40q'], 'cape': ['40r'], 'michaeljordan': ['40t'], 'mace': ['411'], 'pepperspray': ['411'], 'ocspray': ['411'], 'engine': ['417'], 'cart': ['418', '419'], 'mod': ['41b'], 'sword': ['41b']}

const GM_getValue = (key, value) =>
  JSON.parse(localStorage.getItem(key) ?? JSON.stringify(value));
const GM_setValue = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

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
  if ((menu = document.querySelector(".z-40.bottom-0"))) {
    let tabs = menu.querySelector(".flex.gap-2");
    tabs.innerHTML = `
<span class="bg-gray-500 font-medium select-none cursor-pointer rounded-tl-sm rounded-tr-sm px-2 py-1 text show-all-stickers">All</span>
<span class="font-medium select-none cursor-pointer rounded-tl-sm rounded-tr-sm px-2 py-1 text only-saved-stickers">Saved</span>`;
    try {
      menu.children[2].replaceWith(
        stickers.content.querySelector("div").cloneNode(true)
      );
    } catch {
      setErrorText("Loading...");
    }
  }
}

function generateSaved() {
  let savedStickers = GM_getValue("savedstickers", []);
  saved.innerHTML = `<div class="h-full bg-gray-500 p-2 overflow-y-auto scrollbar-pretty stickers saved-stickers grid p-2 grid-cols-5 gap-2" style="grid-auto-rows: min-content;"></div>`;
  savedStickers.forEach((e) => {
    let stickerUrl = `${stickerUrlBase}/${e}.webp`;
    saved.content
      .querySelector("div")
      .insertAdjacentHTML(
        "afterbegin",
        `<div sticker-url="${stickerUrl}" sticker-id="${e}" class="cursor-pointer liststicker saved" style="background-image: url('${stickerUrl}')" title=${e}><div class="saved-toggle"></div></div>`
      );
  });
  if ((savedWindow = document.querySelector(".saved-stickers"))) {
    savedWindow.replaceWith(saved.content.querySelector("div").cloneNode(true));
  }
}

function createStickers(array) {
  stickers.innerHTML = `<div class="h-full bg-gray-500 p-2 overflow-y-auto scrollbar-pretty"><input id="sticker-search" class="rounded outline-none w-full border-2 border-gray-600 px-2 py-1" style="font-size: 14px; margin-bottom: 5px;" placeholder="Search sticker code or channel name"></div>`;
  let savedStickers = GM_getValue("savedstickers", []);
  array.forEach((e) => {
    if (e == undefined || e[1] == undefined) return;

    let data = JSON.parse(e[1]);
    stickerUrlBase = data.stickerCDN;
    let userStickerHTML = `<div class="stickercategory">`;
    userStickerHTML += `<span class="username p-2">${e[0]}${
      e[2] ? " - update failed, will retry" : ""
    }</span><br><div class="stickers grid p-2 grid-cols-5 gap-2">`;
    data.stickers.forEach((stk) => {
      let stickerId = stk["_id"];
      let stickerUrl = `${stickerUrlBase}/${stickerId}.webp`;
      let newStickerHTML = `<div sticker-url="${stickerUrl}" sticker-id="${stickerId}" user-id=${
        e[0]
      } class="cursor-pointer liststicker${
        savedStickers.includes(stickerId) ? " saved" : ""
      }" style="background-image: url('${stickerUrl}')" title=${stickerId}><div class="saved-toggle"></div></div>`;
      userStickerHTML += newStickerHTML;
    });
    userStickerHTML += "</div></div>";
    if (
      window.location.pathname.split("/")[1].toLowerCase() == e[0].toLowerCase()
    ) {
      stickers.content
        .querySelector("#sticker-search")
        .insertAdjacentHTML("afterend", userStickerHTML);
    } else {
      stickers.content
        .querySelector("div")
        .insertAdjacentHTML("beforeend", userStickerHTML);
    }
  });
  if (!document.querySelector(".show-all-stickers")) {
    applyStickerHTML();
  }
}

function getUserStickers(user, index) {
  fetch(`https://api.cozy.tv/cache/${user.name}/channelStickers`)
    .then((response) => (response.ok ? response.json() : undefined))
    .then((json) => {
      let isUndefined = json == undefined;
      if (isUndefined) {
        json = { stickers: [] };
      }
      if (user.cardUrl) {
        json.stickers.unshift({
          _id: `../pcrds/${user.cardUrl.split("/").pop().split(".")[0]}`,
        });
      }
      json.stickers.unshift({
        _id: `../av/${user.avatarUrl.split("/").pop().split(".")[0]}`,
      });
      if (
        !isUndefined ||
        stickerList[index] == undefined ||
        stickerList[index][0] != user.displayName
      ) {
        stickerList[index] = [
          user.displayName,
          JSON.stringify(json),
          isUndefined,
        ];
        GM_setValue("stickercache", stickerList);
        createStickers(stickerList);
      }
    });
}

function getStickers() {
  fetch("https://api.cozy.tv/cache/homepage")
    .then((response) => {
      if (!response.ok) {
        setErrorText("Failed to load stickers. Likely rate-limited.");
        return undefined;
      } else {
        return response.json();
      }
    })
    .then((json) => {
      if (json == undefined) {
        return;
      }
      let users = json.users.sort((a, b) =>
        a["followerCount"] < b["followerCount"]
          ? 1
          : a["followerCount"] > b["followerCount"]
          ? -1
          : a["name"] < b["name"]
          ? 1
          : -1
      );
      let newArr = new Array(users.length);
      users.forEach((user, index) => {
        newArr[index] = stickerList.find((e) => e && e[0] == user.displayName);
      });
      stickerList = newArr;
      GM_setValue("stickercache", stickerList);
      let currentUser = window.location.pathname.split("/")[1].toLowerCase();
      if ((found = users.find((e) => e["name"] == currentUser))) {
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

let stickerMenuVisible = false;
let stickerMenuElems = [];
let stickerMenuSelectedIndex = 0;

const inputObserver = new MutationObserver((changes) => {
  let text = changes[0].target.textContent;
  let code = text
    .match(/[\|\:]([A-Za-z0-9])*$/g)
    ?.pop()
    ?.slice(1);
  if (code) {
    const referenceParent =
      changes[0].target.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode;
    if (!document.getElementById("stickermenu")) {
      let stickermenu = document.createElement("div");
      stickermenu.className =
        "h-full bg-gray-500 p-2 overflow-y-auto scrollbar-pretty stickers grid p-2 grid-cols-5 gap-2";
      stickermenu.style.gridAutoRows = "min-content";
      stickermenu.style.maxHeight = "150px";
      stickermenu.id = "stickermenu";
      referenceParent.insertBefore(stickermenu, referenceParent.childNodes[0]);
      stickerMenuVisible = true;
    } else {
      document.getElementById("stickermenu").innerHTML = "";
    }
    stickerMenuSelectedIndex = 0;

    let matches = Object.keys(stickerlabels).filter((codes) =>
      codes.includes(code)
    );
    matches = matches.reduce((a, c) => [...a, ...stickerlabels[c]], []);
    stickerMenuElems = [];
    matches.forEach((code) => {
      address = stickerUrlBase + `/${code}.webp`;
      const glicker = document.createElement("div");
      glicker.setAttribute("sticker-url", address);
      glicker.setAttribute("sticker-id", code);
      glicker.className = "cursor-pointer liststicker inlinesticker";
      glicker.style.backgroundImage = `url('${address}')`;
      glicker.title = code;
      stickermenu.appendChild(glicker);
      stickerMenuElems.push(glicker);
    });
    stickerMenuElems[stickerMenuSelectedIndex].classList.add(
      "border-gray",
      "border-2"
    );
  } else {
    document.getElementById("stickermenu")?.remove();
    stickerMenuVisible = false;
    stickerMenuElems = [];
  }
});

const stickersObserver = new MutationObserver((list) => {
  list.forEach((node) => {
    if (
      node.addedNodes.length > 0 &&
      node.addedNodes[0].classList.contains("w-full")
    ) {
      applyStickerHTML();
    }
  });
});

const chatObserver = new MutationObserver(() => {
  document.querySelectorAll(".chat_sticker").forEach((sticker) => {
    let id = sticker.style.backgroundImage.match(/(?<=\/).*(?=\.webp)/)[0];
    if (id.match(/stk/)) {
      id = id.split("stk/").pop();
    }
    sticker.setAttribute("sticker-id", id);
    sticker.setAttribute("sticker-url", `${stickerUrlBase}/${id}.webp`);
    sticker.setAttribute("title", id);
    sticker.classList.toggle(
      "saved",
      GM_getValue("savedstickers", []).includes(id)
    );
    if (!sticker.querySelector(".saved-toggle")) {
      sticker.insertAdjacentHTML(
        "beforeend",
        `<div class="saved-toggle"></div>`
      );
    }
  });
});

const reloadObserver = new MutationObserver(setObservers);

function setObservers() {
  let poll = window.setInterval(() => {
    if ((chat = document.querySelector(".overflow-x-hidden.h-full"))) {
      clearInterval(poll);
      reloadObserver.disconnect();
      reloadObserver.observe(
        document.querySelector(".flex.flex-col.w-full.overflow-hidden.rounded"),
        {
          childList: true,
        }
      );
      inputObserver.disconnect();
      inputObserver.observe(
        document.querySelector('[contenteditable="true"][enterkeyhint="send"]'),
        { childList: true, characterData: true, subtree: true }
      );
      stickersObserver.disconnect();
      document
        .querySelectorAll("div[contenteditable]")
        .forEach((e) =>
          stickersObserver.observe(e.parentNode.parentNode, { childList: true })
        );
      if ((stickerElem = document.getElementById("stickers"))) {
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

document.addEventListener("keydown", (e) => {
  if (!stickerMenuVisible) return;

  const prev = stickerMenuElems[stickerMenuSelectedIndex];
  if (prev) {
    prev.classList.remove("border-gray", "border-2");
  }

  switch (event.key) {
    case "ArrowLeft":
      stickerMenuSelectedIndex -= 1;
      break;
    case "ArrowRight":
      stickerMenuSelectedIndex += 1;
      break;
    case "ArrowUp":
      stickerMenuSelectedIndex -= 5;
      break;
    case "ArrowDown":
      stickerMenuSelectedIndex += 5;
      break;
    case "Enter":
      const elem = stickerMenuElems[stickerMenuSelectedIndex];
      if (elem) {
        let div = document.querySelector("div[contenteditable=true]");
        elem.click();
        setTimeout(() => {
          div.dispatchEvent(new Event("focus"));
          let range = document.createRange();
          range.selectNodeContents(div);
          range.collapse(false);
          let sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          div.focus();
        }, 0);
      }
      e.preventDefault();
      return;
    default:
      return;
  }

  stickerMenuSelectedIndex = Math.max(
    Math.min(stickerMenuSelectedIndex, stickerMenuElems.length - 1),
    0
  );

  const next = stickerMenuElems[stickerMenuSelectedIndex];
  if (next) {
    next.scrollIntoView();
    next.classList.add("border-gray", "border-2");
  }

  e.preventDefault();
});

document.addEventListener("input", (e) => {
  let t = e.target;
  if (t.id == "sticker-search") {
    document
      .querySelectorAll(".stickercategory div[sticker-id]")
      .forEach((s) => {
        s.style.display =
          s
            .getAttribute("sticker-id")
            .toLowerCase()
            .includes(t.value.toLowerCase().replace("id:", "")) ||
          (!t.value.toLowerCase().startsWith("id:") &&
            s
              .getAttribute("user-id")
              .toLowerCase()
              .includes(t.value.toLowerCase()))
            ? "unset"
            : "none";
      });
    document.querySelectorAll(".stickercategory").forEach((s) => {
      s.style.display = s.querySelector(
        ".liststicker:not([style*='display: none'])"
      )
        ? "block"
        : "none";
    });
  }
});

document.addEventListener("click", (e) => {
  let t = e.target;
  if (
    (t.closest("a") && t.closest("a").href.startsWith("https://cozy")) ||
    t.matches("li.tab-item-outer:last-of-type")
  ) {
    setObservers();
  } else if (
    t.classList.contains("liststicker") ||
    (t.classList.contains("chat_sticker") && e.detail % 2 == 0)
  ) {
    if (t.classList.contains("inlinesticker")) {
      document.querySelector("div[contenteditable]").innerHTML = document
        .querySelector("div[contenteditable]")
        .innerHTML.replace(/[\|\:]([A-Za-z0-9])*$/, "");
      document.querySelector("div[contenteditable]");
    }
    document
      .querySelector("div[contenteditable]")
      .insertAdjacentHTML(
        "beforeend",
        `<img style="user-select: none; display: inline; width: 24px; height: 24px;" src="${t.getAttribute(
          "sticker-url"
        )}" data-sticker="${t.getAttribute("sticker-id")}">`
      );
  } else if (t.classList.contains("show-all-stickers")) {
    t.closest(".z-40.bottom-0").children[2].replaceWith(
      stickers.content.querySelector("div").cloneNode(true)
    );
    document
      .querySelector(".only-saved-stickers")
      .classList.remove("bg-gray-500");
    t.classList.add("bg-gray-500");
  } else if (t.classList.contains("only-saved-stickers")) {
    t.closest(".z-40.bottom-0").children[2].replaceWith(
      saved.content.querySelector("div").cloneNode(true)
    );
    document
      .querySelector(".show-all-stickers")
      .classList.remove("bg-gray-500");
    t.classList.add("bg-gray-500");
  } else if (t.classList.contains("saved-toggle")) {
    let savedList = GM_getValue("savedstickers", []);
    let stickerId = t.parentNode.getAttribute("sticker-id");
    if (t.parentNode.classList.toggle("saved")) {
      if (!savedList.includes(stickerId)) {
        savedList.push(stickerId);
      }
      if (
        (sticker = stickers.content.querySelector(
          `div[sticker-id="${stickerId}"]`
        ))
      ) {
        sticker.classList.add("saved");
      }
      document
        .querySelectorAll(`div[sticker-id="${stickerId}"]`)
        .forEach((e) => e.classList.add("saved"));
    } else {
      saved.content.querySelector(`div[sticker-id="${stickerId}"]`).remove();
      savedList = savedList.filter((i) => i != stickerId);
      if (
        (sticker = stickers.content.querySelector(
          `div[sticker-id="${stickerId}"]`
        ))
      ) {
        sticker.classList.remove("saved");
      }
      document
        .querySelectorAll(`div[sticker-id="${stickerId}"]`)
        .forEach((e) => e.classList.remove("saved"));
    }
    GM_setValue("savedstickers", savedList);
    generateSaved();
  }
});

window.addEventListener("popstate", (e) => {
  if (window.location.pathname != "/") {
    setObservers();
  }
});

document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
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
</style>`
);

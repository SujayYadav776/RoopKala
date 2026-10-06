/* ==========================================================================
   RoopKala catalogue data (view-only: prices shown, nothing purchasable)
   ========================================================================== */
window.RK = (function () {
  'use strict';

  var STORE = {
    name: 'RoopKala',
    tagline: 'Silk, Sujani and the colour of Mithila',
    city: 'Muzaffarpur, Bihar',
    line1: 'RoopKala, Ground Floor, Shastri Maidan Road',
    line2: 'Near Aish Bagh Crossing, Muzaffarpur, Bihar 842001',
    hours: [
      ['Monday to Friday', '10:30 am &ndash; 8:30 pm'],
      ['Saturday &amp; Sunday', '10:00 am &ndash; 9:00 pm'],
      ['Chhath &amp; Diwali week', '9:00 am &ndash; 9:30 pm']
    ]
  };

  // colour key -> swatch hex
  var COLOURS = {
    indigo: '#22314f', maroon: '#7c2231', lychee: '#d9607c', ivory: '#f0e6d5',
    green: '#1f6b4e', mustard: '#d9a524', rose: '#e0a6ac', blue: '#7ba3c9',
    olive: '#6f7a4a', ochre: '#b3762c', beige: '#d8c7a8', lavender: '#b3a8cc',
    mint: '#a8cbb4', peach: '#eab894', grey: '#8c8a86', gold: '#b3873c',
    black: '#241a1c', cream: '#f6efe3', sky: '#a9c6dd', rust: '#a4472c'
  };

  var P = [
    // ---- Kanjivaram-style silks (saree-kanj-1..4)
    { id: 'RK-S-101', img: 'saree-kanj-1', name: 'Neel Kamal Kanchan Silk Saree', cat: 'Sarees', line: 'Pure Silk Sarees', fabric: 'Kanchan silk, zari border', colour: 'indigo', colours: ['indigo', 'maroon', 'green'], size: 'Free size (5.5 m)', occasion: ['Festive', 'Wedding'], mrp: 21900, price: 15330, badge: 'new', stock: 'in', style: 'With blouse piece' },
    { id: 'RK-S-102', img: 'saree-kanj-2', name: 'Rani Baug Silk Saree', line: 'Pure Silk Sarees', cat: 'Sarees', fabric: 'Mulberry silk, temple border', colour: 'maroon', colours: ['maroon', 'indigo', 'mustard'], size: 'Free size (5.5 m)', occasion: ['Wedding', 'Festive'], mrp: 24500, price: 17150, badge: 'best', stock: 'in', style: 'With blouse piece' },
    { id: 'RK-S-103', img: 'saree-kanj-3', name: 'Mayur Kunj Silk Saree', line: 'Pure Silk Sarees', cat: 'Sarees', fabric: 'Kanchan silk, peacock buti', colour: 'green', colours: ['green', 'indigo', 'rose'], size: 'Free size (5.5 m)', occasion: ['Festive', 'Party'], mrp: 22400, price: 14560, badge: 'sale', stock: 'low', style: 'With blouse piece' },
    { id: 'RK-S-104', img: 'saree-kanj-4', name: 'Suneha Silk Saree', line: 'Pure Silk Sarees', cat: 'Sarees', fabric: 'Mulberry silk, contrast pallu', colour: 'mustard', colours: ['mustard', 'maroon', 'olive'], size: 'Free size (5.5 m)', occasion: ['Festive', 'Wedding'], mrp: 20800, price: 20800, badge: null, stock: 'in', style: 'With blouse piece' },

    // ---- Tussar / raw silk (saree-tussar-1..4)
    { id: 'RK-S-111', img: 'saree-tussar-1', name: 'Madhushala Tussar Saree', line: 'Handloom Tussar', cat: 'Sarees', fabric: 'Tussar silk, block-printed border', colour: 'beige', colours: ['beige', 'indigo', 'rust'], size: 'Free size (5.5 m)', occasion: ['Everyday', 'Workwear'], mrp: 9800, price: 6860, badge: 'sale', stock: 'in', style: 'With blouse piece' },
    { id: 'RK-S-112', img: 'saree-tussar-2', name: 'Champa Bahar Tussar Saree', line: 'Handloom Tussar', cat: 'Sarees', fabric: 'Tussar silk, lychee-pink wash', colour: 'rose', colours: ['rose', 'beige', 'maroon'], size: 'Free size (5.5 m)', occasion: ['Festive', 'Everyday'], mrp: 10400, price: 7280, badge: 'new', stock: 'in', style: 'With blouse piece' },
    { id: 'RK-S-113', img: 'saree-tussar-3', name: 'Patra Green Tussar Saree', line: 'Handloom Tussar', cat: 'Sarees', fabric: 'Raw silk, Sujani stitch detail', colour: 'olive', colours: ['olive', 'green', 'beige'], size: 'Free size (5.5 m)', occasion: ['Workwear', 'Everyday'], mrp: 11200, price: 11200, badge: 'excl', stock: 'low', style: 'With blouse piece' },
    { id: 'RK-S-114', img: 'saree-tussar-4', name: 'Haldi Ground Tussar Saree', line: 'Handloom Tussar', cat: 'Sarees', fabric: 'Tussar silk, ochre dip dye', colour: 'ochre', colours: ['ochre', 'mustard', 'rust'], size: 'Free size (5.5 m)', occasion: ['Festive', 'Wedding'], mrp: 10900, price: 7085, badge: 'sale', stock: 'in', style: 'With blouse piece' },

    // ---- Lehenga sets (lehenga-1..4)
    { id: 'RK-L-201', img: 'lehenga-1', name: 'Aaina Lehenga Set', line: 'Bridal & Lehenga', cat: 'Lehenga Sets', fabric: 'Georgette, zardozi thread work', colour: 'rose', colours: ['rose', 'ivory', 'blue'], size: 'S / M / L / XL', occasion: ['Wedding', 'Party'], mrp: 28900, price: 20230, badge: 'new', stock: 'in', style: '3 piece with dupatta' },
    { id: 'RK-L-202', img: 'lehenga-2', name: 'Shahi Nazrana Lehenga Set', line: 'Bridal & Lehenga', cat: 'Lehenga Sets', fabric: 'Silk blend, gota and sequin', colour: 'maroon', colours: ['maroon', 'gold', 'rose'], size: 'S / M / L / XL', occasion: ['Wedding'], mrp: 34500, price: 24150, badge: 'best', stock: 'low', style: '3 piece with dupatta' },
    { id: 'RK-L-203', img: 'lehenga-3', name: 'Bijli Lehenga Set', line: 'Bridal & Lehenga', cat: 'Lehenga Sets', fabric: 'Net overlay, mirror work', colour: 'blue', colours: ['blue', 'sky', 'ivory'], size: 'XS / S / M / L', occasion: ['Party', 'Wedding'], mrp: 26400, price: 17160, badge: 'sale', stock: 'in', style: '3 piece with dupatta' },
    { id: 'RK-L-204', img: 'lehenga-4', name: 'Nazuk Ivory Lehenga Set', line: 'Bridal & Lehenga', cat: 'Lehenga Sets', fabric: 'Raw silk, pearl embroidery', colour: 'ivory', colours: ['ivory', 'gold', 'rose'], size: 'S / M / L / XL', occasion: ['Wedding', 'Reception'], mrp: 31200, price: 21840, badge: 'excl', stock: 'in', style: '3 piece with dupatta' },

    // ---- Kurta & co-ord (kurta-1..4)
    { id: 'RK-K-301', img: 'kurta-1', name: 'Pudina Co-ord Set', line: 'Kurta & Co-ord', cat: 'Kurta & Co-ord', fabric: 'Cotton silk, resham neckline', colour: 'mint', colours: ['mint', 'ivory', 'peach'], size: 'S / M / L / XL / XXL', occasion: ['Everyday', 'Workwear'], mrp: 5400, price: 3780, badge: 'sale', stock: 'in', style: '3 piece set' },
    { id: 'RK-K-302', img: 'kurta-2', name: 'Gauri Anarkali Set', line: 'Kurta & Co-ord', cat: 'Kurta & Co-ord', fabric: 'Rayon, flared anarkali', colour: 'lavender', colours: ['lavender', 'rose', 'indigo'], size: 'S / M / L / XL', occasion: ['Festive', 'Party'], mrp: 6200, price: 4340, badge: 'new', stock: 'in', style: '2 piece with dupatta' },
    { id: 'RK-K-303', img: 'kurta-3', name: 'Aam Raat Kurta Set', line: 'Kurta & Co-ord', cat: 'Kurta & Co-ord', fabric: 'Slub cotton, chikankari inspired', colour: 'peach', colours: ['peach', 'cream', 'mint'], size: 'S / M / L / XL / XXL', occasion: ['Everyday', 'Workwear'], mrp: 4900, price: 3185, badge: 'best', stock: 'in', style: '3 piece set' },
    { id: 'RK-K-304', img: 'kurta-4', name: 'Raat Neel Kurta Set', line: 'Kurta & Co-ord', cat: 'Kurta & Co-ord', fabric: 'Chanderi, zari buti', colour: 'indigo', colours: ['indigo', 'black', 'gold'], size: 'S / M / L / XL', occasion: ['Party', 'Festive'], mrp: 7400, price: 7400, badge: null, stock: 'low', style: '2 piece with dupatta' },

    // ---- Salwar suits (salwar-1..4)
    { id: 'RK-A-401', img: 'salwar-1', name: 'Gulnar Salwar Suit', line: 'Salwar Suits', cat: 'Salwar Suits', fabric: 'Printed cotton silk', colour: 'rose', colours: ['rose', 'beige', 'ochre'], size: 'S / M / L / XL / XXL', occasion: ['Everyday'], mrp: 4200, price: 2940, badge: 'sale', stock: 'in', style: '3 piece with dupatta' },
    { id: 'RK-A-402', img: 'salwar-2', name: 'Aakash Salwar Suit', line: 'Salwar Suits', cat: 'Salwar Suits', fabric: 'Rayon print, piped edges', colour: 'sky', colours: ['sky', 'blue', 'white'], size: 'S / M / L / XL', occasion: ['Everyday', 'Workwear'], mrp: 3900, price: 3900, badge: null, stock: 'in', style: '3 piece with dupatta' },
    { id: 'RK-A-403', img: 'salwar-3', name: 'Haldi Patra Salwar Suit', line: 'Salwar Suits', cat: 'Salwar Suits', fabric: 'Cotton silk, phulkari stitch', colour: 'mustard', colours: ['mustard', 'rust', 'green'], size: 'S / M / L / XL / XXL', occasion: ['Festive'], mrp: 5100, price: 3570, badge: 'best', stock: 'in', style: '3 piece with dupatta' },
    { id: 'RK-A-404', img: 'salwar-4', name: 'Zaitun Salwar Suit', line: 'Salwar Suits', cat: 'Salwar Suits', fabric: 'Linen blend, thread work', colour: 'olive', colours: ['olive', 'grey', 'beige'], size: 'M / L / XL / XXL', occasion: ['Workwear', 'Everyday'], mrp: 4600, price: 3220, badge: 'sale', stock: 'out', style: '3 piece with dupatta' },

    // ---- Dress materials & blouses (fabric-1..4)
    { id: 'RK-D-501', img: 'fabric-1', name: 'Kanchan Unstitched Dress Material', line: 'Dress Materials', cat: 'Dress Materials', fabric: '2.5 m silk blend + 0.9 m lining', colour: 'maroon', colours: ['maroon', 'beige', 'gold'], size: 'Unstitched', occasion: ['Festive', 'Wedding'], mrp: 6900, price: 4830, badge: 'sale', stock: 'in', style: 'Unstitched, 3 m total' },
    { id: 'RK-D-502', img: 'fabric-2', name: 'Surma Silk Blend Dress Material', line: 'Dress Materials', cat: 'Dress Materials', fabric: '2.6 m art silk + blouse piece', colour: 'indigo', colours: ['indigo', 'black', 'blue'], size: 'Unstitched', occasion: ['Party', 'Festive'], mrp: 7800, price: 5460, badge: 'new', stock: 'in', style: 'Unstitched, 3.5 m total' },
    { id: 'RK-D-503', img: 'fabric-3', name: 'Mogra Tussar Blouse Piece', line: 'Blouses', cat: 'Blouses', fabric: '0.8 m tussar, embroidered yoke', colour: 'cream', colours: ['cream', 'rose', 'gold'], size: 'Bust 32 to 40 in', occasion: ['Festive', 'Wedding'], mrp: 3200, price: 2240, badge: 'excl', stock: 'low', style: 'Ready stitched' },
    { id: 'RK-D-504', img: 'fabric-4', name: 'Rangoli Cotton Silk Dress Material', line: 'Dress Materials', cat: 'Dress Materials', fabric: '2.4 m cotton silk + dupatta', colour: 'green', colours: ['green', 'ochre', 'olive'], size: 'Unstitched', occasion: ['Everyday', 'Workwear'], mrp: 4400, price: 2860, badge: 'sale', stock: 'in', style: 'Unstitched, 3 m total' }
  ];

  var CATS = ['Sarees', 'Lehenga Sets', 'Kurta & Co-ord', 'Salwar Suits', 'Dress Materials', 'Blouses'];
  var OCCASIONS = ['Everyday', 'Workwear', 'Festive', 'Party', 'Wedding'];
  var LINES = {
    'Sarees': ['Pure Silk Sarees', 'Handloom Tussar'],
    'Lehenga Sets': ['Bridal & Lehenga'],
    'Kurta & Co-ord': ['Kurta & Co-ord'],
    'Salwar Suits': ['Salwar Suits'],
    'Dress Materials': ['Dress Materials'],
    'Blouses': ['Blouses']
  };

  // derive colour name list actually used
  var usedColours = [];
  P.forEach(function (p) {
    if (usedColours.indexOf(p.colour) === -1) usedColours.push(p.colour);
  });
  usedColours.sort();

  function rupees(n) {
    // Indian digit grouping: 15,330 / 1,23,456
    var s = String(Math.round(n));
    if (s.length <= 3) return s;
    var last3 = s.slice(-3);
    var rest = s.slice(0, -3);
    return rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + last3;
  }

  function money(n) { return '\u20B9' + rupees(n); }

  function pct(p) { return p.mrp > p.price ? Math.round((1 - p.price / p.mrp) * 100) : 0; }

  function byId(id) {
    for (var i = 0; i < P.length; i++) { if (P[i].id === id) return P[i]; }
    return null;
  }

  function siblings(p, n) {
    return P.filter(function (q) { return q.cat === p.cat && q.id !== p.id; }).slice(0, n || 4);
  }

  function badgeLabel(b) {
    return { new: 'New Season', sale: 'Sale', best: 'Best Seller', excl: 'Store Exclusive' }[b] || '';
  }

  function stockLabel(s) {
    return { in: 'In store', low: 'Few left', out: 'Made to order' }[s] || '';
  }

  // Render one product card (shared by home + listing)
  function cardHTML(p, opts) {
    opts = opts || {};
    var d = pct(p), href = opts.href || ('product.html?id=' + p.id);
    var sw = p.colours.slice(0, 3).map(function (c) {
      return '<i style="background:' + (COLOURS[c] || '#ccc') + '"></i>';
    }).join('');
    return '' +
      '<article class="p-card rv" data-id="' + p.id + '">' +
        '<div class="p-card__media">' +
          (p.badge ? '<span class="p-card__badge p-card__badge--' + p.badge + '">' + badgeLabel(p.badge) + '</span>' : '') +
          '<button class="p-card__wish" type="button" aria-label="Save ' + p.name + ' to your lookbook" data-wish="' + p.id + '">' +
            '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.6-7-9.6A3.9 3.9 0 0 1 12 7a3.9 3.9 0 0 1 7 3.4C19 15.4 12 20 12 20z"/></svg>' +
          '</button>' +
          '<a class="p-card__link" href="' + href + '" aria-label="View ' + p.name + '">' +
            '<img src="assets/img/' + p.img + '.jpg" alt="' + p.name + ' &mdash; ' + p.fabric + '" loading="lazy" width="819" height="1228">' +
          '</a>' +
          '<div class="p-card__quick"><span>View piece</span><span class="sw">' + sw + '</span></div>' +
        '</div>' +
        '<div class="p-card__body">' +
          '<span class="p-card__cat">' + p.line + '</span>' +
          '<h3 class="p-card__name"><a href="' + href + '">' + p.name + '</a></h3>' +
          '<span class="p-card__meta">' + p.size + '</span>' +
          '<div class="p-card__price">' +
            '<span class="price' + (d ? ' price--sale' : '') + '">' + money(p.price) + '</span>' +
            (d ? '<span class="mrp">' + money(p.mrp) + '</span><span class="off">' + d + '% off</span>' : '') +
          '</div>' +
          '<div class="p-card__foot">' +
            '<span class="stock' + (p.stock === 'low' ? ' stock--low' : p.stock === 'out' ? ' stock--out' : '') + '"><i></i>' + stockLabel(p.stock) + '</span>' +
            '<span class="p-card__ref">' + p.id + '</span>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  return {
    STORE: STORE, COLOURS: COLOURS, PRODUCTS: P, CATS: CATS, OCCASIONS: OCCASIONS,
    LINES: LINES, usedColours: usedColours,
    money: money, rupees: rupees, pct: pct, byId: byId, siblings: siblings,
    badgeLabel: badgeLabel, stockLabel: stockLabel, cardHTML: cardHTML
  };
})();

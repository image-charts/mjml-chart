'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /**
                    * GENERATED-CODE
                    *
                    * Beware don't edit `index.js` it was automatically generated with `npm run update`, edit `scripts/templates/component.js.tmpl` instead.
                    */

var _mjmlCore = require('mjml-core');

var _mjmlValidator = require('mjml-validator');

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _memoize = require('lodash/memoize');

var _memoize2 = _interopRequireDefault(_memoize);

var _toNumber = require('lodash/toNumber');

var _toNumber2 = _interopRequireDefault(_toNumber);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _mjmlValidator.registerDependencies)({
  // Tell the validator which tags are allowed as our component's parent
  'mj-hero': ['mj-chart'],
  'mj-column': ['mj-chart'],
  // Tell the validator which tags are allowed as our component's children
  'mj-chart': []
});

var imageChartsParameters = [{
  "name": "cht",
  "examples": ["bvg", "p"],
  "required": true,
  "enum": ["bvs", "bvg", "bhs", "bhg", "bvo", "p", "p3", "pc", "pd", "ls", "lc", "lxy", "ls:nda", "lc:nda", "lxy:nda", "pa", "bb", "gv", "gv:dot", "gv:neato", "gv:circo", "gv:fdp", "gv:osage", "gv:twopi", "qr", "r"]
}, {
  "name": "chd",
  "pattern": "^(([at]\\d*:(?:[\\-0-9_\\.]*[,|])*[\\-0-9_\\.]*)|(s\\d*:[a-z0-9_,]+)|(e\\d*:[a-z0-9_,-\\.]+))$",
  "examples": ["a:-100,200.5,75.55,110", "t:10,20,30|15,25,35", "s:BTb19_,Mn5tzb", "e:BaPoqM2s,-A__RMD6"]
}, {
  "name": "chds",
  "pattern": "a|([0-9\\-],?)+",
  "examples": ["-80,140"],
  "required": false
}, {
  "name": "choe",
  "examples": ["UTF-8"],
  "enum": ["UTF-8"]
}, {
  "name": "chld",
  "pattern": "^[LMQH]{1}(?:\\|[0-9]+)?$",
  "examples": ["L|4", "M|10", "Q|5", "H|18"]
}, {
  "name": "chxr",
  "pattern": "^(?:(?:[0-9-.]+)(?:,(?:[0-9-.]+)){2,3}\\|?)+$",
  "examples": ["0,0,200", "0,10,50,5", "0,0,500|1,0,200"],
  "required": false
}, {
  "name": "chof",
  "examples": [".png", ".svg", ".gif"],
  "required": false
}, {
  "name": "chs",
  "pattern": "^[1-9][0-9]{0,2}x[1-9][0-9]{0,2}$",
  "examples": ["400x400"]
}, {
  "name": "chdl",
  "pattern": "^(?:[^\\|]*\\|?)+$",
  "examples": ["NASDAQ|FTSE100|DOW"],
  "required": false
}, {
  "name": "chdls",
  "pattern": "^[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?(?:,[0-9]+)?$",
  "examples": ["9e9e9e,17"],
  "required": false
}, {
  "name": "chg",
  "pattern": "^(?:[0-9.]+)(?:,(?:[0-9.]+)+){0,5}?(?:,[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?)?$",
  "examples": ["1,1", "0,1,1,5", "1,1,FF00FF", "1,1,1,1,CECECE"],
  "required": false
}, {
  "name": "chco",
  "pattern": "^([0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?,?\\|?)+$",
  "examples": ["FFC48C", "FF0000,00FF00,0000FF"],
  "required": false
}, {
  "name": "chtt",
  "pattern": "^[a-z0-9sW -⟯一-龿぀-ゟ゠-ヿ⺀-⿕㆐-㆟㐀-䶿一-鿌豈-節]+$",
  "examples": ["My beautiful chart"],
  "required": false
}, {
  "name": "chts",
  "pattern": "^([0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?),[0-9]+,?[lcr]?(,(ABeeZee|Abel|Abhaya Libre|Abril Fatface|Aclonica|Acme|Actor|Adamina|Advent Pro|Aguafina Script|Akronim|Aladin|Aldrich|Alef|Alegreya|Alegreya SC|Alegreya Sans|Alegreya Sans SC|Aleo|Alex Brush|Alfa Slab One|Alice|Alike|Alike Angular|Allan|Allerta|Allerta Stencil|Allura|Almarai|Almendra|Almendra Display|Almendra SC|Amarante|Amaranth|Amatic SC|Amethysta|Amiko|Amiri|Amita|Anaheim|Andada|Andika|Angkor|Annie Use Your Telescope|Anonymous Pro|Antic|Antic Didone|Antic Slab|Anton|Arapey|Arbutus|Arbutus Slab|Architects Daughter|Archivo|Archivo Black|Archivo Narrow|Aref Ruqaa|Arima Madurai|Arimo|Arizonia|Armata|Arsenal|Artifika|Arvo|Arya|Asap|Asap Condensed|Asar|Asset|Assistant|Astloch|Asul|Athiti|Atma|Atomic Age|Aubrey|Audiowide|Autour One|Average|Average Sans|Averia Gruesa Libre|Averia Libre|Averia Sans Libre|Averia Serif Libre|B612|B612 Mono|Bad Script|Bahiana|Bahianita|Bai Jamjuree|Baloo|Baloo Bhai|Baloo Bhaijaan|Baloo Bhaina|Baloo Chettan|Baloo Da|Baloo Paaji|Baloo Tamma|Baloo Tammudu|Baloo Thambi|Balthazar|Bangers|Barlow|Barlow Condensed|Barlow Semi Condensed|Barriecito|Barrio|Basic|Battambang|Baumans|Bayon|Be Vietnam|Belgrano|Bellefair|Belleza|BenchNine|Bentham|Berkshire Swash|Beth Ellen|Bevan|Big Shoulders Display|Big Shoulders Text|Bigelow Rules|Bigshot One|Bilbo|Bilbo Swash Caps|BioRhyme|BioRhyme Expanded|Biryani|Bitter|Black And White Picture|Black Han Sans|Black Ops One|Blinker|Bokor|Bonbon|Boogaloo|Bowlby One|Bowlby One SC|Brawler|Bree Serif|Bubblegum Sans|Bubbler One|Buda|Buenard|Bungee|Bungee Hairline|Bungee Inline|Bungee Outline|Bungee Shade|Butcherman|Butterfly Kids|Cabin|Cabin Condensed|Cabin Sketch|Caesar Dressing|Cagliostro|Cairo|Calligraffitti|Cambay|Cambo|Candal|Cantarell|Cantata One|Cantora One|Capriola|Cardo|Carme|Carrois Gothic|Carrois Gothic SC|Carter One|Catamaran|Caudex|Caveat|Caveat Brush|Cedarville Cursive|Ceviche One|Chakra Petch|Changa|Changa One|Chango|Charm|Charmonman|Chathura|Chau Philomene One|Chela One|Chelsea Market|Chenla|Cherry Cream Soda|Cherry Swash|Chewy|Chicle|Chilanka|Chivo|Chonburi|Cinzel|Cinzel Decorative|Clicker Script|Coda|Coda Caption|Codystar|Coiny|Combo|Comfortaa|Coming Soon|Concert One|Condiment|Content|Contrail One|Convergence|Cookie|Copse|Corben|Cormorant|Cormorant Garamond|Cormorant Infant|Cormorant SC|Cormorant Unicase|Cormorant Upright|Courgette|Cousine|Coustard|Covered By Your Grace|Crafty Girls|Creepster|Crete Round|Crimson Pro|Crimson Text|Croissant One|Crushed|Cuprum|Cute Font|Cutive|Cutive Mono|DM Sans|DM Serif Display|DM Serif Text|Damion|Dancing Script|Dangrek|Darker Grotesque|David Libre|Dawning of a New Day|Days One|Dekko|Delius|Delius Swash Caps|Delius Unicase|Della Respira|Denk One|Devonshire|Dhurjati|Didact Gothic|Diplomata|Diplomata SC|Do Hyeon|Dokdo|Domine|Donegal One|Doppio One|Dorsa|Dosis|Dr Sugiyama|Duru Sans|Dynalight|EB Garamond|Eagle Lake|East Sea Dokdo|Eater|Economica|Eczar|El Messiri|Electrolize|Elsie|Elsie Swash Caps|Emblema One|Emilys Candy|Encode Sans|Encode Sans Condensed|Encode Sans Expanded|Encode Sans Semi Condensed|Encode Sans Semi Expanded|Engagement|Englebert|Enriqueta|Erica One|Esteban|Euphoria Script|Ewert|Exo|Exo 2|Expletus Sans|Fahkwang|Fanwood Text|Farro|Farsan|Fascinate|Fascinate Inline|Faster One|Fasthand|Fauna One|Faustina|Federant|Federo|Felipa|Fenix|Finger Paint|Fira Code|Fira Mono|Fira Sans|Fira Sans Condensed|Fira Sans Extra Condensed|Fjalla One|Fjord One|Flamenco|Flavors|Fondamento|Fontdiner Swanky|Forum|Francois One|Frank Ruhl Libre|Freckle Face|Fredericka the Great|Fredoka One|Freehand|Fresca|Frijole|Fruktur|Fugaz One|GFS Didot|GFS Neohellenic|Gabriela|Gaegu|Gafata|Galada|Galdeano|Galindo|Gamja Flower|Gayathri|Gentium Basic|Gentium Book Basic|Geo|Geostar|Geostar Fill|Germania One|Gidugu|Gilda Display|Give You Glory|Glass Antiqua|Glegoo|Gloria Hallelujah|Goblin One|Gochi Hand|Gorditas|Gothic A1|Goudy Bookletter 1911|Graduate|Grand Hotel|Gravitas One|Great Vibes|Grenze|Griffy|Gruppo|Gudea|Gugi|Gurajada|Habibi|Halant|Hammersmith One|Hanalei|Hanalei Fill|Handlee|Hanuman|Happy Monkey|Harmattan|Headland One|Heebo|Henny Penny|Hepta Slab|Herr Von Muellerhoff|Hi Melody|Hind|Hind Guntur|Hind Madurai|Hind Siliguri|Hind Vadodara|Holtwood One SC|Homemade Apple|Homenaje|IBM Plex Mono|IBM Plex Sans|IBM Plex Sans Condensed|IBM Plex Serif|IM Fell DW Pica|IM Fell DW Pica SC|IM Fell Double Pica|IM Fell Double Pica SC|IM Fell English|IM Fell English SC|IM Fell French Canon|IM Fell French Canon SC|IM Fell Great Primer|IM Fell Great Primer SC|Iceberg|Iceland|Imprima|Inconsolata|Inder|Indie Flower|Inika|Inknut Antiqua|Irish Grover|Istok Web|Italiana|Italianno|Itim|Jacques Francois|Jacques Francois Shadow|Jaldi|Jim Nightshade|Jockey One|Jolly Lodger|Jomhuria|Jomolhari|Josefin Sans|Josefin Slab|Joti One|Jua|Judson|Julee|Julius Sans One|Junge|Jura|Just Another Hand|Just Me Again Down Here|K2D|Kadwa|Kalam|Kameron|Kanit|Kantumruy|Karla|Karma|Katibeh|Kaushan Script|Kavivanar|Kavoon|Kdam Thmor|Keania One|Kelly Slab|Kenia|Khand|Khmer|Khula|Kirang Haerang|Kite One|Knewave|KoHo|Kodchasan|Kosugi|Kosugi Maru|Kotta One|Koulen|Kranky|Kreon|Kristi|Krona One|Krub|Kumar One|Kumar One Outline|Kurale|La Belle Aurore|Lacquer|Laila|Lakki Reddy|Lalezar|Lancelot|Lateef|Lato|League Script|Leckerli One|Ledger|Lekton|Lemon|Lemonada|Lexend Deca|Lexend Exa|Lexend Giga|Lexend Mega|Lexend Peta|Lexend Tera|Lexend Zetta|Libre Barcode 128|Libre Barcode 128 Text|Libre Barcode 39|Libre Barcode 39 Extended|Libre Barcode 39 Extended Text|Libre Barcode 39 Text|Libre Baskerville|Libre Caslon Display|Libre Caslon Text|Libre Franklin|Life Savers|Lilita One|Lily Script One|Limelight|Linden Hill|Literata|Liu Jian Mao Cao|Livvic|Lobster|Lobster Two|Londrina Outline|Londrina Shadow|Londrina Sketch|Londrina Solid|Long Cang|Lora|Love Ya Like A Sister|Loved by the King|Lovers Quarrel|Luckiest Guy|Lusitana|Lustria|M PLUS 1p|M PLUS Rounded 1c|Ma Shan Zheng|Macondo|Macondo Swash Caps|Mada|Magra|Maiden Orange|Maitree|Major Mono Display|Mako|Mali|Mallanna|Mandali|Manjari|Mansalva|Manuale|Marcellus|Marcellus SC|Marck Script|Margarine|Markazi Text|Marko One|Marmelad|Martel|Martel Sans|Marvel|Mate|Mate SC|Maven Pro|McLaren|Meddon|MedievalSharp|Medula One|Meera Inimai|Megrim|Meie Script|Merienda|Merienda One|Merriweather|Merriweather Sans|Metal|Metal Mania|Metamorphous|Metrophobic|Michroma|Milonga|Miltonian|Miltonian Tattoo|Mina|Miniver|Miriam Libre|Mirza|Miss Fajardose|Mitr|Modak|Modern Antiqua|Mogra|Molengo|Molle|Monda|Monofett|Monoton|Monsieur La Doulaise|Montaga|Montez|Montserrat|Montserrat Alternates|Montserrat Subrayada|Moul|Moulpali|Mountains of Christmas|Mouse Memoirs|Mr Bedfort|Mr Dafoe|Mr De Haviland|Mrs Saint Delafield|Mrs Sheppards|Mukta|Mukta Mahee|Mukta Malar|Mukta Vaani|Muli|Mystery Quest|NTR|Nanum Brush Script|Nanum Gothic|Nanum Gothic Coding|Nanum Myeongjo|Nanum Pen Script|Neucha|Neuton|New Rocker|News Cycle|Niconne|Niramit|Nixie One|Nobile|Nokora|Norican|Nosifer|Notable|Nothing You Could Do|Noticia Text|Noto Sans|Noto Sans HK|Noto Sans JP|Noto Sans KR|Noto Sans SC|Noto Sans TC|Noto Serif|Noto Serif JP|Noto Serif KR|Noto Serif SC|Noto Serif TC|Nova Cut|Nova Flat|Nova Mono|Nova Oval|Nova Round|Nova Script|Nova Slim|Nova Square|Numans|Nunito|Nunito Sans|Odor Mean Chey|Offside|Old Standard TT|Oldenburg|Oleo Script|Oleo Script Swash Caps|Open Sans|Open Sans Condensed|Oranienbaum|Orbitron|Oregano|Orienta|Original Surfer|Oswald|Over the Rainbow|Overlock|Overlock SC|Overpass|Overpass Mono|Ovo|Oxygen|Oxygen Mono|PT Mono|PT Sans|PT Sans Caption|PT Sans Narrow|PT Serif|PT Serif Caption|Pacifico|Padauk|Palanquin|Palanquin Dark|Pangolin|Paprika|Parisienne|Passero One|Passion One|Pathway Gothic One|Patrick Hand|Patrick Hand SC|Pattaya|Patua One|Pavanam|Paytone One|Peddana|Peralta|Permanent Marker|Petit Formal Script|Petrona|Philosopher|Piedra|Pinyon Script|Pirata One|Plaster|Play|Playball|Playfair Display|Playfair Display SC|Podkova|Poiret One|Poller One|Poly|Pompiere|Pontano Sans|Poor Story|Poppins|Port Lligat Sans|Port Lligat Slab|Pragati Narrow|Prata|Preahvihear|Press Start 2P|Pridi|Princess Sofia|Prociono|Prompt|Prosto One|Proza Libre|Puritan|Purple Purse|Quando|Quantico|Quattrocento|Quattrocento Sans|Questrial|Quicksand|Quintessential|Qwigley|Racing Sans One|Radley|Rajdhani|Rakkas|Raleway|Raleway Dots|Ramabhadra|Ramaraja|Rambla|Rammetto One|Ranchers|Rancho|Ranga|Rasa|Rationale|Ravi Prakash|Red Hat Display|Red Hat Text|Redressed|Reem Kufi|Reenie Beanie|Revalia|Rhodium Libre|Ribeye|Ribeye Marrow|Righteous|Risque|Roboto|Roboto Condensed|Roboto Mono|Roboto Slab|Rochester|Rock Salt|Rokkitt|Romanesco|Ropa Sans|Rosario|Rosarivo|Rouge Script|Rozha One|Rubik|Rubik Mono One|Ruda|Rufina|Ruge Boogie|Ruluko|Rum Raisin|Ruslan Display|Russo One|Ruthie|Rye|Sacramento|Sahitya|Sail|Saira|Saira Condensed|Saira Extra Condensed|Saira Semi Condensed|Saira Stencil One|Salsa|Sanchez|Sancreek|Sansita|Sarabun|Sarala|Sarina|Sarpanch|Satisfy|Sawarabi Gothic|Sawarabi Mincho|Scada|Scheherazade|Schoolbell|Scope One|Seaweed Script|Secular One|Sedgwick Ave|Sedgwick Ave Display|Sevillana|Seymour One|Shadows Into Light|Shadows Into Light Two|Shanti|Share|Share Tech|Share Tech Mono|Shojumaru|Short Stack|Shrikhand|Siemreap|Sigmar One|Signika|Signika Negative|Simonetta|Single Day|Sintony|Sirin Stencil|Six Caps|Skranji|Slabo 13px|Slabo 27px|Slackey|Smokum|Smythe|Sniglet|Snippet|Snowburst One|Sofadi One|Sofia|Song Myung|Sonsie One|Sorts Mill Goudy|Source Code Pro|Source Sans Pro|Source Serif Pro|Space Mono|Special Elite|Spectral|Spectral SC|Spicy Rice|Spinnaker|Spirax|Squada One|Sree Krushnadevaraya|Sriracha|Srisakdi|Staatliches|Stalemate|Stalinist One|Stardos Stencil|Stint Ultra Condensed|Stint Ultra Expanded|Stoke|Strait|Stylish|Sue Ellen Francisco|Suez One|Sumana|Sunflower|Sunshiney|Supermercado One|Sura|Suranna|Suravaram|Suwannaphum|Swanky and Moo Moo|Syncopate|Tajawal|Tangerine|Taprom|Tauri|Taviraj|Teko|Telex|Tenali Ramakrishna|Tenor Sans|Text Me One|Thasadith|The Girl Next Door|Tienne|Tillana|Timmana|Tinos|Titan One|Titillium Web|Trade Winds|Trirong|Trocchi|Trochut|Trykker|Tulpen One|Turret Road|Ubuntu|Ubuntu Condensed|Ubuntu Mono|Ultra|Uncial Antiqua|Underdog|Unica One|UnifrakturCook|UnifrakturMaguntia|Unkempt|Unlock|Unna|VT323|Vampiro One|Varela|Varela Round|Vast Shadow|Vesper Libre|Vibes|Vibur|Vidaloka|Viga|Voces|Volkhov|Vollkorn|Vollkorn SC|Voltaire|Waiting for the Sunrise|Wallpoet|Walter Turncoat|Warnes|Wellfleet|Wendy One|Wire One|Work Sans|Yanone Kaffeesatz|Yantramanav|Yatra One|Yellowtail|Yeon Sung|Yeseva One|Yesteryear|Yrsa|ZCOOL KuaiLe|ZCOOL QingKe HuangYou|ZCOOL XiaoWei|Zeyada|Zhi Mang Xing|Zilla Slab|Zilla Slab Highlight))?(,(normal|italic))?$",
  "examples": ["00FF00,17"],
  "required": false
}, {
  "name": "chxt",
  "pattern": "^(?:[xytr])(,(?:[xytr]))*$",
  "examples": ["y", "x,y", "x,x,y", "x,y,t,r,t"],
  "required": false
}, {
  "name": "chxl",
  "pattern": "^\\|?[0-9]+:\\|(?:[^\\|]*\\|?)+",
  "examples": ["0:|Jan|July|Jan", "0:|Jan|July|Jan|1|10|20|30"],
  "required": false
}, {
  "name": "chxs",
  "pattern": "^^(?:[0-9]+(?:N[^\\*]*\\*(?:[f|p|e]|(?:c[a-z]{3}))?(?:[0-9]+)?(?:[zs]{1,2}?)?(?:[x|y])?\\*(?:[^,]*)?)?(?:,[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?)?(?:,[0-9.]+(?:,-?[0|1](?:,(?:(?:[l|t]t?)|_)(?:,[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?(?:,[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?)?)?)?)?)?(?:,(?:s))?(?:,(?:((?:min|max)[-0-9]{1,3}){1,2}))?\\|?)+$",
  "examples": ["1,0000DD", "1N*cUSD*Mil,FF0000", "1N*cEUR*,FF0000", "2,0000DD,13,0,t", "0N*p*per-month,0000FF", "0N*e*,000000|1N*cUSD*Mil,FF0000|2N*2sz*,0000FF"],
  "required": false
}, {
  "name": "chm",
  "pattern": "^(?:b|B),[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?,\\d+,\\d+,0|(N|N[^\\*]*\\*(?:[f|p|e]|(?:c[a-z]{3}))?(?:[0-9]+)?(?:[zs]{1,2}?)?(?:[x|y])?\\*(?:[^,]*)?),[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?,\\d+,(?:-?\\d+(?:(?::-?\\d+(?::-?\\d+)?)?|(?:\\.\\d+)))?,\\d+((,(\\d+)?)?(,(.?(s|c|e):?:?))?(,?(ABeeZee|Abel|Abhaya Libre|Abril Fatface|Aclonica|Acme|Actor|Adamina|Advent Pro|Aguafina Script|Akronim|Aladin|Aldrich|Alef|Alegreya|Alegreya SC|Alegreya Sans|Alegreya Sans SC|Aleo|Alex Brush|Alfa Slab One|Alice|Alike|Alike Angular|Allan|Allerta|Allerta Stencil|Allura|Almarai|Almendra|Almendra Display|Almendra SC|Amarante|Amaranth|Amatic SC|Amethysta|Amiko|Amiri|Amita|Anaheim|Andada|Andika|Angkor|Annie Use Your Telescope|Anonymous Pro|Antic|Antic Didone|Antic Slab|Anton|Arapey|Arbutus|Arbutus Slab|Architects Daughter|Archivo|Archivo Black|Archivo Narrow|Aref Ruqaa|Arima Madurai|Arimo|Arizonia|Armata|Arsenal|Artifika|Arvo|Arya|Asap|Asap Condensed|Asar|Asset|Assistant|Astloch|Asul|Athiti|Atma|Atomic Age|Aubrey|Audiowide|Autour One|Average|Average Sans|Averia Gruesa Libre|Averia Libre|Averia Sans Libre|Averia Serif Libre|B612|B612 Mono|Bad Script|Bahiana|Bahianita|Bai Jamjuree|Baloo|Baloo Bhai|Baloo Bhaijaan|Baloo Bhaina|Baloo Chettan|Baloo Da|Baloo Paaji|Baloo Tamma|Baloo Tammudu|Baloo Thambi|Balthazar|Bangers|Barlow|Barlow Condensed|Barlow Semi Condensed|Barriecito|Barrio|Basic|Battambang|Baumans|Bayon|Be Vietnam|Belgrano|Bellefair|Belleza|BenchNine|Bentham|Berkshire Swash|Beth Ellen|Bevan|Big Shoulders Display|Big Shoulders Text|Bigelow Rules|Bigshot One|Bilbo|Bilbo Swash Caps|BioRhyme|BioRhyme Expanded|Biryani|Bitter|Black And White Picture|Black Han Sans|Black Ops One|Blinker|Bokor|Bonbon|Boogaloo|Bowlby One|Bowlby One SC|Brawler|Bree Serif|Bubblegum Sans|Bubbler One|Buda|Buenard|Bungee|Bungee Hairline|Bungee Inline|Bungee Outline|Bungee Shade|Butcherman|Butterfly Kids|Cabin|Cabin Condensed|Cabin Sketch|Caesar Dressing|Cagliostro|Cairo|Calligraffitti|Cambay|Cambo|Candal|Cantarell|Cantata One|Cantora One|Capriola|Cardo|Carme|Carrois Gothic|Carrois Gothic SC|Carter One|Catamaran|Caudex|Caveat|Caveat Brush|Cedarville Cursive|Ceviche One|Chakra Petch|Changa|Changa One|Chango|Charm|Charmonman|Chathura|Chau Philomene One|Chela One|Chelsea Market|Chenla|Cherry Cream Soda|Cherry Swash|Chewy|Chicle|Chilanka|Chivo|Chonburi|Cinzel|Cinzel Decorative|Clicker Script|Coda|Coda Caption|Codystar|Coiny|Combo|Comfortaa|Coming Soon|Concert One|Condiment|Content|Contrail One|Convergence|Cookie|Copse|Corben|Cormorant|Cormorant Garamond|Cormorant Infant|Cormorant SC|Cormorant Unicase|Cormorant Upright|Courgette|Cousine|Coustard|Covered By Your Grace|Crafty Girls|Creepster|Crete Round|Crimson Pro|Crimson Text|Croissant One|Crushed|Cuprum|Cute Font|Cutive|Cutive Mono|DM Sans|DM Serif Display|DM Serif Text|Damion|Dancing Script|Dangrek|Darker Grotesque|David Libre|Dawning of a New Day|Days One|Dekko|Delius|Delius Swash Caps|Delius Unicase|Della Respira|Denk One|Devonshire|Dhurjati|Didact Gothic|Diplomata|Diplomata SC|Do Hyeon|Dokdo|Domine|Donegal One|Doppio One|Dorsa|Dosis|Dr Sugiyama|Duru Sans|Dynalight|EB Garamond|Eagle Lake|East Sea Dokdo|Eater|Economica|Eczar|El Messiri|Electrolize|Elsie|Elsie Swash Caps|Emblema One|Emilys Candy|Encode Sans|Encode Sans Condensed|Encode Sans Expanded|Encode Sans Semi Condensed|Encode Sans Semi Expanded|Engagement|Englebert|Enriqueta|Erica One|Esteban|Euphoria Script|Ewert|Exo|Exo 2|Expletus Sans|Fahkwang|Fanwood Text|Farro|Farsan|Fascinate|Fascinate Inline|Faster One|Fasthand|Fauna One|Faustina|Federant|Federo|Felipa|Fenix|Finger Paint|Fira Code|Fira Mono|Fira Sans|Fira Sans Condensed|Fira Sans Extra Condensed|Fjalla One|Fjord One|Flamenco|Flavors|Fondamento|Fontdiner Swanky|Forum|Francois One|Frank Ruhl Libre|Freckle Face|Fredericka the Great|Fredoka One|Freehand|Fresca|Frijole|Fruktur|Fugaz One|GFS Didot|GFS Neohellenic|Gabriela|Gaegu|Gafata|Galada|Galdeano|Galindo|Gamja Flower|Gayathri|Gentium Basic|Gentium Book Basic|Geo|Geostar|Geostar Fill|Germania One|Gidugu|Gilda Display|Give You Glory|Glass Antiqua|Glegoo|Gloria Hallelujah|Goblin One|Gochi Hand|Gorditas|Gothic A1|Goudy Bookletter 1911|Graduate|Grand Hotel|Gravitas One|Great Vibes|Grenze|Griffy|Gruppo|Gudea|Gugi|Gurajada|Habibi|Halant|Hammersmith One|Hanalei|Hanalei Fill|Handlee|Hanuman|Happy Monkey|Harmattan|Headland One|Heebo|Henny Penny|Hepta Slab|Herr Von Muellerhoff|Hi Melody|Hind|Hind Guntur|Hind Madurai|Hind Siliguri|Hind Vadodara|Holtwood One SC|Homemade Apple|Homenaje|IBM Plex Mono|IBM Plex Sans|IBM Plex Sans Condensed|IBM Plex Serif|IM Fell DW Pica|IM Fell DW Pica SC|IM Fell Double Pica|IM Fell Double Pica SC|IM Fell English|IM Fell English SC|IM Fell French Canon|IM Fell French Canon SC|IM Fell Great Primer|IM Fell Great Primer SC|Iceberg|Iceland|Imprima|Inconsolata|Inder|Indie Flower|Inika|Inknut Antiqua|Irish Grover|Istok Web|Italiana|Italianno|Itim|Jacques Francois|Jacques Francois Shadow|Jaldi|Jim Nightshade|Jockey One|Jolly Lodger|Jomhuria|Jomolhari|Josefin Sans|Josefin Slab|Joti One|Jua|Judson|Julee|Julius Sans One|Junge|Jura|Just Another Hand|Just Me Again Down Here|K2D|Kadwa|Kalam|Kameron|Kanit|Kantumruy|Karla|Karma|Katibeh|Kaushan Script|Kavivanar|Kavoon|Kdam Thmor|Keania One|Kelly Slab|Kenia|Khand|Khmer|Khula|Kirang Haerang|Kite One|Knewave|KoHo|Kodchasan|Kosugi|Kosugi Maru|Kotta One|Koulen|Kranky|Kreon|Kristi|Krona One|Krub|Kumar One|Kumar One Outline|Kurale|La Belle Aurore|Lacquer|Laila|Lakki Reddy|Lalezar|Lancelot|Lateef|Lato|League Script|Leckerli One|Ledger|Lekton|Lemon|Lemonada|Lexend Deca|Lexend Exa|Lexend Giga|Lexend Mega|Lexend Peta|Lexend Tera|Lexend Zetta|Libre Barcode 128|Libre Barcode 128 Text|Libre Barcode 39|Libre Barcode 39 Extended|Libre Barcode 39 Extended Text|Libre Barcode 39 Text|Libre Baskerville|Libre Caslon Display|Libre Caslon Text|Libre Franklin|Life Savers|Lilita One|Lily Script One|Limelight|Linden Hill|Literata|Liu Jian Mao Cao|Livvic|Lobster|Lobster Two|Londrina Outline|Londrina Shadow|Londrina Sketch|Londrina Solid|Long Cang|Lora|Love Ya Like A Sister|Loved by the King|Lovers Quarrel|Luckiest Guy|Lusitana|Lustria|M PLUS 1p|M PLUS Rounded 1c|Ma Shan Zheng|Macondo|Macondo Swash Caps|Mada|Magra|Maiden Orange|Maitree|Major Mono Display|Mako|Mali|Mallanna|Mandali|Manjari|Mansalva|Manuale|Marcellus|Marcellus SC|Marck Script|Margarine|Markazi Text|Marko One|Marmelad|Martel|Martel Sans|Marvel|Mate|Mate SC|Maven Pro|McLaren|Meddon|MedievalSharp|Medula One|Meera Inimai|Megrim|Meie Script|Merienda|Merienda One|Merriweather|Merriweather Sans|Metal|Metal Mania|Metamorphous|Metrophobic|Michroma|Milonga|Miltonian|Miltonian Tattoo|Mina|Miniver|Miriam Libre|Mirza|Miss Fajardose|Mitr|Modak|Modern Antiqua|Mogra|Molengo|Molle|Monda|Monofett|Monoton|Monsieur La Doulaise|Montaga|Montez|Montserrat|Montserrat Alternates|Montserrat Subrayada|Moul|Moulpali|Mountains of Christmas|Mouse Memoirs|Mr Bedfort|Mr Dafoe|Mr De Haviland|Mrs Saint Delafield|Mrs Sheppards|Mukta|Mukta Mahee|Mukta Malar|Mukta Vaani|Muli|Mystery Quest|NTR|Nanum Brush Script|Nanum Gothic|Nanum Gothic Coding|Nanum Myeongjo|Nanum Pen Script|Neucha|Neuton|New Rocker|News Cycle|Niconne|Niramit|Nixie One|Nobile|Nokora|Norican|Nosifer|Notable|Nothing You Could Do|Noticia Text|Noto Sans|Noto Sans HK|Noto Sans JP|Noto Sans KR|Noto Sans SC|Noto Sans TC|Noto Serif|Noto Serif JP|Noto Serif KR|Noto Serif SC|Noto Serif TC|Nova Cut|Nova Flat|Nova Mono|Nova Oval|Nova Round|Nova Script|Nova Slim|Nova Square|Numans|Nunito|Nunito Sans|Odor Mean Chey|Offside|Old Standard TT|Oldenburg|Oleo Script|Oleo Script Swash Caps|Open Sans|Open Sans Condensed|Oranienbaum|Orbitron|Oregano|Orienta|Original Surfer|Oswald|Over the Rainbow|Overlock|Overlock SC|Overpass|Overpass Mono|Ovo|Oxygen|Oxygen Mono|PT Mono|PT Sans|PT Sans Caption|PT Sans Narrow|PT Serif|PT Serif Caption|Pacifico|Padauk|Palanquin|Palanquin Dark|Pangolin|Paprika|Parisienne|Passero One|Passion One|Pathway Gothic One|Patrick Hand|Patrick Hand SC|Pattaya|Patua One|Pavanam|Paytone One|Peddana|Peralta|Permanent Marker|Petit Formal Script|Petrona|Philosopher|Piedra|Pinyon Script|Pirata One|Plaster|Play|Playball|Playfair Display|Playfair Display SC|Podkova|Poiret One|Poller One|Poly|Pompiere|Pontano Sans|Poor Story|Poppins|Port Lligat Sans|Port Lligat Slab|Pragati Narrow|Prata|Preahvihear|Press Start 2P|Pridi|Princess Sofia|Prociono|Prompt|Prosto One|Proza Libre|Puritan|Purple Purse|Quando|Quantico|Quattrocento|Quattrocento Sans|Questrial|Quicksand|Quintessential|Qwigley|Racing Sans One|Radley|Rajdhani|Rakkas|Raleway|Raleway Dots|Ramabhadra|Ramaraja|Rambla|Rammetto One|Ranchers|Rancho|Ranga|Rasa|Rationale|Ravi Prakash|Red Hat Display|Red Hat Text|Redressed|Reem Kufi|Reenie Beanie|Revalia|Rhodium Libre|Ribeye|Ribeye Marrow|Righteous|Risque|Roboto|Roboto Condensed|Roboto Mono|Roboto Slab|Rochester|Rock Salt|Rokkitt|Romanesco|Ropa Sans|Rosario|Rosarivo|Rouge Script|Rozha One|Rubik|Rubik Mono One|Ruda|Rufina|Ruge Boogie|Ruluko|Rum Raisin|Ruslan Display|Russo One|Ruthie|Rye|Sacramento|Sahitya|Sail|Saira|Saira Condensed|Saira Extra Condensed|Saira Semi Condensed|Saira Stencil One|Salsa|Sanchez|Sancreek|Sansita|Sarabun|Sarala|Sarina|Sarpanch|Satisfy|Sawarabi Gothic|Sawarabi Mincho|Scada|Scheherazade|Schoolbell|Scope One|Seaweed Script|Secular One|Sedgwick Ave|Sedgwick Ave Display|Sevillana|Seymour One|Shadows Into Light|Shadows Into Light Two|Shanti|Share|Share Tech|Share Tech Mono|Shojumaru|Short Stack|Shrikhand|Siemreap|Sigmar One|Signika|Signika Negative|Simonetta|Single Day|Sintony|Sirin Stencil|Six Caps|Skranji|Slabo 13px|Slabo 27px|Slackey|Smokum|Smythe|Sniglet|Snippet|Snowburst One|Sofadi One|Sofia|Song Myung|Sonsie One|Sorts Mill Goudy|Source Code Pro|Source Sans Pro|Source Serif Pro|Space Mono|Special Elite|Spectral|Spectral SC|Spicy Rice|Spinnaker|Spirax|Squada One|Sree Krushnadevaraya|Sriracha|Srisakdi|Staatliches|Stalemate|Stalinist One|Stardos Stencil|Stint Ultra Condensed|Stint Ultra Expanded|Stoke|Strait|Stylish|Sue Ellen Francisco|Suez One|Sumana|Sunflower|Sunshiney|Supermercado One|Sura|Suranna|Suravaram|Suwannaphum|Swanky and Moo Moo|Syncopate|Tajawal|Tangerine|Taprom|Tauri|Taviraj|Teko|Telex|Tenali Ramakrishna|Tenor Sans|Text Me One|Thasadith|The Girl Next Door|Tienne|Tillana|Timmana|Tinos|Titan One|Titillium Web|Trade Winds|Trirong|Trocchi|Trochut|Trykker|Tulpen One|Turret Road|Ubuntu|Ubuntu Condensed|Ubuntu Mono|Ultra|Uncial Antiqua|Underdog|Unica One|UnifrakturCook|UnifrakturMaguntia|Unkempt|Unlock|Unna|VT323|Vampiro One|Varela|Varela Round|Vast Shadow|Vesper Libre|Vibes|Vibur|Vidaloka|Viga|Voces|Volkhov|Vollkorn|Vollkorn SC|Voltaire|Waiting for the Sunrise|Wallpoet|Walter Turncoat|Warnes|Wellfleet|Wendy One|Wire One|Work Sans|Yanone Kaffeesatz|Yantramanav|Yatra One|Yellowtail|Yeon Sung|Yeseva One|Yesteryear|Yrsa|ZCOOL KuaiLe|ZCOOL QingKe HuangYou|ZCOOL XiaoWei|Zeyada|Zhi Mang Xing|Zilla Slab|Zilla Slab Highlight))?(,?(normal|italic))?)?|D,[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?,\\d+,(?:0|(?:-?\\d+:-?\\d+)),\\d+|(?:a|c|C|d|E|h|H|o|s|v|V|x),[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?,\\d+,(?:-1|(?:-?\\d+:-?\\d+(?::-?\\d+)?)),\\d+(?:\\.\\d+)?(?:[|](?:b|B),[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?,\\d+,\\d+,0|(N|N[^\\*]*\\*(?:[f|p|e]|(?:c[a-z]{3}))?(?:[0-9]+)?(?:[zs]{1,2}?)?(?:[x|y])?\\*(?:[^,]*)?),[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?,\\d+,(?:-?\\d+(?:(?::-?\\d+(?::-?\\d+)?)?|(?:\\.\\d+)))?,\\d+((,(\\d+)?)?(,(.?(s|c|e):?:?))?(,?(ABeeZee|Abel|Abhaya Libre|Abril Fatface|Aclonica|Acme|Actor|Adamina|Advent Pro|Aguafina Script|Akronim|Aladin|Aldrich|Alef|Alegreya|Alegreya SC|Alegreya Sans|Alegreya Sans SC|Aleo|Alex Brush|Alfa Slab One|Alice|Alike|Alike Angular|Allan|Allerta|Allerta Stencil|Allura|Almarai|Almendra|Almendra Display|Almendra SC|Amarante|Amaranth|Amatic SC|Amethysta|Amiko|Amiri|Amita|Anaheim|Andada|Andika|Angkor|Annie Use Your Telescope|Anonymous Pro|Antic|Antic Didone|Antic Slab|Anton|Arapey|Arbutus|Arbutus Slab|Architects Daughter|Archivo|Archivo Black|Archivo Narrow|Aref Ruqaa|Arima Madurai|Arimo|Arizonia|Armata|Arsenal|Artifika|Arvo|Arya|Asap|Asap Condensed|Asar|Asset|Assistant|Astloch|Asul|Athiti|Atma|Atomic Age|Aubrey|Audiowide|Autour One|Average|Average Sans|Averia Gruesa Libre|Averia Libre|Averia Sans Libre|Averia Serif Libre|B612|B612 Mono|Bad Script|Bahiana|Bahianita|Bai Jamjuree|Baloo|Baloo Bhai|Baloo Bhaijaan|Baloo Bhaina|Baloo Chettan|Baloo Da|Baloo Paaji|Baloo Tamma|Baloo Tammudu|Baloo Thambi|Balthazar|Bangers|Barlow|Barlow Condensed|Barlow Semi Condensed|Barriecito|Barrio|Basic|Battambang|Baumans|Bayon|Be Vietnam|Belgrano|Bellefair|Belleza|BenchNine|Bentham|Berkshire Swash|Beth Ellen|Bevan|Big Shoulders Display|Big Shoulders Text|Bigelow Rules|Bigshot One|Bilbo|Bilbo Swash Caps|BioRhyme|BioRhyme Expanded|Biryani|Bitter|Black And White Picture|Black Han Sans|Black Ops One|Blinker|Bokor|Bonbon|Boogaloo|Bowlby One|Bowlby One SC|Brawler|Bree Serif|Bubblegum Sans|Bubbler One|Buda|Buenard|Bungee|Bungee Hairline|Bungee Inline|Bungee Outline|Bungee Shade|Butcherman|Butterfly Kids|Cabin|Cabin Condensed|Cabin Sketch|Caesar Dressing|Cagliostro|Cairo|Calligraffitti|Cambay|Cambo|Candal|Cantarell|Cantata One|Cantora One|Capriola|Cardo|Carme|Carrois Gothic|Carrois Gothic SC|Carter One|Catamaran|Caudex|Caveat|Caveat Brush|Cedarville Cursive|Ceviche One|Chakra Petch|Changa|Changa One|Chango|Charm|Charmonman|Chathura|Chau Philomene One|Chela One|Chelsea Market|Chenla|Cherry Cream Soda|Cherry Swash|Chewy|Chicle|Chilanka|Chivo|Chonburi|Cinzel|Cinzel Decorative|Clicker Script|Coda|Coda Caption|Codystar|Coiny|Combo|Comfortaa|Coming Soon|Concert One|Condiment|Content|Contrail One|Convergence|Cookie|Copse|Corben|Cormorant|Cormorant Garamond|Cormorant Infant|Cormorant SC|Cormorant Unicase|Cormorant Upright|Courgette|Cousine|Coustard|Covered By Your Grace|Crafty Girls|Creepster|Crete Round|Crimson Pro|Crimson Text|Croissant One|Crushed|Cuprum|Cute Font|Cutive|Cutive Mono|DM Sans|DM Serif Display|DM Serif Text|Damion|Dancing Script|Dangrek|Darker Grotesque|David Libre|Dawning of a New Day|Days One|Dekko|Delius|Delius Swash Caps|Delius Unicase|Della Respira|Denk One|Devonshire|Dhurjati|Didact Gothic|Diplomata|Diplomata SC|Do Hyeon|Dokdo|Domine|Donegal One|Doppio One|Dorsa|Dosis|Dr Sugiyama|Duru Sans|Dynalight|EB Garamond|Eagle Lake|East Sea Dokdo|Eater|Economica|Eczar|El Messiri|Electrolize|Elsie|Elsie Swash Caps|Emblema One|Emilys Candy|Encode Sans|Encode Sans Condensed|Encode Sans Expanded|Encode Sans Semi Condensed|Encode Sans Semi Expanded|Engagement|Englebert|Enriqueta|Erica One|Esteban|Euphoria Script|Ewert|Exo|Exo 2|Expletus Sans|Fahkwang|Fanwood Text|Farro|Farsan|Fascinate|Fascinate Inline|Faster One|Fasthand|Fauna One|Faustina|Federant|Federo|Felipa|Fenix|Finger Paint|Fira Code|Fira Mono|Fira Sans|Fira Sans Condensed|Fira Sans Extra Condensed|Fjalla One|Fjord One|Flamenco|Flavors|Fondamento|Fontdiner Swanky|Forum|Francois One|Frank Ruhl Libre|Freckle Face|Fredericka the Great|Fredoka One|Freehand|Fresca|Frijole|Fruktur|Fugaz One|GFS Didot|GFS Neohellenic|Gabriela|Gaegu|Gafata|Galada|Galdeano|Galindo|Gamja Flower|Gayathri|Gentium Basic|Gentium Book Basic|Geo|Geostar|Geostar Fill|Germania One|Gidugu|Gilda Display|Give You Glory|Glass Antiqua|Glegoo|Gloria Hallelujah|Goblin One|Gochi Hand|Gorditas|Gothic A1|Goudy Bookletter 1911|Graduate|Grand Hotel|Gravitas One|Great Vibes|Grenze|Griffy|Gruppo|Gudea|Gugi|Gurajada|Habibi|Halant|Hammersmith One|Hanalei|Hanalei Fill|Handlee|Hanuman|Happy Monkey|Harmattan|Headland One|Heebo|Henny Penny|Hepta Slab|Herr Von Muellerhoff|Hi Melody|Hind|Hind Guntur|Hind Madurai|Hind Siliguri|Hind Vadodara|Holtwood One SC|Homemade Apple|Homenaje|IBM Plex Mono|IBM Plex Sans|IBM Plex Sans Condensed|IBM Plex Serif|IM Fell DW Pica|IM Fell DW Pica SC|IM Fell Double Pica|IM Fell Double Pica SC|IM Fell English|IM Fell English SC|IM Fell French Canon|IM Fell French Canon SC|IM Fell Great Primer|IM Fell Great Primer SC|Iceberg|Iceland|Imprima|Inconsolata|Inder|Indie Flower|Inika|Inknut Antiqua|Irish Grover|Istok Web|Italiana|Italianno|Itim|Jacques Francois|Jacques Francois Shadow|Jaldi|Jim Nightshade|Jockey One|Jolly Lodger|Jomhuria|Jomolhari|Josefin Sans|Josefin Slab|Joti One|Jua|Judson|Julee|Julius Sans One|Junge|Jura|Just Another Hand|Just Me Again Down Here|K2D|Kadwa|Kalam|Kameron|Kanit|Kantumruy|Karla|Karma|Katibeh|Kaushan Script|Kavivanar|Kavoon|Kdam Thmor|Keania One|Kelly Slab|Kenia|Khand|Khmer|Khula|Kirang Haerang|Kite One|Knewave|KoHo|Kodchasan|Kosugi|Kosugi Maru|Kotta One|Koulen|Kranky|Kreon|Kristi|Krona One|Krub|Kumar One|Kumar One Outline|Kurale|La Belle Aurore|Lacquer|Laila|Lakki Reddy|Lalezar|Lancelot|Lateef|Lato|League Script|Leckerli One|Ledger|Lekton|Lemon|Lemonada|Lexend Deca|Lexend Exa|Lexend Giga|Lexend Mega|Lexend Peta|Lexend Tera|Lexend Zetta|Libre Barcode 128|Libre Barcode 128 Text|Libre Barcode 39|Libre Barcode 39 Extended|Libre Barcode 39 Extended Text|Libre Barcode 39 Text|Libre Baskerville|Libre Caslon Display|Libre Caslon Text|Libre Franklin|Life Savers|Lilita One|Lily Script One|Limelight|Linden Hill|Literata|Liu Jian Mao Cao|Livvic|Lobster|Lobster Two|Londrina Outline|Londrina Shadow|Londrina Sketch|Londrina Solid|Long Cang|Lora|Love Ya Like A Sister|Loved by the King|Lovers Quarrel|Luckiest Guy|Lusitana|Lustria|M PLUS 1p|M PLUS Rounded 1c|Ma Shan Zheng|Macondo|Macondo Swash Caps|Mada|Magra|Maiden Orange|Maitree|Major Mono Display|Mako|Mali|Mallanna|Mandali|Manjari|Mansalva|Manuale|Marcellus|Marcellus SC|Marck Script|Margarine|Markazi Text|Marko One|Marmelad|Martel|Martel Sans|Marvel|Mate|Mate SC|Maven Pro|McLaren|Meddon|MedievalSharp|Medula One|Meera Inimai|Megrim|Meie Script|Merienda|Merienda One|Merriweather|Merriweather Sans|Metal|Metal Mania|Metamorphous|Metrophobic|Michroma|Milonga|Miltonian|Miltonian Tattoo|Mina|Miniver|Miriam Libre|Mirza|Miss Fajardose|Mitr|Modak|Modern Antiqua|Mogra|Molengo|Molle|Monda|Monofett|Monoton|Monsieur La Doulaise|Montaga|Montez|Montserrat|Montserrat Alternates|Montserrat Subrayada|Moul|Moulpali|Mountains of Christmas|Mouse Memoirs|Mr Bedfort|Mr Dafoe|Mr De Haviland|Mrs Saint Delafield|Mrs Sheppards|Mukta|Mukta Mahee|Mukta Malar|Mukta Vaani|Muli|Mystery Quest|NTR|Nanum Brush Script|Nanum Gothic|Nanum Gothic Coding|Nanum Myeongjo|Nanum Pen Script|Neucha|Neuton|New Rocker|News Cycle|Niconne|Niramit|Nixie One|Nobile|Nokora|Norican|Nosifer|Notable|Nothing You Could Do|Noticia Text|Noto Sans|Noto Sans HK|Noto Sans JP|Noto Sans KR|Noto Sans SC|Noto Sans TC|Noto Serif|Noto Serif JP|Noto Serif KR|Noto Serif SC|Noto Serif TC|Nova Cut|Nova Flat|Nova Mono|Nova Oval|Nova Round|Nova Script|Nova Slim|Nova Square|Numans|Nunito|Nunito Sans|Odor Mean Chey|Offside|Old Standard TT|Oldenburg|Oleo Script|Oleo Script Swash Caps|Open Sans|Open Sans Condensed|Oranienbaum|Orbitron|Oregano|Orienta|Original Surfer|Oswald|Over the Rainbow|Overlock|Overlock SC|Overpass|Overpass Mono|Ovo|Oxygen|Oxygen Mono|PT Mono|PT Sans|PT Sans Caption|PT Sans Narrow|PT Serif|PT Serif Caption|Pacifico|Padauk|Palanquin|Palanquin Dark|Pangolin|Paprika|Parisienne|Passero One|Passion One|Pathway Gothic One|Patrick Hand|Patrick Hand SC|Pattaya|Patua One|Pavanam|Paytone One|Peddana|Peralta|Permanent Marker|Petit Formal Script|Petrona|Philosopher|Piedra|Pinyon Script|Pirata One|Plaster|Play|Playball|Playfair Display|Playfair Display SC|Podkova|Poiret One|Poller One|Poly|Pompiere|Pontano Sans|Poor Story|Poppins|Port Lligat Sans|Port Lligat Slab|Pragati Narrow|Prata|Preahvihear|Press Start 2P|Pridi|Princess Sofia|Prociono|Prompt|Prosto One|Proza Libre|Puritan|Purple Purse|Quando|Quantico|Quattrocento|Quattrocento Sans|Questrial|Quicksand|Quintessential|Qwigley|Racing Sans One|Radley|Rajdhani|Rakkas|Raleway|Raleway Dots|Ramabhadra|Ramaraja|Rambla|Rammetto One|Ranchers|Rancho|Ranga|Rasa|Rationale|Ravi Prakash|Red Hat Display|Red Hat Text|Redressed|Reem Kufi|Reenie Beanie|Revalia|Rhodium Libre|Ribeye|Ribeye Marrow|Righteous|Risque|Roboto|Roboto Condensed|Roboto Mono|Roboto Slab|Rochester|Rock Salt|Rokkitt|Romanesco|Ropa Sans|Rosario|Rosarivo|Rouge Script|Rozha One|Rubik|Rubik Mono One|Ruda|Rufina|Ruge Boogie|Ruluko|Rum Raisin|Ruslan Display|Russo One|Ruthie|Rye|Sacramento|Sahitya|Sail|Saira|Saira Condensed|Saira Extra Condensed|Saira Semi Condensed|Saira Stencil One|Salsa|Sanchez|Sancreek|Sansita|Sarabun|Sarala|Sarina|Sarpanch|Satisfy|Sawarabi Gothic|Sawarabi Mincho|Scada|Scheherazade|Schoolbell|Scope One|Seaweed Script|Secular One|Sedgwick Ave|Sedgwick Ave Display|Sevillana|Seymour One|Shadows Into Light|Shadows Into Light Two|Shanti|Share|Share Tech|Share Tech Mono|Shojumaru|Short Stack|Shrikhand|Siemreap|Sigmar One|Signika|Signika Negative|Simonetta|Single Day|Sintony|Sirin Stencil|Six Caps|Skranji|Slabo 13px|Slabo 27px|Slackey|Smokum|Smythe|Sniglet|Snippet|Snowburst One|Sofadi One|Sofia|Song Myung|Sonsie One|Sorts Mill Goudy|Source Code Pro|Source Sans Pro|Source Serif Pro|Space Mono|Special Elite|Spectral|Spectral SC|Spicy Rice|Spinnaker|Spirax|Squada One|Sree Krushnadevaraya|Sriracha|Srisakdi|Staatliches|Stalemate|Stalinist One|Stardos Stencil|Stint Ultra Condensed|Stint Ultra Expanded|Stoke|Strait|Stylish|Sue Ellen Francisco|Suez One|Sumana|Sunflower|Sunshiney|Supermercado One|Sura|Suranna|Suravaram|Suwannaphum|Swanky and Moo Moo|Syncopate|Tajawal|Tangerine|Taprom|Tauri|Taviraj|Teko|Telex|Tenali Ramakrishna|Tenor Sans|Text Me One|Thasadith|The Girl Next Door|Tienne|Tillana|Timmana|Tinos|Titan One|Titillium Web|Trade Winds|Trirong|Trocchi|Trochut|Trykker|Tulpen One|Turret Road|Ubuntu|Ubuntu Condensed|Ubuntu Mono|Ultra|Uncial Antiqua|Underdog|Unica One|UnifrakturCook|UnifrakturMaguntia|Unkempt|Unlock|Unna|VT323|Vampiro One|Varela|Varela Round|Vast Shadow|Vesper Libre|Vibes|Vibur|Vidaloka|Viga|Voces|Volkhov|Vollkorn|Vollkorn SC|Voltaire|Waiting for the Sunrise|Wallpoet|Walter Turncoat|Warnes|Wellfleet|Wendy One|Wire One|Work Sans|Yanone Kaffeesatz|Yantramanav|Yatra One|Yellowtail|Yeon Sung|Yeseva One|Yesteryear|Yrsa|ZCOOL KuaiLe|ZCOOL QingKe HuangYou|ZCOOL XiaoWei|Zeyada|Zhi Mang Xing|Zilla Slab|Zilla Slab Highlight))?(,?(normal|italic))?)?|D,[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?,\\d+,(?:0|(?:-?\\d+:-?\\d+)),\\d+|(?:a|c|C|d|E|h|H|o|s|v|V|x),[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?,\\d+,(?:-1|(?:-?\\d+:-?\\d+(?::-?\\d+)?)),\\d+(?:\\.\\d+)?)*$",
  "examples": [],
  "required": false
}, {
  "name": "chls",
  "pattern": "^(((?:[0-9]\\.?)+,?){1,3}\\|?)+",
  "examples": ["10", "3,6,3|5"],
  "required": false
}, {
  "name": "chl",
  "pattern": "^(?:[^\\|]*\\|?)+$",
  "examples": ["label1|label2", "multi\nline\nlabel1|label2"],
  "required": false
}, {
  "name": "chlps",
  "pattern": "^(?:align|anchor|backgroundColor|borderColor|borderRadius|borderWidth|clamp|clip|color|display|font\\.size|font\\.style|font\\.weight|font\\.lineHeight|offset|opacity|padding|padding\\.top|padding\\.right|padding\\.bottom|padding\\.left|rotation|textAlign|textStrokeColor|textStrokeWidth|textShadowBlur|textShadowColor),(?:[0-9a-zA-Z.]+)(?:\\|(?:align|anchor|backgroundColor|borderColor|borderRadius|borderWidth|clamp|clip|color|display|font\\.size|font\\.style|font\\.weight|font\\.lineHeight|offset|opacity|padding|padding\\.top|padding\\.right|padding\\.bottom|padding\\.left|rotation|textAlign|textStrokeColor|textStrokeWidth|textShadowBlur|textShadowColor),(?:[0-9a-zA-Z.]+)){0,10}$",
  "examples": ["align,top|offset,10|color,FF00FF", "align,top|offset,10|color,FF00FF"]
}, {
  "name": "chma",
  "pattern": "^(?:(?:[\\-0-9\\.]+),?)+\\|?(?:[\\-0-9\\.]\\,?)+$",
  "examples": ["30,30,30,30", "40,20"],
  "required": false
}, {
  "name": "chdlp",
  "pattern": "^(?:tv?|bv?|r|l)(\\|(?:l|r|a|[0-9][0-9,]*))?$",
  "examples": [],
  "required": false
}, {
  "name": "chf",
  "pattern": "^(?:(?:b(?:[0-9]+|g)|a|c),s,[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?|(?:(?:(?:b(?:[0-9]+|g)|c)|ps[0-9]+-[0-9]+),lg,[0-9]{1,2}(?:,[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?,[0-9.]+){1,})|(?:(?:b(?:[0-9]+|g)|c),ls,[0-9]{1,2}(?:,[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?,[0-9.]+){1,})|\\|?)+$",
  "examples": ["b0,lg,0,f44336,0.3,03a9f4,0.8"],
  "required": false
}, {
  "name": "chbr",
  "pattern": "^[0-9]{1,3}$",
  "examples": ["5", "10"],
  "required": false
}, {
  "name": "chan",
  "pattern": "^[0-9]{2,4}(?:,(?:easeInQuad|easeOutQuad|easeInOutQuad|easeInCubic|easeOutCubic|easeInOutCubic|easeInQuart|easeOutQuart|easeInOutQuart|easeInQuint|easeOutQuint|easeInOutQuint|easeInSine|easeOutSine|easeInOutSine|easeInExpo|easeOutExpo|easeInOutExpo|easeInCirc|easeOutCirc|easeInOutCirc|easeInElastic|easeOutElastic|easeInOutElastic|easeInBack|easeOutBack|easeInOutBack|easeInBounce|easeOutBounce|easeInOutBounce))?$",
  "examples": ["1200", "1300|easeInOutSine"],
  "required": false
}, {
  "name": "chli",
  "pattern": "^(?:.*)$",
  "examples": ["95K€", "45%"],
  "required": false
}, {
  "name": "icac",
  "examples": ["accountId"],
  "required": false
}, {
  "name": "ichm",
  "examples": ["0785cf22a0381c2e0239e27c126de4181f501d117c2c81745611e9db928b0376"],
  "required": false
}, {
  "name": "icff",
  "examples": ["Abel", "Akronim", "Alfa Slab One"],
  "required": false,
  "enum": ["ABeeZee", "Abel", "Abhaya Libre", "Abril Fatface", "Aclonica", "Acme", "Actor", "Adamina", "Advent Pro", "Aguafina Script", "Akronim", "Aladin", "Aldrich", "Alef", "Alegreya", "Alegreya SC", "Alegreya Sans", "Alegreya Sans SC", "Aleo", "Alex Brush", "Alfa Slab One", "Alice", "Alike", "Alike Angular", "Allan", "Allerta", "Allerta Stencil", "Allura", "Almarai", "Almendra", "Almendra Display", "Almendra SC", "Amarante", "Amaranth", "Amatic SC", "Amethysta", "Amiko", "Amiri", "Amita", "Anaheim", "Andada", "Andika", "Angkor", "Annie Use Your Telescope", "Anonymous Pro", "Antic", "Antic Didone", "Antic Slab", "Anton", "Arapey", "Arbutus", "Arbutus Slab", "Architects Daughter", "Archivo", "Archivo Black", "Archivo Narrow", "Aref Ruqaa", "Arima Madurai", "Arimo", "Arizonia", "Armata", "Arsenal", "Artifika", "Arvo", "Arya", "Asap", "Asap Condensed", "Asar", "Asset", "Assistant", "Astloch", "Asul", "Athiti", "Atma", "Atomic Age", "Aubrey", "Audiowide", "Autour One", "Average", "Average Sans", "Averia Gruesa Libre", "Averia Libre", "Averia Sans Libre", "Averia Serif Libre", "B612", "B612 Mono", "Bad Script", "Bahiana", "Bahianita", "Bai Jamjuree", "Baloo", "Baloo Bhai", "Baloo Bhaijaan", "Baloo Bhaina", "Baloo Chettan", "Baloo Da", "Baloo Paaji", "Baloo Tamma", "Baloo Tammudu", "Baloo Thambi", "Balthazar", "Bangers", "Barlow", "Barlow Condensed", "Barlow Semi Condensed", "Barriecito", "Barrio", "Basic", "Battambang", "Baumans", "Bayon", "Be Vietnam", "Belgrano", "Bellefair", "Belleza", "BenchNine", "Bentham", "Berkshire Swash", "Beth Ellen", "Bevan", "Big Shoulders Display", "Big Shoulders Text", "Bigelow Rules", "Bigshot One", "Bilbo", "Bilbo Swash Caps", "BioRhyme", "BioRhyme Expanded", "Biryani", "Bitter", "Black And White Picture", "Black Han Sans", "Black Ops One", "Blinker", "Bokor", "Bonbon", "Boogaloo", "Bowlby One", "Bowlby One SC", "Brawler", "Bree Serif", "Bubblegum Sans", "Bubbler One", "Buda", "Buenard", "Bungee", "Bungee Hairline", "Bungee Inline", "Bungee Outline", "Bungee Shade", "Butcherman", "Butterfly Kids", "Cabin", "Cabin Condensed", "Cabin Sketch", "Caesar Dressing", "Cagliostro", "Cairo", "Calligraffitti", "Cambay", "Cambo", "Candal", "Cantarell", "Cantata One", "Cantora One", "Capriola", "Cardo", "Carme", "Carrois Gothic", "Carrois Gothic SC", "Carter One", "Catamaran", "Caudex", "Caveat", "Caveat Brush", "Cedarville Cursive", "Ceviche One", "Chakra Petch", "Changa", "Changa One", "Chango", "Charm", "Charmonman", "Chathura", "Chau Philomene One", "Chela One", "Chelsea Market", "Chenla", "Cherry Cream Soda", "Cherry Swash", "Chewy", "Chicle", "Chilanka", "Chivo", "Chonburi", "Cinzel", "Cinzel Decorative", "Clicker Script", "Coda", "Coda Caption", "Codystar", "Coiny", "Combo", "Comfortaa", "Coming Soon", "Concert One", "Condiment", "Content", "Contrail One", "Convergence", "Cookie", "Copse", "Corben", "Cormorant", "Cormorant Garamond", "Cormorant Infant", "Cormorant SC", "Cormorant Unicase", "Cormorant Upright", "Courgette", "Cousine", "Coustard", "Covered By Your Grace", "Crafty Girls", "Creepster", "Crete Round", "Crimson Pro", "Crimson Text", "Croissant One", "Crushed", "Cuprum", "Cute Font", "Cutive", "Cutive Mono", "DM Sans", "DM Serif Display", "DM Serif Text", "Damion", "Dancing Script", "Dangrek", "Darker Grotesque", "David Libre", "Dawning of a New Day", "Days One", "Dekko", "Delius", "Delius Swash Caps", "Delius Unicase", "Della Respira", "Denk One", "Devonshire", "Dhurjati", "Didact Gothic", "Diplomata", "Diplomata SC", "Do Hyeon", "Dokdo", "Domine", "Donegal One", "Doppio One", "Dorsa", "Dosis", "Dr Sugiyama", "Duru Sans", "Dynalight", "EB Garamond", "Eagle Lake", "East Sea Dokdo", "Eater", "Economica", "Eczar", "El Messiri", "Electrolize", "Elsie", "Elsie Swash Caps", "Emblema One", "Emilys Candy", "Encode Sans", "Encode Sans Condensed", "Encode Sans Expanded", "Encode Sans Semi Condensed", "Encode Sans Semi Expanded", "Engagement", "Englebert", "Enriqueta", "Erica One", "Esteban", "Euphoria Script", "Ewert", "Exo", "Exo 2", "Expletus Sans", "Fahkwang", "Fanwood Text", "Farro", "Farsan", "Fascinate", "Fascinate Inline", "Faster One", "Fasthand", "Fauna One", "Faustina", "Federant", "Federo", "Felipa", "Fenix", "Finger Paint", "Fira Code", "Fira Mono", "Fira Sans", "Fira Sans Condensed", "Fira Sans Extra Condensed", "Fjalla One", "Fjord One", "Flamenco", "Flavors", "Fondamento", "Fontdiner Swanky", "Forum", "Francois One", "Frank Ruhl Libre", "Freckle Face", "Fredericka the Great", "Fredoka One", "Freehand", "Fresca", "Frijole", "Fruktur", "Fugaz One", "GFS Didot", "GFS Neohellenic", "Gabriela", "Gaegu", "Gafata", "Galada", "Galdeano", "Galindo", "Gamja Flower", "Gayathri", "Gentium Basic", "Gentium Book Basic", "Geo", "Geostar", "Geostar Fill", "Germania One", "Gidugu", "Gilda Display", "Give You Glory", "Glass Antiqua", "Glegoo", "Gloria Hallelujah", "Goblin One", "Gochi Hand", "Gorditas", "Gothic A1", "Goudy Bookletter 1911", "Graduate", "Grand Hotel", "Gravitas One", "Great Vibes", "Grenze", "Griffy", "Gruppo", "Gudea", "Gugi", "Gurajada", "Habibi", "Halant", "Hammersmith One", "Hanalei", "Hanalei Fill", "Handlee", "Hanuman", "Happy Monkey", "Harmattan", "Headland One", "Heebo", "Henny Penny", "Hepta Slab", "Herr Von Muellerhoff", "Hi Melody", "Hind", "Hind Guntur", "Hind Madurai", "Hind Siliguri", "Hind Vadodara", "Holtwood One SC", "Homemade Apple", "Homenaje", "IBM Plex Mono", "IBM Plex Sans", "IBM Plex Sans Condensed", "IBM Plex Serif", "IM Fell DW Pica", "IM Fell DW Pica SC", "IM Fell Double Pica", "IM Fell Double Pica SC", "IM Fell English", "IM Fell English SC", "IM Fell French Canon", "IM Fell French Canon SC", "IM Fell Great Primer", "IM Fell Great Primer SC", "Iceberg", "Iceland", "Imprima", "Inconsolata", "Inder", "Indie Flower", "Inika", "Inknut Antiqua", "Irish Grover", "Istok Web", "Italiana", "Italianno", "Itim", "Jacques Francois", "Jacques Francois Shadow", "Jaldi", "Jim Nightshade", "Jockey One", "Jolly Lodger", "Jomhuria", "Jomolhari", "Josefin Sans", "Josefin Slab", "Joti One", "Jua", "Judson", "Julee", "Julius Sans One", "Junge", "Jura", "Just Another Hand", "Just Me Again Down Here", "K2D", "Kadwa", "Kalam", "Kameron", "Kanit", "Kantumruy", "Karla", "Karma", "Katibeh", "Kaushan Script", "Kavivanar", "Kavoon", "Kdam Thmor", "Keania One", "Kelly Slab", "Kenia", "Khand", "Khmer", "Khula", "Kirang Haerang", "Kite One", "Knewave", "KoHo", "Kodchasan", "Kosugi", "Kosugi Maru", "Kotta One", "Koulen", "Kranky", "Kreon", "Kristi", "Krona One", "Krub", "Kumar One", "Kumar One Outline", "Kurale", "La Belle Aurore", "Lacquer", "Laila", "Lakki Reddy", "Lalezar", "Lancelot", "Lateef", "Lato", "League Script", "Leckerli One", "Ledger", "Lekton", "Lemon", "Lemonada", "Lexend Deca", "Lexend Exa", "Lexend Giga", "Lexend Mega", "Lexend Peta", "Lexend Tera", "Lexend Zetta", "Libre Barcode 128", "Libre Barcode 128 Text", "Libre Barcode 39", "Libre Barcode 39 Extended", "Libre Barcode 39 Extended Text", "Libre Barcode 39 Text", "Libre Baskerville", "Libre Caslon Display", "Libre Caslon Text", "Libre Franklin", "Life Savers", "Lilita One", "Lily Script One", "Limelight", "Linden Hill", "Literata", "Liu Jian Mao Cao", "Livvic", "Lobster", "Lobster Two", "Londrina Outline", "Londrina Shadow", "Londrina Sketch", "Londrina Solid", "Long Cang", "Lora", "Love Ya Like A Sister", "Loved by the King", "Lovers Quarrel", "Luckiest Guy", "Lusitana", "Lustria", "M PLUS 1p", "M PLUS Rounded 1c", "Ma Shan Zheng", "Macondo", "Macondo Swash Caps", "Mada", "Magra", "Maiden Orange", "Maitree", "Major Mono Display", "Mako", "Mali", "Mallanna", "Mandali", "Manjari", "Mansalva", "Manuale", "Marcellus", "Marcellus SC", "Marck Script", "Margarine", "Markazi Text", "Marko One", "Marmelad", "Martel", "Martel Sans", "Marvel", "Mate", "Mate SC", "Maven Pro", "McLaren", "Meddon", "MedievalSharp", "Medula One", "Meera Inimai", "Megrim", "Meie Script", "Merienda", "Merienda One", "Merriweather", "Merriweather Sans", "Metal", "Metal Mania", "Metamorphous", "Metrophobic", "Michroma", "Milonga", "Miltonian", "Miltonian Tattoo", "Mina", "Miniver", "Miriam Libre", "Mirza", "Miss Fajardose", "Mitr", "Modak", "Modern Antiqua", "Mogra", "Molengo", "Molle", "Monda", "Monofett", "Monoton", "Monsieur La Doulaise", "Montaga", "Montez", "Montserrat", "Montserrat Alternates", "Montserrat Subrayada", "Moul", "Moulpali", "Mountains of Christmas", "Mouse Memoirs", "Mr Bedfort", "Mr Dafoe", "Mr De Haviland", "Mrs Saint Delafield", "Mrs Sheppards", "Mukta", "Mukta Mahee", "Mukta Malar", "Mukta Vaani", "Muli", "Mystery Quest", "NTR", "Nanum Brush Script", "Nanum Gothic", "Nanum Gothic Coding", "Nanum Myeongjo", "Nanum Pen Script", "Neucha", "Neuton", "New Rocker", "News Cycle", "Niconne", "Niramit", "Nixie One", "Nobile", "Nokora", "Norican", "Nosifer", "Notable", "Nothing You Could Do", "Noticia Text", "Noto Sans", "Noto Sans HK", "Noto Sans JP", "Noto Sans KR", "Noto Sans SC", "Noto Sans TC", "Noto Serif", "Noto Serif JP", "Noto Serif KR", "Noto Serif SC", "Noto Serif TC", "Nova Cut", "Nova Flat", "Nova Mono", "Nova Oval", "Nova Round", "Nova Script", "Nova Slim", "Nova Square", "Numans", "Nunito", "Nunito Sans", "Odor Mean Chey", "Offside", "Old Standard TT", "Oldenburg", "Oleo Script", "Oleo Script Swash Caps", "Open Sans", "Open Sans Condensed", "Oranienbaum", "Orbitron", "Oregano", "Orienta", "Original Surfer", "Oswald", "Over the Rainbow", "Overlock", "Overlock SC", "Overpass", "Overpass Mono", "Ovo", "Oxygen", "Oxygen Mono", "PT Mono", "PT Sans", "PT Sans Caption", "PT Sans Narrow", "PT Serif", "PT Serif Caption", "Pacifico", "Padauk", "Palanquin", "Palanquin Dark", "Pangolin", "Paprika", "Parisienne", "Passero One", "Passion One", "Pathway Gothic One", "Patrick Hand", "Patrick Hand SC", "Pattaya", "Patua One", "Pavanam", "Paytone One", "Peddana", "Peralta", "Permanent Marker", "Petit Formal Script", "Petrona", "Philosopher", "Piedra", "Pinyon Script", "Pirata One", "Plaster", "Play", "Playball", "Playfair Display", "Playfair Display SC", "Podkova", "Poiret One", "Poller One", "Poly", "Pompiere", "Pontano Sans", "Poor Story", "Poppins", "Port Lligat Sans", "Port Lligat Slab", "Pragati Narrow", "Prata", "Preahvihear", "Press Start 2P", "Pridi", "Princess Sofia", "Prociono", "Prompt", "Prosto One", "Proza Libre", "Puritan", "Purple Purse", "Quando", "Quantico", "Quattrocento", "Quattrocento Sans", "Questrial", "Quicksand", "Quintessential", "Qwigley", "Racing Sans One", "Radley", "Rajdhani", "Rakkas", "Raleway", "Raleway Dots", "Ramabhadra", "Ramaraja", "Rambla", "Rammetto One", "Ranchers", "Rancho", "Ranga", "Rasa", "Rationale", "Ravi Prakash", "Red Hat Display", "Red Hat Text", "Redressed", "Reem Kufi", "Reenie Beanie", "Revalia", "Rhodium Libre", "Ribeye", "Ribeye Marrow", "Righteous", "Risque", "Roboto", "Roboto Condensed", "Roboto Mono", "Roboto Slab", "Rochester", "Rock Salt", "Rokkitt", "Romanesco", "Ropa Sans", "Rosario", "Rosarivo", "Rouge Script", "Rozha One", "Rubik", "Rubik Mono One", "Ruda", "Rufina", "Ruge Boogie", "Ruluko", "Rum Raisin", "Ruslan Display", "Russo One", "Ruthie", "Rye", "Sacramento", "Sahitya", "Sail", "Saira", "Saira Condensed", "Saira Extra Condensed", "Saira Semi Condensed", "Saira Stencil One", "Salsa", "Sanchez", "Sancreek", "Sansita", "Sarabun", "Sarala", "Sarina", "Sarpanch", "Satisfy", "Sawarabi Gothic", "Sawarabi Mincho", "Scada", "Scheherazade", "Schoolbell", "Scope One", "Seaweed Script", "Secular One", "Sedgwick Ave", "Sedgwick Ave Display", "Sevillana", "Seymour One", "Shadows Into Light", "Shadows Into Light Two", "Shanti", "Share", "Share Tech", "Share Tech Mono", "Shojumaru", "Short Stack", "Shrikhand", "Siemreap", "Sigmar One", "Signika", "Signika Negative", "Simonetta", "Single Day", "Sintony", "Sirin Stencil", "Six Caps", "Skranji", "Slabo 13px", "Slabo 27px", "Slackey", "Smokum", "Smythe", "Sniglet", "Snippet", "Snowburst One", "Sofadi One", "Sofia", "Song Myung", "Sonsie One", "Sorts Mill Goudy", "Source Code Pro", "Source Sans Pro", "Source Serif Pro", "Space Mono", "Special Elite", "Spectral", "Spectral SC", "Spicy Rice", "Spinnaker", "Spirax", "Squada One", "Sree Krushnadevaraya", "Sriracha", "Srisakdi", "Staatliches", "Stalemate", "Stalinist One", "Stardos Stencil", "Stint Ultra Condensed", "Stint Ultra Expanded", "Stoke", "Strait", "Stylish", "Sue Ellen Francisco", "Suez One", "Sumana", "Sunflower", "Sunshiney", "Supermercado One", "Sura", "Suranna", "Suravaram", "Suwannaphum", "Swanky and Moo Moo", "Syncopate", "Tajawal", "Tangerine", "Taprom", "Tauri", "Taviraj", "Teko", "Telex", "Tenali Ramakrishna", "Tenor Sans", "Text Me One", "Thasadith", "The Girl Next Door", "Tienne", "Tillana", "Timmana", "Tinos", "Titan One", "Titillium Web", "Trade Winds", "Trirong", "Trocchi", "Trochut", "Trykker", "Tulpen One", "Turret Road", "Ubuntu", "Ubuntu Condensed", "Ubuntu Mono", "Ultra", "Uncial Antiqua", "Underdog", "Unica One", "UnifrakturCook", "UnifrakturMaguntia", "Unkempt", "Unlock", "Unna", "VT323", "Vampiro One", "Varela", "Varela Round", "Vast Shadow", "Vesper Libre", "Vibes", "Vibur", "Vidaloka", "Viga", "Voces", "Volkhov", "Vollkorn", "Vollkorn SC", "Voltaire", "Waiting for the Sunrise", "Wallpoet", "Walter Turncoat", "Warnes", "Wellfleet", "Wendy One", "Wire One", "Work Sans", "Yanone Kaffeesatz", "Yantramanav", "Yatra One", "Yellowtail", "Yeon Sung", "Yeseva One", "Yesteryear", "Yrsa", "ZCOOL KuaiLe", "ZCOOL QingKe HuangYou", "ZCOOL XiaoWei", "Zeyada", "Zhi Mang Xing", "Zilla Slab", "Zilla Slab Highlight"]
}, {
  "name": "icfs",
  "examples": ["normal", "italic"],
  "required": false,
  "enum": ["normal", "italic"]
}, {
  "name": "iclocale",
  "examples": ["en"]
}, {
  "name": "icretina",
  "examples": [1],
  "required": false,
  "enum": ["0", "1"]
}, {
  "name": "icqrb",
  "pattern": "^[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?$",
  "examples": ["FFFFFF"],
  "required": false
}, {
  "name": "icqrf",
  "pattern": "^[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?$",
  "examples": ["000000"],
  "required": false
}];

var strToRegExp = (0, _memoize2.default)(function (regexp) {
  return new RegExp(regexp, 'i');
});

function buildURL(getAttribute) {

  function buildQuery() {
    return imageChartsParameters.reduce(function (query, attr) {
      var val = getAttribute(attr.name);

      if (attr.required && val === undefined) {
        throw new Error(attr.name + ' is required. Examples values ' + attr.examples.join(', '));
      }

      if (val === undefined) {
        return query;
      }

      if (attr.pattern && !strToRegExp(attr.pattern).test(val)) {
        throw new Error('"' + val + '" is an invalid value for ' + attr.name + '. Examples: ' + attr.examples.join(', '));
      }

      if (attr.enum && !(0, _includes2.default)(attr.enum, val)) {
        throw new Error('"' + val + '" is not an valid value for ' + attr.name + '. Valid values are: ' + JSON.stringify(attr.enum));
      }

      query[attr.name] = val;
      return query;
    }, {});
  }

  return 'https://image-charts.com/chart?' + _querystring2.default.stringify(buildQuery());
}

var MjChart = (_temp = _class = function (_BodyComponent) {
  _inherits(MjChart, _BodyComponent);

  function MjChart() {
    _classCallCheck(this, MjChart);

    return _possibleConstructorReturn(this, (MjChart.__proto__ || Object.getPrototypeOf(MjChart)).apply(this, arguments));
  }

  _createClass(MjChart, [{
    key: 'render',


    /*
      Render is the only required function in a component.
      It must return an html string.
    */


    // What the name suggests. Fallback value for this.getAttribute('attribute-name').

    // Tell the parser that our component won't contain other mjml tags
    value: function render() {
      var getAttribute = this.getAttribute.bind(this);

      var _getAttribute$split$m = getAttribute('chs').split('x').map(_toNumber2.default),
          _getAttribute$split$m2 = _slicedToArray(_getAttribute$split$m, 2),
          width = _getAttribute$split$m2[0],
          height = _getAttribute$split$m2[1];

      var attributes = MjChart.imageAttributes.reduce(function (attrs, _ref) {
        var name = _ref.name;

        attrs[name] = getAttribute(name);
        return attrs;
      }, {
        src: buildURL(getAttribute),
        width: width + 'px'
      });

      return this.renderMJML('<mj-image ' + this.htmlAttributes(attributes) + ' />');
    }

    // Tells the validator which attributes are allowed for mj-chart


    // Tells the validator which attributes are allowed for mj-chart

  }]);

  return MjChart;
}(_mjmlCore.BodyComponent), _class.endingTag = true, _class.allowedAttributes = {
  "cht": "string",
  "chd": "string",
  "chds": "string",
  "choe": "string",
  "chld": "string",
  "chxr": "string",
  "chof": "string",
  "chs": "string",
  "chdl": "string",
  "chdls": "string",
  "chg": "string",
  "chco": "string",
  "chtt": "string",
  "chts": "string",
  "chxt": "string",
  "chxl": "string",
  "chxs": "string",
  "chm": "string",
  "chls": "string",
  "chl": "string",
  "chlps": "string",
  "chma": "string",
  "chdlp": "string",
  "chf": "string",
  "chbr": "string",
  "chan": "string",
  "chli": "string",
  "icac": "string",
  "ichm": "string",
  "icff": "string",
  "icfs": "string",
  "iclocale": "string",
  "icretina": "string",
  "icqrb": "string",
  "icqrf": "string",
  "alt": "string",
  "name": "string",
  "srcset": "string",
  "sizes": "string",
  "title": "string",
  "rel": "string",
  "align": "string",
  "border": "string",
  "border-bottom": "string",
  "border-left": "string",
  "border-right": "string",
  "border-top": "string",
  "border-radius": "string",
  "container-background-color": "string",
  "fluid-on-mobile": "string",
  "padding": "string",
  "padding-bottom": "string",
  "padding-left": "string",
  "padding-right": "string",
  "padding-top": "string",
  "max-height": "string",
  "font-size": "string",
  "usemap": "string"
}, _class.defaultAttributes = {
  "align": "center",
  "border": "0",
  "padding": "10px 25px",
  "font-size": "13px"
}, _class.imageAttributes = [{
  "name": "alt",
  "link": "#mjml-image"
}, {
  "name": "name",
  "link": "#mjml-image"
}, {
  "name": "srcset",
  "link": "#mjml-image"
}, {
  "name": "sizes",
  "link": "#mjml-image"
}, {
  "name": "title",
  "link": "#mjml-image"
}, {
  "name": "rel",
  "link": "#mjml-image"
}, {
  "name": "align",
  "link": "#mjml-image",
  "defaultValue": "center"
}, {
  "name": "border",
  "link": "#mjml-image",
  "defaultValue": "0"
}, {
  "name": "border-bottom",
  "link": "#mjml-image"
}, {
  "name": "border-left",
  "link": "#mjml-image"
}, {
  "name": "border-right",
  "link": "#mjml-image"
}, {
  "name": "border-top",
  "link": "#mjml-image"
}, {
  "name": "border-radius",
  "link": "#mjml-image"
}, {
  "name": "container-background-color",
  "link": "#mjml-image"
}, {
  "name": "fluid-on-mobile",
  "link": "#mjml-image"
}, {
  "name": "padding",
  "link": "#mjml-image",
  "defaultValue": "10px 25px"
}, {
  "name": "padding-bottom",
  "link": "#mjml-image"
}, {
  "name": "padding-left",
  "link": "#mjml-image"
}, {
  "name": "padding-right",
  "link": "#mjml-image"
}, {
  "name": "padding-top",
  "link": "#mjml-image"
}, {
  "name": "max-height",
  "link": "#mjml-image"
}, {
  "name": "font-size",
  "link": "#mjml-image",
  "defaultValue": "13px"
}, {
  "name": "usemap",
  "link": "#mjml-image"
}], _temp);
exports.default = MjChart;


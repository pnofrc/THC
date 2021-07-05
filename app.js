let cookies = []
let cookiesDone = []
let cookiesChanged = []
let coo = Cookies.get();
let biscottino = Object.keys(coo)
var polypoints = []
var polypointsDone = []
var bez

// MAP 
let start = [52.07400906993372, 4.323222423616773]
var map = L.map('map', { scrollWheelZoom: true }).setView(start, 13);

let madonna = Cookies.get()

if (jQuery.isEmptyObject(madonna)){
  $("#map").css("display","none")
  $("#mapToggle").click(function () {
    location.reload()
})
}

arr=[]
arr2 = []

  // GPS ON
  var gps = (L.control.locate({
    locateOptions: {
            enableHighAccuracy: true,
            showPopup: true,strings: {
              title: `<div onclick="${geoFindMe()}"></div>`
              
          },
            maxZoom: 14,
            cacheLocation: true,
          getLocationBounds: true
}
})).addTo(map);
gps.start();


let constr = ['NNP','NN']


//DICTIONARY

var dictioPlaces = {
    '1646': [[52.072945249401826, 4.311648795181019], '<br><p>Dolor sit Amet</p>', '1646',[{'NNP': ['Boekhorststraat', 'Tarwe', 'Walnoot', 'Jani', 'Ruscica', 'Exhibition', 'July', 'Tarwe', 'Walnoot', 'Jani', 'Ruscica', 'Tarwe', 'Walnoot', 'Specificity', 'Ruscica'], 'FW': ['en', 'en'], 'VBZ': ['welcomes', 'presents', 'makes', 'turns', 'happens', 'becomes', 'becomes', 'gets', 'wants'], 'NN': ['everyone', 'weekend', 'solo', 'exhibition', 'artist', 'work', 'specificity', 'essence', 'something', 'thing', 'something', 'exhibition', 'relationship', 'meaning', 'shape', 'animal', 'shape', 'pattern', 'image', 'essence', 'meaning', 'sign', 'word', 'index', 'sentence', 'book', 'shelf', 'order'], 'TO': ['to', 'to'], 'DT': ['the', 'a', 'the', 'the', 'a', 'the', 'The', 'the', 'a', 'an', 'a', 'a', 'an', 'a', 'a', 'a', 'this'], 'VBG': ['opening', 'pushing'], 'IN': ['of', 'by', 'in', 'en', 'of', 'into', 'against', 'of', 'between', 'into', 'in', 'on'], 'WDT': ['which'], 'JJ': ['new', 'human', 'own'], 'NNS': ['questions', 'edges', 'signs', 'binaries', 'identities', 'complicates', 'questions', 'signs'], 'WP': ['what'], 'RP': ['up'], 'CC': ['and', 'and', 'and', 'or', 'or', 'or', 'and'], 'WRB': ['where', 'when'], 'RB': ['else', 'there'], 'VBP': ['are', 'have'], 'VBN': ['animated', 'put', 'put'], 'VB': ['take', 'disappear', 'disrupt'], 'PRP': ['they'], 'MD': ['will'], 'VBD': ['left']}]],
    "DurstBrittMayhew" : [[52.07177395858249, 4.3187814134640305], '<br><p>Dolor sit Amet</p>', 'Dürst Britt & Mayhew',[{'NNS': ['Plankenkoorts', 'works', 'works', 'shipyards', 'pieces', 'works', 'serves', 'paintings', 'accidents', 'paintings', 'paintings', 'works', 'times', 'monsters', 'feet', 'drawings', 'drawings', 'protagonists', 'humans', 'monsters', 'formats', 'materials'], 'NNP': ['Jacqueline', 'Jong', 'Exhibition', 'July', 'Nederlandse', 'Bank', 'Drachten', 'Friesland', 'De', 'Jong', 'Hanging', 'Women', 'Britt', 'Mayhew', 'Hanging', 'Women', 'Jong', 'Accidental', 'Suicidal', 'A', 'De', 'Jong'], 'IN': ['de', 'on', 'from', 'on', 'on', 'on', 'with', 'for', 'of', 'in', 'in', 'by', 'in', 'across', 'of', 'of', 'on', 'in', 'at', 'of', 'as', 'for', 'of', 'on', 'of', 'from', 'of', 'in', 'of', 'on', 'from', 'from', 'with', 'in'], 'DT': ['The', 'the', 'a', 'a', 'the', 'the', 'the', 'The', 'a', 'The', 'the', 'This', 'a', 'a', 'the', 'the', 'the', 'the', 'a', 'the'], 'NN': ['exhibition', 'sailcloth', 'panel', 'sailcloth', 'commission', 'branch', 'area', 'sailcloth', 'commission', 'series', 'sailcloth', 'installation', 'exhibition', 'piece', 'cloth', 'staging', 'series', 'sailcloth', 'board', 'road', 'work', 'car', 'crash', 'Despair', 'chaos', 'reminder', 'series', 'ink', 'panel', 'exhibition', 'restless', 'imagery', 'agility', 'haunting'], 'VBZ': ['focuses', 'is'], 'CC': ['and', 'and', 'and', 'and', 'Both', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'or', 'and'], 'RB': ['specifically', 'thus', 'never', 'far', 'away', 'again'], 'VBN': ['made', 'started', 'fascinated', 'built', 'included', 'painted'], 'VBG': ['Working', 'depicting'], 'VBD': ['was', 'were', 'came', 'discarded', 'started', 's', 'mounted'], 'JJ': ['many', 'various', 'further', 'monumental', 'unstretched', 'theatrical', 'other', 'various', 'reminiscent', 'stark', 'current', 'feverish', 'small', 'Indian', 'large', 'complete', 'hallucinatory', 'continuous', 'diverse'], 'WRB': ['where'], 'PRP': ['she', 'we', 'They', 'they'], 'VBP': ['are', 'are', 'are', 'have', 'show', 's'], 'FW': ['de'], 'WDT': ['which'], 'TO': ['to', 'to', 'to'], 'VB': ['fight', 'try', 'find', 'stage', 'be'], 'CD': ['two']}]],
    'Fotomuseum': [[52.09565269957886, 4.276968588519751], '<br><p>Dolor sit Amet</p>', 'Fotomuseum Den Haag',[{'NNP': ['Paper', 'Light', 'Popel', 'Coumou', 'Exhibition', 'July', 'Popel', 'Coumou', 'Popel', 'Coumou', 'Paper', 'Light', 'Fotomuseum', 'Den', 'Haag', 'Time', 'Popel', 'Coumou', 'Workshop', 'July', 'Art', 'Weekend', 'Popel', 'Coumou'], 'VBZ': ['plays', 'collages', 'adds', 'comes', 'is', 'becomes', 'has', 'reacts', 'makes', 'brings', 'invites'], 'IN': ['with', 'of', 'in', 'of', 'By', 'In', 'In', 'with', 'by', 'in', 'On', 'In', 'for', 'in', 'of', 'with', 'in', 'into', 'via', 'During', 'into', 'with', 'via'], 'DT': ['the', 'the', 'a', 'a', 'the', 'this', 'the', 'a', 'the', 'a', 'a', 'a', 'the', 'the', 'the', 'the', 'the', 'an', 'the', 'a', 'a'], 'RBS': ['most'], 'JJ': ['important', 'targeted', 'third', 'flat', 'high', 'vast', 'simple', 'visible', 'desolate', 'natural', 'geometric', 'new', 'architectural', 'slot', 'light'], 'NNS': ['elements', 'windows', 'forms', 'lines', 'plays', 'reservations', 'collages', 'participants'], 'NN': ['photography', 'work', 'light', 'paper', 'perception', 'reality', 'paper', 'tion', 'dimension', 'paper', 'relief', 'way', 'surface', 'life', 'room', 'depth', 'sun', 'lawn', 'house', 'dark', 'landscape', 'work', 'exhibition', 'museum', 'light', 'space', 'exhibition', 'installation', 'workshop', 'glimpse', 'work', 'process', 'life', 'paper', 'Price', 'material'], 'CC': ['and', 'and', 'and', 'and', 'and', 'and'], 'VBG': ['giving', 'shining', 'turning', 'including'], 'PRP': ['she', 'She', 'itself', 'She', 'She', 'she', 'her', 'them', 'She', 'themselves'], 'TO': ['to', 'to', 'to', 'to', 'to'], 'VBN': ['created', 'illuminated', 'created'], 'VBP': ['loom'], 'RB': ['up', 'especially', 'then'], 'MD': ['will', 'will', 'will'], 'VB': ['give', 'give', 'show', 'play', 'Start'], 'WRB': ['how'], 'NNPS': ['Reservations']}]],
    'GalerieMauritsvandeLaar': [[52.0743590401309, 4.310463657642463], '<br><p>Dolor sit Amet</p>', 'Galerie Maurits van de Laar',[{'NNP': ['Monster', 'Anya', 'Kevin', 'Simon', 'Mancera', 'Peter', 'Vos', 'Jan', 'Brokof', 'Exhibition', 'July', 'Anya', 'Kevin', 'Simon', 'Mancera', 'Peter', 'Vos', 'Jan', 'Brokof'], 'CC': ['and', 'and', 'but', 'and', 'but', 'and', 'and', 'and', 'or'], 'WP': ['What', 'What', 'who', 'whom'], 'NNS': ['characteristics', 'rules', 'boundaries', 'creatures', 'artists', 'desires', 'fears', 'complexities', 'monsters', 'differences'], 'VBP': ['delineate', 'embody', 'arise', 'interact'], 'DT': ['a', 'The', 'a', 'the', 'the', 'a', 'the', 'a', 'The', 'a', 'the', 'the', 'a', 'this', 'the', 'this', 'the', 'the', 'the', 'The', 'the', 'the', 'this', 'The', 'the', 'the', 'the'], 'NN': ['monster', 'work', 'group', 'exhibition', 'duplicity', 'creature', 'norm', 'rarity', 'quality', 'encounter', 'monster', 'observer', 'unlikeness', 'relation', 'way', 'encounter', 'mirror', 'meeting', 'monster', 'monster', 'blur', 'easiness', 'process', 'identification', 'dissimilarity', 'fear', 'monster', 'transform', 'enemy'], 'VBZ': ['does', 'comes', 'explores', 'exists', 'provides', 'pushes', 'encourages', 'is', 'is', 'is', 'becomes'], 'PRP': ['it', 'it', 'oneself', 'it', 'him', 'it', 'we', 'us', 'ourselves', 'we', 'we', 'them'], 'VB': ['transgress', 'be', 'recognize', 'define', 'feel', 'identify', 'ask', 'embrace', 'reject'], 'TO': ['to', 'to', 'to', 'to', 'to', 'to', 'to', 'to'], 'VBN': ['labeled', 'presented'], 'IN': ['as', 'of', 'in', 'of', 'outside', 'with', 'with', 'in', 'because', 'in', 'like', 'in', 'by', 'throughout', 'between', 'until', 'at', 'by', 'in', 'of', 'with', 'if', 'out', 'of', 'from'], 'JJ': ['such', 'monstrous', 'unique', 'other', 'certain', 'Little', 'little', 'possible', 'doubtful'], 'RB': ['together', 'also', 'empathy', 'not', 'ally'], 'WDT': ['that', 'that', 'that'], 'VBG': ['being', 'looking', 'looking', 'prompting', 'remaining'], 'RBR': ['more', 'more'], 'MD': ['will', 'will', 'Can']}]],
    'GalerieRamakers':[[52.081893912086315, 4.301621998121746],'<br><p>ciao</p>', 'Galerie Ramakers',[{'NNP': ['Cool', 'Gray', 'Yellow', 'C', 'Marian', 'Bijlenga', 'Hieke', 'Luik', 'Ien', 'Lucas', 'Michel', 'Hoogervorst', 'July', 'Cool', 'Gray', 'Yellow', 'C', 'Bijlenga', 'Ien', 'Lucas', 'Bright', 'Window', 'Galerie', 'Toussaintkade', 'Hague', 'Royal', 'Stables', 'Palace', 'Garden'], 'NN': ['Exhibition', 'group', 'exhibition', 'gallery', 's', 'stable', 'series', 'hair', 'series', 'grid', 'work', 'summer', 'show', 'century', 'house', 'center', 'floor', 'area', 'adjacent', 'garden', 'display'], 'VBZ': ['is', 'shows', 'has', 'is', 'is'], 'DT': ['a', 'the', 'Some', 'the', 'a', 'a', 'a', 'All', 'this', 'a', 'the', 'the', 'The', 'the', 'the', 'The', 'a', 'the'], 'IN': ['with', 'from', 'of', 'of', 'from', 'of', 'with', 'in', 'in', 'since', 'in', 'on', 'in', 'of', 'opposite', 'for', 'of'], 'NNS': ['artists', 'highlights', 'works', 'scales', 'paintings', 'colors', 'stripes', 'artists', 'doors', 'sculptures'], 'VBP': ['are', 'add'], 'JJ': ['Marian', 'wonderful', 'fish', 'new', 'soft', 'dazzling', 'nineteenth', 'canal', 'sleekly'], 'WP': ['who'], 'JJR': ['smaller'], 'VBD': ['made', 'made', 'opened'], 'CC': ['and', 'and', 'and', 'and', 'and'], 'VBN': ['called', 'toned', 'been', 'housed', 'designed'], 'VBG': ['participating'], 'JJS': ['newest'], 'TO': ['to', 'to'], 'NNPS': ['Ramakers'], 'PRP': ['it'], 'RB': ['especially']}]],
    'Grey': [[52.07463690009965, 4.312364801820798], '<br><p>Dolor sit Amet</p>', 'The Grey Space in the Middle',[{'VBG': ['Facing', 'relating', 'relating', 'going'], 'MD': ['can', 'will', 'will', 'will', 'can', 'will', 'can', 'would'], 'PRP': ['we', 'it', 'you', 'you'], 'RB': ['still', 'previously', 'as', 'well', 'now', 'just'], 'VB': ['run', 'approach', 'be', 'be', 'lie', 'be', 'leave', 'prepare', 'be', 'find', 'like'], 'NNP': ['Livestream', 'July', 'Performance', 'Sid', 'Dankers', 'Mike', 'Megens', 'Live', 'Streaming', 'Approach', 'Different', 'Art', 'Weekend', 'Hague', 'Thursday', 'Dinner', 'Session', 'Hague', 'Contemporary', 'Art', 'Weekend', 'Art', 'Food', 'July', 'Every', 'Thursday', 'Grey', 'Space', 'Middle', 'DJs', 'Hague', 'Contemporary', 'Art', 'Weekend', 'Thursday', 'Dinner', 'Session', 'DJs', 'Reservations', 'WhatsApp'], 'IN': ['From', 'with', 'of', 'in', 'of', 'as', 'for', 'with', 'between', 'of', 'as', 'For', 'of', 'like', 'of', 'into', 'through', 'on', 'from', 'in', 'because', 'in', 'provide', 'with', 'During', 'on', 'from', 'via'], 'DT': ['a', 'a', 'A', 'The', 'both', 'a', 'the', 'a', 'an', 'a', 'this', 'the', 'a', 'the', 'The', 'a', 'a', 'The', 'a', 'The', 'The', 'the', 'a', 'an', 'the', 'a', 'The', 'a', 'The', 'the'], 'JJ': ['radical', 'different', 'visual', 'live', 'Radical', 'other', 'constant', 'possible', 'abstract', 'different', 'present', 'such', 'physical', 'mobile', 'static', 'performative', 'different', 'static', 'human', 'affordable', 'vegan', 'musical', 'special', 'website', 'cafe', 'terrace', 'open', 'vegan'], 'NN': ['attempt', 'question', 'engage', 'culture', 'stream', 'work', 'space', 'form', 'livestream', 'studio', 'opportunity', 'experimentation', 'collaboration', 'movement', 'structure', 'nique', 'role', 'assignment', 'performativity', 'contexts', 'fatigue', 'rest', 'communication', 'concept', 'structure', 'conservation', 'preservation', 'art', 'practice', 'emphasis', 'situation', 'attitude', 'nobody', 'structure', 'meal', 'outline', 'guest', 'chef', 'menu', 'Start', 'Price', 'text', 'please', 'mention', 'dish'], 'TO': ['to', 'to', 'to', 'to', 'to', 'to'], 'CC': ['and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'or', 'or'], 'NNS': ['tions', 'artists', 'layers', 'concepts', 'tions', 'Concepts', 'actions', 'interventions', 'tions', 'consequences', 'evenings', 'varies', 'reservations'], 'VBD': ['facilitated', 'provided', 'was', 'made', 'were', 'x'], 'EX': ['There', 'There', 'there'], 'JJR': ['more'], 'WDT': ['that', 'that', 'which', 'which'], 'VBZ': ['is', 'is', 'invites'], 'VBN': ['determined', 'revised', 'put', 'formed'], 'RBR': ['more'], 'VBP': ['are']}]],
    'Heden': [[52.084756321851984, 4.312961869286151], '<br><p>Dolor sit Amet</p>', 'Heden',[{'NNP': ['Heden', 'Recollected', 'Cas', 'Oorthuys', 'Marlene', 'Dumas', 'Tomas', 'Rajlich', 'Persijn', 'Broersen', 'Margit', 'Exhibition', 'July', 'Heden', 'Cas', 'Oorthuys', 'Marlene', 'Dumas', 'Tomas', 'Rajlich', 'Persijn', 'Broersen', 'Margit', 'Art', 'Breakfast', 'Art', 'Food', 'July', 'Start', 'Saturday', 'Heden', 'Art', 'Breakfast', 'Marlene', 'Dumas'], 'VBZ': ['presents', 'starts', 'takes'], 'DT': ['a', 'This', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'a', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'these', 'the', 'the', 'a'], 'JJ': ['major', 'recent', 'intimate', 'monochrome', 'contemporary', 'guided', 'such', 'experimental', 'young', 'll', 'dive', 'modern', 'contemporary', 'free'], 'NN': ['collection', 'exhibition', 'journey', 'collection', 'vintage', 'photography', 'video', 'work', 'breakfast', 'tour', 'collection', 'hidden', 'exhibition', 'talent', 'deeper', 'look', 'use', 'source', 'inspiration', 'Start', 'Price', 'info'], 'IN': ['in', 'through', 'with', 'from', 'via', 'from', 'From', 'by', 'of', 'from', 'of', 'of', 'with', 'through', 'During', 'behind', 'in', 'about', 'of', 'as', 'by', 'into', 'of', 'at', 'of', 'of', 'for', 'via'], 'WDT': ['which'], 'PRP': ['we', 'you', 'you', 'You', 'we'], 'VBP': ['look'], 'RB': ['back', 'forward', 'Together'], 'CC': ['and', 'and', 'and', 'and', 'and', 'and'], 'NNS': ['works', 'masterpieces', 'decades', 'acquisitions', 'portraits', 'paintings', 'stories', 'artworks', 'works', 'names', 'artworks', 'themes', 'works', 'materials', 'masters', 'artists', 'Reservations'], 'VBG': ['intervening'], 'TO': ['to', 'to', 'to'], 'RBS': ['most'], 'MD': ['will', 'will', 'can'], 'VB': ['discover', 'learn', 'discover', 'see', 'be'], 'RBR': ['more'], 'VBN': ['established'], 'WRB': ['how']}]],
    'KABK': [[52.08173887878792, 4.319883067186774], '<br><p>Dolor sit Amet</p>', 'Royal Academy of Art, Den Haag',[{'NNP': ['Graduation', 'Show', 'Various', 'Exhibition', 'July', 'From', 'Thursday', 'July', 'Sunday', 'July', 'Bachelor', 'Master', 'Graduation', 'Show', 'KABK', 'KABK', 'Graduation', 'Show'], 'NNPS': ['Artists'], 'TO': ['to', 'to', 'to', 'to', 'To', 'to'], 'JJR': ['more'], 'IN': ['than', 'during', 'with', 'in', 'of', 'by', 'for', 'in', 'In', 'on', 'on'], 'JJ': ['international', 'final', 'independent', 'investigative', 'experimental', 'visual', 'conceptual', 'chosen', 'responsible'], 'CC': ['and', 'and', 'and', 'and', 'and', 'and', 'and', 'and'], 'NNS': ['students', 'projects', 'students', 'artists', 'designers', 'mindsets', 'abilities', 'disciplines', 'contributes', 'measures', 'rules', 'graduates'], 'VBP': ['are', 'produce', 'continue'], 'VBG': ['showcasing', 'opening'], 'NN': ['art', 'design', 'mindset', 'graduation', 'work', 'work', 'discourse', 'society', 'ment', 'academy', 'way', 'end', 'visiting', 'beforehand', 'meantime', 'tion', 'website'], 'DT': ['the', 'The', 'This', 'the', 'The', 'all', 'the', 'the', 'the', 'a', 'this', 'the', 'the', 'the', 'the'], 'VBZ': ['educates', 'reflects', 'advances', 'follows'], 'VB': ['become', 'host', 'change', 'work', 'be'], 'PRP': ['they'], 'WDT': ['that'], 'RB': ['strictly', 'very', 'shortly'], 'VBN': ['set', 'represented'], 'MD': ['may', 'will']}]],
    'KM21': [[52.09098545286892, 4.279123116962104], '<br><p>Dolor sit Amet</p>', 'KM21',[{'NNP': ['Upaya', 'Mickey', 'Yang', 'Exhibition', 'July', 'A', 'Mickey', 'Yang', 'Yang', 'Upaya', 'Netherlands', 'Time', 'Yasmijn', 'Yarram', 'Mickey', 'Yang', 'Artist', 'Talk', 'July', 'Art', 'Weekend', 'Yasmijn', 'Jarram', 'Mickey', 'Yang', 'Upaya', 'Start', 'Museumkaart'], 'NN': ['plasma', 'globe', 'mosquito', 'coil', 'sound', 'bowl', 'sense', 'humor', 'tation', 'pursuit', 'spring', 'museum', 'solo', 'exhibition', 'craft', 'language', 'appropriation', 'daughter', 'identity', 'heart', 'work', 'wood', 'metal', 'smoke', 'reflection', 'conversation', 'curator', 'influence', 'identity', 'work', 'process', 'creation', 'exhibition', 'Price'], 'DT': ['a', 'the', 'a', 'a', 'the', 'the', 'This', 'an', 'the', 'the', 'this', 'the', 'the', 'the', 'the', 'the'], 'CC': ['and', 'and', 'and', 'and', 'or', 'and'], 'VBG': ['recurring', 'showing'], 'IN': ['of', 'with', 'of', 'of', 'in', 'of', 'on', 'in', 'as', 'of', 'at', 'of', 'In', 'as', 'with', 'as', 'via', 'in', 'with', 'During', 'about', 'of', 'of', 'upon', 'via'], 'JJ': ['singing', 'Asian', 'spiritual', 'Western', 'cultural', 'mixed', 'cultural', 'poetic', 'robust', 'such', 'ephemeral', 'such', 'slot', 'mixed', 'cultural', 'free'], 'VBZ': ['illuminates', 'presents', 'lies', 'combines'], 'NNS': ['philosophies', 'practices', 'parents', 'installations', 'materials', 'effects', 'reservations'], 'VBD': ['s'], 'RB': ['first'], 'VBN': ['Raised'], 'PRP': ['she', 'her'], 'MD': ['will'], 'VB': ['talk'], 'TO': ['to'], 'NNPS': ['Reservations']}]],
    'Kunstmuseum': [[52.089918711427686, 4.28064744045068], '<br><p>Dolor sit Amet</p>', 'Kunstmuseum Den Haag',[{'NNP': ['Bob', 'Bonies', 'Bob', 'Bonies', 'Exhibition', 'July', 'Hague', 'Bob', 'Bonies', 'Netherlands', 'Time', 'Bob', 'Bonies', 'Film', 'July', 'Filmmaker', 'Gerrit', 'Schreurs', 'Bob', 'Bonies', 'Kunstmuseum', 'Den', 'Haag', 'Art', 'Price', 'Museumkaart'], 'DT': ['The', 'an', 'the', 'the', 'the', 'this', 'The', 'the', 'the', 'The', 'the', 'the', 'the', 'the'], 'NN': ['artist', 'oeuvre', 'art', 'face', 'art', 'day', 'color', 'nothing', 'color', 'form', 'creation', 'retrospective', 'studio', 'film', 'end', 'auditorium', 'museum', 'Start', 'opening'], 'VBZ': ['has', 'has'], 'VBN': ['built', 'been', 'defined', 'screened'], 'RP': ['up'], 'VBG': ['spanning', 'making', 'showing'], 'CD': ['six'], 'NNS': ['decades', 'sixties', 'paintings', 'planes', 'reservations', 'hours'], 'IN': ['Since', 'of', 'in', 'via', 'of', 'of', 'in', 'with', 'in', 'during', 'in', 'of', 'during', 'upon', 'via'], 'PRP': ['he', 'they', 'him'], 'JJ': ['crete', 'geometric', 'abstract', 'abstract', 'contemporary', 'monochrome', 'slot', 'continuous', 'free'], 'WDT': ['that'], 'VBP': ['have', 'remain', 'refer', 'are'], 'CC': ['and', 'but', 'and', 'and'], 'TO': ['to', 'to'], 'WP': ['what'], 'VBD': ['followed', 'spoke'], 'MD': ['will'], 'VB': ['be'], 'RB': ['continuously'], 'NNPS': ['Reservations']}]],
    'NEST': [[52.07759403619619, 4.29164401175612], '<br><p>Dolor sit Amet</p>', 'NEST',[{'NNP': ['III', 'Exhibition', 'July', 'Ana', 'Navas', 'Evelyn', 'Taocheng', 'Wang', 'Mila', 'Lanfermeijer', 'Donna', 'Milligen', 'Bielke', 'Time', 'LOUDER', 'Poetry', 'Music', 'July', 'LOUDER', 'Hague', 'July', 'Energiekwartier', 'Zaal', 'Studio', 'Loos', 'NEST', 'DJ', 'Border', 'Art', 'Weekend'], 'PRP': ['She', 'she', 'she', 'they', 'You', 'You', 'It'], 'VBZ': ['spins', 'sures', 'cuts', 'is', 'takes', 'is', 'coincides'], 'DT': ['the', 'the', 'the', 'this', 'the', 'the', 'a', 'the', 'a', 'The', 'the', 'the', 'the', 'This', 'an'], 'NN': ['thread', 'thread', 'group', 'exhibition', 'meaning', 'repetition', 'appreciation', 'appropriation', 'architect', 'van', 'story', 'friendship', 'kinship', 'autonomy', 'Reproduction', 'mimicry', 'appreciate', 'place', 'history', 'festival', 'place', 'literature', 'ken', 'word', 'music', 'literature', 'writer', 'terrace', 'initiative', 'information'], 'JJ': ['thread', 'artistic', 'important', 'own', 'art', 'slot', 'new', 'alternative', 'literary', 'institute', 'alternative', 'Dutch', 'free'], 'IN': ['In', 'of', 'In', 'by', 'about', 'of', 'within', 'in', 'via', 'in', 'on', 'in', 'around', 'From', 'of', 'of', 'with', 'For'], 'NNS': ['artists', 'rooms', 'intricacies', 'methods', 'reservations', 'll', 'll', 'crossovers', 'talents'], 'CC': ['and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and'], 'VBD': ['explore'], 'CD': ['seven'], 'RB': ['specially', 'art'], 'VBN': ['designed'], 'VBP': ['tell', 'are', 'have', 'have', 'see'], 'TO': ['to', 'to', 'to', 'to'], 'VB': ['understand', 'interpret', 'scream', 'scream', 'poetry', 'Discover', 'check'], 'RP': ['out', 'up'], 'VBG': ['Crossing'], 'WDT': ['which'], 'JJR': ['more']}]],
    'Nono': [[52.08130187650738, 4.282041415143106], '<br><p>Dolor sit Amet</p>', 'Gallery Nono',[{'VB': ['Welcome', 'become', 'discover'], 'TO': ['to', 'to', 'to', 'to', 'to'], 'NNP': ['Nono', 'Nuria', 'Maria', 'Win', 'Nival', 'Floris', 'Hovers', 'Exhibition', 'July', 'Welcome', 'Nuria', 'Maria', 'Win', 'Nival', 'Floris', 'Hovers', 'Nuria', 'Maria', 'Art', 'Italy', 'Minimal', 'Wim', 'Nival', 'Floris', 'Hovers'], 'CC': ['and', 'and', 'and', 'but', 'and', 'but', 'and', 'but', 'and', 'and', 'and'], 'DT': ['the', 'a', 'a', 'a', 'an', 'the', 'an', 'the', 'the', 'an', 'a', 'This', 'all'], 'JJ': ['new', 'small', 'personal', 'favorite', 'rhythmic', 'thoughtful', 'beautiful', 'harmonious', 'Many', 'playful'], 'NN': ['gallery', 'Nono', 'group', 'exhibition', 'gallery', 'selection', 'life', 'artist', 'penny', 'environment', 'art', 'work', 'doesn', 't', 'force', 'oeuvre', 'dialogue', 'form', 'construction', 'colour', 'interplay', 'man', 'machine', 'approach', 'time'], 'VBZ': ['is', 'invites', 'is'], 'VBG': ['introducing', 'being'], 'PRP': ['you', 'I', 'I', 'I', 'I', 'I', 'myself', 'itself', 'you', 'you', 'it'], 'IN': ['with', 'of', 'in', 'of', 'for', 'in', 'with', 'like', 'through', 'of', 'upon', 'in', 'with', 'by', 'of', 'in', 'between', 'on'], 'NNS': ['artists', 'shares', 'interests', 'months', 'designs', 'compositions', 'artworks', 'wheels'], 'VBD': ['was', 'thought', 'was', 'went', 'dropped', 'felt', 'lived'], 'RB': ['always', 'never', 'so', 'finally', 'almost', 'somewhat'], 'CD': ['one', 'two'], 'JJS': ['biggest'], 'MD': ['would'], 'WRB': ['when'], 'JJR': ['younger'], 'EX': ['there'], 'VBN': ['filled', 'set', 'Achieved'], 'WDT': ['which'], 'VBP': ['are', 'betray', 'are']}]],
    'PNF':[[52.072353820836085, 4.311721236205367],'<br><p>Dolor sit Amet</p>', 'Page Not Found',[{'NN': ['Page', 'exhibition', 'magazine', 'artist', 'magazine', 'effort', 'field', 'publishing', 'search', 'performance', 'puppeteering', 'archive', 'issue', 'nature', 'grotesque', 'publication', 'grotesque', 'novel', 'installation', 'collaboration', 'sculptor', 'podium', 'figure', 'Basking', 'glow', 'character', 'crawls', 'soundtrack', 'poetry'], 'RB': ['Not', 'playfully', 'Not', 'Together'], 'NNP': ['Found', 'Pavilionesque', 'Paulina', 'Olowska', 'Pavilionesque', 'Pavilionesque', 'Pavilionesque', 'Walker', 'Art', 'Center', 'GROTESQUE', 'CARNAVALESQUE', 'BURLESQUE', 'EPIDEMIC', 'DANSE', 'BRE', 'ARABESQUE', 'Art', 'Weekend', 'Page', 'Found', 'Paulina', 'Olowska', 'Zuza', 'Golinska', 'Pavilionesque', 'Jacek', 'Sienkiewicz', 'Roland', 'Topor'], 'NNS': ['presents', 'materials', 'arts', 'manifestations', 'artworks', 'interviews', 'essays', 'curtains', 'teases'], 'DT': ['an', 'the', 'the', 'a', 'the', 'an', 'The', 'the', 'the', 'the', 'The', 'a', 'a', 'a', 'the', 'the', 'this', 'a'], 'IN': ['around', 'by', 'in', 'in', 'of', 'In', 'for', 'of', 'of', 'by', 'on', 'of', 'For', 'by', 'in', 'with', 'as', 'in', 'of', 'by', 'on'], 'VBN': ['created', 'Founded', 'connected', 'copublished', 'choreographed', 'composed', 'based'], 'JJ': ['acclaimed', 'collaborative', 'performative', 'theatrical', 'artistic', 'unpublished', 'active', 'contemporary', 'dramatic', 'third', 'extraordinary', 'modern', 'theatrical', 'singular', 'main', 'thespian', 'golden'], 'VBZ': ['is', 'is', 'focuses', 'proclaims', 'features', 'unveils', 'stands'], 'CC': ['and', 'and', 'and', 'and', 'and', 'and', 'and'], 'TO': ['to', 'to'], 'VB': ['theatre'], 'JJS': ['latest'], 'PRP': ['It', 'itself', 'they'], 'VBD': ['created', 's'], 'WRB': ['where']}]],
    'PP': [[52.08177307188824, 4.301725011614704], '<br><p>Dolor sit Amet</p>', 'Parts Project',[{'NNP': ['Meet', 'Me', 'Middle', 'Gerrit', 'Bakel', 'Hadassah', 'Emmerich', 'Yoko', 'Ono', 'Rita', 'Ponce', 'Exhibition', 'July', 'How', 'Meet', 'Me', 'Middle', 'Gerrit', 'Bakel', 'Hadassah', 'Emmerich', 'Ono', 'Rita', 'Ponce', 'Performance', 'July', 'Performance', 'Rita', 'Ponce', 'Rita', 'Ponce', 'Ponce', 'Parts', 'Project', 'Price'], 'IN': ['in', 'with', 'for', 'between', 'in', 'as', 'for', 'in', 'of', 'between', 'With', 'by', 'on', 'by', 'de', 'with', 'into', 'of', 'around', 'Out', 'of', 'For', 'for', 'in', 'with', 'in', 'between', 'during', 'via'], 'DT': ['the', 'another', 'the', 'the', 'the', 'These', 'the', 'the', 'a', 'the', 'an', 'the', 'the', 'this', 'an', 'each', 'the', 'the', 'the', 'the'], 'NN': ['van', 'empathise', 'person', 'boundary', 'lie', 'extent', 'order', 'starting', 'point', 'group', 'exhibition', 'space', 'van', 'Conversation', 'idea', 's', 'work', 'artist', 'identification', 'dreamlike', 'ink', 'event', 'conversation', 'boundary', 'self', 'Start', 'opening'], 'CC': ['and', 'or', 'and', 'and', 'and', 'and', 'and'], 'FW': ['de', 'Yoko', 'de', 'de', 'de'], 'RB': ['well', 'truly', 'deeply', 'completely', 'mainly', 'so'], 'MD': ['can', 'will'], 'PRP': ['you', 'you', 'you', 'yourself', 'she', 'her'], 'VBP': ['know', 'understand', 'do', 'need', 'serve', 'explore', 'probe'], 'VB': ['feel', 'define', 'be', 'engage'], 'WRB': ['Where'], 'VBZ': ['does', 'starts', 'creates', 'has'], 'JJ': ['other', 'other', 'physical', 'mental', 'inner', 'surreal', 'other', 'mental', 'other', 'continuous', 'free'], 'TO': ['To', 'to', 'to'], 'WP': ['what'], 'NNS': ['questions', 'works', 'people', 'works', 'Pieces', 'worlds', 'people', 'works', 'drawings', 'visitors', 'hours', 'Reservations'], 'WDT': ['that', 'that'], 'VBN': ['based', 'devised', 'invited'], 'VBG': ['stepping', 'doing']}]],
    'Stroom': [[52.08357264666274, 4.303884855889337], '<br><p>Dolor sit Amet</p>', 'Stroom Den Haag',[{'NNS': ['Matters', 'matters', 'matters', 'Matters', 'tations', 'artists', 'ways', 'walks', 'podcasts', 'podcasts', 'walks', 'artists', 'scientists', 'listeners', 'themes', 'expeditions', 'signs', 'changes'], 'NNP': ['Acts', 'Yeon', 'Sung', 'Exhibition', 'July', 'Matters', 'Acts', 'Yeon', 'Sung', 'Hague', 'South', 'Korea', 'Stroom', 'Stroom', 'Den', 'Haag', 'OpZicht', 'Seminar', 'Den', 'Haag', 'Podcast', 'July', 'Hague', 'Walking', 'Seminars', 'Stroom', 'Den', 'Haag', 'Hague', 'Ernsten', 'Visser'], 'VBZ': ['is', 'is', 'transcends', 'is', 'is', 'offers', 'is', 'is'], 'DT': ['a', 'an', 'both', 'The', 'The', 'a', 'the', 'an', 'these', 'a', 'the', 'the', 'the', 'the', 'the', 'The', 'this', 'the', 'the', 'The', 'The', 'a', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'The', 'The'], 'NN': ['installation', 'designer', 'presentation', 'demonstration', 're', 'construction', 'practice', 'copper', 'air', 'pollutant', 'center', 'chroma', 'domain', 'installation', 'interface', 'space', 'realm', 'internet', 'public', 'space', 'part', 'series', 'work', 'future', 'space', 'glimpse', 'city', 'future', 'walking', 'attention', 'listener', 'role', 'art', 'transformation', 'ronment', 'project'], 'IN': ['by', 'in', 'at', 'of', 'de', 'of', 'as', 'at', 'By', 'in', 'between', 'of', 'in', 'of', 'of', 'of', 'of', 'in', 'of', 'via', 'In', 'of', 'by', 'of', 'of', 'whether', 'During', 'of', 'of', 'that', 'in', 'of', 'by'], 'CC': ['and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'or', 'and', 'and', 'and'], 'JJ': ['graphic', 'artistic', 'such', 'physical', 'pixelated', 'physical', 'virtual', 's', 'promising', 'artistic', 'public', 'available', 'urgent', 'urban', 'future', 's', 'urban', 'Christian'], 'VBN': ['based', 'invited', 'registered', 'released', 'drawn', 'curated'], 'VBG': ['placing', 'releasing', 'featuring', 'Walking'], 'TO': ['to', 'to', 'to', 'to', 'to'], 'VB': ['enter', 'navigate', 'have', 'address', 'play'], 'NNPS': ['Acts'], 'RB': ['newly', 'now', 'not'], 'WP': ['What'], 'VBP': ['are', 'are', 'want', 'await'], 'CD': ['four'], 'PRP': ['we', 'we', 'us'], 'MD': ['will', 'can', 'must'], 'WDT': ['that']}]],
    'StudioSaber':[[51.14185891020335, 5.591358149666528], '<br><p>Dolor sit Amet</p>', 'Studio Saber',[{'NNP': ['Open', 'Studio', 'July', 'Days', 'Type', 'Latin', 'Font', 'Saber', 'Javanmard', 'Studio', 'Saber'], 'IN': ['of', 'of', 'of', 'of', 'for', 'as', 'of', 'from', 'of', 'for', 'around', 'For', 'of', 'since', 'for', 'from', 'that', 'for', 'like', 'of', 'of'], 'VBZ': ['is', 'invites', 'aims', 'shapes', 'helps'], 'DT': ['a', 'the', 'the', 'A', 'the', 'a', 'each', 'a', 'the', 'the', 'the', 'This', 'a', 'the', 'The', 'these', 'a', 'the', 'the', 'the', 'these', 'any', 'the', 'the'], 'NN': ['project', 'interpretation', 'alphabet', 'call', 'letter', 'number', 'day', 'act', 'outcome', 'ability', 'project', 'space', 'creation', 'typography', 'edition', 'idea', 'typeface', 'letter', 'letter', 'tool', 'language', 'founder'], 'WDT': ['that', 'which'], 'NNS': ['designers', 'illustrators', 'artists', 'letters', 'numbers', 'boundaries', 'letterforms', 'participants', 'days', 'symbols', 'thousands', 'perspectives', 'possibilities', 'tools', 'tools', 'derives', 'proportions', 'weights', 'possibilities', 'brushes', 'shapes', 'restrictions', 'tools', 'forms'], 'CC': ['and', 'and', 'or', 'and', 'and', 'and'], 'JJ': ['graphic', 'particular', 'yearly', 'open', 'creative', 'utive', 'global', 'simultaneous', 'same', 'different', 'endless', 'graphic', 'own', 'geometric', 'variable', 'other', 'drawing', 'own', 'visual', 'new'], 'TO': ['to', 'to', 'to', 'to', 'to', 'to'], 'VB': ['express', 'design', 'represent', 'be', 'use', 'explore'], 'VBG': ['exploring', 'showing', 'developing', 'including', 'making', 'handling', 'Letting'], 'WRB': ['where'], 'VBP': ['are', 'have', 'aim', 'give', 'reject', 'embrace', 'find'], 'VBN': ['challenged', 'been'], 'PRP': ['I', 'I', 'I', 'I', 'me', 'I', 'them', 'I', 'me'], 'VBD': ['used', 'designed'], 'RB': ['Therefore', 'just', 'instead']}]],
    'TheHagueStreetArt': [[52.065505645584444, 4.32051466134149], '<br><p>Dolor sit Amet</p>', 'The Hague Street Art' ,[{'NN': ['Exhibition', 'organization', 'street', 'art', 'team', 'art', 'stage', 'opportunity', 'street', 'art', 'worldwide', 'movement', 'art', 'field', 'target', 'group', 'participant', 'party', 'platform', 'visit', 'art', 'installation', 'duo', 'duo', 'Price', 'info'], 'NNP': ['July', 'Art', 'Talks', 'Hague', 'Street', 'Art', 'Hague', 'Hague', 'Art', 'Weekend', 'Hague', 'Street', 'Art', 'Hague', 'Street', 'Art', 'Street', 'Art', 'Video', 'Jelmer', 'Noordeman', 'Micha', 'Bie', 'Otner', 'Page', 'Zesta', 'Art', 'Tours', 'July', 'Start'], 'DT': ['The', 'an', 'The', 'a', 'a', 'the', 'The', 'The', 'an', 'the', 'a', 'a', 'this', 'The', 'a', 'the', 'The', 'the', 'the'], 'VBZ': ['is', 'has', 'is', 'is'], 'IN': ['from', 'that', 'in', 'With', 'from', 'in', 'In', 'in', 'into', 'within', 'As', 'of', 'Through', 'with', 'of', 'by', 'by', 'de', 'by', 'via'], 'NNS': ['cializes', 'projects', 'artists', 'projects', 'murals', 'spaces', 'exhibitions', 'years', 'activities', 'artists', 'tours', 'exhibitions', 'talks', 'paintings', 'paintings', 'Reservations'], 'JJ': ['contemporary', 'visual', 'small', 'related', 'young', 'large', 'public', 'multidisciplinary', 'recent', 'important', 'contemporary', 'large', 'diverse', 'new', 'various', 'different', 'colorful', 'free'], 'PRP': ['they', 'it', 'you', 'You'], 'VBP': ['are', 'vary'], 'VBN': ['committed', 'grown', 'acquainted', 'layered'], 'TO': ['to', 'to', 'to', 'to'], 'VB': ['street', 'professionalize', 'make', 'get', 'see', 'diverse', 'join'], 'RB': ['art'], 'CC': ['and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and'], 'VBG': ['giving', 'appealing'], 'MD': ['will', 'can', 'can'], 'WRB': ['how']}]],
    'Trixie': [[52.07465535952044, 4.326365818693335], '<br><p>Dolor sit Amet</p>', 'Trixie',[{'RB': ['First', 'right', 'currently', 'not'], 'JJ': ['Open', 'happy', 'first', 'recent', 'alternative', 'several', 'red', 'light', 'diverse', 'young', 'artistic', 'free', 'necessary'], 'NNP': ['Studios', 'Trixie', 'Open', 'Studios', 'July', 'Kicking', 'Art', 'Weekend', 'Trixie', 'KABK', 'Poetry', 'Event', 'Poetry', 'July', 'Trixie', 'Words', 'Page', 'Trixie', 'Stationsbuurt', 'Hague', 'Trixie', 'Start'], 'IN': ['of', 'for', 'of', 'with', 'behind', 'With', 'of', 'with', 'with', 'of', 'for', 'with', 'off', 'in', 'of', 'in', 'by', 'of', 'through'], 'RP': ['off'], 'DT': ['the', 'the', 'a', 'a', 'a', 'a', 'the', 'a', 'the', 'the', 'an', 'the', 'the', 'The', 'a', 'an'], 'VBZ': ['is', 'graduates', 'consists', 'is', 'is', 'encourages'], 'TO': ['to'], 'VB': ['open', 'host', 'collaborate'], 'NN': ['studio', 'time', 'group', 'artist', 'gallery', 'diverse', 'space', 'studio', 'gallery', 'workshop', 'presentation', 'expand', 'use', 'space', 'poetry', 'event', 'collective', 'space', 'district', 'group', 'initiative', 'production', 'collaboration', 'experimentation', 'exchange', 'Price'], 'NNS': ['doors', 'practices', 'walls', 'backgrounds', 'spaces', 'artists', 'strategies', 'practices', 'networks', 'audiences', 'resources', 'artists', 'artists', 'Reservations'], 'PRP': ['We', 'we', 'We', 'we'], 'VBP': ['are', 'run', 'experiment'], 'VBG': ['growing', 'developing', 'hosting', 'ing'], 'CC': ['and', 'and', 'and', 'and', 'and', 'and', 'and', 'and'], 'WDT': ['which', 'which', 'that'], 'MD': ['will', 'will'], 'VBN': ['located', 'Founded', 'led']}]],
    'UithetGareel': [[52.07480113905305, 4.308013105469062], '<br><p>Dolor sit Amet</p>', 'Uit het Gareel',[{'NNP': ['Uit', 'Het', 'Gareel', 'x', 'PAARD', 'Art', 'Market', 'July', 'Music', 'Uit', 'Het', 'Gareel', 'DJ', 'PAARD', 'Uit', 'Het', 'Gareel', 'Uit', 'Het', 'Gareel', 'Festival', 'Uit', 'Het', 'Gareel', 'Art', 'Market', 'Instagram', 'Alice', 'Mulder', 'Anna', 'Nunes', 'Atay', 'Erik', 'Muusse', 'Erwin', 'Verkade', 'Glitterstudio', 'Irene', 'van', 'Aarle', 'Jessie', 'Hoefnagel', 'Jawgem', 'Marieke', 'Matthijs', 'Mhwark', 'Niels', 'Weerheim', 'Rake', 'Streken', 'Studio', 'Poca', 'Conrad', 'Soundsystem', 'Dim', 'Garden', 'TBA', 'Vinyl', 'TBA', 'Price', 'Bring'], 'RB': ['proudly', 'Furthermore'], 'VBZ': ['presents', 'gives', 'takes', 'is'], 'DT': ['the', 'the', 'a', 'the', 'the', 'an', 'a', 'the', 'an', 'These', 'the', 'the', 'the', 'the', 'the', 'a'], 'JJ': ['second', 'affordable', 'such', 'small', 'young', 'local', 'local', 'offline', 'main', 'young', 'promising', 'fascinating', 'approachable', 'several', 'such', 'Music', 'continuous', 'free', 'own'], 'NN': ['edition', 'art', 'market', 'clothing', 'vinyl', 'floor', 's', 'market', 'place', 'pop', 'temple', 'club', 'initiative', 'platform', 'case', 'work', 'world', 'art', 'way', 'foundation', 'eye', 'uithetgareel', 'information', 'sale', 'Beukwerk', 'Start', 'opening', 'entrance', 'drink', 'bag'], 'IN': ['of', 'with', 'as', 'from', 'as', 'in', 'with', 'for', 'of', 'in', 'for', 'as', 'on', 'about', 'during'], 'NNS': ['stalls', 'artworks', 'prints', 'works', 'artists', 'goals', 'artists', 'people', 'goals', 'events', 'exhibitions', 'works', 'artists', 'Artists', 'records', 'hours'], 'VBG': ['selling', 'Stichting', 'including'], 'CC': ['and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and'], 'PRP': ['it', 'you'], 'TO': ['to', 'to', 'to', 'to', 'to', 'to', 'to'], 'CD': ['two'], 'VB': ['create', 'sell', 'introduce', 'Keep', 'find', 'buy', 'be'], 'VBD': ['lay'], 'JJR': ['more', 'more', 'more'], 'MD': ['can'], 'VBN': ['announced'], 'RBR': ['more']}]],
    'West': [[52.082672849187915, 4.315001555793077], '<br><p>Dolor sit Amet</p>', 'West Den Haag'],
    }


  // to find keys of dictionary
  // console.log(Object.keys(dictioPlaces))
  
  // random color picker
  var colori = ['yellow','red','black','white','green'];
  let r = Math.floor(Math.random() * (colori.length ))

  var r2

  function rr(){
      r2 = Math.floor(Math.random() * (colori.length))
    }

  rr()

  // to not have two same colors
  while (r2 === r){
    rr()
    if (r2 != r){
      break
    }
  }


  
  // TILES
  L.tileLayer("https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=WqL6ymt9YHsM4S1RmjmG", {
    maxZoom: 18,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  }).addTo(map);
  
  // QR button  
  L.easyButton('fa-qrcode fa-2x', function(btn, map){
    $( "#reader" ).fadeToggle()
    $( "#reader" ).css("display","flex")
    $( "#reader" ).css("justify-content","center")
    $( "#reader" ).css("align-items","center")
  }, 'qr', 'qr').addTo(map);
  
  // BACK HOME
  L.easyButton("fa-arrow-left fa-2x",function(btn,map){
    $("#showPic").slideUp()
    $('#map').slideUp()
    $( "#reader" ).fadeOut()
  }, 'menu/mappa', 'menu/mappa').addTo(map);
  
  // ICONS
  var prevIcon = L.icon({
    iconUrl: 'location.png',
    iconSize: [50, 50],
  });

  var doneIcon = L.icon({
    iconUrl: 'location7.png',
    iconSize: [50, 50],
  });




// PUSH THE PLACES IN TODO AND DONE
  for (let vc = 0; vc < biscottino.length; vc++){
    let value = Object.values(coo)[vc]
    console.log(value)
    if ( value == 0){
      cookies.push(biscottino[vc])
    } else{
      let key = Object.keys(coo)[vc]
      cookiesDone.push(key)
      console.log(key)
    }
  }

  // console.log(cookiesDone)

  //TO CHECK TODO PLACES
  cookies.forEach(place => {
    $(`.${place}`).css('background-color','red')
    // cookies.push(place)
    cookiesChanged.push(place)
  });


  // TO COLOR DIFFERENTLY DONE PLACES
  cookiesDone.forEach(cookieDon => {
    $(`.${cookieDon}`).css('background-color','white')
    $(`.${cookieDon}`).css('color','black')

    if(Cookies.get(cookieDon) == 1){
      console.log(Cookies.get(cookieDon))
      Cookies.remove(cookieDon)
      let poet = []
        constr.forEach(pos => {
          let rPos = Math.floor(Math.random() * (dictioPlaces[cookieDon][3][0][pos]).length)
          let pp = dictioPlaces[cookieDon][3][0][pos][rPos]
          poet.push(pp)
          // console.log(poet)
        });  
        let genPoet = poet.toString().replace(',',' ')
        Cookies.set(cookieDon,genPoet)
    }
  })

  // TO ADD CHOICE
  function add(place){
    $(`.${place}`).css('background-color','red')
    Cookies.set(place, 0,   { expires: 30 })
    cookies.push(place)
    let coo = Cookies.get();
    let biscottino = Object.keys(coo)
    console.log(biscottino)
  }

  // TO REMOVE CHOICE
  function less(place){
    $(`.${place}`).css('background-color','rgba(255,214,0)');
    Cookies.remove(place);
    cookies.splice( $.inArray(place, cookies), 1 );
    let coo = Cookies.get();
    let biscottino = Object.keys(coo)
    console.log(cookiesChanged)
    console.log(biscottino)
  }
    
  // LOGIC PLACES      
  function checkCookies(place){
    if (cookies.includes(place)){
      less(place)
    } else {
      add(place)
    }
  }
  
   
  // CREATE MARKER FOR EACH TODO 
  cookies.forEach(element => {
    console.log(element)
    var markerOptions = {
        title: element,
        clickable: true,
        icon: prevIcon
        }
        let lon = dictioPlaces[element][0][0];
        let lat = dictioPlaces[element][0][1];
        let markerLocation = new L.LatLng(lon,lat);
        let marker = new L.Marker(markerLocation, markerOptions).bindPopup(`<h1>${dictioPlaces[element][2]}</h1><br>`+dictioPlaces[element][1]+`<br><button class="btn-success btn-marker"  onclick=Cookies.remove("${element}");location.reload()>Remove</button>`).addTo(map);
        map.addLayer(marker)
      });


  
  function poly(){
      cookies.forEach(element => {
        let lon = dictioPlaces[element][0][0];
        let lat = dictioPlaces[element][0][1];
        polypoints.push([lon,lat])    
        });
  }
  
  poly()
  
  
  // QR STUFF
  const html5QrCode = new Html5Qrcode(/* element id */ "reader");
  
  // File based scanning
  const fileinput = document.getElementById('qr-input-file');
  fileinput.addEventListener('change', e => {
    if (e.target.files.length == 0) {
      // No file selected, ignore 
      return;
    }
  
    var target
    // Use the first item in the list
    const imageFile = e.target.files[0];
    html5QrCode.scanFile(imageFile, /* showImage= */false)
    .then(qrCodeMessage => {
      // success, use qrCodeMessage
      target= qrCodeMessage.replace('http://weirdfloor.thehaguecontemporary.nl/places/','')
      alert(target)

      // target = qrCodeMessage
      // alert(target)
      // console.log(target)

      if (cookies.includes(target)){
         Cookies.set(target,1);
        const index = cookies.indexOf(target);
          if (index > -1) {
              cookies.splice(index, 1);
  }


        alert(':)')


        location.reload()
      } 
          else{
        alert("Hey! Maybe you went to the wrong place? :O")
        location.reload()
      }
  }
    )
    .catch(err => {
      // failure, handle it.
      console.log(`Error scanning file. Reason: ${err}`)
    });
  });
  



  // CREATE MARKER FOR EACH DONE 
  cookiesDone.forEach(element => {
    var markerOptions = {
        title: element,
        clickable: true,
        icon: doneIcon
        }
    
        let lon = dictioPlaces[element][0][0];
        let lat = dictioPlaces[element][0][1];

        let markerLocation = new L.LatLng(lon,lat);

        let c = Cookies.get(element)
        let marker = new L.Marker(markerLocation, markerOptions).bindPopup(`<h1>${c}</h1><br><p>${dictioPlaces[element][2]}</p>`).addTo(map);
    
        map.addLayer(marker)
  }); 


  



  if (cookiesDone.lenght > 0){
      arr2.push('M',dictioPlaces[cookiesDone[0]][0])
  }


  cookiesDone.forEach(element => {
    let lon = dictioPlaces[element][0][0];
    let lat = dictioPlaces[element][0][1];
    polypointsDone.push([lon,lat])    
  });


  let lenPointsDone = Object.keys(polypointsDone).length




function bezier(){
    if (arr.includes('M')){
      arr.push('T')
      arr.push(polypoints[0])
    } else {
      arr.push('M')
      arr.push(polypoints[0])
    }
    polypoints.forEach(element => {
      arr.push('T')
      arr.push(element)
    });
  }
  
  function bezierDone(){
    if (arr2.includes('M')){
      arr2.push('T')
      arr2.push(polypointsDone[0])
    } else {
      arr2.push('M')
      arr2.push(polypointsDone[0])
    }
    polypointsDone.forEach(element => {
      arr2.push('T')
      arr2.push(element)
    });
  }

// map.panTo(L.latLng(numeriCentro[0],numeriCentro[1]));

bezier()
bezierDone()



function geoFindMe() {
  var latitude  
  var longitude 

  function success(position) {
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log([latitude,longitude])
    arr = []
    arr.push('M')
    arr.push([latitude,longitude])
    polypoints.forEach(element => {
      arr.push('T')
      arr.push(element)
    });
    console.log(arr)
    bez.removeFrom(map)
    L.curve(arr ,{color: colori[r] }).addTo(map);
  }
  if(!navigator.geolocation) {
    console.log('Geolocation is not supported by your browser')
  } else {
    navigator.geolocation.getCurrentPosition(success);
  }
}



let lenPoints = Object.keys(polypoints).length


if (lenPoints > 0){
  bez = L.curve(arr ,{color: colori[r] }).addTo(map);
  if (bez){
    let latCentro = JSON.stringify( bez.getCenter()["lat"])
    let lngCentro = JSON.stringify( bez.getCenter()["lng"])
    let numeriCentro = [parseFloat(latCentro),parseFloat(lngCentro)]
    map.panTo(L.latLng(numeriCentro[0],numeriCentro[1]));
}}

if (lenPointsDone > 0){
  console.log(arr2)
  L.curve(arr2 ,{color: colori[r2] }).addTo(map);
}
  

function showMap(){
      let isEqual = JSON.stringify(cookies) === JSON.stringify(cookiesChanged);
      console.log(isEqual);

      if ($("#map").is(':visible')) {
        $('#map').slideUp();
      } else {
        if(!isEqual){
          location.reload()
        } else {
          //   $('#map').css("display","block")
          $('#map').slideDown();
        }
      }
      $("#showPic").slideDown()
    }

    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      getSortData: {
        name: function (element) {
          return $(element).text();
        }
      }

    });
  
  
  
  $('.filter button').on("click", function () {
    var value = $(this).attr('data-name');
      $grid.isotope({
        filter: value
      });
      localStorage.setItem("tagClass",value)
    $('.filter button').removeClass('active');
    $(this).addClass('active');
  })
  $('.sort button').on("click", function () {
    var value = $(this).attr('data-name');
    $grid.isotope({
      sortBy: value
    });
    $('.sort button').removeClass('active');
    $(this).addClass('active');
  })



  intro =  localStorage.getItem("tagClass"); 

if (localStorage['tagClass']){
    // console.log(intro)
    $grid.isotope({
                filter:  intro,
            });
} else {
    $grid.isotope({
                filter: ".All"
            });
}
    

if(cookiesDone.length> 0){
  $("#showPic").fadeIn()
}

for (item in cookiesDone){
  let poetTot = Cookies.get(cookiesDone[item])
  $("#showPic").append(`<p>${poetTot}</p>`);
}

function end(){
  for(item in Cookies.get()){
    Cookies.remove(item)
  }
   location.reload()
}

if(cookiesDone.length> 0 && cookies.length==0){
  for (item in cookiesDone){
    let poetTot = Cookies.get(cookiesDone[item])
    $("#end").append(`<p>${poetTot}</p>`);
  }
  $("#end").append(`<button onclick="end()">End!</button>`);
  $("#end").css('display','flex')
  $("#end").fadeIn()
}

// function showPoet(){
// if ($("#map").css('display','none')) {
//   $('#showPic').fadeOut();
// } else {
//   $('#showPic').fadeIn();
// }
// }



// html2canvas(document.querySelector("#end")).then(canvas => {
//   document.body.appendChild(canvas)

// });
// var canvas = document.getElementsByTagName("canvas");
// var img    = canvas.toDataURL("image/png");
// document.write('<img src="'+img+'"/>');

// var img    = canvas.toDataURL("image/png");
// document.write('<img src="'+img+'"/>');





// let latCentro = JSON.stringify( bez.getCenter()["lat"])
// let lngCentro = JSON.stringify( bez.getCenter()["lng"])
// let numeriCentro = [parseFloat(latCentro),parseFloat(lngCentro)]
// map.panTo(L.latLng(numeriCentro[0],numeriCentro[1]));
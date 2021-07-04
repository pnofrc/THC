

  let constr = ['NNP','NN']

// var generatedPoet = ''





//DICTIONARY

var dictioPlaces = {
    "BeeldenAanZee": [[52.11088616859895, 4.278530355794044], '<br><p>Dolor sit Amet</p>', 'Beelden Aan Zee'],
    "DurstBrittMayhew" : [[52.07177395858249, 4.3187814134640305], '<br><p>Dolor sit Amet</p>', 'Dürst Britt & Mayhew'],
    'FotomuseumDenHaag': [[52.09565269957886, 4.276968588519751], '<br><p>Dolor sit Amet</p>', 'Fotomuseum Den Haag'],
    'GalerieMauritsvandeLaar': [[52.0743590401309, 4.310463657642463], '<br><p>Dolor sit Amet</p>', 'Galerie Maurits van de Laar'],
    'GalerieRamakers':[[52.081893912086315, 4.301621998121746],'<h1>Galerie Ramakers</h1><br><p>ciao</p>', 'Galerie Ramakers'],
    'Nono': [[52.08130187650738, 4.282041415143106], '<br><p>Dolor sit Amet</p>', 'Gallery Nono'],
    'Heden': [[52.084756321851984, 4.312961869286151], '<br><p>Dolor sit Amet</p>', 'Heden'],
    'KM21': [[52.09098545286892, 4.279123116962104], '<br><p>Dolor sit Amet</p>', 'KM21'],
    'KunstmuseumDenHaag': [[52.089918711427686, 4.28064744045068], '<br><p>Dolor sit Amet</p>', 'Kunstmuseum Den Haag',[{'NNP': ['Uit', 'Het', 'Gareel', 'DJ', 'PAARD', 'Uit', 'Het', 'Gareel', 'Uit', 'Het', 'Gareel', 'Festival', 'Uit', 'Het', 'Gareel', 'Art', 'Market', 'Instagram', 'Alice', 'Mulder', 'Anna', 'Nunes', 'Atay', 'Erik', 'Muusse', 'Erwin', 'Verkade', 'Glitterstudio', 'Irene', 'van', 'Aarle', 'Jessie', 'Hoefnagel', 'Jawgem', 'Marieke', 'Matthijs', 'Mhwark', 'Niels', 'Weerheim', 'Rake', 'Streken', 'Studio', 'Poca'], 'RB': ['proudly', 'Furthermore'], 'VBZ': ['presents', 'gives', 'takes', 'is'], 'DT': ['the', 'the', 'a', 'the', 'the', 'an', 'a', 'the', 'an', 'These', 'the', 'the', 'the', 'the'], 'JJ': ['second', 'affordable', 'such', 'small', 'young', 'local', 'local', 'offline', 'main', 'young', 'promising', 'fascinating', 'approachable', 'several', 'such'], 'NN': ['edition', 'art', 'market', 'clothing', 'vinyl', 'floor', 'market', 'place', 'pop', 'temple', 'club', 'initiative', 'platform', 'work', 'world', 'art', 'way', 'foundation', 'eye', 'uithetgareel', 'information'], 'IN': ['of', 'with', 'as', 'from', 'as', 'in', 'with', 'for', 'of', 'in', 'for', 'as', 'on', 'about'], 'NNS': ['stalls', 'artworks', 'prints', 'artworks', 'artists', 'goals', 'artists', 'people', 'goals', 'events', 'exhibitions', 'works', 'artists', 'Artists'], 'VBG': ['selling', 'Stichting'], 'CC': ['and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and'], 'PRP': ['it', 'you'], 'TO': ['to', 'to', 'to', 'to', 'to', 'to', 'to'], 'CD': ['two'], 'VB': ['create', 'showcase', 'sell', 'introduce', 'Keep', 'find', 'buy', 'be'], 'VBD': ['lay'], 'JJR': ['more', 'more'], 'MD': ['can'], 'VBN': ['announced']}]  ],
    'MikeSid': [[52.07463690009965, 4.312364801820798], '<br><p>Dolor sit Amet</p>', 'Mike & Sid'],
    'Nest': [[52.07759403619619, 4.29164401175612], '<br><p>Dolor sit Amet</p>', 'NEST',[{'NNP': ['Uit', 'Het', 'Gareel', 'DJ', 'PAARD', 'Uit', 'Het', 'Gareel', 'Uit', 'Het', 'Gareel', 'Festival', 'Uit', 'Het', 'Gareel', 'Art', 'Market', 'Instagram', 'Alice', 'Mulder', 'Anna', 'Nunes', 'Atay', 'Erik', 'Muusse', 'Erwin', 'Verkade', 'Glitterstudio', 'Irene', 'van', 'Aarle', 'Jessie', 'Hoefnagel', 'Jawgem', 'Marieke', 'Matthijs', 'Mhwark', 'Niels', 'Weerheim', 'Rake', 'Streken', 'Studio', 'Poca'], 'RB': ['proudly', 'Furthermore'], 'VBZ': ['presents', 'gives', 'takes', 'is'], 'DT': ['the', 'the', 'a', 'the', 'the', 'an', 'a', 'the', 'an', 'These', 'the', 'the', 'the', 'the'], 'JJ': ['second', 'affordable', 'such', 'small', 'young', 'local', 'local', 'offline', 'main', 'young', 'promising', 'fascinating', 'approachable', 'several', 'such'], 'NN': ['edition', 'art', 'market', 'clothing', 'vinyl', 'floor', 'market', 'place', 'pop', 'temple', 'club', 'initiative', 'platform', 'work', 'world', 'art', 'way', 'foundation', 'eye', 'uithetgareel', 'information'], 'IN': ['of', 'with', 'as', 'from', 'as', 'in', 'with', 'for', 'of', 'in', 'for', 'as', 'on', 'about'], 'NNS': ['stalls', 'artworks', 'prints', 'artworks', 'artists', 'goals', 'artists', 'people', 'goals', 'events', 'exhibitions', 'works', 'artists', 'Artists'], 'VBG': ['selling', 'Stichting'], 'CC': ['and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and'], 'PRP': ['it', 'you'], 'TO': ['to', 'to', 'to', 'to', 'to', 'to', 'to'], 'CD': ['two'], 'VB': ['create', 'showcase', 'sell', 'introduce', 'Keep', 'find', 'buy', 'be'], 'VBD': ['lay'], 'JJR': ['more', 'more'], 'MD': ['can'], 'VBN': ['announced']}]  ],
    'UithetGareel': [[52.07480113905305, 4.308013105469062], '<br><p>Dolor sit Amet</p>', 'Uit het Gareel'],
    'PNF':[[52.072353820836085, 4.311721236205367],'<br><p>Dolor sit Amet</p>', 'Page Not Found'],
    'PartProject': [[52.08177307188824, 4.301725011614704], '<br><p>Dolor sit Amet</p>', 'Parts Project'],
    'kabk': [[52.08340664549677, 4.326662958803667], '<br><p>Dolor sit Amet</p>', 'PIP Den Haag'],
    'Stroom': [[52.08357264666274, 4.303884855889337], '<br><p>Dolor sit Amet</p>', 'The Royal Academy of Art The Hague'],
    'StudioSaber':[[51.14185891020335, 5.591358149666528], '<br><p>Dolor sit Amet</p>', 'Stroom Den Haag'],
    'grey': [[52.07463690009965, 4.312364801820798], '<br><p>Dolor sit Amet</p>', 'Studio Saber'],
    'streetArt': [[52.065505645584444, 4.32051466134149], '<br><p>Dolor sit Amet</p>', 'The Grey Space in the Middle'],
    'Trixie': [[52.07465535952044, 4.326365818693335], '<br><p>Dolor sit Amet</p>', 'The Hague Street Art'],
    'West': [[52.082672849187915, 4.315001555793077], '<br><p>Dolor sit Amet</p>', 'Trixie'],
    '1646': [[52.072945249401826, 4.311648795181019], '<br><p>Dolor sit Amet</p>', 'West Den Haag'],
    'SculptureGallery': [[52.07672464696959, 4.3124565638957835], '<br><p>Dolor sit Amet</p>', '1646']
    }


  // to find keys of dictionary
  // console.log(Object.keys(dictioPlaces))
  
  // random color picker
  var colori = ['yellow','red','black','purple'];
  let r = Math.floor(Math.random() * (colori.length ))
  let r2 = Math.floor(Math.random() * (colori.length))
  if (r2 == r){
    r2
  }
  console.log(r2)
  let r3 = Math.floor(Math.random() * (colori.length ))


  // MAP 
  let start = [52.0793046656365, 4.313155972254871]
  var map = L.map('map', { scrollWheelZoom: true }).setView(start, 13);
  
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


  // TO CHECK STORED STUFF 
  let cookies = []
  let cookiesDone = []
  let cookiesChanged = []
  let coo = Cookies.get();
  let biscottino = Object.keys(coo)

  for (let vc = 0; vc < biscottino.length; vc++){
    let value = Object.values(coo)[vc]
    console.log(value)
    if ( value == 0){
      cookies.push(biscottino[vc])
      // console.log('ancora da fare')
    } else{
      let key = Object.keys(coo)[vc]
      cookiesDone.push(key)
      console.log(key)
      console.log('andato')

    }
  }

  // console.log(cookiesDone)

  //TO CHECK SELECTED PLACES
  cookies.forEach(place => {
    $(`.${place}`).css('background-color','red')
    // cookies.push(place)
    cookiesChanged.push(place)
  });

  // function poet(target){


      // function postag(target,pos){
      //   let rPos = Math.floor(Math.random() * (target[0][pos].length))
      //   let poet = target[0][pos][rPos]
      //   generatedPoet= generatedPoet.concat(poet).concat(' ') 
      //   console.log(generatedPoet)  
      // }

    // }

    // poet()


  

  cookiesDone.forEach(cookieDon => {
    $(`.${cookieDon}`).css('background-color','white')
    $(`.${cookieDon}`).css('color','black')

    if(Cookies.get(cookieDon) == 1){
      Cookies.remove(cookieDon)
      let poet = []
        constr.forEach(pos => {
          let rPos = Math.floor(Math.random() * (dictioPlaces[cookieDon][3][0][pos].length))
          let pp = dictioPlaces[cookieDon][3][0][pos][rPos]
          poet.push(pp)
          // console.log(poet)
        });  
        let genPoet = poet.toString().replace(',',' ')
        Cookies.set(cookieDon,genPoet)
    }
  })

  // TO ADD 
  function add(place){
    $(`.${place}`).css('background-color','red')
    Cookies.set(place, 0,   { expires: 30 })
    cookies.push(place)
    let coo = Cookies.get();
    let biscottino = Object.keys(coo)
    console.log(biscottino)
  }

  // TO REMOVE
  function less(place){
    $(`.${place}`).css('background-color','rgba(255,214,0)');
    Cookies.remove(place);
    cookies.splice( $.inArray(place, cookies), 1 );
    let coo = Cookies.get();
    let biscottino = Object.keys(coo)
    console.log(cookiesChanged)
    console.log(biscottino)
    //iconsMap()
  }
    
  // LOGIC PLACES      
  function checkCookies(place){
    if (cookies.includes(place)){
      less(place)
    } else {
      add(place)
    }
  }
  
   
      
  // CREATE MARKER FOR EACH COOKIE (OPEN)   
  cookies.forEach(element => {
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

  

  var polypoints = []
  
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
      target= qrCodeMessage.replace('https://pnofrc.github.io/THC/','').replace('/index.html/','')
      console.log(cookies.includes(target))
      console.log(target)
      let generatedPoet = ' '

      if (cookies.includes(target)){
        
        

         Cookies.set(target,1);
        const index = cookies.indexOf(target);
          if (index > -1) {
              cookies.splice(index, 1);
  }
          //cookiesDone.push(target);
          //localStorage.setItem(target,"donene")
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
  
  // CREATE MARKER FOR EACH COOKIE (DONE)
  cookiesDone.forEach(element => {
    var markerOptions = {
        title: element,
        clickable: true,
        icon: doneIcon
        }
        console.log(element)
    
        let lon = dictioPlaces[element][0][0];
        let lat = dictioPlaces[element][0][1];

        let markerLocation = new L.LatLng(lon,lat);

        let c = Cookies.get(element)
        // Object.keys(element)

        let marker = new L.Marker(markerLocation, markerOptions).bindPopup(`<h1>${dictioPlaces[element][2]}</h1><br><p>${c}</p>`).addTo(map);
    
        map.addLayer(marker)
  }); 
  


 
  
  
  let lenPoints = Object.keys(polypoints).length
  

  arr=[]
  arr2 = []
  if (cookiesDone.lenght > 0){
    // cookiesDone.forEach(cookieDon => {
      arr2.push('M',dictioPlaces[cookiesDone[0]][0])
      // console.log(])
    // });
    // for (let ppp = 0; ppp < cookiesDone.length; ppp++){
    //   arr2.push('T')
    //   arr2.push(dictioPlaces[cookiesDone[ppp]][0])
    // }
  }
  console.log(arr2)
  var polypointsDone = []

  cookiesDone.forEach(element => {
    let lon = dictioPlaces[element][0][0];
    let lat = dictioPlaces[element][0][1];
    polypointsDone.push([lon,lat])    
    });

    let lenPointsDone = Object.keys(polypointsDone).length




  function geoFindMe() {
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      // console.log(latitude ,longitude)
      arr.push('M')
      arr.push([latitude,longitude])
      bezier()
      bezierDone()
    }
  
    if(!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser')
    } else {
      // console.log('Locating…')
      navigator.geolocation.getCurrentPosition(success);
    }
  }

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

  console.log(arr)
  
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

bezier()
bezierDone()
// console.log(arr)

  // console.log(lenPointsDone)
if (lenPoints > 0){
  let bez = L.curve(arr ,{color: colori[r] }).addTo(map);
  if (bez){
    let latCentro = JSON.stringify( bez.getCenter()["lat"])
    let lngCentro = JSON.stringify( bez.getCenter()["lng"])
    let numeriCentro = [parseFloat(latCentro),parseFloat(lngCentro)]
    map.panTo(L.latLng(numeriCentro[0],numeriCentro[1]));
} else {
    map.panTo(L.latLng(start))
}}

if (lenPointsDone > 0){
  console.log(arr2)
  let bez = L.curve(arr2 ,{color: colori[r2] }).addTo(map);
  if (bez){
    let latCentro = JSON.stringify( bez.getCenter()["lat"])
    let lngCentro = JSON.stringify( bez.getCenter()["lng"])
    // let numeriCentro = [parseFloat(latCentro),parseFloat(lngCentro)]
    // map.panTo(L.latLng(numeriCentro[0],numeriCentro[1]));
} else {
    // map.panTo(L.latLng(start))
}}
  

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
  
      
  
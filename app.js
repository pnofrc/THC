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
    'KunstmuseumDenHaag': [[52.089918711427686, 4.28064744045068], '<br><p>Dolor sit Amet</p>', 'Kunstmuseum Den Haag'],
    'MikeSid': [[52.07463690009965, 4.312364801820798], '<br><p>Dolor sit Amet</p>', 'Mike & Sid'],
    'Nest': [[52.07759403619619, 4.29164401175612], '<br><p>Dolor sit Amet</p>', 'NEST'],
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
  // console.log(coord)
      // coord.forEach(element => {
        //   console.log(Object.keys(coord))
      // });
  
      var colori = ['yellow','red','black','purple'];
      let r = Math.floor(Math.random() * (colori.length ))
      console.log(r)
  
  
  
      // MAP 
  
      let start = [52.0793046656365, 4.313155972254871]
  
      //  create map object, tell it to live in 'map' div and give initial latitude, longitude, zoom values 
      var map = L.map('map', { scrollWheelZoom: true }).setView(start, 13);
  
  
  
      //  add base map tiles from OpenStreetMap and attribution info to 'map' div
      // var layer = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      //     attribution: '<a href="http://osm.org/copyright">&copy; OpenStreetMap</a>'
      // }).addTo(map);
  
      L.tileLayer("https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=WqL6ymt9YHsM4S1RmjmG", {
      maxZoom: 18,
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  }).addTo(map);
  


  
      L.easyButton('fa-qrcode fa-2x', function(btn, map){
      $( "#reader" ).fadeToggle()
      $( "#reader" ).css("display","flex")
      $( "#reader" ).css("justify-content","center")
      $( "#reader" ).css("align-items","center")
    }, 'qr', 'qr').addTo(map);
  
  
    L.easyButton("fa-arrow-left fa-2x",function(btn,map){
      $('#map').slideUp()
      $( "#reader" ).fadeOut()
  
    }, 'menu/mappa', 'menu/mappa').addTo(map);
  
  
            // TO CHECK STORED STUFF 
  
        let cookies = []
        let cookiesDone = []
        let cookiesChanged = []
        let coo = Cookies.get();
        let biscottino = Object.keys(coo)
  
  
  
  
  
  
      var prevIcon = L.icon({
            iconUrl: 'location.png',
            iconSize: [50, 50], // size of the icon
          //   popupAnchor: [0, -15]
          });

    var doneIcon = L.icon({
    iconUrl: 'location7.png',
    iconSize: [50, 50], // size of the icon
    //   popupAnchor: [0, -15]
    });
  
        biscottino.forEach(place => {
          $(`.${place}`).css('background-color','red')
          cookies.push(place)
          cookiesChanged.push(place)
        });
  
  
        
        function add(place){
          $(`.${place}`).css('background-color','red')
          Cookies.set(place, 0,   { expires: 30 })
          cookies.push(place)
          let coo = Cookies.get();
          let biscottino = Object.keys(coo)
          console.log(biscottino)
        }
  
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
      
        
  
  
  
        function checkCookies(place){
          if (cookies.includes(place)){
            less(place)
            //reload()
          } else {
            add(place)
            //reload()
          }
        }
  
   
      console.log(cookies)
      
      
      cookies.forEach(element => {
      var markerOptions = {
          title: element,
          clickable: true,
          icon: prevIcon
          }
          console.log(element)
      
          let lon = dictioPlaces[element][0][0];
          let lat = dictioPlaces[element][0][1];
  
          // console.log(lon,lat)
  
          let markerLocation = new L.LatLng(lon,lat);
           let marker = new L.Marker(markerLocation, markerOptions).bindPopup(`<h1>${dictioPlaces[element][2]}</h1><br>`+dictioPlaces[element][1]+`<br><button class="btn-success btn-marker"  onclick=Cookies.remove("${element}");location.reload()>Remove</button>`).addTo(map);
      
          // var marker = new L.Marker(markerLocation, markerOptions)
             
             
              map.addLayer(marker)
  
            });

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
                let marker = new L.Marker(markerLocation, markerOptions).bindPopup(`<h1>${dictioPlaces[element][2]}</h1><br>`).addTo(map);
            
                map.addLayer(marker)
        
                    });
  
  
  
      var polypoints = []
  
  poly()
  
  function poly(){
      cookies.forEach(element => {
        let lon = dictioPlaces[element][0][0];
        let lat = dictioPlaces[element][0][1];
        polypoints.push([lon,lat])    
        });
  }
  
  
  
  
  const html5QrCode = new Html5Qrcode(/* element id */ "reader");
  
  // File based scanning
  const fileinput = document.getElementById('qr-input-file');
  fileinput.addEventListener('change', e => {
    if (e.target.files.length == 0) {
      // No file selected, ignore 
      return;
    }
  
    // Use the first item in the list
    const imageFile = e.target.files[0];
    html5QrCode.scanFile(imageFile, /* showImage= */false)
    .then(qrCodeMessage => {
      // success, use qrCodeMessage
      let target= qrCodeMessage.replace('http://github.io/pnofrc/THC/','').replace('/index.html/','')
      console.log(target)
      // console.log(cookies.includes(target),1)
  
      if (cookies.includes(target)){
        Cookies.set(target,1);
        const index = cookies.indexOf(target);
          if (index > -1) {
              cookies.splice(index, 1);
  }
          console.log(cookies)
          cookiesDone.push(target);
          localStorage.setItem(target,"donene")
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
  
  
  // Creating multi polyline options
  // var multiPolyLineOptions = {color:'red'};
  
  // Creating multi polylines
  // console.log([polypoints])
  // var multipolyline = L.multiPolyline([polypoints] , multiPolyLineOptions);
  // multipolyline.addTo(map);
  // var polygon = L.polygon(
  //   polypoints
  // );
  
  
  // let bezier = []
  // while (x > 0){
  //     bezier.push((polypoints[x]))
  //     x--
  // }
  
  
  let lenPoints = Object.keys(polypoints).length
  
  arr=[]
  
  function geoFindMe() {
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude ,longitude)
      arr.push('M')
      arr.push([latitude,longitude])
      bezier()
    }
  
  console.log(arr)

    if(!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser')
    } else {
        console.log('Locating…')
        
      navigator.geolocation.getCurrentPosition(success);
    }
  
  }
  
//   document.querySelector('#find-me').addEventListener('click', geoFindMe);


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

console.log(arr.includes(['M']))

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
    //   arr.push('Z')
  }
  
//   bezier()
  console.log(arr)

  
  if (lenPoints > 0){
  
  
  let bez = L.curve(arr ,{color: colori[r] }).addTo(map);
  
  
  if (bez){
  
    let latCentro = JSON.stringify( bez.getCenter()["lat"])
      let lngCentro = JSON.stringify( bez.getCenter()["lng"])
      let numeriCentro = [parseFloat(latCentro),parseFloat(lngCentro)]
      map.panTo(L.latLng(numeriCentro[0],numeriCentro[1]));
  } else {
      map.panTo(L.latLng(start))
  }
  
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
          console.log(intro)
          $grid.isotope({
                      filter:  intro,
                  });
      } else {
          $grid.isotope({
                      filter: ".All"
                  });
      }
  
      
  
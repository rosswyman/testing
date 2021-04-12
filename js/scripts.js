// IIFE creates a new array quakeRepository while leaving original quakeList unchanged
let quakeRepository=(function(){
    
    // initial array declartion
    let quakeList = []; 

    //Currently fetches data for 4/01/2021-4/02/2021 UTC time within 1000 km radius of Houston, TX.  Plan to replace this user input for date, center, and radius
    let apiUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventtype=earthquake&starttime=2021-04-01&endtime=2021-04-02&latitude=29.76&longitude=-95.37&maxradiuskm=1000';

    // // adds a new quake to the end of quakeRepository
    function add(quake){
        // Checks to see if the parameter being passed to the add function is an object
        if (typeof(quake) === 'object'){     
              quakeList.push(quake);
            } else{
            alert('That is not allowed.  You have attempted to add incorrect quake information');
            }
        }

    // returns the list of resorts
    function getAll(){
        return quakeList;
    }

    function addListItem(quake){
        let quakeList=document.querySelector('.quake-list');
        let listQuake=document.createElement('li');
        let button=document.createElement('button')
        button.innerText=quake.name;
        button.classList.add('button-class');
        listQuake.appendChild(button);
        quakeList.appendChild(listQuake);
         
        showDetails(button, quake);
    }

    function showDetails(button, quake){
        button.addEventListener('click',function(){
            loadDetails(quake).then(function(){
              console.log(quake.name);
            });            
        });
    }

    function loadList() {
        showLoadingMessage();
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json){
            json.features.forEach(function(item){
              let quake ={
              name: item.properties.title,
              url: item.properties.detail,
              // defines fields that will be populated from the quake url
              magnitude: null,
              latitude: null,
              longitude: null,
              depth: null              
            };
            add(quake);
            hideLoadingMessage();
          });
        }).catch(function(e){
            hideLoadingMessage();
            console.error(e);
        });
    }
    
    function loadDetails(quake){
        showLoadingMessage();
        let url=quake.url;
        return fetch(url).then(function(response){
        return response.json();
        }).then(function (item) {
            quake.magnitude=item.properties.mag;
            // Creates an array with the lat, lon, and depth of the quake so those values can be passed on to the object
            quake.latitude=item.geometry.coordinates[0];
            quake.longitude=item.geometry.coordinates[1];
            quake.depth=item.geometry.coordinates[2]
            hideLoadingMessage();
        }).catch(function(e){
            hideLoadingMessage();
            console.error(e);
        });
    }

    function showLoadingMessage(){
        console.log('Sit tight while we get that information pulled together for ya');
    }

    function hideLoadingMessage(){
        console.clear();
    }

    return{
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails,
        showLoadingMessage: showLoadingMessage,
        hideLoadingMessage: hideLoadingMessage
    };
})();

quakeRepository.loadList().then(function() {
    // Now the data is loaded!
    quakeRepository.getAll().forEach(function(quake){
    quakeRepository.addListItem(quake);
    });
  });
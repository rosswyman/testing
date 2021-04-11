// IIFE creates a new array quakeRepository while leaving original quakeList unchanged
let quakeRepository=(function(){
    
    // initial array declartion
    let quakeList = []; 

        //Currently fetches data for 4/01/2021-4/02/2021 UTC time within 1000 km radius of Houston, TX.  Plan to replace this user input for date, center, and radius
        let apiUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventtype=earthquake&starttime=2021-04-01&endtime=2021-04-02&latitude=29.76&longitude=-95.37&maxradiuskm=1000';

    // ! -- THIS FUNCTION HAS BEEN REPLACED WITH A SIMPLIFIED VERSION BELOW WHILE WORKING THROUGH OTHER PARTS OF THE CODE -- !
    // // adds a new quake to the end of quakeRepository
    // function add(quake){
    //     // Checks to see if the parameter being passed to the add function is an object
    //     if (typeof(quake) === 'object'){
    //         // These are the keys expected to be passed to the add function
    //         let expectedKeys=[
    //         'name',
    //         'region',
    //         'elevationTop',
    //         'elevationBottom',
    //         'elevationDrop'
    //         ];
    //         // Creates an array of the keys of the object passed to the add function
    //         let testKeys=Object.keys(quake);
    //         // Checks to see if keys match
    //         if(JSON.stringify(expectedKeys)==JSON.stringify(testKeys)){
    //           quakeList.push(quake);
    //         } else{
    //         alert('That is not allowed.  You have attempted to add incorrect quake information');
    //       }      
    //     } else{
    //       alert('That is not allowed.  You have attempted to add incorrect quake information');
    // }}

    function add(quake){
        quakeList.push(quake);
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
        console.log('Function showDetails called');
        button.addEventListener('click',function(){
            loadDetails(quake).then(function(){
                console.log(quake.name);
            });            
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json){
            json.features.forEach(function(item){
              let quake ={
              name: item.properties.title,
              url: item.properties.detail,
              magnitude: null,
              latitude: null,
              longitude: null,
              depth: null              
            };
            add(quake);
          });
        }).catch(function(e){
          console.error(e);
        });
    }
    
    function loadDetails(quake){
        console.log('loadDetails called')
        let url=quake.url;
        return fetch(url).then(function(response){
        return response.json();
        }).then(function (item) {
            let quakeCoordinates=item.geometry.coordinates;
            // console.log(quakeCoordinates)
            coordArray=Object.values(quakeCoordinates);
            // console.log(coordArray)
            // console.log(typeof(quakeCoordinates))
            quake.magnitude=item.properties.mag;
            quake.latitude=coordArray[0];
            quake.longitude=coordArray[1];
            quake.depth=coordArray[2];

        }).catch(function(e){
        console.error(e);
        });
    }

    return{
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();


quakeRepository.loadList().then(function() {
    // Now the data is loaded!
    console.log('it made it this far')
     quakeRepository.getAll().forEach(function(quake){
      quakeRepository.addListItem(quake);
      console.log('running through getAll loop')
    });
  });
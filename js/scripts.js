// IIFE creates a new array quakeRepository while leaving original quakeList unchanged
let quakeRepository=(function(){
    
    // initial array declartion
    let quakeList = []; 


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
        let quakeList=document.querySelector('.mountain-list');
        let listQuake=document.createElement('li');
        let button=document.createElement('button')
        button.innerText=quake.name;
        button.classList.add('button-class');
        listQuake.appendChild(button);
        quakeList.appendChild(listQuake);
        
 
        showDetails(button, quake);
    }

    function showDetails(button ,quake){
        button.addEventListener('click',function(){
            console.log(quake.name);
        })
    }

    return{
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
    };
})();


quakeRepository.getAll().forEach(function(quake){
    quakeRepository.addListItem(quake)
});
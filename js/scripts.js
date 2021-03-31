// IIFE creates a new array resortRepository while leaving original resortList unchanged
let resortRepository=(function(){
    
    // initial array declartion
    let resortList = []; 

    // iniital population of resort information
    resortList=[
        {
            name: 'Alyeska Resort',
            region: 'Alaska',
            elevationTop: 1201,
            elevationBottom: 107,
            elevationDrop: 1201-107,
        },
        {
            name: 'Breckenridge',
            region: 'Colorado',
            elevationTop: 3962,
            elevationBottom: 2926,
            elevationDrop: 3962-2926,
        },
        {
            name: 'Stratton Mountain Resort',
            region: 'Vermont',
            elevationTop: 1181,
            elevationBottom: 609,
            elevationDrop: 1181-609,
        }
    ]
    
    // adds a new resort to the end of resortRepository
    function add(resort){
        // Checks to see if the parameter being passed to the add function is an object
        if (typeof(resort) === 'object'){
            // These are the keys expected to be passed to the add function
            let expectedKeys=[
            'name',
            'region',
            'elevationTop',
            'elevationBottom',
            'elevationDrop'
            ];
            // Creates an array of the keys of the object passed to the add function
            let testKeys=Object.keys(resort);
            // Checks to see if keys match
            if(JSON.stringify(expectedKeys)==JSON.stringify(testKeys)){
              resortList.push(resort);
            } else{
            alert('That is not allowed.  You have attempted to add incorrect resort information');
          }      
        } else{
          alert('That is not allowed.  You have attempted to add incorrect resort information');
    }}

    // returns the list of resorts
    function getAll(){
        return resortList;
    }

    return{
        add: add,
        getAll: getAll        
    };
})();;

//Per task 1.5, the following function and forEach loop prints the details
function createResortButton(mountain){
    let listing=document.querySelector('.resort-list');
    let listItem=document.createElement('li');
    let button=document.createElement('button')
    button.innerText=mountain.name;
    button.classList.add('button-class');
    listItem.appendChild(button);
    listing.appendChild(listItem);
    }

    resortRepository.getAll().forEach(createResortButton);
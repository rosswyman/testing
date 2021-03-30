// IIFE creates a new array resortRepository while leaving original resortList unchanged
let resortRepository=(function(){
    let resortList = []; // initial array declartion

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

    return{
        // adds a new resort to the end of resortRepository
        add: function(resort){
            resortList.push(resort);
        },
        // returns the list of resorts
        getAll: function(){
            return resortList;
        }
    };
})();;

//Per task 1.5, the following function and forEach loop prints the details
function printResortInfo(mountain){
    let extraText =[];

        // The following conditional adds an exclamation if the vertical drop is greater than 2000 feet
        if (Math.round(mountain.elevationDrop*3.3) > 2000){
            extraText=' That\'s a big drop!'
        }
    document.write(mountain.name + ' is located in ' + mountain.region + ' and has a vertical drop of ' + Math.round(mountain.elevationDrop*3.3) + ' feet.' + extraText + '<br>');
    }

    resortRepository.getAll().forEach(printResortInfo);
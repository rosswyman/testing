(function(){
    let resortList = [];

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

    for (let i=0; i<resortList.length; i++) {
        let extraText =[];

        // The following conditional adds an exclamation if the vertical drop is greater than 2000 feet
        if (Math.round(resortList[i].elevationDrop*3.3) > 2000){
            extraText=' That\'s a big drop!'
        }
        document.write(resortList[i].name + ' is located in ' + resortList[i].region + ' and has a vertical drop of ' + Math.round(resortList[i].elevationDrop*3.3) + ' feet.' + extraText + '<br>');
    }
})();   
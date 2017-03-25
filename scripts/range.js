$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 600,
        values: [ 52, 400 ],
        slide: function( event, ui ) {
            $( "#lowest_price" ).text( "$" + ui.values[ 0 ]);
            $( "#highest_price" ).text( "$" + ui.values[ 1 ]);
        }
    });

} );
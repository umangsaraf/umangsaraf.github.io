
Highcharts.chart('container', {
    series: [{
        type: 'wordcloud',
        data: [{'name': 'death', 'weight': 23},
        {'name': 'husband wife relationship', 'weight': 23},
        {'name': 'murder', 'weight': 23},
        {'name': 'blood', 'weight': 22},
        {'name': 'chase', 'weight': 22},
        {'name': 'fight', 'weight': 21},
        {'name': 'bare chested male', 'weight': 20},
        {'name': 'father son relationship', 'weight': 18},
        {'name': 'violence', 'weight': 18},
        {'name': 'mother son relationship', 'weight': 17},
        {'name': 'horse', 'weight': 17},
        {'name': 'rain', 'weight': 17},
        {'name': 'rifle', 'weight': 17},
        {'name': 'father daughter relationship', 'weight': 16},
        {'name': 'kiss', 'weight': 16},
        {'name': 'cigarette smoking', 'weight': 15},
        {'name': 'fire', 'weight': 15},
        {'name': 'friendship', 'weight': 15},
        {'name': 'shot in the chest', 'weight': 15},
        {'name': 'betrayal', 'weight': 15},
        {'name': 'shot to death', 'weight': 15},
        {'name': 'explosion', 'weight': 15},
        {'name': 'escape', 'weight': 14},
        {'name': 'crying', 'weight': 14},
        {'name': 'photograph', 'weight': 14},
        {'name': 'based on novel', 'weight': 14},
        {'name': 'soldier', 'weight': 14},
        {'name': 'party', 'weight': 14},
        {'name': 'corpse', 'weight': 14},
        {'name': 'voice over narration', 'weight': 14},
        {'name': 'surprise ending', 'weight': 14},
        {'name': 'pistol', 'weight': 13},
        {'name': 'watching tv', 'weight': 13},
        {'name': 'shootout', 'weight': 13},
        {'name': 'no opening credits', 'weight': 13},
        {'name': 'gun', 'weight': 13},
        {'name': 'machine gun', 'weight': 13},
        {'name': 'shot in the back', 'weight': 13},
        {'name': 'knife', 'weight': 12},
        {'name': 'flashback', 'weight': 12},
        {'name': 'bar', 'weight': 12},
        {'name': 'dog', 'weight': 12}],
        name: 'Occurrences'
    }],
    title: {
        text: 'Wordcloud of Keywords in Movies'
    },
    chart:{
        backgroundColor: '#FFFFF0'
    }
});

Highcharts.chart('container2', {
    chart: {
        type: 'packedbubble',
        height: '50%',
        marginRight: 150,
        backgroundColor: '#FFFFF0'
    },
    title: {
        text: 'Popularity of Movies'
    },
    subtitle: {
        text: 'Numer of ratings On IMDB Based On Genre'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value} ratings'
    },
    plotOptions: {
        packedbubble: {
            minSize: '25%',
            maxSize: '100%',
            
            bubblePadding:500,
            layoutAlgorithm: {
                gravitationalConstant: .02,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
         
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 1
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal',
                    fontSize: '10px'
                }
            }
        }
    },
    series: [{'name': 'Action',
    'data': [{'name': 'Ford v Ferrari', 'value': 25378},
     {'name': 'The Promise', 'value': 165274},
     {'name': 'The Dark Knight Rises', 'value': 1422218},
     {'name': 'Terminator Salvation', 'value': 328776},
     {'name': 'Batman Begins', 'value': 1225666},
     {'name': 'Equilibrium', 'value': 300093},
     {'name': 'Shaft', 'value': 70380},
     {'name': 'Treasure Island', 'value': 4423},
     {'name': 'Exodus', 'value': 153138},
     {'name': 'Out of the Furnace', 'value': 100723},
     {'name': 'The Dark Knight', 'value': 2135824},
     {'name': '3:10 to Yuma', 'value': 274298},
     {'name': 'Rescue Dawn', 'value': 96544},
     {'name': 'Harsh Times', 'value': 60801},
     {'name': 'Reign of Fire', 'value': 121195},
     {'name': 'Henry V', 'value': 26947}]},
   {'name': 'Drama',
    'data': [{'name': 'Knight of Cups', 'value': 22940},
     {'name': 'The Prestige', 'value': 1095856},
     {'name': 'Laurel Canyon', 'value': 15466},
     {'name': 'Mary, Mother of Jesus', 'value': 1149},
     {'name': 'The Portrait of a Lady', 'value': 10237},
     {'name': 'Little Women', 'value': 45083},
     {'name': 'Swing Kids', 'value': 14836},
     {'name': 'Empire of the Sun', 'value': 107928},
     {'name': 'Hostiles', 'value': 57991},
     {'name': 'Jin ling shi san chai', 'value': 46592},
     {'name': 'The Machinist', 'value': 336289},
     {'name': "Captain Corelli's Mandolin", 'value': 31685},
     {'name': 'Velvet Goldmine', 'value': 32221},
     {'name': 'The Secret Agent', 'value': 2145},
     {'name': 'Newsies', 'value': 17629}]},
   {'name': 'Biography',
    'data': [{'name': 'The Fighter', 'value': 321824},
     {'name': "I'm Not There", 'value': 54594},
     {'name': 'The New World', 'value': 79504},
     {'name': 'Vice', 'value': 92731},
     {'name': 'The Big Short', 'value': 321797},
     {'name': 'Public Enemies', 'value': 265508},
     {'name': 'Anastasia: The Mystery of Anna', 'value': 1026}]},
   {'name': 'Adventure',
    'data': [{'name': 'Mowgli: Legend of the Jungle', 'value': 49427},
     {'name': 'All the Little Animals', 'value': 2536},
     {'name': 'Royal Deceit', 'value': 1898},
     {'name': 'Mio min Mio', 'value': 4833}]},
   {'name': 'Crime',
    'data': [{'name': 'American Hustle', 'value': 425372},
     {'name': 'American Psycho', 'value': 445448}]},
   {'name': 'Comedy',
    'data': [{'name': 'Metroland', 'value': 3048},
     {'name': "A Midsummer Night's Dream", 'value': 23538}]},
   {'name': 'Animation',
    'data': [{'name': "Howl's Moving Castle", 'value': 291731},
     {'name': 'Pocahontas', 'value': 157213}]}]
    
});

Highcharts.chart('container3', {
    chart: {
        type: 'timeline',
        backgroundColor: '#FFFFF0'
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        visible: false
    },
    title: {
        text: 'Timeline of Awards Won By Christian Bale, 2009-2016'
    },
    subtitle: {
        text: 'Info source: <a href="https://www.imdb.com/name/nm0000288/awards?ref_=nm_awd">www.imdb.com</a>'
    },
    colors: [
        '#3B4A68',
        '#1C4B82',
        '#72C9F6',
        '#E6E6FA',
        '#F4C5F7',
        '#C54DC2',
        '#7A2E9B',
        '#4B0082'
    ],
    series: [{
        data: [{
            name: 'Best Actor ',
            label: '2009: The Dark Knight',
            description: 'Bale won the award for the movie The Dark Knight at Empire Awards, UK'
        },{
            name: 'Best Actor',
            label: '2010: The Fighter Best Actor',
            description: 'Bale won the award for the movie The Fighter at th Austin Film Critics Award'
        }, {
            name: 'Best Actor in a Supporting Role ',
            label: '2011: The Fighter',
            description: 'Bale won his first ever Academy Awards for the Movie The Fighter'
        }, {
            name: 'Best Foreign Actor',
            label: '2012: The Fighter',
            description: 'Won this award at th SESC Film Festival, Brazil for the movie Fighter'
        }, {
            name: 'Best Ensemble',
            label: '2013:American Hsutle',
            description: 'Won for the at the NYFCO Award movie American Hsutle'
        }, {
            name: 'Outstanding Performance by a Cast',
            label: '2014: American Hsutle',
            description: 'Won for the movie American Hsutle at the Screen Actors Guild Awards'
        }, {
            name: 'Best Actor in a Supporting Role',
            label: '2015: The big short',
            description: 'Won this award for best supporting role in The big short at the Satellite Awards.'
        },
        {
            name: 'Ensemble Cast Award	',
            label: '2016: The big short',
            description: 'Won this award for best supporting role in The big short at Palm Springs International Film Festival.'
        }]
    }]
});
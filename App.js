class App{
    
    
    constructor(){

        this.$carte = $("#carte");
        this.$info = $("#info");
        this.$form = $("#form");

        this.$titre = $("#form .titre");
        this.$debut = $("#form .debut");
        this.$fin = $("#form .fin");
        
        this.pokedex = [];
        this.markers = [];
        this.pokeBlue = [];
        this.pokePierre = [];
        this.pokeOndine = [];
        this.pokeBob = [];
        this.pokeN = [];
        this.pokeTop = [];
        this.evenement = [];

        this.dollars = 200; 

    }
    
    
    //  INITIALISATION DE LA MAP


    initMap(){

        this.map = new google.maps.Map(document.getElementById('carte'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 5,
          });
          this.main();
    }

    centerOnGeolocation(){
        var that = this;
        navigator.geolocation.getCurrentPosition(function (position){
        
          var pos = {
              lat : position.coords.latitude,
              lng : position.coords.longitude
          };
          that.map.setCenter(pos);
        })
    }  

    
    // DATE-PICKERS 

    initPickers(){
        
        var options = {
            dayNames : ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            dayNamesMin : [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ],
            monthNames: [ "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre" ],
            monthNamesShort: [ "Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec" ],
            firstDay: 1,
            minDate : new Date(2017, 0, 1),
            maxDate : new Date(2018, 11, 31),
            beforeShowDay: $.proxy(this.closedDay, this), // pour ne pas perdre le this en tant que mon App
            dateFormat: "dd-mm-yy"
        };
        
            this.$debut.datepicker(options);
            this.$fin.datepicker(options);
                
        }


    // EVENEMENTS

    addEvent(event){
        this.evenement.push(event); 
    }

    saveEvent(){
        for(var event of this.evenement){
            event.encodable();
        }
        var stringEvent = JSON.stringify(this.evenement);
        localStorage.setItem("Evenements", stringEvent);
    }

    displayEvent(){
        
        var evString = localStorage.getItem("Evenements");
        var arrayEv = JSON.parse(evString); 
                
        for (var key in arrayEv) {
            var eventStorage = arrayEv[key];
            if( key == 0){
                //skip
            }
            else {
                var ev = new Evenement( 
                    eventStorage.name,
                    eventStorage.dateFirst,
                    eventStorage.dateEnd,
                    eventStorage.type
                ) 

                this.evenement.push(ev);

            }
            $('#event').append(

                "<div><center><ul><li>" +
                "<p>" + eventStorage.name + " : " + eventStorage.dateFirst + " au " + eventStorage.dateEnd + " avec des pokemons de type : " + eventStorage.type + "</p>" +
                "</li><ul></center></div>"

            );
        } 
    }



    // SAVE AND DISPLAY POKEDEX

    savePokedex(){
        for(var poke of this.pokedex){
            poke.stringifiable();
        }
        var stringPoke = JSON.stringify(this.pokedex);
        localStorage.setItem("Pokedex", stringPoke);
    
    }

    displayPokedex(){

        var dexString = localStorage.getItem("Pokedex");
        var arrayDex = JSON.parse(dexString); 
        
        for (var key in arrayDex) {
            var pokemonStorage = arrayDex[key];
            if( key == 0){
                //skip
            }
            else {
                var pokemon = new Pokemon( 
                    pokemonStorage.icon,
                    pokemonStorage.title,
                    pokemonStorage.position,
                    pokemonStorage.type,
                    pokemonStorage.health,
                    pokemonStorage.force

                )
                var pika = new PokeDresseur(
                    
                    pokemonStorage.title,
                    pokemonStorage.health,
                    pokemonStorage.force,
                    pokemonStorage.icon,
                )
                this.pokedex.push(pokemon);  
            }
            $('#équipe').append(pokemonStorage.title +  "<img src='" + pokemonStorage.icon +"'/> <br>");
        } 
    }

    // COMBATS

    fight(){
        var me = Math.floor(Math.random() * 6);
        var you = Math.floor(Math.random() * 6);
        

        if ( me > you ){
            $('#combat').append("Vous remportez le duel et gagnez 100 PokéDollars ! <br>");
            $("#argent").html("<center> PokéDollars : " + (this.dollars += 100) + "</center>");
        }
        else{
            $('#combat').append("Vous perdez le duel et perdez 100 PokéDollars ! <br>");
            $("#argent").html("<center> PokéDollars : " + (this.dollars -= 100) + "</center>");
            var index = this.pokedex.indexOf(0);
            this.pokedex.splice(index, 1);
        }
        if(this.dollars == 0){
            alert("Vous n'avez plus de quoi acheter à manger ou à boire ! vous mourrez donc, vous et vos pokemons...")
            window.location.reload();
        }
        if(this.pokedex == 0){
            alert("Vous n'avez plus de pokemons en vie, vous finissez seul et triste...")
            window.location.reload();
        }
        
        
    }
   
}
    
            


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
        this.center = [];

        this.dollars = 200; 
        this.sante = 100;

    }
    
    
    //  INITIALISATION DE LA MAP


    initMap(){

        this.map = new google.maps.Map(document.getElementById('carte'), {
            center: {lat: 46.922938, lng:2.662475},
            zoom: 6,
          });
          this.main();

          var carre = new google.maps.Rectangle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: 'red',
            fillOpacity: 0,
            map: this.map,
            bounds: {
                west: -7, north:52, east: 9, south: 42.5
            }
            });
    
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
            var ev = new Evenement( 
                eventStorage.name,
                new Date(eventStorage.dateFirst),
                new Date(eventStorage.dateEnd),
                eventStorage.type
            ) 
            ev.display();
            this.evenement.push(ev);

        } 
    }



    // SAVE AND DISPLAY POKEDEX

    savePokedex(id_pokemon){
        
      
        var id_user = 1;
        var id_poke = id_pokemon;

        $.ajax({
            url : "http://localhost:8888/JS_objet/PokeGo-test/pokedex/",
            method : "POST",
            dataType : "json",
            data : {
                id_user : id_user,
                id_poke : id_poke
            },
            success : function(data){
                console.log(data);  
            },
            error : function(error){
                console.log(error);
            }    
        });
    
    }

    displayPokedex(){

        var id = 1;
        $.ajax({
            url : "http://localhost:8888/JS_objet/PokeGo-test/pokedex/"+id,
            method : "GET",
            dataType : "json",
            success : function(datas){
                console.log(datas);
                for(var data of datas){
                    $('#équipe').append(data.pokemonTitle +  "<img src='" + data.pokemonIcon +"'/> <br>");
                }
            },
            error : function(error){
                console.log(error);
            }    
        });
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
            alert("Vous perdez votre dernier combat et n'avez plus de pokemons en vie, vous finissez seul et triste...")
            window.location.reload();
        }
            
    }
   
}
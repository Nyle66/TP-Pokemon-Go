var app = new App();

app.main = function(){

    //app.centerOnGeolocation();
    app.initPickers();

    alert("Bonjour Red !");
    alert("Le but de l'aventure est de completer ton pokedex !");
    alert("Mais attention, si tu ne te ravitaille pas au centre Pokemon tu meurs, si tu n'as plus de pokemons en vie tu meurs, si tu n'as plus de pokédollars tu meurs aussi !");
    alert("En avant !");
    

    app.markers = [];
    app.pokedex = [];
    app.pokeBlue = [];
    app.pokePierre = [];
    app.pokeOndine = [];
    app.pokeBob = [];
    app.pokeN = [];
    app.pokeTop = [];
    app.evenement = [];
    app.centers = [];



    
    

    // CREATION DU DRESSEUR

    var trainerIcon = 'image/red.png';
    var position = new google.maps.LatLng(42.6990297, 2.8344617);
    
    var trainer = new google.maps.Marker({
        position: position,
        map: app.map,
        draggable:true,
        title:"Red",
        icon: trainerIcon,
        visible: true,
        optimized: false,
        zIndex: 1
        
    });

    // CREATION DES POKEMONS ET DES ADVERSAIRES


         

    var southWest = new google.maps.LatLng(51.0899507, 5.969077);
    var northEast = new google.maps.LatLng(42.6036043,-5.5949009);
    var lngSpan = northEast.lng() - southWest.lng();
    var latSpan = northEast.lat() - southWest.lat();

    for(var i = 0; i < 10; i++){
        var iconC = 'image/center.png';
        var positionC = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
        southWest.lng() + lngSpan * Math.random());
        
        var center = new google.maps.Marker({
            position: positionC,
            map: app.map,
            title:"PokeCenter",
            icon: iconC,
            optimized: false,
            visible: false,
            zIndex: 0
        });
        app.centers.push(center);
    }

        // Dresseurs

    var iconR = 'image/jj.png';
    var positionR = new google.maps.LatLng(48.866667, 2.333333);
    
    var rocket = new google.maps.Marker({
        position: positionR,
        map: app.map,
        title:"Team Rocket",
        icon: iconR,
        optimized: false,
        visible: false,
        zIndex: 0
    });

    var iconB = 'image/blue.png';
    var positionB = new google.maps.LatLng(48.4000000,-4.4833300);
    
    var blue = new google.maps.Marker({
        position: positionB,
        map: app.map,
        title:"Blue",
        icon: iconB,
        optimized: false,
        visible: false,
        zIndex: 0
    });

    var iconP = 'image/pierre.png';
    var positionP = new google.maps.LatLng(43.4833300, -1.4833300);
    
    var pierre = new google.maps.Marker({
        position: positionP,
        map: app.map,
        title:"Pierre",
        icon: iconP,
        optimized: false,
        visible: false,
        zIndex: 0
    });

    var iconO = 'image/ondine.png';
    var positionO = new google.maps.LatLng(43.700000, 7.250000);
    
    var ondine = new google.maps.Marker({
        position: positionO,
        map: app.map,
        title:"Ondine",
        icon: iconO,
        optimized: false,
        visible: false,
        zIndex: 0
    });

    var iconB = 'image/bob.png';
    var positionB = new google.maps.LatLng(48.5839200, 7.7455300);
    
    var bob = new google.maps.Marker({
        position: positionB,
        map: app.map,
        title:"Major Bob",
        icon: iconB,
        optimized: false,
        visible: false,
        zIndex: 0
    });

    var iconN = 'image/govani.png';
    var positionN = new google.maps.LatLng(50.6329700, 3.0585800);
    
    var n = new google.maps.Marker({
        position: positionN,
        map: app.map,
        title:"Giovanni",
        icon: iconN,
        optimized: false,
        visible: false,
        zIndex: 0
    });

    var iconT = 'image/top.png';
    var positionT = new google.maps.LatLng(45.7796600, 3.0862800);
    
    var top = new google.maps.Marker({
        position: positionT,
        map: app.map,
        title:"Top dresseur",
        icon: iconT,
        optimized: false,
        visible: false,
        zIndex: 0
    });

        // Pokemons

    var typePlante = "Plante";
    var typeFeu = "Feu";
    var typeEau = "Eau";
    var typeElec = "Electrique";
    var typeVol = "Vol";
    var typeInsecte = "Insecte";
    var typeSol = "Sol";


    var title4 = 'Pikachu';
    var health4 = 15;
    var force4 = 7;
    var icon4 = 'image/pika.png';
    var pika = new PokeDresseur(title4, health4, force4, icon4);
    app.pokedex.push(pika);
    
    // var titleB = 'Dracaufeu';
    // var healthB = 30;
    // var forceB = 8;
    // var iconB = ''
    // var pokemonBlue = new PokeDresseur(titleB, healthB, forceB, iconB);
    // app.pokeBlue.push(pokemonBlue);

    // var titleP = 'Grolem';
    // var healthP = 30;
    // var forceP = 7;
    // var iconP = ''
    // var pokemonPierre = new PokeDresseur(titleP, healthP, forceP, iconP);
    // app.pokePierre.push(pokemonPierre);

    // var titleO = 'Leviator';
    // var healthO = 30;
    // var forceO = 9;
    // var iconO = ''
    // var pokemonOndine = new PokeDresseur(titleO, healthO, forceO, iconO);
    // app.pokeOndine.push(pokemonOndine);

    // var titleB = 'Raichu';
    // var healthB = 30;
    // var forceB = 9;
    // var iconB = ''
    // var pokemonBob = new PokeDresseur(titleB, healthB, forceB, iconB);
    // app.pokeBob.push(pokemonBob);

    // var titleN = 'Zoruark';
    // var healthN = 30;
    // var forceN = 9;
    // var iconN = ''
    // var pokemonN = new PokeDresseur(titleN, healthN, forceN, iconN);
    // app.pokeN.push(pokemonN);

    // var titleT = 'Ectoplasma';
    // var healthT = 30;
    // var forceT = 9;
    // var iconT = ''
    // var pokemonTop = new PokeDresseur(titleT, healthT, forceT, iconT);
    // app.pokeTop.push(pokemonTop);



    var icon1 = 'image/bulbi.png';
    var title1 = 'Bulbizare';
    var pos1 = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
    southWest.lng() + lngSpan * Math.random());
    var health1 = 10;
    var force1 = 5;
    var bulbi = new Pokemon(icon1, title1, pos1, typePlante, health1, force1);

    var icon2 = 'image/sala.png';
    var title2 = 'Salamèche';
    var pos2 = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
    southWest.lng() + lngSpan * Math.random());
    var health2 = 10;
    var force2 = 5;
    var sala = new Pokemon(icon2, title2, pos2, typeFeu, health2, force2);
    
    var icon3 = 'image/cara.png';
    var title3 = 'Carapuce';
    var pos3 = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
    southWest.lng() + lngSpan * Math.random());
    var health3 = 10;
    var force3 = 5;
    var cara = new Pokemon(icon3, title3, pos3, typeEau, health3, force3);

    var icon5 = 'image/papi.png';
    var title5 = 'Papillusion';
    var pos5 = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
    southWest.lng() + lngSpan * Math.random());
    var health5 = 15;
    var force5 = 7;
    var papi = new Pokemon(icon5, title5, pos5, typeInsecte, health5, force5);

    var icon6 = 'image/dard.png';
    var title6 = 'Dardargnan';
    var pos6 = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
    southWest.lng() + lngSpan * Math.random());
    var health6 = 15;
    var force6 = 7;
    var dard = new Pokemon(icon6, title6, pos6, typeInsecte, health6, force6);

    var icon7 = 'image/rouca.png';
    var title7 = 'Roucarnage';
    var pos7 = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
    southWest.lng() + lngSpan * Math.random());
    var health7 = 20;
    var force7 = 10;
    var rouca = new Pokemon(icon7, title7, pos7, typeVol, health7, force7);

    var icon8 = 'image/sabl.png';
    var title8 = 'Sablaireau';
    var pos8 = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
    southWest.lng() + lngSpan * Math.random());
    var health8 = 20;
    var force8 = 10;
    var sabl = new Pokemon(icon8, title8, pos8, typeSol, health8, force8);

    var icon9 = 'image/nido.png';
    var title9 = 'Nidoking';
    var pos9 = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
    southWest.lng() + lngSpan * Math.random());
    var health9 = 20;
    var force9 = 10;
    var nido = new Pokemon(icon9, title9, pos9, typeSol, health9, force9);

    var icon10 = 'image/feun.png';
    var title10 = 'Feunard';
    var pos10 = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
    southWest.lng() + lngSpan * Math.random());
    var health10 = 20;
    var force10 = 10;
    var feun = new Pokemon(icon10, title10, pos10, typeFeu, health10, force10);

    var icon11 = 'image/arca.png';
    var title11 = 'Arcanin';
    var pos11 = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
    southWest.lng() + lngSpan * Math.random());
    var health11 = 25;
    var force11 = 10;
    var arca = new Pokemon(icon11, title11, pos11, typeFeu, health11, force11);

    app.markers.push(bulbi,sala,cara,papi,dard,rouca,sabl,nido,feun,arca);
    
    
    // CALCUL DE LA DISTANCE POKEMON - DRESSEUR


        // Dresseurs

        google.maps.event.addListener(trainer, 'dragend', function(evt) {


        // app.sante -= 10;
        $("#life").html("<center> Life : " + (app.sante -= 10) + "HP</center>");
        var messages = [
            'Vous tombez dans les pommes apres avoir fait 5 nuit blanches',
            'Vous vous faites percuter par un dracolosse et tombez dans le coma', 
            'Votre gourde est vide, vous finissez déséché sur le rebord d \'un sentier', 
            'Vous n \'avez plus rien a manger et tomber dans un ravin apres avoir suivi le mirage d \'un MacDo'];

        var random = Math.round(Math.random()*messages.length);
        if(app.sante == 0){
            alert(messages[random]);
            window.location.reload();
        }

        
        var positionT = new google.maps.LatLng(this.getPosition().lat(), this.getPosition().lng());

        for(var center of app.centers) {
            var distanceC = google.maps.geometry.spherical.computeDistanceBetween( positionT, center.position);       
            if( distanceC < 60000){
                
                center.setVisible(true);
                alert('Vous tombez sur un Centre Pokemon.');
                app.sante += 10;   
    
            }
        }


        for( var mark of app.markers){
            var distance = google.maps.geometry.spherical.computeDistanceBetween( positionT, mark.position);       
            if( distance < 60000){
                mark.marker.setVisible(true);
                alert('Un pokemon sauvage apparait !');
            }
        }

        var index = app.pokedex.indexOf(0);
        var distanceRocket = google.maps.geometry.spherical.computeDistanceBetween( positionT, rocket.position);       
        if( distanceRocket < 70000){
            rocket.setVisible(true);
            alert('La team Rocket apparait et kidnappe un de vos pokemons !');
            app.pokedex.splice(index, 1);
            

        }

        var distanceBlue = google.maps.geometry.spherical.computeDistanceBetween( positionT, blue.position);       
        if( distanceBlue < 70000){
            blue.setVisible(true);
            alert('Blue veut se battre !');
            app.fight();
            

        }
    
        var distancePierre = google.maps.geometry.spherical.computeDistanceBetween( positionT, pierre.position);       
        if( distancePierre < 70000){
            pierre.setVisible(true);
            alert('Pierre veut se battre !');
            app.fight();
            

        }
    
        var distanceOndine = google.maps.geometry.spherical.computeDistanceBetween( positionT, ondine.position);       
        if( distanceOndine < 70000){
            ondine.setVisible(true);
            alert('Ondine veut se battre !');
            app.fight();
            

        }

        var distanceBob = google.maps.geometry.spherical.computeDistanceBetween( positionT, bob.position);       
        if( distanceBob < 70000){
            bob.setVisible(true);
            alert('Major Bob veut se battre !');
            app.fight();
            

        }

        var distanceN = google.maps.geometry.spherical.computeDistanceBetween( positionT, n.position);       
        if( distanceN < 70000){
            n.setVisible(true);
            alert('Giovanni veut se battre !');
            app.fight();
            

        }

        var distanceTop = google.maps.geometry.spherical.computeDistanceBetween( positionT, top.position);       
        if( distanceTop < 70000){
            top.setVisible(true);
            alert('Top Dresseur veut se battre !');
            app.fight();
            

        }

    });



    // CAPTURE DES POKEMONS ET AJOUT AU POKEDEX


    google.maps.event.addListener(bulbi.marker, 'click', function(evt) {
        bulbi.marker.setIcon("image/Pokeball.png");
        alert('Bulbizare capturé !');
        app.pokedex.push(bulbi);
        app.savePokedex();  
        if(app.pokedex.length == 11){
            alert('Vous avez capturé tout les pokemons !');
        }
        
    });

    google.maps.event.addListener(sala.marker, 'click', function(evt) {
        sala.marker.setIcon("image/Pokeball.png");
        alert('Salameche capturé !');
        app.pokedex.push(sala);
        app.savePokedex();
         
    });

    google.maps.event.addListener(cara.marker, 'click', function(evt) {
        cara.marker.setIcon("image/Pokeball.png");
        alert('Carapuce capturé !');
        app.pokedex.push(cara);
        app.savePokedex();
    });

    google.maps.event.addListener(papi.marker, 'click', function(evt) {
        papi.marker.setIcon("image/Pokeball.png");
        alert('Papillusion capturé !');
        app.pokedex.push(papi);
        app.savePokedex();
        
    });
    
    google.maps.event.addListener(dard.marker, 'click', function(evt) {
        dard.marker.setIcon("image/Pokeball.png");
        alert('Dardargnan capturé !');
        app.pokedex.push(dard);
        app.savePokedex();
    });

    google.maps.event.addListener(rouca.marker, 'click', function(evt) {
        rouca.marker.setIcon("image/Pokeball.png");
        alert('Roucarnage capturé !');
        app.pokedex.push(rouca);
        app.savePokedex();
    });

    google.maps.event.addListener(sabl.marker, 'click', function(evt) {
        sabl.marker.setIcon("image/Pokeball.png");
        alert('Sablaireau capturé !');
        app.pokedex.push(sabl);
        app.savePokedex();
    });

    google.maps.event.addListener(nido.marker, 'click', function(evt) {
        nido.marker.setIcon("image/Pokeball.png");
        alert('Nidoking capturé !');
        app.pokedex.push(nido);
        app.savePokedex();
    });

    google.maps.event.addListener(feun.marker, 'click', function(evt) {
        feun.marker.setIcon("image/Pokeball.png");
        alert('Feunard capturé !');
        app.pokedex.push(feun);
        app.savePokedex();
    });

    google.maps.event.addListener(arca.marker, 'click', function(evt) {
        arca.marker.setIcon("image/Pokeball.png");
        alert('Arcanin capturé !');
        app.pokedex.push(arca);
        app.savePokedex();
    });


    // GESTION EVENEMENTS

    app.$form.submit(function(){
        
        event.preventDefault();
            
        var name = app.$titre.val();
        var date1 = app.$debut.datepicker("getDate");
        var date2 = app.$fin.datepicker("getDate");
        var type = [];


        $("input[type='checkbox']:checked").each(function() {
            type.push($(this).val());
          });

          
        
        var events = new Evenement(name, date1, date2, type);
        events.display();
        app.addEvent(events); 
            
    });

    window.onload = function(){
        app.displayPokedex();
        app.displayEvent();
    }
    window.onbeforeunload = function(){
        app.saveEvent();
    }

}
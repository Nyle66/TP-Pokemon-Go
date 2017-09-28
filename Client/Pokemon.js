class Pokemon{
    
    constructor(icon, title, position, type, health, force){
        this.icon = icon;
        this.title = title;
        this.position = position;
        this.health = health;
        this.force = force;
        this.type = type;
        this.marker = false;

        this.display();
        
    }
    
    display(){        

        var icon = this.icon;
        var title = this.title;
        var position = this.position;

        this.marker = new google.maps.Marker({
            position: position,
            map: app.map,
            title: title,
            icon: icon,
            animation: google.maps.Animation.DROP,
            visible: false,
            optimized: false,
            zIndex: 10
        });
    }

    stringifiable(){
        this.marker = "";
    }

}
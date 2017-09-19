class Evenement{

    constructor(name, dateFirst, dateEnd, type){

        this.name = name;
        this.dateFirst = dateFirst;
        this.dateEnd = dateEnd;
        this.type = type;

    }

    display(){

        var div = "<div><center><ul><li>" +
        "<p>" + this.name + " : " + this.dateFirst + " au " + this.dateEnd + " avec des pokemons de type : " + this.type + "</p>" +
        "</li><ul></center></div>";

        this.$dom = $(div);

        $('#event').append( this.$dom );
    }

    encodable(){
        this.dateFirst = this.dateFirst.toISOString();
        this.dateEnd = this.dateEnd.toISOString();
    }

}
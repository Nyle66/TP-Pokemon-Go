class Evenement{

    constructor(name, dateFirst, dateEnd, type){

        this.name = name;
        this.dateFirst = dateFirst;
        this.dateEnd = dateEnd;
        this.type = type;

    }

    encodable(){
        this.dateFirst = this.dateFirst.toISOString();
        this.dateEnd = this.dateEnd.toISOString();
    }

}
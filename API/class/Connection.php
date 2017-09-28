<?php

class Connection{
    
    static $connection = null;

    static function getConnection(){
        if(!self::$connection){
            self::$connection = new PDO(
                "mysql:host=localhost;dbname=pokemon",
                "root",
                "root"
            );
        }
        return self::$connection;
    }

    private function __construct(){}

}
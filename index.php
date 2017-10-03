<?php

header("Access-Control-Allow-Origin:*", false);
require 'flight/Flight.php';
require 'API/class/Connection.php';

Flight::route("GET /pokedex/@id_user", function($id_user){



    $pdo = Connection::getConnection();
     $query = "SELECT pokemon.* FROM pokemon JOIN pokedex ON pokedex.id_poke=pokemon.id WHERE pokedex.id_user=:id_user ";
     $prep = $pdo->prepare($query);
     $prep->execute([
          "id_user" => $id_user
     ]);
     $result = $prep->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
     
 
});


Flight::route("POST /pokedex", function(){
        
   
    $id_user = Flight::request()->data["id_user"];
    $id_poke = Flight::request()->data["id_poke"];
    
    $pdo = Connection::getConnection();
    $query = "INSERT INTO pokedex (id_user, id_poke) VALUES (?, ?) ";
    $prep = $pdo->prepare($query);
    $prep->execute([
        $id_user,
        $id_poke
    ]);
    $result = $prep->fetch(PDO::FETCH_ASSOC);

    echo json_encode($result);
    
});

Flight::route("POST /login", function(){
    $username = Flight::request()->data["username"];
    $password = Flight::request()->data["password"]; 
    $pdo = new PDO( 
        "mysql:host=localhost;dbname=pokemon",
        "root",
        "root"
    );
    $query = "SELECT * FROM user WHERE username=:username";
    $prep = $pdo->prepare( $query );
    $prep->execute([
        "username" => $username
    ]);
    $result = $prep->fetch( PDO::FETCH_ASSOC );
    
    $status = [
        "success" => false,
        "errors" => [],
        "user" => []
    ];
    if( $result == false ){
        $status["success"] = false;
        $status["errors"] = "Utilisateur non trouvé";
    }
    else if( $password != $result["password"]){
        $status["success"] = false;
        $status["errors"] = "Mot de passe incorrect";
    }
    else {
        $status["success"] = true;
        $status["user"] = $result;
    
    }
    echo json_encode( $status );
});


Flight::start();
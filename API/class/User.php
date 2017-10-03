<?php



class User{
    
    private $id;
    private $username;
    private $password;


    function __construct($data = []){
        $this->hydrate($data);
    }
    
    function getId() {
        return $this->id;
    }

    function getUsername() {
        return $this->username;
    }

    function getPassword() {
        return $this->password;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setUsername($username) {
        $this->username = $username;
    }
                                                                                
    function setPassword($password) {
        $this->password = $password;
    }

    

    public function save(BddManager $bddManager){
        $bddManager->insertUser($this);
    }

    public function hydrate(array $donneesPdo){
        if(empty($donneesPdo) == false){
            foreach ($donneesPdo as $key => $value){
                $newString=$key;
                if(preg_match("#_#",$key)){
                    $word = explode("_",$key);
                    $newString = "";
                    foreach ($word as $w){
                        $newString.=ucfirst($w);
                    }
                }
                $method = "set".ucfirst($newString);
                if(method_exists($this,$method)){
                    $this->$method($value);
                }
            }
        }
    }
}

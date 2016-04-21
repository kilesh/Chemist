<html> 
<head>
    <link rel="icon" type="image/x-image" href="favicon.ico"/>
    <link rel="icon" href="/image/favicon.ico" type="image/x-image" />
    <link rel="shortcut icon" href="/image/favicon.ico" />
    <title>yleslab</title>
    <link href="/Bootstrap/bootstrap.css" rel="stylesheet" />
    <link href="/Css/main.css" rel="stylesheet" />
    <link href="/Css/container.css" rel="stylesheet" />
    <link href="/Css/offcanvans.css" rel="stylesheet"/>
    <script src="/Js/jquery-1.9.1.js"></script>
    <script src="/Bootstrap/bootstrap.js"></script>
    <script src="/Js/main.js"></script>
    <link href='https://fonts.googleapis.com/css?family=Raleway:400,300,500,600,700|Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

</head>

<body>
<div class="content">

       <section id="cover" class="container-fluid">
            
       
           <div class="row cover-row ">
               
              
               <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3  blur_cover">
       
               
                  <?php 

                         $usertable="test";
                         $yourfield = "name";
                         $yourfield2 = "score";


                          $name=$_GET['name']; 
                          //connect  to the database 
                          include 'db.php';
                          echo "<h1></br>$name </br></h1>";
                          $sql="SELECT  * FROM `".$usertable."` WHERE `".$yourfield."` = '" . $name ."'"; 
                          echo "</br><h1>$sql </h1></br>";
                          //-run  the query against the mysql query function 
                          $result=mysql_query($sql); 
                          //-create  while loop and loop through result set 
                          while($row=mysql_fetch_array($result)){ 
                                  $name = $row["$yourfield"];
                                  $score= $row["$yourfield2"];
                                  echo "<h1>Name: ".$name." </br> Score: ".$score." <br></br></h1>";
                          //-display the result of the array 


                          }
                    ?>
	 
                   <button onclick="history.go(-1);" class="btn btn-lg">Back </button>
               </div>

            </div>
                <footer class="row bang-row" >


                                   <p> &copy 2016  <strong>     Kyle.S Lab</strong>.  All rights reserved.</p>
                            
                </footer>
        </section>


                
    </div>
</body>
</html>


<!--

$usertable="test";
$yourfield = "name";
$yourfield2 = "score";

	  
	  $name=$_POST['name']; 
	  //connect  to the database 
	  include 'db.php';
      echo "</br>$name </br>";
	  $sql="SELECT  * FROM `".$usertable."` WHERE `".$yourfield."` = '" . $name ."'"; 
      echo "$sql </br>";
	  //-run  the query against the mysql query function 
	  $result=mysql_query($sql); 
	  //-create  while loop and loop through result set 
	  while($row=mysql_fetch_array($result)){ 
	          $name = $row["$yourfield"];
              $score= $row["$yourfield2"];
	          echo "Name: ".$name." Score: ".$score." <br></br>";
	  //-display the result of the array 
	 
	   
	  }
	 
      
-->
    
	
    
        
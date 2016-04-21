<!--
<!DOCTYPE  HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"  "http://www.w3.org/TR/html4/loose.dtd"> 
	<html> 
	  <head> 
	    <meta  http-equiv="Content-Type" content="text/html;  charset=iso-8859-1"> 
	    <title>Search  Contacts</title> 
	  </head> 
	  <p><body> 
	    <h3>Search  Contacts Details</h3> 
	    <p>You  may search either by first or last name</p> 
	    <form  method="post" action="search.php"  id="searchform"> 
	      <input  type="text" name="name"> 
	      <input  type="submit" name="submit" value="Search"> 
	    </form> 
	  </body> 
	</html> 
	 -->
<!DOCTYPE html>
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
<!--    <script src="/Js/main.js"></script>-->
    <link href='https://fonts.googleapis.com/css?family=Raleway:400,300,500,600,700|Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

</head>

<body>

    

 


<!--
        <nav class="navbar navbar-default navbar-fixed-top ">
            <div class="container">
                
                <div class="navbar-header pull-left">
                    <a class="navbar-brand" >Kyle.S</a>
                </div>
                
                <ul class="nav-header pull-right">
                    <a  class="arrow-left open-panel"></a>
                </ul> 
                
            </div>
            <h5 id="close" class="cross"></h5>
            <div class="sidebar">
        
                <a href="#first"><h5>Who am I</h5></a>  
                <a href="#second"><h5>What i usually do</h5></a>
                <a href="#third"><h5>My Project</h5></a>
                <a href="#fourth"><h5>My Skill</h5></a>
                <a href="#fifth"><h5>Contact</h5></a>

            </div>
        </nav> 
-->
  
 
<div class="content">

       <section id="cover" class="container-fluid">
            
       
           <div class="row cover-row ">
               
              
               <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3  blur_cover">
       
               
                   <h2>Check score</h2>
                  <form class="form-horizontal" role="form" method="get" action="search.php"  id="searchform">
                    
                    <div class="form-group">
                      <label class="control-label col-sm-2" >Name:</label>
                      <div class="col-sm-8">          
                        <input type="text" class="form-control" id="pwd" placeholder="Enter name" name="name" >
                      </div>
                    </div>
                    <div class="form-group">        
                      <div class="col-sm-offset-2 col-sm-8">
                          <input  type="submit" value="Check" class="btn btn-lg"> 
                      </div>
                        
                        
                    </div>
                      <div class="form-group">        
                      <div class="col-sm-offset-2 col-sm-8">
                          <button onclick="history.go(-1);" class="btn btn-lg">Back </button>
                      </div>
                        
                        
                    </div>
                       
                  </form>
               </div>

                </div>
                <footer class="row bang-row" >


                                   <p> &copy 2016  <strong>     Kyle.S Lab</strong>.  All rights reserved.</p>
                            
                        </footer>
        </section>


                
                    </div>
</body>
</html>

<?php
include('includes/connect.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
<base href="//localhost/startup/" />
<style>
	.error {color: #FF0000;}
</style>

<?php include('templates/head.php'); ?>
</head>
<?php
	
	include 'classes/simpleUrl.php';
	
	$url = new simpleUrl('/startup');
	
	if( !$url->segment(1) )
		$page = 'home';

	else
		$page = $url->segment(1);
	
	switch($page)
	{
		case 'home' :
			include 'templates/home.php';
		break;	
	
		case 'services':
			include 'category.php';
		break;
		
		case 'about_us':
			include 'about.php';
		break;
		
		case 'portfolio';
			include 'portfolio.php';
		break;
		
		case 'blog':
			include 'blog.php';
		break;
		
		case 'contact_us':
			include 'contact.php';
		break;
		
		case 'thanks' :
			include 'thank.php';
		break;		

		case 'index.html' :
			include 'templates/home.php';
		break;

		default ://404 page
			include 'index.php';
		break;	
	}
	
?>

</html>
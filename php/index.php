<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact Form</title>
</head>
<body>
    <!---linking the form to the php contact page ---> 
    <form action="data/contact.php" method="post">
        <h1>Contact Me</h1>

        <label for="name-feild">Full Name</label>
        <input id="name-feild" name="name" type="text" placeholder="Name">
        <!--- matching both the for and the id, when you click on the label name, 
        it will place your cursor into the feild //important for screen readers like alt tags---> 

        <label for="email-feild">Email</label>
        <input id="email-feild" name="email" type="text" placeholder="Email">

        <!--- this does the same thing ---> 
        <label for="">Subject<input name="subject" type="text" placeholder="Subject"> </label>
       

        <label for="Message-feild">Your Message</label>
        <textarea name="message" id="Message-feild"></textarea>
        
        <button type="submit">Submit</button>


    </form>
</body>
</html>
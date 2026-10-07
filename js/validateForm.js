function validateForm(){
	   
         var xmlRequest=new XMLHttpRequest();

		    var alphaExp = /^[a-zA-Z ]+$/;
        var numericExpression = /^[0-9]+$/;
        var emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        var Name = document.getElementById("Newsname").value;
       
        var Email = document.getElementById("Newsemail").value; 	
        

        if (Name=='' && Email=='') {

            document.getElementById("head1").innerHTML = "*  All fields are mandatory "; 
            document.getElementById("Newsname").focus();
            return false;
         }
         if (Name=='') {
            document.getElementById("head1").innerHTML = "*  Name is required"; 
            document.getElementById("Newsname").focus();
            return false;
         }
         if (!Name.match(alphaExp)) {
          document.getElementById('head1').innerHTML = "*  Only Alphabets allowed"; 
          document.getElementById("Newsname").focus();
          return false;
         }
         if(Email==''){
            document.getElementById('head1').innerHTML = "*  Email Id is required"; 
            document.getElementById("Newsemail").focus();
            return false;

         }
         if(!Email.match(emailExp)){
             document.getElementById('head1').innerHTML = "*  Enter valid Email Id"; 
             document.getElementById("Newsemail").focus();
             return false;

         }
         


         var formData = new FormData(); 
        
          formData.append("Name",Name);
          formData.append("Email",Email);
          formData.append("Source","NewsLetter");
          

          xmlRequest.open("POST", "ContactEnquiry.php", true);

          xmlRequest.send(formData);

          document.getElementById("submit").style.display="none";
          document.getElementById("subloading").style.display="block";
          xmlRequest.onreadystatechange = function() 
            {
              if (xmlRequest.readyState == 4 && xmlRequest.status == 200) 
                {
                  document.getElementById("response1").innerHTML=xmlRequest.responseText;
                   setTimeout(function(){
                     window.location.reload(1);
                   }, 5000);
               }
            }       

         return true;
         	
}

function validateContactForm(){
     
         var xmlRequest=new XMLHttpRequest();

        var alphaExp = /^[a-zA-Z ]+$/;
        var numericExpression = /^[0-9]+$/;
        var emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        var Name = document.getElementById("name").value;
        var Contact = document.getElementById("contact").value;
        var Email = document.getElementById("email").value;   
        var projectType = document.getElementById("projectType").value;
        var address = document.getElementById("address").value;
        var budget = document.getElementById("budget").value;   
        var Project=document.getElementById("project").value;
        var comments=document.getElementById("comments").value;

        if (Name=='' && Email=='' && Contact && projectType && address && Project) {

            document.getElementById("head").innerHTML = "*  All fields are mandatory "; 
            document.getElementById("name").focus();
            return false;
         }
         if (Name=='') {
            document.getElementById("head").innerHTML = "*  Name is required"; 
            document.getElementById("name").focus();
            return false;
         }
         if (!Name.match(alphaExp)) {
          document.getElementById('head').innerHTML = "*  Only Alphabets allowed"; 
          document.getElementById("name").focus();
          return false;
         }
         if (Contact=='') {
            document.getElementById("head").innerHTML = "*  Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
          if (!Contact.match(numericExpression)) {
          document.getElementById('head').innerHTML = "*  Only digits allowed"; 
          document.getElementById("contact").focus();
          return false;
         }
         if (Contact.length>10 || Contact.length<10) {
            document.getElementById("head").innerHTML = "*  Only 10 digit Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
         if(Email==''){
            document.getElementById('head').innerHTML = "*  Email Id is required"; 
            document.getElementById("email").focus();
            return false;

         }
         if(!Email.match(emailExp)){
             document.getElementById('head').innerHTML = "*  Enter valid Email Id"; 
             document.getElementById("email").focus();
             return false;

         }
         if (Project=="") {
            document.getElementById("head").innerHTML = "*  Select Project"; 
            document.getElementById("project").focus();
            return false;
         }

         if (projectType=="") {
            document.getElementById("head").innerHTML = "*  Select Project  type"; 
            document.getElementById("projectType").focus();
            return false;
         }
         if (budget=="") {
            document.getElementById("head").innerHTML = "*  Budget is required"; 
            document.getElementById("budget").focus();
            return false;
         }
         if (address=="") {
            document.getElementById("head").innerHTML = "*  Address is required"; 
            document.getElementById("address").focus();
            return false;
         }


         var formData = new FormData(); 
        
          formData.append("Name",Name);
          formData.append("Email",Email);
          formData.append("Contact",Contact);
          formData.append("ProjectType",projectType);
          formData.append("Project",Project);
          formData.append("Address",address);
          formData.append("Budget",budget);
          formData.append("Comments",comments);
          formData.append("Source","ContactForm");

          xmlRequest.open("POST", "ContactEnquiry.php", true);

          xmlRequest.send(formData);

          document.getElementById("submit").style.display="none";
          // document.getElementById("subloading").style.display="block";
          xmlRequest.onreadystatechange = function() 
            {
              if (xmlRequest.readyState == 4 && xmlRequest.status == 200) 
                {
                  document.getElementById("response").innerHTML=xmlRequest.responseText;
                    setTimeout(function(){
                      window.location.reload(1);
                    }, 5000);
               }
            }       

         return true;
          
}

function validateFeedbackForm(){

  var xmlRequest=new XMLHttpRequest();

        var alphaExp = /^[a-zA-Z ]+$/;
        var numericExpression = /^[0-9]+$/;
        var emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        var Name = document.getElementById("name").value;
        var Contact = document.getElementById("contact").value;
        var Email = document.getElementById("email").value;   
        var CompanyName = document.getElementById("companyname").value;
        var FeedbackType = document.getElementById("feedback").value;
        var comments=document.getElementById("comments").value;

        if (Name=='' && Email=='' && Contact && CompanyName ) {

            document.getElementById("head").innerHTML = "*  All fields are mandatory "; 
            document.getElementById("name").focus();
            return false;
         }
         if (Name=='') {
            document.getElementById("head").innerHTML = "*  Name is required"; 
            document.getElementById("name").focus();
            return false;
         }
         if (!Name.match(alphaExp)) {
          document.getElementById('head').innerHTML = "*  Only Alphabets allowed"; 
          document.getElementById("name").focus();
          return false;
         }
         if (CompanyName=='') {
            document.getElementById("head").innerHTML = "* Company Name is required"; 
            document.getElementById("companyname").focus();
            return false;
         }
         if (!CompanyName.match(alphaExp)) {
          document.getElementById('head').innerHTML = "*  Only Alphabets allowed"; 
          document.getElementById("companyname").focus();
          return false;
         }
         
         if(Email==''){
            document.getElementById('head').innerHTML = "*  Email Id is required"; 
            document.getElementById("email").focus();
            return false;

         }
         if(!Email.match(emailExp)){
             document.getElementById('head').innerHTML = "*  Enter valid Email Id"; 
             document.getElementById("email").focus();
             return false;

         }
         if (Contact=='') {
            document.getElementById("head").innerHTML = "*  Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
          if (!Contact.match(numericExpression)) {
          document.getElementById('head').innerHTML = "*  Only digits allowed"; 
          document.getElementById("contact").focus();
          return false;
         }
         if (Contact.length>10 || Contact.length<10) {
            document.getElementById("head").innerHTML = "*  Only 10 digit Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
        
         if (FeedbackType=="") {
            document.getElementById("head").innerHTML = "*  Select Feddback  type"; 
            document.getElementById("feedback").focus();
            return false;
         }
         


         var formData = new FormData(); 
        
          formData.append("Name",Name);
           formData.append("Company",CompanyName);
          formData.append("Email",Email);
          formData.append("Contact",Contact);
          formData.append("FeedbackType",FeedbackType);
          formData.append("Comments",comments);
          formData.append("Source","FeedbackForm");

          xmlRequest.open("POST", "ContactEnquiry.php", true);

          xmlRequest.send(formData);

          document.getElementById("submit").style.display="none";
          // document.getElementById("subloading").style.display="block";
          xmlRequest.onreadystatechange = function() 
            {
              if (xmlRequest.readyState == 4 && xmlRequest.status == 200) 
                {
                  document.getElementById("response").innerHTML=xmlRequest.responseText;
                    setTimeout(function(){
                      window.location.reload(1);
                    }, 5000);
               }
            }       

         return true;
}
// data vihar form
function validatedattaForm(){

  var xmlRequest=new XMLHttpRequest();

        var alphaExp = /^[a-zA-Z ]+$/;
        var numericExpression = /^[0-9]+$/;
        var emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        var Name = document.getElementById("name").value;
        var Contact = document.getElementById("contact").value;
        var Email = document.getElementById("email").value;   
        var comments=document.getElementById("comments").value;

        if (Name=='' && Email=='' && Contact && CompanyName ) {

            document.getElementById("head").innerHTML = "*  All fields are mandatory "; 
            document.getElementById("name").focus();
            return false;
         }
         if (Name=='') {
            document.getElementById("head").innerHTML = "*  Name is required"; 
            document.getElementById("name").focus();
            return false;
         }
         if (!Name.match(alphaExp)) {
          document.getElementById('head').innerHTML = "*  Only Alphabets allowed"; 
          document.getElementById("name").focus();
          return false;
         }
         if (Contact=='') {
            document.getElementById("head").innerHTML = "*  Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
          if (!Contact.match(numericExpression)) {
          document.getElementById('head').innerHTML = "*  Only digits allowed"; 
          document.getElementById("contact").focus();
          return false;
         }
         if (Contact.length>10 || Contact.length<10) {
            document.getElementById("head").innerHTML = "*  Only 10 digit Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
         if(Email==''){
            document.getElementById('head').innerHTML = "*  Email Id is required"; 
            document.getElementById("email").focus();
            return false;

         }
         if(!Email.match(emailExp)){
             document.getElementById('head').innerHTML = "*  Enter valid Email Id"; 
             document.getElementById("email").focus();
             return false;

         }

         var formData = new FormData(); 
        
          formData.append("Name",Name);
          formData.append("Email",Email);
          formData.append("Contact",Contact);
          formData.append("Comments",comments);
          formData.append("Source","dattaform");

          xmlRequest.open("POST", "ContactEnquiry.php", true);

          xmlRequest.send(formData);

          document.getElementById("submit").style.display="none";
          // document.getElementById("subloading").style.display="block";
          xmlRequest.onreadystatechange = function() 
            {
              if (xmlRequest.readyState == 4 && xmlRequest.status == 200) 
                {
                  document.getElementById("response").innerHTML=xmlRequest.responseText;
                    setTimeout(function(){
                      window.location.reload(1);
                    }, 5000);
               }
            }       

         return true;
}

//pasaydan form
function validatepasaydanForm(){

  var xmlRequest=new XMLHttpRequest();

        var alphaExp = /^[a-zA-Z ]+$/;
        var numericExpression = /^[0-9]+$/;
        var emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        var Name = document.getElementById("name").value;
        var Contact = document.getElementById("contact").value;
        var Email = document.getElementById("email").value;   
        var comments=document.getElementById("comments").value;

        if (Name=='' && Email=='' && Contact && CompanyName ) {

            document.getElementById("head").innerHTML = "*  All fields are mandatory "; 
            document.getElementById("name").focus();
            return false;
         }
         if (Name=='') {
            document.getElementById("head").innerHTML = "*  Name is required"; 
            document.getElementById("name").focus();
            return false;
         }
         if (!Name.match(alphaExp)) {
          document.getElementById('head').innerHTML = "*  Only Alphabets allowed"; 
          document.getElementById("name").focus();
          return false;
         }
         if (Contact=='') {
            document.getElementById("head").innerHTML = "*  Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
          if (!Contact.match(numericExpression)) {
          document.getElementById('head').innerHTML = "*  Only digits allowed"; 
          document.getElementById("contact").focus();
          return false;
         }
         if (Contact.length>10 || Contact.length<10) {
            document.getElementById("head").innerHTML = "*  Only 10 digit Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
         if(Email==''){
            document.getElementById('head').innerHTML = "*  Email Id is required"; 
            document.getElementById("email").focus();
            return false;

         }
         if(!Email.match(emailExp)){
             document.getElementById('head').innerHTML = "*  Enter valid Email Id"; 
             document.getElementById("email").focus();
             return false;

         }
         
        
         
         


         var formData = new FormData(); 
        
          formData.append("Name",Name);
          formData.append("Email",Email);
          formData.append("Contact",Contact);
          formData.append("Comments",comments);
          formData.append("Source","pasaydanform");

          xmlRequest.open("POST", "ContactEnquiry.php", true);

          xmlRequest.send(formData);

          document.getElementById("submit").style.display="none";
          // document.getElementById("subloading").style.display="block";
          xmlRequest.onreadystatechange = function() 
            {
              if (xmlRequest.readyState == 4 && xmlRequest.status == 200) 
                {
                  document.getElementById("response").innerHTML=xmlRequest.responseText;
                    setTimeout(function(){
                      window.location.reload(1);
                    }, 5000);
               }
            }       

         return true;
}
//parijat form
function validateparijatForm(){

  var xmlRequest=new XMLHttpRequest();

        var alphaExp = /^[a-zA-Z ]+$/;
        var numericExpression = /^[0-9]+$/;
        var emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        var Name = document.getElementById("name").value;
        var Contact = document.getElementById("contact").value;
        var Email = document.getElementById("email").value;   
        var comments=document.getElementById("comments").value;

        if (Name=='' && Email=='' && Contact && CompanyName ) {

            document.getElementById("head").innerHTML = "*  All fields are mandatory "; 
            document.getElementById("name").focus();
            return false;
         }
         if (Name=='') {
            document.getElementById("head").innerHTML = "*  Name is required"; 
            document.getElementById("name").focus();
            return false;
         }
         if (!Name.match(alphaExp)) {
          document.getElementById('head').innerHTML = "*  Only Alphabets allowed"; 
          document.getElementById("name").focus();
          return false;
         }
         if (Contact=='') {
            document.getElementById("head").innerHTML = "*  Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
          if (!Contact.match(numericExpression)) {
          document.getElementById('head').innerHTML = "*  Only digits allowed"; 
          document.getElementById("contact").focus();
          return false;
         }
         if (Contact.length>10 || Contact.length<10) {
            document.getElementById("head").innerHTML = "*  Only 10 digit Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
         if(Email==''){
            document.getElementById('head').innerHTML = "*  Email Id is required"; 
            document.getElementById("email").focus();
            return false;

         }
         if(!Email.match(emailExp)){
             document.getElementById('head').innerHTML = "*  Enter valid Email Id"; 
             document.getElementById("email").focus();
             return false;

         }
         
        
         
         


         var formData = new FormData(); 
        
          formData.append("Name",Name);
          formData.append("Email",Email);
          formData.append("Contact",Contact);
          formData.append("Comments",comments);
          formData.append("Source","parijatform");

          xmlRequest.open("POST", "ContactEnquiry.php", true);

          xmlRequest.send(formData);

          document.getElementById("submit").style.display="none";
          // document.getElementById("subloading").style.display="block";
          xmlRequest.onreadystatechange = function() 
            {
              if (xmlRequest.readyState == 4 && xmlRequest.status == 200) 
                {
                  document.getElementById("response").innerHTML=xmlRequest.responseText;
                    setTimeout(function(){
                      window.location.reload(1);
                    }, 5000);
               }
            }       

         return true;
}
//hari-dwar form
function validateharidwarForm(){

  var xmlRequest=new XMLHttpRequest();

        var alphaExp = /^[a-zA-Z ]+$/;
        var numericExpression = /^[0-9]+$/;
        var emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        var Name = document.getElementById("name").value;
        var Contact = document.getElementById("contact").value;
        var Email = document.getElementById("email").value;   
        var comments=document.getElementById("comments").value;

        if (Name=='' && Email=='' && Contact && CompanyName ) {

            document.getElementById("head").innerHTML = "*  All fields are mandatory "; 
            document.getElementById("name").focus();
            return false;
         }
         if (Name=='') {
            document.getElementById("head").innerHTML = "*  Name is required"; 
            document.getElementById("name").focus();
            return false;
         }
         if (!Name.match(alphaExp)) {
          document.getElementById('head').innerHTML = "*  Only Alphabets allowed"; 
          document.getElementById("name").focus();
          return false;
         }
         if (Contact=='') {
            document.getElementById("head").innerHTML = "*  Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
          if (!Contact.match(numericExpression)) {
          document.getElementById('head').innerHTML = "*  Only digits allowed"; 
          document.getElementById("contact").focus();
          return false;
         }
         if (Contact.length>10 || Contact.length<10) {
            document.getElementById("head").innerHTML = "*  Only 10 digit Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
         if(Email==''){
            document.getElementById('head').innerHTML = "*  Email Id is required"; 
            document.getElementById("email").focus();
            return false;

         }
         if(!Email.match(emailExp)){
             document.getElementById('head').innerHTML = "*  Enter valid Email Id"; 
             document.getElementById("email").focus();
             return false;

         }
         
        
         
         


         var formData = new FormData(); 
        
          formData.append("Name",Name);
          formData.append("Email",Email);
          formData.append("Contact",Contact);
          formData.append("Comments",comments);
          formData.append("Source","haridwarform");

          xmlRequest.open("POST", "ContactEnquiry.php", true);

          xmlRequest.send(formData);

          document.getElementById("submit").style.display="none";
          // document.getElementById("subloading").style.display="block";
          xmlRequest.onreadystatechange = function() 
            {
              if (xmlRequest.readyState == 4 && xmlRequest.status == 200) 
                {
                  document.getElementById("response").innerHTML=xmlRequest.responseText;
                    setTimeout(function(){
                      window.location.reload(1);
                    }, 5000);
               }
            }       

         return true;
}
function validateNishigandhForm(){

  var xmlRequest=new XMLHttpRequest();

        var alphaExp = /^[a-zA-Z ]+$/;
        var numericExpression = /^[0-9]+$/;
        var emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        var Name = document.getElementById("name").value;
        var Contact = document.getElementById("contact").value;
        var Email = document.getElementById("email").value;   
        var comments=document.getElementById("comments").value;

        if (Name=='' && Email=='' && Contact=='') {

            document.getElementById("head").innerHTML = "Fields With * are mandatory "; 
            document.getElementById("name").focus();
            return false;
         }
         if (Name=='') {
            document.getElementById("head").innerHTML = "*  Name is required"; 
            document.getElementById("name").focus();
            return false;
         }
         if (!Name.match(alphaExp)) {
          document.getElementById('head').innerHTML = "*  Only Alphabets allowed"; 
          document.getElementById("name").focus();
          return false;
         }
         if (Contact=='') {
            document.getElementById("head").innerHTML = "*  Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
          if (!Contact.match(numericExpression)) {
          document.getElementById('head').innerHTML = "*  Only digits allowed"; 
          document.getElementById("contact").focus();
          return false;
         }
         if (Contact.length>10 || Contact.length<10) {
            document.getElementById("head").innerHTML = "*  Only 10 digit Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
         if(Email==''){
            document.getElementById('head').innerHTML = "*  Email Id is required"; 
            document.getElementById("email").focus();
            return false;

         }
         if(!Email.match(emailExp)){
             document.getElementById('head').innerHTML = "*  Enter valid Email Id"; 
             document.getElementById("email").focus();
             return false;

         }
         
        
         
         


         var formData = new FormData(); 
        
          formData.append("Name",Name);
          formData.append("Email",Email);
          formData.append("Contact",Contact);
          formData.append("Comments",comments);
          formData.append("Source","nishigandhform");

          xmlRequest.open("POST", "ContactEnquiry.php", true);

          xmlRequest.send(formData);

          document.getElementById("submit").style.display="none";
          // document.getElementById("subloading").style.display="block";
          xmlRequest.onreadystatechange = function() 
            {
              if (xmlRequest.readyState == 4 && xmlRequest.status == 200) 
                {
                  document.getElementById("response").innerHTML=xmlRequest.responseText;
                    setTimeout(function(){
                      window.location.reload(1);
                    }, 5000);
               }
            }       

         return true;
}
function validateCareersForm(){
     
         var xmlRequest=new XMLHttpRequest();

        var alphaExp = /^[a-zA-Z ]+$/;
        var numericExpression = /^[0-9]+$/;
        var emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        var Name = document.getElementById("name").value;
        var Contact = document.getElementById("contact").value;
        var Email = document.getElementById("email").value;   
        var Orgnization = document.getElementById("orgnization").value;
        var Designation = document.getElementById("designation").value; 
        var Address = document.getElementById("address").value;
          
        var jobLocation=document.getElementById("jobLocation").value;
        var filesToBeUploaded = document.getElementById("uploadfile");
        var file = filesToBeUploaded.files[0];

        if (Name=='' && Email=='' && Contact && Orgnization && Designation && jobLocation) {

            document.getElementById("head").innerHTML = "*  All fields are mandatory "; 
            document.getElementById("name").focus();
            return false;
         }
         if (Name=='') {
            document.getElementById("head").innerHTML = "*  Name is required"; 
            document.getElementById("name").focus();
            return false;
         }
         if (!Name.match(alphaExp)) {
          document.getElementById('head').innerHTML = "*  Only Alphabets allowed"; 
          document.getElementById("name").focus();
          return false;
         }
         if (Contact=='') {
            document.getElementById("head").innerHTML = "*  Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
          if (!Contact.match(numericExpression)) {
          document.getElementById('head').innerHTML = "*  Only digits allowed"; 
          document.getElementById("contact").focus();
          return false;
         }
         if (Contact.length>10 || Contact.length<10) {
            document.getElementById("head").innerHTML = "*  Only 10 digit Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
         if(Email==''){
            document.getElementById('head').innerHTML = "*  Email Id is required"; 
            document.getElementById("email").focus();
            return false;

         }
         if(!Email.match(emailExp)){
             document.getElementById('head').innerHTML = "*  Enter valid Email Id"; 
             document.getElementById("email").focus();
             return false;

         }
         if (Orgnization=="") {
            document.getElementById("head").innerHTML = "*  Enter Current Orgnization"; 
            document.getElementById("orgnization").focus();
            return false;
         }

         if (Designation=="") {
            document.getElementById("head").innerHTML = "*  Enter Designation"; 
            document.getElementById("designation").focus();
            return false;
         }
         
         if (jobLocation=="") {
            document.getElementById("head").innerHTML = "*  Enter Job Location"; 
            document.getElementById("jobLocation").focus();
            return false;
         }
         if(filesToBeUploaded.value==""){
            document.getElementById("head").innerHTML = "*  Upload Resume"; 
            document.getElementById("uploadfile").focus();
            return false;
         }
         if(file.size>200000){

           document.getElementById("head").innerHTML = "*  File size should be less than 2 MB"; 
            document.getElementById("uploadfile").focus();
            return false;
          }

         var formData = new FormData(); 
        
          formData.append("Name",Name);
          formData.append("Email",Email);
          formData.append("Contact",Contact);
          formData.append("Orgnization",Orgnization);
          formData.append("Designation",Designation);
          formData.append("Address",Address);
          formData.append("JobLocation",jobLocation);
         formData.append("Resume",file);
         
          formData.append("Source","CareerForm");

          xmlRequest.open("POST", "ContactEnquiry.php", true);

          xmlRequest.send(formData);

          document.getElementById("submit").style.display="none";
          // document.getElementById("subloading").style.display="block";
          xmlRequest.onreadystatechange = function() 
            {
              if (xmlRequest.readyState == 4 && xmlRequest.status == 200) 
                {
                  document.getElementById("response").innerHTML=xmlRequest.responseText;
                    setTimeout(function(){
                      window.location.reload(1);
                    }, 5000);
               }
            }       

         return true;
          
}

// Become a partner
function validatepartnerForm(){
     
         var xmlRequest=new XMLHttpRequest();

        var alphaExp = /^[a-zA-Z ]+$/;
        var numericExpression = /^[0-9]+$/;
        var emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        var Name = document.getElementById("name").value;
        var Contact = document.getElementById("contact").value;
        var Email = document.getElementById("email").value;   
        var address = document.getElementById("address").value;
        var others = document.getElementById("others").value;   
        var Project=document.getElementById("project").value;
        var comments=document.getElementById("comments").value;

        if (Name=='' && Email=='' && Contact && projectType && address && Project) {

            document.getElementById("head").innerHTML = "*  All fields are mandatory "; 
            document.getElementById("name").focus();
            return false;
         }
         if (Name=='') {
            document.getElementById("head").innerHTML = "*  Name is required"; 
            document.getElementById("name").focus();
            return false;
         }
         if (!Name.match(alphaExp)) {
          document.getElementById('head').innerHTML = "*  Only Alphabets allowed"; 
          document.getElementById("name").focus();
          return false;
         }
         if (Contact=='') {
            document.getElementById("head").innerHTML = "*  Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
          if (!Contact.match(numericExpression)) {
          document.getElementById('head').innerHTML = "*  Only digits allowed"; 
          document.getElementById("contact").focus();
          return false;
         }
         if (Contact.length>10 || Contact.length<10) {
            document.getElementById("head").innerHTML = "*  Only 10 digit Contact no is required"; 
            document.getElementById("contact").focus();
            return false;
         }
         if(Email==''){
            document.getElementById('head').innerHTML = "*  Email Id is required"; 
            document.getElementById("email").focus();
            return false;

         }
         if(!Email.match(emailExp)){
             document.getElementById('head').innerHTML = "*  Enter valid Email Id"; 
             document.getElementById("email").focus();
             return false;

         }
         if (Project=="") {
            document.getElementById("head").innerHTML = "*  Select Project"; 
            document.getElementById("project").focus();
            return false;
         }
         if (others=="") {
            document.getElementById("head").innerHTML = "*  Others is required"; 
            document.getElementById("budget").focus();
            return false;
         }
         if (address=="") {
            document.getElementById("head").innerHTML = "*  Address is required"; 
            document.getElementById("address").focus();
            return false;
         }


         var formData = new FormData(); 
        
          formData.append("Name",Name);
          formData.append("Email",Email);
          formData.append("Contact",Contact);
          formData.append("Project",Project);
          formData.append("Address",address);
          formData.append("Others",others);
          formData.append("Comments",comments);
          formData.append("Source","partnerForm");

          xmlRequest.open("POST", "ContactEnquiry.php", true);

          xmlRequest.send(formData);

          document.getElementById("submit").style.display="none";
          // document.getElementById("subloading").style.display="block";
          xmlRequest.onreadystatechange = function() 
            {
              if (xmlRequest.readyState == 4 && xmlRequest.status == 200) 
                {
                  document.getElementById("response").innerHTML=xmlRequest.responseText;
                    setTimeout(function(){
                      window.location.reload(1);
                    }, 5000);
               }
            }       

         return true;
          
}
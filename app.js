function findIcon(){

    var siteName=document.getElementById('site').value;
    var a=document.getElementById('myImage');
    console.log(a);
    a.src="https://logo.clearbit.com/" + siteName; 
    document.getElementById('myImage').width='65';
    document.getElementById('myImage').height='65' ;
}

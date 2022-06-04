Email.send({
    Host : "smtp.gmail.com",
    Username : "zaykenovtemirlan2002@gmail.com",
    Password : "Temirlan228!",
    To : 'zaykenovtemirlan2003@gmail.com',
    From : document.getElementById("inp_text3").value,
    Subject : "New contact form",
    Body : "Name: "+ document.getElementById("inp_text1").value
            + "<br> Telephone: " + document.getElementById("inp_text2").value
            +"<br> E-mail: " + document.getElementById("inp_text3").value
}).then(
  //message => alert(message)
);
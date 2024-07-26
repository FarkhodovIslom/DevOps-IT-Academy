const btnSender = document.getElementById("emailSendBtn");
var form = document.querySelector('form');
btnSender.addEventListener("click", function () {
    setTimeout( () => {
        form.reset();
    }, 800) 
})

function emailSend() {

    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var number = document.getElementById("phoneNumber").value;
    var course = document.getElementById("courseSelect").value;

    let messageText = `
        Ism Familiya: ${lName} ${fName},
        Yosh: ${age},
        Tel. raqam: ${number},
        Kurs: ${course}
    `

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "farkhodov4@gmail.com",
        Password : "54216A1165E6D954B7DE95C946D16954A466",
        To : 'devopsitcenter@gmail.com',
        From : "farkhodov4@gmail.com",
        Subject : "DevOps IT Center.uz",
        Body : messageText
    }).then(
      alert("Siz bilan tez orada bog'lanamiz!")
    );
}
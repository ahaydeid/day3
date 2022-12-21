function getData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("telp").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (name == "") {
    return alert("Nama gak boleh kosong");
  } else if (email == "") {
    return alert("email gak boleh kosong");
  } else if (phoneNumber == "") {
    return alert("telpon gak boleh kosong");
  } else if (subject == "") {
    return alert("subject gak boleh kosong");
  } else if (message == "") {
    return alert("pesan gak boleh kosong");
  }

  let emailReceiver = "adi.hadi270@gmail.com";

  let mailTo = document.createElement("a");
  mailTo.href = `mailto:${emailReceiver}?subject=${subject}&body=Hay, saya ${name}, ${message}, nomor telpon saya ${phoneNumber}`;
  mailTo.click();

  let users = {
    myName: name,
    myEmail: email,
    myPhone: phoneNumber,
    mySubject: subject,
    myMessage: message,
  };

  console.log(users);
}

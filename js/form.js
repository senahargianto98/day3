function submitdata() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;
  if (name == "") {
    return alert("isikan nama");
  } else if (email == "") {
    return alert("isikan email");
  } else if (phone == "") {
    return alert("isikan nomor telpon");
  } else if (subject == "") {
    return alert("isikan subject");
  } else if (message == "") {
    return alert("isikan message");
  }
  let email_receiver = "hargiantofebrisena@gmail.com";
  let a = document.createElement("a");
  // Kasih Comma %2C
  // Kasih new line %0D%0A
  a.href = `mailto:${email_receiver}?subject=${subject}&body=Hallo Nama Saya ${name}%2C
    %0D%0A${message}%0D%0A
    silahkan hubungi saya di nomer telpon saya ${phone} atau dapat mengirimkan email ke 
    <a href='mailto:${email}'>Email</a>`;
  a.click();
}

function copyToClipboard(TextToCopy) {
  var TempText = document.createElement("input");
  TempText.value = TextToCopy;
  document.body.appendChild(TempText);
  TempText.select();
  
  document.execCommand("copy");
  document.body.removeChild(TempText);
}

document.getElementById("copyPhone").addEventListener("click", function() {
    const textToCopy = "+1(985)502-5130";
    copyToClipboard(textToCopy);
    alert('Copied phone number: +1(985)502-5130');
});

document.getElementById("copyPhonePic").addEventListener("click", function() {
  const textToCopy = "+1(985)502-5130";
  copyToClipboard(textToCopy);
  alert('Copied phone number: +1(985)502-5130');
});

document.getElementById("copyEmail").addEventListener("click", function() {
  const textToCopy = "gmbwe110@gmail.com";
  copyToClipboard(textToCopy);
  alert('Copied email: gmbwe110@gmail.com');
});

document.getElementById("copyEmailPic").addEventListener("click", function() {
  const textToCopy = "gmbwe110@gmail.com";
  copyToClipboard(textToCopy);
  alert('Copied email: gmbwe110@gmail.com');
});


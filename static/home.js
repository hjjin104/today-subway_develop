// url 공유 버튼

function clip() {
  var url = "";
  var textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("URL이 복사되었습니다.");
}

const subs = document.getElementById("btn");

function change() {
  const subs = document.getElementById("btn");
  if (subs.innerText === "About Us") {
    subs.innerText = "김다원 김정현 이지영 \n정수연 진혜주";
  } else subs.innerText = "About Us";
}

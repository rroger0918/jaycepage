

  (function () {
    // emailjs.init("USERID");
    emailjs.init("user_Ec3EGOLiAx79C0pwx9cEw");
  })();

  /**
    emailjs.send("SERVICE ID", "TEMPLATE NAME", {
      to_name: "USERNAME",
      from_name: "FROM NAME",
      message: "MESSAGE",
    });
   **/

  function validate() {
    let loader = document.querySelector(".loader");
    let name = document.querySelector(".username");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let btn = document.querySelector(".submit");

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (name.value == "" || email.value == "" || msg.value == "") {
        emptyerror();
      } else {
        loader.style.display = "flex";
        sendmail(name.value, email.value, msg.value);
        success();
        loader.style.display = "none";
      }
    });
  }
  validate();

  function sendmail(name, email, msg) {
    emailjs.send("service_38yxfmh", "template_ot6lgqg", {
      to_name: "GT, li",
      from_name: email,
      message: msg,
    });
  }

  function emptyerror() {
    Swal.fire({
      icon: "Error ! ",
      title: "Oops...",
      text: "資料不能空白呦 ~",
    });
  }

  function error() {
    Swal.fire({
      icon: "Error !",
      title: "Oops...",
      text: "某些地方不對勁....請您寄信給我leekuantean@gmail.com，感謝!",
    });
  }

  function success() {
    Swal.fire({
      icon: "success",
      title: "成功寄出囉 <3",
      text: "我會盡快回復您 ~",
    });
  }

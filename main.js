var cookie_box = document.getElementById("cookie_box"),
  activeBtn = document.getElementById("activeBtn");
declineBtn = document.getElementById("declineBtn");

activeBtn.addEventListener("click", function () {
  document.cookie =
    "CookieBy=InventionTricks; expires=" + new Date(2022, 0, 1).toUTCString();

  document.cookie = "Name=John; max-age=" + 60 * 60 * 24 * 30;
  document.cookie = "LastName=deo; max-age=" + 60 * 60 * 24 * 30;

  if (document.cookie) {
    cookie_box.classList.add("hide");
  } else {
    alert(
      "cookie non défini ! Veuillez autoriser ce site à partir de la configuration des cookies de votre navigateur"
    );
  }
});

declineBtn.addEventListener("click", function () {
  document.cookie =
    "CookieBy=InventionTricks; expires=" + new Date(2022, 0, 1).toUTCString();

  document.cookie = "Name=John; max-age=" + 60 * 60 * 24 * 30;
  document.cookie = "LastName=deo; max-age=" + 60 * 60 * 24 * 30;

  if (document.cookie) {
    cookie_box.classList.add("hide");
  } else {
    alert(
      "cookie non défini ! Veuillez autoriser ce site à partir de la configuration des cookies de votre navigateur"
    );
  }
});

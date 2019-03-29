//File Name: app.js
//Name: Khushboo Sakervala
//Student ID: 300984318
//Date: Feb 14, 2019

/* Custom JavaScript */
//IIFE
(function() {
  function Start() {
    console.log(
      `%c App Started.......`,
      "font-size:20 px; color: blue; font-weight:bold"
    );

    $(".btn-danger").click(function(event) {
      if (!confirm("Are you sure???")) {
        event.preventDefault();
        window.location.assign("/contact-list");
      }
    });
  }

  window.addEventListener("load", Start);
})();

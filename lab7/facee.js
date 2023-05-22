document.getElementById("btnLogin").addEventListener("click", function() {
    var form = document.getElementById("myForm");
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  });
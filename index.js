$(document).ready(function() {
  // Load Data butonuna tıklandığında
  $("#load-btn").click(function() {
    // Ajax isteğini gerçekleştir
    $.ajax({
      url: "data.json", // verilerin bulunduğu dosya yolu
      type: "GET", // verileri çekmek için HTTP GET isteği gönder
      dataType: "json", // verilerin tipi JSON olduğu için belirtiyoruz
      success: function(data) { // istek başarılı olursa
        // Verileri göstermek için HTML içeriğini oluştur
        var html = "";
        $.each(data, function(key, value) {
          html += "<p>" + key + ": " + value + "</p>";
        });
        // HTML içeriğini data-container'a ekle
        $("#data-container").html(html);
      },
      error: function() { // istek başarısız olursa
        alert("Veriler yüklenemedi.");
      }
    });
  });
});


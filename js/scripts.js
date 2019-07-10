
  $(".input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("[data-title]").filter(function() {
      $(this).toggle($(this).attr('data-title').toLowerCase().indexOf(value) > -1)
    });
  });

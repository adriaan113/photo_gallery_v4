

//JS code

  function search() {

    let links;
    let final;
    let input = document.querySelector('.input');
    let filter = input.value.toLowerCase();
    let li = document.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      links = li[i].getElementsByTagName("a")[0];
      final = links.getAttribute('data-title');
      if (final.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

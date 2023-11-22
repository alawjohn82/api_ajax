$(document).ready(function () {
  for (var i = 1; i <= 151; i++) {
    $.get(`https://pokeapi.co/api/v2/pokemon/${i}`, function (data, status) {
      //   console.log(data);
      // console.log(status)
      // console.log(data.sprites.front_default)
      $("body").append(
        `<img src="${data.sprites.front_default}" alt="${data.name}">`
      );
      // $("img").attr({ src: data.sprites.front_default, alt: data.name });
    });
  }
});

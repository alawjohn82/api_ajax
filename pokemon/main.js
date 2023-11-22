$(document).ready(function () {
  var clickedPokemanID;
  for (var i = 1; i <= 151; i++) {
    $.get(`https://pokeapi.co/api/v2/pokemon/${i}`, function (data, status) {
      // console.log(data);
      // console.log(status)
      // console.log(data.sprites.front_default)

      $('#main').append(`<img id="${data.id}" src="${data.sprites.front_default}" alt="${data.name}">`);

      // $("img").attr({ src: data.sprites.front_default, alt: data.name });
    });
  }

  $('body').on('click', 'img', function () {
    if (clickedPokemanID !== $(this).attr('id')) {
      clickedPokemanID = $(this).attr('id');
      console.log(`fetching pokemon ${clickedPokemanID}`);
      $.get(`https://pokeapi.co/api/v2/pokemon/${clickedPokemanID}`, function (result) {
        $('#aside h3').html(result.name);
        $('#aside img').attr({ src: result.sprites.front_default, alt: result.name });

        // clear out the html and append new ones
        $('#aside #type').html('');
        for (let i = 0; i < result.types.length; i++) {
          $('#aside #type').append(`<li>${result.types[i].type.name}</li>`);
        }

        // use an empty string
        // let textString = '';
        // for (let i = 0; i < result.types.length; i++) {
        //   textString += `<li>${result.types[i].type.name}</li>`;
        // }
        // $('#aside #type').html(textString);
        // empty string ends here

        $('#aside #height').text(result.height);
        $('#aside p:last-child').text(result.weight);
        $('#aside').show();
      });
    } else {
      console.log(`pokemon ${clickedPokemanID} is already opened`);
    }
  });
});

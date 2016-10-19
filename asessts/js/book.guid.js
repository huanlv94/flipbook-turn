$(window).load(function() {
  $("#loading").fadeOut("slow");
});

$(function() {

  // var href = window.location.href;
  // var href = 'http://lvh.site88.net/';
  // $.ajax({
  //   // url: 'https://upload.edumall.vn/ajax/get_template',
  //   url: 'http://localhost:3000/ajax/get_template',
  //   type: 'GET',
  //   data: {from: href},
  //   dataType: 'json',
  //   cache: false,
  //   success: function(res) {
  //     var _html = res.html;
  //     $('#guid-book').html(_html);
  //     $('#guid-book').turn({
  //       width: 992,
  //       height: 680,
  //       when: {
  //         turned: function(event, page, pageObj) {
  //           if (page == 2) {
  //             $('.content-text-page-2').show('slide', { direction: "left" }, 1000);
  //             $('.sub-text-page-2').show('slide', { direction: "right" }, 1000);
  //             $('.text-left-page-3').show('slide', { direction: 'left' }, 1000);
  //             $('.text-right-page-3').show('slide', { direction: 'right' }, 1000);
  //           }
  //           else if (page == 4) {
  //             $('.text-intro-page-2').show('slide', { direction: "left" }, 1000);
  //             $('.sub-text-intro-page-2').show('slide', { direction: "right" }, 1000);
  //             $('.div-left-page-6').show('slide', { direction: "left" }, 1000);
  //             $('.div-right-page-6').show('slide', { direction: "right" }, 1000);
  //             $('.tlt-mid-page-4').show('drop', { direction: "down" }, 1000);
  //             $('.img-page-4').show('drop', { direction: "down" }, 1000)
  //           }
  //           else if (page == 6) {
  //             $('.div-1-page-8').show('drop', { direction: "down" }, 600);
  //             $('.div-2-page-8').show('drop', { direction: "down" }, 1200);
  //             $('.div-3-page-8').show('drop', { direction: "down" }, 1800);
  //             $('.div-4-page-8').show('drop', { direction: "down" }, 2400);
  //             $('.div-5-page-8').show('drop', { direction: "down" }, 3000);
  //           }
  //           else if (page == 8) {
  //             $('.left-page-10').show('slide', { direction: "left" }, 1000);
  //             $('.right-page-10').show('slide', { direction: "right" }, 1000);
  //           }
  //           else if (page == 12) {
  //             $('.titlte-page-10').show('drop', { direction: "left" }, 1000);
  //             $('.content-page-10').show('drop', { direction: "left" }, 1000);
  //             $('.list-page-10').show('drop', { direction: "left" }, 1000);
  //             $('.img-page-14').show('drop', { direction: "left" }, 1000);
  //             $('.list-page-14').show('drop', { direction: "right" }, 1000);
  //           }
  //           else if (page == 14) {
  //             $('.img-1-page-15').show('drop', { direction: "down" }, 400);
  //             $('.img-2-page-15').show('drop', { direction: "down" }, 600);
  //             $('.text-1-page-15').show('drop', { direction: "down" }, 800);
  //             $('.text-2-page-15').show('drop', { direction: "left" }, 1000);
  //             $('.text-3-page-15').show('drop', { direction: "right" }, 1000);
  //             $('.left-page-16').show('drop', { direction: "left" }, 1000);
  //             $('.right-page-16').show('drop', { direction: "right" }, 1000);
  //             $('.img-page-16').show('drop', { direction: "down" }, 1000);
  //           }
  //           else if (page == 16) {
  //             $('.modal-page-17').show('drop', { direction: "right" }, 800);
  //             $('.text-1-page-17').show('drop', { direction: "down" }, 1000);
  //             $('.list-page-17-1').show('drop', { direction: "left" }, 1000);
  //             $('.list-page-17-2').show('drop', { direction: "right" }, 1000);
  //             $('.left-page-18').show('drop', { direction: "left" }, 1000);
  //             $('.right-page-18').show('drop', { direction: "right" }, 1000);
  //             $('.img-page-18').show('drop', { direction: "down" }, 1000)
  //           }
  //           else if (page == 18) {
  //             $('.img-1-page-19').show('drop', { direction: "down" }, 800);
  //             $('.img-2-page-19').show('drop', { direction: "down" }, 1000);
  //             $('.text-1-page-19').show('drop', { direction: "down" }, 1000);
  //             $('.list-page-19-1').show('drop', { direction: "left" }, 1000);
  //             $('.list-page-19-2').show('drop', { direction: "right" }, 1000);
  //             $('.text-content-page-20').show('drop', { direction: "top" }, 1000);
  //             $('.video-page-20').show('drop', { direction: "left" }, 1000);
  //             $('.list-page-20').show('drop', { direction: "right" }, 1000);
  //             $('.img-page-20').show('drop', { direction: "down" }, 1000);
  //           }
  //           else if (page == 20) {
  //             $('.text-content-page-21').show('drop', { direction: "down" }, 800);
  //             $('.list-page-21').show('drop', { direction: "left" }, 1000);
  //             $('.div-right-page-21').show('drop', { direction: "right" }, 1000);
  //             $('.text-content-page-22').show('drop', { direction: "down" }, 800);
  //             $('.list-page-22').show('drop', { direction: "right" }, 1000);
  //             $('.div-left-page-22').show('drop', { direction: "left" }, 1000);
  //           }
  //           else if (page == 24) {
  //             $('.text-intro-page-26').show('drop', { direction: "right" }, 1000);
  //             $('.sub-text-intro-page-26').show('drop', { direction: "right" }, 1000);
  //           }
  //           else if (page == 26) {
  //             $('.text-left-page-27').show('drop', { direction: "left" }, 800);
  //             $('.text-right-page-27').show('drop', { direction: "right" }, 1000);
  //             $('.content-text-page-28').show('drop', { direction: "down" }, 1000);
  //           }
  //           else if (page == 28) {
  //             $('.text-page-29').show('drop', { direction: "left" }, 1000);
  //             $('.page-30-left').show('drop', { direction: "left" }, 1000);
  //             $('.page-30-right').show('drop', { direction: "right" }, 1000);
  //           }
  //         }
  //       }
  //     });
  //   },
  //   error: function(e, res) {
  //     console.log(e.message);
  //   }
  // });





  $('#guid-book').turn({
    width: 992,
    height: 680,
    when: {
      turned: function(event, page, pageObj) {
        console.log(pageObj);
        if (page == 2) {
          $('.content-text-page-2').show('slide', { direction: "left" }, 1000);
          $('.sub-text-page-2').show('slide', { direction: "right" }, 1000);
          $('.text-left-page-3').show('slide', { direction: 'left' }, 1000);
          $('.text-right-page-3').show('slide', { direction: 'right' }, 1000);
        }
        else if (page == 4) {
          $('.text-intro-page-2').show('slide', { direction: "left" }, 1000);
          $('.sub-text-intro-page-2').show('slide', { direction: "right" }, 1000);
          $('.div-left-page-6').show('slide', { direction: "left" }, 1000);
          $('.div-right-page-6').show('slide', { direction: "right" }, 1000);
          $('.tlt-mid-page-4').show('drop', { direction: "down" }, 1000);
          $('.img-page-4').show('drop', { direction: "down" }, 1000)
        }
        else if (page == 6) {
          $('.div-1-page-8').show('drop', { direction: "down" }, 600);
          $('.div-2-page-8').show('drop', { direction: "down" }, 1200);
          $('.div-3-page-8').show('drop', { direction: "down" }, 1800);
          $('.div-4-page-8').show('drop', { direction: "down" }, 2400);
          $('.div-5-page-8').show('drop', { direction: "down" }, 3000);
        }
        else if (page == 8) {
          $('.left-page-10').show('slide', { direction: "left" }, 1000);
          $('.right-page-10').show('slide', { direction: "right" }, 1000);
        }
        else if (page == 12) {
          $('.titlte-page-10').show('drop', { direction: "left" }, 1000);
          $('.content-page-10').show('drop', { direction: "left" }, 1000);
          $('.list-page-10').show('drop', { direction: "left" }, 1000);
          $('.img-page-14').show('drop', { direction: "left" }, 1000);
          $('.list-page-14').show('drop', { direction: "right" }, 1000);
        }
        else if (page == 14) {
          $('.img-1-page-15').show('drop', { direction: "down" }, 400);
          $('.img-2-page-15').show('drop', { direction: "down" }, 600);
          $('.text-1-page-15').show('drop', { direction: "down" }, 800);
          $('.text-2-page-15').show('drop', { direction: "left" }, 1000);
          $('.text-3-page-15').show('drop', { direction: "right" }, 1000);
          $('.left-page-16').show('drop', { direction: "left" }, 1000);
          $('.right-page-16').show('drop', { direction: "right" }, 1000);
          $('.img-page-16').show('drop', { direction: "down" }, 1000);
        }
        else if (page == 16) {
          $('.modal-page-17').show('drop', { direction: "right" }, 800);
          $('.text-1-page-17').show('drop', { direction: "down" }, 1000);
          $('.list-page-17-1').show('drop', { direction: "left" }, 1000);
          $('.list-page-17-2').show('drop', { direction: "right" }, 1000);
          $('.left-page-18').show('drop', { direction: "left" }, 1000);
          $('.right-page-18').show('drop', { direction: "right" }, 1000);
          $('.img-page-18').show('drop', { direction: "down" }, 1000)
        }
        else if (page == 18) {
          $('.img-1-page-19').show('drop', { direction: "down" }, 800);
          $('.img-2-page-19').show('drop', { direction: "down" }, 1000);
          $('.text-1-page-19').show('drop', { direction: "down" }, 1000);
          $('.list-page-19-1').show('drop', { direction: "left" }, 1000);
          $('.list-page-19-2').show('drop', { direction: "right" }, 1000);
          $('.text-content-page-20').show('drop', { direction: "top" }, 1000);
          $('.video-page-20').show('drop', { direction: "left" }, 1000);
          $('.list-page-20').show('drop', { direction: "right" }, 1000);
          $('.img-page-20').show('drop', { direction: "down" }, 1000);
        }
        else if (page == 20) {
          $('.text-content-page-21').show('drop', { direction: "down" }, 800);
          $('.list-page-21').show('drop', { direction: "left" }, 1000);
          $('.div-right-page-21').show('drop', { direction: "right" }, 1000);
          $('.text-content-page-22').show('drop', { direction: "down" }, 800);
          $('.list-page-22').show('drop', { direction: "right" }, 1000);
          $('.div-left-page-22').show('drop', { direction: "left" }, 1000);
        }
        else if (page == 24) {
          $('.text-intro-page-26').show('drop', { direction: "right" }, 1000);
          $('.sub-text-intro-page-26').show('drop', { direction: "right" }, 1000);
        }
        else if (page == 26) {
          $('.text-left-page-27').show('drop', { direction: "left" }, 800);
          $('.text-right-page-27').show('drop', { direction: "right" }, 1000);
          $('.content-text-page-28').show('drop', { direction: "down" }, 1000);
        }
        else if (page == 28) {
          $('.text-page-29').show('drop', { direction: "left" }, 1000);
          $('.page-30-left').show('drop', { direction: "left" }, 1000);
          $('.page-30-right').show('drop', { direction: "right" }, 1000);
        }
      }
    }
  });
});
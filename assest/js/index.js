$(document).ready(function () {
  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text()
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        }
      );
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 50,
  autoplay: true,
  autoplayTimeout: 5000,
  slideTransition: "linear",
  autoplaySpeed: 5000,
  autoplayHoverPause: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 3,
      nav: false
    },
    1000: {
      items: 3,
      nav: true
    }
  }
});

document.getElementsByClassName("owl-prev")[0].innerHTML =
  '<i class="fa fa-angle-left" style="font-size:24px"></i>';

document.getElementsByClassName("owl-next")[0].innerHTML =
  '<i class="fa fa-angle-right" style="font-size:24px"></i>';

//

const btn = document.getElementById("button");

document.getElementById("contact").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";
  const serviceID = "default_service";
  const templateID = "template_87npwn6";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Message Sent successfully!");
      this.reset();
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});

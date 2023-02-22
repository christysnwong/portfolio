(function () {
  emailjs.init("ltFqdoUodSANdwrWm");
})();

function submitContactForm(evt) {
  evt.preventDefault();

  this.contact_number = (Math.random() * 100000) | 0;
  console.log("check #", this.contact_number);

  emailjs.sendForm("contact_service", "contact_form", this).then(
    function () {
      console.log("SUCCESS!");
      $("#return-msg p:first-child").text(
        "Thank you for reaching out. Your message has been successfully sent."
      );
      $("#return-msg p:first-child").addClass("success");

      $("#return-msg").removeClass("hide");

      setTimeout(() => {
        $("#return-msg").addClass("hide");
      }, 3000);
    },
    function (error) {
      console.log("FAILED...", error);
      $("#return-msg p:first-child").text(
        "An error has encountered. Please try again later!"
      );
      $("#return-msg p:first-child").addClass("error");

      $("#return-msg").removeClass("hide");

      setTimeout(() => {
        $("#return-msg").addClass("hide");
      }, 3000);
    }
  );

  $("#contact-form").trigger("reset");
}

$("#contact-form").on("submit", submitContactForm);

function scrollingEffect(evt) {
  evt.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
}

$(document).on("click", 'a[href^="#"]', scrollingEffect);


function isImgInViewport(element) {
  var elementTop = $(element).offset().top;
  var viewportTop = $(window).scrollTop();
  var viewportHeight = $(window).height();

  return elementTop >= viewportTop && elementTop < viewportTop + viewportHeight;
}

// function isSectionInViewport(element) {
//   var elementTop = $(element).offset().top;
//   var elementBtm = elementTop + $(element).outerHeight();
//   var viewportTop = $(window).scrollTop();
//   var viewportBtm = viewportTop + $(window).height();

//   if (!(elementBtm < viewportTop || elementTop > viewportBtm ) ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function toggleActiveLink() {
//   $("section").each(function () {
//     console.log("in toggle link")

//     if (isSectionInViewport(this)) {
//       const sectionId = $(this).attr("id");
//       $("#nav").children().removeClass();

//       $(`a[href='#${sectionId}']`).addClass("active");
//     }


//     // const observer = new IntersectionObserver(function(entries) {
//     //   entries.forEach(
//     //     (entry) => {

//     //       const sectionId = entry.target.id;

//     //       if (entry.isIntersecting) {
//     //         $(`a[href='#${sectionId}']`).addClass("active");
//     //       } else {
//     //         $(`a[href='#${sectionId}']`).removeClass("active");
//     //       }
//     //     }
//     //   );
//     // })

//     // observer.observe(this);
//   });
// }

// $(document).scroll(toggleActiveLink);
// toggleActiveLink();

function moveImageLeftOnScroll() {
  
  const windowWidth = $(window).width();

  if (windowWidth > 768) {
    $(".move-left").each(function () {
      if (isImgInViewport(this)) {
        $(this).removeClass("hide");
        $(this).css("transform", "translateX(-80px)");
        
      }
    });

  } else {
    $(".move-left").each(function () {
      if (isImgInViewport(this)) {
        $(this).removeClass("hide");
        $(this).css("transform", "translateX(-30px)");
        
      }
    });
  }
  
}

$(window).scroll(moveImageLeftOnScroll);

function moveImageRightOnScroll() {
  const windowWidth = $(window).width();

  if (windowWidth > 768) {
    $(".move-right").each(function () {
      if (isImgInViewport(this)) {
        $(this).removeClass("hide");
        $(this).css("transform", "translateX(80px)");

      }
    });
  } else {
    $(".move-right").each(function () {
      if (isImgInViewport(this)) {
        $(this).removeClass("hide");
        $(this).css("transform", "translateX(30px)");

      }
    });
  }

  
}

$(window).scroll(moveImageRightOnScroll);
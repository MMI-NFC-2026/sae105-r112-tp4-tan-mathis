// *** ACCORDEON ***

const accordeon = document.querySelector(".accordeon");

if (accordeon) {
  const allDetails = accordeon.querySelectorAll("details");

  allDetails.forEach((currentDetails) => {
    currentDetails.addEventListener("toggle", () => {
      if (!currentDetails.open) return;

      allDetails.forEach((otherDetails) => {
        if (otherDetails !== currentDetails) {
          otherDetails.open = false;
        }
      });
    });
  });
}
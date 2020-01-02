const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

// bring the text from the above and below back.
function toggleActive(event) {
  if(event.propertyName.includes('flex')) { /* this line is for safari browser cuz for some browsers is flex-grow not just flex. */
      this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
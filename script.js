const isSwitch = function (e) {
  return e.target.classList.contains('onoffswitch')
    || e.target.classList.contains('onoffswitch__button');
};

const onClickSwitch = function (e) {
  //чтобы не пропустить клик как по переключателю, так и по его дочернему элементу
  if (!isSwitch(e)) return;
  const themedElements = document.querySelectorAll('.theme_color_project-default, .theme_color_project-inverse');
  themedElements.forEach(element => {
    element.classList.toggle('theme_color_project-default');
    element.classList.toggle('theme_color_project-inverse');
  })
};

const onClickAccordion = function (e) {
  const accordionElement = e.target.closest('.e-accordion');
  if (!accordionElement) return;
  const spoilerContentElement = accordionElement.querySelector('.e-accordion__more');
  spoilerContentElement.classList.toggle('e-accordion__more_visible_true');
};

document.body.addEventListener('click', (e) => {
  onClickSwitch(e);
  onClickAccordion(e);
});

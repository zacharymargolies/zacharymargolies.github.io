function onButtonClick() {
  const el = document.getElementById('collapseButton');
  if (el.innerText === 'Some Extras') {
    el.innerText = 'Hide Extras'
  } else {
    el.innerText = 'Some Extras'
  }
}
//All main JS Script

//small input on mobile view
if ( window.innerWidth < 768 ) {
  let inputs = document.getElementsByClassName('input-group')
  for (let elem of inputs) {
    elem.classList.add('input-group-sm');
  }
}  

//toggleTheme
  var toggleTheme = document.getElementById('toggleTheme')
  var imgl = document.getElementById('svgregis') 

  toggleTheme.addEventListener('click', () => {
    if (toggleTheme.classList.contains('i-dark')){
      toggleTheme.classList.add('i-light')
      toggleTheme.classList.remove('i-dark')      
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    }else{
      toggleTheme.classList.add('i-dark')
      toggleTheme.classList.remove('i-light')      
      document.documentElement.setAttribute('data-bs-theme', 'light')
    }
})

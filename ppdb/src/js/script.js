//All main JS Script
(() => {

  'use strict'

  var toggleTheme = document.getElementById('toggleTheme')
  var imgl = document.getElementById('svgregis') 

  toggleTheme.addEventListener('click', () => {
    if (toggleTheme.classList.contains('i-dark')){
      imgl.src = "src/img/regisd.svg"
      toggleTheme.classList.add('i-light')
      toggleTheme.classList.remove('i-dark')      
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    }else{
      imgl.src = "src/img/regis.svg"
      toggleTheme.classList.add('i-dark')
      toggleTheme.classList.remove('i-light')      
      document.documentElement.setAttribute('data-bs-theme', 'light')
    }
})

})()
  

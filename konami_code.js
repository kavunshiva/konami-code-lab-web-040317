const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let counter = 0

function init() {
  document.addEventListener('keydown', function(e) {
    compareCode(e)
  })
}

let compareCode = function(e) {
  let key = parseInt(e.detail || e.which)
  if(code[counter] === key) {
    counter++
    if (counter === (code.length - 1)) {
      alert("You are now over 9000!")
      counter = 0
    }
  }
  else {
    counter = 0
  }
}

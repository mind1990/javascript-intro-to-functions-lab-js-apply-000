function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var lowercase = "hello!"
  var uppercase = "I CAN'T HEAR YOU!"
  var mixedCase = "I love you, Grandma."

  if (lowercase.toLowerCase() === lowercase) {
    return "I CAN'T HEAR YOU!"
  } else if (uppercase.toUpperCase() === uppercase {
      return "YES INDEED!")
  } else if (mixedCase.toLowerCase() === uppercase) {
      return "I love you, too."
  }
}

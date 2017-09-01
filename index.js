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

  if (string.toLowerCase() === "hello!") {
    return "I CAN'T HEAR YOU!"
  } else if (string.toUpperCase() === "I CAN'T HEAR YOU!") {
      return "YES INDEED!"
  } else if (string.toLowerCase() === "I love you, Grandma.") {
      return "I love you, too."
  }
}

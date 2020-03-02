
function takeANumber(currentLine, customers_name) {
  currentLine.push(customers_name)
  return `Welcome, ${customers_name}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
      return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(current_Line) {
  var line = ["The line is curently: "]
  if (current_Line.length === 0) {
    return "The line is empty."
  } else {
    for (let i = 0; i < current_Line.length+1; i += 1) {
      line.push(`${i}. ${current_Line[i]}, `)
    }
  return line
  }
}


function takeANumber(currentLine, customers_name) {
  currentLine.push(customers_name)
  return `Welcome, ${customers_name}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
      return katzDeliLine.shift()
  }
}

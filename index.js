
function takeANumber(currentLine, customers_name) {
  currentLine.push(customers_name)
  return `Welcome, ${customers_name}. You are number ${currentLine.length} in line.`
}

import keyword from "./keyowrd"
import operators from './operators'
import punctuator from './punctuator'


function isAlpha(c: string) {
  return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c === '_'
}

function isDigit(d: string) {
  return d >= '0' && d <= '9'
}

function isSpace(s: string) {
  return s === ' '
}

function isPunctuator(c: string) {
  return punctuator.includes(c)
}

function isOperators(c: string) {
  return operators.includes(c)
}

function isKeyword(c: string) {
  return keyword.includes(c)
}

export {
  isAlpha,
  isDigit,
  isSpace,
  isPunctuator,
  isOperators,
  isKeyword,
}
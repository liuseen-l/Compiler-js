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

function isOct(c: string) {
  return c > '0' && c <= '7'
}

function isE(c: string) {
  return c === 'e' || c === 'E'
}

function isHex(c: string) {
  return (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F')
}

function isX(c: string) {
  return c === 'x' || c === 'X'
}
export {
  isAlpha,
  isDigit,
  isSpace,
  isPunctuator,
  isOperators,
  isKeyword,
  isOct,
  isHex,
  isX,
  isE
}

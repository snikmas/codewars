// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// return masked string

//1. if <5 return cc
// otherwise return length - 4 * * + regex last 4 symb( (.{4})$) or use splice

function maskify(cc) {
  if (cc.length < 5) return cc;
  return '#'.repeat(cc.length - 4) + cc.match(/(.{4})$/)[0]
}


maskify('4556364607935616')
maskify('1')
maskify('11111')

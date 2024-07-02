# Dmitrii Malashev

## Contacts
- **tel:** +374 91 527284
- **e-mail:** dmalashev@gmail.com
- **GitHub:** [dmalashev](https://github.com/dmalashev)
- **Telegram:** @aftoywu

## About me
I like to program and make interfaces, so I want to become a front-end developer. I had experience in programming with Fortran and Visual Basic. Now I have 3rd try to done RS course, and hopefully this try will be succesfully.

## Skills
- HTML
- CSS
- JavaScript (Basics)
- Git, GitHub
- Figma (for web-development)
- VS Code

## Code example
**Task:** Encode specified string with ROT13 cipher
```javascript
function encodeToRot13(str) {
  let newStr = '';
  let newCharCode;
  for (let i = 0; i <= str.length - 1; i += 1) {
    if (
      !(
        (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) ||
        (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
      )
    ) {
      newStr += str[i];
    } else {
      newCharCode = str.charCodeAt(i) + 13;
      if (str[i] === str[i].toUpperCase()) {
        if (newCharCode > 90) {
          newCharCode = newCharCode - 90 + 65 - 1;
        }
      }
      if (newCharCode > 122) {
        newCharCode = newCharCode - 122 + 97 - 1;
      }
      newStr += String.fromCharCode(newCharCode);
    }
  }
  return newStr;
}
```

## Experience
There are two educational projects that I made in JS/Front-end course in RS School:

**Hangman:** https://rolling-scopes-school.github.io/dmalashev-JSFE2023Q4/hangman/ \
**Coffee-house:** https://rolling-scopes-school.github.io/dmalashev-JSFE2023Q4/coffee-house/

## Education
**University:** Master's degree in the field of heat engineering, Moscow Aviation Insitute

**Courses:**
- HTML course, Code Basics
- CSS course , Code Basics
- Git course, Slurm

## Languages
- English - Intermediate (B1)
- Russian - Native

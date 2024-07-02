# Dmitrii Malashev
## Contacts
Erevan, Armenia

tel: +374 91 527284

GitHub: dmalashev

Telegram: @aftoywu

Discord: shoffff
## About me
I like to program and make interfaces, so I want to become a front-end developer. I had experience in programming with Fortran and Visual Basic. Now I have 3rd try to done RS course, and hopefully this try will be succesfully.
## Skills & Instruments
- HTML
- CSS
- JavaScript
- Git, GitHub
- Figma
- VS Code
## Code example
Encode specified string with ROT13 cipher
```
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
## Working experience
https://rolling-scopes-school.github.io/dmalashev-JSFE2023Q4/hangman/

https://rolling-scopes-school.github.io/dmalashev-JSFE2023Q4/coffee-house/
## Education
- Master degree, Aviation and rocket engines, Moscow Aviation Insitute
- ?
## Languages
- English - B1
- Russian (Native)

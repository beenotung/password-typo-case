# password-typo-case

Expand the given password into a list of possible switched-case password.

[![npm Package Version](https://img.shields.io/npm/v/password-typo-case.svg?maxAge=3600)](https://www.npmjs.com/package/password-typo-case)

This package aim to provider better UX during password-based authentication when the user's device auto switch the cases of password input.

## Usage Example

```typescript
import { expandPasswordList } from 'password-typo-case'

let username = document.querySelector('#username').value
let password = document.querySelector('#password').value // e.g. 'test'
let passwordList = expandPasswordList(password) // e.g. [ 'test', 'TEST', 'Test', 'tEST' ]
let passwordHashList = passwordList.map(hashPassword) // e.g. using bcrypt
fetch('/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username,
    passwordHashList,
  }),
})
```

## Typescript Signature

```typescript
export function expandPasswordList(password: string): string[]
```

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others

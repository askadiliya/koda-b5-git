// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const akunValid = [
//   { username: "Aska", password: "12345" },
//   { username: "Diliyan", password: "678910" },
//   { username: "Perkasa", password: "111213" },
// ];

// let kesempatan = 3;

// function login() {
//   if (kesempatan === 0) {
//     console.log("Kesempatan habis! Sistem ditutup.");
//     return rl.close();
//   }

//   rl.question("Masukkan username: ", function (userInput) {
//     rl.question("Masukkan password: ", function (passInput) {
//       let ditemukan = false;
//       for (let i = 0; i < akunValid.length; i++) {
//         if (
//           userInput === akunValid[i].username &&
//           passInput === akunValid[i].password
//         ) {
//           ditemukan = true;
//           break;
//         }
//       }

//       if (ditemukan) {
//         console.log("Login berhasil! Selamat datang.");
//         return rl.close();
//       } else {
//         console.log("Username atau Password salah!");
//         kesempatan--;
//         console.log("Sisa kesempatan: " + kesempatan);
//         login();
//       }
//     });
//   });
// }

// login();

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const akunValid = [
  { username: "aska", password: "12345" },
  { username: "diliyan", password: "678910" },
  { username: "perkasa", password: "111213" },
];

let kesempatan = 3;

function login() {
  if (kesempatan === 0) {
    console.log("Maaf Kesempatan sudah habis");
    return rl.close();
  }

  rl.question("Masukkan username: ", function (inputUser) {
    rl.question("Masukkan password: ", function (inputPass) {
      
      let akun = null;
      for (let i = 0; i < akunValid.length; i++) {
        if (akunValid[i].username === inputUser) {
          akun = akunValid[i];
          break;
        }
      }

      if (akun === null) {
        console.log("Username salah!");
        kesempatan--;
        console.log("Sisa kesempatan:", kesempatan);
        return login();
      }

      if (akun.password !== inputPass) {
        console.log("Password salah!");
        kesempatan--;
        console.log("Sisa kesempatan:", kesempatan);
        return login();
      }

      console.log("Login berhasil!,", akun.username);
      return rl.close();
    });
  });
}

login();

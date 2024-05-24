// THIS IS FOR LOOP


// looping dimulai dari 0
for (let i = 0; i <= 10; i++) {
    console.log("hello world")
}

// looping di muali dari 1
for (let i = 1; i <= 10; i++) {
    console.log("hello world")
}

// loopiing dikurangi 1 karena i < 10 bukan i <= 10
for (let i = 0; i < 10; i++) {
    console.log("hello world")
}

// jika i = 1 dan i += 2 maka data yang di run akan ganjil
for (let i = 0; i <= 10; i += 2) {
    console.log("hello world")
}

// loopingan akan di reverse
for (let i = 0; i <= 10; i--) {
    console.log("hello world")
}

// untuk menghilangkan data yang tidak di inginkan

for (let i = 0; i <= 10; i--) {

    if (i == 5) {
        continue;
    } else {
        console.log("hello world")
    }
}

// UNTUK MENGHENTIKAN LOOPINGAN DI VALUE YANG SUDAH DITENTUKAN 
for (let i = 0; i <= 10; i--) {

    if (i == 5) {
        break;
    } else {
        console.log("hello world")
    }
}
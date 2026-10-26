
let user1 = {
    firstName: " aSaDbEk ",
    lastName: " aBDULHAMIDOV ",
    email: " ASADBEK@GMAIL.COM ",
    username: " asadbek_dev "
};

let cleanFirstName = user1.firstName.trim();
cleanFirstName = cleanFirstName.slice(0, 1).toUpperCase() + cleanFirstName.slice(1).toLowerCase();

let cleanLastName = user1.lastName.trim();
cleanLastName = cleanLastName.slice(0, 1).toUpperCase() + cleanLastName.slice(1).toLowerCase();

let cleanEmail1 = user1.email.trim().toLowerCase();
let cleanUsername1 = user1.username.trim().toLowerCase();

let isEmailValid1 = cleanEmail1.includes("@") && cleanEmail1.endsWith(".com");
let isUsernameValid1 = cleanUsername1.length >= 5;

console.log("--- 1-MASALA ---");
console.log("Ism: " + cleanFirstName);
console.log("Familiya: " + cleanLastName);
console.log("Email: " + cleanEmail1);
console.log("Username: " + cleanUsername1);

if (isEmailValid1 && isUsernameValid1) {
    console.log("Holat: muvaffaqiyatli ro‘yxatdan o‘tdi\n");
} else {
    console.log("Holat: Xatolik bor!\n");
}



let userForm = {
    name: " mALiKa ",
    email: " MALIKA@EXAMPLE.COM ",
    phone: " +998 90 123 45 67 ",
    password: " Malika2026 "
};

let cleanName2 = userForm.name.trim();
cleanName2 = cleanName2.slice(0, 1).toUpperCase() + cleanName2.slice(1).toLowerCase();

let cleanEmail2 = userForm.email.trim().toLowerCase();
let isEmailValid2 = cleanEmail2.includes("@") && cleanEmail2.endsWith(".com");

let cleanPhone = userForm.phone.trim();
let isPhoneValid = cleanPhone.startsWith("+998");

let cleanPassword = userForm.password.trim();
let isPasswordValid = cleanPassword.length >= 8;

console.log("--- 2-MASALA ---");
console.log("Ism: " + cleanName2);
console.log("Email: " + cleanEmail2);
console.log("Telefon: " + cleanPhone);
console.log("Parol uzunligi: " + cleanPassword.length);

if (isEmailValid2 && isPhoneValid && isPasswordValid) {
    console.log("Holat: malumotlar qabul qilindi\n");
} else {
    console.log("Holat: Malumotlarda xatolik mavjud.\n");
}



let product = {
    name: " wIRELESS HEADPHONES ",
    category: " ELECTRONICS ",
    description: " Bluetooth headphones with noise cancellation ",
    code: " WH-2026 "
};

let cleanProdName = product.name.trim();
cleanProdName = cleanProdName.slice(0, 1).toUpperCase() + cleanProdName.slice(1).toLowerCase();

let cleanCategory = product.category.trim().toUpperCase();

let cleanDesc = product.description.trim();
let isDescValid = cleanDesc.length >= 20;
let hasBluetooth = cleanDesc.toLowerCase().includes("bluetooth");

let cleanCode = product.code.trim();
let isCodeValid = cleanCode.startsWith("WH-");

console.log("--- 3-MASALA ---");
console.log("Mahsulot: " + cleanProdName);
console.log("Kategoriya: " + cleanCategory);
console.log("Kod: " + cleanCode);

if (isDescValid && hasBluetooth && isCodeValid) {
    console.log("Holat: tekshiruvdan otdi\n");
} else {
    console.log("Holat: Ma'lumotlar to'liq emas.\n");
}


let message = {
    sender: " sARDOR ",
    subject: " PAYMENT ISSUE ",
    text: " I cannot complete my payment. Please help! ",
    email: " SARDOR@MAIL.COM "
};

let cleanSender = message.sender.trim();
cleanSender = cleanSender.slice(0, 1).toUpperCase() + cleanSender.slice(1).toLowerCase();

let cleanSubject = message.subject.trim().toLowerCase();

let cleanText = message.text.trim();
let isTextValid = cleanText.length >= 20;
let hasPayment = cleanText.toLowerCase().includes("payment");

let cleanEmail4 = message.email.trim().toLowerCase();
let isEmailValid4 = cleanEmail4.includes("@");

console.log("--- 4-MASALA ---");
console.log("Yuboruvchi: " + cleanSender);
console.log("Mavzu: " + cleanSubject);
console.log("Email: " + cleanEmail4);

if (isTextValid && hasPayment && isEmailValid4) {
    console.log("Holat: murojaat qabul qilindi\n");
} else {
    console.log("Holat: Xatolik bor.\n");
}



let profile = {
    fullName: " dILSHOD kARIMOV ",
    email: " DILSHOD@GMAIL.COM ",
    username: " dilshod_uz ",
    city: " tOSHKENT ",
    website: " https://dilshod.uz "
};

let cleanFullName = profile.fullName.trim();
let spaceIndex = cleanFullName.indexOf(" ");
let firstName5 = cleanFullName.slice(0, spaceIndex);
let lastName5 = cleanFullName.slice(spaceIndex + 1);

firstName5 = firstName5.slice(0, 1).toUpperCase() + firstName5.slice(1).toLowerCase();
lastName5 = lastName5.slice(0, 1).toUpperCase() + lastName5.slice(1).toLowerCase();
let formattedFullName = firstName5 + " " + lastName5;

let cleanEmail5 = profile.email.trim().toLowerCase();
let isEmailValid5 = cleanEmail5.includes("@") && cleanEmail5.endsWith(".com");

let cleanUsername5 = profile.username.trim().toLowerCase();
let isUsernameValid5 = cleanUsername5.length >= 6;

let cleanCity = profile.city.trim();
cleanCity = cleanCity.slice(0, 1).toUpperCase() + cleanCity.slice(1).toLowerCase();

let cleanWebsite = profile.website.trim();
let isWebsiteValid = cleanWebsite.startsWith("https://");

console.log("--- 5-MASALA ---");
console.log("F.I.Sh.: " + formattedFullName);
console.log("Email: " + cleanEmail5);
console.log("Username: " + cleanUsername5);
console.log("Shahar: " + cleanCity);
console.log("Website: " + cleanWebsite);

if (isEmailValid5 && isUsernameValid5 && isWebsiteValid) {
    console.log("Holat: profil tasdiqlandi");
} else {
    console.log("Holat: Xatoliklar mavjud.");
}
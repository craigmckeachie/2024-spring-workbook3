function parseAndDisplayName(fullName) {
  if (fullName && typeof fullName != "string") {
    console.log("Error: The name must be a string");
  }

  let names = fullName.split(" ");

  let firstName = names[0];
  let middleName = "";
  let lastName = "";

  if (names.length == 2) {
    lastName = names[1];
  } else if (names.length == 3) {
    middleName = names[1];
    lastName = names[2];
  }

  console.log(`Name: ${fullName}`);
  console.log(`First name: ${firstName}`);
  console.log(`Middle name: ${middleName}`);
  console.log(`Last name: ${lastName}`);
}
parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");

const functions = require("./functions");

//Pseudo Lifecycle functions.
// beforeEach(() => initDatabase());
// afterEach(() => CloseDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => CloseDatabase());

// const initDatabase = () => console.log("Database Initialized...");
// const CloseDatabase = () => console.log("Database Closed...");
const nameCheck = () => console.log("Checking Name...");

describe("Checking Names", () => {
  //Before Each will only be called twice in this context.
  //Apparently beforeEach is local only to the container function
  beforeEach(() => nameCheck());

  test("User is jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

//toBe is to be used for only primitive types, not objects
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

//Test case negation
test("Adds 2 + 2 to equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//Checkfor truthy and falsy values
//toBeNull matches only null
//toBeUndefined only matches undefined
//toBeDefined is the opposite of toBeUndefined
//toBeFalsy matches anything that an if statement treats as false

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
  expect(functions.checkValue(undefined)).toBeFalsy();
  expect(functions.checkValue(0)).toBeFalsy();
});

//toEqual will compare object equivalency
test("User should be Brad Traversy object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy"
  });
});

//Value comparisons
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

//Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

//Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

//Working with async data
//Promise
// test("User fetched name should be Leanne Graham", () => {
//   // expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

//Async await
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual("Leanne Graham");
// });

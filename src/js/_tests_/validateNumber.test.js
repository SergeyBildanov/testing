import validateNumber from "../validateNumber";

test.each([
    ["4111111111111111", true], 
    ["4111111111111112", false]])(
    'card number %s is %s',
    (number, expected) => {
      expect(validateNumber(number)).toBe(expected);
    },
  );
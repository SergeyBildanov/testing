import whichSystem from "../whichSystem";

test.each(
    [
        ["4111111111111111", "visa"],
        ["5555555555554444","mastercard"],
        ["371449635398431","amex"],
        ["6011111111111117","discover"],
        ["30569309025904","diners"],
        ["3530111333300000","jcb"],
        ["2200255555555555","mir"]
    ]
)("%s is %s card number", (number, expected)=>{
    expect(whichSystem(number)).toBe(expected);
})
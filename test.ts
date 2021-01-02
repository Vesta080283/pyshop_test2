import "jest";
import {isEven} from "./script";

test("isEven test", () => {
    expect(isEven(2)).toBe(false);
    expect(isEven(3)).toBe(true);
});
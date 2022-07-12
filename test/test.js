import { assert } from "chai"
import { describe, it } from "mocha"

describe("This just works!", () => {
  it("should return -1 when the value is not present", function () {
    assert.equal([1, 2, 3].indexOf(4), -1)
  })
})

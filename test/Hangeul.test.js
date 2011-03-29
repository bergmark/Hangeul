require("../Hangeul.js");
var assert = require("assert");
module.exports = {
  helpers : function () {
    assert.strictEqual(44032, Hangeul.getBlockCode(0,0,0));
  },
  toHangeul : function () {
    assert.strictEqual("한", Hangeul.blockFromTranslit("han"));
    assert.strictEqual("ㅎ", Hangeul.jamoFromChar("h"));
    assert.strictEqual("한글", Hangeul.blocksFromTranslit("han geul"));
  },
  transliterate : function () {
    assert.strictEqual("han geul", Hangeul.translitFromBlocks("한글"));
    assert.strictEqual("han", Hangeul.translitFromBlock("한"));
  },
  spaces : function () {
    assert.strictEqual("han  geul", Hangeul.translitFromBlocks("한 글"));
    assert.strictEqual("한 글", Hangeul.blocksFromTranslit("han  geul"));
  }
};

global.Hangeul = (function () {
  var math = CactusJuice.Addon.Math;
  var Collection = CactusJuice.Data.Collection;

  var single = {
    g : [12593, "ㄱ"],
    gg : [12594, "ㄲ"],
    gl : [12595, "ㄳ"],
    n : [12596, "ㄴ"],
    lj : [12597, "ㄵ"],
    lh : [12598, "ㄶ"],
    d : [12599, "ㄷ"],
    dd : [12600, "ㄸ"],
    l : [12601, "ㄹ"],
    lg : [12602, "ㄺ"],
    lm : [12603, "ㄻ"],
    lb : [12604, "ㄼ"],
    ls : [12605, "ㄽ"],
    lt : [12606, "ㄾ"],
    lp : [12607, "ㄿ"],
    lh : [12608, "ㅀ"],
    m : [12609, "ㅁ"],
    b : [12610, "ㅂ"],
    bb : [12611, "ㅃ"],
    bs : [12612, "ㅄ"],
    s : [12613, "ㅅ"],
    ss : [12614, "ㅆ"],
    ng : [12615, "ㅇ"],
    j : [12616, "ㅈ"],
    jj : [12617, "ㅉ"],
    ch : [12618, "ㅊ"],
    k : [12619, "ㅋ"],
    t : [12620, "ㅌ"],
    p : [12621, "ㅍ"],
    h : [12622, "ㅎ"],
    a : [12623, "ㅏ"],
    ae : [12624, "ㅐ"],
    ya : [12625, "ㅑ"],
    yae : [12626, "ㅒ"],
    oe : [12627, "ㅓ"],
    e : [12628, "ㅔ"],
    yoe : [12629, "ㅕ"],
    ye : [12630, "ㅖ"],
    o : [12631, "ㅗ"],
    wa : [12632, "ㅘ"],
    wae : [12633, "ㅙ"],
    wi : [12634, "ㅚ"],
    yo : [12635, "ㅛ"],
    u : [12636, "ㅜ"],
    weo : [12637, "ㅝ"],
    we : [12638, "ㅞ"],
    wi : [12639, "ㅟ"],
    yu : [12640, "ㅠ"],
    eu : [12641, "ㅡ"],
    yi : [12642, "ㅢ"],
    i : [12643, "ㅣ"],
    // : [12644, "ㅤ"],
    nn : [12645, "ㅥ"],
    nd : [12646, "ㅦ"],
    ns : [12647, "ㅧ"],
    // : [12648, "ㅨ"],
    lgs : [12649, "ㅩ"],
    ld : [12650, "ㅪ"],
    lbs : [12651, "ㅫ"],
    // : [12652, "ㅬ"],
    lh : [12653, "ㅭ"],
    mb : [12654, "ㅮ"],
    ms : [12655, "ㅯ"],
    // : [12656, "ㅰ"],
    mng : [12657, "ㅱ"],
    bg : [12658, "ㅲ"],
    bd : [12659, "ㅳ"],
    bsg : [12660, "ㅴ"],
    bsd : [12661, "ㅵ"],
    bj : [12662, "ㅶ"],
    bt : [12663, "ㅷ"],
    bng : [12664, "ㅸ"],
    bbng : [12665, "ㅹ"],
    bg : [12666, "ㅺ"],
    sn : [12667, "ㅻ"],
    sd : [12668, "ㅼ"],
    sb : [12669, "ㅽ"],
    sj : [12670, "ㅾ"],
    // : [12671, "ㅿ"],
    // : [12672, "ㆀ"],
    // : [12673, "ㆁ"],
    // : [12674, "ㆂ"],
    // : [12675, "ㆃ"],
    png : [12676, "ㆄ"],
    hh : [12677, "ㆅ"],
    // : [12678, "ㆆ"],
    yoya : [12679, "ㆇ"],
    yoyae : [12680, "ㆈ"],
    yoi : [12681, "ㆉ"],
    yuyeo : [12682, "ㆊ"],
    yuye : [12683, "ㆋ"],
    yui : [12684, "ㆌ"]
  };

  var initial = {
    g  : [ 0,"&#x1100","kiyeok"], // ᄀ
    gg : [ 1,"&#x1101","ssangkiyeok"],
    n  : [ 2,"&#x1102","nieun"],
    d  : [ 3,"&#x1103","dikeut"],
    dd : [ 4,"&#x1104","ssangdikeut"],
    l  : [ 5,"&#x1105","rieul"],
    m  : [ 6,"&#x1106","mieum"],
    b  : [ 7,"&#x1107","bieup"],
    bb : [ 8,"&#x1108","ssangbieup"],
    s  : [ 9,"&#x1109","siot"],
    ss : [10,"&#x110A","ssangsiot"],
    _  : [11,"&#x110B","ieung"],
    j  : [12,"&#x110C","jieut"],
    jj : [13,"&#x110D","ssangjieut"],
    ch : [14,"&#x110E","chieuch"],
    k  : [15,"&#x110F","kieuk"],
    t  : [16,"&#x1110","thieuth"], // ㅌ
    p  : [17,"&#x1111","phieuph"],
    h  : [18,"&#x1112","hieuh"]
  };

  var vowel = {
    a   : [0,"&#x1161","a"],
    ae  : [1,"&#x1162","ae"],
    ya  : [2,"&#x1163","ya"],
    yae : [3,"&#x1164","yae"],
    eo  : [4,"&#x1165","eo"],
    e   : [5,"&#x1166","e"],
    yeo : [6,"&#x1167","yeo"],
    ye  : [7,"&#x1168","ye"],
    o   : [8,"&#x1169","o"],
    wa  : [9,"&#x116A","wa"],
    wae : [10,"&#x116B","wae"],
    oe  : [11,"&#x116C","oe"],
    yo  : [12,"&#x116D","yo"],
    u   : [13,"&#x116E","u"],
    weo : [14,"&#x116F","weo"],
    we  : [15,"&#x1170","we"],
    wi  : [16,"&#x1171","wi"],
    yu  : [17,"&#x1172","yu"],
    eu  : [18,"&#x1173","eu"],
    yi  : [19,"&#x1174","yi"],
    i   : [20,"&#x1175","i"]
  };

  var final = {
    _   : [ 0,"",       "nothing"],
    g   : [ 1,"&#x11A8","kiyeok"],
    gg  : [ 2,"&#x11A9","ssangkiyeok"],
    gs  : [ 3,"&#x11AA","kiyeok-siot"],
    n   : [ 4,"&#x11AB","nieun"],
    nj  : [ 5,"&#x11AC","nieun-chieut"],
    nh  : [ 6,"&#x11AD","nieun-hieuh"],
    d   : [ 7,"&#x11AE","tikeut"],
    l   : [ 8,"&#x11AF","rieul"],
    lg  : [ 9,"&#x11B0","rieul-kiyeok"],
    lm  : [10,"&#x11B1","rieul-mieum"],
    lb  : [11,"&#x11B2","rieul-bieup"],
    ls  : [12,"&#x11B3","rieul-siot"],
    lt  : [13,"&#x11B4","rieul-thieuth"],
    lp  : [14,"&#x11B5","rieul-phieuph"],
    lh  : [15,"&#x11B6","rieul-hieuh"],
    m   : [16,"&#x11B7","mieum"],
    b   : [17,"&#x11B8","bieup"],
    bs  : [18,"&#x11B9","bieup-siot"],
    s   : [19,"&#x11BA","siot"],
    ss  : [20,"&#x11BB","ssangsiot"],
    ng  : [21,"&#x11BC","ieung"],
    j   : [22,"&#x11BD","cieuc"],
    ch  : [23,"&#x11BE","chieuch"],
    k   : [24,"&#x11BF","kieuk"],
    t   : [25,"&#x11C0","thieuth"],
    p   : [26,"&#x11C1","phieuph"],
    h   : [27,"&#x11C2","hieuh"]
  };

  return {
    translitFromBlock : function (syllable) {
      var code = syllable.charCodeAt(0);
      code -= 44032;
      var initialIndex = math.div(code, 588);
      code -= initialIndex * 588;
      var vowelIndex = math.div(code, 28);
      code -= vowelIndex * 28;
      var finalIndex = code;

      function x(coll, index) {
        for (var p in coll) {
          if (coll[p][0] === index) {
            return  p === "_" ? "" : p;
          }
        }
        throw new Error("Could not find index " + index);
      }
      var initialTranslit = x(initial, initialIndex);
      var vowelTranslit = x(vowel, vowelIndex);
      var finalTranslit = x(final, finalIndex);
      return initialTranslit + vowelTranslit + finalTranslit;
    },

    translitFromBlocks : function (blocks) {
      return Collection.map(blocks.split(""), function (v) {
        if (v === " ") {
          return " ";
        }
        return this.translitFromBlock(v);
      }.bind(this)).join(" ").replace("   ", "  ", "g");
    },

    jamoCodeFromChar : function (chr) {
      if (!(chr in single)) {
        return "x";
      }
      return single[chr][0];
    },

    jamoFromChar : function (chr) {
      return String.fromCharCode(this.jamoCodeFromChar(chr));
    },

    getBlockCode : function (first, second, third) {
      return 44032 + 588 * first + 28 * second + third;
    },

    blockFromTranslit : function (syllable) {
      if (!/^([bcdghjklmnprst]*)([aeiouyw]*)([bcdghjklmnprst]*)$/i.test(syllable)) {
        return "x";
      }
      var s0 = RegExp.$1; var s1 = RegExp.$2; var s2 = RegExp.$3;
      if (s0 === '') { s0 = "_"; }
      if (s1 === '') { s1 = "_"; }
      if (s2 === '') { s2 = "_"; }
      if (!initial[s0] || !vowel[s1] || !final[s2]) {
        return "x";
      }
      var first = initial[s0][0];
      var second = vowel[s1][0];
      var third = final[s2][0];
      return String.fromCharCode(this.getBlockCode(first, second, third));
    },

    blocksFromTranslit : function (v) {
      v = v.split(" ");
      var chars = [];
      for (var i = 0; i < v.length; i++) {
        if (v[i] == "") {
          chars.push(" ");
        } else {
          chars.push(this.blockFromTranslit(v[i]));
        }
      }
      return chars.join("");
    }
  };
})();

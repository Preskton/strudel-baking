//@title Some Town
//@by Esk 
let chords = chord("<C9 F9 A9 D9>/4").dict('ireal')

setcps(1)

stack(
  s("bd sd,hh*4").coarse("<1 32>")._punchcard(),
  s("~ ~ <s50_cp rolandr8_cp> ~").coarse("32").mask("[0 1]/4").gain(.5)._punchcard(),
  n("<[1 5]!3 <[1 4] [1 -1]>>*2")
    .set(chords)
    .mode("root:g1")
    .voicing()
    .s("square")
    ._punchcard(),
  stack(
    n("<[1 4 3 6]!3 <[1 3 4 6] [4 3 6 1] [3 4 4 6] [1 4 3 7]>>")
      .set(chords)
      .mode("root:c4")
      .voicing()
      .s("square")
      .mask("[0 0 0 0 1 1 1 1]/64"),
    note("<c5 <a4 b4> <b4 e5> d5>*<2 4 3 6>")
      .s("square")
      .mask("[0 0 1 0 0 0 0 0]/64"),
    note("<c5 <b4 a4> <e5 b4> d5>*<3 <6 2> <2 6> 4>")
      .s("square")
      .mask("[0 0 0 1 0 0 0 0]/64"),
  )._punchcard(),
  n("<0!3 <1!3 -1>>")
    .set(chords)
    .mode("root:g5")
    .voicing()
    .s("triangle")
    ._punchcard()
).spiral()

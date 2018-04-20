
function setup() {
  createCanvas(500,500,WEBGL)

  Clock.rate = .7

  drums = EDrums('x*ox*x*ox-')
  .pan.seq( [-1,0,1], 1/8 )
  .shuffle.seq( null, 1 )

  C = FM({ maxVoices:1, index:15, cmRatio:1.0333 })
  C.play( ['c3', 'e3','g3'],[1])

  C = FM({ maxVoices:2, index:15, cmRatio:1.0333 })
  C.play( ['c5', 'e5','g5',],[1])

  C = FM({ maxVoices:2, index:15, cmRatio:1.0333 })
  C.play( ['c5', 'e5','g5', 'c4'],[1/4])

  //C = Mono()
    //.note.seq( 9, 1/4)
    //.detune2.seq( Rndf(0,.015) )
    //.detune3.seq( Rndf(0,.015) )

    //d = FM( 'glockenspiel' )
      //.note.seq( Rndi(0,12), [1/4,1/2,1,1/8].rnd() )
      //.fx.add( Delay() )



  //b = FM({ maxVoices:1 })
  //b.chord( [0,2,4,6] )
  //b.chord.seq(1/2)

}

function draw() {
  background(255);
  rotateY(millis() / 1000);
  stroke('white');
  fill('silver');
  sphere(100);


}

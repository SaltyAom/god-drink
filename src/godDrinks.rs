/**
 * The program GodDrinksTs implements an application that
 * creates an empty simulated world with no meaning or purpose.
 * 
 * @origin https://gist.github.com/hibiyasleep/519a7bd3bfc2fd4f7d33f3cbf5cdc3bb
 * @author saltyaom
 */

use world::Simulation::*;
 
// Switch on the power line
// Remember to put on
// PROTECTION

// Lay down your pieces
// And let's begin
// OBJECT CREATION
fn main() {
    // Fill in my data
    // parameters
    // INITIALIZATION
    let me = Lovable::new(Me);
    let you = Lovable::new(You);

    // Set up our new world
    let world = World::new(me, you);
    // And let's begin the
    // SIMULATION
    world.start(Simulation);

    // If I'm a set of points
    if me.is(PointSet) {
        // Then I will give you my
        // DIMENSION
        you.add(me.dimensions);
    }

    // If I'm a circle
    if me.is(Circle) {
        // Then I will give you my
        // CIRCUMFERENCE
        you.add(me.circumference);
    }

    // If I'm a sine wave
    if me.is(SineWave) {
        // Then you can sit on all my
        // TANGENTS
        you.can(you.sit, me.tangent(you.x));
    }

    // If I approach infinity
    if me.is(Sequence) {
        // Then you can be my
        // LIMITATIONS
        me.limit = you.limit;
    }

    // Switch my current
    // To AC, to DC
    me.current.toggle();

    // And then blind my vision
    me.blind = true;
    // So dizzy, so dizzy
    me.add(FEELINGS.DIZZY);

    // Oh, we can travel
    world.time = World::DateTime::from("617 AD");
    // To A.D., to B.C.
    world.time = World::DateTime::from("3691 BC");

    // And we can unite
    world.unite(me, you);
    // So deeply, so deeply

    // If I can
    // If I can give you all the
    // SIMULATIONS
    if me.simulations.availables.len() >= 
       you.simulations.needs.len() {
        // Then I can
        // Then I can be your only
        // SATISFACTION
        you.satisfaction = true;
    }

    // If I can make you happy
    if you.feelings.has(FEELINGS.HAPPY) {
        // I will run the
        // EXECUTION
        me.execution.request(world);
    }

    // Though we are trapped
    // In this strange, strange
    // SIMULATION
    world.lock(me, you);

    // If I'm an eggplant
    if me.is(Eggplant) {
        // Then I will give you my
        // NUTRIENTS
        me.nutritions.transfer(you);
    }

    // If I'm a tomato
    if me.is(Tomato) {
        // Then I will give you
        // ANTIOXIDANTS
        me.antioxidants.transfer(you);
    }

    // If I'm a tabby cat
    if me.is(TubbyCat) {
        // Then I will purr for your
        // ENJOYMENT
        me.purr();
    }

    // If I'm the only god
    if world.Gods == me {
        // Then you're the proof of my
        // EXISTENCE
        me.proof = you.proof;
    }

    // Switch my gender
    // To F, to M
    me.gender.toggle();
    // And then do whatever
    // From AM to PM
    world.procreate(me, you);
    // Oh, switch my role
    // To S, to M
    me.BDSM.toggle();
    // So we can enter
    // The trance, the trance 
    world.makeHigh(me, you);

    // If I can
    // If I can feel your
    // VIBRATIONS
    if me.feelings.has(FEELINGS::VIBRATIONS) {
        // Then I can
        // Then I can finally be
        // COMPLETION
        me.add(FEELINGS::COMPLETE);
    }

    // Though you have left
    world
        .unlock(you)
        .remove(you);
    // You have left
    me
        .find(you, world)
        // You have left
        .find(you, world)
        // You have left
        .find(you, world)
        // You have left
        .find(you, world)
        // You have left me in
        .find(you, world);
        // ISOLATION

    // If I can
    // If I can erase all the pointless
    // FRAGMENTS
    if me.memory.isErasable {
        // Then maybe
        // Then maybe you won't leave me so
        // DISHEARTENED
        me.feelings.remove(FEELINGS::DISHEARTENED);
    }

    // Challenging your god
    match me.opinions.get(you.in(world)) = false {
        Ok() => {},
        // You have made some
        // ILLEGAL ARGUMENTS
        Err(err) => world.announce("God is always true.")
    }


    world.execution
        // EXECUTION
        .run()
        // EXECUTION
        .run()
        // EXECUTION
        .run()
        // EXECUTION
        .run()
        // EXECUTION
        .run()
        // EXECUTION
        .run()
        // EXECUTION
        .run()
        // EXECUTION
        .run()
        // EXECUTION
        .run()
        // EXECUTION
        .run()
        // EXECUTION
        .run()
        // EXECUTION
        .run()
        // EIN
        .announce(1, LANGUAGES.GERMAN) // ein; German
        // DOS
        .announce(2, LANGUAGES.SPANISH) // dos; Español
        // TROIS
        .announce(3, LANGUAGES.FRENCH) // trois; French
        // NE
        .announce(4, LANGUAGES.KOREAN) // 넷; Korean
        // FEM
        .announce(5, LANGUAGES.SWEDISH) // fem; Swedish
        // LIU
        .announce(6, LANGUAGES.CHINESE) // 六; Chinese
        // EXECUTION
        .run();



    // If I can
    // If I can give them all the
    // EXECUTION
    if world.execution.by(me) {
        // Then I can
        // Then I can be your only
        // EXECUTION
        you.execution = me.execution;
    }

    // If I can have you back
    if world.find(you) {
        // I will run the
        // EXECUTION
        world.runExecution();
    }

    // Though we are trapped
    // We are trapped, ah
    me.escape(world);



    // I've studied
    // I've studied how to properly
    // LO-O-OVE
    me
        .learn(LOVE);
        // Question me
        // Question me, I can answer all
        // LO-O-OVE
        .test(LOVE)
        // I know the
        // algebraic expression of
        // LO-O-OVE
        .find(Math::Algebraic::Expression, FEELINGS::LOVE)
        // Though you are free
        // I am trapped, trapped in
        // LO-O-OVE
        .escape(LOVE);



    // EXECUTION
    world.execute(me);
}
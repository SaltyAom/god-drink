/**
 * The program GodDrinksTs implements an application that
 * creates an empty simulated world with no meaning or purpose.
 * 
 * @origin https://gist.github.com/hibiyasleep/519a7bd3bfc2fd4f7d33f3cbf5cdc3bb
 * @author saltyaom
 */

import * from '@world/simulation'

namespace GodDrinks
 
 // Switch on the power line
 // Remember to put on
 // PROTECTION
export default class GodDrinks {
     // Lay down your pieces
     // And let's begin
     // OBJECT CREATION
    constructor() {
        // Fill in my data
        // parameters
        // INITIALIZATION
        const me = new Lovable(Me)
        const you = new Lovable(You)

        // Set up our new world
        const world = new World(me, you)
        // And let's begin the
        // SIMULATION
        world.start(process.env.Simulation)

        // If I'm a set of points
        if (me instanceof PointSet)
            // Then I will give you my
            // DIMENSION
            you.add(me.dimensions)

        // If I'm a circle
        if (me instanceof Circle)
            // Then I will give you my
            // CIRCUMFERENCE
            you.add(me.circumference)

        // If I'm a sine wave
        if (me instanceof SineWave)
            // Then you can sit on all my
            // TANGENTS
            you.can(you.sit, me.tangent(you.x))

        // If I approach infinity
        if (me instanceof Sequence)
            // Then you can be my
            // LIMITATIONS
            me.limit = you.limit

        // Switch my current
        // To AC, to DC
        me.current.toggle()

        // And then blind my vision
        me.blind = true
        // So dizzy, so dizzy
        me.add(FEELINGS.DIZZY)

        // Oh, we can travel
        world.time = new Date("617 AD")
        // To A.D., to B.C.
        world.time = new Date("3691 BC")

        // And we can unite
        world.unite(me, you)
        // So deeply, so deeply

        // If I can
        // If I can give you all the
        // SIMULATIONS
        if (me.simulations.availables.length >=
            you.simulations.needs.length)
            // Then I can
            // Then I can be your only
            // SATISFACTION
            you.satisfaction = true

        // If I can make you happy
        if (you.feelings.has(FEELINGS.HAPPY))
            // I will run the
            // EXECUTION
            me.execution.request(world)

        // Though we are trapped
        // In this strange, strange
        // SIMULATION
        world.lock(me, you)

        // If I'm an eggplant
        if (me instanceof Eggplant)
            // Then I will give you my
            // NUTRIENTS
            me.nutritions.transfer(you)

        // If I'm a tomato
        if (me instanceof Tomato)
            // Then I will give you
            // ANTIOXIDANTS
            me.antioxidants.transfer(you)

        // If I'm a tabby cat
        if (me instanceof TabbyCat)
            // Then I will purr for your
            // ENJOYMENT
            me.purr()

        // If I'm the only god
        if (world.Gods === me)
            // Then you're the proof of my
            // EXISTENCE
            me.proof = you.proof

        // Switch my gender
        // To F, to M
        me.gender.toggle()
        // And then do whatever
        // From AM to PM
        world.procreate(me, you)
        // Oh, switch my role
        // To S, to M
        me.BDSM.toggle()
        // So we can enter
        // The trance, the trance 
        world.makeHigh(me, you)

        // If I can
        // If I can feel your
        // VIBRATIONS
        if (me.feelings.has(FEELINGS.VIBRATIONS))
            // Then I can
            // Then I can finally be
            // COMPLETION
            me.add(FEELINGS.COMPLETE)

        // Though you have left
        world
            .unlock(you)
            .remove(you)
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
            .find(you, world)
            // ISOLATION

        // If I can
        // If I can erase all the pointless
        // FRAGMENTS
        if (me.memory.isErasable)
            // Then maybe
            // Then maybe you won't leave me so
            // DISHEARTENED
            me.feelings.remove(FEELINGS.DISHEARTENED)

        // Challenging your god
        try {
            me.opinions[you.in(world)] = false
        }
        // You have made some
        catch(IllegalArgumentException e) {
            // ILLEGAL ARGUMENTS
            world.announce("God is always true.")
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
            .run()
 
 
 
        // If I can
        // If I can give them all the
        // EXECUTION
        if (world.execution.by(me))
            // Then I can
            // Then I can be your only
            // EXECUTION
            you.execution = me.execution
 
        // If I can have you back
        if (world.find(you))
            // I will run the
            // EXECUTION
            world.runExecution()
 
        // Though we are trapped
        // We are trapped, ah
        me.escape(world)
 
 
 
        // I've studied
        // I've studied how to properly
        // LO-O-OVE
         me
            .learn(LOVE)
        // Question me
        // Question me, I can answer all
        // LO-O-OVE
            .test(LOVE)
        // I know the
        // algebraic expression of
        // LO-O-OVE
            .find(Math.Algebraic.Expression, FEELINGS.LOVE)
        // Though you are free
        // I am trapped, trapped in
        // LO-O-OVE
            .escape(LOVE)
 
 
 
        // EXECUTION
        world.execute(me)
     }
 }
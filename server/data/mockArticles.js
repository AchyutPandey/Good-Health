
const mockArticles = [
  {
    _id: '1',
    title: 'Reaction Time Training: Secrets from the Paddock',
    content: `In the high-speed world of Formula 1, reaction times can determine the winner before the first corner. Now, neuroscientists are applying these elite training methods to everyday health. A new study published in 'Apex Performance Journal' reveals that cognitive drills used by drivers to handle 5G forces can significantly improve mental acuity in aging adults.

The 'batak' reaction board, a staple in driver training rooms, is being adapted for clinical use. "It's about neural plasticity," says Dr. Helmut Meyer, a leading performance coach. "Just as a driver anticipates a gap at 200mph, an elderly patient can train their brain to process information faster, reducing fall risks."

Participants who underwent a 6-week "Driver Readiness" program showed a 40% improvement in multi-tasking capabilities. The key takeaway? High-speed decision making isn't just for the track—it's a vital metric for long-term cognitive health.`,
    source: 'Paddock Health Quarterly',
    datePublished: new Date('2024-03-24'),
    imageUrl: 'https://images.unsplash.com/photo-1598553641617-10499e988220?q=80&w=2070&auto=format&fit=crop'
  },
  {
    _id: '2',
    title: 'Hydration Strategies: Surviving the Heat of the Cockpit',
    content: `Losing 3kg of water weight in a single two-hour session sounds extreme, but for F1 drivers in Singapore, it's a Sunday drive. Medical researchers are now analyzing how these elite athletes maintain peak cognitive function under severe dehydration to help everyday people in hot climates.

The secret lies in "preventative hyper-hydration" and electrolyte balance. "The moment you feel thirsty, your performance has already dipped by tenths of a second," explains nutritionist Sarah Wolff. The study suggests that adopting a structured hydration protocol—sipping electrolyte-rich fluids at timed intervals rather than chugging water—maintains blood volume and focus.

For effective hydration, the "drink button" approach is recommended: frequent, small sips to maintain steady hydration levels without bloating, ensuring you're ready for the long haul, whether it's a marathon meeting or a summer run.`,
    source: 'Grid Fitness Review',
    datePublished: new Date('2024-03-22'),
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop'
  },
  {
    _id: '3',
    title: 'Neck Strength: The Unsung Hero of Posture and Stability',
    content: `While they might not look like bodybuilders, F1 drivers possess some of the strongest necks in the world to withstand 6G cornering forces. Physiotherapists indicate that this specific training could be the cure for the modern "tech neck" epidemic.

A robust cervical spine stabilizes the head and visual field. "When your neck fatigues, your vision suffers," notes trainer Tom P. The new "G-Force Protocol" for office workers focuses on isometric holds similar to those used by drivers to keep their heads pinned in the cockpit.

Early adopters report significantly fewer tension headaches and improved focus. It turns out, training to resist the lateral forces of Suzuka is excellent preparation for resisting the downward pull of a smartphone.`,
    source: 'Pole Position physio',
    datePublished: new Date('2024-03-20'),
    imageUrl: 'https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?q=80&w=2148&auto=format&fit=crop'
  },
  {
    _id: '4',
    title: 'The Zone: Achieving Flow State at 300km/h',
    content: `Driving an F1 car requires a state of "unconscious competence"—total immersion where action precedes thought. Psychologists call this "The Zone," and new bio-feedback tech allows us to measure it.

Drivers often report "time slowing down" during a qualifying lap. Researchers found their heart rates can exceed 180bpm, yet their brain waves show calm Alpha states usually seen in meditation. This "high-energy calm" is the holy grail of performance.

Techniques to trigger this state, such as visualization and rhythmic breathing, are now being taught to surgeons and stock traders. Mastering your internal RPMs might be the key to winning your own Grand Prix.`,
    source: 'Telemetry Minds',
    datePublished: new Date('2024-03-18'),
    imageUrl: 'https://images.unsplash.com/photo-1533561052669-775c742c4b5e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    _id: '5',
    title: 'Data-Driven Recovery: Sleep Engineering',
    content: `In a sport that travels across time zones weekly, jet lag is the enemy. F1 teams employ "sleep engineers" to optimize driver recovery. Their methods? rigorous light manipulation and temperature control.

"We treat sleep like a pit stop," says a Mercedes team doctor. "It needs to be efficient and perfectly timed." Using chronotype data, teams create personalized schedules that shift a driver's circadian rhythm by hours in days.

The key takeaway for the public is consistency. Darkening rooms (` + "`" + `blackout spec` + "`" + `) and lowering core temperature can induce deep sleep faster. If it works for a driver landing in Vegas on Wednesday to race on Saturday, it can work for your Monday morning commute.`,
    source: 'Circadian Lap Times',
    datePublished: new Date('2024-03-15'),
    imageUrl: 'https://images.unsplash.com/photo-1517058434960-26467366d213?q=80&w=2097&auto=format&fit=crop'
  },
  {
    _id: '6',
    title: 'Cardio for Concentric Focus: The Triathlete Driver',
    content: `It's a common myth that driving isn't physical. In reality, F1 drivers have VO2 max scores rivaling elite runners. Why? Because a strong heart pumps oxygen to the brain, maintaining focus under stress.

"When physical fatigue sets in, mental errors follow," explains Jenson, a former champion. "You miss the apex by an inch, and you're in the wall." This connection between cardiovascular health and executive function is heavily documented.

Routine interval training helps the body clear lactate and keeps the mind sharp. So next time you're on the treadmill, remember: you're not just training your legs, you're tuning your engine for the final lap.`,
    source: 'Endurance & Octane',
    datePublished: new Date('2024-03-12'),
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    _id: '7',
    title: 'Nutrition: Fueling the Human Engine',
    content: `Fuel load is critical in F1, and the same applies to the driver. Every gram of food is weighed and calculated. The "Driver's Diet" is strict: low inflammation, high energy.

Complex carbs for sustained energy (the long stint) and quick sugars for immediate reaction (the qualifying lap). Sourcing clean, high-quality proteins is non-negotiable.

"You wouldn't put low-grade fuel in a Ferrari," notes a Red Bull nutritionist. "Don't put processed junk in your body if you expect high performance."`,
    source: 'Fuel Strategy Weekly',
    datePublished: new Date('2024-03-10'),
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop'
  },
  {
    _id: '8',
    title: 'Sim Racing vs Reality: Brain Adaptation',
    content: `Simulators are now so advanced that young drivers arrive in F1 almost fully prepared. This phenomenon demonstrates the brain's incredible ability to learn from virtual inputs.

Health researchers are using similar VR tech to treat phobias and PTSD. "If a driver can learn a track they've never seen, a patient can 'unlearn' a fear response," says Dr. Wolff.

The line between the digital and physical is blurring. Does the brain know the difference between a virtual wall and a real one? The cortisol spikes suggest it doesn't—and that's a powerful tool for therapy.`,
    source: 'Virtual Apex',
    datePublished: new Date('2024-03-08'),
    imageUrl: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=1931&auto=format&fit=crop'
  }
]

export default mockArticles;
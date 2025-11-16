const workoutBlocks = [
  {
    title: 'Dynamic Warm-Up · 3 minutes',
    focus: 'Prime joints, raise heart rate, activate core.',
    items: [
      { name: 'Arm circles → cross swings', detail: '20 seconds each direction' },
      { name: 'March in place with high knees', detail: '60 seconds, add light torso twist' },
      { name: 'Bodyweight good mornings', detail: '60 seconds, hinge slowly to prep hamstrings/glutes' },
    ],
  },
  {
    title: 'Strength Circuit A · 6 minutes',
    focus: 'Push, pull, hinge. Alternate sides to keep flow.',
    items: [
      { name: 'Goblet squat', detail: '10 slow reps · heels rooted, core braced' },
      { name: 'Bent-over row', detail: '10 reps/side · hinge to 45°, squeeze shoulder blade' },
      { name: 'Half-kneeling overhead press', detail: '8 reps/side · drive from ribcage stacked over hips' },
    ],
    note: 'Cycle continuously for 3 rounds. Rest 20 seconds as needed between moves.',
  },
  {
    title: 'Strength Circuit B · 5 minutes',
    focus: 'Posterior chain, unilateral control, core finish.',
    items: [
      { name: 'Romanian deadlift to shrug', detail: '12 reps · 2-second lower, finish with tall posture' },
      { name: 'Reverse lunge with curl', detail: '8 reps/side · step back, curl at bottom, drive through front heel' },
      { name: 'Plank dumbbell drag', detail: '10 drags/side · keep hips level while sliding bell across' },
    ],
    note: 'Move deliberately for 2 rounds. Rest 30 seconds between rounds if heart rate spikes.',
  },
  {
    title: 'Cooldown Reset · 1 minute',
    focus: 'Bring heart rate down, reinforce posture.',
    items: [
      { name: 'Forward fold hang', detail: '30 seconds · let dumbbells pull gently toward floor' },
      { name: 'Thoracic open book', detail: '30 seconds/side · lie on side, sweep top arm wide' },
    ],
  },
];

const weeklyFlow = [
  {
    title: 'Day 1 — Foundation',
    detail: 'Run the full 15-minute session as listed above. Focus on clean form and moderate tempo.',
  },
  {
    title: 'Day 2 — Power focus',
    detail: 'During Circuit A presses and squats, drive up faster; control the descent. Add 5 extra rows each round.',
  },
  {
    title: 'Day 3 — Tempo focus',
    detail: 'Slow eccentrics: 3-second lower on goblet squats and RDLs. Hold the top of curls for 2 seconds.',
  },
  {
    title: 'Day 4 — Capacity focus',
    detail: 'Trim rest to 10 seconds, keep pace light. Swap plank drags for 30-second hollow hold if wrists fatigue.',
  },
  {
    title: 'Day 5 — Optional reload',
    detail: 'If energy dips, run only Warm-Up + one circuit. Otherwise, combine Circuits A and B for a 2-round mashup.',
  },
];

const progressionTips = [
  'Track total rounds each session. When you consistently hit all rounds with 15 seconds to spare, add 2 reps to every move.',
  'On days you miss, roll the plan forward—avoid “make-up” marathons. Consistency beats volume.',
  'Use a metronome or playlist with 60-70 BPM to anchor tempo and prevent rushing.',
  'Every 4th week, switch the order of circuits to keep stimulus fresh without changing exercises.',
  'Elevate front foot on reverse lunges using a book or step to deepen range without needing heavier weights.',
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>15-Minute Dumbbell Blueprint</h1>
          <p className="tagline">
            Full-body plan engineered for a pair of 5&nbsp;kg dumbbells, minimal space, and consistency that ebbs and flows.
          </p>
          <div className="meta-grid">
            <div>
              <span className="meta-label">Goal</span>
              <p>Lean muscle, strength balance, aesthetic symmetry</p>
            </div>
            <div>
              <span className="meta-label">Equipment</span>
              <p>Two 5 kg PVC dumbbells + floor space</p>
            </div>
            <div>
              <span className="meta-label">Time</span>
              <p>15 minutes per session · flexible frequency</p>
            </div>
          </div>
        </div>
      </section>

      <section className="workout">
        <div className="container">
          <h2>Daily Session Flow</h2>
          <p className="section-intro">
            Move sequentially through each block. Circuits are AMRAP-style: complete the listed rounds while keeping perfect form.
          </p>
          <div className="workout-grid">
            {workoutBlocks.map((block) => (
              <article key={block.title} className="card">
                <header>
                  <h3>{block.title}</h3>
                  <p>{block.focus}</p>
                </header>
                <ul>
                  {block.items.map((item) => (
                    <li key={item.name}>
                      <span className="move-name">{item.name}</span>
                      <span className="move-detail">{item.detail}</span>
                    </li>
                  ))}
                </ul>
                {block.note && <p className="note">{block.note}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="weekly">
        <div className="container">
          <h2>Weekly Rhythm (Choose 3-5 Days)</h2>
          <p className="section-intro">
            Rotate these emphasis tweaks across the week. Missed days? Just continue with the next focus—no double sessions needed.
          </p>
          <div className="timeline">
            {weeklyFlow.map((day) => (
              <div key={day.title} className="timeline-item">
                <h4>{day.title}</h4>
                <p>{day.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="progression">
        <div className="container">
          <h2>Progression & Recovery Guardrails</h2>
          <ul className="tips">
            {progressionTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>Hydrate before you start, breathe through the effort, and log each session to celebrate progress.</p>
        </div>
      </footer>
    </main>
  );
}

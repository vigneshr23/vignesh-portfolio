export default function Planner() {
  return (
  <>

<h1>SDE-3 / Architect — 36-Week Deep Mastery Plan</h1>
<p className="sub">Quality over speed · Engagement and consistency over variety · Measurable gates every 4 weeks</p>

{/* Stats */}
<div className="g4">
  <div className="card stat"><div className="snum">36</div><div className="slbl">Weeks total</div></div>
  <div className="card stat"><div className="snum">486</div><div className="slbl">Total hours</div></div>
  <div className="card stat"><div className="snum">60</div><div className="slbl">DSA problems</div></div>
  <div className="card stat"><div className="snum">13.5</div><div className="slbl">hrs / week</div></div>
</div>

{/* 36-Week Visual Grid */}
<div className="card" style={{marginBottom:'14px'}}>
  <h2>36-Week Roadmap</h2>
  <div className="phases">
    <div className="ph"><div className="phd" style={{background:'#94a3b8'}}></div>Foundation (1–4)</div>
    <div className="ph"><div className="phd" style={{background:'#3b82f6'}}></div>DSA Depth (5–16)</div>
    <div className="ph"><div className="phd" style={{background:'#8b5cf6'}}></div>LLD Mastery (17–24)</div>
    <div className="ph"><div className="phd" style={{background:'#ef4444'}}></div>HLD Mastery (25–32)</div>
    <div className="ph"><div className="phd" style={{background:'#10b981'}}></div>Consolidation (33–36)</div>
    <div className="ph"><div className="phd" style={{background:'#f59e0b',borderRadius:'50%'}}></div>Gate checkpoint</div>
  </div>
  <div className="wgrid">
    {/* Foundation: weeks 1-4 */}
    <div className="wseg" style={{background:'#e2e8f0',color:'#475569'}}>W1<div className="wlbl">Arrays</div></div>
    <div className="wseg" style={{background:'#e2e8f0',color:'#475569'}}>W2<div className="wlbl">Sorting+2P</div></div>
    <div className="wseg" style={{background:'#e2e8f0',color:'#475569'}}>W3<div className="wlbl">Sliding Win</div></div>
    <div className="wseg" style={{background:'#f59e0b',color:'#fff'}}>W4<div className="wlbl">★ Checkpoint</div></div>
    {/* DSA: weeks 5-16 */}
    <div className="wseg" style={{background:'#93c5fd',color:'#1e3a8a'}}>W5<div className="wlbl">Trees DFS</div></div>
    <div className="wseg" style={{background:'#93c5fd',color:'#1e3a8a'}}>W6<div className="wlbl">Trees hard</div></div>
    <div className="wseg" style={{background:'#93c5fd',color:'#1e3a8a'}}>W7<div className="wlbl">DP 1D</div></div>
    <div className="wseg" style={{background:'#93c5fd',color:'#1e3a8a'}}>W8<div className="wlbl">DP 2D</div></div>
    <div className="wseg" style={{background:'#60a5fa',color:'#1e3a8a'}}>W9<div className="wlbl">Graphs BFS</div></div>
  </div>
  <div className="wgrid">
    <div className="wseg" style={{background:'#60a5fa',color:'#1e3a8a'}}>W10<div className="wlbl">Graphs Topo</div></div>
    <div className="wseg" style={{background:'#60a5fa',color:'#1e3a8a'}}>W11<div className="wlbl">Bin Search</div></div>
    <div className="wseg" style={{background:'#60a5fa',color:'#1e3a8a'}}>W12<div className="wlbl">BS Answer</div></div>
    <div className="wseg" style={{background:'#3b82f6',color:'#fff'}}>W13<div className="wlbl">Heaps</div></div>
    <div className="wseg" style={{background:'#3b82f6',color:'#fff'}}>W14<div className="wlbl">Backtrack</div></div>
    <div className="wseg" style={{background:'#3b82f6',color:'#fff'}}>W15<div className="wlbl">Consolidate</div></div>
    <div className="wseg" style={{background:'#f59e0b',color:'#fff'}}>W16<div className="wlbl">★ GATE 1</div></div>
    {/* LLD: weeks 17-24 */}
    <div className="wseg" style={{background:'#c4b5fd',color:'#3b0764'}}>W17<div className="wlbl">SOLID</div></div>
    <div className="wseg" style={{background:'#c4b5fd',color:'#3b0764'}}>W18<div className="wlbl">Patterns</div></div>
  </div>
  <div className="wgrid">
    <div className="wseg" style={{background:'#a78bfa',color:'#3b0764'}}>W19<div className="wlbl">LLD Mocks</div></div>
    <div className="wseg" style={{background:'#f59e0b',color:'#fff'}}>W20<div className="wlbl">★ Checkpoint</div></div>
    <div className="wseg" style={{background:'#a78bfa',color:'#3b0764'}}>W21<div className="wlbl">Linked List</div></div>
    <div className="wseg" style={{background:'#a78bfa',color:'#3b0764'}}>W22<div className="wlbl">Stack+Queue</div></div>
    <div className="wseg" style={{background:'#8b5cf6',color:'#fff'}}>W23<div className="wlbl">Tries+UF</div></div>
    <div className="wseg" style={{background:'#f59e0b',color:'#fff'}}>W24<div className="wlbl">★ Checkpoint</div></div>
    {/* HLD: weeks 25-32 */}
    <div className="wseg" style={{background:'#fca5a5',color:'#7f1d1d'}}>W25<div className="wlbl">Caching</div></div>
    <div className="wseg" style={{background:'#fca5a5',color:'#7f1d1d'}}>W26<div className="wlbl">CAP+Consist</div></div>
    <div className="wseg" style={{background:'#fca5a5',color:'#7f1d1d'}}>W27<div className="wlbl">DB+Queues</div></div>
  </div>
  <div className="wgrid" style={{gridTemplateColumns:'repeat(9,1fr)'}}>
    <div className="wseg" style={{background:'#f87171',color:'#7f1d1d'}}>W28<div className="wlbl">Messenger</div></div>
    <div className="wseg" style={{background:'#f87171',color:'#7f1d1d'}}>W29<div className="wlbl">News Feed</div></div>
    <div className="wseg" style={{background:'#f87171',color:'#7f1d1d'}}>W30<div className="wlbl">Typeahead</div></div>
    <div className="wseg" style={{background:'#ef4444',color:'#fff'}}>W31<div className="wlbl">Uber</div></div>
    <div className="wseg" style={{background:'#f59e0b',color:'#fff'}}>W32<div className="wlbl">★ GATE 2</div></div>
    {/* Consolidation: weeks 33-36 */}
    <div className="wseg" style={{background:'#6ee7b7',color:'#064e3b'}}>W33<div className="wlbl">Mock Grind</div></div>
    <div className="wseg" style={{background:'#6ee7b7',color:'#064e3b'}}>W34<div className="wlbl">Cos Specific</div></div>
    <div className="wseg" style={{background:'#10b981',color:'#fff'}}>W35<div className="wlbl">Behavioral</div></div>
    <div className="wseg" style={{background:'#059669',color:'#fff'}}>W36<div className="wlbl">🎯 Offers</div></div>
  </div>
</div>

{/* Milestones */}
<div className="card" style={{marginBottom:'14px'}}>
  <h2>4-Week Milestone Gates</h2>
  <div className="mstone">
    <div className="mwk" style={{background:'#6b7280'}}>Week 4</div>
    <div className="mcard" style={{borderLeftColor:'#6b7280'}}>
      <div className="mtitle">Foundation Checkpoint</div>
      <div className="mtext">25 problems solved. TC/SC stated for all without prompting. Two pointer template + sliding window template written from memory. LLD vocabulary introduced.</div>
      <div className="mco" style={{color:'#6b7280'}}>▸ Companies: None yet. Build the habit.</div>
    </div>
  </div>
  <div className="mstone">
    <div className="mwk" style={{background:'#3b82f6'}}>Week 16</div>
    <div className="mcard" style={{borderLeftColor:'#3b82f6'}}>
      <div className="mtitle">🎯 GATE 1 — First Interviews</div>
      <div className="mtext">DSA: Medium problems in &lt;22 min, 7 patterns fluent. LLD: 3 systems designed cold. HLD: Vocabulary fluent, can answer "what is eventual consistency?" with substance.</div>
      <div className="mco" style={{color:'#3b82f6'}}>▸ Companies: Series B–C startups, Indian IT with product roles, smaller product cos.</div>
    </div>
  </div>
  <div className="mstone">
    <div className="mwk" style={{background:'#8b5cf6'}}>Week 20</div>
    <div className="mcard" style={{borderLeftColor:'#8b5cf6'}}>
      <div className="mtitle">LLD Mastery Checkpoint</div>
      <div className="mtext">All 6 LLD systems: verbal in 10 min, code in 35 min, SOLID audit passed. Design patterns identified and justified for all systems.</div>
      <div className="mco" style={{color:'#8b5cf6'}}>▸ Companies: Apply to Tier 2 Indian product (Flipkart, Razorpay).</div>
    </div>
  </div>
  <div className="mstone">
    <div className="mwk" style={{background:'#ef4444'}}>Week 32</div>
    <div className="mcard" style={{borderLeftColor:'#ef4444'}}>
      <div className="mtitle">🎯 GATE 2 — Rock Solid</div>
      <div className="mtext">Hard DSA solved. New LLD system designed cold in 60 min. Full HLD with trade-off discussions (WhatsApp, Uber, YouTube). Capacity estimation in &lt;3 min.</div>
      <div className="mco" style={{color:'#ef4444'}}>▸ Companies: FAANG, Stripe, Airbnb, Uber — all Tier 1.</div>
    </div>
  </div>
  <div className="mstone" style={{marginBottom:'0'}}>
    <div className="mwk" style={{background:'#10b981'}}>Week 36</div>
    <div className="mcard" style={{borderLeftColor:'#10b981'}}>
      <div className="mtitle">Competing Offers</div>
      <div className="mtext">3 pipeline simulations/week. Company-specific prep. Behavioral stories rehearsed. All on-sites in same 2-week window for offer leverage.</div>
      <div className="mco" style={{color:'#10b981'}}>▸ Goal: competing offers → negotiate from strength.</div>
    </div>
  </div>
</div>

{/* Weekly schedule */}
<div className="card" style={{marginBottom:'14px'}}>
  <h2>Fixed Weekly Schedule (Same Every Week — 13.5 hrs)</h2>
  <div className="wsched">
    <div className="wday">
      <div className="wdname">Monday</div>
      <div className="wdtime">1.5</div>
      <div className="wdhrs">hours</div>
      <div className="wdact">DSA problem or concept reading</div>
      <div className="wdtype" style={{background:'#fef3c7',color:'#b45309'}}>Office</div>
    </div>
    <div className="wday">
      <div className="wdname">Tuesday</div>
      <div className="wdtime">2.5</div>
      <div className="wdhrs">hours</div>
      <div className="wdact">Core deep work: learning + 2 problems</div>
      <div className="wdtype" style={{background:'#dbeafe',color:'#1e40af'}}>WFH best</div>
    </div>
    <div className="wday">
      <div className="wdname">Wednesday</div>
      <div className="wdtime">1.5</div>
      <div className="wdhrs">hours</div>
      <div className="wdact">DSA problem or system sketch</div>
      <div className="wdtype" style={{background:'#fef3c7',color:'#b45309'}}>Office</div>
    </div>
    <div className="wday">
      <div className="wdname">Thursday</div>
      <div className="wdtime">2.5</div>
      <div className="wdhrs">hours</div>
      <div className="wdact">Core deep work: coding or design</div>
      <div className="wdtype" style={{background:'#dbeafe',color:'#1e40af'}}>WFH best</div>
    </div>
    <div className="wday">
      <div className="wdname">Friday</div>
      <div className="wdtime">1.0</div>
      <div className="wdhrs">hours</div>
      <div className="wdact">Review, document, teach-back writing</div>
      <div className="wdtype" style={{background:'#f1f3f5',color:'#555'}}>Light</div>
    </div>
    <div className="wday" style={{borderColor:'#10b981',background:'#f0fdf4'}}>
      <div className="wdname">Saturday</div>
      <div className="wdtime" style={{color:'#059669'}}>3.0</div>
      <div className="wdhrs">hours</div>
      <div className="wdact">Deep work: projects + mock drills</div>
      <div className="wdtype" style={{background:'#d1fae5',color:'#065f46'}}>Sacred 🔒</div>
    </div>
    <div className="wday">
      <div className="wdname">Sunday</div>
      <div className="wdtime">1.5</div>
      <div className="wdhrs">hours</div>
      <div className="wdact">Weak spot review + plan next week</div>
      <div className="wdtype" style={{background:'#ede9fe',color:'#5b21b6'}}>Reflect</div>
    </div>
  </div>
</div>

{/* 3-Touch Learning Loop */}
<div className="card" style={{marginBottom:'14px'}}>
  <h2>The 3-Touch Learning Loop (Every Topic)</h2>
  <div className="loop">
    <div className="lbox" style={{borderLeft:'3px solid #3b82f6'}}>
      <div className="lnum">1</div>
      <div className="ltitle">UNDERSTAND</div>
      <div className="lsub">Read the concept. Draw it. Explain it to yourself. <strong>Don&apos;t solve problems yet.</strong> Just internalize the model. 45–60 min.<br/><br/>Goal: you can describe the pattern without looking at any code.</div>
    </div>
    <div className="lbox" style={{borderLeft:'3px solid #8b5cf6'}}>
      <div className="lnum">2</div>
      <div className="ltitle">APPLY</div>
      <div className="lsub">Solve 6–8 problems: Easy → Medium → Hard. For each: identify why the pattern applies <strong>before touching code</strong>. Write brute force first. State complexity before verifying.<br/><br/>Goal: fluency in applying, not just recognizing.</div>
    </div>
    <div className="lbox" style={{borderLeft:'3px solid #10b981'}}>
      <div className="lnum">3</div>
      <div className="ltitle">TEACH</div>
      <div className="lsub">Week B, Day 1: write a 1-page explanation as if teaching a junior. Then solve 2 more problems from the same pattern without prep.<br/><br/>Goal: retrieval, not recognition. Retrieval is what happens in an interview.</div>
    </div>
  </div>
  <div style={{background:'#fef9ec',borderRadius:'8px',padding:'12px',fontSize:'11px',color:'#555',borderLeft:'3px solid #f59e0b'}}>
    <strong>Why this beats &quot;solve 50 problems then move on&quot;:</strong> Recognition fools you into thinking you&apos;ve mastered something. You see a problem and think &quot;oh, sliding window&quot; — but in an interview you&apos;ll see a novel framing of the same pattern and draw a blank. Retrieval (recreating the explanation from scratch) builds the mental pathway that survives interview pressure.
  </div>
</div>

{/* Gate 1 + Gate 2 */}
<div className="g2" style={{marginBottom:'14px'}}>
  <div className="gate gG1">
    <div className="gtitle" style={{color:'#065f46'}}>🎯 Gate 1 — Week 16 Assessment</div>
    <div className="gcrit">
      <strong>Round 1 — DSA (45 min):</strong><br/>
      Problem 1: Easy variant (10 min)<br/>
      Problem 2: Medium tree/array (20 min)<br/>
      Problem 3: Binary search on answer (25 min)<br/>
      Threshold: 2/3 solved with TC stated<br/><br/>

      <strong>Round 2 — LLD (45 min):</strong><br/>
      &quot;Design a Vending Machine&quot; — new system<br/>
      Threshold: Class hierarchy + 1 pattern + core flow<br/><br/>

      <strong>Round 3 — HLD Vocabulary (30 min):</strong><br/>
      What is eventual consistency? (with example)<br/>
      What would you cache in a social media app?<br/>
      SQL vs NoSQL — when do you choose each?<br/>
      Threshold: 3/3 answered with specifics, not generalities
    </div>
  </div>
  <div className="gate gG2">
    <div className="gtitle" style={{color:'#1e40af'}}>🎯 Gate 2 — Week 32 Assessment (Rock Solid)</div>
    <div className="gcrit">
      <strong>Round 1 — DSA Hard (50 min):</strong><br/>
      2 Hard problems (DP + Graph or Heap)<br/>
      Threshold: Both solved, 1 optimization discussed<br/><br/>

      <strong>Round 2 — LLD New System (60 min):</strong><br/>
      &quot;Design a Food Ordering System (Swiggy)&quot;<br/>
      Threshold: SOLID-compliant, 3 patterns, concurrency, extensibility demo<br/><br/>

      <strong>Round 3 — HLD Full (50 min):</strong><br/>
      &quot;Design WhatsApp&quot; — 6-step framework<br/>
      Threshold: Capacity estimate, 3 component deep dives,<br/>
      3 trade-offs with &quot;I chose X because Y, trade-off is Z&quot; format
    </div>
  </div>
</div>

{/* LLD 6 Systems + SOLID */}
<div className="g2" style={{marginBottom:'14px'}}>
  <div className="card">
    <h2>6 LLD Systems — Design Calendar</h2>
    <table>
      <thead><tr><th>System</th><th>Weeks</th><th>Patterns</th><th>Critical Skill</th></tr></thead>
      <tbody>
        <tr><td><strong>Parking Lot</strong></td><td>W5–6</td><td><span className="b bB">Factory</span> <span className="b bG">Strategy</span></td><td>Vehicle hierarchy + pricing</td></tr>
        <tr><td><strong>Splitwise</strong></td><td>W7–8</td><td><span className="b bP">Observer</span> <span className="b bA">Greedy</span></td><td>Settlement algorithm</td></tr>
        <tr><td><strong>Elevator ⚠</strong></td><td>W9–10</td><td><span className="b bR">State Machine</span></td><td>State transitions + SCAN dispatch</td></tr>
        <tr><td><strong>BookMyShow</strong></td><td>W11–12</td><td><span className="b bB">Strategy</span> <span className="b bA">Optimistic Lock</span></td><td>Concurrent seat booking</td></tr>
        <tr><td><strong>Chess / ATM</strong></td><td>W13–14</td><td><span className="b bB">Factory</span> <span className="b bP">Command</span></td><td>Move validation + undo/redo</td></tr>
        <tr><td><strong>Notification Sys ⚠</strong></td><td>W17–18</td><td><span className="b bP">Observer</span> <span className="b bG">Strategy</span></td><td>OCP test: add channel without changing existing</td></tr>
      </tbody>
    </table>
    <p style={{fontSize:'10px',color:'#888',marginTop:'6px'}}>⚠ Not covered in Scaler Applied Design — prepare independently</p>
  </div>

  <div className="card">
    <h2>SOLID — Your React Translation</h2>
    <table>
      <thead><tr><th>Principle</th><th>React You Know</th><th>LLD Application</th></tr></thead>
      <tbody>
        <tr><td><span className="b bR">SRP</span></td><td>Component = UI, not data</td><td>UserService ≠ EmailService</td></tr>
        <tr><td><span className="b bB">OCP</span></td><td>HOC extends without editing</td><td>Add Stripe without touching processor</td></tr>
        <tr><td><span className="b bG">LSP</span></td><td>ReadonlyInput has same API</td><td>Square extending Rectangle breaks LSP</td></tr>
        <tr><td><span className="b bA">ISP</span></td><td>useFetch ≠ useAuth (separate)</td><td>IReadable ≠ IWritable ≠ ISearchable</td></tr>
        <tr><td><span className="b bP">DIP</span></td><td>React → JSX, not raw DOM</td><td>Depend on IPayment, not Stripe className</td></tr>
      </tbody>
    </table>
    <div style={{marginTop:'12px'}}>
      <h3>LLD Interview Rubric (Quick Self-Grade)</h3>
      <table style={{marginTop:'6px'}}>
        <thead><tr><th>Dimension</th><th>Fail (1)</th><th>Hire (3)</th><th>Strong (4)</th></tr></thead>
        <tbody>
          <tr><td>Requirements</td><td>Jumps to code</td><td>4–5 scoped questions</td><td>Scope + constraints + edge cases</td></tr>
          <tr><td>Class hierarchy</td><td>God className</td><td>Clean entities + inheritance</td><td>SOLID-compliant</td></tr>
          <tr><td>Patterns</td><td>None</td><td>2+ justified</td><td>Emerge from requirements</td></tr>
          <tr><td>Concurrency</td><td>Ignored</td><td>Handled in design</td><td>Demonstrated in code</td></tr>
          <tr><td>Extensibility</td><td>&quot;Would rewrite&quot;</td><td>Shows exact change</td><td>OCP in real code</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

{/* 8 HLD Systems */}
<div className="card" style={{marginBottom:'14px'}}>
  <h2>8 HLD Case Studies + Core Trade-Offs</h2>
  <table>
    <thead><tr><th>System</th><th>Weeks</th><th>Unique Challenge</th><th>DB Choice</th><th>The Trade-Off to Articulate</th></tr></thead>
    <tbody>
      <tr><td><strong>URL Shortener</strong></td><td>25</td><td>Redirect latency + key generation</td><td>MySQL</td><td>Custom slugs → can&apos;t hash, must check uniqueness</td></tr>
      <tr><td><strong>Rate Limiter</strong></td><td>26</td><td>Distributed state for token bucket</td><td>Redis</td><td>Global rate limit → sync cost vs per-node → inaccurate</td></tr>
      <tr><td><strong>Messenger</strong></td><td>28</td><td>Real-time delivery + offline queue</td><td>Cassandra</td><td>Push (low latency) vs pull (simpler, higher latency)</td></tr>
      <tr><td><strong>News Feed</strong></td><td>29</td><td>Fan-out at 10M follower scale</td><td>Cassandra + Redis</td><td>Fan-out-on-write (fast read, slow write) vs read (inverse)</td></tr>
      <tr><td><strong>Typeahead</strong></td><td>30</td><td>Sub-100ms prefix matching at edge</td><td>In-memory Trie</td><td>Real-time trie updates vs hourly batch (staleness)</td></tr>
      <tr><td><strong>Uber</strong></td><td>31</td><td>Geo-matching at millisecond latency</td><td>Redis GEOADD</td><td>QuadTree vs S2 cells vs geohash for precision</td></tr>
      <tr><td><strong>YouTube</strong></td><td>32</td><td>Transcoding pipeline + CDN delivery</td><td>S3 + CDN</td><td>Hot vs cold storage; adaptive bitrate trade-offs</td></tr>
      <tr><td><strong>E-Commerce</strong></td><td>27</td><td>Inventory reservation + payment</td><td>PostgreSQL</td><td>2-phase commit vs saga for distributed transactions</td></tr>
    </tbody>
  </table>
</div>

{/* 3 Projects */}
<div className="card" style={{marginBottom:'14px'}}>
  <h2>3 Portfolio Projects — Built Incrementally Over 36 Weeks</h2>
  <div className="g3">
    <div className="proj">
      <span className="pmonth" style={{background:'#dbeafe',color:'#1e40af'}}>Weeks 1–8 · Month 1–2</span>
      <div className="ptitle">Consistent Hashing Ring</div>
      <div className="pwhy">&quot;When I removed one node, 50% of keys redistributed. Adding 150 virtual nodes per real node brought that to &lt;5%.&quot; — That insight only comes from building it.</div>
      <div className="pcode">addNode(id, weight = 150)<br/>removeNode(id)<br/>getNodeForKey(key) → nodeId<br/>getReplicationNodes(key, n)<br/>getLoadDistribution() → Map<br/>─────────────<br/>README: why virtual nodes matter</div>
    </div>
    <div className="proj">
      <span className="pmonth" style={{background:'#ede9fe',color:'#5b21b6'}}>Weeks 9–20 · Month 3–5</span>
      <div className="ptitle">Rate Limiter (LLD → HLD Bridge)</div>
      <div className="pwhy">Same artifact in two contexts: LLD (className hierarchy, Strategy, Decorator, thread safety) and HLD (distributed Redis-backed token bucket). Rare portfolio piece.</div>
      <div className="pcode">IRateLimiter.isAllowed(user, action)<br/>TokenBucketRateLimiter (thread-safe)<br/>SlidingWindowRateLimiter<br/>RateLimiterFactory (config-based)<br/>RateLimitedService (Decorator)<br/>─────────────<br/>README: distributed extension design</div>
    </div>
    <div className="proj">
      <span className="pmonth" style={{background:'#d1fae5',color:'#065f46'}}>Weeks 21–36 · Month 6–9</span>
      <div className="ptitle">Mini Redis (LRU + TTL + TCP)</div>
      <div className="pwhy">&quot;LRU from scratch taught me why Redis uses a linked hashmap — O(1) insert, delete, and ordering simultaneously. That made cache invalidation trade-offs tangible, not abstract.&quot;</div>
      <div className="pcode">GET / SET / DEL / EXPIRE / TTL<br/>HSET / HGET (hash type)<br/>LPUSH / LPOP (list type)<br/>LRU eviction (linked hashmap)<br/>TCP server + string commands<br/>─────────────<br/>Persistence snapshot (bonus)</div>
    </div>
  </div>
</div>

{/* Consistency system */}
<div className="card" style={{marginBottom:'14px'}}>
  <h2>The Consistency System — 36 Weeks is Won or Lost Here</h2>
  <div className="g3">
    <div className="law">
      <div className="lawN">1</div>
      <div className="lawT">Never miss twice in a row</div>
      <div className="lawS">One missed day = life happens. Two consecutive missed days = a streak dying. Recovery: cut next session in half and do it immediately.</div>
    </div>
    <div className="law">
      <div className="lawN">2</div>
      <div className="lawT">The teach-back is the test</div>
      <div className="lawS">Every 2 weeks: write 1 page explaining the past topic as if teaching a junior. If you can&apos;t do this, you recognized the pattern — you didn&apos;t learn it.</div>
    </div>
    <div className="law">
      <div className="lawN">3</div>
      <div className="lawT">Saturday is sacred</div>
      <div className="lawS">The 3-hour Saturday block is where mocks happen, projects advance, and depth compounds. It is the only block that cannot be rescheduled or compressed.</div>
    </div>
  </div>
  <div style={{background:'#f5f6fa',borderRadius:'8px',padding:'12px',marginTop:'10px'}}>
    <h3 style={{marginBottom:'8px'}}>Weekly Ritual (2 minutes, every Sunday)</h3>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px',fontSize:'11px'}}>
      <div>
        <strong>Sunday planning (write these 3 things):</strong><br/>
        1. What I&apos;m learning this week (1 sentence/day)<br/>
        2. The 1 problem I will not skip<br/>
        3. How I&apos;ll know I improved
      </div>
      <div>
        <strong>Friday review (write these 3 things):</strong><br/>
        1. What did I internalize this week?<br/>
        2. What is my weakest point right now?<br/>
        3. What carries into next week?
      </div>
    </div>
  </div>
</div>

{/* DSA Pattern Triggers */}
<div className="card" style={{marginBottom:'14px'}}>
  <h2>Pattern Recognition Triggers — All 12 Patterns</h2>
  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'6px'}}>
    <table className="ptab">
      <thead><tr><th>Trigger in Problem</th><th>Pattern</th></tr></thead>
      <tbody>
        <tr><td>&quot;contiguous subarray&quot; + sum/product/length condition</td><td><span className="b bP">Sliding Window</span></td></tr>
        <tr><td>Two elements from sorted input</td><td><span className="b bB">Two Pointers</span></td></tr>
        <tr><td>&quot;find if pair exists&quot; &quot;complement lookup&quot;</td><td><span className="b bG">HashMap</span></td></tr>
        <tr><td>&quot;range sum&quot; &quot;prefix sum&quot; &quot;cumulative&quot;</td><td><span className="b bG">Prefix Sum</span></td></tr>
        <tr><td>&quot;path in tree&quot; &quot;max path&quot; &quot;sum of path&quot;</td><td><span className="b bA">DFS post-order</span></td></tr>
        <tr><td>&quot;level&quot; &quot;shortest path in unweighted&quot; &quot;min steps&quot;</td><td><span className="b bB">BFS</span></td></tr>
      </tbody>
    </table>
    <table className="ptab">
      <thead><tr><th>Trigger in Problem</th><th>Pattern</th></tr></thead>
      <tbody>
        <tr><td>&quot;dependencies&quot; &quot;prerequisites&quot; &quot;ordering&quot;</td><td><span className="b bA">Topological Sort</span></td></tr>
        <tr><td>&quot;top K&quot; &quot;kth largest/smallest&quot; &quot;median stream&quot;</td><td><span className="b bR">Heap</span></td></tr>
        <tr><td>&quot;minimum X that satisfies condition Y&quot;</td><td><span className="b bP">BS on Answer</span></td></tr>
        <tr><td>&quot;all combinations&quot; &quot;all permutations&quot; &quot;generate all&quot;</td><td><span className="b bN">Backtracking</span></td></tr>
        <tr><td>&quot;count ways&quot; &quot;max value&quot; &quot;min cost&quot; + subproblems</td><td><span className="b bG">Dynamic Programming</span></td></tr>
        <tr><td>&quot;connected components&quot; &quot;cycle detection&quot; in graph</td><td><span className="b bB">Graph BFS/DFS</span></td></tr>
      </tbody>
    </table>
  </div>
</div>

{/* Scaler module priority */}
<div className="card" style={{marginBottom:'8px'}}>
  <h2>Scaler Module Priority — What to Use When</h2>
  <table>
    <thead><tr><th>Priority</th><th>Module</th><th>Use For (Weeks)</th><th>Coverage</th></tr></thead>
    <tbody>
      <tr><td><span className="b bR">P0</span></td><td>Advanced DSA: DP, Heaps & Graphs</td><td>Weeks 7–14</td><td>100% — every lecture</td></tr>
      <tr><td><span className="b bR">P0</span></td><td>Applied Design & Machine Coding</td><td>Weeks 5–14 (parallel)</td><td>100% — all 4 systems</td></tr>
      <tr><td><span className="b bR">P0</span></td><td>Distributed System Design</td><td>Weeks 25–32</td><td>100% — all case studies</td></tr>
      <tr><td><span className="b bR">P0</span></td><td>Design Principles & Patterns</td><td>Weeks 17–18</td><td>100%</td></tr>
      <tr><td><span className="b bA">P1</span></td><td>Mastering LastMile – Interview Simulation</td><td>Weeks 16, 24, 32</td><td>Use for gate assessments</td></tr>
      <tr><td><span className="b bA">P1</span></td><td>Advanced DSA: Linear & Non-Linear (Trees, BS)</td><td>Weeks 5–12</td><td>Trees + Binary Search lectures</td></tr>
      <tr><td><span className="b bB">P2</span></td><td>Databases & SQL</td><td>Weeks 27–28</td><td>Schema + Indexing + Transactions only</td></tr>
      <tr><td><span className="b bN">Skip</span></td><td>Fullstack (React, Next.js, Node.js)</td><td>—</td><td>Your existing strength</td></tr>
      <tr><td><span className="b bN">Skip</span></td><td>Agentic AI · Gen AI · FDE Lab</td><td>—</td><td>Not tested in SDE-3 interviews</td></tr>
    </tbody>
  </table>
</div>

<div style={{textAlign:'center',padding:'16px',fontSize:'11px',color:'#aaa'}}>
  SDE-3 36-Week Deep Mastery Plan · Quality over speed · 486 total hours · April 2025
</div>

  </>
  );
}
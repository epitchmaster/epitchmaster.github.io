/* ePitch Master — หน้า tactics.html: แผนการเล่น (19 แบบ) · Fluid Formation · Team Playstyle · Individual Instructions
   formations[].pos = [x%, y%, ตำแหน่ง] (y น้อย = ใกล้ประตูคู่แข่ง) · preset=false หมายถึงต้องสร้างเองด้วย Position Edit */
var EPM = window.EPM = window.EPM || {};

EPM.tactics = {
  intro: "แผนพรีเซ็ต 15 แบบ (My Team → Game Plan → เปลี่ยนแผน) และแผนที่สร้างเองจาก Position Edit อีก 4 แบบ · จุดบนสนามเป็นตำแหน่งตัวอย่าง ปรับได้เองในเกม",
  formations: [
    {
      name: "4-4-2",
      preset: true,
      backs: 4,
      tag: "คลาสสิก สองแถวสี่",
      pos: [
        [50, 92, "GK"],
        [14, 72, "LB"],
        [37, 77, "CB"],
        [63, 77, "CB"],
        [86, 72, "RB"],
        [14, 46, "LMF"],
        [38, 52, "CMF"],
        [62, 52, "CMF"],
        [86, 46, "RMF"],
        [38, 16, "CF"],
        [62, 16, "CF"]
      ],
      good: "สองแถวสี่คนตั้งรับแน่นและเข้าใจง่าย คู่หน้าช่วยกันกดดันแนวรับคู่แข่ง",
      bad: "กลางสนามเหลือแค่ 2 คน โดนทีมที่ใช้ 3 กองกลางหรือ AMF แทรกกลางได้ง่าย",
      fit: ["Long Ball Counter", "Long Ball", "Out Wide"],
      roles: [
        ["CF", "คู่ Target Man + Goal Poacher หรือ Deep-Lying Forward + Fox in the Box"],
        ["LMF/RMF", "Cross Specialist หรือ Roaming Flank"],
        ["CMF", "Box-to-Box หนึ่งคน + Orchestrator หรือ Destroyer อีกคน"],
        ["LB/RB", "Defensive Full-back ถ้าปีกขึ้นสูง"]
      ],
      instr: "ตัวอย่าง: CF หนึ่งคน Counter Target · CMF ตัวรับ Defensive",
      con: "ตามหลังให้กด D-pad ↑↑ ดันระดับเกมรุก แล้วเปิดครอสจากริมเส้น",
      mob: "ปั้นเกมริมเส้นแล้วครอสหาคู่หน้า — Touch & Flick ลากนิ้วไปที่ CF ที่ยืนว่างได้เลย",
      meta: ""
    },
    {
      name: "4-3-3",
      preset: true,
      backs: 4,
      tag: "สมดุล / กว้าง",
      pos: [
        [50, 92, "GK"],
        [14, 72, "LB"],
        [37, 77, "CB"],
        [63, 77, "CB"],
        [86, 72, "RB"],
        [50, 60, "DMF"],
        [30, 48, "CMF"],
        [70, 48, "CMF"],
        [16, 22, "LWF"],
        [50, 15, "CF"],
        [84, 22, "RWF"]
      ],
      good: "ปีกกว้างยืดแนวรับ กองกลาง 3 คนคุมพื้นที่กลางได้ดี — efootballlab แนะนำคู่กับ Overload",
      bad: "ถ้าแบ็กขึ้นเกม ด้านข้างโล่งง่ายตอนโดนสวน",
      fit: ["Overload", "Possession Game", "Out Wide", "Quick Counter"],
      roles: [
        ["CF", "Goal Poacher หรือ Deep-Lying Forward"],
        ["LWF/RWF", "Prolific Winger (ตัดเข้าในยิง) หรือ Roaming Flank"],
        ["CMF", "Box-to-Box + Orchestrator"],
        ["DMF", "Anchor Man หรือ Destroyer"]
      ],
      instr: "ตัวอย่าง: DMF Defensive · CF Anchoring",
      con: "ใช้ปีกเลี้ยงเข้าในแล้ว [R1] + [S] (Controlled Shot) ไปเสาไกล",
      mob: "สลับให้ปีกเลี้ยงตัดเข้ากลาง แล้วยิงโค้งเสาไกล — อย่าเลี้ยงยาวจนเสียบอล",
      meta: "Game8 (ก.ย. 2025) จัดรุ่น 4-3-3 แบบ 2CF+SS ไว้ Tier 1"
    },
    {
      name: "4-3-2-1",
      preset: true,
      backs: 4,
      tag: "ต้นคริสต์มาส",
      pos: [
        [50, 92, "GK"],
        [14, 72, "LB"],
        [37, 77, "CB"],
        [63, 77, "CB"],
        [86, 72, "RB"],
        [30, 52, "CMF"],
        [50, 58, "DMF"],
        [70, 52, "CMF"],
        [34, 30, "SS"],
        [66, 30, "SS"],
        [50, 14, "CF"]
      ],
      good: "แน่นตรงกลางมาก SS สองคนยืนในช่องระหว่างแนวรับกับกองกลางคู่แข่ง",
      bad: "ไม่มีปีกตามธรรมชาติ ความกว้างต้องมาจากแบ็ก",
      fit: ["Possession Game", "Quick Counter"],
      roles: [
        ["CF", "Deep-Lying Forward หรือ Goal Poacher"],
        ["SS", "Creative Playmaker หรือ Hole Player"],
        ["CMF/DMF", "Orchestrator + Box-to-Box + Anchor Man"],
        ["LB/RB", "Offensive Full-back อย่างน้อยหนึ่งฝั่ง"]
      ],
      instr: "ตัวอย่าง: DMF Defensive · CF Anchoring",
      con: "ต่อบอลสั้นผ่าน SS แล้วจ่ายทะลุ [T] ให้ CF เข้าหลังแนวรับ",
      mob: "ต่อบอลสั้นในพื้นที่แคบ — ใช้ Classic กดส่งเร็วๆ จะคุมจังหวะได้ดีกว่า",
      meta: ""
    },
    {
      name: "4-3-1-2",
      preset: true,
      backs: 4,
      tag: "เพชรครึ่งบน + คู่หน้า",
      pos: [
        [50, 92, "GK"],
        [14, 72, "LB"],
        [37, 77, "CB"],
        [63, 77, "CB"],
        [86, 72, "RB"],
        [30, 54, "CMF"],
        [50, 60, "DMF"],
        [70, 54, "CMF"],
        [50, 34, "AMF"],
        [38, 15, "CF"],
        [62, 15, "CF"]
      ],
      good: "AMF จ่ายบอลให้คู่หน้า มีตัวเลือกส่งบอลใจกลางเยอะ — Game8 จัดไว้ Tier 1",
      bad: "ริมเส้นโล่ง แบ็กต้องขึ้นช่วยความกว้าง",
      fit: ["Quick Counter", "Possession Game", "Long Ball Counter"],
      roles: [
        ["CF", "Goal Poacher + Deep-Lying Forward หรือ Dummy Runner"],
        ["AMF", "Classic No.10 หรือ Creative Playmaker"],
        ["CMF", "Box-to-Box สองคน"],
        ["DMF", "Anchor Man"]
      ],
      instr: "ตัวอย่าง: AMF Anchoring · DMF Defensive · CF หนึ่งคน Counter Target",
      con: "เมื่อ AMF รับบอลหันหน้าได้ ลอง [L1] + [T] ทะลุลอยข้ามแนวรับ",
      mob: "เมื่อ AMF ได้บอล ส่งทะลุให้คู่หน้าทันที อย่าเลี้ยงนาน",
      meta: "Game8 (ก.ย. 2025) จัดไว้ Tier 1"
    },
    {
      name: "4-2-3-1",
      preset: true,
      backs: 4,
      tag: "มั่นคงตรงกลาง (ฐานหลัก)",
      pos: [
        [50, 92, "GK"],
        [14, 72, "LB"],
        [37, 77, "CB"],
        [63, 77, "CB"],
        [86, 72, "RB"],
        [37, 58, "DMF"],
        [63, 58, "DMF"],
        [18, 36, "LMF"],
        [50, 36, "AMF"],
        [82, 36, "RMF"],
        [50, 14, "CF"]
      ],
      good: "DMF สองคนบังแผงหลัง AMF เป็นศูนย์กลางเกมรุก — efootballlab (ส.ค. 2026) ใช้เป็นแผนฐานหลังอัปเดต v6.0.0",
      bad: "CF ตัวเดียวอาจโดดเดี่ยวถ้าปีกไม่ดันขึ้น",
      fit: ["Quick Counter", "Long Ball Counter", "Possession Game"],
      roles: [
        ["CF", "Goal Poacher หรือ Target Man"],
        ["AMF", "Classic No.10 / Creative Playmaker"],
        ["LMF/RMF", "Roaming Flank หรือ Prolific Winger"],
        ["DMF", "Anchor Man + Orchestrator"]
      ],
      instr: "ตัวอย่าง: DMF ตัวหนึ่ง Defensive · AMF Anchoring",
      con: "ใช้ Fluid Formation: รุก 3-2-4-1 / รับ 4-2-3-1 ตามคำแนะนำของ efootballlab",
      mob: "ส่งให้ AMF แล้วหาจังหวะทะลุ — ถ้า CF โดนประกบ ใช้ปีกตัดเข้ายิงแทน",
      meta: "efootballlab: ฐาน 4-2-3-1 · Fluid รุก 3-2-4-1 / รับ 4-2-3-1"
    },
    {
      name: "4-2-1-3",
      preset: true,
      backs: 4,
      tag: "สวนกลับสามหอก",
      pos: [
        [50, 92, "GK"],
        [14, 72, "LB"],
        [37, 77, "CB"],
        [63, 77, "CB"],
        [86, 72, "RB"],
        [37, 58, "DMF"],
        [63, 58, "DMF"],
        [50, 38, "AMF"],
        [16, 20, "LWF"],
        [50, 14, "CF"],
        [84, 20, "RWF"]
      ],
      good: "สามหอกยืนสูงพร้อมสวน AMF ป้อนบอล DMF สองคนคุมหน้าแผงหลัง — efootballlab แนะนำคู่ Quick Counter",
      bad: "กองกลางตัวรุกมีแค่ AMF ถ้าโดนตัดเกมกลางจะขาดตัวเชื่อม",
      fit: ["Quick Counter", "Long Ball Counter"],
      roles: [
        ["CF", "Goal Poacher"],
        ["LWF/RWF", "Prolific Winger หรือ Roaming Flank"],
        ["AMF", "Hole Player หรือ Creative Playmaker"],
        ["DMF", "Anchor Man + Destroyer"]
      ],
      instr: "ReviByte (2026): AMF Anchoring · CF Counter Target · DMF Defensive",
      con: "แย่งบอลได้ให้เล่นตรงขึ้นหน้าเร็ว — [T] หาปีกที่วิ่งเข้าช่อง",
      mob: "แย่งบอลได้แล้วเปิดทะลุทันที ปีกเร็วจะได้เปรียบ",
      meta: "efootballlab: แนะนำสำหรับ Quick Counter · ReviByte 2026: ชุดคำสั่ง AMF/CF/DMF"
    },
    {
      name: "4-1-4-1",
      preset: true,
      backs: 4,
      tag: "แน่นกลาง ป้องกันดี",
      pos: [
        [50, 92, "GK"],
        [14, 72, "LB"],
        [37, 77, "CB"],
        [63, 77, "CB"],
        [86, 72, "RB"],
        [50, 62, "DMF"],
        [14, 42, "LMF"],
        [37, 46, "CMF"],
        [63, 46, "CMF"],
        [86, 42, "RMF"],
        [50, 14, "CF"]
      ],
      good: "แถวกลางห้าคนปิดพื้นที่ได้ดีมาก DMF ยืนคุมหน้าแนวรับ",
      bad: "CF เดี่ยว ต้องมีกองกลางวิ่งขึ้นช่วย ไม่งั้นเกมรุกทื่อ",
      fit: ["Long Ball Counter", "Possession Game"],
      roles: [
        ["CF", "Target Man หรือ Deep-Lying Forward"],
        ["CMF", "Box-to-Box สองคน"],
        ["LMF/RMF", "Roaming Flank / Cross Specialist"],
        ["DMF", "Anchor Man"]
      ],
      instr: "ตัวอย่าง: DMF Defensive · CF Counter Target ถ้าเน้นสวน",
      con: "นำอยู่ให้กด D-pad ↓↓ ลดระดับเกมรับ แล้วปิดพื้นที่กลาง",
      mob: "ตั้งรับแล้วส่งบอลยาวหา CF — ใช้ผู้เล่นตัวสูงเป็นเป้า",
      meta: "efootballlab: ระบุเป็นทางเลือก (ร่วมกับ 2-3-5 ใน Fluid Formation)"
    },
    {
      name: "4-1-2-3",
      preset: true,
      backs: 4,
      tag: "สมอเดี่ยว + ปีกสามตัว",
      pos: [
        [50, 92, "GK"],
        [14, 72, "LB"],
        [37, 77, "CB"],
        [63, 77, "CB"],
        [86, 72, "RB"],
        [50, 62, "DMF"],
        [32, 44, "CMF"],
        [68, 44, "CMF"],
        [16, 20, "LWF"],
        [50, 14, "CF"],
        [84, 20, "RWF"]
      ],
      good: "DMF ยืนคุมหน้าแผงหลัง CMF สองคนวิ่งเชื่อมเกม — Game8 จัดไว้ Tier 1",
      bad: "DMF ตัวเดียวต้องเก่งเกมรับและอ่านเกม ถ้าโดนดึงออกจะมีรูหน้าแนวรับ",
      fit: ["Possession Game", "Overload", "Out Wide"],
      roles: [["CF", "Goal Poacher / Fox in the Box"], ["LWF/RWF", "Prolific Winger"], ["CMF", "Box-to-Box + Hole Player"], ["DMF", "Anchor Man"]],
      instr: "ตัวอย่าง: DMF Defensive · CF Anchoring",
      con: "ใช้ [L2] + [LS] (Match-up) ให้ DMF ยืนบังหน้าแนวรับ อย่าพุ่งออกไปไกล",
      mob: "อย่าพา DMF ออกไปเพรสเอง ให้คอมฯ คุมตำแหน่งแทน",
      meta: "Game8 (ก.ย. 2025) จัดไว้ Tier 1"
    },
    {
      name: "3-4-3",
      preset: true,
      backs: 3,
      tag: "สามเซ็นเตอร์ / กดดันสูง",
      pos: [
        [50, 92, "GK"],
        [27, 76, "CB"],
        [50, 79, "CB"],
        [73, 76, "CB"],
        [10, 50, "LMF"],
        [38, 55, "CMF"],
        [62, 55, "CMF"],
        [90, 50, "RMF"],
        [22, 22, "LWF"],
        [50, 14, "CF"],
        [78, 22, "RWF"]
      ],
      good: "เพิ่มคนในแดนบน กดดันสูงได้ดี LMF/RMF ให้ความกว้าง — Game8 จัดรุ่น 3CF ไว้ Tier 1",
      bad: "ริมเส้นหลังโล่งถ้า LMF/RMF ขึ้นสูง ต้องการ CB ที่เร็ว",
      fit: ["Overload", "Quick Counter"],
      roles: [
        ["CF/LWF/RWF", "Goal Poacher ตรงกลาง + Prolific Winger สองข้าง"],
        ["LMF/RMF", "Roaming Flank หรือ Cross Specialist ที่สตามินาสูง"],
        ["CMF", "Box-to-Box + Destroyer"],
        ["CB", "Build Up อย่างน้อยหนึ่งคน"]
      ],
      instr: "ตัวอย่าง: CMF ตัวหนึ่ง Defensive",
      con: "เพรสด้วย [R1] (ตัวที่ 2 ช่วยเพรส) ในแดนคู่แข่ง แต่ระวังบอลยาวข้างหลัง",
      mob: "กดดันแดนบนแล้วสวนเร็ว — คอยดูริมเส้นหลังที่โล่ง",
      meta: "Game8 (ก.ย. 2025) จัดรุ่น 3-4-3 แบบ 3CF ไว้ Tier 1"
    },
    {
      name: "3-2-4-1",
      preset: true,
      backs: 3,
      tag: "บุกห้าตัว",
      pos: [
        [50, 92, "GK"],
        [27, 76, "CB"],
        [50, 79, "CB"],
        [73, 76, "CB"],
        [38, 60, "DMF"],
        [62, 60, "DMF"],
        [12, 40, "LMF"],
        [36, 32, "AMF"],
        [64, 32, "AMF"],
        [88, 40, "RMF"],
        [50, 13, "CF"]
      ],
      good: "คนในแดนบนเยอะ ใช้เป็นแผนตอนรุกของ Fluid Formation ได้ดี (efootballlab: รุก 3-2-4-1 / รับ 4-2-3-1)",
      bad: "ถ้าใช้เป็นแผนเดียว ตอนรับเหลือ CB สามคนกับ DMF สองคน ริมเส้นโล่งมาก",
      fit: ["Possession Game", "Overload"],
      roles: [
        ["CF", "Deep-Lying Forward หรือ Goal Poacher"],
        ["AMF", "Hole Player + Creative Playmaker"],
        ["LMF/RMF", "Roaming Flank"],
        ["DMF", "Anchor Man + Orchestrator"]
      ],
      instr: "ตัวอย่าง: DMF ทั้งคู่ Defensive เพื่อกันสวนกลับ",
      con: "เหมาะเป็นแผนตอนรุกใน Fluid Formation คู่กับแผนรับ 4 ตัวหลัง",
      mob: "ครองบอลแดนบนแล้วหาช่องจ่าย อย่าพาตัวรับขึ้นเกินครึ่งสนาม",
      meta: "efootballlab: ใช้เป็นแผนรุกใน Fluid Formation"
    },
    {
      name: "3-2-3-2",
      preset: true,
      backs: 3,
      tag: "คู่หน้า + AMF",
      pos: [
        [50, 92, "GK"],
        [27, 76, "CB"],
        [50, 79, "CB"],
        [73, 76, "CB"],
        [38, 60, "DMF"],
        [62, 60, "DMF"],
        [12, 40, "LMF"],
        [50, 36, "AMF"],
        [88, 40, "RMF"],
        [38, 15, "CF"],
        [62, 15, "CF"]
      ],
      good: "คู่หน้ากับ AMF สร้างสามเหลี่ยมกลางสนาม DMF สองคนบังหน้าแผงหลังสามคน",
      bad: "LMF/RMF ต้องวิ่งทั้งเกม ถ้าสตามินาหมด ริมเส้นจะโล่ง",
      fit: ["Quick Counter", "Possession Game"],
      roles: [
        ["CF", "Goal Poacher + Dummy Runner หรือ Deep-Lying Forward"],
        ["AMF", "Classic No.10"],
        ["LMF/RMF", "Roaming Flank"],
        ["DMF", "Anchor Man + Box-to-Box"]
      ],
      instr: "ตัวอย่าง: DMF ตัวหนึ่ง Defensive · CF หนึ่งคน Counter Target",
      con: "เจาะกลางด้วย 1-2 ([L1] + [X]) ระหว่าง AMF กับคู่หน้า",
      mob: "ต่อบอลสามเหลี่ยม AMF + คู่หน้า แล้วยิงจากหน้ากรอบ",
      meta: ""
    },
    {
      name: "3-1-4-2",
      preset: true,
      backs: 3,
      tag: "คุมกลาง + คู่หน้า (≈3-5-2)",
      pos: [
        [50, 92, "GK"],
        [27, 76, "CB"],
        [50, 79, "CB"],
        [73, 76, "CB"],
        [50, 62, "DMF"],
        [9, 42, "LMF"],
        [34, 48, "CMF"],
        [66, 48, "CMF"],
        [91, 42, "RMF"],
        [40, 15, "CF"],
        [62, 15, "CF"]
      ],
      good: "กลางสนามแน่นห้าคน คู่หน้าทำงานร่วมกัน — ใช้แทน 3-5-2 ที่ไม่มีในพรีเซ็ต",
      bad: "LMF/RMF ต้องวิ่งหนักทั้งรุกและรับ สตามินาสำคัญ",
      fit: ["Long Ball Counter", "Long Ball", "Possession Game"],
      roles: [
        ["CF", "Target Man + Goal Poacher"],
        ["LMF/RMF", "Roaming Flank / Cross Specialist"],
        ["CMF", "Box-to-Box + Orchestrator"],
        ["DMF", "Anchor Man"]
      ],
      instr: "ตัวอย่าง: DMF Defensive · CF หนึ่งคน Counter Target",
      con: "เปลี่ยนตัว LMF/RMF ช่วงนาทีที่ 60–70 เมื่อสตามินาลด",
      mob: "เปิดบอลยาวให้ Target Man แล้วให้อีกคนเก็บลูกสอง",
      meta: ""
    },
    {
      name: "5-3-2",
      preset: true,
      backs: 5,
      tag: "ตั้งรับลึก",
      pos: [
        [50, 92, "GK"],
        [9, 66, "LB"],
        [30, 76, "CB"],
        [50, 79, "CB"],
        [70, 76, "CB"],
        [91, 66, "RB"],
        [30, 50, "CMF"],
        [50, 56, "DMF"],
        [70, 50, "CMF"],
        [38, 16, "CF"],
        [62, 16, "CF"]
      ],
      good: "แนวหลังห้าคนปิดพื้นที่ในกรอบได้ดี ป้องกันบอลยาวและครอส",
      bad: "ครองบอลยาก ถ้าตามหลังจะเปลี่ยนเกมรุกลำบาก",
      fit: ["Long Ball Counter", "Long Ball"],
      roles: [
        ["CF", "Target Man + Goal Poacher"],
        ["CMF/DMF", "Destroyer + Box-to-Box + Anchor Man"],
        ["LB/RB", "Offensive Full-back (ต้องการวิ่งขึ้นเป็นความกว้าง)"],
        ["CB", "Build Up อย่างน้อยหนึ่งคน"]
      ],
      instr: "ตัวอย่าง: CF หนึ่งคน Counter Target · DMF Defensive",
      con: "ใช้ไว้ปิดเกมเมื่อนำ กด D-pad ↓↓ แล้วเล่นสวนเร็ว",
      mob: "ตั้งรับลึก แย่งได้แล้วส่งยาวหาคู่หน้าทันที",
      meta: ""
    },
    {
      name: "5-2-2-1",
      preset: true,
      backs: 5,
      tag: "ห้าหลัง + สองตัวต่ำกว่ากองหน้า",
      pos: [
        [50, 92, "GK"],
        [9, 66, "LB"],
        [30, 76, "CB"],
        [50, 79, "CB"],
        [70, 76, "CB"],
        [91, 66, "RB"],
        [38, 56, "DMF"],
        [62, 56, "DMF"],
        [33, 32, "SS"],
        [67, 32, "SS"],
        [50, 14, "CF"]
      ],
      good: "ห้าหลังแน่น SS สองคนช่วยทั้งเชื่อมเกมและเพรส",
      bad: "CF ต้องเก่งพอเล่นคนเดียว ริมเส้นแดนบนว่าง",
      fit: ["Long Ball Counter", "Quick Counter"],
      roles: [
        ["CF", "Goal Poacher หรือ Target Man"],
        ["SS", "Hole Player หรือ Creative Playmaker"],
        ["DMF", "Anchor Man + Box-to-Box"],
        ["LB/RB", "Offensive Full-back"]
      ],
      instr: "ตัวอย่าง: DMF Defensive · CF Counter Target",
      con: "แย่งบอลได้ ส่งหา SS ที่หันหน้าแล้วทะลุ [T] ให้ CF",
      mob: "รับแน่นแล้วส่งสั้นหา SS ก่อนเปิดทะลุ",
      meta: ""
    },
    {
      name: "5-2-1-2",
      preset: true,
      backs: 5,
      tag: "ห้าหลังรับแน่น + คู่หน้า",
      pos: [
        [50, 92, "GK"],
        [9, 66, "LB"],
        [30, 76, "CB"],
        [50, 79, "CB"],
        [70, 76, "CB"],
        [91, 66, "RB"],
        [38, 56, "DMF"],
        [62, 56, "DMF"],
        [50, 36, "AMF"],
        [38, 15, "CF"],
        [62, 15, "CF"]
      ],
      good: "efootballlab แนะนำเป็นแผนรับแน่น — ห้าหลังกับ DMF สองคนบังกลาง ยังมี AMF + คู่หน้าไว้สวน",
      bad: "ความกว้างตอนรุกพึ่งแบ็กสองข้างอย่างเดียว",
      fit: ["Long Ball Counter", "Quick Counter"],
      roles: [["CF", "Goal Poacher + Deep-Lying Forward"], ["AMF", "Classic No.10"], ["DMF", "Anchor Man + Destroyer"], ["LB/RB", "Offensive Full-back"]],
      instr: "ตัวอย่าง: AMF Anchoring · CF หนึ่งคน Counter Target",
      con: "เหมาะปิดเกม — Match-up ([L2] + [LS]) แล้วให้ CB ปิดช่องยิง",
      mob: "เน้นตั้งรับก่อน รอจังหวะส่งให้ AMF แล้วจ่ายต่อให้คู่หน้า",
      meta: "efootballlab: แนะนำเป็นแผนรับ"
    },
    {
      name: "4-2-2-2",
      preset: false,
      backs: 4,
      tag: "คู่หน้า + บุกเร็ว (Position Edit)",
      pos: [
        [50, 92, "GK"],
        [14, 72, "LB"],
        [37, 77, "CB"],
        [63, 77, "CB"],
        [86, 72, "RB"],
        [37, 58, "DMF"],
        [63, 58, "DMF"],
        [27, 36, "AMF"],
        [73, 36, "AMF"],
        [38, 15, "CF"],
        [62, 15, "CF"]
      ],
      good: "กองหน้า 2 + AMF 2 สร้างตัวเลือกส่งเยอะใจกลางสนาม — Game8 Tier 1 และ efootballlab แนะนำคู่ Long Ball Counter",
      bad: "ความกว้างมาจากแบ็กเป็นหลัก ริมเส้นเสี่ยงโดนเจาะ",
      fit: ["Long Ball Counter", "Quick Counter"],
      roles: [
        ["CF", "Goal Poacher + Deep-Lying Forward"],
        ["AMF", "Hole Player + Creative Playmaker"],
        ["DMF", "Anchor Man + Box-to-Box"],
        ["LB/RB", "Offensive Full-back ฝั่งหนึ่ง"]
      ],
      instr: "ตัวอย่าง: DMF ตัวหนึ่ง Defensive · CF หนึ่งคน Counter Target",
      con: "สร้างจาก 4-2-3-1 หรือ 4-4-2 แล้วลากตำแหน่งใน Position Edit",
      mob: "สวนกลับเร็วผ่านกลาง ส่งทะลุให้คู่หน้า",
      meta: "Game8 (ก.ย. 2025) Tier 1 · efootballlab: แนะนำสำหรับ Long Ball Counter"
    },
    {
      name: "4-1-2-1-2",
      preset: false,
      backs: 4,
      tag: "ไดมอนด์ / 4-1-3-2 (Position Edit)",
      pos: [
        [50, 92, "GK"],
        [14, 72, "LB"],
        [37, 77, "CB"],
        [63, 77, "CB"],
        [86, 72, "RB"],
        [50, 62, "DMF"],
        [30, 48, "CMF"],
        [70, 48, "CMF"],
        [50, 34, "AMF"],
        [38, 15, "CF"],
        [62, 15, "CF"]
      ],
      good: "กลางสนามรูปเพชรต่อบอลสามเหลี่ยมได้ทุกทิศ — Game8 เรียก 4-1-3-2 ไดมอนด์และจัดไว้ Tier 1",
      bad: "ไม่มีปีก ถ้าแบ็กไม่ขึ้นเกมจะแคบเกินไป",
      fit: ["Possession Game", "Quick Counter"],
      roles: [["CF", "Goal Poacher + Dummy Runner"], ["AMF", "Classic No.10"], ["CMF", "Box-to-Box สองคน"], ["DMF", "Anchor Man"]],
      instr: "ตัวอย่าง: DMF Defensive · AMF Anchoring",
      con: "สร้างจาก 4-3-1-2 (ลาก CMF กลางลงเป็น DMF ใน Position Edit)",
      mob: "ต่อบอลสั้นกลางสนามแล้วจ่ายให้คู่หน้า",
      meta: "Game8 (ก.ย. 2025) Tier 1 (ชื่อ 4-1-3-2 Diamond)"
    },
    {
      name: "4-2-4",
      preset: false,
      backs: 4,
      tag: "บุกสุดตัว (Position Edit)",
      pos: [
        [50, 92, "GK"],
        [14, 72, "LB"],
        [37, 77, "CB"],
        [63, 77, "CB"],
        [86, 72, "RB"],
        [37, 56, "DMF"],
        [63, 56, "DMF"],
        [14, 22, "LWF"],
        [38, 15, "CF"],
        [62, 15, "CF"],
        [86, 22, "RWF"]
      ],
      good: "สี่ตัวหน้ายืนสูงตรึงแนวรับคู่แข่ง สวนกลับได้หลายทาง",
      bad: "DMF สองคนต้องรับภาระกลางสนามทั้งหมด เสียบอลกลางแล้วอันตรายมาก",
      fit: ["Quick Counter", "Long Ball Counter"],
      roles: [["CF", "Goal Poacher + Target Man"], ["LWF/RWF", "Prolific Winger"], ["DMF", "Anchor Man + Destroyer"], ["CB", "Build Up อย่างน้อยหนึ่งคน"]],
      instr: "ตัวอย่าง: DMF ทั้งคู่ Defensive · CF หนึ่งคน Counter Target",
      con: "สร้างจาก 4-2-1-3 แล้วลาก AMF ขึ้นเป็น CF ตัวที่สอง",
      mob: "ใช้ตอนต้องการประตูช่วงท้ายเกม ไม่ควรใช้ตลอดเกม",
      meta: "Game8 (ก.ย. 2025) อยู่ในตารางจัดอันดับ"
    },
    {
      name: "4-1-5",
      preset: false,
      backs: 4,
      tag: "ห้าตัวหน้า (Position Edit)",
      pos: [
        [50, 92, "GK"],
        [14, 72, "LB"],
        [37, 77, "CB"],
        [63, 77, "CB"],
        [86, 72, "RB"],
        [50, 60, "DMF"],
        [12, 26, "LWF"],
        [32, 30, "AMF"],
        [50, 14, "CF"],
        [68, 30, "AMF"],
        [88, 26, "RWF"]
      ],
      good: "คนในแดนบนเยอะมาก กดดันสูงและล้อมกรอบเขตโทษได้",
      bad: "DMF คนเดียวคุมกลาง เสี่ยงสูงมากเมื่อเจอสวนกลับ",
      fit: ["Overload", "Quick Counter"],
      roles: [["CF", "Goal Poacher"], ["AMF", "Hole Player สองคน"], ["LWF/RWF", "Prolific Winger หรือ Roaming Flank"], ["DMF", "Anchor Man"]],
      instr: "ตัวอย่าง: DMF Defensive · AMF ตัวหนึ่ง Anchoring",
      con: "สร้างจาก 4-1-2-3 แล้วลาก CMF ทั้งสองขึ้นเป็น AMF",
      mob: "เหมาะช่วงท้ายเกมที่ต้องการประตูเท่านั้น",
      meta: "Game8 (ก.ย. 2025) อยู่ในตารางจัดอันดับ"
    }
  ],
  positionEdit: {
    t: "Position Edit — สร้างแผนเอง",
    d: "ใน Game Plan กดปุ่มรูปลูกศรไขว้ แล้วลากผู้เล่นไปยังตำแหน่งที่ต้องการ แผนอย่าง 4-5-1, 5-4-1, 5-2-3, 3-4-1-2 และ 3-5-2 ไม่มีในพรีเซ็ต ต้องสร้างจากแผนใกล้เคียง (เช่น 3-5-2 ≈ 3-1-4-2)"
  },
  fluid: {
    t: "Fluid Formation (ใหม่ v6.0.0)",
    d: "ตั้งแผนตอนรุกและตอนรับแยกกันได้ใน Game Plan และ Auto-pick players จัดตัวให้ได้ทั้งสองแผน · ตัวอย่างจาก efootballlab: รุก 3-2-4-1 / รับ 4-2-3-1 · หรือ 2-3-5 / 4-1-4-1 · หรือ 3-4-2-1 / 5-4-1"
  },
  playstyles: [
    {
      name: "Possession Game",
      icon: "🧶",
      when: "ทีมมีกองกลางส่งบอล/เลี้ยงดี เจอคู่แข่งที่นั่งรับลึก",
      how: "ต่อบอลสั้น อดทน ผู้เล่นขยับมาเป็นทางส่งใกล้ๆ",
      watch: "ไม่เหมาะถ้ากองกลางไม่มีเทคนิค เสียบอลกลางสนามแล้วโดนสวนแรง"
    },
    {
      name: "Quick Counter",
      icon: "⚡",
      when: "มีกองหน้าเร็ว และอยากเพรสแย่งบอลแดนสูง",
      how: "แย่งได้แล้วบุกทันที ผู้เล่นวิ่งเข้าหลังแนวรับ ไลน์รับค่อนข้างสูง",
      watch: "ต้องการแผงหลังที่เร็วพอรับบอลยาวหลังไลน์"
    },
    {
      name: "Long Ball Counter",
      icon: "🏹",
      when: "อยากเล่นปลอดภัย รับลึก รอจังหวะสวน",
      how: "ตั้งแนวรับสองแถวแน่นตรงกลาง กองหน้ายืนรอรับบอลยาวทันทีที่แย่งได้",
      watch: "ครองบอลน้อย กองหน้าต้องจบสกอร์เองได้ (v6 ปรับสตามินาตอนสวนกลับแล้ว)"
    },
    {
      name: "Out Wide",
      icon: "↔️",
      when: "มีปีก/แบ็กดี และกองหน้าโหม่งเก่ง",
      how: "ยืดเกมกว้าง แยกแบ็กคู่แข่งออกมา ปั้นครอสเข้ากรอบ",
      watch: "ถ้าคุณภาพริมเส้นไม่ถึง สไตล์นี้แทบไม่มีประโยชน์"
    },
    {
      name: "Long Ball",
      icon: "🚀",
      when: "มี Target Man ตัวสูง และอยากข้ามเพรสสูงของคู่แข่ง",
      how: "เปิดตรงหาตัวเป้าเป็นทางหลัก ผู้เล่นกระจายเปิดช่องเปิดบอลยาว หาลูกสองกลางสนาม",
      watch: "พึ่ง CF คนเดียวมาก ต้องมีคนตามเก็บลูกสอง"
    },
    {
      name: "Overload",
      icon: "🌀",
      isNew: true,
      when: "มีกองกลาง/กองหน้าที่เล่นในที่แคบเก่ง ชอบเพรสสูง",
      how: "รุมฝั่งที่บอลอยู่ ส่งสั้นในพื้นที่แคบ ตอนรับบีบตัวแน่นและเข้าหาคนครองบอลเร็ว ดันไลน์สูงเมื่อครองบอลในแดนคู่แข่ง",
      watch: "ฝั่งตรงข้ามบอลโล่ง ระวังการเปลี่ยนฝั่งเกมยาว — ใช้ผู้จัดการที่ถนัด Overload"
    }
  ],
  instructions: [
    { side: "รุก", name: "Anchoring", d: "ให้ผู้เล่นยืนประจำตำแหน่ง ไม่ลอยออกด้านข้าง — เหมาะกับ AMF/CF ที่อยากให้อยู่กลาง" },
    { side: "รุก", name: "Defensive", d: "ลดการขึ้นเกม รักษารูปทีม — นิยมใช้กับแบ็กหรือ DMF" },
    { side: "รับ", name: "Counter Target", d: "กองหน้ายืนสูงไว้รอสวนกลับ ไม่ลงมาช่วยรับ (ประหยัดแรง)" },
    { side: "รับ", name: "Man Marking", d: "ให้ผู้เล่นคนหนึ่งตามประกบคู่แข่งที่กำหนด — ระวังช่องว่างด้านหลัง" },
    { side: "รับ", name: "Tight Marking", d: "ประกบใกล้ตัวที่กำหนดเข้มข้นขึ้น — อาจทำให้รูปทีมเปิด" }
  ],
  instructionsNote: "มีช่องคำสั่งฝั่งรุก 2 ช่องและฝั่งรับ 2 ช่อง · v6.0.0 ถอด ‘Attacking’ และ ‘Deep Line’ ออกจาก Individual Instructions แล้ว · Playing Style ของนักเตะแยกเป็นฝั่งรุกและฝั่งรับ",
  levels: "ระหว่างแข่ง (คอนโซล) ปรับระดับเกมรุก/รับด้วย D-pad ↑↑ / ↓↓ ตามคู่มือ Controls Manual ทางการ",
  notInGame: "คำสั่งยุค PES อย่าง False 9, Wing Rotation, Gegenpress หรือ Deep Line ระดับทีม ไม่มีใน eFootball ปัจจุบัน — ถ้าเจอคู่มือที่พูดถึง แสดงว่าเป็นข้อมูลเก่า",
  v6: [
    "เพิ่ม Fluid Formation (แผนรุก/รับแยกกัน)",
    "เพิ่ม Team Playstyle ‘Overload’",
    "ถอด ‘Attacking’ และ ‘Deep Line’ ออกจาก Individual Instructions",
    "Playing Style แยกเป็นฝั่งรุกและฝั่งรับ",
    "ผู้จัดการมี Link-up Play ได้ 2 แบบ และมีตัวเลือก Prioritize Base Team",
    "แก้ปัญหาสตามินาของ Long Ball Counter",
    "ไม่มีแผนพรีเซ็ตใหม่"
  ],
  sources: [
    { name: "KONAMI — eFootball v6.0.0 Update (ทางการ)", url: "https://www.konami.com/efootball/en/", date: "2026" },
    { name: "FIFPlay — eFootball 2026 Formations (รายชื่อแผนพรีเซ็ต)", url: "https://www.fifplay.com/", date: "2026" },
    { name: "efootballlab — Best eFootball 2027 Formations / Fluid Formation", url: "https://efootballlab.com/", date: "13 ส.ค. 2026" },
    { name: "Game8 — eFootball Best Formations Tier List", url: "https://game8.co/", date: "18 ก.ย. 2025 (ก่อน v6)" },
    { name: "ReviByte — ชุดคำสั่ง 4-2-1-3", url: "https://www.revibyte.com/", date: "2026" }
  ]
};

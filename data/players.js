/* ePitch Master — หน้า players.html: พัฒนานักเตะ (Progression) & ความคุ้มค่า */
var EPM = window.EPM = window.EPM || {};

EPM.players = {
  categories: ["Shooting", "Passing", "Dribbling", "Dexterity", "Lower Body Strength", "Aerial Strength", "Defending", "GK 1", "GK 2", "GK 3"],
  categoriesNote: "Progression Points แจกลงได้ 10 หมวด แต่ละหมวดรวมค่าย่อยหลายตัว (เช่น Shooting รวม Finishing, Place Kicking, Curl)",
  byPosition: [
    { pos: "CF", main: "Shooting, Dexterity", sub: "Dribbling, Aerial Strength, Lower Body" },
    { pos: "SS", main: "Dribbling, Dexterity, Shooting", sub: "Lower Body, Passing" },
    { pos: "LWF / RWF", main: "Dribbling, Dexterity", sub: "Lower Body, Shooting, Passing" },
    { pos: "AMF", main: "Dribbling, Passing", sub: "Dexterity, Lower Body, Shooting" },
    { pos: "CMF", main: "Passing, Lower Body, Dribbling, Defending", sub: "Dexterity" },
    { pos: "DMF", main: "Defending, Lower Body", sub: "Passing, Dribbling, Aerial Strength" },
    { pos: "LMF / RMF", main: "Lower Body", sub: "Dexterity, Dribbling, Passing" },
    { pos: "CB", main: "Defending, Aerial Strength", sub: "Lower Body, Dexterity" },
    { pos: "LB / RB", main: "Lower Body, Dexterity, Defending", sub: "Passing, Dribbling, Aerial Strength" },
    { pos: "GK", main: "GK 1, GK 2, GK 3", sub: "Aerial Strength" }
  ],
  byPositionNote: "ตารางนี้เป็นแนวทางที่ชุมชนใช้กันทั่วไป (สรุปจาก GamingonPhone) ไม่ใช่สูตรตายตัว",
  principles: [
    {
      icon: "🎯",
      t: "เริ่มจากบทบาท ไม่ใช่ตัวเลข OVR",
      d: "ถามก่อนว่าจะให้นักเตะคนนี้ทำอะไร (วิ่งหลังไลน์ / พักบอล / โหม่ง) แล้วค่อยลงแต้ม OVR สูงกว่าไม่ได้แปลว่าเล่นดีกว่าในบทบาทของคุณ"
    },
    { icon: "🧍", t: "เคารพรูปร่างนักเตะ", d: "ตัวสูงใหญ่ลงเลี้ยงเยอะก็ยังอาจรู้สึก ‘แข็ง’ — ดันจุดแข็ง (เช่น Aerial) จะคุ้มกว่า" },
    {
      icon: "🧭",
      t: "สอดคล้องกับสไตล์ทีม",
      d: "CB ใน Quick Counter / ไลน์สูงต้องเน้น Speed/Acceleration (Lower Body, Dexterity) ส่วน CB ใน Long Ball Counter เน้น Aerial และร่างกาย"
    },
    {
      icon: "🔁",
      t: "ทดลองแล้วปรับ",
      d: "ลงแต้ม ลองเล่นหลายนัด ช้าไป → Lower Body · เสียบอลบ่อย → Dribbling · ยิงพลาด → Shooting (ตรวจเงื่อนไขการรีเซ็ตแต้มในหน้า Player Progression)"
    },
    { icon: "📊", t: "ดูค่าจาก Game Plan", d: "v6.0.0 แสดงค่าพลังตาม Game Plan ปัจจุบันระหว่างทำ Player Progression แล้ว ใช้ช่วยตัดสินใจ" }
  ],
  value: [
    {
      icon: "🆓",
      t: "เก็บของฟรีก่อนเติม",
      d: "แคมเปญ / Objectives / Selection Contract ให้นักเตะและไอเท็มพัฒนาเป็นประจำ เช็กหน้า Notices ทุกสัปดาห์"
    },
    {
      icon: "🧩",
      t: "เลือกตาม Playing Style",
      d: "นักเตะที่ Playing Style เข้ากับ Team Playstyle ของคุณคุ้มกว่าการ์ด OVR สูงที่ไม่เข้าระบบ (v6 แยก Playing Style รุก/รับ ด้วย)"
    },
    { icon: "👔", t: "ผู้จัดการสำคัญพอๆ กับนักเตะ", d: "ความถนัดสไตล์ทีมของผู้จัดการให้โบนัสค่าพลัง เลือกผู้จัดการให้ตรงกับสไตล์ที่ใช้จริง" },
    {
      icon: "🦶",
      t: "ดูสกิลและเท้าข้างที่ไม่ถนัด",
      d: "สกิลเช่น Knuckle Shot, Through Passing, Interception มีผลจริงในเกม · v6.1.0 จะให้เลือกสกิลเองได้ด้วย Select Skill Token"
    },
    { icon: "📍", t: "Position Training", d: "v6.0.0: ตำแหน่งที่ลงทะเบียนบนการ์ดจะไม่อยู่ในตัวเลือกให้ฝึกอีก ทำให้ฝึกตำแหน่งใหม่ง่ายขึ้น" },
    {
      icon: "🧾",
      t: "อย่าไล่ทุกแพ็ก",
      d: "ตั้งงบและเป้าหมาย (ตำแหน่งที่ขาด) ก่อนเปิดแพ็ก และปล่อย (Release) การ์ดซ้ำเพื่อรับ Level Training Program"
    }
  ]
};

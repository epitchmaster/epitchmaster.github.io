/* =====================================================================
   ePitch Master — ข่าว & อีเวนต์ (หน้า news.html) ← ไฟล์ที่รูทีนข่าวรายวันแก้
   ---------------------------------------------------------------------
   1) แก้ EPM.meta.lastUpdated (YYYY-MM-DD) / weekLabel / nextVersion
   2) เพิ่มข่าวใหม่ไว้ "บนสุด" ของ EPM.news (date YYYY-MM-DD + tag + title + body + sources)
   3) แก้ EPM.metaNotes (มุมมองเมตาประจำสัปดาห์) และ EPM.officialLinks ถ้าจำเป็น
   เวอร์ชันเกม (gameVersion) อยู่ที่ data/site.js
   ===================================================================== */
var EPM = window.EPM = window.EPM || {};

EPM.meta = {
  lastUpdated: "2026-10-04",
  weekLabel: "อัปเดตรายวัน · 4 ต.ค. 2026",
  nextVersion: "v6.1.0 — Konami ประกาศว่าจะมาในเดือน ต.ค. 2026 (ยังไม่ระบุวัน)"
};

EPM.news = [
  {
    date: "2026-10-03",
    tag: "พรีวิวแพ็ก",
    hot: true,
    title: "พรีวิว Epic จันทร์ 5 ต.ค. — Spanish League Midfielders: Kaká / Davids / Guti",
    body: "สื่อ GameMarket รายงานว่า Special Player List “Spanish League Selection Midfielders” มีกำหนดเปิดวันจันทร์ 5 ต.ค. 2026 — Epic 3 คนอยู่ในแนวกลางเดียวกัน: Kaká (AMF · Hole Player · Real Madrid เบส 88), Edgar Davids (DMF · The Destroyer · Barcelona เบส 87), Guti (CMF · Orchestrator · Real Madrid เบส 86) พร้อมนักเตะลีกสเปนปัจจุบัน — ยังเป็นพรีวิวก่อนเปิดในเกม สกิล/เลเวลสูงสุดให้ตรวจในเกมวันเปิด — เหมาะกับแผนที่มีกองกลางกลาง 3 คน / ถ้าเล่นแค่ 2 คนกลางอาจไม่คุ้มกล่องเต็ม (ประมาณ 13,500 เหรียญถ้าเป็นกล่อง 150 ใบแบบมาตรฐาน)",
    sources: [
      { name: "GameMarket (พรีวิว 3 ต.ค.)", url: "https://gamemarket.gg/news/efootball/efootball-spanish-league-midfielders-epic-kak-davids-guti-preview" },
      {
        name: "GamingonPhone (ใบ้ Epic จันทร์หน้า 1 ต.ค.)",
        url: "https://gamingonphone.com/news/efootball-2027-october-2026-maintenance-update-netherlands-epic-pack-new-managers-account-bans-and-more/"
      }
    ]
  },
  {
    date: "2026-10-02",
    tag: "ประกาศ",
    hot: true,
    title: "POTM Brasileirão Betano เปลี่ยนวันจบ — จบในเมนเต 8 ต.ค.",
    body: "Konami ประกาศเปลี่ยนวันสิ้นสุด Special Player List “POTM: Brasileirão Betano” ด้วยเหตุผลหลายประการ — จะสิ้นสุดในเมนเตประจำวันพฤหัสที่ 8 ต.ค. 2026 (ตรวจ Notices ในเกมก่อนแลก/ใช้สิทธิ์) — วันเดียวกันยังมีอัปเดตการ์ด Messi (Show Time Welcome) ตามประกาศก่อนหน้า",
    sources: [
      { name: "KONAMI ทางการ (EN)", url: "https://www.konami.com/efootball/en-us/topic/news/5918" },
      { name: "KONAMI ทางการ (JP)", url: "https://www.konami.com/efootball/ja/topic/news/5918" }
    ]
  },
  {
    date: "2026-10-02",
    tag: "พันธมิตร",
    title: "Konami ต่อสัญญาพันธมิตรระยะยาวกับสหพันธ์ฟุตบอลฝรั่งเศส (FFF)",
    body: "Konami Digital Entertainment ประกาศขยายความร่วมมือระยะยาวกับ French Football Federation — ยังเป็น Official Football Video Game Partner ของทีมชาติฝรั่งเศส ใช้สิทธิ์แบรนด์/ภาพลักษณ์ และร่วมอีสปอร์ตกับสมาคมชาติที่ได้รับสิทธิ์อื่น — ไม่กระทบคอนเทนต์ในเกมทันที แต่ยืนยันว่าทีมชาติฝรั่งเศสยังอยู่ในระบบลิขสิทธิ์ของ eFootball",
    sources: [
      { name: "KONAMI Press (ทางการ)", url: "https://www.konami.com/games/eu/en/topics/19345/" },
      { name: "Inside World Football (สรุป)", url: "https://www.insideworldfootball.com/2026/10/02/konami-renew-france-partnership-for-efootball-gaming-title/" }
    ]
  },
  {
    date: "2026-10-01",
    tag: "แพ็ก Epic",
    hot: true,
    title: "เมนเต 1 ต.ค. — Epic เนเธอร์แลนด์: Van Basten / Gullit / Rijkaard",
    body: "หลังเมนเตประจำวันพฤหัส กล่อง Epic Special Player List 150 ใบ เปิดตำนานทีมชาติเนเธอร์แลนด์ 3 คน: Marco van Basten (Fox in the Box — Momentum Dribbling, Bullet Header, Low Screamer), Ruud Gullit (Hole Player — Magnetic Feet, Snap Strike), Frank Rijkaard (Build Up CB — Fortress, Long-Reach Tackle) — ตรวจในเกมก่อนซื้อ",
    sources: [
      {
        name: "GamingonPhone (สรุปข่าว)",
        url: "https://gamingonphone.com/news/efootball-2027-october-2026-maintenance-update-netherlands-epic-pack-new-managers-account-bans-and-more/"
      },
      { name: "WISTERIA (เมนเตเปิด 1 ต.ค.)", url: "https://wisteria33wepes.net/20261001-mainte/" }
    ]
  },
  {
    date: "2026-10-01",
    tag: "ผู้จัดการ",
    title: "ผู้จัดการใหม่ 2 คน — R. Rodríguez และ Makino Tomoaki (750 เหรียญ/แพ็ก)",
    body: "R. Rodríguez (อิง Ricardo Rodríguez / Kashiwa Reysol): Possession Game 88, Link-up Over-the-Top Pass A + Breakthrough Pass A — Makino Tomoaki (Fujieda MYFC): Over-the-Top Pass C + 1-2 Cut-in B, ถนัด Overload — ซื้อผ่านแพ็กผู้จัดการคนละ 750 eFootball Coins",
    sources: [
      {
        name: "GamingonPhone (สรุปข่าว)",
        url: "https://gamingonphone.com/news/efootball-2027-october-2026-maintenance-update-netherlands-epic-pack-new-managers-account-bans-and-more/"
      }
    ]
  },
  {
    date: "2026-10-01",
    tag: "อีเวนต์",
    title: "POTW Worldwide + Tour / VS AI + สัปดาห์สุดท้าย International Match Campaign",
    body: "หลังเมนเตมี POTW Worldwide ชุดตัวแทนชาติ (UEFA Nations League สัปดาห์แรก), Tour Event และ VS AI ใหม่, แพ็ก Show Time: International Match — สัปดาห์สุดท้ายของแคมเปญ International Match (ถึงประมาณ 8 ต.ค.) และมีรายงานว่า Top 100,000 อันดับ PvP ได้ Show Time Calafiori — ตรวจ Notices ในเกม",
    sources: [
      { name: "SportsDunia (เมนเต 1 ต.ค.)", url: "https://www.sportsdunia.com/esports/efootball-schedule-maintenance-today-1-october-2026" },
      { name: "WISTERIA (เมนเตเปิด)", url: "https://wisteria33wepes.net/20261001-mainte/" },
      { name: "X @we_konami (ทางการ JP — ใบ้ POTW)", url: "https://x.com/we_konami" }
    ]
  },
  {
    date: "2026-10-01",
    tag: "PS5 / ร้านค้า",
    title: "PS Store บางประเทศหยุดซื้อคอนเทนต์ eFootball ชั่วคราว 5–8 ต.ค.",
    body: "ผู้ใช้ PlayStation ในซาอุดีอาระเบีย / สหรัฐอาหรับเอมิเรตส์ / โคลอมเบีย / ชิลี จะซื้อคอนเทนต์เพิ่มผ่าน PlayStation Store ไม่ได้ชั่วคราวช่วง 5–8 ต.ค. 2026 (ไทยไม่ได้อยู่ในรายการนี้) — ถ้าบัญชี PS ผูกภูมิภาคเหล่านั้นให้วางแผนซื้อก่อน",
    sources: [
      {
        name: "GamingonPhone (อ้างประกาศ Konami)",
        url: "https://gamingonphone.com/news/efootball-2027-october-2026-maintenance-update-netherlands-epic-pack-new-managers-account-bans-and-more/"
      }
    ]
  },
  {
    date: "2026-10-01",
    tag: "ประกาศ",
    title: "อัปเดตการ์ด Messi (Show Time Welcome) ในเมนเต 8 ต.ค. + แบนบัญชีมาโคร",
    body: "Konami ยืนยันว่าการ์ด Lionel Messi จาก Show Time: Welcome to eFootball จะถูกอัปเดตในเมนเต 8 ต.ค. — พร้อมประกาศระงับบัญชีที่ใช้เครื่องมืออัตโนมัติ / มาโคร / โปรแกรมช่วยเล่น และเตือนว่าจะลงโทษต่อ — สื่อรายงานอีเวนต์ถัดไปโฟกัสลีกบราซิล (Show Time Ranking: Calleri, Murilo) และ Epic จันทร์หน้า Kaká / Guti / Edgar Davids (ตามรายงาน GamingonPhone)",
    sources: [
      {
        name: "GamingonPhone (สรุปข่าว)",
        url: "https://gamingonphone.com/news/efootball-2027-october-2026-maintenance-update-netherlands-epic-pack-new-managers-account-bans-and-more/"
      },
      { name: "WISTERIA (เรื่อง Messi Welcome)", url: "https://wisteria33wepes.net/20261001-mainte/" }
    ]
  },
  {
    date: "2026-09-28",
    tag: "ประกาศอัปเดต",
    title: "v6.1.0 จะเพิ่ม Select Skill Token และ Select Position Token",
    body: "บัญชี X ทางการ @play_eFootball ประกาศว่า v6.1.0 มีกำหนดปล่อยในเดือนตุลาคม 2026 — ใช้ Select Skill Token 100 อันเพื่อสอนสกิลที่ ‘เลือกเอง’ ให้นักเตะ และ Select Position Token 100 อันเพื่อฝึก Position Proficiency ตำแหน่งที่เลือก สื่อรายงานเพิ่มว่า Advanced Skill Token จะถูกถอดออก และแปลงเป็น Select Skill Token อัตรา 1 : 20",
    sources: [
      { name: "X @play_eFootball (ทางการ)", url: "https://x.com/play_eFootball" },
      { name: "SoccerGaming (สรุปข่าว)", url: "https://soccergaming.com/efootball-v6-1-0-update-introduces-new-token-system/" }
    ]
  },
  {
    date: "2026-09-24",
    tag: "Switch 2",
    title: "eFootball™ Kick-Off! v1.2.0 — โหมด Leagues + รองรับภาษาไทย",
    body: "ภาคแยกบน Nintendo Switch 2 ได้โหมด Leagues เลือกสโมสรจาก 25 ลีก เล่นคนเดียวหรือ Co-op สูงสุด 4 คน, อัปเดตข้อมูลฤดูกาล 2026–2027, เพิ่มนักเตะตำนาน 13 คนใน World Tour และเพิ่ม ‘ภาษาไทย’ ในตัวเลือกข้อความ (เป็นคนละเกมกับ eFootball™ หลักบน PS/Xbox/PC/มือถือ)",
    sources: [{ name: "KONAMI (ทางการ)", url: "https://www.konami.com/efootball/kick-off/us/en-us/news/update_120" }]
  },
  {
    date: "2026-09-17",
    tag: "แคมเปญ",
    title: "International Match Campaign (17 ก.ย. – 8 ต.ค. 2026)",
    body: "Campaign Hub แบบ Choose Your Path (เล่น PvP หรือ VS AI เพื่อรับ Map Moves), Campaign Objectives เพิ่มรอบใหม่วันที่ 24 ก.ย. และ 1 ต.ค. รางวัลรวมถึง Chance Deal ของ Epic: Eric Cantona สูงสุด 50 ใบ และ Selection Contract ‘Show Time: International Match’ — ตรวจรายละเอียดจริงที่หน้า Notices ในเกม",
    sources: [
      {
        name: "GamingonPhone (สรุปข่าว)",
        url: "https://gamingonphone.com/news/efootball-2027-international-match-campaign-celebrates-national-epics-with-free-chance-deals-and-a-selection-contract-on-offer/"
      }
    ]
  },
  {
    date: "2026-08-13",
    tag: "เวอร์ชันใหญ่",
    title: "v6.0.0 เปิดฤดูกาลใหม่: Custom Tournament, Fluid Formation, Overload, Dynamic Volley",
    body: "เพิ่ม Custom Tournament (น็อกเอาต์สูงสุด 8 คน), Game Plan แบบ Fluid Formation (แผนรุก/รับแยกกัน), Team Playstyle ใหม่ ‘Overload’, แยก Playing Style เป็นฝั่งรุกและฝั่งรับ, คำสั่ง Dynamic Volley (ใส่คำสั่ง Stunning Shot กับบอลกลางอากาศ), ผู้จัดการที่มี Link-up Play 2 แบบ, ถอด Individual Instructions ‘Attacking’ และ ‘Deep Line’, ปรับ Position Training และมินิเกม Daily Game ใหม่ร่วมกับ PlatinumGames",
    sources: [
      { name: "Version Info v6.0.0 (ทางการ)", url: "https://www.konami.com/efootball/en/page/v6/versioninfo_v6-00" },
      { name: "KONAMI Press (ทางการ)", url: "https://www.konami.com/games/us/en/topics/3344/" }
    ]
  },
  {
    date: "2026-08-13",
    tag: "จบแล้ว",
    title: "New Season Campaign (13 ส.ค. – 3 ก.ย. 2026)",
    body: "แคมเปญเปิดฤดูกาล: ล็อกอินรับ Special Player Contract เลือกนักเตะจาก FC Barcelona / Manchester United และไอเท็มพัฒนานักเตะ, GP, EXP — สิ้นสุดแล้ว",
    sources: [{ name: "KONAMI Press (ทางการ)", url: "https://www.konami.com/games/us/en/topics/3344/" }]
  }
];

EPM.metaNotes = [
  {
    icon: "🌀",
    title: "Overload คือของใหม่ที่ต้องลอง",
    text: "v6.0.0 เพิ่ม Overload: รุมฝั่งที่บอลอยู่ ส่งสั้นในที่แคบ ไลน์สูง + เพรสสูง เหมาะกับกองกลางที่ครองบอลในพื้นที่แคบเก่ง และควรใช้ผู้จัดการที่ถนัด Overload",
    src: "ทางการ v6.0.0"
  },
  {
    icon: "🏃",
    title: "Dash Dribble ช้าลงเล็กน้อย",
    text: "แพตช์ v6.0.0 ลดความเร็วสูงสุดของ Dash Dribble ลงเล็กน้อย → การวิ่งเลี้ยงตรงๆ ได้ผลน้อยลง ใช้จังหวะ ช้า–เร็ว และ Sharp Touch แทน",
    src: "ทางการ v6.0.0"
  },
  {
    icon: "🛡️",
    title: "Match-up หยุดตามที่สั่งได้ง่ายขึ้น",
    text: "ผู้เล่นที่ใช้ Match-up จะหยุดตามอินพุตของเราได้ง่ายขึ้น ขณะที่ AI ข้างๆ จะตอบสนองต่างกันตามค่า Defensive Awareness — ฝีมือคนคุมสำคัญขึ้น",
    src: "ทางการ v6.0.0"
  },
  {
    icon: "🎯",
    title: "บอลทะลุช่อง/ครอสจากแดนลึกได้ผลขึ้น",
    text: "Konami ปรับการประกบตัว ให้ทะลุช่องและครอสจากตำแหน่งลึกสำเร็จง่ายขึ้นถ้าจังหวะและความแม่นดี — ฝั่งรับต้องระวังไลน์สูง",
    src: "ทางการ v6.0.0"
  },
  {
    icon: "🔋",
    title: "Long Ball Counter เปลืองแรงตามจริงแล้ว",
    text: "ก่อนหน้านี้ LBC ใช้สตามินาตอนสวนกลับน้อยกว่าสไตล์อื่น v6.0.0 แก้ให้เหมาะสม — วางแผนเปลี่ยนตัวช่วงท้ายเกม",
    src: "ทางการ v6.0.0"
  },
  {
    icon: "🧩",
    title: "เตรียมโทเคนไว้รอ v6.1.0",
    text: "ถ้าคิดจะใช้ Advanced Skill Token อยู่แล้ว ใช้ก่อนอัปเดตได้ ไม่เช่นนั้นจะถูกแปลงเป็น Select Skill Token อัตโนมัติ (ตามที่สื่อรายงาน)",
    src: "ประกาศ X ทางการ + สื่อ"
  }
];

EPM.officialLinks = [
  { icon: "🌐", name: "eFootball™ Official Site (KONAMI)", url: "https://www.konami.com/efootball/en/" },
  { icon: "📄", name: "Version Info v6.0.0", url: "https://www.konami.com/efootball/en/page/v6/versioninfo_v6-00" },
  { icon: "𝕏", name: "X ทางการ @play_eFootball", url: "https://x.com/play_eFootball" },
  { icon: "📶", name: "การเชื่อมต่อออนไลน์ PvP (ทางการ)", url: "https://www.konami.com/efootball/en-us/page/online_match" },
  { icon: "🎮", name: "PS Remote Play (PlayStation)", url: "https://www.playstation.com/en-us/remote-play/" }
];

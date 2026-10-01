/* =====================================================================
   ePitch Master — เทียบราคาเหรียญ (coins.html) + ประกาศโปรบนหน้าแรก  ← รูทีนเช็กราคาทุก 2 ชม. แก้ไฟล์นี้
   ---------------------------------------------------------------------
   checkedAt   "YYYY-MM-DDTHH:MM:SS+07:00"  เวลาที่เช็กราคาล่าสุด (แสดงเป็น "เช็กราคาเมื่อ")
   currency    "THB"
   platforms[] แท็บแพลตฟอร์ม (ลำดับ = ลำดับแท็บ)
     id        "ps" | "mobile" | "steam"   label, icon
     lock      ข้อความเตือนว่าเหรียญใช้ได้เฉพาะแพลตฟอร์มนี้
     stores[]  { id, label, url, web:true ถ้าเป็นเว็บสโตร์ Coda, note,
                 packs[]: { paid, free, bonus, price, url? } }
                 paid = เหรียญจ่ายเงิน · free = เหรียญฟรีในแพ็ก · bonus = โบนัสเว็บสโตร์ (เป็นเหรียญฟรี) · price = บาท
                 รวมเหรียญ / บาทต่อ 100 เหรียญ / ป้าย "คุ้มสุด" คำนวณอัตโนมัติ — ไม่ต้องใส่
     extraNote ข้อความเพิ่ม (ไม่บังคับ)
     oneTime[] แพ็กซื้อได้ครั้งเดียว { name, price, paid?, items?, store?, limit?, note? } — ไม่นำไปคิด "คุ้มสุด"
   promos[]    แบนเนอร์โปร (เพิ่ม/ลบได้อิสระ)
     id        คีย์ไม่ซ้ำ          kind  "sale" | "bonus" | "starter" | "free"
     title, detail                platforms ["ps","mobile","steam"]
     start, end  ISO +07:00 หรือ "" (ไม่มีกำหนด) — ถ้าเลย end แล้วจะย้ายไป "โปรที่จบแล้ว" เอง, ถ้ายังไม่ถึง start จะเป็น "เร็ว ๆ นี้"
     highlight true = แสดงประกาศบนหน้าแรกด้วย (เฉพาะช่วงที่โปรยัง active)
     url       ลิงก์ร้าน (ไม่ใส่โค้ดแนะนำ/affiliate)
   noSaleNote  ข้อความเมื่อไม่มีโปร kind "sale" ที่ active อยู่
   sources[]   { name, url }
   ห้ามใส่ราคาที่ไม่ได้เช็กจริง
   ===================================================================== */
var EPM = window.EPM = window.EPM || {};

EPM.coins = {
  checkedAt: "2026-10-02T06:07:40+07:00",
  currency: "THB",
  platforms: [
    {
      id: "ps",
      label: "PS5 / PS4",
      icon: "🎮",
      lock: "ร้านเว็บ (Coda) ไม่มีแพ็กสำหรับ PlayStation — ผู้เล่น PS5/PS4 ต้องซื้อเหรียญผ่าน PlayStation Store (ร้านในเกมบนเครื่องก็ใช้ระบบของ PlayStation Store)",
      stores: [
        {
          id: "psstore",
          label: "PlayStation Store TH",
          url: "https://store.playstation.com/en-th/product/HP0101-PPSA03071_00-EFOOTBALL0000000",
          note: "แพ็ก English/Chinese/Korean/Japanese Ver. · ราคาเต็ม ไม่มีส่วนลด ณ เวลาที่เช็ก",
          packs: [
            { paid: 100, free: 0, bonus: 0, price: 35, url: "https://store.playstation.com/en-th/product/HP0101-CUSA26994_00-EFC0000000000001" },
            { paid: 505, free: 15, bonus: 0, price: 179, url: "https://store.playstation.com/en-th/product/HP0101-CUSA26994_00-EFC0000000000002" },
            { paid: 1010, free: 40, bonus: 0, price: 349, url: "https://store.playstation.com/en-th/product/HP0101-CUSA26994_00-EFC0000000000003" },
            { paid: 2020, free: 130, bonus: 0, price: 729, url: "https://store.playstation.com/en-th/product/HP0101-CUSA26994_00-EFC0000000000004" },
            { paid: 3050, free: 250, bonus: 0, price: 1101, url: "https://store.playstation.com/en-th/product/HP0101-CUSA26994_00-EFC0000000000005" },
            { paid: 5050, free: 750, bonus: 0, price: 1801, url: "https://store.playstation.com/en-th/product/HP0101-CUSA26994_00-EFC0000000000006" },
            {
              paid: 9900,
              free: 2100,
              bonus: 0,
              price: 3701,
              url: "https://store.playstation.com/en-th/product/HP0101-CUSA26994_00-EFC0000000000007"
            }
          ]
        }
      ],
      oneTime: [
        { name: "Starter Set: Luis Suárez", price: 28, note: "ไม่ได้ดึงรายละเอียดของในแพ็ก" },
        { name: "Starter Set: Iker Casillas", price: 81, note: "ไม่ได้ดึงรายละเอียดของในแพ็ก" }
      ]
    },
    {
      id: "mobile",
      label: "iOS / Android",
      icon: "📱",
      lock: "ร้านเว็บแยกแพ็ก iOS กับ Android (ราคาเท่ากัน) — เลือกให้ตรงกับระบบของมือถือที่เล่น",
      stores: [
        {
          id: "coda",
          label: "เว็บสโตร์ (Coda)",
          url: "https://efootball.codashop.com/th-th/efootball",
          web: true,
          note: "ราคาเท่ากันทุกช่องทางจ่าย (TrueMoney, PromptPay, K PLUS, บัตร, 7-Eleven, ShopeePay, PayPal ฯลฯ) · ค่าธรรมเนียม 0",
          packs: [
            { paid: 130, free: 0, bonus: 7, price: 39 },
            { paid: 293, free: 7, bonus: 15, price: 88 },
            { paid: 530, free: 20, bonus: 28, price: 159 },
            { paid: 715, free: 35, bonus: 38, price: 215 },
            { paid: 975, free: 65, bonus: 52, price: 299 },
            { paid: 1950, free: 180, bonus: 107, price: 589 },
            { paid: 2930, free: 320, bonus: 163, price: 879 },
            { paid: 4860, free: 840, bonus: 285, price: 1460 },
            { paid: 10400, free: 2400, bonus: 640, price: 3150 },
            { paid: 24200, free: 8000, bonus: 0, price: 7290 }
          ]
        },
        {
          id: "appstore",
          label: "App Store (ซื้อในแอป iOS)",
          url: "https://apps.apple.com/th/app/efootball/id1117270703",
          note: "Apple แสดงเฉพาะ 10 รายการแรก — แพ็กใหญ่กว่านี้ไม่เห็นราคาบนหน้าเว็บ",
          packs: [
            { paid: 130, free: 0, bonus: 0, price: 39 },
            { paid: 293, free: 7, bonus: 0, price: 88 },
            { paid: 530, free: 20, bonus: 0, price: 159 },
            { paid: 715, free: 35, bonus: 0, price: 215 },
            { paid: 975, free: 65, bonus: 0, price: 299 },
            { paid: 1950, free: 180, bonus: 0, price: 589 },
            { paid: 2930, free: 320, bonus: 0, price: 879 }
          ]
        }
      ],
      extraNote: "Google Play ไม่แสดงราคาแต่ละแพ็กบนหน้าเว็บ (บอกเพียงช่วงราคา ฿5–฿3,700 ต่อรายการ) จึงเทียบไม่ได้",
      oneTime: [
        {
          name: "Starter Set: Thiago Alcantara",
          price: 25,
          paid: 50,
          items: "Epic Thiago Alcantara",
          store: "เว็บสโตร์ (Coda)",
          limit: "ซื้อได้ 1 ครั้ง"
        },
        { name: "Starter Set: Luis Suárez", price: 25, store: "App Store", note: "ไม่ได้ดึงรายละเอียดของในแพ็ก" }
      ]
    },
    {
      id: "steam",
      label: "Steam",
      icon: "⌨️",
      lock: "ร้านเว็บมีแพ็ก Steam แยกต่างหาก — ใช้กับ eFootball บน Steam เท่านั้น",
      stores: [
        {
          id: "coda",
          label: "เว็บสโตร์ (Coda)",
          url: "https://efootball.codashop.com/th-th/efootball",
          web: true,
          note: "ราคาเท่ากันทุกช่องทางจ่าย · ค่าธรรมเนียม 0",
          packs: [
            { paid: 100, free: 0, bonus: 5, price: 35 },
            { paid: 505, free: 15, bonus: 26, price: 179 },
            { paid: 1010, free: 40, bonus: 53, price: 349 },
            { paid: 2020, free: 130, bonus: 108, price: 729 },
            { paid: 3050, free: 250, bonus: 165, price: 1100 },
            { paid: 5050, free: 750, bonus: 290, price: 1800 },
            { paid: 9900, free: 2100, bonus: 600, price: 3700 },
            { paid: 24600, free: 8000, bonus: 0, price: 8800 }
          ]
        }
      ],
      oneTime: [
        {
          name: "Starter Set: Thiago Alcantara",
          price: 25,
          paid: 50,
          items: "Epic Thiago Alcantara",
          store: "เว็บสโตร์ (Coda)",
          limit: "ซื้อได้ 1 ครั้ง"
        },
        { name: "Starter Set: Luis Suárez", price: 25, paid: 50, items: "Epic Luis Suárez", store: "เว็บสโตร์ (Coda)", limit: "ซื้อได้ 1 ครั้ง" },
        {
          name: "Starter Set: Iker Casillas",
          price: 75,
          paid: 100,
          items: "Epic Iker Casillas + 3 ไฮไลต์",
          store: "เว็บสโตร์ (Coda)",
          limit: "ซื้อได้ 1 ครั้ง"
        }
      ]
    }
  ],
  promos: [
    {
      id: "webstore-bonus",
      kind: "bonus",
      title: "โบนัสเหรียญเพิ่มประมาณ 5% บนเว็บสโตร์",
      detail: "ทุกแพ็ก iOS / Android / Steam ได้เหรียญโบนัสเพิ่ม ยกเว้นแพ็กใหญ่สุด (32200 / 32600) เช่น ฿299 ได้ 1092 เหรียญ เทียบกับ 1040 เหรียญใน App Store",
      platforms: ["mobile", "steam"],
      start: "",
      end: "",
      highlight: false,
      url: "https://efootball.codashop.com/th-th/efootball"
    },
    {
      id: "starter-sets",
      kind: "starter",
      title: "Starter Set ราคาเริ่มต้น ฿25 (ซื้อได้ครั้งเดียว)",
      detail: "iOS/Android: Thiago Alcantara ฿25 · Steam: Thiago Alcantara ฿25, Luis Suárez ฿25, Iker Casillas ฿75 — ได้เหรียญจ่ายเงินพร้อมนักเตะ Epic",
      platforms: ["mobile", "steam"],
      start: "",
      end: "2027-07-29T08:59:59+07:00",
      highlight: false,
      url: "https://efootball.codashop.com/th-th/efootball"
    },
    {
      id: "weekly-free",
      kind: "free",
      title: "รับฟรี 10 เหรียญทุกสัปดาห์",
      detail: "กดรับได้สัปดาห์ละ 1 ครั้ง แยก iOS/Android กับ Steam · ต้องล็อกอิน KONAMI ID · รอบถัดไปรีเซ็ต 9 ต.ค. 2026 เวลา 06:02 น.",
      platforms: ["mobile", "steam"],
      start: "",
      end: "",
      highlight: false,
      url: "https://efootball.codashop.com/th-th/efootball"
    },
    {
      id: "ps-plus-bonus",
      kind: "free",
      title: "eFootball™ PlayStation®Plus Member Bonus (ก.ย.–ธ.ค.)",
      detail: "ฟรีสำหรับสมาชิก PS Plus — ไม่ได้ดึงรายละเอียดของในแพ็ก",
      platforms: ["ps"],
      start: "",
      end: "",
      highlight: false,
      url: "https://store.playstation.com/en-th/product/HP0101-PPSA03071_00-EFOOTBALL0000000"
    },
    {
      id: "sep-2026-sale",
      kind: "sale",
      title: "eFootball Coin Sale (ก.ย. 2026)",
      detail: "แบนเนอร์บนหน้า Codashop ไทย — ข้อมูลไม่ได้ระบุส่วนลดหรือโบนัส",
      platforms: ["mobile", "steam"],
      start: "2026-09-17T09:00:00+07:00",
      end: "2026-09-23T08:59:00+07:00",
      highlight: false,
      url: ""
    },
    {
      id: "jul-2026-sale",
      kind: "sale",
      title: "July Coin Sale (ก.ค. 2026)",
      detail: "แบนเนอร์บนหน้า Codashop ไทย",
      platforms: ["mobile", "steam"],
      start: "2026-07-20T19:00:00+07:00",
      end: "2026-08-06T08:59:00+07:00",
      highlight: false,
      url: ""
    },
    {
      id: "football-festival-2026",
      kind: "sale",
      title: "Football Festival (ก.ค. 2026)",
      detail: "แบนเนอร์บนหน้า Codashop ไทย",
      platforms: ["mobile", "steam"],
      start: "2026-07-03T08:00:00+07:00",
      end: "2026-07-09T22:59:00+07:00",
      highlight: false,
      url: ""
    }
  ],
  noSaleNote: "ไม่มีส่วนลดราคาเหรียญทั้งบนเว็บสโตร์ (Coda), PlayStation Store และ App Store ณ เวลาที่เช็ก",
  sources: [
    { name: "eFootball™ Web Store ประเทศไทย (Coda)", url: "https://efootball.codashop.com/th-th/efootball" },
    { name: "eFootball™ Web Store — เลือกประเทศ", url: "https://efootball.codashop.com/international" },
    { name: "PlayStation Store TH — eFootball™", url: "https://store.playstation.com/en-th/product/HP0101-PPSA03071_00-EFOOTBALL0000000" },
    { name: "App Store TH — eFootball™", url: "https://apps.apple.com/th/app/efootball/id1117270703" },
    { name: "Google Play TH — eFootball™", url: "https://play.google.com/store/apps/details?id=jp.konami.pesam&hl=en&gl=TH" }
  ]
};

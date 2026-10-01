/* ePitch Master — หน้า about.html: แพลตฟอร์ม · Cross-play · โหมด · แหล่งข้อมูล */
var EPM = window.EPM = window.EPM || {};

EPM.about = {
  platforms: [
    { icon: "🎮", name: "PS5 / PS4", note: "คอนโทรลเลอร์ DualSense / DUALSHOCK 4" },
    { icon: "🟩", name: "Xbox Series X|S / One", note: "รวม Xbox on PC (Windows)" },
    { icon: "🖥️", name: "PC (Steam)", note: "แนะนำให้เล่นด้วยจอย" },
    { icon: "📱", name: "iOS / Android", note: "ระบบสัมผัส หรือจอย Bluetooth" }
  ],
  crossplay: [
    "ตั้งแต่ v4.4.0 คอนโซลและ PC (PS5, PS4, Steam, Xbox Series X|S, Xbox One, Xbox on PC) เล่นออนไลน์ข้ามแพลตฟอร์มกันได้ — eFootball™ League และ Ranking Event ใช้อันดับรวม รวมถึง Friend Match และ Co-op กับเพื่อนต่างแพลตฟอร์ม",
    "เปิด/ปิดบน PlayStation / Steam: [Extras] > [Game Settings] > [Cross-Platform] — ส่วน Xbox ตั้งที่ Privacy & online safety > ‘You can join cross-network play’",
    "มือถือ (iOS/Android) ไม่อยู่ในรายการ cross-play ของประกาศทางการข้างต้น — สื่อส่วนใหญ่รายงานว่ามือถือจับคู่กับมือถือด้วยกัน",
    "เล่น PS5 ผ่าน PS Remote Play บนมือถือ = คุณกำลังเล่น ‘เวอร์ชัน PS5’ → ใช้ปุ่มแบบคอนโซล และจับคู่ในพูลคอนโซล/PC ไม่ใช่พูลมือถือ"
  ],
  modes: [
    { icon: "🏆", name: "Dream Team", text: "สร้างทีมจากการเซ็นนักเตะ พัฒนา Level/Progression แล้วลงแข่งโหมดต่างๆ" },
    { icon: "📈", name: "eFootball™ League", text: "โหมดจัดอันดับออนไลน์แบบดิวิชัน มีหมวด VS AI (เพิ่มใน v4.4.0) สำหรับคนไม่ชอบ PvP" },
    { icon: "🎟️", name: "Events", text: "Tour / Challenge / Ranking / Themed Event — แหล่งรางวัลหลักประจำสัปดาห์" },
    { icon: "🤝", name: "Friend Match & Co-op", text: "ห้อง 1v1 และ Co-op กับเพื่อน (คอนโซล/PC ข้ามแพลตฟอร์มได้)" },
    { icon: "🛠️", name: "Custom Tournament", text: "ใหม่ใน v6.0.0 — สร้าง/เข้าร่วมทัวร์น็อกเอาต์สูงสุด 8 คน กำหนดกติกาเองได้" },
    { icon: "⚡", name: "Quick Match / Strike Arena", text: "อยู่ในรายการโหมดออนไลน์ทางการ (Quick Match ใช้ P2P)" },
    { icon: "🎲", name: "Daily Game", text: "มินิเกมรับรางวัลรายวัน มี Daily Super Play ที่ร่วมทำกับ PlatinumGames" },
    { icon: "🏟️", name: "Local Match / Training", text: "เล่นออฟไลน์/ฝึกซ้อม ใช้ทดสอบปุ่มและท่าก่อนลงแข่งจริง" }
  ],
  sources: [
    {
      type: "เว็บไซต์",
      icon: "🌐",
      used: true,
      items: [
        { name: "KONAMI — คู่มือ PS5 eFootball™ 2023", url: "https://img.konami.com/efootball/s/img/manual/efootball2023_ps5_en.pdf" },
        { name: "KONAMI — คู่มือ Xbox eFootball™ 2023", url: "https://img.konami.com/efootball/s/img/manual/efootball2023_xbox_en.pdf" },
        { name: "KONAMI — Controls Manual (ตารางคำสั่งคอนโซล/PC)", url: "https://www.konami.com/efootball/en-us/page/mobile_controller" },
        { name: "KONAMI — Version Info v3.0.0 (Sharp Touch)", url: "https://www.konami.com/efootball/en/page/2024/versioninfo_v3-00" },
        { name: "KONAMI — คู่มือ PS5 (Manual_EN_PS5 รุ่นแรก)", url: "https://img.konami.com/efootball/s/img/manual/manual_ps5_en.pdf" },
        { name: "KONAMI — eFootball™ Commands (มือถือ)", url: "https://www.konami.com/efootball/en/page/new_controls" },
        { name: "KONAMI — Version Info v6.0.0", url: "https://www.konami.com/efootball/en/page/v6/versioninfo_v6-00" },
        { name: "KONAMI — Version Info v4.4.0 (Cross-Platform)", url: "https://www.konami.com/efootball/en/page/v4/versioninfo_v4-40" },
        { name: "KONAMI — Online PvP Setup", url: "https://www.konami.com/efootball/en-us/page/online_match" },
        { name: "PlayStation — PS Remote Play", url: "https://www.playstation.com/en-us/remote-play/" },
        { name: "FIFPlay — eFootball 2027 Controls", url: "https://www.fifplay.com/efootball-2027-controls/" },
        {
          name: "GameMarket.gg — Team Playstyle Guide v6",
          url: "https://gamemarket.gg/news/efootball/efootball-v6-0-0-team-playstyle-guide-every-option-explained"
        },
        {
          name: "GamingonPhone — Progression Points",
          url: "https://gamingonphone.com/guides/efootball-2027-progression-points-guide-how-to-build-your-players-the-right-way/"
        },
        { name: "PES Mastery — Shooting Tutorial", url: "https://pesmastery.com/efootball-shooting-tutorial/" },
        { name: "kryk55 — Knuckle Shot", url: "https://kryk55.com/efootball/pl-en/sk14-en.html" },
        {
          name: "GameMarket.gg — Defending Guide",
          url: "https://gamemarket.gg/news/efootball/efootball-defending-guide-pressure-match-up-and-tackling"
        },
        { name: "KONAMI — Press: New Season v6.0.0", url: "https://www.konami.com/games/us/en/topics/3344/" },
        { name: "KONAMI — eFootball™ Kick-Off! v1.2.0", url: "https://www.konami.com/efootball/kick-off/us/en-us/news/update_120" },
        {
          name: "GamingonPhone — International Match Campaign",
          url: "https://gamingonphone.com/news/efootball-2027-international-match-campaign-celebrates-national-epics-with-free-chance-deals-and-a-selection-contract-on-offer/"
        },
        { name: "SoccerGaming — v6.1.0 Tokens", url: "https://soccergaming.com/efootball-v6-1-0-update-introduces-new-token-system/" }
      ]
    },
    { type: "X (Twitter)", icon: "𝕏", used: true, items: [{ name: "@play_eFootball — บัญชีทางการ", url: "https://x.com/play_eFootball" }] },
    {
      type: "YouTube",
      icon: "▶️",
      used: false,
      items: [{ name: "ค้นหาคลิปสอน eFootball ล่าสุด", url: "https://www.youtube.com/results?search_query=eFootball+2027+tips" }]
    },
    {
      type: "Discord",
      icon: "💬",
      used: false,
      items: [{ name: "ชุมชน eFootball บน Discord (ใส่ลิงก์เชิญเซิร์ฟเวอร์ที่คุณใช้)", url: "https://discord.com/" }]
    },
    {
      type: "Facebook",
      icon: "📘",
      used: false,
      items: [{ name: "กลุ่ม/เพจ eFootball (ค้นหา)", url: "https://www.facebook.com/search/top?q=eFootball" }]
    }
  ]
};

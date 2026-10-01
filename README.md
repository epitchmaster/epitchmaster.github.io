# ePitch Master ⚽

เว็บไซต์คู่มือ eFootball ภาษาไทย แยกหน้าตามหัวข้อ เข้าทุกหน้าได้จากเมนู (ปุ่ม ☰) ที่อยู่บนทุกหน้า

🔗 https://epitchmaster.github.io/

## หน้าเว็บ

| หน้า | เนื้อหา | ไฟล์ข้อมูล |
|---|---|---|
| `index.html` | หน้าแรก (เมนูการ์ด) | – |
| `ps5.html` | ปุ่ม PS5 / PS4 | `data/ps5.js` + `data/skills.js` |
| `xbox.html` | ปุ่ม Xbox | `data/xbox.js` + `data/skills.js` |
| `pc.html` | PC (Steam) คีย์บอร์ด + จอย | `data/pc.js` + `data/skills.js` |
| `mobile.html` | มือถือ + PS Remote Play | `data/mobile.js` + `data/skills.js` |
| `scores.html` | ผลบอลสด | `data/scores-config.js` + `livescore.js` |
| `tactics.html` | แผน & แท็กติก | `data/tactics.js` |
| `skills.html` | สกิลเลี้ยงบอล | `data/skills.js` |
| `players.html` | พัฒนานักเตะ | `data/players.js` |
| `news.html` | ข่าว & อีเวนต์ | `data/news.js` |
| `coins.html` | เทียบราคาเหรียญ / โปร (ประกาศบนหน้าแรกด้วย) | `data/coins.js` |
| `about.html` | แพลตฟอร์ม · โหมด · แหล่งข้อมูล | `data/about.js` |

ทุกหน้าโหลด `data/site.js` (เวอร์ชันเกม), `style.css` และ `script.js` ร่วมกัน

ไฟล์ `*.html` สร้างอัตโนมัติจากต้นฉบับ (layout + เนื้อหาแต่ละหน้า) — ข่าวประจำวันแก้ที่ `data/news.js` · ราคา/โปรเหรียญแก้ที่ `data/coins.js` (มีคำอธิบายฟิลด์ที่หัวไฟล์)

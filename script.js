// ฐานข้อมูลสถานที่ท่องเที่ยว 7 จังหวัดภาคตะวันออก
const easternThailandTourism = {
    "ชลบุรี": {
        "คาเฟ่และร้านกาแฟ": ["Skoop Beach Cafe (พัทยา)", "Treedom Cafe (บางแสน)", "Red Temp Coffee (เขาสามมุข)", "Wocket Cafe (ศรีราชา)", "Hidden Lab (บางแสน)"],
        "ธรรมชาติและทะเล": ["เกาะล้าน (พัทยา)", "หาดบางแสน", "สวนนงนุช พัทยา", "เกาะสีชัง", "เขาสามมุข"],
        "วัฒนธรรมและวัด": ["ปราสาทสัจธรรม (พัทยา)", "วัดแสนสุขสุทธิวารรณ (บางแสน)", "วัดใหญ่อารามหลวง (อ.เมืองชลบุรี)", "วิหารเทพสถิตพระกิติเฉลิม", "เกาะลอย (ศรีราชา)"]
    },
    "ระยอง": {
        "คาเฟ่และร้านกาแฟ": ["Trae Bar & Cafe (หาดแม่พิมพ์)", "Keep U Cafe (เมืองระยอง)", "A Cup of Tree (เมืองระยอง)", "M SLR Cafe (บ้านฉาง)", "Baan Suan Cafe (แกลง)"],
        "ธรรมชาติและทะเล": ["ทุ่งโปรงทอง (ปากน้ำประแส)", "เกาะเสม็ด", "หาดแหลมแม่พิมพ์", "อุทยานแห่งชาติเขาแหลมหญ้า-หมูเกาะเสม็ด", "สวนพฤกษศาสตร์ระยอง"],
        "วัฒนธรรมและวัด": ["วัดละหารไร่ (หลวงปู่ทิม)", "ชุมชนปากน้ำประแส", "ศาลสมเด็จพระเจ้าตากสินมหาราช", "วัดป่าประดู่", "ตลาดเก่า 100 ปี ยมจินดา"]
    },
    "จันทบุรี": {
        "คาเฟ่และร้านกาแฟ": ["บางกระจะ คาเฟ่ (ชุมชนริมน้ำจันทบูร)", "Koff House Cafe (ริมแม่น้ำจันทบุรี)", "Moo Yoo Rose House (ท่าใหม่)", "Retro Cafe (เมืองจันทบุรี)", "Chanthaburi Art House"],
        "ธรรมชาติและทะเล": ["อุทยานแห่งชาติน้ำตกพลิ้ว", "จุดชมวิวเนินนางพญา (อ่าวคุ้งกระเบน)", "หาดเจ้าหลาว", "อุทยานแห่งชาติน้ำตก (เขาคิชฌกูฏ)", "อ่าวคุ้งกระเบน"],
        "วัฒนธรรมและวัด": ["ชุมชนเก่าริมน้ำจันทบูร", "อาสนวิหารพระนางมารีอาปฏิสนธินิรมล", "วัดเขาสุกิม", "ตึกแดง และคุกขี้ไก่", "ศาลหลักเมืองจันทบุรี"]
    },
    "ตราด": {
        "คาเฟ่และร้านกาแฟ": ["The Ozone Cafe (เมืองตราด)", "Baan Suan Cafe & Restaurant (ตราด)", "M4 Cafe (เกาะช้าง)", "Cafe De Koh Chang", "Rim Klong Cafe (แหลมงอบ)"],
        "ธรรมชาติและทะเล": ["เกาะช้าง", "เกาะกูด", "เกาะขาม", "อุทยานแห่งชาติน้ำตกคลองพลู (เกาะช้าง)", "หาดทรายดำ (แหลมงอบ)"],
        "วัฒนธรรมและวัด": ["วัดบุปผาราม (วัดปลายคลอง)", "ชุมชนรักษ์เขา (แหลมงอบ)", "อนุสรณ์สถานยุทธนาวีเกาะช้าง", "ศาลเจ้าพ่อหลักเมืองตราด", "ชุมชนบ้านน้ำเชี่ยว"]
    },
    "ฉะเชิงเทรา": {
        "คาเฟ่และร้านกาแฟ": ["บ้านปิ่นปัก คาเฟ่ (อ.เมือง)", "Chibani Cafe (ฉะเชิงเทรา)", "Riva Camp & Cafe", "นาคาเฟ่ (Nacha Cafe)", "Kratie Cafe"],
        "ธรรมชาติและทะเล": ["อ่างเก็บน้ำลาดกระทิง", "อุทยานแห่งชาติเขาใหญ่ (โซนรอยต่อ)", "สวนป่าเฉลิมพระเกียรติ (คลองเขื่อน)", "แม่น้ำบางปะกง", "สวนเกษตรอินทรีย์ท้องถิ่น"],
        "วัฒนธรรมและวัด": ["วัดโสธรวรารามวรวิหาร", "วัดสมานรัตนาราม", "ตลาดบ้านใหม่ 100 ปี", "วัดปากน้ำ", "วัดเทพนาราม"]
    },
    "ปราจีนบุรี": {
        "คาเฟ่และร้านกาแฟ": ["A-Lek Cafe (เมืองปราจีน)", "Tree House Cafe (ประจันตคาม)", "Baan Suan Khun Yai Cafe", "Moka Cafe Prachinburi", "The Canal Cafe"],
        "ธรรมชาติและทะเล": ["แก่งหินเพิง (นาดี)", "น้ำตกเขาอีโต้", "อ่างเก็บน้ำจักรพงษ์", "น้ำตกตะคร้อ (ประจันตคาม)", "อุทยานแห่งชาติทับลาน"],
        "วัฒนธรรมและวัด": ["วัดแก้วพิจิตร", "โบราณสถานเมืองสระมรกต", "พิพิธภัณฑสถานแห่งชาติ ปราจีนบุรี", "วัดต้นโพธิ์ศรีมหโพธิ"]
    },
    "สระแก้ว": {
        "คาเฟ่และร้านกาแฟ": ["De' Cafe Sa Kaeo", "The Camp Cafe (อรัญประเทศ)", "Baan Suan Coffee (วัฒนานคร)", "Mellow Cafe", "Slow Bar Coffee Sa Kaeo"],
        "ธรรมชาติและทะเล": ["อุทยานแห่งชาติปางสีดา", "อุทยานแห่งชาติตาพระยา (ละลุ)", "อ่างเก็บน้ำพระปรง", "ถ้ำน้ำเขาสิงโต", "จุดชมวิวผาแดง (ปางสีดา)"],
        "วัฒนธรรมและวัด": ["ปราสาทสด๊กก๊อกธม (โคกสูง)", "ตลาดโรงเกลือ (อรัญประเทศ)", "วัดนครธรรม (วัฒนานคร)", "ศาลหลักเมืองสระแก้ว", "วัดถ้ำเขาฉกรรจ์"]
    }
};

// รูปภาพประกอบจำลองตามหมวดหมู่
const categoryImages = {
    "คาเฟ่และร้านกาแฟ": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
    "ธรรมชาติและทะเล": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "วัฒนธรรมและวัด": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=600&q=80"
};

document.addEventListener("DOMContentLoaded", function () {
    lucide.createIcons();
    const selectedCategories = new Set(["คาเฟ่และร้านกาแฟ", "ธรรมชาติและทะเล", "วัฒนธรรมและวัด"]);
    const provinceSelect = document.getElementById("province-select");
    const daysSelect = document.getElementById("days-select");
    const resultsGrid = document.getElementById("results-grid");
    const emptyState = document.getElementById("results-empty");
    const resultSummary = document.getElementById("result-summary");
    const resultTitle = document.getElementById("result-title");

    // ระบบเลือกหมวดหมู่
    document.querySelectorAll("[data-category]").forEach(button => {
        button.addEventListener("click", () => {
            const cat = button.dataset.category;
            if (selectedCategories.has(cat)) {
                selectedCategories.delete(cat);
                button.classList.remove("is-active");
            } else {
                selectedCategories.add(cat);
                button.classList.add("is-active");
            }
        });
    });

    // คำนวณค่าใช้จ่ายและวิธีการเดินทางตามจำนวนวัน
    function getTripDetails(days) {
        if (days === "1") {
            return {
                transport: "เดินทางด้วยรถยนต์ส่วนตัว หรือรถตู้โดยสารประจำทาง แวะเที่ยวแบบไปกลับ (Day Trip)",
                cost: "ประมาณ 800 - 1,500 บาท / คน (ค่าน้ำมัน/ค่ารถ + ค่าอาหาร + ค่าเข้าชม)"
            };
        } else if (days === "2") {
            return {
                transport: "แนะนำรถยนต์ส่วนตัวเพื่อความสะดวกในการขับเที่ยวหลายจุดระหว่างทาง (2 วัน 1 คืน)",
                cost: "ประมาณ 2,500 - 4,500 บาท / คน (รวมค่าที่พัก 1 คืน + ค่าอาหาร + ค่าเดินทาง)"
            };
        } else {
            return {
                transport: "เหมาะสำหรับทริปพักผ่อนยาว ขับรถเที่ยวรอบเมืองและข้ามเกาะ (3 วัน 2 คืน)",
                cost: "ประมาณ 5,000 - 8,000 บาท / คน (รวมค่าที่พัก 2 คืน + อาหารซีฟู้ด + ค่ากิจกรรม)"
            };
        }
    }

    document.getElementById("trip-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const targetProv = provinceSelect.value;
        const totalDays = daysSelect.value;
        
        let targetProvinces = targetProv === "all" ? Object.keys(easternThailandTourism) : [targetProv];
        let collectedPlaces = [];

        targetProvinces.forEach(prov => {
            Object.keys(easternThailandTourism[prov]).forEach(cat => {
                if (selectedCategories.has(cat)) {
                    easternThailandTourism[prov][cat].forEach(place => {
                        collectedPlaces.push({ name: place, province: prov, category: cat });
                    });
                }
            });
        });

        // สุ่มสลับตำแหน่ง
        collectedPlaces.sort(() => Math.random() - 0.5);
        const finalResults = collectedPlaces.slice(0, 6);

        resultsGrid.innerHTML = "";
        if (finalResults.length === 0) {
            emptyState.hidden = false;
            resultSummary.textContent = "ไม่พบสถานที่ กรุณาเลือกหมวดหมู่อย่างน้อย 1 หมวด";
            return;
        }

        emptyState.hidden = true;
        resultTitle.textContent = `ทริปแนะนำ ${totalDays} วัน (${targetProv === 'all' ? 'ทุกจังหวัดภาคตะวันออก' : targetProv})`;
        resultSummary.textContent = `สุ่มพบสถานที่น่าสนใจ ${finalResults.length} แห่ง พร้อมประเมินค่าใช้จ่าย`;

        const tripInfo = getTripDetails(totalDays);

        finalResults.forEach((item, index) => {
            const imgSrc = categoryImages[item.category] || categoryImages["ธรรมชาติและทะเล"];
            const card = document.createElement("article");
            card.className = "result-card overflow-hidden rounded-[1.5rem] bg-white flex flex-col justify-between border border-[#e2e8df]";
            
            card.innerHTML = `
                <div>
                  <div class="relative h-44 w-full overflow-hidden">
                    <img src="${imgSrc}" alt="${item.name}" class="h-full w-full object-cover">
                    <span class="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-[#3c5c36]">${item.province}</span>
                    <span class="absolute top-3 right-3 rounded-full bg-[#a5653a] px-3 py-1 text-xs font-bold text-white">${item.category}</span>
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold text-[#294837]">${item.name}</h3>
                    
                    <div class="mt-4 space-y-2 text-sm text-[#506357]">
                      <p class="flex items-start gap-2">
                        <strong class="text-[#254034] shrink-0">🚗 การเดินทาง:</strong> 
                        <span>${tripInfo.transport}</span>
                      </p>
                      <p class="flex items-start gap-2">
                        <strong class="text-[#254034] shrink-0">💰 ค่าใช้จ่าย:</strong> 
                        <span class="text-[#a5653a] font-semibold">${tripInfo.cost}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="p-6 pt-0 grid grid-cols-2 gap-3">
                  <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name)}" target="_blank" class="rounded-xl py-3 px-3 text-sm font-semibold text-center bg-[#527849] text-white hover:brightness-105 transition">
                    📍 เปิดแผนที่
                  </a>
                  <button type="button" class="copy-btn rounded-xl py-3 px-3 text-sm font-semibold text-center bg-[#edf4e9] text-[#3c5c36] hover:bg-[#e2ebd9] transition" data-text="ไปเที่ยว ${item.name} จ.${item.province} (${item.category}) - แนวทางเดินทาง: ${tripInfo.transport} งบประมาณ: ${tripInfo.cost}">
                    📋 ก๊อปปี้ลิงก์แชร์
                  </button>
                </div>
            `;

            // ฟังก์ชันปุ่มก๊อปปี้ข้อมูลให้เพื่อน
            const copyBtn = card.querySelector(".copy-btn");
            copyBtn.addEventListener("click", function() {
                const textToCopy = this.getAttribute("data-text");
                navigator.clipboard.writeText(textToCopy).then(() => {
                    const originalText = this.textContent;
                    this.textContent = "✅ ก๊อปปี้แล้ว!";
                    this.classList.add("bg-[#d4edbc]");
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.classList.remove("bg-[#d4edbc]");
                    }, 2000);
                });
            });

            resultsGrid.appendChild(card);
        });

        document.getElementById("results-section").scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

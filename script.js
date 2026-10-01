// ฐานข้อมูลสถานที่ท่องเที่ยว 7 จังหวัดภาคตะวันออก (สามารถใส่ลิงก์รูปภาพใน image: "" ของแต่ละที่ได้เลย)
const easternThailandTourism = {
    "ชลบุรี": {
        "คาเฟ่และร้านกาแฟ": [
            { name: "Skoop Beach Cafe (พัทยา)", image: "" },
            { name: "Treedom Cafe (บางแสน)", image: "" },
            { name: "Red Temp Coffee (เขาสามมุข)", image: "" },
            { name: "Wocket Cafe (ศรีราชา)", image: "" },
            { name: "Hidden Lab (บางแสน)", image: "" }
        ],
        "ธรรมชาติและทะเล": [
            { name: "เกาะล้าน (พัทยา)", image: "" },
            { name: "หาดบางแสน", image: "" },
            { name: "สวนนงนุช พัทยา", image: "" },
            { name: "เกาะสีชัง", image: "" },
            { name: "เขาสามมุข", image: "" }
        ],
        "วัฒนธรรมและวัด": [
            { name: "ปราสาทสัจธรรม (พัทยา)", image: "" },
            { name: "วัดแสนสุขสุทธิวารรณ (บางแสน)", image: "" },
            { name: "วัดใหญ่อารามหลวง (อ.เมืองชลบุรี)", image: "" },
            { name: "วิหารเทพสถิตพระกิติเฉลิม", image: "" },
            { name: "เกาะลอย (ศรีราชา)", image: "" }
        ]
    },
    "ระยอง": {
        "คาเฟ่และร้านกาแฟ": [
            { name: "Trae Bar & Cafe (หาดแม่พิมพ์)", image: "" },
            { name: "Keep U Cafe (เมืองระยอง)", image: "" },
            { name: "A Cup of Tree (เมืองระยอง)", image: "" },
            { name: "M SLR Cafe (บ้านฉาง)", image: "" },
            { name: "Baan Suan Cafe (แกลง)", image: "" }
        ],
        "ธรรมชาติและทะเล": [
            { name: "ทุ่งโปรงทอง (ปากน้ำประแส)", image: "" },
            { name: "เกาะเสม็ด", image: "" },
            { name: "หาดแหลมแม่พิมพ์", image: "" },
            { name: "อุทยานแห่งชาติเขาแหลมหญ้า-หมูเกาะเสม็ด", image: "" },
            { name: "สวนพฤกษศาสตร์ระยอง", image: "" }
        ],
        "วัฒนธรรมและวัด": [
            { name: "วัดละหารไร่ (หลวงปู่ทิม)", image: "" },
            { name: "ชุมชนปากน้ำประแส", image: "" },
            { name: "ศาลสมเด็จพระเจ้าตากสินมหาราช", image: "" },
            { name: "วัดป่าประดู่", image: "" },
            { name: "ตลาดเก่า 100 ปี ยมจินดา", image: "" }
        ]
    },
    "จันทบุรี": {
        "คาเฟ่และร้านกาแฟ": [
            { name: "บางกระจะ คาเฟ่ (ชุมชนริมน้ำจันทบูร)", image: "" },
            { name: "Koff House Cafe (ริมแม่น้ำจันทบุรี)", image: "" },
            { name: "Moo Yoo Rose House (ท่าใหม่)", image: "" },
            { name: "Retro Cafe (เมืองจันทบุรี)", image: "" },
            { name: "Chanthaburi Art House", image: "" }
        ],
        "ธรรมชาติและทะเล": [
            { name: "อุทยานแห่งชาติน้ำตกพลิ้ว", image: "" },
            { name: "จุดชมวิวเนินนางพญา (อ่าวคุ้งกระเบน)", image: "" },
            { name: "หาดเจ้าหลาว", image: "" },
            { name: "อุทยานแห่งชาติน้ำตก (เขาคิชฌกูฏ)", image: "" },
            { name: "อ่าวคุ้งกระเบน", image: "" }
        ],
        "วัฒนธรรมและวัด": [
            { name: "ชุมชนเก่าริมน้ำจันทบูร", image: "" },
            { name: "อาสนวิหารพระนางมารีอาปฏิสนธินิรมล", image: "" },
            { name: "วัดเขาสุกิม", image: "" },
            { name: "ตึกแดง และคุกขี้ไก่", image: "" },
            { name: "ศาลหลักเมืองจันทบุรี", image: "" }
        ]
    },
    "ตราด": {
        "คาเฟ่และร้านกาแฟ": [
            { name: "The Ozone Cafe (เมืองตราด)", image: "" },
            { name: "Baan Suan Cafe & Restaurant (ตราด)", image: "" },
            { name: "M4 Cafe (เกาะช้าง)", image: "" },
            { name: "Cafe De Koh Chang", image: "" },
            { name: "Rim Klong Cafe (แหลมงอบ)", image: "" }
        ],
        "ธรรมชาติและทะเล": [
            { name: "เกาะช้าง", image: "" },
            { name: "เกาะกูด", image: "" },
            { name: "เกาะขาม", image: "" },
            { name: "อุทยานแห่งชาติน้ำตกคลองพลู (เกาะช้าง)", image: "" },
            { name: "หาดทรายดำ (แหลมงอบ)", image: "" }
        ],
        "วัฒนธรรมและวัด": [
            { name: "วัดบุปผาราม (วัดปลายคลอง)", image: "" },
            { name: "ชุมชนรักษ์เขา (แหลมงอบ)", image: "" },
            { name: "อนุสรณ์สถานยุทธนาวีเกาะช้าง", image: "" },
            { name: "ศาลเจ้าพ่อหลักเมืองตราด", image: "" },
            { name: "ชุมชนบ้านน้ำเชี่ยว", image: "" }
        ]
    },
    "ฉะเชิงเทรา": {
        "คาเฟ่และร้านกาแฟ": [
            { name: "บ้านปิ่นปัก คาเฟ่ (อ.เมือง)", image: "" },
            { name: "Chibani Cafe (ฉะเชิงเทรา)", image: "" },
            { name: "Riva Camp & Cafe", image: "" },
            { name: "นาคาเฟ่ (Nacha Cafe)", image: "" },
            { name: "Kratie Cafe", image: "" }
        ],
        "ธรรมชาติและทะเล": [
            { name: "อ่างเก็บน้ำลาดกระทิง", image: "" },
            { name: "อุทยานแห่งชาติเขาใหญ่ (โซนรอยต่อ)", image: "" },
            { name: "สวนป่าเฉลิมพระเกียรติ (คลองเขื่อน)", image: "" },
            { name: "แม่น้ำบางปะกง", image: "" },
            { name: "สวนเกษตรอินทรีย์ท้องถิ่น", image: "" }
        ],
        "วัฒนธรรมและวัด": [
            { name: "วัดโสธรวรารามวรวิหาร", image: "" },
            { name: "วัดสมานรัตนาราม", image: "" },
            { name: "ตลาดบ้านใหม่ 100 ปี", image: "" },
            { name: "วัดปากน้ำ", image: "" },
            { name: "วัดเทพนาราม", image: "" }
        ]
    },
    "ปราจีนบุรี": {
        "คาเฟ่และร้านกาแฟ": [
            { name: "A-Lek Cafe (เมืองปราจีน)", image: "" },
            { name: "Tree House Cafe (ประจันตคาม)", image: "" },
            { name: "Baan Suan Khun Yai Cafe", image: "" },
            { name: "Moka Cafe Prachinburi", image: "" },
            { name: "The Canal Cafe", image: "" }
        ],
        "ธรรมชาติและทะเล": [
            { name: "แก่งหินเพิง (นาดี)", image: "" },
            { name: "น้ำตกเขาอีโต้", image: "" },
            { name: "อ่างเก็บน้ำจักรพงษ์", image: "" },
            { name: "น้ำตกตะคร้อ (ประจันตคาม)", image: "" },
            { name: "อุทยานแห่งชาติทับลาน", image: "" }
        ],
        "วัฒนธรรมและวัด": [
            { name: "วัดแก้วพิจิตร", image: "" },
            { name: "โบราณสถานเมืองสระมรกต", image: "" },
            { name: "พิพิธภัณฑสถานแห่งชาติ ปราจีนบุรี", image: "" },
            { name: "วัดต้นโพธิ์ศรีมหโพธิ", image: "" }
        ]
    },
    "สระแก้ว": {
        "คาเฟ่และร้านกาแฟ": [
            { name: "De' Cafe Sa Kaeo", image: "" },
            { name: "The Camp Cafe (อรัญประเทศ)", image: "" },
            { name: "Baan Suan Coffee (วัฒนานคร)", image: "" },
            { name: "Mellow Cafe", image: "" },
            { name: "Slow Bar Coffee Sa Kaeo", image: "" }
        ],
        "ธรรมชาติและทะเล": [
            { name: "อุทยานแห่งชาติปางสีดา", image: "" },
            { name: "อุทยานแห่งชาติตาพระยา (ละลุ)", image: "" },
            { name: "อ่างเก็บน้ำพระปรง", image: "" },
            { name: "ถ้ำน้ำเขาสิงโต", image: "" },
            { name: "จุดชมวิวผาแดง (ปางสีดา)", image: "" }
        ],
        "วัฒนธรรมและวัด": [
            { name: "ปราสาทสด๊กก๊อกธม (โคกสูง)", image: "" },
            { name: "ตลาดโรงเกลือ (อรัญประเทศ)", image: "" },
            { name: "วัดนครธรรม (วัฒนานคร)", image: "" },
            { name: "ศาลหลักเมืองสระแก้ว", image: "" },
            { name: "วัดถ้ำเขาฉกรรจ์", image: "" }
        ]
    }
};

const defaultImages = {
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

    // คำนวณค่าใช้จ่ายและวิธีการเดินทาง (รองรับทั้งคนเดียวและครอบครัว)
    function getTripDetails(days) {
        if (days === "1") {
            return {
                transport: "เดินทางด้วยรถยนต์ส่วนตัว หรือรถตู้ประจำทาง แวะเที่ยวแบบไปกลับ (Day Trip)",
                costPerPerson: "ประมาณ 800 - 1,500 บาท / คน",
                costFamily: "ประมาณ 2,550 - 4,500 บาท / ครอบครัว (3-4 คน)"
            };
        } else if (days === "2") {
            return {
                transport: "แนะนำรถยนต์ส่วนตัว ขับเที่ยวสบายๆ ทริป 2 วัน 1 คืน",
                costPerPerson: "ประมาณ 2,500 - 4,500 บาท / คน",
                costFamily: "ประมาณ 6,500 - 12,000 บาท / ครอบครัว (รวมที่พัก 1 คืน)"
            };
        } else {
            return {
                transport: "เหมาะสำหรับทริปพักผ่อนยาว ขับรถเที่ยวรอบเมืองและข้ามเกาะ (3 วัน 2 คืน)",
                costPerPerson: "ประมาณ 5,000 - 8,000 บาท / คน",
                costFamily: "ประมาณ 14,000 - 24,000 บาท / ครอบครัว (รวมที่พัก 2 คืนและอาหารซีฟู้ด)"
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
                    easternThailandTourism[prov][cat].forEach(item => {
                        collectedPlaces.push({ 
                            name: item.name, 
                            image: item.image, 
                            province: prov, 
                            category: cat 
                        });
                    });
                }
            });
        });

        // สุ่มสลับตำแหน่ง
        collectedPlaces.sort(() => Math.random() - 0.5);
        const finalResults = collectedPlaces.slice(0, 4); // แสดงผลการ์ดหลัก 4 แห่ง

        resultsGrid.innerHTML = "";
        if (finalResults.length === 0) {
            emptyState.hidden = false;
            resultSummary.textContent = "ไม่พบสถานที่ กรุณาเลือกหมวดหมู่อย่างน้อย 1 หมวด";
            return;
        }

        emptyState.hidden = true;
        resultTitle.textContent = `ทริปแนะนำ ${totalDays} วัน (${targetProv === 'all' ? 'ทุกจังหวัดภาคตะวันออก' : targetProv})`;
        resultSummary.textContent = `สุ่มพบสถานที่น่าสนใจ พร้อมประเมินค่าใช้จ่ายสำหรับคุณ`;

        const tripInfo = getTripDetails(totalDays);

        // 1. สร้างการ์ดแสดงผลหลัก (มีรูป, รายละเอียด, แผนที่, ปุ่มก๊อปปี้)
        finalResults.forEach((item) => {
            const imgSrc = (item.image && item.image.trim() !== "") ? item.image : (defaultImages[item.category] || defaultImages["ธรรมชาติและทะเล"]);
            
            const card = document.createElement("article");
            card.className = "result-card overflow-hidden rounded-[1.5rem] bg-white flex flex-col justify-between border border-[#e2e8df]";
            
            card.innerHTML = `
                <div>
                  <div class="relative h-44 w-full overflow-hidden bg-gray-100">
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
                        <strong class="text-[#254034] shrink-0">💰 ค่าใช้จ่ายต่อคน:</strong> 
                        <span class="text-[#a5653a] font-semibold">${tripInfo.costPerPerson}</span>
                      </p>
                      <p class="flex items-start gap-2">
                        <strong class="text-[#254034] shrink-0">👨‍👩‍👧‍👦 งบครอบครัว:</strong> 
                        <span class="text-[#a5653a] font-semibold">${tripInfo.costFamily}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="p-6 pt-0 grid grid-cols-2 gap-3">
                  <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name)}" target="_blank" class="rounded-xl py-3 px-3 text-sm font-semibold text-center bg-[#527849] text-white hover:brightness-105 transition">
                    📍 เปิดแผนที่
                  </a>
                  <button type="button" class="copy-btn rounded-xl py-3 px-3 text-sm font-semibold text-center bg-[#edf4e9] text-[#3c5c36] hover:bg-[#e2ebd9] transition" data-text="ไปเที่ยว ${item.name} จ.${item.province} (${item.category}) - การเดินทาง: ${tripInfo.transport} | งบคนเดียว: ${tripInfo.costPerPerson} | งบครอบครัว: ${tripInfo.costFamily}">
                    📋 ก๊อปปี้ลิงก์แชร์
                  </button>
                </div>
            `;

            // ฟังก์ชันปุ่มก๊อปปี้ข้อมูล
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

        // 2. เพิ่มส่วน "สถานที่แนะนำอื่นๆ" (แสดงเฉพาะชื่อและหมวดหมู่ ไม่ใส่รูปภาพ ตามต้องการ)
        const remainingPlaces = collectedPlaces.slice(4, 10);
        if (remainingPlaces.length > 0) {
            const extraSection = document.createElement("div");
            extraSection.className = "mt-10 col-span-full rounded-2xl bg-white p-6 border border-[#e2e8df]";
            extraSection.innerHTML = `
                <h3 class="text-lg font-bold text-[#1f4d3a] mb-4">🌟 สถานที่ท่องเที่ยวแนะนำเพิ่มเติม (เผื่อเป็นตัวเลือกเสริม)</h3>
                <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-[#506357]">
                    ${remainingPlaces.map(p => `
                        <li class="p-3 rounded-xl bg-[#f5eedf]/60 flex items-center justify-between">
                            <div>
                                <span class="font-semibold text-[#254034] block">${p.name}</span>
                                <span class="text-xs text-[#a5653a]">${p.province} •${p.category}</span>
                            </div>
                            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name)}" target="_blank" class="text-xs font-bold text-[#527849] hover:underline">แผนที่ 📍</a>
                        </li>
                    `).join('')}
                </ul>
            `;
            resultsGrid.appendChild(extraSection);
        }

        document.getElementById("results-section").scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

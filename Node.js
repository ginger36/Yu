// ฐานข้อมูลสถานที่ท่องเที่ยว 7 จังหวัดภาคตะวันออก
const easternThailandTourism = {
    "ชลบุรี": {
        "คาเฟ่และร้านกาแฟ": [
            "Skoop Beach Cafe (พัทยา)",
            "Treedom Cafe (บางแสน)",
            "Red Temp Coffee (เขาสามมุข)",
            "Wocket Cafe (ศรีราชา)",
            "Hidden Lab (บางแสน)"
        ],
        "ธรรมชาติและทะเล": [
            "เกาะล้าน (พัทยา)",
            "หาดบางแสน",
            "สวนนงนุช พัทยา",
            "เกาะสีชัง",
            "เขาสามมุข"
        ],
        "วัฒนธรรมและวัด": [
            "ปราสาทสัจธรรม (พัทยา)",
            "วัดแสนสุขสุทธิวารรณ (บางแสน)",
            "วัดใหญ่อารามหลวง (อ.เมืองชลบุรี)",
            "วิหารเทพสถิตพระกิติเฉลิม",
            "เกาะลอย (ศรีราชา)"
        ]
    },
    "ระยอง": {
        "คาเฟ่และร้านกาแฟ": [
            "Trae Bar & Cafe (หาดแม่พิมพ์)",
            "Keep U Cafe (เมืองระยอง)",
            "A Cup of Tree (เมืองระยอง)",
            "M SLR Cafe (บ้านฉาง)",
            "Baan Suan Cafe (แกลง)"
        ],
        "ธรรมชาติและทะเล": [
            "ทุ่งโปรงทอง (ปากน้ำประแส)",
            "เกาะเสม็ด",
            "หาดแหลมแม่พิมพ์",
            "อุทยานแห่งชาติเขาแหลมหญ้า-หมูเกาะเสม็ด",
            "สวนพฤกษศาสตร์ระยอง"
        ],
        "วัฒนธรรมและวัด": [
            "วัดละหารไร่ (หลวงปู่ทิม)",
            "ชุมชนปากน้ำประแส",
            "ศาลสมเด็จพระเจ้าตากสินมหาราช",
            "วัดป่าประดู่",
            "ตลาดเก่า 100 ปี ยมจินดา"
        ]
    },
    "จันทบุรี": {
        "คาเฟ่และร้านกาแฟ": [
            "บางกระจะ คาเฟ่ (ชุมชนริมน้ำจันทบูร)",
            "Koff House Cafe (ริมแม่น้ำจันทบุรี)",
            "Moo Yoo Rose House (ท่าใหม่)",
            "Retro Cafe (เมืองจันทบุรี)",
            "Chanthaburi Art House"
        ],
        "ธรรมชาติและทะเล": [
            "อุทยานแห่งชาติน้ำตกพลิ้ว",
            "จุดชมวิวเนินนางพญา (อ่าวคุ้งกระเบน)",
            "หาดเจ้าหลาว",
            "อุทยานแห่งชาติน้ำตกตรอกน่อง (เขาคิชฌกูฏ)",
            "อ่าวคุ้งกระเบน"
        ],
        "วัฒนธรรมและวัด": [
            "ชุมชนเก่าริมน้ำจันทบูร",
            "อาสนวิหารพระนางมารีอาปฏิสนธินิรมล",
            "วัดเขาสุกิม",
            "ตึกแดง และคุกขี้ไก่",
            "ศาลหลักเมืองจันทบุรี"
        ]
    },
    "ตราด": {
        "คาเฟ่และร้านกาแฟ": [
            "The Ozone Cafe (เมืองตราด)",
            "Baan Suan Cafe & Restaurant (ตราด)",
            "M4 Cafe (เกาะช้าง)",
            "Cafe De Koh Chang",
            "Rim Klong Cafe (แหลมงอบ)"
        ],
        "ธรรมชาติและทะเล": [
            "เกาะช้าง",
            "เกาะกูด",
            "เกาะขาม",
            "อุทยานแห่งชาติน้ำตกคลองพลู (เกาะช้าง)",
            "หาดทรายดำ (แหลมงอบ)"
        ],
        "วัฒนธรรมและวัด": [
            "วัดบุปผาราม (วัดปลายคลอง)",
            "ชุมชนรักษ์เขาฉลาก (แหลมงอบ)",
            "อนุสรณ์สถานยุทธนาวีเกาะช้าง",
            "ศาลเจ้าพ่อหลักเมืองตราด",
            "ชุมชนบ้านน้ำเชี่ยว"
        ]
    },
    "ฉะเชิงเทรา": {
        "คาเฟ่และร้านกาแฟ": [
            "บ้านปิ่นปัก คาเฟ่ (อ.เมือง)",
            "Chibani Cafe (ฉะเชิงเทรา)",
            "Riva Camp & Cafe",
            "นาคาเฟ่ (Nacha Cafe)",
            "Kratie Cafe"
        ],
        "ธรรมชาติและทะเล": [
            "อ่างเก็บน้ำลาดกระทิง",
            "อุทยานแห่งชาติเขาใหญ่ (โซนรอยต่อ)",
            "สวนป่าเฉลิมพระเกียรติ (คลองเขื่อน)",
            "แม่น้ำบางปะกง",
            "สวนเกษตรอินทรีย์ท้องถิ่น"
        ],
        "วัฒนธรรมและวัด": [
            "วัดโสธรวรารามวรวิหาร",
            "วัดสมานรัตนาราม",
            "ตลาดบ้านใหม่ 100 ปี",
            "วัดปากน้ำจโจ้",
            "วัดเทพนาราม"
        ]
    },
    "ปราจีนบุรี": {
        "คาเฟ่และร้านกาแฟ": [
            "A-Lek Cafe (เมืองปราจีน)",
            "Tree House Cafe (ประจันตคาม)",
            "Baan Suan Khun Yai Cafe",
            "Moka Cafe Prachinburi",
            "The Canal Cafe"
        ],
        "ธรรมชาติและทะเล": [
            "แก่งหินเพิง (นาดี)",
            "น้ำตกเขาอีโต้",
            "อ่างเก็บน้ำจักรพงษ์",
            "น้ำตกตะคร้อ (ประจันตคาม)",
            "อุทยานแห่งชาติทับลาน"
        ],
        "วัฒนธรรมและวัด": [
            "วัดแก้วพิจิตร",
            "โบราณสถานเมืองสระมรกต",
            "พิพิธภัณฑสถานแห่งชาติ ปราจีนบุรี",
            "วัดต้นโพธิ์ศรีมหโพธิ"
        ]
    },
    "สระแก้ว": {
        "คาเฟ่และร้านกาแฟ": [
            "De' Cafe Sa Kaeo",
            "The Camp Cafe (อรัญประเทศ)",
            "Baan Suan Coffee (วัฒนานคร)",
            "Mellow Cafe",
            "Slow Bar Coffee Sa Kaeo"
        ],
        "ธรรมชาติและทะเล": [
            "อุทยานแห่งชาติปางสีดา",
            "อุทยานแห่งชาติตาพระยา (ละลุ)",
            "อ่างเก็บน้ำพระปรง",
            "ถ้ำน้ำเขาสิงโต",
            "จุดชมวิวผาแดง (ปางสีดา)"
        ],
        "วัฒนธรรมและวัด": [
            "ปราสาทสด๊กก๊อกธม (โคกสูง)",
            "ตลาดโรงเกลือ (อรัญประเทศ)",
            "วัดนครธรรม (วัฒนานคร)",
            "ศาลหลักเมืองสระแก้ว",
            "วัดถ้ำเขาฉกรรจ์"
        ]
    }
};

// ฟังก์ชันดึงรายชื่อทั้งหมด
function getPlaces(province, category) {
    if (easternThailandTourism[province] && easternThailandTourism[province][category]) {
        return easternThailandTourism[province][category];
    }
    return "ไม่พบข้อมูลที่ระบุ";
}

// ฟังก์ชันสุ่มสถานที่
function getRandomPlace(province, category) {
    const places = getPlaces(province, category);
    if (Array.isArray(places)) {
        const randomIndex = Math.floor(Math.random() * places.length);
        return places[randomIndex];
    }
    return places;
}

// ควบคุมการทำงานของหน้าเว็บไซต์
document.addEventListener("DOMContentLoaded", function () {
    lucide.createIcons();

    const selectedCategories = new Set(["คาเฟ่และร้านกาแฟ", "ธรรมชาติและทะเล", "วัฒนธรรมและวัด"]);
    const provinceSelect = document.getElementById("province-select");
    const resultsGrid = document.getElementById("results-grid");
    const emptyState = document.getElementById("results-empty");
    const resultSummary = document.getElementById("result-summary");
    const modal = document.getElementById("trip-modal");
    const closeModalButton = document.getElementById("modal-close");

    function openModal(placeName, provinceName, categoryName) {
        document.getElementById("modal-province").textContent = provinceName;
        document.getElementById("modal-place-name").textContent = placeName;
        document.getElementById("modal-category").textContent = "หมวด: " + categoryName;
        document.getElementById("modal-map-link").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeName)}`;
        modal.hidden = false;
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.hidden = true;
        document.body.style.overflow = "";
    }

    // ระบบเลือกหมวดหมู่ปุ่มกด
    document.querySelectorAll("[data-category]").forEach(function(button) {
        button.addEventListener("click", function() {
            const category = button.dataset.category;
            if (selectedCategories.has(category)) {
                selectedCategories.delete(category);
                button.classList.remove("is-active");
                button.setAttribute("aria-pressed", "false");
            } else {
                selectedCategories.add(category);
                button.classList.add("is-active");
                button.setAttribute("aria-pressed", "true");
            }
        });
    });

    // เมื่อกดปุ่มสุ่มสถานที่
    document.getElementById("trip-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let targetProvinces = [];
        const selectedProv = provinceSelect.value;
        
        if (selectedProv === "all") {
            targetProvinces = Object.keys(easternThailandTourism);
        } else {
            targetProvinces = [selectedProv];
        }

        let collectedPlaces = [];
        targetProvinces.forEach(prov => {
            const categories = easternThailandTourism[prov];
            Object.keys(categories).forEach(cat => {
                if (selectedCategories.has(cat)) {
                    categories[cat].forEach(place => {
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
        resultSummary.textContent = `สุ่มพบทั้งหมด ${finalResults.length} สถานที่`;

        finalResults.forEach(item => {
            const card = document.createElement("article");
            card.className = "canva-card result-card overflow-hidden rounded-[1.5rem] cursor-pointer bg-white p-6 flex flex-col justify-between";
            card.innerHTML = `
                <div>
                  <div class="flex justify-between items-start gap-3">
                    <span class="inline-flex rounded-full bg-[#e7f1df] px-3 py-1 text-sm font-semibold text-[#50704c]">${item.province}</span>
                    <span class="text-sm font-semibold text-[#9a633e]">${item.category}</span>
                  </div>
                  <h3 class="mt-5 text-xl font-bold text-[#294837]">${item.name}</h3>
                </div>
                <button type="button" class="mt-6 w-full rounded-xl px-4 py-3 font-semibold flex items-center justify-center gap-2 bg-[#edf4e9] text-[#3c5c36]">
                  ดูพิกัดแผนที่
                </button>
            `;
            card.addEventListener("click", () => {
                openModal(item.name, item.province, item.category);
            });
            resultsGrid.appendChild(card);
        });

        document.getElementById("results-section").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    closeModalButton.addEventListener("click", closeModal);
    modal.addEventListener("click", function(event) {
        if (event.target === modal) closeModal();
    });
});

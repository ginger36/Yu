// ฐานข้อมูลสถานที่ท่องเที่ยว พร้อมช่องใส่รูปภาพ (image: "") และรายละเอียดเชิงลึกของแต่ละที่
const easternThailandTourism = {
    "ชลบุรี": {
        "คาเฟ่และร้านกาแฟ": [
            { 
                name: "Skoop Beach Cafe (พัทยา)", 
                image: "", 
                desc: "คาเฟ่ริมหาดสุดชิค สไตล์มินิมอล เหมาะกับการนั่งจิบเครื่องดื่มเย็นๆ ชมวิวทะเลพัทยา ถ่ายรูปมุมไหนก็ปัง" 
            },
            { 
                name: "Treedom Cafe (บางแสน)", 
                image: "", 
                desc: "คาเฟ่ในสวนร่มรื่น เต็มไปด้วยต้นไม้สีเขียว ให้ฟีลอบอุ่นเหมือนอยู่บ้าน มีมุมถ่ายรูปแนวธรรมชาติเยอะมาก" 
            },
            { 
                name: "Red Temp Coffee (เขาสามมุข)", 
                image: "", 
                desc: "คาเฟ่สไตล์ทรอปิคอลวิวพาโนรามา 180 องศา ตั้งอยู่บนเขาสามมุข มองเห็นวิวทะเลสวยสะดุดตา" 
            },
            { 
                name: "Hidden Lab (บางแสน)", 
                image: "", 
                desc: "คาเฟ่สุดแนวสไตล์ลอฟท์ปูนเปลือย ดัดแปลงจากตึกเก่าริมทะเล ให้บรรยากาศคลาสสิกและดิบเท่ไม่ซ้ำใคร" 
            }
        ],
        "ธรรมชาติและทะเล": [
            { 
                name: "เกาะล้าน (พัทยา)", 
                image: "", 
                desc: "เกาะยอดฮิตน้ำใสทรายขาวละเอียด มีหาดสวยหลายแห่ง เช่น หาดตาแหวน หาดนวล เหมาะกับการเล่นน้ำและดำน้ำตื้น" 
            },
            { 
                name: "หาดบางแสน", 
                image: "", 
                desc: "ชายหาดยอดนิยมใกล้กรุงเทพฯ เหมาะกับการเดินเล่นรับลมชิลๆ และนั่งทานอาหารทะเลสดๆ ริมหาด" 
            },
            { 
                name: "สวนนงนุช พัทยา", 
                image: "", 
                desc: "สวนพฤกษศาสตร์ระดับโลก ชมสวนกระบองเพชร สวนไดโนเสาร์ และการแสดงวัฒนธรรมไทยสุดอลังการ" 
            },
            { 
                name: "เขาสามมุข", 
                image: "", 
                desc: "จุดชมวิวพระอาทิตย์ตกดินยอดนิยมริมทะเล และเป็นจุดแวะทักทายฝูงลิงป่าธรรมชาติ" 
            }
        ],
        "วัฒนธรรมและวัด": [
            { 
                name: "ปราสาทสัจธรรม (พัทยา)", 
                image: "", 
                desc: "ปราสาทไม้แกะสลักที่ใหญ่ที่สุดในโลก สถาปัตยกรรมไทยโบราณที่วิจิตรงดงามตระการตา" 
            },
            { 
                name: "วัดแสนสุขสุทธิวารรณ (บางแสน)", 
                image: "", 
                desc: "วัดดังที่มีเมืองพุทธและเมืองนรกจำลอง เพื่อให้ข้อคิดคติธรรมแก่ผู้มาเยือน" 
            },
            { 
                name: "วิหารเทพสถิตพระกิติเฉลิม (ศาลเจ้าเซียนตั๊กุ๊)", 
                image: "", 
                desc: "ศาลเจ้าจีนสถาปัตยกรรมจีนแต้จิ๋วที่สวยงามและยิ่งใหญ่ที่สุดแห่งหนึ่งในภาคตะวันออก" 
            }
        ]
    },
    "ระยอง": {
        "คาเฟ่และร้านกาแฟ": [
            { 
                name: "Trae Bar & Cafe (หาดแม่พิมพ์)", 
                image: "", 
                desc: "คาเฟ่ริมทะเลบรรยากาศชิลๆ ตกแต่งโทนอบอุ่น เหมาะกับการนั่งมองคลื่นพร้อมจิบกาแฟฟินๆ" 
            },
            { 
                name: "Keep U Cafe (เมืองระยอง)", 
                image: "", 
                desc: "คาเฟ่สไตล์เกาหลี มินิมอล ถ่ายรูปสวยทุกมุม เบเกอรี่และกาแฟรสชาติดีเยี่ยม" 
            }
        ],
        "ธรรมชาติและทะเล": [
            { 
                name: "ทุ่งโปรงทอง (ปากน้ำประแส)", 
                image: "", 
                desc: "เส้นทางศึกษาธรรมชาติป่าชายเลน ชมทุ่งต้นโปรงสีทองอร่ามตา ทอดยาวกว่า 1 กิโลเมตร" 
            },
            { 
                name: "เกาะเสม็ด", 
                image: "", 
                desc: "เกาะสวรรค์ทะเลตะวันออก หาดทรายขาวเนียนละเอียด น้ำทะเลใสแจ๋ว และมีปาร์ตี้ริมหาดตอนกลางคืน" 
            },
            { 
                name: "อุทยานแห่งชาติเขาแหลมหญ้า", 
                image: "", 
                desc: "จุดชมวิวสะพานยาวยื่นออกไปในทะเล และวิวพระอาทิตย์ตกดินที่โรแมนติกที่สุดแห่งหนึ่ง" 
            }
        ],
        "วัฒนธรรมและวัด": [
            { 
                name: "วัดละหารไร่ (หลวงปู่ทิม)", 
                image: "", 
                desc: "วัดเกจิอาจารย์ดัง ศิษยานุศิษย์นิยมมากราบไหว้ขอพรเพื่อความเป็นสิริมงคล" 
            },
            { 
                name: "ตลาดเก่า 100 ปี ยมจินดา", 
                image: "", 
                desc: "ถนนคนเดินและชุมชนเก่าแก่ริมแม่น้ำระยอง สัมผัสบรรยากาศย้อนยุคและของกินพื้นบ้านอร่อยๆ" 
            }
        ]
    },
    "จันทบุรี": {
        "คาเฟ่และร้านกาแฟ": [
            { 
                name: "บางกระจะ คาเฟ่ (ชุมชนริมน้ำจันทบูร)", 
                image: "", 
                desc: "คาเฟ่บรรยากาศอบอุ่นริมแม่น้ำจันทบุรี ผสมผสานกลิ่นอายวัฒนธรรมชุมชนเก่า" 
            },
            { 
                name: "Moo Yoo Rose House (ท่าใหม่)", 
                image: "", 
                    desc: "คาเฟ่ทรงโดมกระจกสีชมพูกลุ่มหินริมทะเล วิวอลังการ ถ่ายรูปสวยสะดุดตา" 
            }
        ],
        "ธรรมชาติและทะเล": [
            { 
                name: "อุทยานแห่งชาติน้ำตกพลิ้ว", image: "", 
                desc: "น้ำตกใสสะอาดท่ามกลางธรรมชาติร่มรื่น มีปลาพลวงหินว่ายวนเวียนอยู่จำนวนมาก" 
            },
            { 
                name: "จุดชมวิวเนินนางพญา (อ่าวคุ้งกระเบน)", 
                image: "", 
                desc: "จุดชมวิวถนนเลียบชายหาดที่สวยที่สุดในภาคตะวันออก โค้งถนนสวยงามวิวทะเลกว้างไกล" 
            }
        ],
        "วัฒนธรรมและวัด": [
            { 
                name: "ชุมชนเก่าริมน้ำจันทบูร", 
                image: "", 
                desc: "ชุมชนโบราณอายุกว่า 300 ปี บ้านเรือนไม้เก่าแก่และสตรีทอาร์ตสุดน่ารัก" 
            },
            { 
                name: "อาสนวิหารพระนางมารีอาปฏิสนธินิรมล", 
                image: "", 
                desc: "โบสถ์คาทอลิกสไตล์โกธิคที่ใหญ่ที่สุดในประเทศไทย งดงามตระการตาด้วยกระจกสีสเตนลาส" 
            }
        ]
    },
    "ตราด": {
        "คาเฟ่และร้านกาแฟ": [
            { name: "The Ozone Cafe (เมืองตราด)", image: "", desc: "คาเฟ่บรรยากาศสบายๆ ร่มรื่นด้วยสวนดอกไม้และเครื่องดื่มสดชื่น" },
            { name: "Cafe De Koh Chang", image: "", desc: "คาเฟ่ริมหาดบนเกาะช้าง ชมวิวทะเลสีครามแบบพาโนรามา" }
        ],
        "ธรรมชาติและทะเล": [
            { name: "เกาะช้าง", image: "", desc: "เกาะใหญ่อันดับ 2 ของไทย เต็มไปด้วยป่าสมบูรณ์ น้ำตก และหาดทรายสวยงาม" },
            { name: "เกาะกูด", image: "", desc: "สวรรค์แห่งการพักผ่อน น้ำใสราวกระจก เงียบสงบ เป็นธรรมชาติสุดๆ" },
            { name: "หาดทรายดำ (แหลมงอบ)", image: "", desc: "แหล่งท่องเที่ยวทางธรรมชาติที่หาดูได้ยาก 1 ใน 5 ของโลก เม็ดทรายสีดำสนิท" }
        ],
        "วัฒนธรรมและวัด": [
            { name: "วัดบุปผาราม (วัดปลายคลอง)", image: "", desc: "วัดเก่าแก่ที่สุดในจังหวัดตราด ชมสถาปัตยกรรมและพิพิธภัณฑ์พื้นบ้าน" },
            { name: "ชุมชนบ้านน้ำเชี่ยว", image: "", desc: "ชุมชนท่องเที่ยววิถีพุทธ-มุสลิม ลิ้มลองงดงามของอาหารพื้นบ้านและขนมตังเมกรอบ" }
        ]
    },
    "ฉะเชิงเทรา": {
        "คาเฟ่และร้านกาแฟ": [
            { name: "บ้านปิ่นปัก คาเฟ่ (อ.เมือง)", image: "", desc: "คาเฟ่สไตล์ไทยคลาสสิกริมแม่น้ำบางปะกง เบเกอรี่โฮมเมดอร่อย" },
            { name: "Chibani Cafe", image: "", desc: "คาเฟ่มินิมอลสไตล์ญี่ปุ่น มีมุมสวนทุ่งหญ้า ถ่ายรูปสวยละมุน" }
        ],
        "ธรรมชาติและทะเล": [
            { name: "แม่น้ำบางปะกง", image: "", desc: "ล่องเรือชมวิถีชีวิตริมน้ำและดูโลมาอิราวดี (ในบางฤดูกาล)" },
            { name: "อ่างเก็บน้ำลาดกระทิง", image: "", desc: "จุดกางเต็นท์ชมวิวธรรมชาติ ยามเย็นพระอาทิตย์ตกสวยมาก" }
        ],
        "วัฒนธรรมและวัด": [
            { name: "วัดโสธรวรารามวรวิหาร", image: "", desc: "วัดคู่บ้านคู่เมืองแปดริ้ว กราบไหว้หลวงพ่อโสธรศักดิ์สิทธิ์" },
            { name: "วัดสมานรัตนาราม", image: "", desc: "สักการะพระพิฆเนศปางนอนเสวยสุของค์ใหญ่ที่สุดในไทย" }
        ]
    },
    "ปราจีนบุรี": {
        "คาเฟ่และร้านกาแฟ": [
            { name: "A-Lek Cafe (เมืองปราจีน)", image: "", desc: "คาเฟ่สุดชิค กาแฟดริปและเบเกอรี่โฮมเมดรสชาติดี" },
            { name: "Tree House Cafe (ประจันตคาม)", image: "", desc: "คาเฟ่บนต้นไม้ ร่มรื่นกลมกลืนกับธรรมชาติและสายน้ำ" }
        ],
        "ธรรมชาติและทะเล": [
            { name: "แก่งหินเพิง (นาดี)", image: "", desc: "แหล่งล่องแก่งยอดฮิต สนุกสนานเร้าใจในช่วงฤดูน้ำหลาก" },
            { name: "น้ำตกเขาอีโต้", image: "", desc: "น้ำตกธรรมชาติไหลผ่านโขดหิน เหมาะกับการมาพักผ่อนเล่นน้ำ" }
        ],
        "วัฒนธรรมและวัด": [
            { name: "วัดแก้วพิจิตร", image: "", desc: "วัดเก่าแก่ที่สร้างด้วยสถาปัตยกรรมผสมผสานไทย จีน และยุโรป งดงามแปลกตา" },
            { name: "โบราณสถานเมืองสระมรกต", image: "", desc: "แหล่งโบราณคดีสำคัญ รอยพระพุทธบาทศิลาคู่โบราณ" }
        ]
    },
    "สระแก้ว": {
        "คาเฟ่และร้านกาแฟ": [
            { name: "De' Cafe Sa Kaeo", image: "", desc: "คาเฟ่บรรยากาศสบายๆ มุมถ่ายรูปเพียบ เครื่องดื่มชื่นใจ" },
            { name: "The Camp Cafe (อรัญประเทศ)", image: "", desc: "คาเฟ่สไตล์แคมป์ปิ้ง อบอุ่น เป็นกันเอง" }
        ],
        "ธรรมชาติและทะเล": [
            { name: "อุทยานแห่งชาติปางสีดา", image: "", desc: "แหล่งดูผีเสื้อนานาชนิด ป่าอุดมสมบูรณ์ น้ำตกสวยงาม" },
            { name: "ละลุ (อุทยานแห่งชาติตาพระยา)", image: "", desc: "ประติมากรรมธรรมชาติจากดินที่ยุบตัว คล้ายแพะเมืองผี" }
        ],
        "วัฒนธรรมและวัด": [
            { name: "ปราสาทสด๊กก๊อกธม (โคกสูง)", image: "", desc: "ปราสาทหินขอมโบราณขนาดใหญ่ที่สุดในภาคตะวันออก" },
            { name: "ตลาดโรงเกลือ (อรัญประเทศ)", image: "", desc: "แหล่งช้อปปิ้งสินค้าราคาประหยัดชายแดนไทย-กัมพูชา" }
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

    // Elements ของ Modal ป๊อปอัพ
    const modal = document.getElementById("place-modal");
    const modalImg = document.getElementById("modal-img");
    const modalProvince = document.getElementById("modal-province");
    const modalCategory = document.getElementById("modal-category");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalTransport = document.getElementById("modal-transport");
    const modalCostPerson = document.getElementById("modal-cost-person");
    const modalCostFriends = document.getElementById("modal-cost-friends");
    const modalCostFamily = document.getElementById("modal-cost-family");
    const modalFoodTip = document.getElementById("modal-food-tip");
    const modalMapBtn = document.getElementById("modal-map-btn");
    const modalCopyBtn = document.getElementById("modal-copy-btn");
    const modalClose = document.getElementById("modal-close");

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

    // สร้างข้อมูลการเดินทาง งบประมาณ และคำแนะนำมื้ออาหารตามจำนวนวัน
    function getTripDetails(days) {
        if (days === "1") {
            return {
                transport: "เดินทางด้วยรถยนต์ส่วนตัว หรือรถตู้ประจำทาง (Day Trip ไปเช้าเย็นกลับ)",
                costPerson: "ประมาณ 800 - 1,500 บาท / คน",
                costFriends: "ประมาณ 2,000 - 3,500 บาท / กลุ่ม (หารค่าน้ำมัน)",
                costFamily: "ประมาณ 2,550 - 4,500 บาท / ครอบครัว (3-4 คน)",
                foodTip: "🍽️ แนะนำมื้อกลางวัน: แวะร้านอาหารพื้นบ้านหรือซีฟู้ดชื่อดังในท้องถิ่น และแวะคาเฟ่ชิคๆ ช่วงบ่าย"
            };
        } else if (days === "2") {
            return {
                transport: "แนะนำรถยนต์ส่วนตัว ขับรถเที่ยวสบายๆ ทริป 2 วัน 1 คืน",
                costPerson: "ประมาณ 2,500 - 4,500 บาท / คน",
                costFriends: "ประมาณ 6,000 - 10,000 บาท / กลุ่ม (หารค่าห้องพัก)",
                costFamily: "ประมาณ 6,500 - 12,000 บาท / ครอบครัว (รวมที่พัก 1 คืน)",
                foodTip: "🍽️ แนะนำทริปอาหาร: วันแรกมื้อเที่ยงริมเล มื้อเย็นจัดเต็มปิ้งย่างซีฟู้ดสดๆ / วันที่สองแวะร้านกาแฟวิวสวยก่อนกลับ"
            };
        } else {
            return {
                transport: "เหมาะสำหรับทริปพักผ่อนยาว ขับรถเที่ยวรอบเมืองหรือข้ามเกาะ (3 วัน 2 คืน)",
                costPerson: "ประมาณ 5,000 - 8,000 บาท / คน",
                costFriends: "ประมาณ 12,000 - 20,000 บาท / กลุ่ม (รวมที่พักและค่าเรือข้ามเกาะ)",
                costFamily: "ประมาณ 14,000 - 24,000 บาท / ครอบครัว (รวมที่พัก 2 คืนและอาหารซีฟู้ด)",
                foodTip: "🍽️ แนะนำทริปอาหาร: จัดเต็มตระเวนกินร้านอาหารท้องถิ่นชื่อดัง, อาหารทะเลสดๆ มื้อค่ำริมหาด และคาเฟ่สไตล์มินิมอลตลอดทริป"
            };
        }
    }

    if (modalClose) modalClose.onclick = () => modal.hidden = true;
    if (modal) modal.onclick = (e) => { if (e.target === modal) modal.hidden = true; };

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
                            desc: item.desc,
                            province: prov, 
                            category: cat 
                        });
                    });
                }
            });
        });

        collectedPlaces.sort(() => Math.random() - 0.5);
        const finalResults = collectedPlaces.slice(0, 4);

        resultsGrid.innerHTML = "";
        if (finalResults.length === 0) {
            emptyState.hidden = false;
            resultSummary.textContent = "ไม่พบสถานที่ กรุณาเลือกหมวดหมู่อย่างน้อย 1 หมวด";
            return;
        }

        emptyState.hidden = true;
        resultTitle.textContent = `ทริปแนะนำ ${totalDays} วัน (${targetProv === 'all' ? 'ทุกจังหวัดภาคตะวันออก' : targetProv})`;
        resultSummary.textContent = `สุ่มสถานที่สำเร็จ! คลิกที่การ์ดเพื่อดูรายละเอียด งบประมาณ และคำแนะนำมื้ออาหาร`;

        const tripInfo = getTripDetails(totalDays);

        // 1. สร้างการ์ดหลักแบบกระชับ แสดงรูปและชื่อ
        finalResults.forEach((item) => {
            const imgSrc = (item.image && item.image.trim() !== "") ? item.image : (defaultImages[item.category] || defaultImages["ธรรมชาติและทะเล"]);
            
            const card = document.createElement("article");
            card.className = "result-card overflow-hidden rounded-[1.5rem] bg-white border border-[#e2e8df] flex flex-col cursor-pointer";
            
            card.innerHTML = `
                <div class="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img src="${imgSrc}" alt="${item.name}" class="h-full w-full object-cover">
                  <span class="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-[#3c5c36]">${item.province}</span>
                  <span class="absolute top-3 right-3 rounded-full bg-[#a5653a] px-3 py-1 text-xs font-bold text-white">${item.category}</span>
                </div>
                <div class="p-5 flex items-center justify-between">
                  <h3 class="text-lg font-bold text-[#294837] line-clamp-1">${item.name}</h3>
                  <span class="text-xs font-bold text-[#527849] bg-[#edf4e9] px-2.5 py-1.5 rounded-lg shrink-0">ดูรายละเอียด 🔍</span>
                </div>
            `;

            // เปิดป๊อปอัพแสดงรายละเอียดทั้งหมดเมื่อคลิก
            card.addEventListener("click", () => {
                modalImg.src = imgSrc;
                modalProvince.textContent = item.province;
                modalCategory.textContent = item.category;
                modalTitle.textContent = item.name;
                modalDesc.textContent = item.desc;
                modalTransport.textContent = tripInfo.transport;
                modalCostPerson.textContent = tripInfo.costPerson;
                modalCostFriends.textContent = tripInfo.costFriends;
                modalCostFamily.textContent = tripInfo.costFamily;
                modalFoodTip.textContent = tripInfo.foodTip;
                modalMapBtn.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name)}`;
                
                const textToCopy = `ทริปแนะนำ: ${item.name} จ.${item.province} (${item.category})\n- รายละเอียด: ${item.desc}\n- การเดินทาง: ${tripInfo.transport}\n- งบต่อคน: ${tripInfo.costPerson}\n- งบกลุ่มเพื่อน: ${tripInfo.costFriends}\n- งบครอบครัว: ${tripInfo.costFamily}\n- แนะนำมื้ออาหาร: ${tripInfo.foodTip}`;
                
                modalCopyBtn.onclick = function() {
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        const originalText = modalCopyBtn.innerHTML;
                        modalCopyBtn.innerHTML = "✅ ก๊อปปี้เรียบร้อย!";
                        modalCopyBtn.classList.add("bg-[#d4edbc]");
                        setTimeout(() => {
                            modalCopyBtn.innerHTML = originalText;
                            modalCopyBtn.classList.remove("bg-[#d4edbc]");
                        }, 2000);
                    });
                };

                modal.hidden = false;
            });

            resultsGrid.appendChild(card);
        });

        // 2. ส่วน "สถานที่แนะนำเพิ่มเติม" ด้านล่าง (แสดงรายชื่อตัวอักษร ไม่มีรูป)
        const remainingPlaces = collectedPlaces.slice(4, 10);
        if (remainingPlaces.length > 0) {
            const extraSection = document.createElement("div");
            extraSection.className = "mt-10 col-span-full rounded-2xl bg-white p-6 border border-[#e2e8df]";
            extraSection.innerHTML = `
                <h3 class="text-lg font-bold text-[#1f4d3a] mb-4">🌟 สถานที่ท่องเที่ยวแนะนำเพิ่มเติม (ตัวเลือกเสริมสำหรับทริปคุณ)</h3>
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

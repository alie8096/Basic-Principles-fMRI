const translationCanvas = document.getElementById('translation-canvas'); // کانواس انیمیشن ترجمه
const ctxTranslation = translationCanvas.getContext('2d'); // زمینه کانواس

const translationWidth = translationCanvas.width = 600; // عرض کانواس
const translationHeight = translationCanvas.height = 300; // ارتفاع کانواس

const cubeSize = 50; // اندازه مکعب
const gap = 120; // فاصله بین مکعب‌ها

// مکعبی که به عنوان مبنا قرار می‌گیرد
const referenceCubeIndex = 0; // مکعب مبنا (اولین مکعب)

const initialPositionsY = Array.from({ length: 4 }, () => Math.random() * 200); // موقعیت‌های اولیه در محور Y
const finalPositionY = initialPositionsY[referenceCubeIndex]; // موقعیت نهایی همه مکعب‌ها بر اساس مکعب مبنا

const translationDuration = 3000; // مدت زمان انیمیشن
let translationAnimationRunning = false; // پرچم کنترل انیمیشن
let translationStartTime = 0; // زمان شروع انیمیشن

function drawTranslationAxes() {
  ctxTranslation.strokeStyle = "black"; // رنگ محورهای کانواس
  ctxTranslation.lineWidth = 1;

  // رسم محور X در پایین کانواس
  ctxTranslation.beginPath();
  ctxTranslation.moveTo(0, translationHeight - 20); // نقطه شروع محور X
  ctxTranslation.lineTo(translationWidth, translationHeight - 20);
  ctxTranslation.stroke(); 
}

function drawTranslatedCubes(positionsY, progress) {
  ctxTranslation.fillStyle = "#3498db"; // رنگ مکعب‌ها

  // رسم مکعب‌ها بر اساس پیشرفت
  for (let i = 0; i < positionsY.length; i++) {
    const currentY = positionsY[i] + (finalPositionY - positionsY[i]) * progress; // موقعیت Y فعلی
    const xPosition = 50 + i * gap; // موقعیت X برای هر مکعب

    ctxTranslation.fillRect(xPosition, translationHeight - currentY - cubeSize, cubeSize, cubeSize); // رسم مکعب‌ها
  }
}

function animateTranslation() {
  if (!translationAnimationRunning) return; // اگر انیمیشن اجرا نمی‌شود، خروج

  const elapsed = Date.now() - translationStartTime; // زمان سپری شده
  const progress = Math.min(1, elapsed / translationDuration); // میزان پیشرفت انیمیشن

  ctxTranslation.clearRect(0, 0, translationWidth, translationHeight); // پاک کردن کانواس
  drawTranslationAxes(); // رسم محورهای کانواس
  
  drawTranslatedCubes(initialPositionsY, progress); // رسم مکعب‌ها با پیشرفت انیمیشن

  if (progress < 1) {
    requestAnimationFrame(animateTranslation); // درخواست فریم بعدی
  } else {
    translationAnimationRunning = false; // پایان انیمیشن
    document.getElementById("play-button-translation").disabled = false; // فعال کردن دوباره دکمه پلی
  }
}

document.getElementById("play-button-translation").addEventListener("click", () => { 
  if (!translationAnimationRunning) { // اگر انیمیشن شروع نشده است
    translationStartTime = Date.now(); // زمان شروع انیمیشن
    translationAnimationRunning = true; // پرچم فعال شدن انیمیشن
    document.getElementById("play-button-translation").disabled = true; // غیرفعال کردن دکمه پلی
    animateTranslation(); // شروع انیمیشن
  }
});

// رسم محورهای کانواس و نمایش مکعب‌ها بر اساس موقعیت‌های اولیه
drawTranslationAxes(); 
drawTranslatedCubes(initialPositionsY, 0); 

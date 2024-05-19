const rgbCanvas = document.getElementById('rgb-canvas'); // کانواس RGB
const ctxRGB = rgbCanvas.getContext('2d'); // زمینه کانواس

const rgbWidth = rgbCanvas.width = 600; // عرض کانواس
const rgbHeight = rgbCanvas.height = 340; // ارتفاع کانواس

const rgbRadius = 60; // شعاع دایره‌ها
const initialRGBPositions = [ // موقعیت اولیه دایره‌ها
  { x: 150, y: 70 }, // دایره قرمز (Red)
  { x: 450, y: 70 }, // دایره سبز (Green)
  { x: 300, y: 250 }  // دایره آبی (Blue)
];

const finalRGBPositions = [ // موقعیت نهایی دایره‌ها
  { x: 260, y: 135 }, // دایره قرمز
  { x: 340, y: 135 }, // دایره سبز
  { x: 300, y: 200 }  // دایره آبی
];

const rgbDuration = 3000; // مدت زمان انیمیشن
let rgbAnimationRunning = false; // پرچم کنترل وضعیت انیمیشن
let rgbStartTime = 0; // زمان شروع انیمیشن

function drawRGBCircles(progress) {
  ctxRGB.clearRect(0, 0, rgbWidth, rgbHeight); // پاک کردن کانواس
  ctxRGB.fillStyle = "black"; // پس‌زمینه سیاه
  ctxRGB.fillRect(0, 0, rgbWidth, rgbHeight); // رسم پس‌زمینه سیاه
  ctxRGB.globalCompositeOperation = "lighter"; // حالت ترکیب نوری مناسب برای RGB
  
  // رسم دایره قرمز (Red)
  const redPosition = {
    x: initialRGBPositions[0].x + (finalRGBPositions[0].x - initialRGBPositions[0].x) * progress,
    y: initialRGBPositions[0].y + (finalRGBPositions[0].y - initialRGBPositions[0].y) * progress
  };
  ctxRGB.fillStyle = "rgba(255, 0, 0, 0.5)"; // رنگ قرمز با شفافیت
  ctxRGB.beginPath();
  ctxRGB.arc(redPosition.x, redPosition.y, rgbRadius, 0, 2 * Math.PI); // رسم دایره
  ctxRGB.fill();

  // رسم دایره سبز (Green)
  const greenPosition = {
    x: initialRGBPositions[1].x + (finalRGBPositions[1].x - initialRGBPositions[1].x) * progress,
    y: initialRGBPositions[1].y + (finalRGBPositions[1].y - initialRGBPositions[1].y) * progress
  };
  ctxRGB.fillStyle = "rgba(0, 255, 0, 0.5)"; // رنگ سبز با شفافیت
  ctxRGB.beginPath();
  ctxRGB.arc(greenPosition.x, greenPosition.y, rgbRadius, 0, 2 * Math.PI); // رسم دایره
  ctxRGB.fill();

  // رسم دایره آبی (Blue)
  const bluePosition = {
    x: initialRGBPositions[2].x + (finalRGBPositions[2].x - initialRGBPositions[2].x) * progress,
    y: initialRGBPositions[2].y + (finalRGBPositions[2].y - initialRGBPositions[2].y) * progress
  };
  ctxRGB.fillStyle = "rgba(0, 0, 255, 0.5)"; // رنگ آبی با شفافیت
  ctxRGB.beginPath();
  ctxRGB.arc(bluePosition.x, bluePosition.y, rgbRadius, 0, 2 * Math.PI); // رسم دایره
  ctxRGB.fill();
}

function animateRGB() {
  if (!rgbAnimationRunning) return; // اگر انیمیشن اجرا نمی‌شود، خروج

  const rgbElapsed = Date.now() - rgbStartTime; // زمان سپری شده
  const rgbProgress = Math.min(1, rgbElapsed / rgbDuration); // میزان پیشرفت انیمیشن

  drawRGBCircles(rgbProgress); // رسم دایره‌ها با میزان پیشرفت

  if (rgbProgress < 1) {
    requestAnimationFrame(animateRGB); // درخواست فریم بعدی
  } else {
    rgbAnimationRunning = false; // پایان انیمیشن
    document.getElementById("play-button-rgb").disabled = false; // فعال کردن دوباره دکمه پلی
  }
}

document.getElementById("play-button-rgb").addEventListener("click", () => { 
  if (!rgbAnimationRunning) { // اگر انیمیشن شروع نشده باشد
    rgbAnimationRunning = true; // فعال کردن انیمیشن
    document.getElementById("play-button-rgb").disabled = true; // غیرفعال کردن دکمه پلی
    rgbStartTime = Date.now(); // زمان شروع
    animateRGB(); // شروع انیمیشن
  }
});

// رسم حالت اولیه با پس‌زمینه سیاه و دایره‌های RGB
drawRGBCircles(0); 

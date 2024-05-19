const cmykCanvas = document.getElementById('cmyk-canvas');
const ctxCMYK = cmykCanvas.getContext('2d'); // دریافت زمینه کانواس

const cmykWidth = cmykCanvas.width = 600; // عرض کانواس
const cmykHeight = cmykCanvas.height = 340; // ارتفاع کانواس

const cmykRadius = 60; // شعاع دایره‌ها
const cmykInitialPositions = [ 
  { x: 150, y: 70 }, // دایره فیروزه‌ای (Cyan)
  { x: 450, y: 70 }, // دایره سرخابی (Magenta)
  { x: 300, y: 250 }  // دایره زرد (Yellow)
];

const cmykFinalPositions = [ 
  { x: 260, y: 135 }, // موقعیت نهایی برای فیروزه‌ای
  { x: 340, y: 135 }, // موقعیت نهایی برای سرخابی
  { x: 300, y: 200 }  // موقعیت نهایی برای زرد
];

const cmykDuration = 3000; // مدت زمان انیمیشن
let cmykAnimationRunning = false; // پرچم برای کنترل اجرای انیمیشن
let cmykStartTime = 0; // زمان شروع انیمیشن

function drawCMYKCircles(progress) {
  ctxCMYK.clearRect(0, 0, cmykWidth, cmykHeight); // پاک کردن کانواس
  ctxCMYK.globalCompositeOperation = "multiply"; // حالت ترکیب نوری برای CMYK
  
  // رسم دایره فیروزه‌ای (Cyan)
  const cyanPosition = {
    x: cmykInitialPositions[0].x + (cmykFinalPositions[0].x - cmykInitialPositions[0].x) * progress,
    y: cmykInitialPositions[0].y + (cmykFinalPositions[0].y - cmykInitialPositions[0].y) * progress
  };
  ctxCMYK.fillStyle = "rgba(0, 255, 255, 0.5)"; // رنگ فیروزه‌ای با شفافیت
  ctxCMYK.beginPath();
  ctxCMYK.arc(cyanPosition.x, cyanPosition.y, cmykRadius, 0, 2 * Math.PI);
  ctxCMYK.fill();

  // رسم دایره سرخابی (Magenta)
  const magentaPosition = {
    x: cmykInitialPositions[1].x + (cmykFinalPositions[1].x - cmykInitialPositions[1].x) * progress,
    y: cmykInitialPositions[1].y + (cmykFinalPositions[1].y - cmykInitialPositions[1].y) * progress
  };
  ctxCMYK.fillStyle = "rgba(255, 0, 255, 0.5)"; // رنگ سرخابی با شفافیت
  ctxCMYK.beginPath();
  ctxCMYK.arc(magentaPosition.x, magentaPosition.y, cmykRadius, 0, 2 * Math.PI);
  ctxCMYK.fill();

  // رسم دایره زرد (Yellow)
  const yellowPosition = {
    x: cmykInitialPositions[2].x + (cmykFinalPositions[2].x - cmykInitialPositions[2].x) * progress,
    y: cmykInitialPositions[2].y + (cmykFinalPositions[2].y - cmykInitialPositions[2].y) * progress
  };
  ctxCMYK.fillStyle = "rgba(255, 255, 0, 0.5)"; // رنگ زرد با شفافیت
  ctxCMYK.beginPath();
  ctxCMYK.arc(yellowPosition.x, yellowPosition.y, cmykRadius, 0, 2 * Math.PI);
  ctxCMYK.fill();
}

function cmykAnimate() {
  if (!cmykAnimationRunning) return; // اگر انیمیشن در حال اجرا نیست، خروج

  const cmykElapsed = Date.now() - cmykStartTime; // زمان سپری شده
  const cmykProgress = Math.min(1, cmykElapsed / cmykDuration); // میزان پیشرفت

  drawCMYKCircles(cmykProgress); // رسم دایره‌ها با میزان پیشرفت

  if (cmykProgress < 1) {
    requestAnimationFrame(cmykAnimate); // درخواست فریم بعدی
  } else {
    cmykAnimationRunning = false; // پایان انیمیشن
    document.getElementById("play-button-cmyk").disabled = false; // فعال کردن دکمه
  }
}

document.getElementById("play-button-cmyk").addEventListener("click", () => { 
  if (!cmykAnimationRunning) { // اگر انیمیشن شروع نشده است
    document.getElementById("play-button-cmyk").disabled = true; // غیرفعال کردن دکمه
    cmykStartTime = Date.now(); // زمان شروع
    cmykAnimationRunning = true; // پرچم فعال کردن انیمیشن
    cmykAnimate(); // شروع انیمیشن
  }
});

// رسم حالت اولیه
drawCMYKCircles(0);

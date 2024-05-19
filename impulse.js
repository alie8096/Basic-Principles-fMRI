const impulseCanvas = document.getElementById('impulse-canvas'); // دریافت عنصر کانواس
const ctxImpulse = impulseCanvas.getContext('2d'); // زمینه کانواس

const impulseWidth = impulseCanvas.width = 400; // عرض کانواس
const impulseHeight = impulseCanvas.height = 200; // ارتفاع کانواس

const initialWidth = 60; // عرض اولیه مستطیل
const initialHeight = 60; // ارتفاع اولیه
const finalWidth = 12; // عرض نهایی
const finalHeight = 300; // ارتفاع نهایی
const impulseDuration = 3000; // مدت زمان انیمیشن
let isAnimatingImpulse = false; // پرچم برای کنترل وضعیت انیمیشن

function drawAxes() {
  ctxImpulse.strokeStyle = "black"; // رنگ محورها
  ctxImpulse.lineWidth = 1;

  // رسم محور X در پایین کانواس
  ctxImpulse.beginPath();
  ctxImpulse.moveTo(0, impulseHeight - 40);
  ctxImpulse.lineTo(impulseWidth, impulseHeight - 40);
  ctxImpulse.stroke();

  // رسم محور Y در مرکز کانواس
  ctxImpulse.beginPath();
  ctxImpulse.moveTo(impulseWidth / 2, impulseHeight);
  ctxImpulse.lineTo(impulseWidth / 2, 0);
  ctxImpulse.stroke();
}

function drawInitialImpulse() {
  ctxImpulse.clearRect(0, 0, impulseWidth, impulseHeight); // پاک کردن کانواس
  drawAxes(); // رسم محورهای X و Y
  ctxImpulse.fillStyle = "#3498db"; // رنگ پر کردن
  ctxImpulse.fillRect((impulseWidth - initialWidth) / 2, impulseHeight - 40 - initialHeight, initialWidth, initialHeight); // رسم مستطیل اولیه
}

function animateImpulse() {
  if (!isAnimatingImpulse) return; // اگر انیمیشن فعال نیست، خروج

  const startTime = Date.now(); // زمان شروع انیمیشن
  function frame() {
    const elapsed = Date.now() - startTime; // زمان سپری شده
    const progress = Math.min(1, elapsed / impulseDuration); // میزان پیشرفت

    const currentWidth = initialWidth - (initialWidth - finalWidth) * progress; // عرض فعلی
    const currentHeight = initialHeight + (finalHeight - initialHeight) * progress; // ارتفاع فعلی

    ctxImpulse.clearRect(0, 0, impulseWidth, impulseHeight); // پاک کردن کانواس
    drawAxes(); // رسم محورهای X و Y

    ctxImpulse.fillStyle = "#3498db"; // رنگ پر کردن
    ctxImpulse.beginPath();
    ctxImpulse.moveTo((impulseWidth - currentWidth) / 2, impulseHeight - 40 - initialHeight);
    ctxImpulse.quadraticCurveTo(
      impulseWidth / 2,
      impulseHeight - 40 - currentHeight,
      (impulseWidth + currentWidth) / 2,
      impulseHeight - 40 - initialHeight
    ); // رسم منحنی با تغییرات
    ctxImpulse.lineTo((impulseWidth + currentWidth) / 2, impulseHeight - 40);
    ctxImpulse.lineTo((impulseWidth - currentWidth) / 2, impulseHeight - 40);
    ctxImpulse.closePath();
    ctxImpulse.fill(); // پر کردن مستطیل

    if (progress < 1) {
      requestAnimationFrame(frame); // درخواست فریم بعدی
    } else {
      isAnimatingImpulse = false; // پایان انیمیشن
      document.getElementById("play-button-impulse").disabled = false; // فعال کردن دوباره دکمه
    }
  }

  frame(); // شروع انیمیشن
}

const playButtonImpulse = document.getElementById("play-button-impulse");
playButtonImpulse.addEventListener("click", () => { 
  if (!isAnimatingImpulse) { // اگر انیمیشن شروع نشده است
    document.getElementById("play-button-impulse").disabled = true; // غیرفعال کردن دکمه
    isAnimatingImpulse = true; // پرچم فعال کردن انیمیشن
    animateImpulse(); // شروع انیمیشن
  }
});

drawInitialImpulse(); // رسم حالت اولیه

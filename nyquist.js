const nyquistCanvas = document.getElementById('nyquist-canvas'); // کانواس انیمیشن نایکویست
const ctxNyquist = nyquistCanvas.getContext('2d'); // زمینه کانواس

const nyquistWidth = nyquistCanvas.width = 600; // عرض کانواس
const nyquistHeight = nyquistCanvas.height = 200; // ارتفاع کانواس

const baseFrequency = 0.01; // فرکانس پایه
const doubleFrequency = 0.02; // دوبرابر فرکانس پایه
const amplitude = 40; // دامنه موج
const offset = nyquistHeight / 2; // نقطه شروع محور Y
const nyquistDuration = 10; // مدت زمان انیمیشن
let nyquistAnimationRunning = false; // پرچم برای کنترل انیمیشن

function drawNyquistAxes() {
  ctxNyquist.strokeStyle = "black"; // رنگ محورهای کانواس
  ctxNyquist.lineWidth = 1;

  // رسم محور X در وسط کانواس
  ctxNyquist.beginPath();
  ctxNyquist.moveTo(0, offset); // محور X در وسط
  ctxNyquist.lineTo(nyquistWidth, offset); 
  ctxNyquist.stroke();
}

function findIntersections(xMax, basePhase, doublePhase) {
  const intersections = []; // لیستی برای ذخیره نقاط تقاطع

  for (let x = 0; x < xMax; x++) {
    const y1 = amplitude * Math.sin(x * baseFrequency * 2 * Math.PI + basePhase); // Y برای فرکانس پایه
    const y2 = amplitude * Math.sin(x * doubleFrequency * 2 * Math.PI + doublePhase); // Y برای فرکانس دوبرابر

    if (x > 0) {
      const y1Prev = amplitude * Math.sin((x - 1) * baseFrequency * 2 * Math.PI + basePhase); // Y قبلی برای فرکانس پایه
      const y2Prev = amplitude * Math.sin((x - 1) * doubleFrequency * 2 * Math.PI + doublePhase); // Y قبلی برای فرکانس دوبرابر
      
      // اگر علامت اختلاف تغییر کرده باشد، یک نقطه تقاطع وجود دارد
      if ((y1 - y2) * (y1Prev - y2Prev) < 0) {
        intersections.push({ x, y: y1 }); // اضافه کردن نقطه تقاطع
      }
    }
  }

  return intersections; // بازگرداندن نقاط تقاطع
}

function drawNyquistSines(xMax, basePhase, doublePhase) {
  ctxNyquist.beginPath(); // رسم مسیر
  ctxNyquist.moveTo(0, offset); // شروع از محور X
  
  for (let x = 0; x < xMax; x++) {
    const y = amplitude * Math.sin(x * baseFrequency * 2 * Math.PI + basePhase); // محاسبه Y برای فرکانس پایه
    ctxNyquist.lineTo(x, offset - y); // رسم خط به نقطه جدید
  }

  ctxNyquist.strokeStyle = "blue"; // رنگ آبی برای فرکانس پایه
  ctxNyquist.stroke(); // اتمام رسم خط
  
  ctxNyquist.beginPath(); // شروع مسیر جدید
  ctxNyquist.moveTo(0, offset); // شروع از محور X

  for (let x = 0; x < xMax; x++) {
    const y = amplitude * Math.sin(x * doubleFrequency * 2 * Math.PI + doublePhase); // محاسبه Y برای فرکانس دوبرابر
    ctxNyquist.lineTo(x, offset - y); // رسم خط به نقطه جدید
  }

  ctxNyquist.strokeStyle = "red"; // رنگ قرمز برای فرکانس دوبرابر
  ctxNyquist.stroke(); // اتمام رسم خط
  
  // یافتن و رسم نقاط تقاطع
  const intersections = findIntersections(xMax, basePhase, doublePhase);
  ctxNyquist.fillStyle = "green"; // رنگ سبز برای نقاط تقاطع
  intersections.forEach(point => {
    ctxNyquist.beginPath();
    ctxNyquist.arc(point.x, offset - point.y, 3, 0, 2 * Math.PI); // رسم دایره کوچک
    ctxNyquist.fill(); // پر کردن دایره
  });
}

function animateNyquist() {
  if (!nyquistAnimationRunning) return; // اگر انیمیشن اجرا نمی‌شود، خروج

  const nyquistStartTime = Date.now(); // زمان شروع انیمیشن

  function frame() {
    const elapsed = (Date.now() - nyquistStartTime) / 1000; // زمان سپری شده
    const progress = Math.min(1, elapsed / nyquistDuration); // میزان پیشرفت
    const xMax = Math.round(nyquistWidth * progress); // حداکثر مقدار X
    const basePhase = elapsed * baseFrequency * 2 * Math.PI; // فاز فرکانس پایه
    const doublePhase = elapsed * doubleFrequency * 2 * Math.PI; // فاز فرکانس دوبرابر
    
    ctxNyquist.clearRect(0, 0, nyquistWidth, nyquistHeight); // پاک کردن کانواس
    drawNyquistAxes(); // رسم محورهای کانواس
    
    drawNyquistSines(xMax, basePhase, doublePhase); // رسم سینوس‌ها با پیشرفت انیمیشن
    
    if (progress < 1) {
      requestAnimationFrame(frame); // درخواست فریم بعدی
    } else {
      nyquistAnimationRunning = false; // پایان انیمیشن
      document.getElementById("play-button-nyquist").disabled = false; // فعال کردن دوباره دکمه پلی
    }
  }
  
  frame(); // شروع انیمیشن
}

document.getElementById("play-button-nyquist").addEventListener("click", () => { 
  if (!nyquistAnimationRunning) { // اگر انیمیشن اجرا نشده باشد
    nyquistAnimationRunning = true; // فعال کردن انیمیشن
    document.getElementById("play-button-nyquist").disabled = true; // غیرفعال کردن دکمه پلی
    animateNyquist(); // شروع انیمیشن
  }
});

drawNyquistAxes(); // رسم محورهای کانواس
drawNyquistSines(nyquistWidth, 0, 0); // رسم سینوس‌های اولیه

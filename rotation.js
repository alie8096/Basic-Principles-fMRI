const rotationCanvas = document.getElementById('rotation-canvas'); // کانواس انیمیشن روتیشن
const ctxRotation = rotationCanvas.getContext('2d'); // زمینه کانواس

const rotationWidth = rotationCanvas.width = 600; // عرض کانواس
const rotationHeight = rotationCanvas.height = 200; // ارتفاع کانواس

const initialRotations = [-Math.PI / 6, Math.PI / 4, -Math.PI / 8, Math.PI / 6]; // مقادیر اولیه روتیشن
const finalRotation = 0; // روتیشن نهایی
const rotationDuration = 3000; // مدت زمان انیمیشن
let rotationAnimationRunning = false; // پرچم برای کنترل وضعیت انیمیشن

function drawRotationAxes() {
  ctxRotation.strokeStyle = "black"; // رنگ محورها
  ctxRotation.lineWidth = 1;

  // رسم محور X در پایین کانواس
  ctxRotation.beginPath();
  ctxRotation.moveTo(0, rotationHeight); 
  ctxRotation.lineTo(rotationWidth, rotationHeight);
  ctxRotation.stroke();
}

function drawRotatedCubes(rotations, progress) {
  const cubeSize = 60; // اندازه مکعب‌ها
  const gap = 150; // فاصله بین مکعب‌ها
  
  ctxRotation.fillStyle = "#3498db"; // رنگ مکعب‌ها
  
  for (let i = 0; i < rotations.length; i++) {
    const currentRotation = rotations[i] + (finalRotation - rotations[i]) * progress; // محاسبه روتیشن فعلی
    
    ctxRotation.save(); // ذخیره وضعیت
    ctxRotation.translate(40 + i * gap, rotationHeight - 40); // انتقال به موقعیت جدید
    ctxRotation.rotate(currentRotation); // چرخش مکعب
    ctxRotation.fillRect(-cubeSize / 2, -cubeSize / 2, cubeSize, cubeSize); // رسم مکعب
    ctxRotation.restore(); // بازیابی وضعیت
  }
}

function animateRotation() {
  if (!rotationAnimationRunning) return; // اگر انیمیشن فعال نیست، خروج
  
  const startTime = Date.now(); // زمان شروع انیمیشن
  
  function frame() {
    const elapsed = Date.now() - startTime; // زمان سپری شده
    const progress = Math.min(1, elapsed / rotationDuration); // میزان پیشرفت انیمیشن
    
    ctxRotation.clearRect(0, 0, rotationWidth, rotationHeight); // پاک کردن کانواس
    drawRotationAxes(); // رسم محورهای X
    
    drawRotatedCubes(initialRotations, progress); // رسم مکعب‌ها با روتیشن‌های متفاوت
    
    if (progress < 1) {
      requestAnimationFrame(frame); // درخواست فریم بعدی
    } else {
      rotationAnimationRunning = false; // پایان انیمیشن
      document.getElementById('play-button-rotation').disabled = false; // فعال کردن دکمه پلی
    }
  }
  
  frame(); // شروع انیمیشن
}

document.getElementById('play-button-rotation').addEventListener("click", () => {
  if (!rotationAnimationRunning) { // اگر انیمیشن فعال نیست
    rotationAnimationRunning = true; // پرچم برای شروع انیمیشن
    document.getElementById('play-button-rotation').disabled = true; // غیرفعال کردن دکمه پلی
    animateRotation(); // شروع انیمیشن
  }
});

// رسم محورهای اولیه
drawRotationAxes();
drawRotatedCubes(initialRotations, 0); // نمایش مکعب‌ها با روتیشن‌های اولیه

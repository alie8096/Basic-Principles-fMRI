const playButton = document.getElementById("play-button-fmri"); // دکمه پلی fMRI
const sliceOrder = ["slice1", "slice3", "slice5", "slice2", "slice4", "slice6"]; // ترتیب نمایش اسلایس‌ها
const duration = 1000; // مدت زمان نمایش هر اسلایس
let currentIndex = 0; // شاخص فعلی برای ترتیب نمایش
let animationRunning = false; // پرچم برای کنترل وضعیت انیمیشن

function resetSlices() {
  // حذف کلاس "active" برای بازنشانی اسلایس‌ها
  sliceOrder.forEach(sliceId => {
    const slice = document.getElementById(sliceId); // دریافت اسلایس بر اساس شناسه
    if (slice) {
      slice.classList.remove("active"); // حذف حالت "فعال"
    }
  });
}

function animateSlices() {
  if (!animationRunning) return; // اگر انیمیشن اجرا نمی‌شود، خروج

  const slice = document.getElementById(sliceOrder[currentIndex]); // دریافت اسلایس فعلی
  if (slice) {
    slice.classList.add("active"); // اضافه کردن حالت "فعال"
  }

  currentIndex += 1; // افزایش شاخص

  if (currentIndex < sliceOrder.length) {
    setTimeout(animateSlices, duration); // تنظیم زمان برای نمایش اسلایس بعدی
  } else {
    animationRunning = false; // پایان انیمیشن
    playButton.disabled = false; // فعال کردن دکمه پس از پایان انیمیشن
  }
}

playButton.addEventListener("click", () => { 
  if (!animationRunning) { // اگر انیمیشن شروع نشده باشد
    animationRunning = true; // پرچم برای فعال کردن انیمیشن
    playButton.disabled = true; // غیرفعال کردن دکمه پلی
    currentIndex = 0; // بازنشانی شاخص
    resetSlices(); // بازنشانی اسلایس‌ها قبل از شروع
    animateSlices(); // شروع انیمیشن
  }
});

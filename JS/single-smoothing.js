// انتخاب دکمه پلی و نمودارها
const playButtonSingleSmoothing = document.getElementById("play-button-single-smoothing");
const singleChartBefore = document.getElementById("single-before");
const singleChartAfter = document.getElementById("single-after");

function resetSingleChartsSmooth() {
  // بازنشانی آرام به حالت اولیه با تنظیمات انتقال
  singleChartBefore.classList.remove("dimmed"); // بازگشت به وضوح کامل
  singleChartAfter.classList.remove("shown"); // مخفی کردن نمودار پس از هموارسازی

  // بازگشت به موقعیت اولیه برای نمایش دوباره
  singleChartAfter.style.transition = "opacity 1s, clip-path 2s"; // تنظیم انتقال برای انیمیشن آهسته
}

function animateSingleSmoothing() {
  resetSingleChartsSmooth(); // بازنشانی آرام
  
  // شروع انیمیشن هموارسازی
  setTimeout(() => {
    singleChartBefore.classList.add("dimmed"); // کاهش وضوح برای نمودار قبل از هموارسازی
    singleChartAfter.classList.add("shown"); // نمایش نمودار پس از هموارسازی
  }, 1000); // زمان کوتاه برای بازنشانی قبل از شروع انیمیشن

  // بازه زمانی مناسب برای فعال کردن دوباره دکمه پلی
  setTimeout(() => {
    playButtonSingleSmoothing.disabled = false; // فعال کردن دوباره دکمه پلی پس از پایان انیمیشن
  }, 6000); // مدت زمان کل برای بازنشانی و اجرای انیمیشن
}

// رویداد کلیک برای دکمه پلی
playButtonSingleSmoothing.addEventListener("click", () => {
  playButtonSingleSmoothing.disabled = true; // غیرفعال کردن دکمه پلی
  resetSingleChartsSmooth(); // بازنشانی آرام
  animateSingleSmoothing(); // شروع انیمیشن پس از بازگشت
});

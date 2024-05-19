// انتخاب دکمه پلی و نمودارها
const playButtonGroupSmoothing = document.getElementById("play-button-group-smoothing"); // دکمه پلی برای انیمیشن گروهی
const chartBefore = document.getElementById("chart-before"); // نمودار قبل از هموارسازی
const chartAfter = document.getElementById("chart-after"); // نمودار پس از هموارسازی

function resetCharts() {
  // بازنشانی نمودارها با حذف حالت‌های خاص
  chartBefore.classList.remove("dimmed"); // بازگرداندن وضوح
  chartAfter.classList.remove("shown"); // مخفی کردن نمودار پس از هموارسازی
  chartAfter.style.transition = "opacity 1s, clip-path 2s"; // تنظیم انتقال برای انیمیشن آهسته
}

function animateGroupSmoothing() {
  resetCharts(); // بازنشانی نمودارها

  setTimeout(() => {
    // شروع انیمیشن پس از یک تأخیر کوتاه
    chartBefore.classList.add("dimmed"); // کاهش وضوح برای نمودار قبل
    chartAfter.classList.add("shown"); // نمایش نمودار پس از هموارسازی
  }, 1000); // تاخیر قبل از شروع انیمیشن

  // بازه زمانی مناسب برای فعال کردن دوباره دکمه پلی
  setTimeout(() => {
    playButtonGroupSmoothing.disabled = false; // فعال کردن دوباره دکمه پلی پس از پایان انیمیشن
  }, 6000); // مدت زمان کل برای انیمیشن و بازنشانی
}

playButtonGroupSmoothing.addEventListener("click", () => {
  if (playButtonGroupSmoothing.disabled) return; // اگر دکمه غیرفعال است، خروج

  playButtonGroupSmoothing.disabled = true; // غیرفعال کردن دکمه پلی در هنگام انیمیشن
  animateGroupSmoothing(); // شروع انیمیشن پس از بازنشانی
});

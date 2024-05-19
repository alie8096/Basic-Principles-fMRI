// انتخاب دکمه پلی و اسلایس‌ها
const playButtonSliceTiming = document.getElementById("play-button-slice-timing-correction");
const sliceTimingSlices = document.querySelectorAll(".slice-timing-correction");

// موقعیت‌های اولیه (نامرتب)
const initialPositionsX = [
  "10%",
  "15%",
  "20%",
  "25%",
  "30%",
  "35%",
];

// موقعیت‌های منظم در محور X (برای تراز شدن)
const targetPositionsX = [
  "0%",
  "-12%",
  "-24%",
  "-36%",
  "-48%",
  "-60%",
];

// تابع بازنشانی موقعیت‌ها
function resetPositions() {
  sliceTimingSlices.forEach((slice, index) => {
    slice.style.transition = "none"; // غیرفعال کردن انیمیشن برای بازنشانی
    slice.style.transform = `translateX(${initialPositionsX[index]})`;
    slice.style.opacity = 1; // اطمینان از اینکه قابل‌مشاهده است
  });
}

// رویداد کلیک برای دکمه پلی
playButtonSliceTiming.addEventListener("click", () => {
  if (playButtonSliceTiming.disabled) return; // اگر دکمه پلی غیرفعال است، خروج

  playButtonSliceTiming.disabled = true; // غیرفعال کردن دکمه پلی در هنگام انیمیشن

  resetPositions(); // بازنشانی موقعیت‌ها به حالت اولیه

  setTimeout(() => {
    // فعال کردن انیمیشن و تنظیم جابجایی به موقعیت منظم
    sliceTimingSlices.forEach((slice, index) => {
      slice.style.transition = "transform 2s"; // زمان انیمیشن
      slice.style.transform = `translateX(${targetPositionsX[index]})`;
    });

    // فعال کردن دوباره دکمه پلی پس از پایان انیمیشن
    setTimeout(() => {
      playButtonSliceTiming.disabled = false; // فعال کردن دوباره دکمه پلی
    }, 2000); // مدت زمان انیمیشن
  }, 100); // تأخیر قبل از شروع انیمیشن
});

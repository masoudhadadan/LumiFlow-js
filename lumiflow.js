/**
 * LumiFlow.js - v1.0.0
 * کتابخانه ایجاد افکت‌های نوری پویا و تعاملی
 * https://github.com/masoudhadadan/LumiFlow-js
 * MIT Licensed
 */

class LumiFlow {
  /**
   * سازنده کلاس LumiFlow
   * @param {string} selector - سلکتور عناصر هدف (پیش‌فرض: '.lumiflow')
   * @param {Object} options - تنظیمات سفارشی
   * @param {string} options.glowColor - رنگ درخشش مرکزی
   * @param {string} options.spreadColor - رنگ پخش نور
   * @param {number} options.intensity - شدت افکت
   * @param {number} options.smoothness - نرمی انیمیشن
   * @param {boolean} options.persistent - افکت دائمی بدون نیاز به هاور
   * @param {number} options.glowSize - سایز درخشش
   * @param {number} options.spreadSize - سایز پخش نور
   */
  constructor(selector = ".lumiflow", options = {}) {
    this.selector = selector;
    this.elements = document.querySelectorAll(selector);
    this.isActive = true;

    // تنظیمات پیش‌فرض
    this.defaultSettings = {
      glowColor: "rgba(255, 255, 255, 0.6)",
      spreadColor: "rgba(255, 215, 0, 0.3)",
      intensity: 0.1,
      smoothness: 0.2,
      persistent: false,
      glowSize: 25,
      spreadSize: 40,
      zIndex: "auto",
      debug: false
    };

    // ادغام تنظیمات پیش‌فرض با تنظیمات کاربر
    this.settings = { ...this.defaultSettings, ...options };

    // اعتبارسنجی تنظیمات
    this._validateSettings();

    // مقداردهی اولیه
    this.init();
  }

  /**
   * اعتبارسنجی تنظیمات ورودی
   * @private
   */
  _validateSettings() {
    if (this.settings.intensity < 0 || this.settings.intensity > 1) {
      console.warn("LumiFlow: مقدار intensity باید بین 0 و 1 باشد. مقدار تنظیم شده روی 0.1 قرار داده شد.");
      this.settings.intensity = 0.1;
    }

    if (this.settings.smoothness < 0) {
      console.warn("LumiFlow: مقدار smoothness نمی‌تواند منفی باشد. مقدار تنظیم شده روی 0.2 قرار داده شد.");
      this.settings.smoothness = 0.2;
    }
  }

  /**
   * مقداردهی اولیه عناصر
   */
  init() {
    if (this.elements.length === 0) {
      console.warn(`LumiFlow: هیچ عنصری با سلکتور ${this.selector} یافت نشد.`);
      return;
    }

    this.elements.forEach((el) => {
      // تنظیم استایل‌های پایه
      el.style.position = "relative";
      el.style.overflow = "hidden";
      el.style.transition = `box-shadow ${this.settings.smoothness}s ease`;
      
      if (this.settings.zIndex !== "auto") {
        el.style.zIndex = this.settings.zIndex;
      }

      // افزودن رویدادها
      if (!this.settings.persistent) {
        el.addEventListener("mousemove", (e) => this.applyGlow(e, el));
        el.addEventListener("mouseleave", () => this.clearGlow(el));
      }

      // افزودن کلاس برای شناسایی
      el.classList.add("lumiflow-initialized");

      if (this.settings.debug) {
        console.log(`LumiFlow: عنصر با سلکتور ${this.selector} مقداردهی شد.`, el);
      }
    });

    if (this.settings.persistent) {
      this.applyPersistentGlow();
    }
  }

  /**
   * اعمال افکت درخشش
   * @param {Event} event - رویداد ماوس
   * @param {HTMLElement} element - عنصر هدف
   */
  applyGlow(event, element) {
    if (!this.isActive) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const offsetX = (x - centerX) / centerX;
    const offsetY = (y - centerY) / centerY;

    const glowX = -offsetX * this.settings.intensity * 100;
    const glowY = -offsetY * this.settings.intensity * 100;
    const spreadX = offsetX * this.settings.intensity * 200;
    const spreadY = offsetY * this.settings.intensity * 200;

    element.style.boxShadow = `
      ${glowX}px ${glowY}px ${this.settings.glowSize}px ${this.settings.glowColor},
      ${spreadX}px ${spreadY}px ${this.settings.spreadSize}px ${this.settings.spreadColor}
    `;

    if (this.settings.debug) {
      console.log(`LumiFlow: اعمال افکت روی عنصر`, {
        element,
        position: { x, y },
        offsets: { offsetX, offsetY },
        shadow: element.style.boxShadow
      });
    }
  }

  /**
   * اعمال افکت دائمی بدون نیاز به هاور
   */
  applyPersistentGlow() {
    if (!this.isActive) return;

    this.elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      el.style.boxShadow = `
        0 0 ${this.settings.glowSize}px ${this.settings.glowColor},
        0 0 ${this.settings.spreadSize}px ${this.settings.spreadColor}
      `;
    });
  }

  /**
   * حذف افکت درخشش
   * @param {HTMLElement} element - عنصر هدف
   */
  clearGlow(element) {
    element.style.boxShadow = "none";
    
    if (this.settings.debug) {
      console.log(`LumiFlow: حذف افکت از عنصر`, element);
    }
  }

  /**
   * فعال/غیرفعال کردن کتابخانه
   * @param {boolean} state - حالت فعال/غیرفعال
   */
  toggle(state = null) {
    this.isActive = state !== null ? state : !this.isActive;
    
    if (!this.isActive) {
      this.elements.forEach(el => this.clearGlow(el));
    } else if (this.settings.persistent) {
      this.applyPersistentGlow();
    }
    
    if (this.settings.debug) {
      console.log(`LumiFlow: وضعیت تغییر کرد به ${this.isActive ? 'فعال' : 'غیرفعال'}`);
    }
  }

  /**
   * به‌روزرسانی تنظیمات
   * @param {Object} newSettings - تنظیمات جدید
   */
  updateSettings(newSettings) {
    this.settings = { ...this.settings, ...newSettings };
    this._validateSettings();
    
    if (this.settings.persistent) {
      this.applyPersistentGlow();
    } else {
      this.elements.forEach(el => this.clearGlow(el));
    }
    
    if (this.settings.debug) {
      console.log("LumiFlow: تنظیمات به‌روزرسانی شد", this.settings);
    }
  }

  /**
   * افزودن عناصر جدید
   * @param {string} selector - سلکتور عناصر جدید
   */
  addElements(selector) {
    const newElements = document.querySelectorAll(selector);
    
    newElements.forEach(el => {
      if (!el.classList.contains("lumiflow-initialized")) {
        this.elements.push(el);
        el.style.position = "relative";
        el.style.overflow = "hidden";
        el.style.transition = `box-shadow ${this.settings.smoothness}s ease`;
        el.classList.add("lumiflow-initialized");
        
        if (!this.settings.persistent) {
          el.addEventListener("mousemove", (e) => this.applyGlow(e, el));
          el.addEventListener("mouseleave", () => this.clearGlow(el));
        }
      }
    });
    
    if (this.settings.persistent) {
      this.applyPersistentGlow();
    }
    
    if (this.settings.debug) {
      console.log(`LumiFlow: عناصر جدید با سلکتور ${selector} اضافه شدند.`, newElements);
    }
  }
}

// ثبت به عنوان ماژول
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LumiFlow;
} else if (typeof define === 'function' && define.amd) {
  define([], () => LumiFlow);
} else {
  window.LumiFlow = LumiFlow;
}

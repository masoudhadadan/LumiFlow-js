# **LumiFlow.js - Elegant Interactive Light Effects Library** ✨  
**Persian/English**  

**GitHub Repository:** [https://github.com/masoudhadadan/LumiFlow-js](https://github.com/masoudhadadan/LumiFlow-js)  
**CDN:** [https://cdn.jsdelivr.net/gh/masoudhadadan/LumiFlow-js/](https://cdn.jsdelivr.net/gh/masoudhadadan/LumiFlow-js/)  

---

## **🌟 Features | قابلیت‌ها**  
✅ **Dynamic Glow Effects** – Smooth light interactions on hover  
✅ **Customizable Colors** – Choose your own glow & spread colors  
✅ **Adjustable Intensity** – Control light strength (0 to 1)  
✅ **Persistent Mode** – Apply effects without hover  
✅ **Lightweight (<3KB)** – No dependencies, pure JavaScript  
✅ **Works with React, Vue, Angular**  

**✅ افکت‌های نور پویا** – واکنش به حرکت ماوس  
**✅ رنگ‌های قابل تنظیم** – انتخاب رنگ درخشش و پخش نور  
**✅ شدت قابل کنترل** – تنظیم قدرت نور (۰ تا ۱)  
**✅ حالت دائمی** – افکت بدون نیاز به هاور  
**✅ سبک‌وزن (<۳KB)** – بدون وابستگی  
**✅ سازگار با React, Vue, Angular**  

---

## **🚀 Quick Start | شروع سریع**  

### **Installation | نصب**  
**Via CDN:**  
```html
<script src="https://cdn.jsdelivr.net/gh/masoudhadadan/LumiFlow-js@latest/LumiFlow.min.js"></script>
```

### **Basic Usage | استفاده پایه**  
```javascript
// Default initialization
const lumis = new LumiFlow(".element");

// Custom settings
const customLumis = new LumiFlow(".card", {
  glowColor: "rgba(100, 210, 255, 0.7)",
  spreadColor: "rgba(255, 100, 210, 0.4)",
  intensity: 0.2,
  persistent: false,
  glowSize: 30,
});
```

---

## **🎨 Examples | مثال‌ها**  

### **1. Interactive Cards | کارت‌های تعاملی**  
```javascript
new LumiFlow(".card", {
  glowColor: "rgba(255, 255, 255, 0.8)",
  spreadColor: "rgba(138, 43, 226, 0.4)",
});
```

### **2. Glowing Buttons | دکمه‌های درخشان**  
```javascript
new LumiFlow(".btn", {
  intensity: 0.3,
  spreadColor: "rgba(0, 200, 255, 0.5)",
});
```

### **3. Persistent Light Effects | افکت‌های دائمی**  
```javascript
new LumiFlow(".hero-section", {
  persistent: true,
  glowColor: "rgba(255, 255, 200, 0.9)",
});
```

---

## **📚 Documentation | مستندات**  

### **Options | تنظیمات**  
| Parameter | Type | Default | Description |  
|-----------|------|---------|-------------|  
| `glowColor` | `string` | `"rgba(255,255,255,0.6)"` | Central glow color |  
| `spreadColor` | `string` | `"rgba(255,215,0,0.3)"` | Light spread color |  
| `intensity` | `number` | `0.1` | Light strength (0-1) |  
| `persistent` | `boolean` | `false` | Enable always-on effect |  
| `glowSize` | `number` | `25` | Glow shadow size (px) |  

### **Methods | متدها**  
- `.updateSettings({ ...newOptions })` – Update configs  
- `.toggle(true/false)` – Enable/disable effects  
- `.addElements(".new-selector")` – Add new elements  

---

## **💡 Why LumiFlow? | چرا LumiFlow؟**  
✨ **Enhances UI/UX** – Adds depth & interactivity  
⚡ **Lightweight & Fast** – No performance issues  
🔧 **Easy Customization** – Match any design style  
🌐 **Framework Compatible** – Works with React, Vue, etc.  

**✨ بهبود UI/UX** – عمق و تعامل بهتر  
**⚡ سبک و سریع** – بدون افت عملکرد  
**🔧 تنظیمات آسان** – سازگار با هر طرحی  
**🌐 سازگار با فریمورک‌ها** – React, Vue و...  

---

## **👨‍💻 Developer | توسعه‌دهنده**  
**Masoud Hadadan | مسعود حدادان**  
📧 Email: [masoudhadadan@gmail.com](mailto:masoudhadadan@gmail.com)  
🔗 GitHub: [https://github.com/masoudhadadan](https://github.com/masoudhadadan)  

---

## **📜 License | مجوز**  
**MIT Licensed** – Free for personal & commercial use  

**استفاده آزاد برای پروژه‌های شخصی و تجاری**  

---

### **🌟 Star the Repo | ⭐ ستاره دادن به پروژه**  
If you love **LumiFlow**, give it a ⭐ on [GitHub](https://github.com/masoudhadadan/LumiFlow-js)!  

اگر از **LumiFlow** خوشتان آمد، روی [گیتهاب](https://github.com/masoudhadadan/LumiFlow-js) ⭐ بگذارید!  

🚀 **Bring your designs to life with LumiFlow!**  
**🚀 طرح‌های خود را با LumiFlow زنده کنید!**

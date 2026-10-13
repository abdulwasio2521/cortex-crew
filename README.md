# cortex-crew
<div align="center">

# 🌿 Aqua Sense

**A Smart Irrigation Decision-Support System for Farmers**

![Status](https://img.shields.io/badge/Status-Hackathon%20MVP-brightgreen)
![Category](https://img.shields.io/badge/Category-AgriTech%20%26%20Food-green)
![Focus](https://img.shields.io/badge/Focus-Water%20Conservation-blue)
![Languages](https://img.shields.io/badge/Languages-English%20%7C%20Urdu%20%7C%20Sindhi-orange)

</div>

---

## 🌍 Problem Statement

> 🌾 **A crop cannot tell the farmer it is thirsty.**

Farmers often irrigate based on habit, guesswork, or general weather news. They may not know whether their field needs water today, tomorrow, or not at all.

This creates two costly problems:

- 💸 **Too much water:** Wasted water, higher electricity/diesel bills, and possible crop damage.
- 🥀 **Too little water:** Leaf curling, wilting, crop stress, and reduced yield.
- 🌦️ **Missed rain:** Farmers may irrigate right before rainfall and waste water.
- 📍 **Generic advice:** Normal weather apps show city forecasts, not field-specific decisions.

By the time a crop visibly shows stress, damage may already have begun. Farmers need one simple answer:

> **“When should I irrigate, and how much water does my crop need?”**

---

## 💡 Our Solution

<div align="center">

### 🌿 AquaLeaf turns a farmer’s address and one leaf photo into a clear irrigation decision.

</div>

AquaLeaf combines:

- 📍 The farmer’s exact location
- 🌦️ Local weather and rainfall forecast
- 🌱 Crop type and growth stage
- 🟤 Soil type
- 💧 Last irrigation date
- 🍃 Leaf hydration scan

Then it gives one clear recommendation:

> ✅ **“Irrigate tomorrow from 5:30 AM to 7:30 AM.”**  
> ⏳ **“Wait two days—rain is expected.”**  
> 🚫 **“Do not irrigate today—soil moisture is sufficient.”**

AquaLeaf does not just show weather.  
It converts weather, crop, and leaf data into an **actionable irrigation decision**.

---

## ⚙️ Technologies Used

| Layer | Technology |
|---|---|
| 🎨 Frontend | React / Next.js, Tailwind CSS |
| 🧠 Backend | Node.js + Express **or** Python FastAPI |
| 🗄️ Database | PostgreSQL / SQLite |
| 🌦️ Weather | Open-Meteo API |
| 📍 Location | GPS + Geocoding API |
| 🍃 AI Vision | TensorFlow.js / ONNX Runtime / Lightweight CNN |
| 🌐 Languages | English, Urdu, Sindhi |
| 🚀 Deployment | Vercel / Netlify + Render / Railway |

---

## ✨ Key Features

### 🕒 AquaLeaf Smart Window
Finds the **best irrigation time** using the farmer’s exact location, crop stage, soil type, and weather forecast.

### 🌦️ SkyKhet
Displays current and 7-day weather for the farmer’s field in a simple, mobile-friendly view.

### 🍃 LeafHydra
Scans leaf photos and estimates the crop’s **hydration status** using visible signs such as curling, wilting, yellowing, and dry edges.

### 🌧️ RainGuard
Warns farmers before expected rainfall so they can avoid wasteful irrigation.

### 📅 DropCalendar
Provides a simple 7-day irrigation calendar with color-coded guidance.

### 💧 WaterWallet
Tracks water usage and shows estimated water and cost savings over time.

---

## 🔄 How It Works

```text
📍 Enter Address / GPS
        ↓
🌦️ Fetch Local Weather
        ↓
🌱 Select Crop, Soil & Growth Stage
        ↓
🍃 Scan Leaf with LeafHydra
        ↓
🧠 Calculate Crop Water Need
        ↓
✅ Get Best Irrigation Window
        ↓
💧 Track Savings in WaterWallet
```

### Example

A cotton farmer enters their village and selects:

- Crop: Cotton  
- Growth stage: Flowering  
- Soil: Sandy loam  
- Last irrigation: 4 days ago  

AquaLeaf checks the forecast and recommends:

> ✅ **“Irrigate tomorrow from 5:30–7:30 AM. Apply 22 mm. Avoid afternoon irrigation because heat and wind will increase evaporation.”**

---

## 🧗 Challenges Faced

- 🌦️ Weather forecasts can change and may not always be perfectly accurate.
- 🍃 A normal phone photo cannot directly measure the exact water content inside a leaf.
- 🌐 Farmers in rural areas may have limited internet access.
- 🌱 Crop and soil information may need manual correction by the farmer.
- 🧠 Building a reliable leaf-hydration model within a hackathon timeframe.

### ✅ How We Handle Them

- We clearly label recommendations as **decision support**, not final instructions.
- LeafHydra provides a **visual hydration estimate**, not a confirmed diagnosis.
- Farmers can manually correct crop, soil, and irrigation details.
- The interface is designed to be simple, mobile-first, and multilingual.

---

## 🚀 Future Improvements

- 🌡️ Add low-cost soil-moisture sensors.
- 💧 Connect IoT-based smart irrigation valves.
- 🛰️ Use satellite imagery for large-field crop monitoring.
- 🌡️ Add thermal imaging for more accurate water-stress detection.
- 🍄 Expand LeafHydra to detect diseases and nutrient deficiencies.
- 🗺️ Add a community stress map for nearby farmers.
- 📶 Add offline mode, SMS, and WhatsApp alerts.
- 🏛️ Create dashboards for agriculture departments and extension officers.

---

## 🤖 AI / Open-Source Disclosure

### 🌦️ Weather Data

AquaLeaf uses **Open-Meteo** for weather and forecast data.

> Weather data by [Open-Meteo.com](https://open-meteo.com/)  
> Open-Meteo data is provided under **CC BY 4.0** and requires attribution. [335][341]

### 🍃 Leaf Image Dataset

The LeafHydra demo may use the **PlantVillage** dataset or a similar open plant-health dataset.

> PlantVillage is an open-access repository of healthy and diseased plant-leaf images, released under **CC BY-SA 3.0**. [333][338]

### 🤖 AI Use Disclosure

- AI is used to analyze leaf images and estimate **visual hydration stress**.
- LeafHydra does **not** directly measure the exact water content inside a leaf.
- LeafHydra does **not** provide a confirmed disease diagnosis.
- Farmers remain in control and should verify important decisions with local agricultural experts.

---

## 👥 Team Members

| Name | Role |
|---|---|
| 👑 *[Your Name]* | Team Lead / Research & Product |
| 🎨 *[Member Name]* | Frontend & UI/UX |
| ⚙️ *[Member Name]* | Backend & APIs |
| 🤖 *[Member Name]* | AI / Leaf Scan |
| 📊 *[Member Name]* | Data, Testing & Pitch |

---

<div align="center">

### 🌿 AquaLeaf

#### **Scan the Leaf. Save the Water.** 💧

**Made with 💚 for farmers, water, and the future of agriculture.**

</div>

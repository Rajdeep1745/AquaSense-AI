# 🌊 AquaSense AI

### Intelligent Water Optimization System for Precision Irrigation

> 🚜 Smart Farming | 💧 Water Conservation | 🤖 AI-Powered Automation

---

## 📌 Problem Statement

Agriculture consumes nearly **70% of global freshwater resources**, yet traditional irrigation methods:

- ❌ Overuse water
- ❌ Ignore real-time soil conditions
- ❌ Do not account for weather forecasts
- ❌ Require manual intervention

With increasing water scarcity and unpredictable climate conditions, irrigation must become intelligent and automated.

---

## 💡 Our Solution

**AquaSense AI** is an IoT-based smart irrigation system that:

- 🌱 Monitors real-time soil moisture
- 🌦 Integrates weather forecast APIs
- 🤖 Uses AI to generate irrigation schedules
- 💧 Minimizes water usage
- ⚙ Automates pump control
- 🚨 Provides live alerts and anomaly detection

Our system ensures **maximum crop health with minimum water usage**.

---

## 🏗 System Architecture

### 🔹 1. Hardware Layer

- Soil Moisture Sensors
- ESP32 / Arduino
- Water Pump + Relay Module
- Water Level Sensor

### 🔹 2. Backend & Intelligence Layer

- Sensor Data Processing
- Weather API Integration
- AI Irrigation Scheduler
- Automated Pump Control Logic

### 🔹 3. Frontend (User Interface)

- Dashboard (Real-time monitoring)
- Alert System
- Crop Overview
- Irrigation Schedule Control
- Manual Override Option

---

## 🔄 How It Works

Soil Sensor Data
↓
Backend Server
↓
Weather Forecast Integration
↓
AI Scheduling Algorithm
↓
Optimized Irrigation Plan
↓
Pump Activation
↓
Real-Time Dashboard Update

The system continuously runs in a monitoring loop to adapt irrigation dynamically.

---

## 🖥 Features

### 📊 Real-Time Monitoring

- Live soil moisture levels
- Water tank status
- Pump state

### 🤖 AI Irrigation Scheduler

- Calculates optimal irrigation timing
- Adjusts schedule based on:
  - Soil moisture
  - Weather forecast
  - Crop type

### 🚨 Smart Alerts

- Low soil moisture
- Overwatering detection
- Rain forecast auto-pause
- Manual resolve option

### 🌾 Crop-Specific Optimization

Supports:

- Rice
- Wheat
- Cotton
- Sugarcane
- Maize
- Tomato

Each crop has customized irrigation logic.

### ⚙ Manual Override

- User can edit irrigation schedule
- Override AI decision when needed

---

## 🛠 Tech Stack

### Frontend

- React.js
- Bootstrap
- CSS

### Backend

- Node.js
- Express.js

### Database

- PostgreSQL / MongoDB

### IoT Hardware

- ESP32 / Arduino
- Soil Moisture Sensor
- Relay Module
- Water Pump

### APIs

- Weather Forecast API

---

## 📈 Impact

| Metric           | Expected Improvement |
| ---------------- | -------------------- |
| 💧 Water Usage   | ↓ Up to 40%          |
| 🌾 Crop Yield    | ↑ Up to 25%          |
| ⚡ Manual Effort | ↓ Significantly      |
| 📡 Monitoring    | 24/7 Real-time       |

---

## 👤 User Flow

1. User logs into dashboard
2. Views real-time soil & weather data
3. Checks AI-generated irrigation schedule
4. Approves or edits schedule
5. Pump operates automatically
6. Receives alerts if anomaly detected
7. Continuous monitoring loop

---

## Installation & Setup

Run the following commands from the project root in this exact order.

### 1. Install frontend dependencies

```bash
npm install
```

### 2. Install Python requirements

```bash
python -m pip install -r "ML algo/requirements.txt"
```

If `python` is not recognized, use:

```bash
py -m pip install -r "ML algo/requirements.txt"
```

### 3. Generate training data

```bash
python "ML algo/data/generate_data.py"
```

### 4. Train the model

```bash
python "ML algo/model/train_model.py"
```

### 5. Start the ML API backend

```bash
python "ML algo/api/main.py"
```

Keep this terminal running. The dashboard expects the ML API to be reachable (default: port `5000`).

### 6. Start the site

Open a new terminal in the project root and run:

```bash
npm start
```

## Quick Health Check

After starting the API, open:

- `http://127.0.0.1:5000/health`

If this returns JSON, backend is running correctly.

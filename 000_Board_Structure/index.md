---
layout: default
---

# Inside the Waliduino – Board Structure and Components

The **Waliduino** board is built around the powerful and popular **Arduino Nano**. This small microcontroller acts as the **brain of the board**, and it controls all the sensors, LEDs, and modules you see.

The Waliduino is designed to be simple and ready to use, so you don’t have to deal with wires or breadboards. All components are **pre-connected** to specific pins on the Arduino Nano.

#### **🧠 Key Features:**

* **Arduino Nano** breakout board at the center

* Clearly labeled connections for each component

* A helpful pin table printed on the board

* All modules and sensors already soldered in place

📋 Connection Table

**Don't worry if it's all new\!**

If some of the components or terms in this guide sound unfamiliar—**don’t worry at all**. You’re here to learn, and we’ll explain **everything step by step** in a simple and clear way. Whether it’s your first time hearing about sensors, pins, or programming, this guide is made to help you understand each part easily. Just take it one section at a time—you’ve got this\!

| Component | Arduino Nano Pin |
| :---- | :---- |
| PIR sensor | D12 |
| LED-Red | D11 |
| LED-Yellow | D10 |
| LED-Green | D9 |
| HC-SR04 (Ultrasonic sensor) | D8 (Echo) and D7 (Trigger) |
| Speaker | D6 |
| Infrared receiver | D5 |
| Touch sensor | D4 |
| Servo Motor | D3 |
| Push Button | D2 |
| Light dependent resistor (LDR) | A7 |
| Potentiometer | A6 |
| I2C-SCL | A5 |
| I2C-SDA | A4 |
| DHT11 Temperature and humidity sensor | A3 |
| NeoPixel RGB  | A2 |

### **🔍 Component Overview & Use Cases**

**👁️ PIR Sensor (D12)**  
 The **PIR (Passive Infrared)** sensor detects motion by sensing body heat.  
 👉 *Use it for:* motion-activated lights, alarms, or smart security systems.

---

**🔴 Red LED (D11)**  
 A **red LED** lights up when powered.  
 👉 *Use it for:* error warnings, stop signals, or simple light effects.

---

**🟡 Yellow LED (D10)**  
 The **yellow LED** is great for showing a “wait” or “warning” signal.  
 👉 *Use it for:* traffic light projects or timed alerts.

---

**🟢 Green LED (D9)**  
 A **green LED** usually means “go” or “okay.”  
 👉 *Use it for:* showing successful actions or system status.

---

**📏 HC-SR04 Ultrasonic Sensor (D8 / D7)**  
 This sensor uses sound waves to measure distance.  
 👉 *Use it for:* obstacle detection, parking sensors, or robot navigation.

---

**🔊 Speaker / Buzzer (D6)**  
 The buzzer plays short beeps or sounds.  
 👉 *Use it for:* alarms, countdowns, or fun sounds.

---

**🎮 IR Remote Receiver (D5)**  
 This sensor receives signals from a remote control.  
 👉 *Use it for:* controlling LEDs, robots, or menus from a distance.

---

**🖐️ Touch Sensor (D4)**  
 This sensor reacts when you touch it—no buttons needed\!  
 👉 *Use it for:* invisible buttons, interactive projects, or simple triggers.

---

**⚙️ Servo Motor (D3)**  
 A servo can turn to a precise angle.  
 👉 *Use it for:* robot arms, door locks, or steering mechanisms.

---

**🔘 Push Button (D2)**  
 A simple button you press to control things.  
 👉 *Use it for:* start/stop switches, user input, or LED control.

---

**🌞 LDR – Light Sensor (A7)**  
 This sensor detects how bright the light is.  
 👉 *Use it for:* automatic lights, light-following robots, or solar tracking.

---

**🎚️ Potentiometer (A6)**  
 A twistable knob to change values.  
 👉 *Use it for:* volume control, brightness adjustment, or menu scrolling.

---

**🔗 I2C – SCL (A5) & SDA (A4)**  
 Special pins to connect smart devices using I2C.  
 👉 *Use it for:* OLED displays, accelerometers, or advanced sensors.

---

**🌡️ DHT11 – Temp & Humidity Sensor (A3)**  
 Reads air temperature and humidity levels.  
 👉 *Use it for:* weather stations, climate monitors, or greenhouses.

---

**🔴🟢🔵 NeoPixel RGB LED (A2)**

**A NeoPixel is a special LED that can show any color by mixing red, green, and blue light.**

**👉 *Use it for:* creating color-coded signals, visual feedback in projects, or colorful light effects in advertising displays and interactive screens.**

---

### **🔌 External Connectors – Expand Your Projects\!**

The **Waliduino** board comes with a set of **external connectors** that give you even more flexibility. These connectors provide access to some of the **digital and analog pins** of the Arduino Nano, so you can attach your own **sensors**, **LEDs**, **motors**, or other components.

These extra pins are perfect if you want to:

* Connect additional modules like a **temperature sensor**, **joystick**, or **buzzer**

* Build custom circuits or extend the board's functionality

* Try out new ideas and experiments beyond the built-in components

Each connector is clearly labeled, making it easy to know which pin you are using. Some provide **digital pins** (on/off signals), while others offer **analog pins** (for sensors that give variable readings, like light or temperature).

🛠️ **Tip:** Always double-check the voltage and pin type before connecting external components. Most sensors work with **5V** and **GND**, which are also available on the connectors.

With these external ports, the Waliduino grows with your imagination. Start simple, then explore more as you learn\!

👉 [Get Started Guide](../000_Get_Started/index.md)

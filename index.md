---
title: Waliduino Guide
---

[Home](./index.md) | [Get Started](./000_Get_Started/index.md) | [Good to Know](./000_Good_To_Know/index.md) | [Unit 1](./001_Unit1_Turn_On_Red_Led/index.md)

# Welcome to Waliduino\!

The **Waliduino** is a fun and easy-to-use electronic board made for learning. It’s based on the popular **Arduino**, but specially designed for beginners who want to explore the world of **electronics** and **programming**.

With Waliduino, you don’t need to worry about buying extra parts or connecting lots of wires. All the important components are already **soldered** onto the board. That means you can start right away—just **plug the USB cable into your computer** and open the **Arduino IDE** to begin coding\!

The Waliduino includes many useful parts like **LEDs**, **sensors**, and **buttons**, so you can build exciting projects and learn by doing. No matter your age — whether you're a curious kid or an adult beginner — this board makes your first steps into electronics and programming exciting, simple, and fun\!

**The Creator of Waliduino**

**Walid El Kassem** is an electrical engineer with over 15 years of experience in designing and programming electronic devices and embedded systems in Germany. He is well known for his deep passion for **Arduino** and for making technology easy to learn.

Through his YouTube channel **@electronicsandcoding**, Walid has helped **over 100,000 students** take their first steps into the world of Arduino. His **Arabic-language Arduino course** has reached **more than one million views**, making it one of the most popular resources for Arabic-speaking learners.

Walid uses his knowledge and hands-on experience to create tools that make learning easier and more fun. He designed the **Waliduino board** to help others start programming and exploring electronics with confidence.

# Who is the Waliduino for?

The **Waliduino** board is designed for **everyone who wants to start learning electronics and programming**—no matter their background. It is perfect for:

* **Self-learners** who enjoy discovering new things at their own pace.

* **STEM teachers** who want to use hands-on tools to teach coding and electronics in the classroom.

* **University students** who need a practical and beginner-friendly board to support their studies.  
    
* **Training centers** who offer arduino learning courses.

Each of these learners can use this guide to get started right away. And by visiting [**www.waliduino.com**](http://www.waliduino.com), you'll find helpful resources, project ideas, and tutorials to guide you step by step on your learning journey.

**Start your journey today\!**  
 No matter if you're learning on your own, teaching others, or studying at university—**the world of electronics and programming is open to you**. The Waliduino board makes it simple and exciting to begin. Just follow this guide, connect your board, and explore all the learning materials at [**www.waliduino.com**](http://www.waliduino.com).

**Let’s build, code, and create together\!**

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

👉 [Get Started Guide](./000_Get_Started/index.md)




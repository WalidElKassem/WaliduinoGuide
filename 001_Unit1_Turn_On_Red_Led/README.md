# 🔴 Unit 1: Turn On the Red LED

### **🧠 What You Will Learn**

In this unit, you will learn how to **turn on an LED** using code. Along the way, you'll understand what an **output** is, and learn two important commands:

* pinMode() – for setting up a pin as output.

* digitalWrite() – for turning a pin on or off.

  ---

### **🎯 Objective**

**By the end of this unit, you will be able to:**

* Understand the meaning of the term output

* Use `pinMode()` to set a pin as an output

* Use `digitalWrite()` to turn an output pin on

* Recognize the purpose of curly braces { } in a sketch

* Know why we add a semicolon `;` at the end of each instruction

  ---

### **🧩 Used Component**

* **Red LED** (connected to **pin D11**)

### **🛠️ Step-by-Step Instructions**

#### **✅ Step 1: Open the Arduino IDE**

Connect your **Waliduino** via USB and launch the **Arduino IDE**.

#### **✅ Step 2: Create a new sketch**

Delete any existing code and enter the following:

```cpp
void setup() {
    pinMode(11, OUTPUT);
    digitalWrite(11, HIGH);  
}
void loop() {
} 
```
---- 

#### **✅ Step 3: Ensure your board and port are correct**

* **Tools \> Board** → select **Arduino Nano**

* **Tools \> Port** → choose the port your board is on (e.g., COM3 or COM4)

#### **✅ Step 4: Upload the sketch**

Click the **Upload** button (→).  
 If everything is correct, the **red LED turns on**\! 🔴

# 💡Let’s break this sketch down step by step:

---

#### **🛠️ pinMode(11, OUTPUT);**

This line tells the Arduino that **pin 11** will be used as an **output**.  
 That means the pin is prepared to **control something**, like an LED.

---

#### **⚡ digitalWrite(11, HIGH);**

This line **sets pin 11 to 5 volts** (HIGH).  
 Since the red LED is connected to that pin, the voltage makes the **LED light up**.

---

#### **🧠 Why is the code only in setup()?**

We only want the LED to **turn on once**, right when the program starts.  
The setup() function runs **only one time**, so it's perfect for actions that don’t need to be repeated.

---

#### **🔁 What does loop() do here?**

Nothing — it’s **empty** for now.  
 But it must still be included, because every Arduino sketch requires both `setup()` and loop().

---

#### **🔣 What are the { } braces for?**

Curly braces { } **group instructions** that belong together.  
 All the code inside setup() goes between its braces, and the same for loop().

---

#### **🔚 Why do we need semicolons `;`?**

Each command in Arduino must end with a **semicolon `;`**.  
 It tells the Arduino: “This line is complete.”  
 ❗ Forgetting a semicolon will cause an error when you try to upload your sketch.

---

### **🔌 How the LED is wired and why we use a Resistor**

When you turn on an LED with the Arduino, you're actually creating a small **electrical circuit**. Here's how it's connected:

➡️ **Arduino Pin → Resistor → LED → GND (Ground)**

Let’s break this down:

#### **🔴 1\. The Arduino Pin**

When you use `digitalWrite(11, HIGH)`, the Arduino pin sends out **5 volts** — like turning on a tiny switch that allows current to flow.

#### **🧱 2\. The Resistor**

Before the current reaches the LED, it flows through a **resistor** (typically 220 or 330 ohms).

 👉 **Why do we need it?**  
 Without the resistor, **too much current** would flow into the LED — which can **burn it out** or damage the Arduino. The resistor **slows down** the current to a safe level.

#### **💡 3\. The LED**

After passing through the resistor, the current reaches the **LED**, making it light up.

---

### **📘 New Terms**

* **Output**: A pin that **sends** signals or power (e.g., to turn on an LED or motor)

* `pinMode(pin, OUTPUT)`: Tells the Arduino to use a specific pin as output

* `digitalWrite(pin, HIGH)`: Sets the voltage at the pin to **HIGH** (5V) — turning the connected device **on**

---

###  **What We Have Learned**

* Every Arduino sketch must have two main parts: `setup()` and `loop()`

* pinMode() sets a pin as either **input** or **output**

* digitalWrite() turns a pin ON (`HIGH`) or OFF (`LOW`)

* An **output** is a pin that will be setted as HIGH or LOW

* **Curly braces `{ }`** are used to group code blocks.

  * For example: everything inside `setup()` must be inside `{ }`

* **Semicolons `;`** mark the **end of each command**

  * If you forget them, the code won’t compile or will cause errors



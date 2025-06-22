### 📘 Good to know before starting

Before you start building exciting projects with the Waliduino, it’s helpful to understand a few basic terms. Don’t worry — they’re simple, and you’ll master them as you go!

- Setup and loop

- Input and output

- HIGH and LOW

- Analog and digital


### 🔁 Understanding setup() and loop()

Every Arduino program is called a sketch, and each sketch must have two main parts: setup() and loop().
setup() runs once when your board is turned on or reset. This is where you prepare things, like setting up pin modes or starting sensors.


loop() runs again and again, as long as the board is on. This is where you put the code that controls what your project does continuously—like blinking a light, checking a sensor, or turning on a motor.


Think of it like this:
setup() = get ready


loop() = keep going


Both parts are required in every Arduino sketch—even if one of them is empty. They are the backbone of how your Waliduino communicates with the world.

### 🔌 Understanding the Terms: Input and Output
In electronics, we often talk about inputs and outputs. These are the two main ways your Arduino (and your Waliduino) communicates with the world.

🟢 What is an Output?
An output is a pin that sends signals from the Arduino to something else—like an LED, a buzzer, or a motor.
For example:
Turning on an LED = sending power out through a pin


Playing a sound = sending a signal to the speaker

🔵 What is an Input?
An input is a pin that receives signals—usually from a sensor, button, or switch.
For example:
Reading a pushbutton = checking if it’s pressed


Reading a light sensor = checking how bright it is


### ⚡ HIGH and LOW — What Do They Mean?
HIGH = 5 volts
 → The pin is ON (sends power if it’s an output, or receives power if it’s an input)


LOW = 0 volts
 → The pin is OFF (no power)


Whether you're using a pin as input or output, Arduino uses HIGH and LOW to represent voltage levels.
🧠 Tip: You can think of HIGH as "yes, active, on" and LOW as "no, inactive, off."

### 🎛️ Understanding Digital and Analog I/O
In electronics, we often talk about Digital I/O and Analog I/O — but what do these terms really mean?
Digital I/O means the pin can only have two values:
 0 (OFF or 0 volts) and 1 (ON or 5 volts).
 👉 Example: Turning an LED ON or OFF — it's either glowing or it isn’t.


Analog I/O, on the other hand, can work with a range of values between 0 and 5 volts.
 👉 Example: Reading a temperature sensor that changes smoothly — like 22.3°C, 24.8°C, etc.


You can think of it like a light switch vs. a dimmer:
Digital = just ON or OFF


Analog = smoothly adjusting the level, like brightness or volume


The Waliduino lets you use both types — so you can build smart systems that react to buttons and measure real-world values like light or heat!






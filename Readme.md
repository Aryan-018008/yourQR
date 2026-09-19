#   yourQR — Modern QR Code Generator

A modern, responsive, and user-friendly **QR Code Generator** built with HTML, CSS, and JavaScript.

  yourQR allows users to enter text, URLs, or other information and instantly generate a downloadable QR code with a smooth visual generation process.

---

## Deployement

yourQR is live at 

---

## ✨ Features

* 🔗 Generate QR codes from text or URLs
* ⚡ Fast QR code generation
* 🎨 Modern and responsive UI
* 📊 Real-time character counter
* 🧹 Clear input functionality
* 💡 Quick example buttons
* ⏳ Animated generation process

  * Fetching...
  * Generating...
  * Generated ✓
* 📥 Download QR code as PNG
* 📋 Copy entered content to clipboard
* 🔔 Toast notifications
* 📱 Mobile-friendly responsive design
* 🛡️ High QR error-correction level

---

## 🖥️ Preview

The application provides a clean interface where users can:

1. Enter text or a URL.
2. Click **Generate QR Code**.
3. Watch the generation animation.
4. Preview the generated QR code.
5. Download the QR code as a PNG.
6. Copy the original content.

---

## 🛠️ Technologies Used

| Technology   | Purpose                            |
| ------------ | ---------------------------------- |
| HTML5        | Application structure              |
| CSS3         | Styling and animations             |
| JavaScript   | Application logic and interactions |
| QRCode.js    | QR code generation                 |
| Font Awesome | Icons                              |

---

## 📁 Project Structure

```text
  QR Code Generator/
│
├── index.html
├── Qr.css
├── Qr.js
├── Readme.md
```

---

## ⚙️ How It Works

### 1. Enter Content

Users enter a URL, text, contact information, or any other supported content into the input field.

### 2. Validate Input

JavaScript checks whether the input is empty and ensures that the content stays within the allowed character limit.

### 3. Generate QR Code

The application uses **QRCode.js** to generate the QR code dynamically.

### 4. Display Result

After generation, the QR code is displayed in the preview section.

### 5. Download or Copy

Users can either:

* Download the QR code as a PNG image
* Copy the original QR content to their clipboard

---

## 🚀 Getting Started

### Step 1 — Clone the Repository

```bash
git clone https://github.com/Aryan-018008/yourQR.git
```

### Step 2 — Open the Project

```bash
cd   QR Code Generaot
```

### Step 3 — Run the Application

Open:

```text
index.html
```

in your web browser.

No backend server is required.

---

## 📦 QRCode.js

  yourQR uses the **QRCode.js** library for generating QR codes.

Include the library before your main JavaScript file:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<script src="script.js"></script>
```

The order is important because `script.js` uses the global `QRCode` object.

---

## 🎯 Example Inputs

You can generate QR codes for:

```text
https://example.com
```

or:

```text
Hello, welcome to   yourQR!
```

or:

```text
https://github.com/
```

---

## 🔄 Generation Flow

```text
User Input
    ↓
Input Validation
    ↓
Fetching...
    ↓
Generating...
    ↓
QR Code Creation
    ↓
Generated ✓
    ↓
Preview
    ↓
Download / Copy
```

---

## 📥 Download Feature

The application detects the generated QR code and downloads it as:

```text
  yourQR-qrcode.png
```

The generated image uses PNG format for easy sharing and storage.

---

## 📋 Copy Feature

The **Copy** button uses the browser Clipboard API to copy the entered content.

Example:

```javascript
await navigator.clipboard.writeText(generatedText);
```

---

## 📊 Character Limit

  yourQR supports up to:

```text
1000 characters
```

A live character counter displays the current input length:

```text
250 / 1000
```

---

## 📱 Responsive Design

  yourQR is designed to work across:

* 💻 Desktop
* 🖥️ Laptop
* 📱 Mobile
* 📟 Tablet

---

## 🔐 Privacy

  yourQR is designed as a client-side application.

The entered content is processed in the browser for QR generation and is not required to be sent to a custom backend server.

> Avoid entering sensitive or confidential information into QR codes unless you understand where the generated QR content will be shared.

---

## 🧪 Validation

The application handles:

* Empty input
* Excessively long input
* Duplicate generation clicks
* QR generation errors
* Clipboard errors
* Download errors

---

## 🔮 Future Enhancements

Possible future improvements include:

* 🎨 Custom QR colors
* 🖼️ Add logo to QR code
* 📐 Multiple QR sizes
* 📄 Download as SVG
* 🌙 Dark mode
* 🔗 URL detection
* 📇 Contact/vCard QR codes
* 📶 Wi-Fi QR generation
* 📍 Location QR codes
* 📧 Email QR codes
* 📱 Phone-number QR codes
* 🕘 QR generation history
* 🖨️ Print

---

## Author

Aryan Bharadwaj

---
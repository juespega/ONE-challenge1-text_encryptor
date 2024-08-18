# Text Encryptor

Text Encryptor is a simple web application that allows users to encrypt and decrypt text using a basic letter substitution method. This project is designed as an introductory project for learning web development concepts including HTML, CSS, and JavaScript.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [License](#license)

## Features

- **Encrypt Text:** Converts specific letters to a predefined string.
- **Decrypt Text:** Reverts the encrypted text back to its original form.
- **Copy to Clipboard:** Easily copy the encrypted/decrypted text to your clipboard.
- **Responsive Design:** The application is responsive and works on various screen sizes.

## Installation

To run the project locally, follow these steps:

1. **Clone this repository** to your local machine using:
   ```bash
   git clone https://github.com/juespega/ONE-challenge1-text_encryptor.git
2. **Navigate to the project directory:** cd ONE-challenge1-text_encryptor
3. Open the 'index.html' file in your web browser to view the application.

## Usage

Follow these steps to use the Text Encryptor application:

1. Enter the text you want to encrypt in the "Enter text here" textarea.
2. Click the "Encrypt" button to encrypt the text.
3. The encrypted text will be displayed in the output section.
4. You can also click the "Decrypt" button to revert the encrypted text back to its original form.
5. Use the "Copy" button to copy the result to your clipboard.

## Project Structure

The project structure is organized as follows:

ONE-challenge1-text_encryptor
│
├── assets/
│   ├── Logo.png       # Logo image used in the header
│   └── Muneco.png     # Image used in the output section
│
├── index.html         # Main HTML file
├── style.css          # Main CSS file for styling
└── app.js             # Main JavaScript file for functionality

## How It Works

The Text Encryptor application works by applying a simple letter substitution method. Here's how it works:

- Encryption:

    - e is converted to enter
    - i is converted to imes
    - a is converted to ai
    - o is converted to ober
    - u is converted to ufat

- Decryption: The process is reversed to convert the encrypted text back to its original form.

- The app.js file contains the main logic for encryption, decryption, and copying the result to the clipboard.

- The design is handled by style.css, which ensures a responsive layout and consistent look across different devices.

- The index.html file structures the content and links to the CSS and JavaScript files.

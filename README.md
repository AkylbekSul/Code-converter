# Chrome Extension for Code Conversion

This is a Chrome extension that allows users to convert selected code snippets into different programming languages using various LLM API's. The extension provides context menu options for converting code and displays the converted code in a modal popup on the webpage.

## Features

- Context menu integration for selecting and converting code snippets.
- Supports conversion to multiple programming languages (You can edit by yourself).
- Uses the Gemini API for code conversion.
- Displays converted code in a modal popup on the webpage.
- Option to copy converted code to clipboard.

![ScreenRecording2024-07-03at02 45 121-ezgif com-speed](https://github.com/AkylbekSul/Code-converter/assets/47032706/421df698-8f62-424f-ae1a-2205f941b640)


## Prerequisites

- Node.js and npm installed on your machine.

## Setup

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/your-repository.git
```
### 2. Install Dependencies
```
npm install
```
### 3.Create a .env File
Create a .env file in the root of the project and add your Gemini API key:
```
API_KEY=your_api_key_here
```
### 4.Build the Extension
```
npx webpack
```
### 5.Load the Extension in Chrome
  1. Open Chrome and go to chrome://extensions/.
  2. Enable "Developer mode" using the toggle switch in the top right corner.
  3. Click "Load unpacked" and select directory of your project.

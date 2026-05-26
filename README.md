# AI Article Summarizer (Chrome Extension)

An elegant, lightweight, and efficient Google Chrome Extension (Manifest V3) that utilizes the **Google Gemini 1.5 Flash** model to generate high-quality article summaries directly from your browser. 

Whether you need a quick overview or a detailed breakdown, this extension extracts article content instantly and generates clean, tailored summaries.

---

## 🌟 Key Features

*   **Multiple Summary Modes**:
    *   📝 **Brief**: A concise 2-3 sentence overview of the article.
    *   🔍 **Detailed**: A comprehensive summary covering all main points and key insights.
    *   📌 **Bullets**: 5-7 distinct key takeaways, formatted clearly.
*   **Smart Text Extraction**: Automatically detects the core content of a webpage by targeting `<article>`, main page containers (`main`, `.article-content`, etc.), or falling back to extracting paragraph blocks.
*   **Secure Storage**: Safely stores your Gemini API key locally using `chrome.storage.sync`.
*   **One-Click Copy**: Copy generated summaries to your clipboard instantly.
*   **Intuitive Setup**: Automatically guides you to the settings page upon installation to set up your API key.

---

## 🛠️ Architecture & File Structure

The project is structured as a standard Manifest V3 Chrome Extension:

*   [`manifest.json`](file:///d:/Ai%20artical%20summerizer/manifest.json) — Defines configuration, permissions (`activeTab`, `storage`, `scripting`, `tabs`), and entry points.
*   [`background.js`](file:///d:/Ai%20artical%20summerizer/background.js) — The background service worker that monitors extension installation and prompts the user to enter their API key if missing.
*   [`content.js`](file:///d:/Ai%20artical%20summerizer/content.js) — Content script that runs on pages to intelligently parse and extract the main article text.
*   [`popup.html`](file:///d:/Ai%20artical%20summerizer/popup.html) & [`popup.js`](file:///d:/Ai%20artical%20summerizer/popup.js) — The popup UI and core logic that triggers summarization, connects to the Gemini API, and displays results.
*   [`options.html`](file:///d:/Ai%20artical%20summerizer/options.html) & [`option.js`](file:///d:/Ai%20artical%20summerizer/option.js) — Options page for saving, loading, and updating the Google Gemini API key.
*   [`icon.png`](file:///d:/Ai%20artical%20summerizer/icon.png) — Extension logo icon.

---

## 🚀 Installation & Setup

Follow these steps to run the extension locally in your browser:

### 1. Download/Clone the Extension
Clone or download this repository to a folder on your local machine.

### 2. Install in Google Chrome
1. Open Google Chrome and go to `chrome://extensions/` (or click Chrome Menu -> **Settings** -> **Extensions**).
2. Enable **Developer mode** by toggling the switch in the top-right corner.
3. Click the **Load unpacked** button in the top-left corner.
4. Select the folder containing this extension's files (the directory with `manifest.json`).

### 3. Add Gemini API Key
1. Upon installation, the **AI Summary Settings** page will automatically open. (If not, right-click the extension icon and select **Options**).
2. Obtain a free API key from [Google AI Studio](https://aistudio.google.com/).
3. Paste the API key into the settings field and click **Save Settings**.

---

## 📖 How to Use

1. Navigate to any article, news website, or webpage you want to summarize.
2. Click the **Ai Summarizer** extension icon in your Chrome toolbar.
3. Select your preferred summary type (Brief, Detailed, or Bullets) from the dropdown.
4. Click **Summarize**.
5. Once the summary generates, click **Copy** to copy the text to your clipboard.

---

## ⚙️ Technical Details

*   **API Model**: `gemini-1.5-flash`
*   **Security**: Direct communication with Google's API endpoint. Your API key is stored in your personal Chrome synced storage and is never sent to any external third-party server.
*   **Token Optimization**: Automatically truncates extremely long articles to stay within model input limits while retaining the most relevant text.

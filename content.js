function getArticleText() {
    console.log("Getting article text...");
    
    // Try to find article element first
    const article = document.querySelector("article");
    if (article && article.innerText.trim()) {
        console.log("Found article element");
        return article.innerText.trim();
    }

    // Try common article selectors
    const selectors = [
        'main',
        '[role="main"]',
        '.article-content',
        '.post-content',
        '.entry-content',
        '.content'
    ];
    
    for (const selector of selectors) {
        const element = document.querySelector(selector);
        if (element && element.innerText.trim()) {
            console.log(`Found content using selector: ${selector}`);
            return element.innerText.trim();
        }
    }

    // Fallback: get all paragraphs
    const paragraphs = Array.from(document.querySelectorAll("p"));
    const text = paragraphs
        .map((p) => p.innerText.trim())
        .filter(text => text.length > 0)
        .join("\n");
    
    console.log(`Found ${paragraphs.length} paragraphs, total text length: ${text.length}`);
    return text;
}

chrome.runtime.onMessage.addListener((req, _sender, sendResponse) => {
    console.log("Content script received message:", req);
    
    if (req.type === "GET_ARTICLE_TEXT") {
        const text = getArticleText();
        console.log("Article text length:", text ? text.length : 0);
        sendResponse({ text });
    }
    
    return true; // Keep the message channel open for async responses
});
 
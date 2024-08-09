/* HERO ANIMATION */
const hero = document.querySelector('.hero');

let position = 0;

function animate () {
    position += 0.5;
    hero.style.backgroundPosition = `${position}px 0`;
    requestAnimationFrame(animate);
}

animate();

/* DROPDOWN MENU */
const toggleBtn = document.querySelector(".toggle_btn")
const toggleBtnIcon = document.querySelector(".toggle_btn i")
const dropDownMenu = document.querySelector(".dropdown-menu")

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

/* CODE EDITOR */
// Maximum number of characters allowed
const MAX_CHAR_COUNT = 100;

// Get references to the code output and textarea elements
const codeOutput = document.getElementById('code-output');
const codeTextarea = document.getElementById('code-editor-textarea');

// Function to highlight syntax
function highlightSyntax(code) {
    return code
        .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="token comment">$1</span>') // comments
        .replace(/([{}])/g, '<span class="token punctuation">$1</span>') // braces
        .replace(/([a-zA-Z-]+)(?=\s*:)/g, '<span class="token property">$1</span>') // properties
        .replace(/(:\s*)([^;]+)/g, '$1<span class="token value">$2</span>') // values
        .replace(/([.#]?[a-zA-Z0-9_-]+)(?=\s*\{)/g, '<span class="token selector">$1</span>'); // selectors
}

// Function to apply syntax highlighting
function applySyntaxHighlighting() {
    const code = codeOutput.textContent;
    const highlightedCode = highlightSyntax(code);
    codeOutput.innerHTML = highlightedCode;

    // Move the cursor to the end of the content
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(codeOutput);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
}

// Function to limit characters
function limitCharacters() {
    let code = codeOutput.textContent;
    if (code.length > MAX_CHAR_COUNT) {
        code = code.substring(0, MAX_CHAR_COUNT);
        codeOutput.textContent = code;
    }
    // Update the hidden textarea with the current content
    codeTextarea.value = codeOutput.textContent;
}

// Event listener to handle input, character limit, and highlighting
codeOutput.addEventListener('input', function () {
    limitCharacters();
    applySyntaxHighlighting();
});

// Initial syntax highlighting
applySyntaxHighlighting();

const qrText = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const clearInput = document.getElementById("clearInput");
const charCount = document.getElementById("charCount");

const emptyState = document.getElementById("emptyState");
const loadingState = document.getElementById("loadingState");
const qrResult = document.getElementById("qrResult");
const qrCodeContainer = document.getElementById("qrcode");
const actions = document.getElementById("actions");

const downloadBtn = document.getElementById("downloadBtn");
const copyBtn = document.getElementById("copyBtn");

const generationStatus = document.getElementById("generationStatus");
const statusText = document.getElementById("statusText");

const loadingTitle = document.getElementById("loadingTitle");
const loadingDescription = document.getElementById("loadingDescription");
const progressBar = document.getElementById("progressBar");

const toast = document.getElementById("toast");
const toastTitle = document.getElementById("toastTitle");
const toastMessage = document.getElementById("toastMessage");

let qrCode = null;
let generatedText = "";


/* =========================================
   CHARACTER COUNTER
========================================= */

qrText.addEventListener("input", function () {
    const length = qrText.value.length;

    charCount.textContent = `${length} / 1000`;
});


/* =========================================
   CLEAR INPUT
========================================= */

clearInput.addEventListener("click", function () {
    qrText.value = "";

    charCount.textContent = "0 / 1000";

    qrText.focus();
});


/* =========================================
   EXAMPLE BUTTONS
========================================= */

const exampleButtons = document.querySelectorAll(".example-btn");

exampleButtons.forEach(button => {

    button.addEventListener("click", function () {

        const value = this.dataset.value;

        qrText.value = value;

        charCount.textContent = `${value.length} / 1000`;

        qrText.focus();

    });

});


/* =========================================
   GENERATE QR CODE
========================================= */

generateBtn.addEventListener("click", async function () {

    const text = qrText.value.trim();

    /* Check empty input */

    if (!text) {

        showToast(
            "Input Required",
            "Please enter text or a URL first."
        );

        qrText.focus();

        return;
    }


    /* Check character limit */

    if (text.length > 1000) {

        showToast(
            "Text Too Long",
            "Please keep your content under 1000 characters."
        );

        return;
    }


    /* Prevent duplicate clicks */

    if (generateBtn.classList.contains("loading")) {
        return;
    }


    /* Save content */

    generatedText = text;


    /* Button loading */

    generateBtn.classList.add("loading");
    generateBtn.disabled = true;


    /* Reset preview */

    emptyState.style.display = "none";
    qrResult.style.display = "none";
    actions.style.display = "none";

    loadingState.style.display = "block";


    /* Reset status */

    generationStatus.classList.remove("success");
    generationStatus.classList.add("loading");

    statusText.textContent = "Processing";

    progressBar.style.width = "0%";


    /* =========================================
       STEP 1 — FETCHING
    ========================================= */

    loadingTitle.textContent = "Fetching...";

    loadingDescription.textContent =
        "Preparing your content";

    progressBar.style.width = "20%";

    await wait(700);


    /* =========================================
       STEP 2 — GENERATING
    ========================================= */

    loadingTitle.textContent = "Generating...";

    loadingDescription.textContent =
        "Creating your QR code";

    progressBar.style.width = "55%";

    await wait(800);


    /* =========================================
       GENERATE QR CODE
    ========================================= */

    qrCodeContainer.innerHTML = "";

    try {

        qrCode = new QRCode(
            qrCodeContainer,
            {
                text: text,

                width: 220,
                height: 220,

                colorDark: "#000000",
                colorLight: "#ffffff",

                correctLevel: QRCode.CorrectLevel.H
            }
        );

    } catch (error) {

        console.error("QR generation error:", error);

        loadingState.style.display = "none";

        emptyState.style.display = "block";

        generateBtn.classList.remove("loading");
        generateBtn.disabled = false;

        showToast(
            "Generation Failed",
            "Unable to generate the QR code."
        );

        return;
    }


    progressBar.style.width = "85%";

    await wait(500);


    /* =========================================
       STEP 3 — GENERATED
    ========================================= */

    progressBar.style.width = "100%";

    loadingTitle.textContent = "Generated!";

    loadingDescription.textContent =
        "Your QR code is ready";

    await wait(400);


    /* Hide loading */

    loadingState.style.display = "none";


    /* Show QR */

    qrResult.style.display = "block";

    actions.style.display = "flex";


    /* Update status */

    generationStatus.classList.remove("loading");

    generationStatus.classList.add("success");

    statusText.textContent = "Generated";


    /* Reset button */

    generateBtn.classList.remove("loading");

    generateBtn.disabled = false;


    /* Success toast */

    showToast(
        "QR Code Ready",
        "Your QR code has been generated successfully."
    );

});


/* =========================================
   DOWNLOAD QR CODE
========================================= */

downloadBtn.addEventListener("click", function () {

    const canvas =
        qrCodeContainer.querySelector("canvas");

    const image =
        qrCodeContainer.querySelector("img");


    /* Canvas version */

    if (canvas) {

        const link =
            document.createElement("a");

        link.download = "  yourQR-qrcode.png";

        link.href =
            canvas.toDataURL("image/png");

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    }

    /* Image version */

    else if (image) {

        const link =
            document.createElement("a");

        link.download = "  yourQR-qrcode.png";

        link.href = image.src;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    }

    /* No QR found */

    else {

        showToast(
            "Download Failed",
            "Please generate a QR code first."
        );

        return;
    }


    showToast(
        "Downloaded",
        "Your QR code was saved as a PNG."
    );

});


/* =========================================
   COPY CONTENT
========================================= */

copyBtn.addEventListener("click", async function () {

    if (!generatedText) {

        showToast(
            "Nothing to Copy",
            "Generate a QR code first."
        );

        return;
    }


    try {

        await navigator.clipboard.writeText(
            generatedText
        );

        showToast(
            "Copied",
            "Your content has been copied."
        );

    }

    catch (error) {

        console.error("Clipboard error:", error);

        showToast(
            "Copy Failed",
            "Unable to access clipboard."
        );

    }

});


/* =========================================
   TOAST
========================================= */

function showToast(title, message) {

    toastTitle.textContent = title;

    toastMessage.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


/* =========================================
   WAIT FUNCTION
========================================= */

function wait(milliseconds) {

    return new Promise(resolve => {

        setTimeout(resolve, milliseconds);

    });

}
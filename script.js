
// ==========================================
// JUNE HARPER CASE — INVESTIGATION DATABASE
// ==========================================


// ==========================================
// PASSWORD ACCESS
// ==========================================

const ACCESS_CODE = "91108";

function unlockSite(event) {
    event.preventDefault();

    const input = document.getElementById("access-code");
    const error = document.getElementById("password-error");

    if (input.value === ACCESS_CODE) {
        localStorage.setItem("jh_case_access", "granted");

        document.getElementById("password-gate").hidden = true;
        document.body.style.overflow = "auto";
    } else {
        error.textContent = "ACCESS DENIED — INVALID CODE";
        input.value = "";
        input.focus();
    }
}

function setupPasswordGate() {
    const gate = document.getElementById("password-gate");

    if (!gate) return;

    if (localStorage.getItem("jh_case_access") === "granted") {
        gate.hidden = true;
    } else {
        document.body.style.overflow = "hidden";
    }
}


// ==========================================
// MOBILE PDF AND PASSWORD STYLES
// ==========================================

const additionalStyles = document.createElement("style");

additionalStyles.textContent = `
    #password-gate {
        position: fixed;
        inset: 0;
        z-index: 99999;
        background: #f5f6f7;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        font-family: Arial, sans-serif;
    }

    #password-gate[hidden] {
        display: none;
    }

    .password-box {
        width: 100%;
        max-width: 390px;
        padding: 35px 25px;
        background: white;
        border: 1px solid #d9dee2;
        text-align: center;
    }

    .password-box h1 {
        font-size: 21px;
        letter-spacing: 2px;
        margin-bottom: 8px;
    }

    .password-box p {
        color: #737b83;
        font-size: 12px;
        line-height: 1.6;
    }

    .password-box input {
        box-sizing: border-box;
        width: 100%;
        padding: 13px;
        margin: 18px 0 10px;
        border: 1px solid #cbd0d5;
        font-size: 18px;
        text-align: center;
        letter-spacing: 5px;
    }

    .password-box button {
        width: 100%;
        padding: 13px;
        background: #222a31;
        color: white;
        border: none;
        cursor: pointer;
        letter-spacing: 1px;
    }

    #password-error {
        color: #b42318;
        min-height: 18px;
        margin-top: 12px;
    }

    .pdf-open-link {
        display: block;
        padding: 15px;
        margin: 0 0 15px;
        background: #222a31;
        color: white;
        text-align: center;
        text-decoration: none;
        font-size: 13px;
        letter-spacing: 1px;
    }

    .evidence-pdf {
        width: 100%;
        height: 750px;
        border: 1px solid #d9dee2;
    }

    @media (max-width: 700px) {
        .evidence-pdf {
            display: none;
        }

        .pdf-mobile-note {
            display: block;
            padding: 15px;
            background: #f0f2f4;
            color: #555;
            font-size: 13px;
            line-height: 1.6;
        }
    }
`;

document.head.appendChild(additionalStyles);


// ==========================================
// ALL EVIDENCE FILES
// ==========================================

const categories = {

    // --------------------------------------
    // 01. PHOTOGRAPHIC EVIDENCE
    // --------------------------------------

    photos: {
        title: "Photographic Evidence",
        description: "Recovered photographs and social media records.",

        files: [

            {
                name: "Marcie Evans — Instagram",
                description: "Recovered posts and stories from Marcie Evans.",
                type: "gallery",
                items: [
                    {
                        src: "evidence/images/Marcie Story.PNG",
                        caption: "Instagram Story — 20 May 2026"
                    },
                    {
                        src: "evidence/images/Marcie-story.PNG",
                        caption: "Instagram Story — 17 May 2026"
                    }
                ]
            },

            {
                name: "Danielle Karsh — Instagram",
                description: "Recovered posts and stories from Danielle Karsh.",
                type: "gallery",
                items: [
                    {
                        src: "evidence/images/Danielle Story.PNG",
                        caption: "Instagram Story — 20 May 2026"
                    }
                ]
            },

            {
                name: "Athena Liu — Instagram",
                description: "Recovered posts and stories from Athena Liu.",
                type: "gallery",
                items: [
                    {
                        src: "evidence/images/Athena story .PNG",
                        caption: "Instagram Story — 20 May 2026"
                    }
                ]
            },

            {
                name: "Athena Liu — Identification Photograph",
                description: "Photographic identification record of Athena Liu.",
                type: "image",
                src: "evidence/images/Athena MS.PNG"
            },

            {
                name: "Marcie Evans' Brother — Identification Photograph",
                description: "Photographic identification record of an individual connected to Marcie Evans.",
                type: "image",
                src: "evidence/images/Marcie Brother MS.PNG"
            }

        ]
    },


    // --------------------------------------
    // 02. OFFICIAL DOCUMENTS
    // --------------------------------------

    documents: {
        title: "Official Documents",
        description: "Official investigation records and documents.",

        files: [

            {
                name: "Police Investigation Report",
                description: "Official report concerning the death of June Harper.",
                type: "pdf",
                src: "evidence/documents/JH-001_Fictional_Initial_Police_Report.pdf"
            },

            {
                name: "Persons of Interest Register",
                description: "Register containing information about the suspects.",
                type: "pdf",
                src: "evidence/documents/June_Harper_Persons_of_Interest.pdf"
            },

            {
                name: "Dispatch Call and Supplementary Report",
                description: "Official transcript of dispatch call and report concerning statements of Athena Liu.",
                type: "pdf",
                src: "evidence/documents/June_Harper_Dispatch_Call_and_Supplementary_Report.pdf"
            },

            {
                name: "Interview Transcript - ATHENA",
                description: "Official transcript of interview of Athena Liu.",
                type: "pdf",
                src: "evidence/documents/Athena_Liu_Interview.pdf"
            },

            {
                name: "Interview Transcript - DANIELLE",
                description: "Official transcript of interview of Danielle Karsh.",
                type: "pdf",
                src: "evidence/documents/Danielle_Karsh_Interview.pdf"
            },

            {
                name: "Interview Transcript - MARCIE",
                description: "Official transcript of interview of Marcie Evans.",
                type: "pdf",
                src: "evidence/documents/Marcie_Evans_Interview.pdf"
            },

            {
                name: "Supplementary Investigation Report — Final Findings",
                description: "Additional findings concerning an unidentified visitor at June Harper's residence.",
                type: "pdf",
                src: "evidence/documents/June_Harper_Supplementary_Investigation_Report.pdf"
            }

        ]
    },


    // --------------------------------------
    // 03. PERSONAL RECORDS
    // --------------------------------------

    diary: {
        title: "Personal Records",
        description: "Recovered personal diary entries belonging to Athena Liu.",

        files: [

            {
                name: "Athena Liu — Personal Diary",
                description: "Five recovered diary entries, not arranged chronologically.",
                type: "gallery",

                items: [
                    {
                        src: "evidence/diary/Athena diary 15_5.PNG",
                        caption: "Diary Entry 01"
                    },
                    {
                        src: "evidence/diary/Athena diary 16_5.PNG",
                        caption: "Diary Entry 02"
                    },
                    {
                        src: "evidence/diary/Athena diary 17 May.PNG",
                        caption: "Diary Entry 03"
                    },
                    {
                        src: "evidence/diary/Athena diary 18 May.PNG",
                        caption: "Diary Entry 04"
                    },
                    {
                        src: "evidence/diary/Athena Diary 18_4.PNG",
                        caption: "Diary Entry 05"
                    }
                ]
            }

        ]
    },


    // --------------------------------------
    // 04. COMMUNICATIONS
    // --------------------------------------

    messages: {
        title: "Communications",
        description: "Recovered private conversations and message records.",

        files: [

            {
                name: "Marcie Evans & June Harper",
                description: "Recovered private conversation concerning June's manuscript.",
                type: "image",
                src: "evidence/images/Marcie Messages.jpg"
            },

            {
                name: "Danielle Karsh & Nancy",
                description: "Recovered private conversation dated 20 May 2026.",
                type: "image",
                src: "evidence/images/Danielle Messages.PNG"
            },

            {
                name: "Marcie Evans & Her Brother",
                description: "Recovered message exchange concerning the retrieval of an annotated manuscript.",
                type: "pdf",
                src: "evidence/documents/June_Harper_Recovered_Message_Marcie_and_Brother.pdf"
            }

        ]
    }

};


// ==========================================
// PAGE NAVIGATION
// ==========================================

let previousCategory = null;

function openSection(category) {

    const data = categories[category];

    if (!data) return;

    previousCategory = category;

    document.getElementById("home").hidden = true;
    document.getElementById("evidence-page").hidden = false;
    document.getElementById("viewer-page").hidden = true;

    document.getElementById("current-category").textContent =
        data.title.toUpperCase();

    document.getElementById("page-title").textContent =
        data.title;

    document.getElementById("page-description").textContent =
        data.description;

    const fileList = document.getElementById("file-list");

    fileList.innerHTML = "";

    data.files.forEach((file, index) => {

        const item = document.createElement("div");
        item.className = "file-item";

        const details = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = file.name;

        const description = document.createElement("p");
        description.textContent = file.description;

        const button = document.createElement("button");

        button.className = "file-open-button";
        button.textContent = "OPEN FILE →";

        button.onclick = function () {
            openFile(category, index);
        };

        details.appendChild(title);
        details.appendChild(description);

        item.appendChild(details);
        item.appendChild(button);

        fileList.appendChild(item);

    });

    window.scrollTo(0, 0);

}


// ==========================================
// RETURN TO HOME PAGE
// ==========================================

function goHome() {

    document.getElementById("home").hidden = false;
    document.getElementById("evidence-page").hidden = true;
    document.getElementById("viewer-page").hidden = true;

    window.scrollTo(0, 0);

}


// ==========================================
// RETURN TO EVIDENCE FILE LIST
// ==========================================

function backToFiles() {

    document.getElementById("viewer-page").hidden = true;
    document.getElementById("evidence-page").hidden = false;

    window.scrollTo(0, 0);

}


// ==========================================
// OPEN AN INDIVIDUAL EVIDENCE FILE
// ==========================================

let galleryIndex = 0;
let currentGallery = [];

function openFile(category, index) {

    const file = categories[category].files[index];

    document.getElementById("evidence-page").hidden = true;
    document.getElementById("viewer-page").hidden = false;

    document.getElementById("viewer-category").textContent =
        categories[category].title.toUpperCase();

    document.getElementById("viewer-title").textContent =
        file.name;

    document.getElementById("viewer-description").textContent =
        file.description;

    const content = document.getElementById("evidence-content");

    content.innerHTML = "";


    // GALLERY FILE

    if (file.type === "gallery") {

        currentGallery = file.items;
        galleryIndex = 0;

        showGalleryItem();

    }


    // SINGLE IMAGE FILE

    else if (file.type === "image") {

        const image = document.createElement("img");

        image.src = file.src;
        image.alt = file.name;
        image.className = "evidence-image";

        image.onerror = function () {
            showMissingFile(file.src);
        };

        content.appendChild(image);

    }


    // PDF FILE — MOBILE FRIENDLY

    else if (file.type === "pdf") {

        const openLink = document.createElement("a");

        openLink.href = file.src;
        openLink.target = "_blank";
        openLink.rel = "noopener noreferrer";
        openLink.className = "pdf-open-link";
        openLink.textContent = "OPEN PDF IN NEW TAB ↗";

        content.appendChild(openLink);

        const note = document.createElement("p");

        note.className = "pdf-mobile-note";
        note.textContent =
            "For the best reading experience on a phone, open this document in a new browser tab. You can scroll and zoom there.";

        content.appendChild(note);

        // Use embedded viewer on larger screens.
        // Phones use the separate PDF tab instead.

        if (window.innerWidth > 700) {

            const pdf = document.createElement("iframe");

            pdf.src = file.src;
            pdf.className = "evidence-pdf";
            pdf.title = file.name;

            content.appendChild(pdf);

        }

    }

    window.scrollTo(0, 0);

}


// ==========================================
// DISPLAY GALLERY IMAGE
// ==========================================

function showGalleryItem() {

    const content = document.getElementById("evidence-content");

    const item = currentGallery[galleryIndex];

    content.innerHTML = "";

    const image = document.createElement("img");

    image.src = item.src;
    image.alt = item.caption;
    image.className = "evidence-image";

    image.onerror = function () {
        showMissingFile(item.src);
    };

    const caption = document.createElement("p");

    caption.className = "gallery-caption";
    caption.textContent = item.caption;

    const controls = document.createElement("div");

    controls.className = "gallery-controls";

    const previous = document.createElement("button");

    previous.textContent = "← PREVIOUS";
    previous.className = "gallery-button";
    previous.disabled = galleryIndex === 0;

    previous.onclick = function () {
        changeGallery(-1);
    };

    const counter = document.createElement("span");

    counter.textContent =
        `${galleryIndex + 1} / ${currentGallery.length}`;

    const next = document.createElement("button");

    next.textContent = "NEXT →";
    next.className = "gallery-button";
    next.disabled = galleryIndex === currentGallery.length - 1;

    next.onclick = function () {
        changeGallery(1);
    };

    controls.appendChild(previous);
    controls.appendChild(counter);
    controls.appendChild(next);

    content.appendChild(image);
    content.appendChild(caption);
    content.appendChild(controls);

}


// ==========================================
// CHANGE GALLERY IMAGE
// ==========================================

function changeGallery(direction) {

    const nextIndex = galleryIndex + direction;

    if (nextIndex < 0 || nextIndex >= currentGallery.length) {
        return;
    }

    galleryIndex = nextIndex;

    showGalleryItem();

    window.scrollTo(0, 0);

}


// ==========================================
// MISSING FILE MESSAGE
// ==========================================

function showMissingFile(path) {

    const content = document.getElementById("evidence-content");

    content.innerHTML = `
        <div class="evidence-text">
            <strong>FILE COULD NOT BE LOADED</strong>
            <p>The system could not locate this evidence file:</p>
            <p>${path}</p>
            <p>Please check that the file exists and that its name
            matches the path in script.js.</p>
        </div>
    `;

}


// ==========================================
// START DATABASE
// ==========================================

setupPasswordGate();

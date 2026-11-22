// ==========================================
// JUNE HARPER CASE — INVESTIGATION DATABASE
// ==========================================


// ALL EVIDENCE FILES

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
                description: "Official transcript of dispatch call and report concerning statements of Athena Liu",
                type: "pdf",
                src:"evidence/documents/June_Harper_Dispatch_Call_and_Supplementary_Report.pdf"
            },

            {
                name: "Interview Transcript - ATHENA",
                description: "Official transcript of interview of Athena Liu",
                type: "pdf",
                src:"evidence/documents/Athena_Liu_Interview.pdf"
            },

            {
                name: "Interview Transcript - DANIELLE",
                description: "Official transcript of interview of Danielle Karsh",
                type: "pdf",
                src:"evidence/documents/Danielle_Karsh_Interview.pdf"
            },

            {
                name: "Interview Transcript - MARCIE",
                description: "Official transcript of interview of Marcie Evans",
                type: "pdf",
                src:"evidence/documents/Marcie_Evans_Interview.pdf"
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
                        src: "evidence/diary/Athena diary 18_4.PNG",
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

    if (!data) {
        return;
    }

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


    // PDF FILE

    else if (file.type === "pdf") {

        const pdf = document.createElement("iframe");

        pdf.src = file.src;
        pdf.className = "evidence-pdf";
        pdf.title = file.name;

        content.appendChild(pdf);

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


    // IMAGE

    const image = document.createElement("img");

    image.src = item.src;
    image.alt = item.caption;
    image.className = "evidence-image";

    image.onerror = function () {
        showMissingFile(item.src);
    };


    // CAPTION

    const caption = document.createElement("p");

    caption.className = "gallery-caption";
    caption.textContent = item.caption;


    // GALLERY CONTROLS

    const controls = document.createElement("div");

    controls.className = "gallery-controls";


    // PREVIOUS BUTTON

    const previous = document.createElement("button");

    previous.textContent = "← PREVIOUS";
    previous.className = "gallery-button";

    previous.disabled = galleryIndex === 0;

    previous.onclick = function () {
        changeGallery(-1);
    };


    // IMAGE COUNTER

    const counter = document.createElement("span");

    counter.textContent =
        `${galleryIndex + 1} / ${currentGallery.length}`;


    // NEXT BUTTON

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

            The system could not locate this evidence file:

            ${path}

            Please check that the file exists and that its name
            matches the path in script.js.
        </div>
    `;

}

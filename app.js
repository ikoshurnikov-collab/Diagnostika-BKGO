const DADATA_TOKEN = "f5c4e31403c1b54a7dd283de1ac304d0f6f938be";
const QR_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABIgAAASICAIAAAD3TmOUAAAABmJLR0QA/wD/AP+gvaeTAAAb5klEQVR4nOzZQZLkyA0AQUFW//8ydNVhTTarnWJME+4fSJBJsjo6Z3f/BQAAQOff9QAAAADXCTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACIfeoBnjYz9Qjw4+1usq739xn29xnVfa5U++t5hp/r2nfSiRkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQOxTDwDAX9vdeoRHXbvea+wvwP/mxAwAACDmxOxR/l/I7zIz9QgA/KH8vcHv4u+NJzkxAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiH3qAfiumalHOGF36xFOcJ/f7dr3qnqe3We+4dpzVfE8v5sTMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACA2KceAOBXzUyy7u4m61bXW7l2n+0vAP/NiRkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQOxTDwDwq3Y3WXdmknUr1X2ueK6eUV3vtecZ+LmcmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxIQZAABATJgBAADEhBkAAEBMmAEAAMSEGQAAQEyYAQAAxD71AHzX7tYjAP+n6v2dmWTdSnWffZ95E88z/HNOzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGKfeoBbZqYeAQB4OX9vwE/kxAwAACDmxAz4Mar/Ae9usq7rfTf7+4zqegH+LidmAAAAMWEGAAAQE2YAAAAxYQYAABATZgAAADFhBgAAEBNmAAAAMWEGAAAQE2YAAAAxYQYAABATZgAAADFhBgAAEBNmAAAAMWEGAAAQE2YAAAAxYQYAABATZgAAADFhBgAAEBNmAAAAMWEGAAAQE2YAAAAxYQYAABATZgAAADFhBgAAEBNmAAAAMWEGAAAQE2YAAAAxYQYAABATZgAAADFhBgAAEBNmAAAAMWEGAAAQE2YAAAAxYQYAABATZgAAADFhBgAAEBNmAAAAMWEGAAAQE2YAAACxTz3A03a3HgHgjzYzybq+z8+o9vcazzPwdzkxAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACIfeoBnjYzybq7m6xbXW/FfX43+/uMa/e5ul7ezfP8jGv32e/RuzkxAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACIze7WM/BFM1OPcMK196h6rtznd6v2131+hu/GM9znd7O/7+bEDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAg9qkHuGJmknV3N1n32vVWqvt8zbXn+dpz5T6/27X7fO138Br7+25OzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYp96AN5pd5N1ZyZZt7reat3Ktf29dr2V6j5Xrj1X1/b3mmv7e+37fI0TMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACA2OxuPcOjZqYe4VH29xnVfb52vbzbte9zxfv7DM/zM679/l5z7XvlxAwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIM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iAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACIfeoBbpmZegQAAOCP48QMAAAg5sQM+DGqM+fdTdatONvnTa59N669v6733a79/joxAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACICTMAAICYMAMAAIgJMwAAgJgwAwAAiAkzAACAmDADAACIze7WMwAAAJzmxAwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAGLCDAAAICbMAAAAYsIMAAAgJswAAABiwgwAACAmzAAAAP7Tfh0LAAAAAAzytx7GnrJoJmYAAAAzMQMAAJiJGQAAwEzMAAAAZmIGAAAwEzMAAICZmAEAAMzEDAAAYCZmAAAAMzEDAACYiRkAAMAs66yMRm6Qt6QAAAAASUVORK5CYII=";
const GAS_URL = "https://script.google.com/macros/s/AKfycbyeweUzDWhpS69DNR9IqydgVev7TlPXD3tjC_l8TV0F4logKPPu2zmlbJEthdo1g01H/exec";

const USERS = {
    "anton": "gazAdmin26",
    "elena": "gazElena26",
    "tatiana": "gazTatiana26"
};

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("crm_auth") === "true") {
        showCRM();
    } else {
        document.getElementById("loginScreen").style.display = "flex";
    }
});

window.checkPassword = function() {
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;
    
    if (USERS[username] === password) {
        localStorage.setItem("crm_auth", "true");
        localStorage.setItem("crm_user", username);
        showCRM();
    } else {
        alert("Неверный пароль");
        document.getElementById("passwordInput").value = "";
    }
};

function showCRM() {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("crmContainer").style.display = "flex";
    
    init();
    document.getElementById("appForm").addEventListener("submit", saveApplication);
}

function init() {
    generateNewId();
    renderTable();
    fetchApplications();
    setInterval(fetchApplications, 45 * 60 * 1000);
    initAddressAutocomplete();
    checkAutoExport();
}

function checkAutoExport() {
    const lastExport = localStorage.getItem("crm_last_export_date");
    const now = Date.now();
    const tenDaysMs = 10 * 24 * 60 * 60 * 1000;

    if (!lastExport) {
        localStorage.setItem("crm_last_export_date", now.toString());
        return;
    }

    if (now - parseInt(lastExport, 10) >= tenDaysMs) {
        exportToCSV(true);
        localStorage.setItem("crm_last_export_date", now.toString());
    }
}

function initAddressAutocomplete() {
    const addressInput = document.getElementById("address");
    if (!addressInput) return;

    const formGroup = addressInput.parentElement;
    formGroup.style.position = "relative";

    addressInput.addEventListener("input", function() {
        const val = this.value;
        closeAllLists();
        
        if (!val || val.length < 3) return;

        fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + DADATA_TOKEN
            },
            body: JSON.stringify({ query: val, count: 5 })
        })
        .then(response => response.json())
        .then(result => {
            if (!result.suggestions || result.suggestions.length === 0) return;

            const listDiv = document.createElement("div");
            listDiv.setAttribute("class", "autocomplete-items");
            this.parentNode.appendChild(listDiv);

            result.suggestions.forEach(suggestion => {
                const itemDiv = document.createElement("div");
                itemDiv.innerHTML = suggestion.value;
                itemDiv.addEventListener("click", function() {
                    addressInput.value = suggestion.value;
                    closeAllLists();
                });
                listDiv.appendChild(itemDiv);
            });
        })
        .catch(error => console.error("Ошибка автодополнения адреса:", error));
    });

    function closeAllLists(elmnt) {
        const items = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < items.length; i++) {
            if (elmnt != items[i] && elmnt != addressInput) {
                items[i].parentNode.removeChild(items[i]);
            }
        }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

function generateNewId() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yy = String(today.getFullYear()).slice(-2);
    const randomNumbers = Math.floor(100 + Math.random() * 900);
    
    const newId = `З-${dd}${mm}${yy}-${randomNumbers}`;
    document.getElementById("appId").value = newId;
}

function formatDate(dateString) {
    if (!dateString) return "";
    const parts = dateString.split('-');
    return `${parts[2]}.${parts[1]}.${parts[0]}`;
}

function saveApplication(e) {
    e.preventDefault();

    const rawWorkDate = document.getElementById("workDate").value;
    const formattedWorkDate = formatDate(rawWorkDate);

    const application = {
        id: document.getElementById("appId").value,
        date: new Date().toLocaleDateString("ru-RU"),
        workDate: formattedWorkDate,
        worker: document.getElementById("worker").value,
        fio: document.getElementById("fio").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        equipment: document.getElementById("equipment").value,
        completed: false
    };

    const applications = getApplications();
    applications.push(application);
    localStorage.setItem("crm_applications", JSON.stringify(applications));

    renderTable();
    downloadWord(application);
    syncToGoogleSheets(application);

    document.getElementById("appForm").reset();
    generateNewId();
}

function syncToGoogleSheets(application) {
    if (!GAS_URL || GAS_URL.includes("ВСТАВЬТЕ_URL")) return;

    fetch(GAS_URL, {
        method: 'POST',
        body: JSON.stringify(application),
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        }
    }).catch(error => console.error('Ошибка отправки в Google Sheets:', error));
}

function fetchApplications() {
    if (!GAS_URL || GAS_URL.includes("ВСТАВЬТЕ_URL")) return;

    fetch(GAS_URL)
        .then(response => response.json())
        .then(data => {
            if (data && Array.isArray(data)) {
                localStorage.setItem("crm_applications", JSON.stringify(data));
                renderTable();
            }
        })
        .catch(error => console.error('Ошибка загрузки из Google Sheets:', error));
}

function getApplications() {
    const data = localStorage.getItem("crm_applications");
    return data ? JSON.parse(data) : [];
}

function renderTable() {
    const applications = getApplications();
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    applications.forEach((app, index) => {
        const tr = document.createElement("tr");
        if (app.completed) {
            tr.classList.add("row-completed");
        }

        tr.innerHTML = `
            <td>${app.date}</td>
            <td>${app.id}</td>
            <td>${app.workDate || ''}</td>
            <td>${app.worker || ''}</td>
            <td>${app.fio}</td>
            <td>${app.phone}</td>
            <td>${app.address}</td>
            <td>${app.equipment}</td>
            <td style="text-align: center;">
                <input type="checkbox" class="status-checkbox" onchange="toggleStatus(${index})" ${app.completed ? 'checked' : ''} title="Отметить как выполненное">
            </td>
            <td class="actions-cell">
                <button class="btn-small" onclick="downloadWordByIndex(${index})">Скачать Word</button>
                <button class="btn-small btn-danger" onclick="deleteApplication(${index})">Удалить</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

window.toggleStatus = function(index) {
    const applications = getApplications();
    applications[index].completed = !applications[index].completed;
    localStorage.setItem("crm_applications", JSON.stringify(applications));
    renderTable();
};

window.downloadWordByIndex = function(index) {
    const applications = getApplications();
    if (applications[index]) {
        downloadWord(applications[index]);
    }
};

window.deleteApplication = function(index) {
    if (confirm("Вы уверены, что хотите удалить эту заявку?")) {
        const applications = getApplications();
        applications.splice(index, 1);
        localStorage.setItem("crm_applications", JSON.stringify(applications));
        renderTable();
    }
};

function downloadWord(app) {
    let cleanBase64 = QR_BASE64;
    let mimeType = 'image/png';

    if (cleanBase64.includes(',')) {
        const parts = cleanBase64.split(',');
        const mimeMatch = parts[0].match(/data:(.*?);/);
        if (mimeMatch) mimeType = mimeMatch[1];
        cleanBase64 = parts[1];
    }
    
    cleanBase64 = cleanBase64.replace(/\s+/g, '');
    const chunkedBase64 = cleanBase64.match(/.{1,76}/g)?.join('\r\n') || '';

    const htmlContent = `
        <html xmlns:v="urn:schemas-microsoft-com:vml"
              xmlns:o="urn:schemas-microsoft-com:office:office"
              xmlns:w="urn:schemas-microsoft-com:office:word"
              xmlns="http://www.w3.org/TR/REC-html40">
        <head>
            <meta charset="utf-8">
            <title>Заявка ${app.id}</title>
            <style>
                @page WordSection1 {
                    size: 595.3pt 841.9pt;
                    margin: 42.5pt 42.5pt 42.5pt 42.5pt;
                    mso-header-margin: 35.4pt;
                    mso-footer-margin: 35.4pt;
                    mso-paper-source: 0;
                }
                div.WordSection1 { page: WordSection1; }
                
                body { font-family: 'Times New Roman', serif; font-size: 11pt; line-height: 1.05; }
                p { margin: 0 0 2pt 0; }
                .center { text-align: center; }
                .header-row { width: 100%; }
                .city { text-align: left; }
                .date { text-align: right; }
                
                table.check-list { 
                    width: 100%; 
                    border-collapse: collapse; 
                    margin-top: 4pt; 
                    margin-bottom: 4pt;
                    mso-table-layout-alt: fixed;
                }
                table.check-list th, table.check-list td { 
                    border: 1pt solid black; 
                    padding: 1pt 3pt; 
                }
                table.check-list th { background-color: #f2f2f2; text-align: center; }
                .section-header { font-weight: bold; background-color: #fafafa; }
            </style>
        </head>
        <body>
        <div class="WordSection1">
            <p>Заявка № ${app.id}</p>
            <p class="center"><strong>ПРОТОКОЛ<br>визуально-измерительного контроля газового оборудования</strong></p>
            
            <table class="header-row" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td class="city">г. Киров</td>
                    <td class="date">«» __________ 202&nbsp;г.</td>
                </tr>
            </table>
            
            <p><strong>1. Общие сведения об объекте и заказчике</strong></p>
            <p>заказчик работ: ${app.fio}</p>
            <p>телефон: ${app.phone}</p>
            <p>адрес объекта: ${app.address}</p>
            <p>наименование оборудования: ${app.equipment} __________________</p>
            <p>заводской номер: __________________________________________________________</p>
            <p>год выпуска: ______________________________________________________________</p>
            <p>срок эксплуатации на момент контроля: _____________________________________</p>
            
            <p style="margin-top: 4pt;"><strong>2. Результаты контроля:</strong></p>
            
            <table class="check-list" style="width:100%" width="100%">
                <thead>
                    <tr>
                        <th style="width: 76%;" width="76%" align="left">Вид работ</th>
                        <th style="width: 12%;" width="12%">Удовл. сост.</th>
                        <th style="width: 12%;" width="12%">Неудовл. сост.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td colspan="3" class="section-header">3.1. Анализ документации:</td></tr>
                    <tr><td>• Наличие договора на ТО ВД(К)ГО</td><td></td><td></td></tr>
                    <tr><td>• Дата последнего ТО ВД(К)ГО</td><td></td><td></td></tr>
                    <tr><td>• Наличие договора на проверку ДВК</td><td></td><td></td></tr>
                    <tr><td>• Дата последней проверки ДВК</td><td></td><td></td></tr>
                    <tr><td>• Акты проведения ремонтных работ</td><td></td><td></td></tr>
                    
                    <tr><td colspan="3" class="section-header">3.2. Визуально-измерительный контроль (ВИК):</td></tr>
                    <tr><td>• Комплектность оборудования</td><td></td><td></td></tr>
                    <tr><td>• Наличие коррозионных повреждений корпуса и деталей</td><td></td><td></td></tr>
                    <tr><td>• Наличие посторонних шумов при работе котла</td><td></td><td></td></tr>
                    <tr><td>• Состояние крепления</td><td></td><td></td></tr>
                    <tr><td>• Состояние теплоизоляции камеры сгорания</td><td></td><td></td></tr>
                    <tr><td>• Состояние подводящих трубок</td><td></td><td></td></tr>
                    <tr><td>• Состояние газовой горелки</td><td></td><td></td></tr>
                    <tr><td>• Состояние электродов розжига</td><td></td><td></td></tr>
                    <tr><td>• Состояние датчиков</td><td></td><td></td></tr>
                    <tr><td>• Наличие заземления</td><td></td><td></td></tr>
                    
                    <tr><td colspan="3" class="section-header">3.3. Контроль герметичности:</td></tr>
                    <tr><td>• газовой части</td><td></td><td></td></tr>
                    <tr><td>• гидравлической группы</td><td></td><td></td></tr>
                    <tr><td>• системы дымоудоления</td><td></td><td></td></tr>
                    
                    <tr><td colspan="3" class="section-header">3.4. Проверка автоматики безопасности:</td></tr>
                    <tr><td>• системы розжига</td><td></td><td></td></tr>
                    <tr><td>• контроля наличия пламени</td><td></td><td></td></tr>
                    <tr><td>• защиты от перегрева</td><td></td><td></td></tr>
                    <tr><td>• системы контроля тяги</td><td></td><td></td></tr>
                    <tr><td>• аварийного отключения подачи газа</td><td></td><td></td></tr>
                    <tr><td>• иное _________________________________</td><td></td><td></td></tr>
                    
                    <tr><td colspan="3" class="section-header">4. Дефектная ведомость</td></tr>
                    <tr><td colspan="3">выявленные неисправности: _________________________________________________</td></tr>
                </tbody>
            </table>
            
            <p>&nbsp;</p>
            <p>Измерения произвёл: ___________________ /_________________</p>
            <p>С объемом проведенных работ согласен, претензий не имею:</p>
            <p>___________________ / ${app.fio}</p>
            <p>С публичной офертой ознакомлен при подаче заявки:</p>
            <p>___________________ / ${app.fio}</p>
            
            <p style="margin-top: 4pt;">Куда удобнее отправить заключение (отметьте нужное):</p>
            <p>[ ] Электронная почта: _______________________________________________________</p>
            <p>[ ] ВКонтакте (наведите камеру телефона на QR-код и напишите нам):</p>
            <img src="embedded_image" width="80" height="80" style="width: 80px; height: 80px; margin-top: 2pt;" alt="QR VK">
            
            <br clear="all" style="page-break-before:always; mso-break-type:page-break" />
            
            <p>Заявка № ${app.id}</p>
            <p class="center"><strong>ЗАКЛЮЧЕНИЕ<br>по результатам технического диагностирования газового оборудования</strong></p>
            
            <table class="header-row" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td class="city">г. Киров</td>
                    <td class="date">"____" ____________ 202&nbsp;__ г.</td>
                </tr>
            </table>
            
            <p>Исходя из условий эксплуатации и представленной документации, на основании заявки заказчика ${app.fio} мной, заместителем главного инженера ООО "Облбытгаз" Филимоновым Алексеем Викторовичем после проведения контроля газового оборудования проведено его техническое диагностирование
            <p>наименование оборудования: ${app.equipment}</p>
            <p>заводской номер: _________________________________________________________</p>
            <p>год выпуска: ____________________________________________________________</p>
            <p>адрес объекта: ${app.address}</p>
            
            <p>Целью технического диагностирования является определение возможности дальнейшей эксплуатации газового оборудования на срок 5 (пять) лет по заявке заказчика.</p>
            <p>Результаты диагностирования:</p>
            <p>В ходе проведения технического диагностирования выполнен визуально-измерительный контроль, проверка герметичности газовой части, гидравлической группы, системы дымоудаления, а также проверка работоспособности автоматики безопасности. Результаты контроля зафиксированы в протоколе визуально-измерительного контроля газового оборудования.</p>
            <p>Заключение:</p>
            <p>На момент технического диагностирования не выявлено факторов, ограничивающих работоспособность газового оборудования.</p>
            <p>Газовое оборудование допускается к дальнейшей эксплуатации сроком на 5 (пять) лет при условии обеспечения ремонта запасными частями надлежащего качества, своевременного проведения технического обслуживания в соответствии с требованиями завода-изготовителя и действующих нормативных документов.</p>
            <p>Дата следующего технического диагностирования: не позднее _______________ 20___ г.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>Диагностирование произвёл:</p>
            <p>_______________ / Филимонов А.В. </p>
            <p>(подпись, м.п.)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Ф.И.О.)</p>
        </div>
        </body>
        </html>
    `;

    const rawMhtml = `MIME-Version: 1.0
Content-Type: multipart/related; boundary="----=_Boundary"

------=_Boundary
Content-Location: document.html
Content-Type: text/html; charset="utf-8"

${htmlContent}

------=_Boundary
Content-Location: embedded_image
Content-Transfer-Encoding: base64
Content-Type: ${mimeType}

${chunkedBase64}
------=_Boundary--`;

    const finalMhtml = rawMhtml.replace(/\n/g, '\r\n');

    const blob = new Blob([finalMhtml], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.href = url;
    link.download = `Заявка_${app.id}.doc`;
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

window.exportToCSV = function(isAuto = false) {
    const applications = getApplications();
    if (applications.length === 0) {
        if (!isAuto) alert("Нет данных для выгрузки.");
        return;
    }

    let csvContent = "Дата создания;Номер;Дата выполнения;Слесарь;ФИО;Телефон;Адрес;Оборудование;Статус диагностики\r\n";

    applications.forEach(app => {
        const status = app.completed ? "Выполнено" : "Не выполнено";
        
        const row = [
            app.date,
            app.id,
            app.workDate || '',
            `"${app.worker || ''}"`,
            `"${app.fio}"`,
            `"${app.phone}"`,
            `"${app.address}"`,
            `"${app.equipment}"`,
            status
        ].join(";");
        
        csvContent += row + "\r\n";
    });

    const blob = new Blob(['\ufeff', csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    
    link.href = url;
    link.download = `Реестр_заявок_${new Date().toLocaleDateString("ru-RU")}.csv`;
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
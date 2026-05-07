export const renderTable = (data) => {
    const table = document.getElementById("tableBody");
    table.innerHTML = data.map((item, i) => `
<tr>
<td>${item.name}</td>
<td>${item.empid}</td>
<td>${item.dept}</td>
<td>
<div class="photo-box">
<img src="${item.photo}">
</div>
</td>
<td>
<button onclick="downloadCard(${i})">Download</button>
</td>
</tr>
`).join("");
};

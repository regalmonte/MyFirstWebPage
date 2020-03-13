

var table1_code = "<table>\n<tr><td>one</td><td>two</td><td>three</td></tr>\n" +
    "<tr><td>four</td><td>five</td><td>six</td></tr>\n" +
    "<tr><td>seven</td><td>eight</td><td>nine</td></tr>\n</table>";

var table2_code = "<table>\n<tr><th>Row 1</th><th>Row 2</th><th>Row 3</th></tr>\n" +
    "<tr><td>one</td><td>two</td><td>three</td></tr>\n" +
    "<tr><td>four</td><td>five</td><td>six</td></tr>\n" +
    "<tr><td>seven</td><td>eight</td><td>nine</td></tr>\n</table>";

var table3_code = "<table border=\"1\">\n" +
    "<tr>\n" +
    "    <th>Child's Name</th><th>Parent's Name</th>\n" +
    "</tr>\n" +
    "<tr><td rowspan=\"2\">Catherine</td><td>Michael McCarthy</td></tr>\n" +
    "<tr>\n" +
    "    <td>Colleen McCarthy</td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "    <td>Maggie</td><td>Sheila McGee</td>\n" +
    "</tr>\n" +
    "<tr><td rowspan=\"2\">Edward</td><td>Catherine Howard</td></tr>\n" +
    "<tr>\n" +
    "    <td>Jeff Howard</td>\n" +
    "</tr>\n" +
    "</table>";

document.getElementById("table1_code").value = table1_code;
document.getElementById("table2_code").value = table2_code;
document.getElementById("table3_code").value = table3_code;

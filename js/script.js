$(document).ready(function() {
    var content = $("#content");
    var table = $("<table></table>").addClass("table py-3 mt-3");
    content.append(table);
    var trRow = $("<tr></tr>");
    var td1 = $("<td></td>").text("Name").addClass("bg-secondary text-white font-weight-bold");
    var td2 = $("<td></td>").text("E-mail").addClass("bg-light text-dark font-weight-bold");
    var td3 = $("<td></td>").text("Message").addClass("bg-info text-white font-weight-bold");
    trRow.append(td1, td2, td3);
    table.append(trRow);

    function getResponse() {
        $.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/comments/?postId=1",
            success: function(response) {
                console.log(response);
                printData(response);
            },
            error: function() {
                console.log("Error");
            }
        });
    }

    getResponse();

    function printData(response) {

        console.log(response);
        var trHtml = "";

        response.forEach(element => {
            trHtml = `
            <tr>
                <td class="bg-secondary text-white">${element.name}</td>
                <td class="bg-light text-dark">${element.email}</td>
                <td class="bg-info text-white">${element.body}</td>
            </tr>    
            `
            trRow.after(trHtml);
        });
    }

});
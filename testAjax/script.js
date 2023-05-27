function loadData() {
  $.ajax({
    url: "data.json",
    dataType: "json",
    success: function (data) {
      // Handle the retrieved data
      var dataContainer = $("#dataContainer");
      dataContainer.empty(); // Clear previous data

      // Loop through the data and create HTML elements to display it
      $.each(data, function (index, item) {
        var listItem = $("<p>").text(item);
        dataContainer.append(listItem);
      });
    },
    error: function () {
      console.log("Error loading data.");
    },
  });
}

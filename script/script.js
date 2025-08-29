    const wishlistCount = document.getElementById("wishlist-count");
     let count = 0;
     const hearts = document.querySelectorAll(".heart-btn");

     hearts.forEach(btn => {
       btn.addEventListener("click", () => {
         count++;
        wishlistCount.textContent = count;
       });
     });  
      
     
     function copyNumber(number) {
      navigator.clipboard.writeText(number).then(() => {
        alert("Number copied: " + number);
      });
    }

      function callNumber(service, number) {
      let callHistory = document.getElementById("callHistory");
      let li = document.createElement("li");
      li.textContent = `${service} - ${number}`;
      callHistory.appendChild(li);

      let now = new Date();
      let time = now.toLocaleTimeString();
      let date = now.toLocaleDateString();

       li.textContent = `${service} - ${number} |🕒 ${time}`;
      historyList.appendChild(li);

      alert("Calling " + service + " (" + number + ")");
    }

     function clearHistory() {
      document.getElementById("callHistory").innerHTML = "";
    }
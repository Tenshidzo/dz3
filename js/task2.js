const printNumberedStrings = (...strings) => {
    document.write("<ol>");
    strings.forEach((str, index) => {
      document.write(`<li>${str}</li>`);
    });
    document.write("</ol>");
  };
printNumberedStrings("Elden Ring", "God of War", "Total War", "Victoria 3", "Horizon", "The Calisto Protocol", "Marvel's Midnight Suns");
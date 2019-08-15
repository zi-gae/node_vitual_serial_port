const SerialPort = require("serialport");

portName = "/dev/ttys002";
sp = new SerialPort(portName);

sp.on("open", () => {
  console.log("Serial Port open");

  sp.on("data", function(data) {
    console.log("value: ", String.fromCharCode(...data));
  });

  sp.write("Hello world", error => {
    error
      ? console.log("Error on write : ", error.message)
      : console.log("입력 완료");
  });
});

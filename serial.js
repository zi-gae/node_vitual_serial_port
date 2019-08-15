const SerialPort = require("serialport");

portName = "/dev/ttys002";
port = new SerialPort(portName, {
  baudRate: 9600
});

port.on("open", () => {
  console.log("Serial Port open");

  port.on("data", data => {
    console.log("value: ", String.fromCharCode(...data));
  });

  port.write("Hello world", error => {
    error
      ? console.log("Error on write : ", error.message)
      : console.log("입력 완료");
  });
});

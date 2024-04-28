#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <SoftwareSerial.h>
#define SDS_RX D5
#define SDS_TX D6
SoftwareSerial sds(SDS_RX, SDS_TX);

const char* ssid = "Loxcbugra";
const char* password = "00000000";

//Your Domain name with URL path or IP address with path
const char* serverName = "http://articha.tplinkdns.com:8000/api/add/device-data";

// the following variables are unsigned longs because the time, measured in
// milliseconds, will quickly become a bigger number than can be stored in an int.
unsigned long lastTime = 0;
// Timer set to 10 minutes (600000)
//unsigned long timerDelay = 600000;
// Set timer to 5 seconds (5000)
unsigned long timerDelay = 300000;

float pm2_5;
float pm10;
String a;
String b;
String c = "1";
String d = "4";
void setup() {
  Serial.begin(115200);
  delay(100);  // Short delay after initializing Serial
  Serial.println("Initializing SDS011 Air Quality Monitor...");

  // Initialize SoftwareSerial communication with SDS011
  sds.begin(9600);
  Serial.begin(115200);                                 // Скорость передачи 115200
  bool status;
  Serial.begin(115200);

  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
 
  Serial.println("Timer set to 5 seconds (timerDelay variable), it will take 5 seconds before publishing the first reading.");
}

void loop() {
  while (sds.available() && sds.read() != 0xAA) { }

  if (sds.available()) {
    Serial.println("Data available from SDS011...");
  }

  // Once we have the starting byte, attempt to read the next 9 bytes
  byte buffer[10];
  buffer[0] = 0xAA;  // The starting byte we already found
  if (sds.available() >= 9) {
    sds.readBytes(&buffer[1], 9);

    // Check if the last byte is the correct ending byte
    if (buffer[9] == 0xAB) {
      int pm25int = (buffer[3] << 8) | buffer[2];
      int pm10int = (buffer[5] << 8) | buffer[4];
      pm2_5 = pm25int / 10.0;
      pm10 = pm10int / 10.0;

// Print the values
      Serial.print("PM2.5: ");
      Serial.print(pm2_5, 2);  // 2 decimal places
      Serial.print(" µg/m³   ");
      Serial.print("PM10: ");
      Serial.print(pm10, 2);  // 2 decimal places
      Serial.println(" µg/m³   ");
      b = String(pm10);
      a = String(pm2_5);
    } else {
      Serial.println("Invalid ending byte from SDS011.");
    }
  } else {
    Serial.println("Not enough data from SDS011.");
  }
  delay(1000);
  //Send an HTTP POST request every 10 minutes
  if ((millis() - lastTime) > timerDelay) {
    //Check WiFi connection status
    if(WiFi.status()== WL_CONNECTED){
      WiFiClient client;
      HTTPClient http;
      
      // Your Domain name with URL path or IP address with path
      http.begin(client, serverName);
  
      // If you need Node-RED/server authentication, insert user and password below
      //http.setAuthorization("REPLACE_WITH_SERVER_USERNAME", "REPLACE_WITH_SERVER_PASSWORD");
  
      // Specify content-type header
      http.addHeader("Content-Type", "application/x-www-form-urlencoded");
      // Data to send with HTTP POST
      String httpRequestData = "id: " + c + "PM2.5: " + a + "PM10: " + b;
    
                 
      // Send HTTP POST request
      int httpResponseCode = http.PUT(httpRequestData);
      
      // If you need an HTTP request with a content type: application/json, use the following:
      //http.addHeader("Content-Type", "application/json");
      //int httpResponseCode = http.POST("{\"api_key\":\"tPmAT5Ab3j7F9\",\"sensor\":\"BME280\",\"value1\":\"24.25\",\"value2\":\"49.54\",\"value3\":\"1005.14\"}");

      // If you need an HTTP request with a content type: text/plain
      //http.addHeader("Content-Type", "text/plain");
      //int httpResponseCode = http.POST("Hello, World!");
     
      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);
        
      // Free resources
      http.end();
    }
    else {
      Serial.println("WiFi Disconnected");
    }
    lastTime = millis();
  }
}
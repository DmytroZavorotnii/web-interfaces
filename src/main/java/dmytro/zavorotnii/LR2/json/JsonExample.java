package dmytro.zavorotnii.LR2.json;

import org.json.JSONObject;

public class JsonExample {


    public static void useJson() {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("name", "John");
        jsonObject.put("age", 30);
        jsonObject.put("city", "New York");

        String jsonString = jsonObject.toString();
        System.out.println("JSON String: " + jsonString);

        String jsonInput = "{\"name\":\"Alice\",\"age\":25,\"city\":\"Paris\"}";
        JSONObject jsonObjFromString = new JSONObject(jsonInput);
        System.out.println("Name: " + jsonObjFromString.getString("name"));
        System.out.println("Age: " + jsonObjFromString.getInt("age"));
        System.out.println("City: " + jsonObjFromString.getString("city"));
    }
}

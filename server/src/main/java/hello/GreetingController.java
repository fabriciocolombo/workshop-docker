package hello;

import java.util.concurrent.atomic.AtomicLong;
import javax.xml.ws.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";

    @RequestMapping("/api/greeting/{name}")
    public ResponseEntity<String> greeting(@PathVariable(value="name") String name) {
        return ResponseEntity.ok(String.format(template, name));
    }
}

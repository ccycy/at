package test;
import java.util.HashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * <code>{@link test}</code>
 * <p>
 * description: test
 * </p>
 *
 * @author chenchunagyuan on 2018/11/3 10:06
 */
@RestController
public class test {

    @RequestMapping("/test")
    public Map test(){
        Map<String,String>map=new HashMap<>();
        map.put("1","2");
        return map;

    }
}

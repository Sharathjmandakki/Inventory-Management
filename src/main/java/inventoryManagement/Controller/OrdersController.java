package inventoryManagement.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import inventoryManagement.Enitys.Orders;
import inventoryManagement.Services.OrdersServices;
@CrossOrigin("*")
@RestController
@RequestMapping
public class OrdersController {
	@Autowired
	OrdersServices os;
	@GetMapping("allOrders")
	public List<Orders> allOrders() {
		// TODO Auto-generated method stub
		return os.allOrders();
	}
	@GetMapping("Order")
	public List<Orders> findByName(@RequestBody Orders o) { 
		return os.findByName(o.getUser());
	}
	@PostMapping("Orderbydate")
	public List<Orders> findByDate(@RequestBody Orders o) {
		return os.findOrder(o.getDate());
	}
}

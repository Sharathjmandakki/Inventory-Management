package inventoryManagement.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import inventoryManagement.Enitys.Cart;
import inventoryManagement.Enitys.Items;
import inventoryManagement.Services.CartServices;
import inventoryManagement.Services.Interfaces.CartHelper;

@RestController
@CrossOrigin("*")
@RequestMapping
public class CartController {
	@Autowired
	CartServices cs;
	@PostMapping("addToCart")
	public String addToCart(@RequestBody CartHelper c) {
		// TODO Auto-generated method stub
		return cs.addToCart(c.getId(),c.getQty(), c.getUser());
	}

	@PostMapping("deleteFromCart")
	public void deleteFromCart(@RequestBody CartHelper c) {
		// TODO Auto-generated method stub
		cs.deleteFromCart(c.getId(),c.getQty(), c.getUser());
	}
	@PostMapping("viewCart")
	public Cart viewCart(@RequestBody CartHelper c) {
		// TODO Auto-generated method stub
		return cs.viewCart(c.getUser());
//		return (ct==null)?null:ct;
	}
	@PostMapping("billIt")
	public String billIt(@RequestBody Cart c) {
		return cs.billIt(c);
	}
	@PostMapping("clear")
	public void clearAll(@RequestBody Cart c) {
		cs.clearAll(c);
	}
}

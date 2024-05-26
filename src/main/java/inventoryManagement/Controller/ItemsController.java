package inventoryManagement.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import inventoryManagement.Enitys.Items;
import inventoryManagement.Services.ItemServices;
@CrossOrigin("*")
@RestController
@RequestMapping
public class ItemsController {
	@Autowired
	ItemServices is;
	@PostMapping("addItem")
	public String addItem(@RequestBody Items i) {
		return is.addItem(i);
	}

	@PostMapping("updateItem")
	public String updateItem(@RequestBody Items i) {
		return is.updateItem(i);
	}

	@PostMapping("deleteItem")
	public String deleteItem(@RequestBody Items i) {
		return is.deleteItem(i);
	}
	@GetMapping("allItem")
	public List<Items> allItems() {
		// TODO Auto-generated method stub
		return is.allItems();
	}

	@PostMapping("getItem")
	public List<Items> getItem(@RequestBody Items i) {
		return is.getItem(i.getName());
	}
	
	
	public Items getItemByName(String name) {
		return is.getItemByName(name);
	}

	public Items getItemByColor(String color) {
		return is.getItemByColor(color);
	}

	public Items getItemByBrand(String brand) {
		return is.getItemByBrand(brand);
	}
}

package inventoryManagement.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import inventoryManagement.Enitys.Items;
import inventoryManagement.Repositories.ItemRepo;
import inventoryManagement.Services.Interfaces.*;

@Service
public class ItemServices implements ItemInterface {
	@Autowired
	ItemRepo ir;

	@Override
	public String addItem(Items i) {
		// TODO Auto-generated method stub
		if(ir.findByName(i.getName())==null) {
			ir.save(i);
			return "Added";
		}else {
			return "Item Exist";
		}
	}

	@Override
	public String updateItem(Items i) {
		// TODO Auto-generated method stub
		Items itm = ir.findById(i.getId()).get();
		if (itm != null) {
			itm.setQty(i.getQty());;
			ir.save(itm);
			return "Updated";
		} else {
			return "Not updated";
		}
	}

	@Override
	public String deleteItem(Items i) {
		// TODO Auto-generated method stub
		if (i != null) {
			ir.deleteById(i.getId());
			return "Deleted";
		}
		return "not deleted";
	}

	@Override
	public List<Items> allItems() {
		// TODO Auto-generated method stub
		return ir.findAll();
	}

//	@SuppressWarnings("null")
	@Override
	public List<Items> getItem(String name) {
		// TODO Auto-generated method stub
		List<Items> itms = new ArrayList<Items>();
		Items i;
		try {
			 i=ir.findById(Long.parseLong(name)).get();
		} catch (Exception e) {
			i=ir.findByName(name);
		}
		if(i!=null) {
			itms.add(i);
		}
		if(itms.size()>=1) {
			return itms;
		}else {
			return null;
		}
	}

	@Override
	public Items getItemByName(String name) {
		// TODO Auto-generated method stub
		return ir.findByName(name);
	}

	@Override
	public Items getItemByColor(String color) {
		// TODO Auto-generated method stub
		return ir.findByColor(color);
	}

	@Override
	public Items getItemByBrand(String brand) {
		// TODO Auto-generated method stub
		return ir.findByBrand(brand);
	}

}

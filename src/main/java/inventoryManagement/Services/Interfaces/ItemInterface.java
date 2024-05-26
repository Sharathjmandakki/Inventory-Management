package inventoryManagement.Services.Interfaces;

import java.util.List;

import inventoryManagement.Enitys.Items;

public interface ItemInterface {
	String addItem(Items i);
	String updateItem(Items i);
	String deleteItem(Items i);
	List<Items> allItems();
	List<Items> getItem(String name);
	Items getItemByBrand(String brand);
	Items getItemByName(String name);
	Items getItemByColor(String color);

}

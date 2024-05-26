package inventoryManagement.Services.Interfaces;

import java.util.List;

import inventoryManagement.Enitys.Cart;
import inventoryManagement.Enitys.Items;
import inventoryManagement.Enitys.Orders;

public interface OrderInterface {
//	String addToOrders(List<Items> i);
	void addToOrders(Cart c);
	List<Orders> allOrders();
	List<Orders> findByName(String user);
}

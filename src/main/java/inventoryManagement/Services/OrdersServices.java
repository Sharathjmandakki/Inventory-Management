package inventoryManagement.Services;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import inventoryManagement.Enitys.Cart;
import inventoryManagement.Enitys.CartItem;
import inventoryManagement.Enitys.Items;
import inventoryManagement.Enitys.Orders;
import inventoryManagement.Repositories.ItemRepo;
import inventoryManagement.Repositories.OrderRepo;
import inventoryManagement.Services.Interfaces.*;

//import 
@Service
public class OrdersServices implements OrderInterface {
	@Autowired
	OrderRepo odr;
	@Autowired
	ItemRepo ir;

	@Override
	public void addToOrders(Cart c) {
		ArrayList<CartItem> al=new ArrayList<>();
		al.addAll(c.getItems());
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy 'at' HH:mm");
        String date = LocalDateTime.now().format(formatter);
		Orders o=new Orders(al,c.getTotal(),c.getUser(),date,c.getCostomer());
		odr.save(o);
	}

	@Override
	public List<Orders> allOrders() {
		// TODO Auto-generated method stub
		return odr.findAll();
	}

	@Override
	public List<Orders> findByName(String user) { 
		return odr.findByUser(user);
	}
	
	public List<Orders> findOrder(String date){
		ArrayList<Orders> ods=new ArrayList<>();
		try {
			List<Orders> o=odr.findByCostomer(date);
			if(o!=null) {
				ods.addAll(o);
			}
			o=odr.findByDate(date);
			if(o!=null) {
				ods.addAll(o);
			}
			Orders odrs=odr.findById(Long.parseLong(date)).get();
			if(odrs!=null) {
				ods.add(odrs);
			}
			return ods;
		}catch(Exception e) {
			return ods;
		}
	}
}
